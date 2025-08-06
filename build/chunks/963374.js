/** Chunk was on 85664 **/
i.d(e, {
  nC: () => c
}), i(388685), i(704826), i(35282), i(539854);
var s = i(392711),
  n = i.n(s),
  a = i(697741),
  o = i(193995);
let r = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function l(t) {
  return t.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function h(t) {
  return t.toLowerCase()
}

function d(t) {
  return r.has(t)
}

function u(t) {
  return 0 === t.length
}

function c(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = new Set(function(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.$;
      return n()(t.split(/\W+/)).map(l).reject(u).map(h).reject(d).map(e).value()
    }(t, e ? o.a : a.$));
  return t => (function t(e, i, s) {
    if (Array.isArray(e)) e.forEach(e => t(e, i, s));
    else if ("string" == typeof e.content && "codeBlock" !== e.type) {
      let t = [],
        n = "";
      e.content.split(/(\W+)/g).forEach(e => {
        ! function(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (u(t = h(l(t))) || d(t)) return !1;
          if (i) {
            for (let i of e.values())
              if (t.includes(i)) return !0;
            return !1
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
  })(t, i, e)
}