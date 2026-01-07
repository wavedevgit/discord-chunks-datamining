/** Chunk was on 91973 **/
/** chunk id: 752705, original params: t,e,a (module,exports,require) **/
Object.defineProperty(exports, "__esModule", {
  value: true
});
let Chunk139761 = require("./139761.js");
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
    return (0, i.escape)(this.data.name)
  }
}