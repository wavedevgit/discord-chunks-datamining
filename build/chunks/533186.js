/** Chunk was on web.js **/
/** chunk id: 533186, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.reactFormatter = exports.DEFAULT_REACT_RICH_TEXT_ELEMENTS = true, exports.formatReact = s, exports.makeReactFormatter = l;
let Chunk64700 = require("./64700.js"),
  Chunk941242 = require("./941242.js"),
  a = Chunk64700.createElement;

function o(e) {
  return class extends i.FormatBuilder {
    constructor() {
      super(...arguments), this._nodeKey = 0, this.result = []
    }
    pushRichTextTag(t, n, r) {
      this.result.push(e[t](n, `${this.context.keyPrefix}.tag-${this._nodeKey++}`, r))
    }
    pushLiteralText(e) {
      "string" == typeof this.result[this.result.length - 1] ? this.result[this.result.length - 1] += e : this.result.push(e)
    }
    pushObject(e) {
      this.result.push(e)
    }
    finish() {
      return this.result
    }
  }
}

function s(e, t, n) {
  return "string" == typeof e ? e : this.bindFormatValues(n, e, t)
}

function l(e) {
  return {
    format: s,
    builder: o(e)
  }
}
exports.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
  $b: (e, t) => a("strong", {
    key: t
  }, e),
  $i: (e, t) => a("em", {
    key: t
  }, e),
  $del: (e, t) => a("del", {
    key: t
  }, e),
  $code: (e, t) => a("code", {
    key: t
  }, e),
  $link: (e, t, [n]) => a("a", {
    href: n,
    key: t
  }, e),
  $p: (e, t) => a("p", {
    key: t
  }, e)
}, exports.reactFormatter = l(exports.DEFAULT_REACT_RICH_TEXT_ELEMENTS)