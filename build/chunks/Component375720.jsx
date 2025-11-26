/** Chunk was on 837 **/
/** chunk id: 375720, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk163646 = require("./163646.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932889 = require("./932889.js");
let p = e => {
  let {
    targetElementRef: t,
    markAsDismissed: n
  } = e, p = (0, l.useCallback)(() => {
    (0, s.openUserSettings)(r.n.PRIVATE_BROWSING_PANEL, {
      section: o.oAB.CF_WARP
    })
  }, []);
  return (0, a.jsx)(i.J2, {
    badge: {
      type: "beta",
      variant: "expressive"
    },
    graphic: {
      type: "image",
      src: m
    },
    caretConfig: {
      align: "start"
    },
    align: "left",
    position: "top",
    size: "lg",
    gradientColor: "nitro-pink",
    title: u.intl.string(d.default.KN6HOb),
    body: u.intl.string(d.default["8ludcY"]),
    targetElementRef: t,
    onRequestClose: () => {
      n(c.L.USER_DISMISS)
    },
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.RzWDqY),
      onClick: () => {
        n(c.L.TAKE_ACTION), p()
      }
    }]
  })
}