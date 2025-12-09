/** Chunk was on 75393 **/
/** chunk id: 187285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => d,
  y3: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js");
require("./373370.js"), require("./115179.js"), require("./388032.jsx");
var Chunk573938 = require("./573938.js");

function o(e) {
  let {
    children: t,
    isComplete: n,
    hasNextStep: r
  } = e;
  return (0, a.jsxs)("li", {
    className: i()(s.stepWrapper, {
      [s.stepWrapperComplete]: n
    }, {
      [s.stepWrapperWithNextStep]: r
    }),
    children: [(0, a.jsxs)("div", {
      className: s.stepIndicator,
      children: [(0, a.jsx)("div", {
        className: s.stepIconWrapper,
        children: n && (0, a.jsx)(l.sV5, {
          className: s.stepIcon,
          color: l.TVs.colors.WHITE
        })
      }), r && (0, a.jsx)("div", {
        className: s.stepConnector
      })]
    }), (0, a.jsx)("div", {
      className: s.stepContent,
      children: t
    })]
  })
}

function c(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(l.Text, {
    color: "text-muted",
    variant: "text-xs/medium",
    children: t
  })
}
let d = function(e) {
  let {
    children: t,
    heading: n,
    steps: r
  } = e;
  return (0, a.jsxs)("div", {
    className: s.wrapper,
    children: [(0, a.jsx)("div", {
      className: s.headingWrapper,
      children: (0, a.jsx)(l.Heading, {
        className: s.heading,
        color: "header-primary",
        variant: "text-xs/semibold",
        children: n
      })
    }), (0, a.jsx)("div", {
      className: s.stepsWrapper,
      children: (0, a.jsx)("ul", {
        children: r.map((e, t) => (0, a.jsx)(o, {
          isComplete: e.isComplete,
          hasNextStep: t < r.length - 1,
          children: e.renderContent()
        }, t))
      })
    }), t]
  })
}