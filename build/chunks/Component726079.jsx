/** Chunk was on 21738 **/
/** chunk id: 726079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk646881 = require("./646881.jsx"),
  Chunk92534 = require("./92534.jsx"),
  Chunk760799 = require("./760799.js");

function c(e) {
  let {
    onOpen: t,
    onClose: n,
    children: c,
    popoutPosition: u,
    popoutAlign: d
  } = e, [p, h] = i.useState(false), f = i.useRef(null), g = i.useCallback(() => {
    h(false), null == n || n()
  }, [n]), {
    handlePrimaryAction: m,
    handleContextMenu: A
  } = (0, s.B)(g), _ = i.useCallback(() => {
    h(e => {
      let r = !e;
      return r ? null == t || t() : null == n || n(), r
    })
  }, [n, t]), b = i.useCallback(() => (0, r.jsx)("div", {
    className: o.k,
    children: (0, r.jsx)(a.$, {
      onPrimaryAction: m,
      onContextMenu: A
    })
  }), [A, m]);
  return (0, r.jsx)(l.YNO, {
    targetElementRef: f,
    animation: l.YNO.Animation.NONE,
    position: u,
    align: d,
    autoInvert: false,
    shouldShow: p,
    onRequestClose: g,
    renderPopout: b,
    ignoreModalClicks: true,
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return c(_, n, e, f)
    }
  })
}