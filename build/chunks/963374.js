/** Chunk was on 39810 **/
/** chunk id: 963374, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  nC: () => g
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  n = require.n(Chunk392711),
  Chunk697741 = require("./697741.js"),
  Chunk619864 = require("./619864.js"),
  Chunk193995 = require("./193995.js");
let l = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function h(t) {
  return t.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function d(t) {
  return t.toLowerCase()
}

function u(t) {
  return l.has(t)
}

function c(t) {
  return 0 === t.length
}

function g(t) {
  let e = arguments.length > 1 && true !== arguments[1] && arguments[1],
    i = t.length >= o.zV && t.length <= o.y_ && e,
    s = new Set(function(t) {
      let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.$;
      return n()(t.split(/\W+/)).map(h).reject(c).map(d).reject(u).map(e).value()
    }(t, i ? r.a : a.$));
  return t => (function t(e, i, s) {
    if (Array.isArray(e)) e.forEach(e => t(e, i, s));
    else if ("list" === e.type) e.items.forEach(e => t(e, i, s));
    else if ("string" == typeof e.content && "codeBlock" !== e.type) {
      let t = [],
        n = "";
      e.content.split(/(\W+)/g).forEach(e => {
        ! function(t, e) {
          let i = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (c(t = d(h(t))) || u(t)) returnfalse;
          if (i) {
            for (let i of e.values())
              if (t.includes(i)) returntrue;
            returnfalse
          }
          return e.has((0, a.$)(t))
        }(e, i, s) ? n += e: (n.length > 0 && t.push({
          type: "text",
          content: n
        }), t.push({
          type: "highlight",
          content: e
        }), n = "")
      }), t.length > 0 && (n.length > 0 && t.push({
        type: "text",
        content: n
      }), "text" === e.type ? e.content = t : e.content = [{
        type: "text",
        content: t
      }])
    } else null != e.content && t(e.content, i, s);
    return e
  })(t, s, i)
}