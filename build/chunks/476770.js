/** Chunk was on 99840 **/
t.d(n, {
  CA: () => d,
  Ih: () => u,
  PU: () => m,
  hK: () => c
});
var r = t(200651);
t(192379);
var o = t(120356),
  i = t.n(o),
  a = t(692547),
  s = t(481060),
  l = t(299843);

function c(e) {
  let {
    title: n,
    children: t
  } = e;
  return (0, r.jsxs)("div", {
    className: l.questionContainer,
    children: [(0, r.jsx)(s.Text, {
      className: l.questionTitle,
      variant: "text-md/normal",
      color: "header-primary",
      children: n
    }), t]
  })
}

function d(e) {
  let {
    title: n,
    children: t
  } = e;
  return (0, r.jsxs)("div", {
    className: l.disabledQuestionContainer,
    children: [(0, r.jsx)(s.Text, {
      className: l.questionTitle,
      variant: "text-sm/medium",
      color: "text-muted",
      children: n
    }), t]
  })
}

function u(e) {
  let {
    icon: n,
    text: t,
    meetsRequirement: o
  } = e;
  return (0, r.jsxs)("div", {
    className: l.requirementContainer,
    children: [(0, r.jsx)(n, {
      className: l.requirementIcon,
      height: 16,
      width: 16,
      size: "custom",
      color: "currentColor"
    }), (0, r.jsx)(s.Text, {
      className: l.requirementText,
      variant: "text-sm/medium",
      children: t
    }), o ? (0, r.jsx)(s.owK, {
      size: "sm",
      color: "currentColor",
      className: l.requirementSuccess,
      secondaryColor: a.Z.colors.WHITE.css
    }) : (0, r.jsx)(s.k$p, {
      size: "sm",
      color: "currentColor",
      className: l.requirementFailure,
      secondaryColor: a.Z.colors.WHITE.css
    })]
  })
}

function m(e) {
  let {
    icon: n,
    text: t,
    footnote: o,
    meetsRequirement: c,
    children: d,
    className: u
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: i()(l.requirementContainer, u),
      children: [(0, r.jsx)(n, {
        className: l.requirementIcon,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, r.jsx)(s.Text, {
        className: l.requirementText,
        variant: "text-md/normal",
        children: t
      }), c ? (0, r.jsx)(s.owK, {
        size: "md",
        color: "currentColor",
        className: l.requirementSuccess,
        secondaryColor: a.Z.colors.WHITE.css
      }) : d]
    }), null != o && (0, r.jsx)(s.Text, {
      color: "header-secondary",
      className: l.footnote,
      variant: "text-xs/normal",
      children: o
    })]
  })
}