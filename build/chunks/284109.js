/** Chunk was on 4670 **/
/** chunk id: 284109, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  z: () => u
});
var Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let u = (0, Chunk419954.Qx)(Chunk780964.X.CHAT_SPOILERS_SHOW_SPOILERS, {
  useTitle: () => a.intl.string(a.t.QgwmVz),
  useSubtitle: () => a.intl.string(a.t.TYnRkS),
  useOptions: () => [{
    name: a.intl.string(a.t["KFH/me"]),
    value: r.P6Q.ON_CLICK
  }, {
    name: a.intl.string(a.t.K5VTBE),
    value: r.P6Q.IF_MODERATOR
  }, {
    name: a.intl.string(a.t.Pe1RbL),
    value: r.P6Q.ALWAYS
  }],
  useValue: Chunk253932.gs.useSetting,
  setValue: Chunk253932.gs.updateSetting
})