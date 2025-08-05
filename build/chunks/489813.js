/** Chunk was on 77025 **/
n.d(t, {
  CA: () => u,
  Ih: () => d,
  PU: () => m,
  hK: () => c
});
var r = n(255367);
n(73800);
var i = n(120356),
  l = n.n(i),
  s = n(692547),
  a = n(481060),
  o = n(396561);

function c(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o.questionContainer,
    children: [(0, r.jsx)(a.Text, {
      className: o.questionTitle,
      variant: "text-md/normal",
      color: "header-primary",
      children: t
    }), n]
  })
}

function u(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o.disabledQuestionContainer,
    children: [(0, r.jsx)(a.Text, {
      className: o.questionTitle,
      variant: "text-sm/medium",
      color: "text-muted",
      children: t
    }), n]
  })
}

function d(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: i
  } = e;
  return (0, r.jsxs)("div", {
    className: o.requirementContainer,
    children: [(0, r.jsx)(t, {
      className: o.requirementIcon,
      height: 16,
      width: 16,
      size: "custom",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      className: o.requirementText,
      variant: "text-sm/medium",
      children: n
    }), i ? (0, r.jsx)(a.owK, {
      size: "sm",
      color: "currentColor",
      className: o.requirementSuccess,
      secondaryColor: s.Z.colors.WHITE.css
    }) : (0, r.jsx)(a.k$p, {
      size: "sm",
      color: "currentColor",
      className: o.requirementFailure,
      secondaryColor: s.Z.colors.WHITE.css
    })]
  })
}

function m(e) {
  let {
    icon: t,
    text: n,
    footnote: i,
    meetsRequirement: c,
    children: u,
    className: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(o.requirementContainer, d),
      children: [(0, r.jsx)(t, {
        className: o.requirementIcon,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, r.jsx)(a.Text, {
        className: o.requirementText,
        variant: "text-md/normal",
        children: n
      }), c ? (0, r.jsx)(a.owK, {
        size: "md",
        color: "currentColor",
        className: o.requirementSuccess,
        secondaryColor: s.Z.colors.WHITE.css
      }) : u]
    }), null != i && (0, r.jsx)(a.Text, {
      color: "header-secondary",
      className: o.footnote,
      variant: "text-xs/normal",
      children: i
    })]
  })
}