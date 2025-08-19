/** Chunk was on 66181 **/
/** chunk id: 963056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk803948 = require("./803948.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572797 = require("./572797.js");

function l(e) {
  let {
    text: t
  } = e, n = (0, s.Yzy)(t, {
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
  return (0, i.jsx)("div", {
    className: a.container,
    children: n((e, t) => (0, i.jsx)(r.animated.div, {
      className: a.animatedText,
      style: e,
      children: t
    }))
  })
}