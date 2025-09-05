/** Chunk was on web.js **/
/** chunk id: 795057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => u,
  y3: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js");
require("./509212.js"), require("./373370.js"), require("./566078.js"), require("./388032.jsx");
var Chunk879615 = require("./879615.js");

function l(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: i
  } = e;
  return (0, r.jsxs)("li", {
    className: a()(s.stepWrapper, {
      [s.stepWrapperComplete]: n
    }, {
      [s.stepWrapperWithNextStep]: i
    }),
    children: [(0, r.jsxs)("div", {
      className: s.stepIndicator,
      children: [(0, r.jsx)("div", {
        className: s.stepIconWrapper,
        children: n && (0, r.jsx)(o.sV5, {
          className: s.stepIcon,
          color: o.TVs.colors.WHITE
        })
      }), i && (0, r.jsx)("div", {
        className: s.stepConnector
      })]
    }), (0, r.jsx)("div", {
      className: s.stepContent,
      children: t
    })]
  })
}

function c(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(o.Text, {
    color: "text-muted",
    variant: "text-xs/medium",
    children: t
  })
}
let u = function(e) {
  let {
    children: t,
    heading: n,
    steps: i
  } = e;
  return (0, r.jsxs)("div", {
    className: s.wrapper,
    children: [(0, r.jsx)("div", {
      className: s.headingWrapper,
      children: (0, r.jsx)(o.X6q, {
        className: s.heading,
        color: "header-primary",
        variant: "text-xs/semibold",
        children: n
      })
    }), (0, r.jsx)("div", {
      className: s.stepsWrapper,
      children: (0, r.jsx)("ul", {
        children: i.map((e, t) => (0, r.jsx)(l, {
          isComplete: e.isComplete,
          hasNextStep: t < i.length - 1,
          children: e.renderContent()
        }, t))
      })
    }), t]
  })
}