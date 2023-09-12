const { Path, Filestream } = require('filestream');

let path = new Path('src');
path = path.join('commands');

const example = new Filestream(path.join('example.js'));

path.listDir().forEach(file => {
    file.write('hello world');
});
