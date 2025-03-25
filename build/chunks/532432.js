/** Chunk was on 75607 **/
n.d(t, {
  Z: () => _
}), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(704215),
  l = n(481060),
  o = n(243778),
  c = n(643879),
  d = n(373230),
  u = n(598989),
  m = n(87478),
  g = n(654904),
  p = n(993413),
  h = n(921944),
  f = n(486324),
  x = n(388032),
  N = n(50719);
let b = [{
  name: "gif",
  extensions: ["gif"]
}];

function _(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: i,
    sectionTitle: _,
    changeAvatarButtonText: E,
    guildId: j,
    className: C,
    disabled: O = !1,
    isTryItOutFlow: v = !1,
    forcedDivider: S,
    withHighlight: T = !1
  } = e, I = T ? l.gtL : l.zxk, y = (0, d.Tq)({
    location: "AvatarSection"
  }), A = [];
  y && A.push(a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
  let [P, R] = (0, o.US)(A), D = P === a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE, Z = (0, u._)(), {
    recentAvatarsLimit: w
  } = (0, c.pC)(Z);
  return (0, r.jsx)(p.Z, {
    className: C,
    title: _,
    titleIcon: D ? (0, r.jsx)(m.Z, {
      className: N.newBadge
    }) : void 0,
    description: y ? x.NW.format(x.t["+CyJu7"], {
      recentAvatarsLimit: w
    }) : void 0,
    errors: n,
    disabled: O,
    forcedDivider: S,
    children: (0, r.jsxs)("div", {
      className: N.buttonsContainer,
      children: [(0, r.jsx)(I, {
        className: s()({
          [N.buttonHighlighted]: T
        }),
        size: l.zxk.Sizes.SMALL,
        onClick: () => {
          R(h.L.TAKE_ACTION), (0, g.$r)(f.pC.AVATAR, j, v, v ? b : void 0)
        },
        children: null != E ? E : x.NW.string(x.t["4OynCA"])
      }), t && (0, r.jsx)(l.zxk, {
        className: N.removeButton,
        color: l.zxk.Colors.PRIMARY,
        look: l.zxk.Looks.LINK,
        size: l.zxk.Sizes.SMALL,
        onClick: () => i(null),
        children: null != j ? x.NW.string(x.t.TDjKDg) : x.NW.string(x.t.twB3f3)
      })]
    })
  })
}