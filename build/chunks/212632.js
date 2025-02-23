/** Chunk was on 56650 (33b0f97b2e76d752.js) **/
n.d(t, {
  Z: () => p
}), n(47120);
var l = n(200651),
  r = n(192379),
  i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(981631),
  c = n(388032),
  u = n(719965),
  d = n(455812);
let E = 0,
  f = () => "notification-position-selector-".concat(E++),
  C = e => {
    switch (e) {
      case s._vf.TOP_LEFT:
        return c.NW.string(c.t.xlchpa);
      case s._vf.TOP_RIGHT:
        return c.NW.string(c.t["4uHRHB"]);
      case s._vf.BOTTOM_LEFT:
        return c.NW.string(c.t.ovWFnJ);
      case s._vf.BOTTOM_RIGHT:
        return c.NW.string(c.t["M/9V7+"]);
      default:
        return c.NW.string(c.t.AlY4ZW)
    }
  },
  _ = [s._vf.DISABLED, s._vf.TOP_LEFT, s._vf.TOP_RIGHT, s._vf.BOTTOM_LEFT, s._vf.BOTTOM_RIGHT];

function h(e) {
  let {
    position: t,
    onChange: n
  } = e, [i] = r.useState(() => f()), E = t === s._vf.DISABLED ? c.NW.string(c.t.R6LxVV) : c.NW.formatToPlainString(c.t.XXHDMz, {
    position: C(t)
  });
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(o.tEY, {
      within: !0,
      offset: -2,
      children: (0, l.jsx)("div", {
        className: a()(u.wrapper, {
          [u.disabledSelected]: t === s._vf.DISABLED
        }),
        children: _.map(e => (0, l.jsxs)("label", {
          className: a()({
            [u.selected]: e === t,
            [u.disabled]: e === s._vf.DISABLED,
            [u.topRight]: e === s._vf.TOP_RIGHT,
            [u.topLeft]: e === s._vf.TOP_LEFT,
            [u.bottomRight]: e === s._vf.BOTTOM_RIGHT,
            [u.bottomLeft]: e === s._vf.BOTTOM_LEFT
          }),
          children: [C(e), e === s._vf.DISABLED ? (0, l.jsx)(o.t6m, {
            size: "md",
            color: "currentColor",
            className: u.disabledIcon
          }) : null, (0, l.jsx)("input", {
            type: "radio",
            name: i,
            value: e,
            onChange: t => n(t, e),
            className: u.hiddenInput
          })]
        }, e))
      })
    }), (0, l.jsx)(o.R94, {
      type: o.geA.DESCRIPTION,
      className: d.marginTop8,
      children: E
    })]
  })
}
h.Positions = s._vf;
let p = h