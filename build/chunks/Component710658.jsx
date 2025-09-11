/** Chunk was on 75157 **/
/** chunk id: 710658, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk635552 = require("./635552.js"),
  Chunk300284 = require("./300284.js"),
  Chunk342386 = require("./342386.js"),
  Chunk526167 = require("./526167.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461999 = require("./461999.js"),
  Chunk793167 = require("./793167.js");
let b = t => {
  let {
    transitionState: n,
    onClose: a,
    product: b
  } = t, u = (0, s.Z)(), {
    handleUseNow: f,
    isApplying: h
  } = (0, c.W)({
    product: b,
    onSuccess: a,
    onError: a
  });
  return (0, i.jsx)(e.I, {
    gradientColor: "nitro-pink",
    title: d.intl.string(d.t.qYWlf3),
    subtitle: d.intl.string(d.t.x01cl5),
    actions: [{
      text: d.intl.string(d.t["2p2aY2"]),
      variant: "secondary",
      onClick: () => {
        a(), (0, o.Z)(), null == u || u()
      }
    }, {
      text: d.intl.string(d.t.MAS7uL),
      variant: "primary",
      onClick: f,
      loading: h
    }],
    graphic: {
      type: "video",
      src: (0, r.rO)() ? l.Z : p.Z,
      loop: true
    },
    transitionState: n,
    onClose: a
  })
}