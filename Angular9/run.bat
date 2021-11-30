@ECHO OFF
CD /D "C:\Users\usuario\Desktop\Cod3r\Angular9\backend"
start cmd.exe /k "npm start"
CD /D "C:\Users\usuario\Desktop\Cod3r\Angular9\frontend"
start cmd.exe /k "ng serve --o"
