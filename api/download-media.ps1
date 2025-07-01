# Read URLs from a text file (one URL per line)
$urlsFile = "urls.txt"
if (!(Test-Path -Path $urlsFile)) {
    Write-Error "File not found: $urlsFile"
    exit 1
}

$urls = Get-Content -Path $urlsFile | Where-Object { $_.Trim() -ne "" }

# Create contentful directory if it doesn't exist
$contentfulDir = "contentful"
if (!(Test-Path -Path $contentfulDir)) {
    New-Item -ItemType Directory -Path $contentfulDir
    Write-Host "Created directory: $contentfulDir"
}

# Initialize counters
$totalFiles = $urls.Count
$currentFile = 0
$successCount = 0
$failCount = 0

Write-Host "Starting download of $($urls.Count) files..."

# Loop through each URL
foreach ($url in $urls) {
    $currentFile++
    
    if ($url) {
        try {
            # Extract the path after the CDN domain and replace with contentful
            $urlPath = $url -replace '^//[^/]*\.ctfassets\.net/g6asn9b0kovu', 'contentful'
            
            # Extract just the filename for display
            $uri = [System.Uri]('https:' + $url)
            $filename = [System.IO.Path]::GetFileName($uri.LocalPath)
            
            # If filename is empty or invalid, generate one
            if ([string]::IsNullOrWhiteSpace($filename) -or $filename -eq "/") {
                $filename = "file_$currentFile" + [System.IO.Path]::GetExtension($uri.LocalPath)
            }
            
            # Create directory structure if it doesn't exist
            $outputDir = [System.IO.Path]::GetDirectoryName($urlPath)
            if (!(Test-Path -Path $outputDir)) {
                New-Item -ItemType Directory -Path $outputDir -Force
            }
            
            Write-Host "[$currentFile/$($urls.Count)] Downloading: $filename"
            
            # Download the file
            Invoke-WebRequest -Uri ('https:' + $url) -OutFile $urlPath -UseBasicParsing
            
            $successCount++
            Write-Host "  ✓ Success: $urlPath" -ForegroundColor Green
        }
        catch {
            $failCount++
            Write-Host "  ✗ Failed: $url - $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    else {
        $failCount++
        Write-Host "  ✗ Skipped: Empty URL at line $currentFile" -ForegroundColor Yellow
    }
}

# Summary
Write-Host "`nDownload Summary:" -ForegroundColor Cyan
Write-Host "Total files: $($urls.Count)"
Write-Host "Successful: $successCount" -ForegroundColor Green
Write-Host "Failed: $failCount" -ForegroundColor Red
Write-Host "Files saved to: $contentfulDir"
