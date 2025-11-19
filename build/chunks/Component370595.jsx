/** Chunk was on 66201 **/
/** chunk id: 370595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk220512 = require("./220512.js"),
  Chunk87819 = require("./87819.js");

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
        className: a.backButton,
        onClick: () => null == t ? true : t(n),
        children: [(0, r.jsx)(l.whL, {
          size: "custom",
          width: 20,
          height: 20
        }), (0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: s.intl.string(s.t["13/7kX"])
        })]
      })
    }), (0, r.jsx)(l.M2$, {
      shortcut: "esc",
      keyClassName: a.keyComboInner,
      className: a.keyComboContainer
    })]
  })
}