/** Chunk was on 44799 **/
/** chunk id: 69323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function _(e) {
  let {
    powerup: t,
    targetRef: n,
    isCardVisible: _
  } = e, v = (0, l.e7)([d.Z], () => d.Z.hasLayers()), x = (0, s.f9)(), C = t.skuId === i.A$ ? {
    title: f.intl.string(g.default.YWo6VF),
    body: f.intl.string(g.default.gXVvKS),
    dismissibleContentType: a.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
  } : null, h = [];
  null == C || v || !_ || x || h.push(C.dismissibleContentType);
  let [b, E] = (0, u.US)(h), T = o.useCallback(() => {
    E(m.L.INDIRECT_ACTION)
  }, [E]);
  return ((0, p.Z)({
    targetRef: n,
    onShouldClose: T,
    enabled: null != b
  }), null == C || null == b) ? null : (0, r.jsx)(c.J2, {
    targetElementRef: n,
    shouldShow: true,
    position: "right",
    align: "top",
    size: "sm",
    caretConfig: {
      align: "start"
    },
    title: C.title,
    body: C.body,
    onRequestClose: () => {
      E(m.L.USER_DISMISS)
    }
  })
}