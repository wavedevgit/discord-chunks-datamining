/** Chunk was on 51724 **/
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(654904),
  o = n(993413),
  c = n(486324),
  d = n(388032),
  u = n(50719);
let m = [{
  name: "gif",
  extensions: ["gif"]
}];

function p(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: i,
    sectionTitle: p,
    changeAvatarButtonText: g,
    guildId: h,
    className: f,
    disabled: x = !1,
    isTryItOutFlow: b = !1,
    forcedDivider: N,
    withHighlight: _ = !1
  } = e, E = _ ? a.gtL : a.zxk;
  return (0, r.jsx)(o.Z, {
    className: f,
    title: p,
    errors: n,
    disabled: x,
    forcedDivider: N,
    children: (0, r.jsxs)("div", {
      className: u.buttonsContainer,
      children: [(0, r.jsx)(E, {
        className: s()({
          [u.buttonHighlighted]: _
        }),
        size: a.zxk.Sizes.SMALL,
        onClick: () => (0, l.$r)(c.pC.AVATAR, h, b, b ? m : void 0),
        children: null != g ? g : d.NW.string(d.t["4OynCA"])
      }), t && (0, r.jsx)(a.zxk, {
        className: u.removeButton,
        color: a.zxk.Colors.PRIMARY,
        look: a.zxk.Looks.LINK,
        size: a.zxk.Sizes.SMALL,
        onClick: () => i(null),
        children: null != h ? d.NW.string(d.t.TDjKDg) : d.NW.string(d.t.twB3f3)
      })]
    })
  })
}