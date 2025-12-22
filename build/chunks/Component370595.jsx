/** Chunk was on 15718 **/
/** chunk id: 370595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk807121 = require("./807121.js"),
  Chunk280533 = require("./280533.js");

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
        }), (0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: a.intl.string(a.t["13/7kX"])
        })]
      })
    }), (0, r.jsx)(l.M2$, {
      shortcut: "esc",
      keyClassName: s.keyComboInner,
      className: s.keyComboContainer
    })]
  })
}