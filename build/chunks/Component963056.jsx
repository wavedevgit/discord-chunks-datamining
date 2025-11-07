/** Chunk was on 28532 **/
/** chunk id: 963056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk509442 = require("./509442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572797 = require("./572797.js");

function s(e) {
  let {
    text: t
  } = e, n = (0, i.Yzy)(t, {
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
    className: l.container,
    children: n((e, t) => (0, a.jsx)(r.animated.div, {
      className: l.animatedText,
      style: e,
      children: t
    }))
  })
}