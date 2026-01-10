/** Chunk was on 96551 **/
/** chunk id: 963374, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  nC: () => f
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk619864 = require("./619864.js"),
  Chunk193995 = require("./193995.js");
let i = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function r(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function s(e) {
  return e.toLowerCase()
}

function d(e) {
  return i.has(e)
}

function u(e) {
  return 0 === e.length
}

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    a = e.length >= l.zV && e.length <= l.y_ && t,
    n = new Set(c()(e.split(/\W+/)).map(r).reject(u).map(s).reject(d).map(o.a).value());
  return e => (function e(t, a, n) {
    if (Array.isArray(t)) t.forEach(t => e(t, a, n));
    else if ("list" === t.type) t.items.forEach(t => e(t, a, n));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        c = "";
      t.content.split(/(\W+)/g).forEach(t => {
        ! function(e, t) {
          let a = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (u(e = s(r(e))) || d(e)) returnfalse;
          let n = (0, o.a)(e);
          if (a) {
            for (let e of t.values())
              if (n.includes(e)) returntrue;
            returnfalse
          }
          return t.has(n)
        }(t, a, n) ? c += t: (c.length > 0 && e.push({
          type: "text",
          content: c
        }), e.push({
          type: "highlight",
          content: t
        }), c = "")
      }), e.length > 0 && (c.length > 0 && e.push({
        type: "text",
        content: c
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, a, n);
    return t
  })(e, n, a)
}