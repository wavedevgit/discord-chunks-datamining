/** Chunk was on 77370 **/
/** chunk id: 83950, original params: t,a,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk809206 = require("./809206.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk626135 = require("./626135.js"),
  Chunk335131 = require("./335131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk725150 = require("./725150.js"),
  Chunk641638 = require("./641638.js");

function g(t) {
  let {
    transitionState: a,
    onClose: n,
    skuId: g
  } = t, {
    analyticsLocations: h
  } = (0, l.ZP)(u.Z.COLLECTIBLES_EXPIRY_MODAL), m = (0, r.wjy)((0, d.ZP)()), O = (0, f.Z)({
    analyticsLocations: h
  }), Z = c.useRef(null);
  c.useEffect(() => ((0, p.Mn)({
    avatarDecoration: null
  }), () => {
    E.default.track(b.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
      reason: Z.current,
      sku_id: g
    })
  }), [g]), (0, _.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
    properties: {
      location_stack: h,
      sku_id: g
    }
  });
  let M = async () => {
    Z.current = "change_avatar_decoration", await n(), (0, o.xf)(), O(), (0, L.ps)({
      analyticsLocations: h
    })
  }, x = async () => {
    Z.current = "go_to_shop", await n(), (0, C.mK)({
      analyticsLocations: h,
      analyticsSource: u.Z.COLLECTIBLES_EXPIRY_MODAL,
      openInLayer: false
    })
  }, D = async () => {
    Z.current = "tap_close_button", await n()
  }, S = [{
    text: I.intl.string(I.t["x8T+k5"]),
    variant: "secondary",
    onClick: M
  }, {
    text: I.intl.string(I.t.fmqMER),
    variant: "primary",
    onClick: x
  }];
  return (0, e.jsx)(i.I, {
    graphic: {
      type: "image",
      src: m ? k.Z : y.Z
    },
    title: I.intl.string(I.t.xz81o6),
    subtitle: I.intl.string(I.t.Vrbnnp),
    onClose: D,
    transitionState: a,
    actions: S
  })
}