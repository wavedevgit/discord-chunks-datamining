/** Chunk was on 66201 **/
/** chunk id: 963374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  nC: () => d
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk619864 = require("./619864.js"),
  Chunk193995 = require("./193995.js");
let a = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function o(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function u(e) {
  return e.toLowerCase()
}

function c(e) {
  return a.has(e)
}

function E(e) {
  return 0 === e.length
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.length >= i.zV && e.length <= i.y_ && t,
    r = new Set(l()(e.split(/\W+/)).map(o).reject(E).map(u).reject(c).map(s.a).value());
  return e => (function e(t, n, r) {
    if (Array.isArray(t)) t.forEach(t => e(t, n, r));
    else if ("list" === t.type) t.items.forEach(t => e(t, n, r));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        l = "";
      t.content.split(/(\W+)/g).forEach(t => {
        ! function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (E(e = u(o(e))) || c(e)) returnfalse;
          let r = (0, s.a)(e);
          if (n) {
            for (let e of t.values())
              if (r.includes(e)) returntrue;
            returnfalse
          }
          return t.has(r)
        }(t, n, r) ? l += t: (l.length > 0 && e.push({
          type: "text",
          content: l
        }), e.push({
          type: "highlight",
          content: t
        }), l = "")
      }), e.length > 0 && (l.length > 0 && e.push({
        type: "text",
        content: l
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, n, r);
    return t
  })(e, r, n)
}