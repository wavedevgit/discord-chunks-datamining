/** Chunk was on 91798 **/
/** chunk id: 570209, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  wG: () => d
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438);
require("./309613.js");
var Chunk289732 = require("./289732.js");
let i = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function o(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function s(e) {
  return e.toLowerCase()
}

function c(e) {
  return i.has(e)
}

function u(e) {
  return 0 === e.length
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    a = e.length >= 3 && e.length <= 12 && t,
    n = new Set(l()(e.split(/\W+/)).map(o).reject(u).map(s).reject(c).map(r.U).value());
  return e => (function e(t, a, n) {
    if (Array.isArray(t)) t.forEach(t => e(t, a, n));
    else if ("list" === t.type) t.items.forEach(t => e(t, a, n));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        l = "";
      t.content.split(/(\W+)/g).forEach(t => {
        ! function(e, t) {
          let a = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (u(e = s(o(e))) || c(e)) returnfalse;
          let n = (0, r.U)(e);
          if (a) {
            for (let e of t.values())
              if (n.includes(e)) returntrue;
            returnfalse
          }
          return t.has(n)
        }(t, a, n) ? l += t: (l.length > 0 && e.push({
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
    } else null != t.content && e(t.content, a, n);
    return t
  })(e, n, a)
}