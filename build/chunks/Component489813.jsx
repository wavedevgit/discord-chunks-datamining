/** Chunk was on 36605 **/
/** chunk id: 489813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CA: () => u,
  Ih: () => d,
  PU: () => m,
  hK: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk690663 = require("./690663.js");

function c(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a.questionContainer,
    children: [(0, r.jsx)(o.Text, {
      className: a.questionTitle,
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
    className: a.disabledQuestionContainer,
    children: [(0, r.jsx)(o.Text, {
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
    meetsRequirement: i
  } = e;
  return (0, r.jsxs)("div", {
    className: a.requirementContainer,
    children: [(0, r.jsx)(t, {
      className: a.requirementIcon,
      height: 16,
      width: 16,
      size: "custom",
      color: "currentColor"
    }), (0, r.jsx)(o.Text, {
      className: a.requirementText,
      variant: "text-sm/medium",
      children: n
    }), i ? (0, r.jsx)(o.owK, {
      size: "sm",
      color: "currentColor",
      className: a.requirementSuccess,
      secondaryColor: s.Z.colors.WHITE.css
    }) : (0, r.jsx)(o.k$p, {
      size: "sm",
      color: "currentColor",
      className: a.requirementFailure,
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
      className: l()(a.requirementContainer, d),
      children: [(0, r.jsx)(t, {
        className: a.requirementIcon,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, r.jsx)(o.Text, {
        className: a.requirementText,
        variant: "text-md/normal",
        children: n
      }), c ? (0, r.jsx)(o.owK, {
        size: "md",
        color: "currentColor",
        className: a.requirementSuccess,
        secondaryColor: s.Z.colors.WHITE.css
      }) : u]
    }), null != i && (0, r.jsx)(o.Text, {
      color: "header-secondary",
      className: a.footnote,
      variant: "text-xs/normal",
      children: i
    })]
  })
}