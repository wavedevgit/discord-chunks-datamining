/** Chunk was on 98697 **/
n.d(t, {
  Z: () => _
});
var r = n(200651),
  i = n(481060),
  o = n(99690),
  l = n(473188),
  a = n(854848),
  s = n(191420),
  c = n(774621),
  u = n(49274),
  d = n(904141);

function _(e) {
  let {
    user: t,
    rank: n,
    rankBadgeVisibility: _ = "visible",
    avatarClassName: p,
    avatarSize: E = i.EFr.SIZE_40
  } = e, f = (0, i.pxk)(E);
  return (0, r.jsxs)("div", {
    className: a.container,
    style: {
      width: "".concat(f, "px"),
      height: "".concat(f, "px")
    },
    children: [(0, r.jsx)("img", {
      className: a.frame,
      src: 1 === n ? s : 2 === n ? c : 3 === n ? u : d,
      style: {
        width: f + 8,
        height: f + 8
      },
      alt: ""
    }), (0, r.jsx)(o.Z, {
      className: p,
      user: t,
      size: E
    }), "hidden" !== _ && (0, r.jsx)("div", {
      className: a.rankBadge,
      children: (0, r.jsx)(l._, {
        rank: n,
        hideInnerBorder: "visibleWithoutBorder" === _
      })
    })]
  })
}