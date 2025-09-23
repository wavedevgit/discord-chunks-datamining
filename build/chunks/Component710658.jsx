/** Chunk was on 75157 **/
/** chunk id: 710658, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk635552 = require("./635552.js"),
  Chunk300284 = require("./300284.js"),
  Chunk342386 = require("./342386.js"),
  Chunk626135 = require("./626135.js"),
  Chunk526167 = require("./526167.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk483187 = require("./483187.js"),
  Chunk811086 = require("./811086.js");
let g = t => {
  let {
    transitionState: e,
    onClose: n,
    product: g
  } = t;
  r.useEffect(() => {
    u.default.track(c.rMx.OPEN_MODAL, {
      type: "September Marketing Moment 2025 Claim Modal"
    })
  }, []);
  let b = (0, a.Z)(),
    {
      handleUseNow: m,
      isApplying: h
    } = (0, s.W)({
      product: g,
      onSuccess: n,
      onError: n
    });
  return (0, i.jsx)(l.I, {
    gradientColor: "nitro-pink",
    title: p.intl.string(p.t.qYWlf3),
    subtitle: p.intl.string(p.t.x01cl5),
    actions: [{
      text: p.intl.string(p.t["2p2aY2"]),
      variant: "secondary",
      onClick: () => {
        n(), (0, o.default)(), null == b || b()
      }
    }, {
      text: p.intl.string(p.t.MAS7uL),
      variant: "primary",
      onClick: m,
      loading: h
    }],
    graphic: {
      type: "video",
      src: (0, d.rO)() ? f.Z : y.Z,
      loop: true
    },
    transitionState: e,
    onClose: n
  })
}