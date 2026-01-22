/** Chunk was on web.js **/
/** chunk id: 442904, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.markdownFormatter = true, exports.formatToMarkdownString = s;
let Chunk860500 = require("./860500.js"),
  i = {
    $b: e => "**" + e.join("") + "**",
    $i: e => "*" + e.join("") + "*",
    $del: e => "~~" + e.join("") + "~~",
    $code: e => "`" + e.join("") + "`",
    $link: (e, t, [n]) => "[" + e.join("") + "](" + n + ")",
    $p: e => e.join("") + "\n\n"
  };
class a extends Chunk860500.StringBuilder {
  constructor() {
    super(...arguments), this.result = ""
  }
  pushRichTextTag(e, t, n) {
    this.result += i[e](t, "", n)
  }
}

function s(e, t, n = a) {
  return "string" == typeof e ? e : this.bindFormatValues(n, e, t)[0]
}
exports.markdownFormatter = {
  format: s,
  builder: a
}