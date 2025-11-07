/** Chunk was on 64982 **/
/** chunk id: 387960, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let x = [],
  j = function(e) {
    let {
      guildId: t
    } = e, n = (0, a.e7)([d.Z], () => d.Z.getGuild(t)), j = (0, a.Wu)([m.Z], () => {
      var e, t;
      return null != (t = null == (e = m.Z.getSettings().resourceChannels) ? true : e.map(e => e.channelId)) ? t : x
    }), _ = (0, a.Wu)([m.Z], () => m.Z.getDismissedSuggestedChannelIds(t)), v = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)), O = i.useMemo(() => (0, l.chain)(v).filter(e => e.channel.type === f.d4z.GUILD_TEXT && e.channel.id !== (null == n ? true : n.rulesChannelId) && !_.includes(e.channel.id) && !j.includes(e.channel.id) && u.Uu(f.Plq.VIEW_CHANNEL, e.channel) && !u.Uu(f.Plq.SEND_MESSAGES, e.channel)).take(5).value(), [v, _, null == n ? true : n.rulesChannelId, j]), C = i.useCallback(() => {
      let e = O.map(e => e.channel.id);
      (0, g.q6)(t, e)
    }, [t, O]);
    return O.length <= 0 || j.length >= o.x3 ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: b.suggestedChannelsSection,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: h.intl.string(h.t.WThgAR)
        }), (0, r.jsxs)("div", {
          className: b.suggestedChannelsHeader,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: h.intl.string(h.t.YtNI8C)
          }), (0, r.jsxs)(s.P3F, {
            className: b.suggestedChannelsDismiss,
            onClick: C,
            children: [(0, r.jsx)(s.dz2, {
              size: "md",
              color: "currentColor",
              className: b.suggestedChannelsDismissCheck
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              children: h.intl.string(h.t.aLqZTl)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: b.suggestedChannels,
          children: O.map((e, t) => (0, r.jsx)(p.Z, {
            channel: e.channel,
            end: t < O.length - 1
          }, e.channel.id))
        })]
      }), (0, r.jsx)("div", {
        className: b.sectionSeparator
      })]
    })
  }