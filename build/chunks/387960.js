/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  s = n(392711),
  a = n(399606),
  l = n(481060),
  o = n(734893),
  c = n(984933),
  A = n(430824),
  d = n(700785),
  u = n(8426),
  g = n(969632),
  f = n(824990),
  m = n(981631),
  p = n(388032),
  h = n(668813);
let C = [],
  b = function(e) {
    let {
      guildId: t
    } = e, n = (0, a.e7)([A.Z], () => A.Z.getGuild(t)), b = (0, a.Wu)([g.Z], () => {
      var e, t;
      return null !== (t = null === (e = g.Z.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map(e => e.channelId)) && void 0 !== t ? t : C
    }), v = (0, a.Wu)([g.Z], () => g.Z.getDismissedSuggestedChannelIds(t)), x = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)), N = i.useMemo(() => (0, s.chain)(x).filter(e => e.channel.type === m.d4z.GUILD_TEXT && e.channel.id !== (null == n ? void 0 : n.rulesChannelId) && !v.includes(e.channel.id) && !b.includes(e.channel.id) && d.Uu(m.Plq.VIEW_CHANNEL, e.channel) && !d.Uu(m.Plq.SEND_MESSAGES, e.channel)).take(5).value(), [x, v, null == n ? void 0 : n.rulesChannelId, b]), j = i.useCallback(() => {
      let e = N.map(e => e.channel.id);
      (0, u.q6)(t, e)
    }, [t, N]);
    return N.length <= 0 || b.length >= o.x3 ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: h.suggestedChannelsSection,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: p.NW.string(p.t.WThgAQ)
        }), (0, r.jsxs)("div", {
          className: h.suggestedChannelsHeader,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: p.NW.string(p.t.YtNI8P)
          }), (0, r.jsxs)(l.P3F, {
            className: h.suggestedChannelsDismiss,
            onClick: j,
            children: [(0, r.jsx)(l.dz2, {
              size: "md",
              color: "currentColor",
              className: h.suggestedChannelsDismissCheck
            }), (0, r.jsx)(l.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              children: p.NW.string(p.t.aLqZTk)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: h.suggestedChannels,
          children: N.map((e, t) => (0, r.jsx)(f.Z, {
            channel: e.channel,
            end: t < N.length - 1
          }, e.channel.id))
        })]
      }), (0, r.jsx)("div", {
        className: h.sectionSeparator
      })]
    })
  }