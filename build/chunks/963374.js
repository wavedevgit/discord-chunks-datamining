/** Chunk was on 80416 **/
n.d(t, {
  nC: () => d
}), n(388685), n(704826), n(35282), n(539854);
var a = n(392711),
  i = n.n(a),
  o = n(697741);
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

function u(e) {
  return 0 === e.length
}

function d(e) {
  let t = new Set(i()(e.split(/\W+/)).map(c).reject(u).map(l).reject(s).map(o.$).value());
  return e => (function e(t, n) {
    if (Array.isArray(t)) t.forEach(t => e(t, n));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        a = "";
      t.content.split(/(\W+)/g).forEach(t => {
        var i;
        !u(i = l(c(i = t))) && !s(i) && n.has((0, o.$)(i)) ? (a.length > 0 && e.push({
          type: "text",
          content: a
        }), e.push({
          type: "highlight",
          content: t
        }), a = "") : a += t
      }), e.length > 0 && (a.length > 0 && e.push({
        type: "text",
        content: a
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, n);
    return t
  })(e, t)
}