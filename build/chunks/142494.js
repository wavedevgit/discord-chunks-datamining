/** Chunk was on web.js **/
/** chunk id: 142494, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  FC: () => h,
  yR: () => m
}), require("./388685.js"), require("./35282.js"), require("./704826.js");
var Chunk400053 = require("./400053.js"),
  a = require.n(Chunk400053),
  Chunk159635 = require("./159635.js"),
  l = require.n(Chunk159635),
  Chunk20970 = require("./20970.js"),
  Chunk959525 = require("./959525.js");

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
      n = u.yF.test(this.message),
      r = {};
    if (n) {
      let e = 0;
      for (let [n, i] of Object.entries(t)) this.message.includes("!!{".concat(n, "}!!")) && (r[++e] = i, t[n] = e)
    }
    return [t, r]
  }
  constructor(e, t, n) {
    d(this, "message", true), d(this, "hasMarkdown", true), d(this, "intlMessage", true), this.message = n ? e : e.replace(u.hN, ""), this.hasMarkdown = n, this.intlMessage = new(a())(this.message, t)
  }
}

function p(e, t) {
  let n = l().parserFor(t(e)),
    r = l().reactFor(l().ruleOutput(e, "react"));
  return (e, t, i) => {
    let o = !e.includes("\n\n");
    return o || (e += "\n\n"), r(n(e, {
      inline: o,
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

function m(e) {
  r = p(c.j, e), i = _(c.j)
}

function h(e, t) {
  if (null == e) return "";
  null == r && m(n(281071).Z), e = e.replace(/^\n+|\n+$/g, "");
  let i = u.aT.test(e),
    o = u.b9.test(e);
  return i || o ? new f(e, t, o) : e
}