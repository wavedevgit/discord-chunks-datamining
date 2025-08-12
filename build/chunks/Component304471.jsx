/** Chunk was on 26628 **/
/** chunk id: 304471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk619915 = require("./619915.js"),
  Chunk449932 = require("./449932.jsx"),
  Chunk561788 = require("./561788.jsx"),
  Chunk261113 = require("./261113.js");

function c(e) {
  let {
    channel: t,
    onAction: n
  } = e, c = (0, l.ZP)(t), u = Array.from((0, l.uF)(c).values());
  return 0 === u.length ? null : (0, r.jsxs)(i.Ttm, {
    className: a.container,
    children: [(0, r.jsx)("div", {
      className: a.popoutHeaderContainer,
      children: (0, r.jsx)(s.Z, {
        channel: t
      })
    }), (0, r.jsx)("div", {
      className: a.headerDivider
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