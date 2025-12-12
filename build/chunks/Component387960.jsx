/** Chunk was on 9536 **/
/** chunk id: 387960, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk734893 = require("./734893.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk700785 = require("./700785.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk824990 = require("./824990.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551952 = require("./551952.js");
let x = [],
  j = function(e) {
    let {
      guildId: t
    } = e, n = (0, a.e7)([d.Z], () => d.Z.getGuild(t)), j = (0, a.Wu)([f.Z], () => {
      var e, t;
      return null != (t = null == (e = f.Z.getSettings().resourceChannels) ? true : e.map(e => e.channelId)) ? t : x
    }), v = (0, a.Wu)([f.Z], () => f.Z.getDismissedSuggestedChannelIds(t)), O = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)), C = i.useMemo(() => (0, l.chain)(O).filter(e => e.channel.type === b.d4z.GUILD_TEXT && e.channel.id !== (null == n ? true : n.rulesChannelId) && !v.includes(e.channel.id) && !j.includes(e.channel.id) && u.Uu(b.Plq.VIEW_CHANNEL, e.channel) && !u.Uu(b.Plq.SEND_MESSAGES, e.channel)).take(5).value(), [O, v, null == n ? true : n.rulesChannelId, j]), y = i.useCallback(() => {
      let e = C.map(e => e.channel.id);
      (0, g.q6)(t, e)
    }, [t, C]);
    return C.length <= 0 || j.length >= o.x3 ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: h.suggestedChannelsSection,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: p.intl.string(p.t.WThgAR)
        }), (0, r.jsxs)("div", {
          className: h.suggestedChannelsHeader,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: p.intl.string(p.t.YtNI8C)
          }), (0, r.jsxs)(s.P3F, {
            className: h.suggestedChannelsDismiss,
            onClick: y,
            children: [(0, r.jsx)(s.dz2, {
              size: "md",
              color: "currentColor",
              className: h.suggestedChannelsDismissCheck
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              children: p.intl.string(p.t.aLqZTl)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: h.suggestedChannels,
          children: C.map((e, t) => (0, r.jsx)(m.Z, {
            channel: e.channel,
            end: t < C.length - 1
          }, e.channel.id))
        })]
      }), (0, r.jsx)("div", {
        className: h.sectionSeparator
      })]
    })
  }