param(
    [Parameter(Mandatory=$true)]
    [string]$FilePath,
    
    [Parameter(Mandatory=$true)]
    [string]$RegexPattern,
    
    [string]$OutputFile = $null,
    
    [switch]$CaseSensitive = $false,
    
    [switch]$ShowLineNumbers = $false,
    
    [switch]$UniqueOnly = $false
)

# Check if file exists
if (!(Test-Path -Path $FilePath)) {
    Write-Error "File not found: $FilePath"
    exit 1
}

try {
    # Read file content
    $content = Get-Content -Path $FilePath -Raw
    
    # Set regex options
    $regexOptions = [System.Text.RegularExpressions.RegexOptions]::None
    if (!$CaseSensitive) {
        $regexOptions = [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    }
    
    # Create regex object
    $regex = New-Object System.Text.RegularExpressions.Regex($RegexPattern, $regexOptions)
    
    # Find all matches
    $matches = $regex.Matches($content)
    
    if ($matches.Count -eq 0) {
        Write-Host "No matches found for pattern: $RegexPattern" -ForegroundColor Yellow
        return
    }
    
    # Collect results
    $results = @()
    
    if ($ShowLineNumbers) {
        $lines = Get-Content -Path $FilePath
        foreach ($match in $matches) {
            # Find line number for each match
            $beforeMatch = $content.Substring(0, $match.Index)
            $lineNumber = ($beforeMatch -split "`n").Count
            
            $results += [PSCustomObject]@{
                LineNumber = $lineNumber
                Match = $match.Value
                Index = $match.Index
                Length = $match.Length
            }
        }
    } else {
        foreach ($match in $matches) {
            $results += $match.Value
        }
    }
    
    # Remove duplicates if requested
    if ($UniqueOnly) {
        if ($ShowLineNumbers) {
            $results = $results | Sort-Object Match -Unique
        } else {
            $results = $results | Sort-Object -Unique
        }
    }
    
    # Display results
    Write-Host "`nFound $($matches.Count) matches for pattern: $RegexPattern" -ForegroundColor Green
    Write-Host "File: $FilePath`n" -ForegroundColor Cyan
    
    if ($ShowLineNumbers) {
        $results | Format-Table -Property LineNumber, Match, Index, Length -AutoSize
    } else {
        $results | ForEach-Object { Write-Host $_ }
    }
    
    # Save to output file if specified
    if ($OutputFile) {
        if ($ShowLineNumbers) {
            $results | ConvertTo-Csv -NoTypeInformation | Out-File -FilePath $OutputFile
            Write-Host "`nResults saved to: $OutputFile" -ForegroundColor Green
        } else {
            $results | Out-File -FilePath $OutputFile
            Write-Host "`nResults saved to: $OutputFile" -ForegroundColor Green
        }
    }
    
    # Summary
    Write-Host "`nSummary:" -ForegroundColor Cyan
    Write-Host "Total matches: $($matches.Count)"
    if ($UniqueOnly) {
        Write-Host "Unique matches: $($results.Count)"
    }
    
} catch {
    Write-Error "Error processing file: $($_.Exception.Message)"
    exit 1
}
