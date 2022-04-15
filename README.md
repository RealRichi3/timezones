# Timezones
 
This is a webpage i'm building, the aim is to show the current time in different time zones. It also allows you select a specific timezone


## Tools and Technologies Used

- JavaScript

- HTML

- CSS

- visual studio code


## Getting Started

Instructions on setting up your project locally.


### Prerequisites

Install Node.js, countries-and-timezones package, VScode
 

### Installation for Node.js
-  Go to  https://nodejs.org/en/download/. Click on the Windows Installer button to download the latest version
-  After download, run the software
-  You will be welcomed to the Node.js Setup Wizard -- click NEXT
-  Accept License agreement then click Next if you agree to the terms and condition
-  Select the PATH to install Node.js in Windows… You can leave it as Default. Click next.
-  Follow the onscreen instructions in succeeding steps to install.

#### To verify installation
-  Open a command prompt and enter the following
```
node -v
```
The system should display the Node.js version installed on your system.


### Installation for countries-and-timezones package
#### Node JS
Install with npm
```
npm install --save countries-and-timezones
```

#### Browser
Add the following script to your project (only ~9kb);
```
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/gh/manuelmhtr/countries-and-timezones@latest/dist/index.min.js" type="text/javascript"></script>

<!-- Or specify a version -->
<script src="https://cdn.jsdelivr.net/gh/manuelmhtr/countries-and-timezones@v3.3.0/dist/index.min.js" type="text/javascript"></script>

<!-- This will export a variable named "ct": -->
<script type="text/javascript">
  var data = ct.getCountry('MX');
  console.log(data);
</script>
```

#

For more info on the Usage or API refer to the guide [here](https://github.com/manuelmhtr/countries-and-timezones)


### Installation for VSCODE
- Download the Setup File https://code.visualstudio.com/
- Run the VS code Setup Wizard 
- Accept the License Agreement
- Select the Installation Location
- Placing the Shortcuts
- Selecting Additional Tasks -  Finish and Launch

