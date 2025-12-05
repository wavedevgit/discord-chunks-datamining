/** Chunk was on 89522 **/
/** chunk id: 737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk963374 = require("./963374.js"),
  Chunk735020 = require("./735020.js"),
  Chunk627050 = require("./627050.js"),
  Chunk937889 = require("./937889.js"),
  Chunk23750 = require("./23750.js"),
  Chunk699516 = require("./699516.js"),
  Chunk171900 = require("./171900.js"),
  Chunk607802 = require("./607802.js"),
  Chunk817190 = require("./817190.js");
let h = [];

function f(e) {
  let {
    searchContext: t
  } = e, n = a.d.useExperiment({
    location: "useMessageRenderedContent"
  }).enabled, f = (0, r.e7)([p.Z, d.Z, l.Z], () => {
    var e;
    let r = (0, u.Tm)(t),
      a = p.Z.getSearchResultsQuery(r),
      c = d.Z.getMessages(r);
    if (null == a || null == c || 0 === c.length) return h;
    let f = (0, i.nC)(null != (e = (0, u.UP)(a)) ? e : ""),
      g = [];
    return c.forEach(e => {
      let t = new o.ZP(e);
      t = (t = function(e, t) {
        let [n] = t, r = n.getMessage(e.id, e.channel_id);
        return null != r && (e = e.merge({
          attachments: r.attachments,
          embeds: r.embeds
        })), e
      }(t, [l.Z])).set("customRenderedContent", (0, s.ZP)(t, {
        postProcessor: f,
        allowHeading: true,
        allowList: true,
        allowGameMentions: n
      })), g.push(t)
    }), g
  }, [n, t], r.pF), {
    blockCount: g,
    ignoreCount: m
  } = (0, r.cj)([c.Z], () => {
    let e = 0,
      t = 0;
    return f.forEach(n => {
      let r = c.Z.isBlockedForMessage(n),
        i = c.Z.isIgnoredForMessage(n);
      r ? e++ : i && t++
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