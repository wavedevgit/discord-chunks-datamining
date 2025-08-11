/** Chunk was on 34261 **/
/** chunk id: 682317, original params: t,e,a (module,exports,require) **/
Object.defineProperty(exports, "__esModule", {
  value: true
});
let Chunk141716 = require("./141716.js");
exports.default = class {
  constructor(t) {
    this.data = {
      name: null
    }, true !== t.name && this.name(t.name)
  }
  name(t) {
    return true === t ? this.data.name : (this.data.name = t || null, this)
  }
  toJSON() {
    return Object.assign({}, this.data)
  }
  toString() {
    if (!this.data.name) throw Error("No value for `name` in ICalCategory given!");
    return (0, Chunk141716.escape)(this.data.name)
  }
}