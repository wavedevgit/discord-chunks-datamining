/** Chunk was on 12630 **/
/** chunk id: 370595, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk220512 = require("./220512.js"),
  Chunk87819 = require("./87819.js");

function o(A) {
  let {
    onNavigate: e,
    backPanel: t = l.k.INFO
  } = A;
  return (0, n.jsxs)("div", {
    className: a.header,
    children: [(0, n.jsx)("div", {
      className: a.headerTitle,
      children: (0, n.jsxs)(r.P3F, {
        className: s.backButton,
        onClick: () => null == e ? true : e(t),
        children: [(0, n.jsx)(r.whL, {
          size: "custom",
          width: 20,
          height: 20
        }), (0, n.jsx)(r.X6q, {
          variant: "heading-md/semibold",
          children: i.intl.string(i.t["13/7kZ"])
        })]
      })
    }), (0, n.jsx)(r.M2$, {
      shortcut: "esc",
      keyClassName: s.keyComboInner,
      className: s.keyComboContainer
    })]
  })
}