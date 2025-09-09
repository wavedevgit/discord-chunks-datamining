/** Chunk was on 75157 **/
/** chunk id: 710658, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk37234 = require("./37234.js"),
  Chunk635552 = require("./635552.js"),
  Chunk300284 = require("./300284.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk117771 = require("./117771.js");
let p = t => {
  let {
    transitionState: i,
    onClose: n,
    product: p
  } = t, u = (0, l.Z)(), {
    handleUseNow: d,
    isApplying: g
  } = (0, e.W)({
    product: p,
    onSuccess: n,
    onError: n
  });
  return (0, r.jsx)(a.I, {
    gradientColor: "nitro-pink",
    title: o.intl.string(o.t.qYWlf3),
    subtitle: o.intl.string(o.t.x01cl5),
    actions: [{
      text: o.intl.string(o.t["2p2aY2"]),
      variant: "secondary",
      onClick: () => {
        n(), (0, s.xf)(), null == u || u()
      }
    }, {
      text: o.intl.string(o.t.MAS7uL),
      variant: "primary",
      onClick: d,
      loading: g
    }],
    graphic: {
      type: "image",
      src: c.Z
    },
    transitionState: i,
    onClose: n
  })
}