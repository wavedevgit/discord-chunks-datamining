/** Chunk was on 99916 **/
r.d(t, {
  CA: () => u,
  Ih: () => d,
  PU: () => f,
  hK: () => a
});
var n = r(200651);
r(192379);
var i = r(120356),
  o = r.n(i),
  s = r(692547),
  l = r(481060),
  c = r(747995);

function a(e) {
  let {
    title: t,
    children: r
  } = e;
  return (0, n.jsxs)("div", {
    className: c.questionContainer,
    children: [(0, n.jsx)(l.Text, {
      className: c.questionTitle,
      variant: "text-md/normal",
      color: "header-primary",
      children: t
    }), r]
  })
}

function u(e) {
  let {
    title: t,
    children: r
  } = e;
  return (0, n.jsxs)("div", {
    className: c.disabledQuestionContainer,
    children: [(0, n.jsx)(l.Text, {
      className: c.questionTitle,
      variant: "text-sm/medium",
      color: "text-muted",
      children: t
    }), r]
  })
}

function d(e) {
  let {
    icon: t,
    text: r,
    meetsRequirement: i
  } = e;
  return (0, n.jsxs)("div", {
    className: c.requirementContainer,
    children: [(0, n.jsx)(t, {
      className: c.requirementIcon,
      height: 16,
      width: 16,
      size: "custom",
      color: "currentColor"
    }), (0, n.jsx)(l.Text, {
      className: c.requirementText,
      variant: "text-sm/medium",
      children: r
    }), i ? (0, n.jsx)(l.owK, {
      size: "sm",
      color: "currentColor",
      className: c.requirementSuccess,
      secondaryColor: s.Z.colors.WHITE.css
    }) : (0, n.jsx)(l.k$p, {
      size: "sm",
      color: "currentColor",
      className: c.requirementFailure,
      secondaryColor: s.Z.colors.WHITE.css
    })]
  })
}

function f(e) {
  let {
    icon: t,
    text: r,
    footnote: i,
    meetsRequirement: a,
    children: u,
    className: d
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: o()(c.requirementContainer, d),
      children: [(0, n.jsx)(t, {
        className: c.requirementIcon,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, n.jsx)(l.Text, {
        className: c.requirementText,
        variant: "text-md/normal",
        children: r
      }), a ? (0, n.jsx)(l.owK, {
        size: "md",
        color: "currentColor",
        className: c.requirementSuccess,
        secondaryColor: s.Z.colors.WHITE.css
      }) : u]
    }), null != i && (0, n.jsx)(l.Text, {
      color: "header-secondary",
      className: c.footnote,
      variant: "text-xs/normal",
      children: i
    })]
  })
}