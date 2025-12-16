/** Chunk was on 29725 **/
/** chunk id: 963056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk236726 = require("./236726.js"),
  Chunk481060 = require("./481060.js"),
  Chunk10467 = require("./10467.js");

function s(e) {
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