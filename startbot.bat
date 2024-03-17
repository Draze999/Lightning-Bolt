@echo off
for /f "delims=" %%E in ('forfiles /p "%~dp0." /m "%~nx0" /c "cmd /c echo(0x1B"') do (
    set "ESC=%%E"
)
set "BLUE=%ESC%[96m"
set "YEL=%ESC%[93m"
set "RED=%ESC%[91m"
set "ENDC=%ESC%[0m"
echo %YEL%
echo.
echo                                                 ========================
echo                                                 This is Lightning Bo(l)t
echo                                                 ========================
echo.
:while1
echo %BLUE%
node main.js
echo %YEL%
if %ERRORLEVEL%==11 (
echo                                                       Reloading...
goto :while1
) else (
echo %RED%
echo Error obtained : %ERRORLEVEL%
)
echo %ENDC%
pause
