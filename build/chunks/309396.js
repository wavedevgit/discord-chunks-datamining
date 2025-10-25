/** Chunk was on web.js **/
/** chunk id: 309396, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.stringFormatter = exports.StringBuilder = true, exports.formatToPlainString = a;
let Chunk960814 = require("./960814.js");
class i extends Chunk960814.FormatBuilder {
  constructor() {
    super(...arguments), this.result = ""
  }
  pushRichTextTag(e, t, n) {
    for (let e of t) this.result += e
  }
  pushLiteralText(e) {
    this.result += e
  }
  pushObject(e) {
    null != e && "toString" in e && (this.result += e.toString())
  }
  finish() {
    return [this.result]
  }
}

function a(e, t) {
  return "string" == typeof e ? e : this.bindFormatValues(i, e, t)[0]
}
exports.StringBuilder = i, exports.stringFormatter = {
  format: a,
  builder: i
}