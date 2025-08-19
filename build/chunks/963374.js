/** Chunk was on 12630 **/
/** chunk id: 963374, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  nC: () => v
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk697741 = require("./697741.js"),
  Chunk619864 = require("./619864.js"),
  Chunk193995 = require("./193995.js");
let a = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function o(A) {
  return A.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function g(A) {
  return A.toLowerCase()
}

function c(A) {
  return a.has(A)
}

function f(A) {
  return 0 === A.length
}

function v(A) {
  let e = arguments.length > 1 && true !== arguments[1] && arguments[1],
    t = A.length >= i.zV && A.length <= i.y_ && e,
    n = new Set(function(A) {
      let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.$;
      return r()(A.split(/\W+/)).map(o).reject(f).map(g).reject(c).map(e).value()
    }(A, t ? s.a : l.$));
  return A => (function A(e, t, n) {
    if (Array.isArray(e)) e.forEach(e => A(e, t, n));
    else if ("list" === e.type) e.items.forEach(e => A(e, t, n));
    else if ("string" == typeof e.content && "codeBlock" !== e.type) {
      let A = [],
        r = "";
      e.content.split(/(\W+)/g).forEach(e => {
        ! function(A, e) {
          let t = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (f(A = g(o(A))) || c(A)) returnfalse;
          if (t) {
            for (let t of e.values())
              if (A.includes(t)) returntrue;
            returnfalse
          }
          return e.has((0, l.$)(A))
        }(e, t, n) ? r += e: (r.length > 0 && A.push({
          type: "text",
          content: r
        }), A.push({
          type: "highlight",
          content: e
        }), r = "")
      }), A.length > 0 && (r.length > 0 && A.push({
        type: "text",
        content: r
      }), "text" === e.type ? e.content = A : e.content = [{
        type: "text",
        content: A
      }])
    } else null != e.content && A(e.content, t, n);
    return e
  })(A, n, t)
}