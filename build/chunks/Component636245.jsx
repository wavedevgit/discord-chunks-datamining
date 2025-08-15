/** Chunk was on 96750 **/
/** chunk id: 636245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk922482 = require("./922482.js"),
  Chunk979651 = require("./979651.js"),
  Chunk915863 = require("./915863.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk156859 = require("./156859.js");
let u = e => {
  let {
    guildId: t,
    channelId: n,
    color: u,
    look: d,
    onAction: p
  } = e, f = (0, i.e7)([a.Z], () => a.Z.isInChannel(n), [n]);
  return (0, r.jsx)(o.Z, {
    className: c.button,
    color: u,
    look: d,
    disabled: f,
    onClick: () => {
      null == p || p(), l.AC(t, n)
    },
    fullWidth: true,
    children: s.intl.string(s.t.ZYO5OD)
  }, "stage")
}