/** Chunk was on 37220 (5d117b80440c78ed.js) **/
n.d(t, {
  Z: () => N
});
var r = n(200651),
  i = n(192379),
  l = n(373793),
  a = n(442837),
  o = n(481060),
  s = n(232567),
  c = n(700582),
  u = n(592180),
  d = n(565138),
  f = n(171368),
  g = n(598077),
  m = n(592125),
  b = n(430824),
  p = n(594174),
  h = n(981631),
  v = n(388032),
  y = n(487250);

function N(e) {
  var t, n, N, O;
  let E = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
    j = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
    S = null === (N = e.interactionMetadata) || void 0 === N ? void 0 : N.user.id,
    P = (0, a.e7)([p.default], () => p.default.getUser(E)),
    Z = (0, a.e7)([b.Z], () => b.Z.getGuild(j)),
    I = m.Z.getChannel(e.channel_id),
    x = null == I ? void 0 : I.getGuildId(),
    _ = (0, a.e7)([p.default], () => p.default.getUser(S));
  if (i.useEffect(() => {
      null == P && null != E && (0, s.PR)(E)
    }, [P, E]), !(0, u.a)(e)) return null;
  null == _ && (_ = new g.Z(null === (O = e.interactionMetadata) || void 0 === O ? void 0 : O.user));
  let T = null;
  return null != Z ? T = (0, r.jsx)(o.sNh, {
    className: y.interactionInfoMenuItem,
    disabled: !0,
    iconLeft: () => (0, r.jsx)(d.Z, {
      guild: Z,
      size: d.Z.Sizes.MINI
    }),
    id: "integration-owner",
    label: Z.name,
    subtext: v.NW.formatToPlainString(v.t.ShLXXF, {
      application: e.author.username
    })
  }) : null != P && (T = (0, r.jsx)(o.sNh, {
    action: () => (0, f.openUserProfileModal)({
      userId: P.id,
      guildId: x,
      channelId: e.channel_id,
      analyticsLocation: {
        object: h.qAy.MESSAGE_ACTION_SHEET
      }
    }),
    className: y.interactionInfoMenuItem,
    iconLeft: () => (0, r.jsx)(c.Z, {
      user: P,
      size: o.EFr.SIZE_20
    }),
    id: "integration-owner",
    label: P.username,
    subtext: v.NW.formatToPlainString(v.t.ShLXXF, {
      application: e.author.username
    })
  })), (0, r.jsxs)(o.sNh, {
    id: "view-interaction-info",
    label: v.NW.string(v.t.Rjezb2),
    children: [T, null != _ ? (0, r.jsx)(o.sNh, {
      action: () => (0, f.openUserProfileModal)({
        userId: _.id,
        guildId: x,
        channelId: e.channel_id,
        analyticsLocation: {
          object: h.qAy.MESSAGE_ACTION_SHEET
        }
      }),
      className: y.interactionInfoMenuItem,
      iconLeft: () => (0, r.jsx)(c.Z, {
        user: _,
        size: o.EFr.SIZE_20
      }),
      id: "interaction-user",
      label: _.username,
      subtext: v.NW.string(v.t["04gxNj"])
    }) : null]
  })
}