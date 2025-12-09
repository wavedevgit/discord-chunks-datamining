/** Chunk was on 73755 **/
/** chunk id: 809244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk687516 = require("./687516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  let a = (0, i.Cf)(n),
    o = r.ZP.getName(e.getGuildId(), e.id, t);
  return null == n ? o : (null == a ? true : a.name) != null ? l.intl.formatToPlainString(l.t["9jpVOZ"], {
    applicationName: null == a ? true : a.name,
    username: o
  }) : l.intl.formatToPlainString(l.t["+h0Z59"], {
    username: o
  })
}