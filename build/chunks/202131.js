/** Chunk was on 25292 (6918277981a7061f.js) **/
n.d(t, {
  N: () => u
}), n(47120), n(301563), n(230036);
var i = n(626135),
  r = n(960048),
  o = n(592204),
  a = n(803141),
  c = n(603158),
  s = n(981631);

function u(e, t) {
  (0, o.pB)({
    location: "keyword_substituted_content"
  });
  try {
    let n = function(e) {
      var t;
      let n = a.Z.getKeywordTrie();
      if ("" === e) return [];
      let i = (0, c.F)(e).toLowerCase();
      return Object.values(null !== (t = null == n ? void 0 : n.search(i)) && void 0 !== t ? t : {})
    }(e);
    if (0 === n.length) return e;
    return n.forEach(e => {
      i.default.track(s.rMx.KEYWORD_FILTER_MATCH, {
        message_id: null == t ? void 0 : t.messageId,
        channel_id: null == t ? void 0 : t.channelId,
        author_id: null == t ? void 0 : t.authorId,
        keyword: e.keyword
      })
    }), n.sort((e, t) => t.start - e.start).reduce((e, n) => (function(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = Math.max(t, 0),
        o = Math.min(n, e.length - 1),
        a = i ? "\\*" : "*",
        c = [...e.substring(r, o + 1)].map(e => " " === e ? " " : a).join("");
      return "".concat(e.substring(0, r)).concat(c).concat(e.substring(o + 1))
    })(e, n.start, n.end, null == t ? void 0 : t.escapeReplacement), e)
  } catch (t) {
    return r.Z.captureException(t, {
      tags: {
        app_context: "keyword_filtering"
      }
    }), e
  }
}