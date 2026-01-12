/** Chunk was on 44799 **/
/** chunk id: 69323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    powerup: t,
    targetRef: n,
    isCardVisible: g
  } = e, x = (0, l.e7)([d.Z], () => d.Z.hasLayers()), b = (0, s.useHasAnyModalOpen)(), h = t.skuId === o.A$ ? {
    title: v.intl.string(m.default.YWo6VL),
    body: v.intl.string(m.default.gXVvKc),
    dismissibleContentType: a.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
  } : null, j = [];
  null == h || x || !g || b || j.push(h.dismissibleContentType);
  let [Z, w] = (0, c.US)(j), _ = i.useCallback(() => {
    w(p.L.INDIRECT_ACTION)
  }, [w]);
  return ((0, f.Z)({
    targetRef: n,
    onShouldClose: _,
    enabled: null != Z
  }), null == h || null == Z) ? null : (0, r.jsx)(u.J2, {
    targetElementRef: n,
    shouldShow: true,
    position: "right",
    align: "top",
    size: "sm",
    caretConfig: {
      align: "start"
    },
    title: h.title,
    body: h.body,
    onRequestClose: () => {
      w(p.L.USER_DISMISS)
    }
  })
}