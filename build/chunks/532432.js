/** Chunk was on 1815 **/
n.d(t, {
  Z: () => E
}), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  l = n(704215),
  o = n(481060),
  c = n(243778),
  d = n(643879),
  u = n(373230),
  m = n(594174),
  p = n(74538),
  g = n(654904),
  h = n(993413),
  f = n(921944),
  b = n(486324),
  N = n(388032),
  x = n(50719);
let _ = [{
  name: "gif",
  extensions: ["gif"]
}];

function E(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: i,
    sectionTitle: E,
    changeAvatarButtonText: j,
    guildId: C,
    className: O,
    disabled: v = !1,
    isTryItOutFlow: S = !1,
    forcedDivider: T,
    withHighlight: I = !1
  } = e, y = I ? o.gtL : o.zxk, A = (0, a.e7)([m.default], () => m.default.getCurrentUser()), P = (0, u.Tq)({
    location: "AvatarSection"
  }), R = [];
  P && R.push(l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
  let [D, Z] = (0, c.US)(R), w = D === l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE, k = p.ZP.canUseIncreasedRecentAvatarsLimit(A), {
    recentAvatarsLimit: W
  } = (0, d.pC)(k);
  return (0, r.jsx)(h.Z, {
    className: O,
    title: E,
    titleIcon: w ? (0, r.jsx)(o.IGR, {
      text: N.NW.string(N.t.y2b7CA),
      className: x.newBadge
    }) : void 0,
    description: P ? N.NW.format(N.t["+CyJu7"], {
      recentAvatarsLimit: W
    }) : void 0,
    errors: n,
    disabled: v,
    forcedDivider: T,
    children: (0, r.jsxs)("div", {
      className: x.buttonsContainer,
      children: [(0, r.jsx)(y, {
        className: s()({
          [x.buttonHighlighted]: I
        }),
        size: o.zxk.Sizes.SMALL,
        onClick: () => {
          Z(f.L.TAKE_ACTION), (0, g.$r)(b.pC.AVATAR, C, S, S ? _ : void 0)
        },
        children: null != j ? j : N.NW.string(N.t["4OynCA"])
      }), t && (0, r.jsx)(o.zxk, {
        className: x.removeButton,
        color: o.zxk.Colors.PRIMARY,
        look: o.zxk.Looks.LINK,
        size: o.zxk.Sizes.SMALL,
        onClick: () => i(null),
        children: null != C ? N.NW.string(N.t.TDjKDg) : N.NW.string(N.t.twB3f3)
      })]
    })
  })
}