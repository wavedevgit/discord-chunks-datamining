/** Chunk was on 25292 **/
/** chunk id: 202131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => u
}), require("./388685.js"), require("./35282.js"), require("./642613.js");
var Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk592204 = require("./592204.js"),
  Chunk803141 = require("./803141.js"),
  Chunk603158 = require("./603158.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  (0, o.pB)({
    location: "keyword_substituted_content"
  });
  try {
    let n = function(e) {
      var t;
      let n = c.Z.getKeywordTrie();
      if ("" === e) return [];
      let r = (0, a.F)(e).toLowerCase();
      return Object.values(null != (t = null == n ? true : n.search(r)) ? t : {})
    }(e);
    if (0 === n.length) return e;
    return n.forEach(e => {
      r.default.track(s.rMx.KEYWORD_FILTER_MATCH, {
        message_id: null == t ? true : t.messageId,
        channel_id: null == t ? true : t.channelId,
        author_id: null == t ? true : t.authorId,
        keyword: e.keyword
      })
    }), n.sort((e, t) => t.start - e.start).reduce((e, n) => (function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
        i = Math.max(t, 0),
        o = Math.min(n, e.length - 1),
        c = r ? "\\*" : "*",
        a = [...e.substring(i, o + 1)].map(e => " " === e ? " " : c).join("");
      return "".concat(e.substring(0, i)).concat(a).concat(e.substring(o + 1))
    })(e, n.start, n.end, null == t ? true : t.escapeReplacement), e)
  } catch (t) {
    return i.Z.captureException(t, {
      tags: {
        app_context: "keyword_filtering"
      }
    }), e
  }
}