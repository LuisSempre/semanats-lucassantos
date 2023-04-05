class Codename {
  constructor (parser) {
    this._parser = parser
    return this
  }

  parse (version) {
    this._version = version || '0.0.0'
    const [major, minor, patch] = this._version.split('.')
    this._major = (this._parser.major) ? (this._parser.major[major] || major) : major
    this._minor = (this._parser.minor) ? (this._parser.minor[minor] || minor) : minor
    this._patch = (this._parser.patch) ? (this._parser.patch[patch] || patch) : patch

    return this
  }

  get patch () {
    return this._patch
  }

  get minor () {
    return this._minor
  }

  get major () {
    return this._major
  }

  get codename () {
    return `${this._major}.${this._minor}.${this._patch}`
  }

  get codenameText () {
    return `V${this._version} - ${this._major}`
  }
}

module.exports = Codename
