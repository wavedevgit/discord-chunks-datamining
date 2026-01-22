/** Chunk was on 94503 **/
/** chunk id: 570209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  wG: () => E
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  r = require.n(Chunk735438);
require("./309613.js");
var Chunk289732 = require("./289732.js");
let i = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function s(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function o(e) {
  return e.toLowerCase()
}

function c(e) {
  return i.has(e)
}

function u(e) {
  return 0 === e.length
}

function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.length >= 3 && e.length <= 12 && t,
    l = new Set(r()(e.split(/\W+/)).map(s).reject(u).map(o).reject(c).map(a.U).value());
  return e => (function e(t, n, l) {
    if (Array.isArray(t)) t.forEach(t => e(t, n, l));
    else if ("list" === t.type) t.items.forEach(t => e(t, n, l));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        r = "";
      t.content.split(/(\W+)/g).forEach(t => {
        ! function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (u(e = o(s(e))) || c(e)) returnfalse;
          let l = (0, a.U)(e);
          if (n) {
            for (let e of t.values())
              if (l.includes(e)) returntrue;
            returnfalse
          }
          return t.has(l)
        }(t, n, l) ? r += t: (r.length > 0 && e.push({
          type: "text",
          content: r
        }), e.push({
          type: "highlight",
          content: t
        }), r = "")
      }), e.length > 0 && (r.length > 0 && e.push({
        type: "text",
        content: r
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, n, l);
    return t
  })(e, l, n)
}