/** Chunk was on 88615 **/
/** chunk id: 79275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    powerup: t,
    targetRef: n,
    isCardVisible: g
  } = e, A = (0, o.bG)([c.A], () => c.A.hasLayers()), _ = (0, a.useHasAnyModalOpen)(), x = t.skuId === i.FB ? {
    title: v.intl.string(f.default.YWo6VL),
    body: v.intl.string(f.default.gXVvKc),
    dismissibleContentType: s.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
  } : null, h = [];
  null == x || A || !g || _ || h.push(x.dismissibleContentType);
  let [b, j] = (0, d.kn)(h), E = l.useCallback(() => {
    j(m.i.INDIRECT_ACTION)
  }, [j]);
  return ((0, p.A)({
    targetRef: n,
    onShouldClose: E,
    enabled: null != b
  }), null == x || null == b) ? null : (0, r.jsx)(u.AM, {
    targetElementRef: n,
    shouldShow: true,
    position: "right",
    align: "top",
    size: "sm",
    caretConfig: {
      align: "start"
    },
    title: x.title,
    body: x.body,
    onRequestClose: () => {
      j(m.i.USER_DISMISS)
    }
  })
}