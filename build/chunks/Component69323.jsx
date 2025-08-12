/** Chunk was on 44799 **/
/** chunk id: 69323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk907862 = require("./907862.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk476044 = require("./476044.js"),
  Chunk921944 = require("./921944.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx");

function x(e) {
  let {
    powerup: t,
    targetRef: n,
    isCardVisible: x
  } = e, v = (0, l.e7)([d.Z], () => d.Z.hasLayers()), _ = (0, a.f9)(), b = t.skuId === i.A$ ? {
    title: g.intl.string(m.default.YWo6VF),
    body: g.intl.string(m.default.gXVvKS),
    dismissibleContentType: s.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
  } : null, j = [];
  null == b || v || !x || _ || j.push(b.dismissibleContentType);
  let [h, E] = (0, c.US)(j), C = o.useCallback(() => {
    E(f.L.INDIRECT_ACTION)
  }, [E]);
  return ((0, p.Z)({
    targetRef: n,
    onShouldClose: C,
    enabled: null != h
  }), null == b || null == h) ? null : (0, r.jsx)(u.J2, {
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
      E(f.L.USER_DISMISS)
    }
  })
}