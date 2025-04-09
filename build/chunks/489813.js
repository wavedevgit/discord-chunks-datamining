/** Chunk was on 53967 **/
n.d(t, {
  Ih: () => a,
  PU: () => u,
  hK: () => s
});
var i = n(200651);
n(192379);
var r = n(692547),
  l = n(481060),
  o = n(396561);

function s(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, i.jsxs)("div", {
    className: o.questionContainer,
    children: [(0, i.jsx)(l.Text, {
      className: o.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), n]
  })
}

function a(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: s
  } = e;
  return (0, i.jsxs)("div", {
    className: o.requirementContainer,
    children: [(0, i.jsx)(t, {
      className: o.requirementIcon,
      height: 20,
      width: 20,
      size: "custom",
      color: "currentColor"
    }), (0, i.jsx)(l.Text, {
      className: o.requirementText,
      variant: "text-md/normal",
      children: n
    }), s ? (0, i.jsx)(l.owK, {
      size: "md",
      color: "currentColor",
      className: o.requirementSuccess,
      secondaryColor: r.Z.colors.WHITE.css
    }) : (0, i.jsx)(l.k$p, {
      size: "md",
      color: "currentColor",
      className: o.requirementFailure,
      secondaryColor: r.Z.colors.WHITE.css
    })]
  })
}

function u(e) {
  let {
    icon: t,
    text: n,
    footnote: s,
    meetsRequirement: a,
    children: u
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: o.requirementContainer,
      children: [(0, i.jsx)(t, {
        className: o.requirementIcon,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, i.jsx)(l.Text, {
        className: o.requirementText,
        variant: "text-md/normal",
        children: n
      }), a ? (0, i.jsx)(l.owK, {
        size: "md",
        color: "currentColor",
        className: o.requirementSuccess,
        secondaryColor: r.Z.colors.WHITE.css
      }) : u]
    }), null != s && (0, i.jsx)(l.Text, {
      color: "header-secondary",
      className: o.footnote,
      variant: "text-xs/normal",
      children: s
    })]
  })
}