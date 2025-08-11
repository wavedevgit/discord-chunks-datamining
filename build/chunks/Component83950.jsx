/** Chunk was on 77370 **/
/** chunk id: 83950, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => k
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk37234 = require("./37234.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk626135 = require("./626135.js"),
  Chunk335131 = require("./335131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1359 = require("./1359.js");

function k(t) {
  let {
    transitionState: n,
    onClose: a,
    skuId: k
  } = t, {
    analyticsLocations: b
  } = (0, u.ZP)(p.Z.COLLECTIBLES_EXPIRY_MODAL), y = (0, L.Z)({
    analyticsLocations: b
  }), O = s.useRef(null);
  s.useEffect(() => ((0, o.Mn)({
    avatarDecoration: null
  }), () => {
    d.default.track(C.rMx.COLLECTIBLES_EXPIRY_MODAL_CLOSED, {
      reason: O.current,
      sku_id: k
    })
  }), [k]), (0, l.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.COLLECTIBLES_EXPIRY_MODAL,
    properties: {
      location_stack: b,
      sku_id: k
    }
  });
  let g = async () => {
    O.current = "change_avatar_decoration", await a(), (0, c.xf)(), y(), (0, _.ps)({
      analyticsLocations: b
    })
  }, h = async () => {
    O.current = "go_to_shop", await a(), (0, E.mK)({
      analyticsLocations: b,
      analyticsSource: p.Z.COLLECTIBLES_EXPIRY_MODAL,
      openInLayer: false
    })
  }, m = async () => {
    O.current = "tap_close_button", await a()
  }, M = [{
    text: f.intl.string(f.t["x8T+k5"]),
    variant: "secondary",
    onClick: g
  }, {
    text: f.intl.string(f.t.fmqMER),
    variant: "primary",
    onClick: h
  }];
  return (0, e.jsx)(r.I, {
    graphic: {
      type: "image",
      src: I.Z
    },
    title: f.intl.string(f.t.xz81o6),
    subtitle: f.intl.string(f.t.Vrbnnp),
    onClose: m,
    transitionState: n,
    actions: M
  })
}