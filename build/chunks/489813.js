/** Chunk was on 99840 **/
t.d(n, {
  Ih: () => l,
  PU: () => c,
  hK: () => s
});
var r = t(200651);
t(192379);
var o = t(692547),
  i = t(481060),
  a = t(957255);

function s(e) {
  let {
    title: n,
    children: t
  } = e;
  return (0, r.jsxs)("div", {
    className: a.questionContainer,
    children: [(0, r.jsx)(i.Text, {
      className: a.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: n
    }), t]
  })
}

function l(e) {
  let {
    icon: n,
    text: t,
    meetsRequirement: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a.requirementContainer,
    children: [(0, r.jsx)(n, {
      className: a.requirementIcon,
      height: 20,
      width: 20,
      size: "custom",
      color: "currentColor"
    }), (0, r.jsx)(i.Text, {
      className: a.requirementText,
      variant: "text-md/normal",
      children: t
    }), s ? (0, r.jsx)(i.owK, {
      size: "md",
      color: "currentColor",
      className: a.requirementSuccess,
      secondaryColor: o.Z.colors.WHITE.css
    }) : (0, r.jsx)(i.k$p, {
      size: "md",
      color: "currentColor",
      className: a.requirementFailure,
      secondaryColor: o.Z.colors.WHITE.css
    })]
  })
}

function c(e) {
  let {
    icon: n,
    text: t,
    footnote: s,
    meetsRequirement: l,
    children: c
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a.requirementContainer,
      children: [(0, r.jsx)(n, {
        className: a.requirementIcon,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, r.jsx)(i.Text, {
        className: a.requirementText,
        variant: "text-md/normal",
        children: t
      }), l ? (0, r.jsx)(i.owK, {
        size: "md",
        color: "currentColor",
        className: a.requirementSuccess,
        secondaryColor: o.Z.colors.WHITE.css
      }) : c]
    }), null != s && (0, r.jsx)(i.Text, {
      color: "header-secondary",
      className: a.footnote,
      variant: "text-xs/normal",
      children: s
    })]
  })
}