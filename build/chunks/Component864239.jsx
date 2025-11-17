/** Chunk was on web.js **/
/** chunk id: 864239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk695346 = require("./695346.js"),
  Chunk682578 = require("./682578.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  var e;
  let t = null == (e = (0, Chunk682578.J)()) || module,
    n = Chunk695346.DC.useSetting();
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t["L+yTsa"]),
      value: require,
      onChange: Chunk695346.DC.updateSetting,
      disabled: !exports,
      note: Chunk388032.intl.string(Chunk388032.t.hiM8pU)
    })
  })
}