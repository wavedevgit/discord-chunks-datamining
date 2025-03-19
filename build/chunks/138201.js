/** Chunk was on 94989 **/
r.d(t, {
  ZP: () => u,
  rT: () => o
}), r(266796);
var n = r(200651);
r(192379);
var l = r(120356),
  s = r.n(l),
  i = r(481060),
  a = r(770731);

function c(e) {
  let {
    title: t
  } = e;
  return (0, n.jsx)(i.Text, {
    variant: "text-sm/semibold",
    color: "header-secondary",
    children: t
  })
}

function o(e) {
  let {
    children: t,
    title: r,
    description: l,
    accessibilityRole: s = "none",
    accessibilityLabel: o
  } = e;
  return (0, n.jsxs)("div", {
    className: a.tableRowGroup,
    children: [null != r && (0, n.jsx)(c, {
      title: r
    }), null != l && (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: l
    }), (0, n.jsx)("div", {
      className: a.content,
      role: s,
      "aria-label": o,
      children: t
    })]
  })
}

function u(e) {
  let {
    icon: t,
    title: r,
    titleVariant: l = "text-md/semibold",
    description: c,
    descriptionVariant: o = "text-xs/medium",
    iconClassName: u,
    color: d,
    buttonText: m,
    buttonColor: p = i.zxk.Colors.PRIMARY,
    buttonSize: f = i.zxk.Sizes.SMALL,
    buttonLook: j = i.zxk.Looks.FILLED,
    buttonDisabled: x,
    onButtonPress: b,
    listType: v = "icon",
    index: g
  } = e, h = null != m ? (0, n.jsx)(i.zxk, {
    className: a.button,
    size: f,
    color: p,
    look: j,
    disabled: x,
    "aria-label": m,
    onClick: b,
    children: m
  }) : void 0;
  return (0, n.jsxs)("div", {
    className: a.row,
    children: ["numbered" === v && null != g ? (0, n.jsx)(i.X6q, {
      variant: "heading-md/semibold",
      color: "text-brand",
      className: a.number,
      children: g + 1
    }) : null != t && (0, n.jsx)("div", {
      className: a.iconContainer,
      children: (0, n.jsx)(t, {
        color: null != d ? d : "currentColor",
        className: s()(a.icon, u)
      })
    }), (0, n.jsxs)("div", {
      className: a.textContainer,
      children: [(0, n.jsx)(i.Text, {
        variant: l,
        color: "header-primary",
        children: r
      }), null != c && (0, n.jsx)(i.Text, {
        variant: o,
        color: "text-secondary",
        children: c
      })]
    }), null != h && h]
  })
}