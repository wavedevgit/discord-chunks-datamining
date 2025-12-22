/** Chunk was on 27381 **/
/** chunk id: 963374, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  nC: () => u
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk619864 = require("./619864.js"),
  Chunk193995 = require("./193995.js");
let l = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function r(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function c(e) {
  return e.toLowerCase()
}

function d(e) {
  return l.has(e)
}

function h(e) {
  return 0 === e.length
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    i = e.length >= a.zV && e.length <= a.y_ && t,
    n = new Set(s()(e.split(/\W+/)).map(r).reject(h).map(c).reject(d).map(o.a).value());
  return e => (function e(t, i, n) {
    if (Array.isArray(t)) t.forEach(t => e(t, i, n));
    else if ("list" === t.type) t.items.forEach(t => e(t, i, n));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        s = "";
      t.content.split(/(\W+)/g).forEach(t => {
        ! function(e, t) {
          let i = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (h(e = c(r(e))) || d(e)) returnfalse;
          let n = (0, o.a)(e);
          if (i) {
            for (let e of t.values())
              if (n.includes(e)) returntrue;
            returnfalse
          }
          return t.has(n)
        }(t, i, n) ? s += t: (s.length > 0 && e.push({
          type: "text",
          content: s
        }), e.push({
          type: "highlight",
          content: t
        }), s = "")
      }), e.length > 0 && (s.length > 0 && e.push({
        type: "text",
        content: s
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, i, n);
    return t
  })(e, n, i)
}