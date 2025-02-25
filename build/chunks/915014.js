/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(318374),
  a = n(522289),
  s = n(565138),
  l = n(806729),
  c = n(708108),
  u = n(146078),
  d = n(228168),
  f = n(182294),
  _ = n(285055);
let p = 3;

function h(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, {
    mutualFriends: h,
    mutualGuilds: g
  } = (0, l.Z)(t), m = null != h && h.length > 0, E = null != g && g.length > 0, v = m && E ? "text-xs/normal" : "text-sm/normal";
  if (!m && !E) return null;
  let b = () => m ? (0, r.jsxs)(i.P3F, {
      className: _.section,
      onClick: () => null == n ? void 0 : n(d.oh.MUTUAL_FRIENDS),
      children: [(0, r.jsx)(o.Z, {
        maxUsers: p,
        users: h.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        size: f.EF.SIZE_16,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }), (0, r.jsx)(i.Text, {
        className: _.text,
        variant: v,
        color: "interactive-normal",
        children: (0, c.Z)(h.length)
      })]
    }) : null,
    y = () => m && E ? (0, r.jsx)("div", {
      "aria-hidden": "true",
      className: _.spacer
    }) : null,
    O = () => E ? (0, r.jsxs)(i.P3F, {
      className: _.section,
      onClick: () => null == n ? void 0 : n(d.oh.MUTUAL_GUILDS),
      children: [!m && (0, r.jsx)(a.Z, {
        maxGuilds: p,
        guilds: g.map(e => {
          let {
            guild: t
          } = e;
          return t
        }),
        size: s.Z.Sizes.SMOL,
        hideOverflowCount: !0,
        disableGuildNameTooltip: !0
      }), (0, r.jsx)(i.Text, {
        className: _.text,
        variant: v,
        color: "interactive-normal",
        children: (0, u.Z)(g.length)
      })]
    }) : null;
  return (0, r.jsxs)("div", {
    className: _.mutuals,
    children: [b(), y(), O()]
  })
}