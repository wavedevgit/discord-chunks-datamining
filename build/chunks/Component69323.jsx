/** Chunk was on 44799 **/
/** chunk id: 69323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk907862 = require("./907862.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk476044 = require("./476044.js"),
  Chunk921944 = require("./921944.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    powerup: t,
    targetRef: n,
    isCardVisible: g
  } = e, v = (0, l.e7)([d.Z], () => d.Z.hasLayers()), x = (0, s.f9)(), b = t.skuId === o.A$ ? {
    title: _.intl.string(m.default.YWo6VF),
    body: _.intl.string(m.default.gXVvKS),
    dismissibleContentType: a.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
  } : null, h = [];
  null == b || v || !g || x || h.push(b.dismissibleContentType);
  let [C, j] = (0, c.US)(h), I = i.useCallback(() => {
    j(f.L.INDIRECT_ACTION)
  }, [j]);
  return ((0, p.Z)({
    targetRef: n,
    onShouldClose: I,
    enabled: null != C
  }), null == b || null == C) ? null : (0, r.jsx)(u.J2, {
    targetElementRef: n,
    shouldShow: true,
    position: "right",
    align: "top",
    size: "sm",
    caretConfig: {
      position: "left",
      align: "start"
    },
    title: b.title,
    body: b.body,
    onRequestClose: () => {
      j(f.L.USER_DISMISS)
    }
  })
}