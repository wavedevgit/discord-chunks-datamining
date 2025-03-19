/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(550271),
  o = n(434404),
  c = n(254925),
  A = n(976260),
  d = n(388032),
  u = n(935921);
let g = function(e) {
  let {
    className: t,
    guildId: n
  } = e;
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(a.vwX, {
      className: u.sectionTitle,
      children: d.NW.string(A.Z.pb7lpK)
    }), (0, r.jsx)("div", {
      className: u.pickerGrid,
      children: c.QV.map(t => (0, r.jsx)(a.P3F, {
        className: s()(u.pickerItem, {
          [u.pickerItemSelected]: t === e.badge
        }),
        onClick: () => {
          o.Z.updateGuildProfile(n, {
            badge: t
          })
        },
        children: (0, r.jsx)(l.A, {
          badge: t,
          width: 32,
          height: 32
        })
      }, t))
    })]
  })
}