/** Chunk was on 97492 **/
/** chunk id: 969715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    searchContext: t
  } = e, n = a.m.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, h = (0, r.bG)([f.A, u.A, i.A], () => {
    var e;
    let r = (0, d.bS)(t),
      a = f.A.getSearchResultsQuery(r),
      c = u.A.getMessages(r);
    if (null == a || null == c || 0 === c.length) return p;
    let h = (0, l.wG)(null != (e = (0, d.dX)(a)) ? e : ""),
      b = [];
    return c.forEach(e => {
      let t = new o.Ay(e);
      t = (t = function(e, t) {
        let [n] = t, r = n.getMessage(e.id, e.channel_id);
        return null != r && (e = e.merge({
          attachments: r.attachments,
          embeds: r.embeds
        })), e
      }(t, [i.A])).set("customRenderedContent", (0, s.Ay)(t, {
        postProcessor: h,
        allowHeading: true,
        allowList: true,
        allowGameMentions: n
      })), b.push(t)
    }), b
  }, [n, t], r.My), {
    blockCount: b,
    ignoreCount: g
  } = (0, r.cf)([c.A], () => {
    let e = 0,
      t = 0;
    return h.forEach(n => {
      let r = c.A.isBlockedForMessage(n),
        l = c.A.isIgnoredForMessage(n);
      r ? e++ : l && t++
    }), {
      blockCount: e,
      ignoreCount: t
    }
  });
  return {
    renderedMessages: h,
    blockCount: b,
    ignoreCount: g
  }
}