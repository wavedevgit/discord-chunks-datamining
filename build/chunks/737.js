/** Chunk was on 36499 **/
/** chunk id: 737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e) {
  let {
    searchContext: t
  } = e, n = (0, o.p)(), m = a.d.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, g = (0, r.e7)([h.Z, d.Z, l.Z], () => {
    var e;
    let r = (0, p.Tm)(t),
      a = h.Z.getSearchResultsQuery(r),
      o = d.Z.getMessages(r);
    if (null == a || null == o || 0 === o.length) return f;
    let u = (0, i.nC)(null != (e = (0, p.UP)(a)) ? e : ""),
      g = [];
    return o.forEach(e => {
      let t = new c.ZP(e),
        r = (t = function(e, t) {
          let [n] = t, r = n.getMessage(e.id, e.channel_id);
          return null != r && (e = e.merge({
            attachments: r.attachments,
            embeds: r.embeds
          })), e
        }(t, [l.Z])).isSearchHit ? t.set("customRenderedContent", (0, s.ZP)(t, {
          postProcessor: u,
          allowHeading: true,
          allowList: true,
          allowGameMentions: m,
          shouldFilterKeywords: n
        })) : t;
      g.push([r])
    }), g
  }, [m, t, n], r.pF);
  return (0, r.e7)([u.Z], () => {
    let e = 0,
      t = 0;
    return {
      searchResults: g.map(n => n.filter(n => {
        let r = u.Z.isBlockedForMessage(n),
          i = u.Z.isIgnoredForMessage(n);
        return r && n.isSearchHit ? e++ : i && n.isSearchHit && t++, !r && !i || n.isSearchHit
      })),
      blockCount: e,
      ignoreCount: t
    }
  }, [g], r.pF)
}