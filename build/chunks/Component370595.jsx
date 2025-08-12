/** Chunk was on 873 **/
/** chunk id: 370595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk21678 = require("./21678.js"),
  Chunk983843 = require("./983843.js");

function u(e) {
  let {
    onNavigate: t,
    backPanel: n = s.k.INFO
  } = e;
  return (0, r.jsxs)("div", {
    className: o.header,
    children: [(0, r.jsx)("div", {
      className: o.headerTitle,
      children: (0, r.jsxs)(l.P3F, {
        className: a.backButton,
        onClick: () => null == t ? true : t(n),
        children: [(0, r.jsx)(l.whL, {
          size: "custom",
          width: 20,
          height: 20
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          children: i.intl.string(i.t["13/7kZ"])
        })]
      })
    }), (0, r.jsx)(l.M2$, {
      shortcut: "esc",
      keyClassName: a.keyComboInner,
      className: a.keyComboContainer
    })]
  })
}