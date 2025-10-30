/** Chunk was on 83546 **/
/** chunk id: 304471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk619915 = require("./619915.js"),
  Chunk449932 = require("./449932.jsx"),
  Chunk561788 = require("./561788.jsx"),
  Chunk413409 = require("./413409.js");

function c(e) {
  let {
    channel: t,
    onAction: n
  } = e, c = (0, l.ZP)(t), u = Array.from((0, l.uF)(c).values());
  return 0 === u.length ? null : (0, r.jsxs)(i.Ttm, {
    className: s.container,
    children: [(0, r.jsx)("div", {
      className: s.popoutHeaderContainer,
      children: (0, r.jsx)(a.Z, {
        channel: t
      })
    }), (0, r.jsx)("div", {
      className: s.headerDivider
    }), u.map((e, i) => {
      var l;
      return (0, r.jsx)(o.Z, {
        embeddedApp: e,
        presenceActivity: null != (l = e.presenceActivity) ? l : true,
        channel: t,
        onAction: n
      }, i)
    })]
  })
}