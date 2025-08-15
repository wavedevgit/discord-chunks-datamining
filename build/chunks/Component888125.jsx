/** Chunk was on 6049 **/
/** chunk id: 888125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk434404 = require("./434404.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7313 = require("./7313.js"),
  Chunk935653 = require("./935653.js"),
  Chunk449874 = require("./449874.js");

function g(e) {
  let {
    canManageGuild: t,
    premiumProgressBarEnabled: n
  } = e, g = (0, s.ZP)(), p = i.useCallback(e => {
    o.Z.updateGuild({
      premiumProgressBarEnabled: e
    })
  }, []);
  return (0, r.jsxs)(a.hjN, {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.column,
      children: [(0, r.jsx)(a.j7V, {
        className: d.switch,
        onChange: p,
        value: n,
        hideBorder: true,
        disabled: !t,
        children: c.intl.string(c.t.Dl4mJS)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: c.intl.string(c.t.xzHcoa)
      })]
    }), (0, r.jsx)("div", {
      className: d.column,
      children: (0, r.jsx)("img", {
        alt: c.intl.string(c.t.UOJp5e),
        src: (0, l.ap)(g) ? m : u,
        className: d.progressBarImage
      })
    })]
  })
}