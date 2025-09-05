/** Chunk was on 77756 **/
/** chunk id: 963374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  nC: () => b
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk619864 = require("./619864.js"),
  Chunk193995 = require("./193995.js");
let r = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function s(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function c(e) {
  return e.toLowerCase()
}

function u(e) {
  return r.has(e)
}

function d(e) {
  return 0 === e.length
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.length >= i.zV && e.length <= i.y_ && t,
    a = new Set(o()(e.split(/\W+/)).map(s).reject(d).map(c).reject(u).map(l.a).value());
  return e => (function e(t, n, a) {
    if (Array.isArray(t)) t.forEach(t => e(t, n, a));
    else if ("list" === t.type) t.items.forEach(t => e(t, n, a));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        o = "";
      t.content.split(/(\W+)/g).forEach(t => {
        ! function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (d(e = c(s(e))) || u(e)) returnfalse;
          let a = (0, l.a)(e);
          if (n) {
            for (let e of t.values())
              if (a.includes(e)) returntrue;
            returnfalse
          }
          return t.has(a)
        }(t, n, a) ? o += t: (o.length > 0 && e.push({
          type: "text",
          content: o
        }), e.push({
          type: "highlight",
          content: t
        }), o = "")
      }), e.length > 0 && (o.length > 0 && e.push({
        type: "text",
        content: o
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, n, a);
    return t
  })(e, a, n)
}