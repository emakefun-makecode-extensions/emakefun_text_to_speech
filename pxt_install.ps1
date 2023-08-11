while ($true) {
    pxt install
    if ($LASTEXITCODE -eq 0) {
        break;
    }
}