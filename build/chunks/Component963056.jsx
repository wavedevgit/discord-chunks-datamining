/** Chunk was on 28855 **/
/** chunk id: 963056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk13941 = require("./13941.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572797 = require("./572797.js");

function o(e) {
  let {
    text: t
  } = e, n = (0, l.Yzy)(t, {
    from: {
      opacity: 0,
      transform: "translate3d(0, 107%, 0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)"
    },
    config: {
      duration: 220,
      clamp: true
    }
  });
  return (0, a.jsx)("div", {
    className: i.container,
    children: n((e, t) => (0, a.jsx)(r.animated.div, {
      className: i.animatedText,
      style: e,
      children: t
    }))
  })
}