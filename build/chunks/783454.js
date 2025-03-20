/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(313201),
  A = n(259580),
  c = n(404203),
  d = n(388032),
  u = n(64288);

function g(e) {
  let {
    intiallyExpanded: t = !1,
    title: n,
    description: s,
    children: g
  } = e, [f, m] = i.useState(t), p = () => m(e => !e), h = (0, o.Dt)();
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(c.Z, {
      className: a()(u.header, {
        [u.headerWithDescription]: f && null != s
      }),
      onClick: p,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: i
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.X6q, {
            variant: "heading-md/semibold",
            children: n
          }), (0, r.jsx)(l.P3F, {
            onClick: i(p),
            "aria-label": d.NW.string(d.t.e5eQOz),
            "aria-controls": h,
            "aria-expanded": f,
            focusProps: {
              ringTarget: t
            },
            children: (0, r.jsx)(A.Z, {
              className: u.caret,
              direction: f ? A.Z.Directions.UP : A.Z.Directions.DOWN
            })
          })]
        })
      }
    }), f && (0, r.jsxs)("div", {
      id: h,
      children: [null != s && (0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        className: u.description,
        children: s
      }), (0, r.jsx)("div", {
        className: u.divider
      }), (0, r.jsx)("div", {
        className: u.content,
        children: g
      })]
    })]
  })
}