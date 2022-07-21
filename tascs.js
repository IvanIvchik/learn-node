const { stdin, stdout } = process;

stdout.write('Официальное название JavaScript?\n')
stdin.on('data', data => {
    const answer = data.toString().trim();
    if (answer === 'ECMAScript') {
        stdout.write('Всё верно!');
    } else { stdout.write('Не знаете? ECMAScript!'); }
    process.exit();
});
