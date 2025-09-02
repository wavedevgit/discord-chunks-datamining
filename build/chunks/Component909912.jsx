/** Chunk was on web.js **/
/** chunk id: 909912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk722687 = require("./722687.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk915009 = require("./915009.js"),
  Chunk652262 = require("./652262.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  let e = (0, Chunk915009.q1)(),
    t = (0, Chunk652262.F)(),
    n = (0, Chunk915009.rD)(),
    u = e => {
      i.vV.updateControlledSetting(null == t ? true : t.id, !e)
    };
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    children: (0, Chunk951288.jsx)(Chunk51331.Z, {
      title: require ? Chunk388032.intl.string(Chunk388032.t.PMsfcH) : Chunk388032.intl.string(Chunk388032.t.RAQUSE),
      note: require ? Chunk388032.intl.string(Chunk388032.t.XXGmuL) : Chunk388032.intl.string(Chunk388032.t.wbYDfX),
      value: !module,
      onChange: u
    })
  })
}