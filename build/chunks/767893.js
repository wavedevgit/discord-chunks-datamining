/** Chunk was on 11814 (e7d0d068f6450d5d.js) **/
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(120356),
  a = n.n(i),
  o = n(489948),
  l = n(657707),
  s = n(442837),
  c = n(481060),
  d = n(933557),
  u = n(471445),
  p = n(266076),
  m = n(565138),
  f = n(430824),
  h = n(388032),
  g = n(446426);
let _ = {
  top: 8,
  bottom: 8,
  left: -4,
  right: -4
};

function b(e) {
  let {
    channel: t,
    children: n
  } = e;
  return (0, r.jsx)(o.tE, {
    offset: _,
    children: (0, r.jsxs)("div", {
      className: g.channelHeader,
      "data-recents-channel": t.id,
      children: [(0, r.jsx)(v, {
        channel: t
      }), t.isPrivate() ? null : (0, r.jsx)(l.Fbu, {
        size: "xxs"
      }), (0, r.jsx)(y, {
        channel: t
      }), n]
    })
  })
}

function v(e) {
  let {
    channel: t
  } = e, n = (0, s.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
  return null != n ? (0, r.jsx)(m.Z, {
    className: g.icon,
    guild: n,
    size: m.Z.Sizes.SMALLER,
    "aria-hidden": !0
  }) : t.isGroupDM() ? (0, r.jsx)(p.Z, {
    channel: t,
    size: c.EFr.SIZE_24,
    experimentLocation: "ForLaterChannelHeader"
  }) : (0, r.jsx)("div", {
    className: a()(g.icon, g.dmIcon),
    children: (0, r.jsx)(l.kBi, {
      size: "xxs"
    })
  })
}

function y(e) {
  let {
    channel: t
  } = e, n = (0, s.e7)([f.Z], () => f.Z.getGuild(t.guild_id)), i = (0, d.ZP)(t, !1), a = (0, u.KS)(t, n), o = t.isPrivate() || null == a, l = t.isDM() ? h.NW.formatToPlainString(h.t.smD7XV, {
    username: i
  }) : i;
  return (0, r.jsxs)("div", {
    className: g.channelNameSection,
    children: [o ? null : (0, r.jsx)(a, {
      className: g.channelTypeIcon,
      size: "xxs"
    }), (0, r.jsx)(c.X6q, {
      variant: "text-md/semibold",
      color: "header-secondary",
      children: l
    })]
  })
}