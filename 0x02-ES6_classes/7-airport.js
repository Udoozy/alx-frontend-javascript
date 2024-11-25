export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStriingTag]() {
    return `${this._code}`;
  }
}
