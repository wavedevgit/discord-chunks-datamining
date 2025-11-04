/** Chunk was on 91053 **/
/** chunk id: 737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk963374 = require("./963374.js"),
  Chunk735020 = require("./735020.js"),
  Chunk627050 = require("./627050.js"),
  Chunk905405 = require("./905405.js"),
  Chunk937889 = require("./937889.js"),
  Chunk23750 = require("./23750.js"),
  Chunk699516 = require("./699516.js"),
  Chunk171900 = require("./171900.js"),
  Chunk607802 = require("./607802.js"),
  Chunk817190 = require("./817190.js");
let f = [];

function g(e) {
  let {
    searchContext: t
  } = e, n = (0, s.p)(), g = a.d.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, m = (0, r.e7)([p.Z, u.Z, l.Z], () => {
    var e;
    let r = (0, h.Tm)(t),
      a = p.Z.getSearchResultsQuery(r),
      s = u.Z.getMessages(r);
    if (null == a || null == s || 0 === s.length) return f;
    let d = (0, i.nC)(null != (e = (0, h.UP)(a)) ? e : ""),
      m = [];
    return s.forEach(e => {
      let t = new c.ZP(e);
      t = (t = function(e, t) {
        let [n] = t, r = n.getMessage(e.id, e.channel_id);
        return null != r && (e = e.merge({
          attachments: r.attachments,
          embeds: r.embeds
        })), e
      }(t, [l.Z])).set("customRenderedContent", (0, o.ZP)(t, {
        postProcessor: d,
        allowHeading: true,
        allowList: true,
        allowGameMentions: g,
        shouldFilterKeywords: n
      })), m.push(t)
    }), m
  }, [g, t, n], r.pF), {
    blockCount: b,
    ignoreCount: _
  } = (0, r.cj)([d.Z], () => {
    let e = 0,
      t = 0;
    return m.forEach(n => {
      let r = d.Z.isBlockedForMessage(n),
        i = d.Z.isIgnoredForMessage(n);
      r ? e++ : i && t++
    }), {
      blockCount: e,
      ignoreCount: t
    }
  });
  return {
    renderedMessages: m,
    blockCount: b,
    ignoreCount: _
  }
}