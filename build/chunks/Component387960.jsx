/** Chunk was on 384 **/
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
  Chunk197530 = require("./197530.js");
let b = [],
  j = function(e) {
    let {
      guildId: t
    } = e, n = (0, s.e7)([u.Z], () => u.Z.getGuild(t)), j = (0, s.Wu)([m.Z], () => {
      var e, t;
      return null != (t = null == (e = m.Z.getSettings().resourceChannels) ? true : e.map(e => e.channelId)) ? t : b
    }), _ = (0, s.Wu)([m.Z], () => m.Z.getDismissedSuggestedChannelIds(t)), v = (0, s.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)), O = i.useMemo(() => (0, l.chain)(v).filter(e => e.channel.type === f.d4z.GUILD_TEXT && e.channel.id !== (null == n ? true : n.rulesChannelId) && !_.includes(e.channel.id) && !j.includes(e.channel.id) && d.Uu(f.Plq.VIEW_CHANNEL, e.channel) && !d.Uu(f.Plq.SEND_MESSAGES, e.channel)).take(5).value(), [v, _, null == n ? true : n.rulesChannelId, j]), C = i.useCallback(() => {
      let e = O.map(e => e.channel.id);
      (0, g.q6)(t, e)
    }, [t, O]);
    return O.length <= 0 || j.length >= o.x3 ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: x.suggestedChannelsSection,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          children: h.intl.string(h.t.WThgAR)
        }), (0, r.jsxs)("div", {
          className: x.suggestedChannelsHeader,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: h.intl.string(h.t.YtNI8C)
          }), (0, r.jsxs)(a.P3F, {
            className: x.suggestedChannelsDismiss,
            onClick: C,
            children: [(0, r.jsx)(a.dz2, {
              size: "md",
              color: "currentColor",
              className: x.suggestedChannelsDismissCheck
            }), (0, r.jsx)(a.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              children: h.intl.string(h.t.aLqZTl)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: x.suggestedChannels,
          children: O.map((e, t) => (0, r.jsx)(p.Z, {
            channel: e.channel,
            end: t < O.length - 1
          }, e.channel.id))
        })]
      }), (0, r.jsx)("div", {
        className: x.sectionSeparator
      })]
    })
  }