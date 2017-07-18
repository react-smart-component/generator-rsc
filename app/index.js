/**
 * @since 2017-07-11 20:09
 * @author chenyiqin
 */

const Generator = require('yeoman-generator');
const Path = require('path');
const fs = require('fs');

const camelCase = function(name) {
    return name.replace(/-\w/g, function (m) {
        return m.charAt(1).toUpperCase();
    })
}

module.exports = class extends Generator {
    // 构造
    constructor(args, opts) {
        super(args, opts);
        this.option('version', {type: String, defaults: '1.0.0'});
        this.option('author', {type: String, defaults: ''});
        this.option('pkg', {type: String, defaults: ''});
        this.option('repo', {type: String, defaults: ''});
    }

    welcome() {
        this.appname = this.appname.replace(/\s/g, '-');
        this.AppName = `${this.appname.charAt(0).toUpperCase()}${camelCase(this.appname.slice(1))}`;
        this.log(`welcome to generator-rsc: ${this.appname}`);
        this.repo = this.options.repo || `https://github.com/react-rsc-component/${this.appname}`;
        this.version = this.options.version;
        this.author = this.options.author;
        this.packageName = this.options.pkg || ('rsc-' + this.appname);
    }

    write() {
        this.fs.copy(
            this.templatePath(''),
            this.destinationPath('')
        );
    }

    end() {
        this.log('✨ done!');
        process.exit(-1);
    }
};
