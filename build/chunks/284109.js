/** Chunk was on 28979 **/
/** chunk id: 284109, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  z: () => a
});
var Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let a = (0, Chunk419954.Qx)(Chunk780964.X.CHAT_SPOILERS_SHOW_SPOILERS, {
  useTitle: () => u.intl.string(u.t.QgwmVz),
  useSubtitle: () => u.intl.string(u.t.TYnRkS),
  useOptions: () => [{
    name: u.intl.string(u.t["KFH/me"]),
    value: r.P6Q.ON_CLICK
  }, {
    name: u.intl.string(u.t.K5VTBE),
    value: r.P6Q.IF_MODERATOR
  }, {
    name: u.intl.string(u.t.Pe1RbL),
    value: r.P6Q.ALWAYS
  }],
  useValue: Chunk253932.gs.useSetting,
  setValue: Chunk253932.gs.updateSetting
})