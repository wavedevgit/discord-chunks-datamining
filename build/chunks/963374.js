/** Chunk was on 80416 **/
n.d(t, {
  nC: () => m
}), n(388685), n(704826), n(35282), n(539854);
var a = n(392711),
  o = n.n(a),
  i = n(697741),
  r = n(193995);
let c = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function l(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function s(e) {
  return e.toLowerCase()
}

function u(e) {
  return c.has(e)
}

function d(e) {
  return 0 === e.length
}

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = new Set(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.$;
      return o()(e.split(/\W+/)).map(l).reject(d).map(s).reject(u).map(t).value()
    }(e, t ? r.a : i.$));
  return e => (function e(t, n, a) {
    if (Array.isArray(t)) t.forEach(t => e(t, n, a));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        o = "";
      t.content.split(/(\W+)/g).forEach(t => {
        ! function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (d(e = s(l(e))) || u(e)) return !1;
          if (n) {
            for (let n of t.values())
              if (e.includes(n)) return !0;
            return !1
          }
          return t.has((0, i.$)(e))
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
  })(e, n, t)
}