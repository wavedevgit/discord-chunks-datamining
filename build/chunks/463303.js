/** Chunk was on web.js **/
/** chunk id: 463303, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  I4: () => m,
  Zs: () => h
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk424899 = require("./424899.js"),
  o = require.n(Chunk424899),
  Chunk791332 = require("./791332.js"),
  l = require.n(Chunk791332),
  Chunk473598 = require("./473598.js"),
  Chunk906049 = require("./906049.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f {
  format(e) {
    if (!this.hasMarkdown) return this.intlMessage.format(e);
    let [t, n] = this.getContext(e);
    return r(this.intlMessage.format(t), t, n)
  }
  astFormat(e) {
    let [t, n] = this.getContext(e);
    return i(this.intlMessage.format(t), t, n)
  }
  plainFormat(e) {
    return this.intlMessage.format(e)
  }
  getContext(e) {
    let t = e,
      n = u.N6.test(this.message),
      r = {};
    if (n) {
      let e = 0;
      for (let [n, i] of Object.entries(t)) this.message.includes("!!{".concat(n, "}!!")) && (r[++e] = i, t[n] = e)
    }
    return [t, r]
  }
  constructor(e, t, n) {
    d(this, "message", true), d(this, "hasMarkdown", true), d(this, "intlMessage", true), this.message = n ? e : e.replace(u.jx, ""), this.hasMarkdown = n, this.intlMessage = new(o())(this.message, t)
  }
}

function p(e, t) {
  let n = l().parserFor(t(e)),
    r = l().reactFor(l().ruleOutput(e, "react"));
  return (e, t, i) => {
    let a = !e.includes("\n\n");
    return a || (e += "\n\n"), r(n(e, {
      inline: a,
      context: t,
      unsafeContext: i
    }))
  }
}

function _(e) {
  let t = l().parserFor(e);
  return (e, n, r) => t(e + "\n\n", {
    inline: false,
    context: n,
    unsafeContext: r
  })
}

function h(e) {
  r = p(c.a, e), i = _(c.a)
}

function m(e, t) {
  if (null == e) return "";
  null == r && h(n(759794).A), e = e.replace(/^\n+|\n+$/g, "");
  let i = u.qF.test(e),
    a = u.wn.test(e);
  return i || a ? new f(e, t, a) : e
}