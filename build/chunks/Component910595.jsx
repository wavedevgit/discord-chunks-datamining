/** Chunk was on 73895 **/
/** chunk id: 910595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    guild: t,
    selected: n
  } = e;
  return (0, r.jsx)(o.m, {
    id: "home-tab-".concat(t.id),
    renderIcon: e => (0, r.jsx)(i.Vy8, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: c.intl.string(c.t.VbpLyU),
    selected: n,
    onClick: function() {
      (0, l.uL)(a.Z5c.CHANNEL(t.id, s.oC.GUILD_HOME))
    }
  })
}