/** Chunk was on 384 **/
/** chunk id: 140285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk944537 = require("./944537.js"),
  Chunk290348 = require("./290348.js"),
  Chunk91354 = require("./91354.jsx"),
  Chunk662961 = require("./662961.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    "aria-labelledby": t,
    disabled: n = false
  } = e, {
    editStateId: u,
    guildId: g
  } = (0, l.N)(), [m, p] = s.GP(u, g);
  return (0, r.jsx)(i.FXm, {
    onChange: e => p(e),
    options: [{
      name: d.intl.string(d.t["vs2T+B"]),
      value: a.I.SOME_CHANNELS_ACCESS,
      leadingIcon: (0, i.GSL)(c.Z)
    }, {
      name: d.intl.string(d.t.l4Tr7X),
      value: a.I.ALL_CHANNELS_ACCESS,
      leadingIcon: (0, i.GSL)(o.Z)
    }],
    value: m,
    "aria-labelledby": t,
    disabled: n
  })
}