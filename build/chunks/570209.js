/** Chunk was on 39289 **/
/** chunk id: 570209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  wG: () => b
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438);
require("./309613.js");
var Chunk289732 = require("./289732.js");
let r = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function c(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function l(e) {
  return e.toLowerCase()
}

function s(e) {
  return r.has(e)
}

function _(e) {
  return 0 === e.length
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.length >= 3 && e.length <= 12 && t,
    a = new Set(o()(e.split(/\W+/)).map(c).reject(_).map(l).reject(s).map(i.U).value());
  return e => (function e(t, n, a) {
    if (Array.isArray(t)) t.forEach(t => e(t, n, a));
    else if ("list" === t.type) t.items.forEach(t => e(t, n, a));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        o = "";
      t.content.split(/(\W+)/g).forEach(t => {
        ! function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (_(e = l(c(e))) || s(e)) returnfalse;
          let a = (0, i.U)(e);
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