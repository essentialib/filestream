/**
 * @property {String} path
 * @returns {Path}
 */
function Path(path) {
    this.path = path;
}

Path = Object.assign(Path, {

})

Path.prototype = {
    join(...paths) {
        return new Filestream();
    },

    /**
     *
     * @return {Filestream[]}
     */
    listDir() {
        return [new Filestream(), new Filestream(), new Filestream()];
    }
}

/**
 * @property {String} path
 * @returns {Filestream}
 */
function Filestream(path) {
    this.path = path;
}

Filestream = Object.assign(Filestream, {

})

Filestream.prototype = {

}

module.exports = { Path, Filestream };