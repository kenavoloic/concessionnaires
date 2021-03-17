const patron = corps => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=7">    
    <title></title>
</head>
<body>
    <div id="racine">${corps}</div>
</body>
</html>
`;
};
//default export patron;
module.exports = patron;

