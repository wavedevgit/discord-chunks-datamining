/** Chunk was on web.js **/
/** chunk id: 636245, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    onAction: f
  } = e, _ = (0, i.e7)([o.Z], () => o.Z.isInChannel(n), [n]), p = () => {
    null == f || f(), a.AC(t, n)
  };
  return (0, r.jsx)(s.Z, {
    className: c.button,
    color: u,
    look: d,
    disabled: _,
    onClick: p,
    fullWidth: true,
    children: l.intl.string(l.t.ZYO5OD)
  }, "stage")
}