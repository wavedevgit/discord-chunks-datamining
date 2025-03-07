/** Chunk was on web.js **/
"use strict";
n.d(t, {
  JO: () => g,
  ZP: () => y,
  iz: () => E
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(608863),
  l = n(873546),
  c = n(481060),
  u = n(290297),
  d = n(686546),
  f = n(540059),
  _ = n(79712),
  p = n(414273);
let h = 24,
  m = e => {
    let {
      className: t,
      wrapperClassName: n,
      children: i,
      onContextMenu: o,
      onClick: s,
      id: l,
      muted: u = !1,
      level: d = 1
    } = e, _ = (0, f.Q3)("BaseHeaderBar"), h = (0, r.jsx)(c.y5t, {
      forceLevel: d,
      children: (0, r.jsx)(c.X6q, {
        variant: _ ? "text-md/medium" : "heading-md/semibold",
        color: u ? "header-secondary" : void 0,
        className: a()(t, p.title),
        id: l,
        children: i
      })
    });
    return null != s ? (0, r.jsx)(c.P3F, {
      onClick: s,
      onContextMenu: o,
      className: a()(n, p.titleWrapper),
      children: h
    }) : (0, r.jsx)("div", {
      className: a()(n, p.titleWrapper),
      onContextMenu: o,
      children: h
    })
  },
  g = e => {
    let {
      className: t,
      iconClassName: n,
      children: i,
      selected: o = !1,
      disabled: s = !1,
      showBadge: l = !1,
      badgePosition: u = "bottom",
      color: _,
      foreground: m,
      background: g,
      icon: E,
      iconSize: v = h,
      onClick: b,
      onContextMenu: y,
      tooltip: O = null,
      tooltipColor: I,
      tooltipPosition: S = "bottom",
      tooltipDisabled: T,
      hideOnClick: N = !0,
      role: A,
      "aria-label": C,
      "aria-hidden": R,
      "aria-checked": P,
      "aria-expanded": w,
      "aria-haspopup": D
    } = e, L = (0, f.Q3)("BaseHeaderBar"), x = (0, r.jsx)(E, {
      x: 0,
      y: 0,
      width: v,
      height: v,
      size: "custom",
      className: a()(n, p.icon),
      colorClass: null != m ? m : void 0,
      secondaryColorClass: null != g ? g : void 0,
      color: null != _ ? _ : "currentColor"
    }), M = C;
    return null == M && "string" == typeof O && (M = O), (0, r.jsx)(c.ua7, {
      text: O,
      color: I,
      position: S,
      hideOnClick: N,
      shouldShow: !T,
      children: e => {
        let {
          onMouseEnter: f,
          onMouseLeave: h,
          onFocus: O,
          onBlur: I
        } = e;
        return null == b ? (0, r.jsx)("div", {
          className: a()(t, p.iconWrapper, {
            [p.iconDisabled]: s
          }),
          children: (0, r.jsx)(E, {
            x: 0,
            y: 0,
            width: v,
            height: v,
            size: "custom",
            className: a()(n, p.icon),
            colorClass: null != m ? m : void 0,
            secondaryColorClass: null != g ? g : void 0,
            color: null != _ ? _ : "currentColor",
            "aria-hidden": R,
            onMouseEnter: f,
            onMouseLeave: h,
            onFocus: O,
            onBlur: I
          })
        }) : (0, r.jsxs)(c.P3F, {
          tag: "div",
          onClick: s ? void 0 : b,
          onContextMenu: s ? void 0 : y,
          onMouseEnter: f,
          onMouseLeave: h,
          onFocus: O,
          onBlur: I,
          className: a()(t, {
            [p.iconWrapper]: !0,
            [p.clickable]: !s && null != b,
            [p.selected]: o,
            [p.iconDisabled]: s
          }),
          role: A,
          "aria-label": M,
          "aria-hidden": R,
          "aria-checked": P,
          "aria-haspopup": D,
          "aria-expanded": w,
          tabIndex: s || null == b ? -1 : 0,
          children: [l ? (0, r.jsx)(d.ZP, {
            mask: "top" === u ? d.ZP.Masks.HEADER_BAR_BADGE_TOP : d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
            height: L ? v : void 0,
            width: L ? v : void 0,
            children: x
          }) : x, l ? (0, r.jsx)("span", {
            className: a()(p.iconBadge, "top" === u ? p.iconBadgeTop : p.iconBadgeBottom)
          }) : null, i]
        })
      }
    })
  },
  E = e => {
    let {
      className: t
    } = e;
    return (0, f.Q3)("BaseHeaderBar.Divider") ? (0, r.jsx)(_.Z, {
      className: a()(p.dot, t)
    }) : (0, r.jsx)("div", {
      className: a()(p.divider, t)
    })
  };

function v(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, r.jsx)(c.Fbu, {
    size: "md",
    color: "currentColor",
    className: p.caret
  }) : (0, r.jsx)(c.V7D, {
    size: "md",
    color: "currentColor",
    className: p.caret
  })
}
let b = e => {
  let {
    className: t,
    innerClassName: n,
    children: o,
    childrenBottom: d,
    toolbar: f,
    onDoubleClick: _,
    "aria-label": h,
    "aria-labelledby": m,
    role: g,
    scrollable: E,
    transparent: v = !1
  } = e, b = i.useRef(null), y = i.useContext(u.Z);
  return (0, r.jsx)("section", {
    className: a()(t, p.container, {
      [p.themed]: !v,
      [p.transparent]: v,
      [p.themedMobile]: l.tq
    }),
    "aria-label": h,
    "aria-labelledby": m,
    role: g,
    ref: b,
    children: (0, r.jsxs)(c.JcV, {
      containerRef: b,
      children: [(0, r.jsxs)("div", {
        className: p.upperContainer,
        children: [(0, r.jsxs)("div", {
          className: a()(p.children, n, {
            [p.scrollable]: E
          }),
          onDoubleClick: _,
          children: [l.tq && null != y ? (0, r.jsx)(s.r, {
            onClick: y,
            className: p.hamburger
          }) : null, o]
        }), null != f ? (0, r.jsx)("div", {
          className: p.toolbar,
          children: f
        }) : null]
      }), d]
    })
  })
};
b.Icon = g, b.Title = m, b.Divider = E, b.Caret = v;
let y = b