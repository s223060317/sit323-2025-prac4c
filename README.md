# SIT323 Task 4.2C – Enhanced Calculator Microservice
This project is a Node.js and Express-based microservice developed for SIT323/SIT737 Task 4.2C. The goal was to extend a basic calculator microservice by implementing additional arithmetic operations. I followed the option to add new functionality specifically exponentiation, square root, and modulo and exposed these features as POST API endpoints.

## What I Implemented
I chose Option A from the task sheet:  
Add Additional Arithmetic Operations
These were the new operations:
- Exponentiation ('/power')
- Square Root ('/sqrt')
- Modulo ('/mod')

Each operation has its own POST endpoint and includes input validation and proper error handling.

## How I Built It

1. Created a new folder called sit323-2025-prac4c
2. Initialized a Node.js project using npm init -y
3. Installed Express with npm install express
4. Created two key files: index.js and routes/calculator.js
5. Defined all three operations inside routes/calculator.js
6. Connected the routes in 'index.js' using 'app.use('/api', calculatorRoutes)'
7. Ran the server using 'node index.js'

## API Endpoints

### POST '/api/power'
Input:
{ "base": 2, "exponent": 3 }
Output:
{ "result": 8 }

### POST '/api/sqrt'
Input:
{ "number": 16 }
Output:
{ "result": 4 }

### POST '/api/mod'
Input:
{ "dividend": 10, "divisor": 3 }
Output:
{ "result": 1 }

## How I Tested It

I tested all endpoints using Invoke-RestMethod.
These returned the correct values.

GitHub:  
https://github.com/s223060317/sit323-2025-prac4c

