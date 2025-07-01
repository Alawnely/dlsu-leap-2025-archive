# Create events directory if it doesn't exist
$eventsDir = "d:\Downloads\dlsucso-leap.com\events"
if (!(Test-Path $eventsDir)) {
    New-Item -ItemType Directory -Path $eventsDir -Force
}

# Loop through events 5 to 192
for ($eventNumber = 5; $eventNumber -le 192; $eventNumber++) {
    try {
        Write-Host "Fetching media for event $eventNumber..."
        
        # Create event-specific directory
        $eventDir = Join-Path $eventsDir $eventNumber
        if (!(Test-Path $eventDir)) {
            New-Item -ItemType Directory -Path $eventDir -Force
        }
        
        # API URL
        $apiUrl = "https://api.dlsucso-leap.com/events/$eventNumber/media"
        
        # Fetch data from API
        $response = Invoke-RestMethod -Uri $apiUrl -Method Get -ContentType "application/json"
        
        # Convert to JSON and save to file
        $jsonOutput = $response | ConvertTo-Json -Depth 10
        $outputPath = Join-Path $eventDir "media.json"
        $jsonOutput | Out-File -FilePath $outputPath -Encoding UTF8
        
        Write-Host "✓ Saved media data for event $eventNumber to $outputPath"
        
        # Small delay to avoid overwhelming the API
        Start-Sleep -Milliseconds 100
    }
    catch {
        Write-Host "✗ Error fetching event $eventNumber`: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Completed fetching media data for events 5-192"
