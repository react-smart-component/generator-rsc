/**
 * @since 2017-07-11 20:09
 * @author chenyiqin
 */

const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

const camelCase = function(name) {
    return name.replace(/-\w/g, function (m) {
        return m.charAt(1).toUpperCase();
    })
}

module.exports = class extends Generator {
    // 构造
    constructor(args, opts) {
        super(args, opts);

        // console.log('opts = ', opts);

        this.option('version', {
            desc: 'version of package',
            type: String,
            defaults: '0.0.1',
        });

        this.option('author', {
            desc: 'author of package',
            type: String,
            default: '',
        });

        this.option('pkgName', {
            desc: 'name of package',
            type: String,
            default: '',
        });
    }

    write() {
        this._copy();
        this._write();
        this._mkdir();
    }

    _copy() {
        const folders = [
            './src',
        ];
        folders.forEach((folder) => {
            this.fs.copy(
                this.templatePath(folder),
                this.destinationPath(folder)
            );
        });
    }

    _write() {
        const files = [
            'CHANGELOG.md',
            'README.md',
            'gitignore',
            'index.js',
            'npmrc',
            'travis.yml',
            'package.json',
        ];
        files.forEach((file) => {
            this.fs.copy(
                this.templatePath(file),
                this.destinationPath(file)
            );
        });
    }

    _mkdir() {
        mkdirp('__tests__');
    }

    end() {
        this.log('✨ done!');
        process.exit(-1);
    }
};
