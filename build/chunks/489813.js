/** Chunk was on 53967 **/
n.d(t, {
  CA: () => c,
  Ih: () => d,
  PU: () => E,
  hK: () => u
});
var i = n(200651);
n(192379);
var r = n(120356),
  l = n.n(r),
  o = n(692547),
  s = n(481060),
  a = n(396561);

function u(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, i.jsxs)("div", {
    className: a.questionContainer,
    children: [(0, i.jsx)(s.Text, {
      className: a.questionTitle,
      variant: "text-md/normal",
      color: "header-primary",
      children: t
    }), n]
  })
}

function c(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, i.jsxs)("div", {
    className: a.disabledQuestionContainer,
    children: [(0, i.jsx)(s.Text, {
      className: a.questionTitle,
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
    meetsRequirement: r
  } = e;
  return (0, i.jsxs)("div", {
    className: a.requirementContainer,
    children: [(0, i.jsx)(t, {
      className: a.requirementIcon,
      height: 16,
      width: 16,
      size: "custom",
      color: "currentColor"
    }), (0, i.jsx)(s.Text, {
      className: a.requirementText,
      variant: "text-sm/medium",
      children: n
    }), r ? (0, i.jsx)(s.owK, {
      size: "sm",
      color: "currentColor",
      className: a.requirementSuccess,
      secondaryColor: o.Z.colors.WHITE.css
    }) : (0, i.jsx)(s.k$p, {
      size: "sm",
      color: "currentColor",
      className: a.requirementFailure,
      secondaryColor: o.Z.colors.WHITE.css
    })]
  })
}

function E(e) {
  let {
    icon: t,
    text: n,
    footnote: r,
    meetsRequirement: u,
    children: c,
    className: d
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(a.requirementContainer, d),
      children: [(0, i.jsx)(t, {
        className: a.requirementIcon,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, i.jsx)(s.Text, {
        className: a.requirementText,
        variant: "text-md/normal",
        children: n
      }), u ? (0, i.jsx)(s.owK, {
        size: "md",
        color: "currentColor",
        className: a.requirementSuccess,
        secondaryColor: o.Z.colors.WHITE.css
      }) : c]
    }), null != r && (0, i.jsx)(s.Text, {
      color: "header-secondary",
      className: a.footnote,
      variant: "text-xs/normal",
      children: r
    })]
  })
}