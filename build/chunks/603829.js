/** Chunk was on web.js **/
/** chunk id: 603829, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r;
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.astFormatter = exports.RichTextNodeType = true, exports.formatToAst = s;
let Chunk792214 = require("./792214.js");
! function(e) {
  e.Text = "text", e.Strong = "strong", e.Emphasis = "em", e.Strikethrough = "s", e.Code = "inlineCode", e.Link = "link", e.Paragraph = "paragraph"
}(r || (exports.RichTextNodeType = r = {}));
let a = {
  $b: e => ({
    type: r.Strong,
    content: e
  }),
  $i: e => ({
    type: r.Emphasis,
    content: e
  }),
  $del: e => ({
    type: r.Strikethrough,
    content: e
  }),
  $code: e => ({
    type: r.Code,
    content: e
  }),
  $link: (e, t, [n]) => ({
    type: r.Link,
    target: n,
    content: e
  }),
  $p: e => ({
    type: r.Paragraph,
    content: e
  })
};
class o extends Chunk792214.FormatBuilder {
  constructor() {
    super(...arguments), this.result = []
  }
  pushRichTextTag(e, t, n) {
    if (!(e in a)) throw `${e} is not a known rich text formatting tag`;
    let r = a[e](t, "", n);
    Array.isArray(r) ? this.result.push(...r) : this.result.push(r)
  }
  pushLiteralText(e) {
    let t = this.result[this.result.length - 1];
    null != t && t.type === r.Text ? t.content += e : this.result.push({
      type: r.Text,
      content: e
    })
  }
  pushObject(e) {
    this.result.push(e)
  }
  finish() {
    return this.result
  }
}

function s(e, t) {
  return "string" == typeof e ? [{
    type: r.Text,
    content: e
  }] : this.bindFormatValues(o, e, t)
}
exports.astFormatter = {
  format: s,
  builder: o
}