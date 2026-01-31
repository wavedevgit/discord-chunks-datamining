/** Chunk was on 17534 **/
/** chunk id: 969715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk570209 = require("./570209.js"),
  Chunk457699 = require("./457699.js"),
  Chunk352505 = require("./352505.js"),
  Chunk465364 = require("./465364.js"),
  Chunk383233 = require("./383233.js"),
  Chunk994500 = require("./994500.js"),
  Chunk517381 = require("./517381.js"),
  Chunk822382 = require("./822382.js"),
  Chunk65600 = require("./65600.js");
let p = [];

function g(e) {
  let {
    searchContext: t
  } = e, n = s.m.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, g = (0, r.bG)([h.A, u.A, i.A], () => {
    var e;
    let r = (0, d.bS)(t),
      s = h.A.getSearchResultsQuery(r),
      c = u.A.getMessages(r);
    if (null == s || null == c || 0 === c.length) return p;
    let g = (0, l.wG)(null != (e = (0, d.dX)(s)) ? e : ""),
      f = [];
    return c.forEach(e => {
      let t = new o.Ay(e);
      t = (t = function(e, t) {
        let [n] = t, r = n.getMessage(e.id, e.channel_id);
        return null != r && (e = e.merge({
          attachments: r.attachments,
          embeds: r.embeds
        })), e
      }(t, [i.A])).set("customRenderedContent", (0, a.Ay)(t, {
        postProcessor: g,
        allowHeading: true,
        allowList: true,
        allowGameMentions: n
      })), f.push(t)
    }), f
  }, [n, t], r.My), {
    blockCount: f,
    ignoreCount: m
  } = (0, r.cf)([c.A], () => {
    let e = 0,
      t = 0;
    return g.forEach(n => {
      let r = c.A.isBlockedForMessage(n),
        l = c.A.isIgnoredForMessage(n);
      r ? e++ : l && t++
    }), {
      blockCount: e,
      ignoreCount: t
    }
  });
  return {
    renderedMessages: g,
    blockCount: f,
    ignoreCount: m
  }
}