/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  L: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(962086),
  a = n(225675),
  l = n(671533),
  o = n(434404),
  A = n(981631),
  c = n(388032),
  d = n(464303);

function u(e) {
  let {
    guildId: t,
    role: n
  } = e;
  return (0, r.jsxs)(i.xJW, {
    title: c.NW.string(c.t.arFPfH),
    className: d.container,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: c.NW.string(c.t["IT/0AA"])
    }), (0, r.jsxs)(i.zxk, {
      className: d.button,
      innerClassName: d.buttonInner,
      size: i.zxk.Sizes.SMALL,
      color: i.zxk.Colors.PRIMARY,
      onClick: () => {
        o.Z.close(), (0, s.iD)(t, {
          type: a.z.ROLES,
          roles: {
            [n.id]: n
          },
          returnToSection: A.pNK.ROLES
        })
      },
      children: [c.NW.string(c.t.arFPfH), (0, r.jsx)(l.Z, {
        width: 16,
        height: 16,
        direction: l.Z.Directions.RIGHT,
        className: d.arrowIcon
      })]
    })]
  })
}