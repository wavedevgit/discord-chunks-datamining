/** Chunk was on web.js **/
/** chunk id: 28372, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.InternalIntlMessage = true;
let Chunk743601 = require("./743601.js");
class i {
  constructor(e, t) {
    this.locale = t, this.ast = (0, r.isCompressedAst)(e) ? e : (0, r.compressFormatJsToAst)(e)
  }
  reserialize() {
    if ("string" == typeof this.ast) return this.ast;
    let e = {
      value: ""
    };
    return o(this.ast, module), module.value
  }
}

function o(e, t) {
  for (let n of e) {
    if ("string" == typeof n) {
      t.value += n;
      continue
    }
    switch (n[0]) {
      case r.FormatJsNodeType.Argument:
        t.value += "{" + n[1] + "}";
        break;
      case r.FormatJsNodeType.Date:
        t.value += "{" + n[1] + ", date", null != n[2] && (t.value += ", " + n[2]), t.value += "}";
        break;
      case r.FormatJsNodeType.Time:
        t.value += "{" + n[1] + ", time", null != n[2] && (t.value += ", " + n[2]), t.value += "}";
        break;
      case r.FormatJsNodeType.Number:
        t.value += "{" + n[1] + ", number", null != n[2] && (t.value += ", " + n[2]), t.value += "}";
        break;
      case r.FormatJsNodeType.Plural: {
        let e = "ordinal" == n[4] ? "selectordinal" : "plural";
        for (let [r, i] of(t.value += "{" + n[1] + ", " + e + ",", n[3] && (t.value += " offset:" + n[3]), Object.entries(n[2]))) t.value += " " + r + " {", o(i, t), t.value += "}";
        t.value += "}";
        break
      }
      case r.FormatJsNodeType.Pound:
        t.value += "#";
        break;
      case r.FormatJsNodeType.Select:
        for (let [e, r] of(t.value += "{" + n[1] + ", select,", Object.entries(n[2]))) t.value += " " + e + " {", o(r, t), t.value += "}";
        t.value += "}";
        break;
      case r.FormatJsNodeType.Tag:
        a(n, t)
    }
  }
}

function a(e, t) {
  switch (e[1]) {
    case "$b":
      t.value += "**", o(e[2], t), t.value += "**";
      break;
    case "$i":
      t.value += "*", o(e[2], t), t.value += "*";
      break;
    case "$code":
      t.value += "`", o(e[2], t), t.value += "`";
      break;
    case "$p":
      o(e[2], t), t.value += "\n\n";
      break;
    case "$link":
      let n = e[2],
        r = e[3];
      t.value += "[", o(n, t), t.value += "](", null != r && o(r, t), t.value += ")";
      break;
    default:
      t.value += "$[", o(e[2], t), t.value += "](" + e[1] + ")"
  }
}
exports.InternalIntlMessage = i