/** Chunk was on 74240 **/
/** chunk id: 489813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CA: () => u,
  Ih: () => d,
  PU: () => m,
  hK: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk690663 = require("./690663.js");

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
    meetsRequirement: l
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
    }), l ? (0, r.jsx)(a.owK, {
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
    footnote: l,
    meetsRequirement: c,
    children: u,
    className: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: i()(o.requirementContainer, d),
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
    }), null != l && (0, r.jsx)(a.Text, {
      color: "text-default",
      className: o.footnote,
      variant: "text-xs/normal",
      children: l
    })]
  })
}