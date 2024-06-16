how to run the backend with npm?

.env setup:
CORS_ORIGIN:(explained later in the file)
PORT:3000
DB="mongodb+srv://Srinjoy:EvenSemesterProjectCC@zcoder-evensemesterproj.fg9oftm.mongodb.net/ZCoder"
ACCESS_TOKEN_SECRET=f3b256e3c8e6f11c71e677cedf655cf6c11c3f3a5cf7b232c34ce8ced7a3e889567fbhjvbn65789ghbndfcvxzsolk8706532sxcfg
REFRESH_TOKEN_SECRET=edrftgyhjokm456784b256e3c8e6f11c71e677cedf655cf6c11c3f3a5cf7b232c34ce8ced7a3fghjgyhj6789fghjgbh7y890789hgvfghj78567fghjgvbh
REFRESH_TOKEN_EXPIRY=30d
ACCESS_TOKEN_EXPIRY=1d
EMAIL_PASSWORD='password for that email'
EMAIL='any email of your choice for nodemailer'

In Terminal:
npm start for the backend folder. Server listens on localhost:3000
then npm start for the frontend folder. Server should start on some other port(say 3001). Copy that URL and paste
it in CORS_ORIGIN in .env

If you make any requests to CodeEditor, then make sure that your local has the language installed
Pyhton-pip
c++-MingiW64
Java-JDK