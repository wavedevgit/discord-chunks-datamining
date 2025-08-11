/** Chunk was on web.js **/
/** chunk id: 809244, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk687516 = require("./687516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  let a = (0, r.Cf)(n),
    s = i.ZP.getName(e.getGuildId(), e.id, t);
  return null == n ? s : (null == a ? true : a.name) != null ? o.intl.formatToPlainString(o.t["9jpVOT"], {
    applicationName: null == a ? true : a.name,
    username: s
  }) : o.intl.formatToPlainString(o.t["+h0Z5+"], {
    username: s
  })
}