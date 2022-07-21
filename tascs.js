const { stdin, stdout } = process;

stdout.write('Введите число\n')
stdin.on('data', data => {
    const answer = +data.toString().trim();
    if (isNaN(answer)) {
        stdout.write('Введите число!');
    } else if(answer < 0){ 
        stdout.write('-1'); 
    } else if (answer === 0) {
        stdout.write('0'); 
    } else stdout.write('1'); 
    process.exit();
});
