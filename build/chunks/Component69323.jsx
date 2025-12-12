/** Chunk was on 44799 **/
/** chunk id: 69323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk907862 = require("./907862.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk476044 = require("./476044.js"),
  Chunk921944 = require("./921944.js"),
  Chunk5238 = require("./5238.js"),
  Chunk388032 = require("./388032.jsx");

function v(e) {
  let {
    powerup: t,
    targetRef: n,
    isCardVisible: v
  } = e, x = (0, o.e7)([d.Z], () => d.Z.hasLayers()), _ = (0, s.useHasAnyModalOpen)(), b = t.skuId === l.A$ ? {
    title: g.intl.string(m.default.YWo6VL),
    body: g.intl.string(m.default.gXVvKc),
    dismissibleContentType: a.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
  } : null, h = [];
  null == b || x || !v || _ || h.push(b.dismissibleContentType);
  let [j, C] = (0, c.US)(h), Z = i.useCallback(() => {
    C(f.L.INDIRECT_ACTION)
  }, [C]);
  return ((0, p.Z)({
    targetRef: n,
    onShouldClose: Z,
    enabled: null != j
  }), null == b || null == j) ? null : (0, r.jsx)(u.J2, {
    targetElementRef: n,
    shouldShow: true,
    position: "right",
    align: "top",
    size: "sm",
    caretConfig: {
      align: "start"
    },
    title: b.title,
    body: b.body,
    onRequestClose: () => {
      C(f.L.USER_DISMISS)
    }
  })
}