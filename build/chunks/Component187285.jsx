/** Chunk was on 83615 **/
/** chunk id: 187285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => d,
  y3: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js");
require("./373370.js"), require("./115179.js"), require("./388032.jsx");
var Chunk573938 = require("./573938.js");

function l(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: s
  } = e;
  return (0, r.jsxs)("li", {
    className: o()(i.stepWrapper, {
      [i.stepWrapperComplete]: n
    }, {
      [i.stepWrapperWithNextStep]: s
    }),
    children: [(0, r.jsxs)("div", {
      className: i.stepIndicator,
      children: [(0, r.jsx)("div", {
        className: i.stepIconWrapper,
        children: n && (0, r.jsx)(a.sV5, {
          className: i.stepIcon,
          color: a.TVs.colors.WHITE
        })
      }), s && (0, r.jsx)("div", {
        className: i.stepConnector
      })]
    }), (0, r.jsx)("div", {
      className: i.stepContent,
      children: t
    })]
  })
}

function c(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(a.Text, {
    color: "text-muted",
    variant: "text-xs/medium",
    children: t
  })
}
let d = function(e) {
  let {
    children: t,
    heading: n,
    steps: s
  } = e;
  return (0, r.jsxs)("div", {
    className: i.wrapper,
    children: [(0, r.jsx)("div", {
      className: i.headingWrapper,
      children: (0, r.jsx)(a.Heading, {
        className: i.heading,
        color: "header-primary",
        variant: "text-xs/semibold",
        children: n
      })
    }), (0, r.jsx)("div", {
      className: i.stepsWrapper,
      children: (0, r.jsx)("ul", {
        children: s.map((e, t) => (0, r.jsx)(l, {
          isComplete: e.isComplete,
          hasNextStep: t < s.length - 1,
          children: e.renderContent()
        }, t))
      })
    }), t]
  })
}