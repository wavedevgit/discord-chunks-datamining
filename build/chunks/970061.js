/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
}), n(47120), n(13667), n(390547), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(642128),
  o = n(692547),
  A = n(481060),
  c = n(259580),
  d = n(319752);

function u(e) {
  let {
    checked: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.row,
    children: [(0, r.jsx)(A.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: d.rowText,
      children: n
    }), t ? (0, r.jsx)(A.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
      className: a()(d.rowIcon, d.rowIconChecked)
    }) : (0, r.jsx)("div", {
      className: a()(d.rowIcon, d.rowIconEmpty)
    })]
  })
}

function g(e) {
  let {
    title: t,
    children: n,
    buttonLabel: s,
    buttonCallback: a,
    disabled: o
  } = e, [g, f] = i.useState(!1), m = n.flatMap(e => e.items.map(e => e.completed)), p = m.filter(e => e).length / m.length, h = (0, A.q_F)({
    width: "".concat(100 * p, "%")
  });
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)(A.P3F, {
      className: d.headerBar,
      onClick: () => f(e => !e),
      children: [(0, r.jsx)(A.X6q, {
        variant: "heading-md/semibold",
        className: d.headerText,
        children: t
      }), (0, r.jsx)(c.Z, {
        direction: g ? c.Z.Directions.DOWN : c.Z.Directions.UP,
        className: d.headerCaret
      })]
    }), (0, r.jsx)("div", {
      className: d.progressBarOuter,
      children: (0, r.jsx)(l.animated.div, {
        className: d.progressBarInner,
        style: h
      })
    }), !g && n.map((e, t) => {
      let {
        title: n,
        items: s
      } = e;
      return (0, r.jsxs)(i.Fragment, {
        children: [t > 0 && (0, r.jsx)(A.$i$, {
          className: d.divider
        }), (0, r.jsx)(A.vwX, {
          className: d.categoryTitle,
          children: n
        }), s.map((e, t) => (0, r.jsx)(u, {
          children: e.description,
          checked: e.completed
        }, t))]
      }, t)
    }), null !== s && "" !== s && null !== a && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(A.$i$, {
        className: d.divider
      }), (0, r.jsx)(A.zxk, {
        className: d.button,
        size: A.zxk.Sizes.SMALL,
        color: A.zxk.Colors.BRAND,
        onClick: a,
        disabled: 1 !== p || o,
        children: s
      })]
    })]
  })
}