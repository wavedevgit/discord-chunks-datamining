/** Chunk was on 88615 **/
/** chunk id: 79275, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk192308 = require("./192308.js"),
  Chunk342494 = require("./342494.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk186111 = require("./186111.js"),
  Chunk89305 = require("./89305.js"),
  Chunk49999 = require("./49999.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function A(e) {
  let {
    powerup: t,
    targetRef: l,
    isCardVisible: A
  } = e, g = (0, s.bG)([c.A], () => c.A.hasLayers()), x = (0, a.useHasAnyModalOpen)(), b = t.skuId === i.FB ? {
    title: v.intl.string(m.default.YWo6VL),
    body: v.intl.string(m.default.gXVvKc),
    dismissibleContentType: o.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
  } : null, h = [];
  null == b || g || !A || x || h.push(b.dismissibleContentType);
  let [j, _] = (0, d.kn)(h), E = n.useCallback(() => {
    _(p.i.INDIRECT_ACTION)
  }, [_]);
  return ((0, f.A)({
    targetRef: l,
    onShouldClose: E,
    enabled: null != j
  }), null == b || null == j) ? null : (0, r.jsx)(u.AM, {
    targetElementRef: l,
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
      _(p.i.USER_DISMISS)
    }
  })
}