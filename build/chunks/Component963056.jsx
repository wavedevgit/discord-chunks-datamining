/** Chunk was on 65347 **/
/** chunk id: 963056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk636606 = require("./636606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk276181 = require("./276181.js");

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
    className: r.container,
    children: n((e, t) => (0, a.jsx)(l.animated.div, {
      className: r.animatedText,
      style: e,
      children: t
    }))
  })
}