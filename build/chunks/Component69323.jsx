/** Chunk was on 44799 **/
/** chunk id: 69323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  let {
    powerup: t,
    targetRef: n,
    isCardVisible: v
  } = e, _ = (0, s.e7)([d.Z], () => d.Z.hasLayers()), x = (0, a.f9)(), h = t.skuId === i.A$ ? {
    title: g.intl.string(f.default.YWo6VF),
    body: g.intl.string(f.default.gXVvKS),
    dismissibleContentType: l.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
  } : null, b = [];
  null == h || _ || !v || x || b.push(h.dismissibleContentType);
  let [C, j] = (0, u.US)(b), P = o.useCallback(() => {
    j(m.L.INDIRECT_ACTION)
  }, [j]);
  return ((0, p.Z)({
    targetRef: n,
    onShouldClose: P,
    enabled: null != C
  }), null == h || null == C) ? null : (0, r.jsx)(c.J2, {
    targetElementRef: n,
    shouldShow: true,
    position: "right",
    align: "top",
    size: "sm",
    caretConfig: {
      position: "left",
      align: "start"
    },
    title: h.title,
    body: h.body,
    onRequestClose: () => {
      j(m.L.USER_DISMISS)
    }
  })
}