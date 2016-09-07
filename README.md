# AlarmClock

A set of different alarm clocks that use Node.js and Electron.  The command line app uses Node.js to run.  The GUI app made using Electron and Node.js is still a work in progress, but is functional in what it's supposed to do, and was an attempt to create a user friendly desktop application.

#####Cmd Application Details
The Cmd Line Application requires the user to update the source code to set the alarm.  When run, a command prompt will be opened and upon the alarm time being reached, the program will open a file that you specify in the program.  The batch file that's included runs this file using Node.js.

#####GUI Application Details
The GUI application needs to be packaged using electron-packager, installed using npm.  The application won't work as expected if it is run without packaging, since the file pathways had to be changed for packaging to work correctly.  The command used to package this is:
```
electron-packager C:\path_to_folder_where_the_source_code_is test-App --platform=win32 --arch=all --version=1.0.0 --out=SomeOutputName
```
Keep in mind that you can streamline this build process to decrease file size.
Inside the program you can select your own video file, using an Mp4, or other web format, to run when the wake up time is reached.  Unfortunately this program does not support other formats, since that would involve building a flash player instead of using HTML5's built-in video playback methods.