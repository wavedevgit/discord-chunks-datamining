/** Chunk was on 75157 **/
/** chunk id: 710658, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => k
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
let k = t => {
  let {
    transitionState: e,
    onClose: a,
    product: k
  } = t;
  i.useEffect(() => {
    d.default.track(p.rMx.OPEN_MODAL, {
      type: "September Marketing Moment 2025 Claim Modal"
    })
  }, []);
  let g = (0, r.Z)(),
    {
      handleUseNow: h,
      isApplying: m
    } = (0, o.W)({
      product: k,
      onSuccess: a,
      onError: a
    });
  return (0, n.jsx)(c.I, {
    gradientColor: "nitro-pink",
    title: u.intl.string(u.t.qYWlf3),
    subtitle: u.intl.string(u.t.x01cl5),
    actions: [{
      text: u.intl.string(u.t["2p2aY2"]),
      variant: "secondary",
      onClick: () => {
        a(), (0, s.default)(), null == g || g()
      }
    }, {
      text: u.intl.string(u.t.MAS7uL),
      variant: "primary",
      onClick: h,
      loading: m
    }],
    graphic: {
      type: "video",
      src: (0, l.rO)() ? b.Z : f.Z,
      loop: true
    },
    transitionState: e,
    onClose: a
  })
}