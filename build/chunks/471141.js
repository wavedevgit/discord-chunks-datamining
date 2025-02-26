/** Chunk was on web.js **/
"use strict";
n.d(t, {
  j: () => _
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(84735),
  l = n(437337),
  c = n(981729),
  u = n(770102),
  d = n(534542),
  f = n(466372);

function _(e) {
  let {
    value: t,
    disabled: n = !1,
    hideBorder: o = !1,
    tooltipNote: _,
    onChange: p,
    className: h,
    style: g,
    note: m,
    children: E,
    disabledText: v,
    containerRef: b
  } = e, y = i.useRef(null), O = i.useRef(null), S = i.useId(), I = (0, r.jsx)(l.r, {
    id: S,
    checked: t,
    onChange: p,
    disabled: n,
    focusProps: {
      enabled: !1
    },
    innerRef: y
  });
  return (0, r.jsxs)("div", {
    ref: b,
    style: g,
    className: a()(f.container, h, {
      [f.disabled]: n
    }),
    children: [(0, r.jsx)(s.t, {
      within: !0,
      offset: -4,
      focusTarget: y,
      ringTarget: O,
      children: (0, r.jsxs)("div", {
        className: f.labelRow,
        ref: O,
        children: [(0, r.jsx)("label", {
          htmlFor: S,
          className: f.title,
          children: E
        }), (0, r.jsx)("div", {
          className: f.control,
          children: null != _ ? (0, r.jsx)(c.DY, {
            text: _,
            children: I
          }) : I
        })]
      })
    }), null != m && (0, r.jsx)("div", {
      className: f.note,
      children: (0, r.jsx)(d.R, {
        disabled: n,
        type: d.g.DESCRIPTION,
        children: m
      })
    }), n && null != v && (0, r.jsx)("div", {
      className: f.disabledText,
      children: (0, r.jsx)(d.R, {
        type: d.g.ERROR,
        children: v
      })
    }), !o && (0, r.jsx)(u.$, {
      className: f.dividerDefault
    })]
  })
}