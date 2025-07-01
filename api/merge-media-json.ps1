# Initialize array to store all media data
$allMediaData = @()

# Get all event directories that match the pattern events/<number>
$eventDirs = Get-ChildItem -Directory | Where-Object { $_.Name -match '^\d+$' }

foreach ($eventDir in $eventDirs) {
    $mediaJsonPath = Join-Path $eventDir.FullName "media.json"
    
    # Check if media.json exists in this event directory
    if (Test-Path $mediaJsonPath) {
        try {
            # Read and parse the JSON file
            $jsonContent = Get-Content $mediaJsonPath -Raw | ConvertFrom-Json
            
            # Add the content to our array
            # If the JSON file contains an array, add each item
            if ($jsonContent -is [array]) {
                $allMediaData += $jsonContent
            } else {
                # If it's a single object, add it directly
                $allMediaData += $jsonContent
            }
            
            Write-Host "Processed: $mediaJsonPath"
        }
        catch {
            Write-Warning "Failed to process $mediaJsonPath : $($_.Exception.Message)"
        }
    }
}

# Convert the merged array back to JSON and output
$mergedJson = $allMediaData | ConvertTo-Json -Depth 10

# Output to console
$mergedJson

# Optionally save to file
$outputPath = "merged-media.json"
$mergedJson | Out-File -FilePath $outputPath -Encoding UTF8
Write-Host "Merged data saved to: $outputPath"
Write-Host "Total items merged: $($allMediaData.Count)"
