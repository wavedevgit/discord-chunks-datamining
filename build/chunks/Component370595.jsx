/** Chunk was on 20303 **/
/** chunk id: 370595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546679 = require("./546679.js"),
  Chunk152540 = require("./152540.js");

function u(e) {
  let {
    onNavigate: t,
    backPanel: n = i.k.INFO
  } = e;
  return (0, r.jsxs)("div", {
    className: o.header,
    children: [(0, r.jsx)("div", {
      className: o.headerTitle,
      children: (0, r.jsxs)(l.P3F, {
        className: s.backButton,
        onClick: () => null == t ? true : t(n),
        children: [(0, r.jsx)(l.whL, {
          size: "custom",
          width: 20,
          height: 20
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          children: a.intl.string(a.t["13/7kZ"])
        })]
      })
    }), (0, r.jsx)(l.M2$, {
      shortcut: "esc",
      keyClassName: s.keyComboInner,
      className: s.keyComboContainer
    })]
  })
}