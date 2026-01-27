/** Chunk was on 41727 **/
/** chunk id: 969715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
let h = [];

function f(e) {
  let {
    searchContext: t
  } = e, n = s.m.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, f = (0, r.bG)([p.A, u.A, i.A], () => {
    var e;
    let r = (0, d.bS)(t),
      s = p.A.getSearchResultsQuery(r),
      c = u.A.getMessages(r);
    if (null == s || null == c || 0 === c.length) return h;
    let f = (0, l.wG)(null != (e = (0, d.dX)(s)) ? e : ""),
      g = [];
    return c.forEach(e => {
      let t = new o.Ay(e);
      t = (t = function(e, t) {
        let [n] = t, r = n.getMessage(e.id, e.channel_id);
        return null != r && (e = e.merge({
          attachments: r.attachments,
          embeds: r.embeds
        })), e
      }(t, [i.A])).set("customRenderedContent", (0, a.Ay)(t, {
        postProcessor: f,
        allowHeading: true,
        allowList: true,
        allowGameMentions: n
      })), g.push(t)
    }), g
  }, [n, t], r.My), {
    blockCount: g,
    ignoreCount: m
  } = (0, r.cf)([c.A], () => {
    let e = 0,
      t = 0;
    return f.forEach(n => {
      let r = c.A.isBlockedForMessage(n),
        l = c.A.isIgnoredForMessage(n);
      r ? e++ : l && t++
    }), {
      blockCount: e,
      ignoreCount: t
    }
  });
  return {
    renderedMessages: f,
    blockCount: g,
    ignoreCount: m
  }
}