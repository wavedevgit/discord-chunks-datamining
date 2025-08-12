/** Chunk was on 20501 **/
/** chunk id: 924356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk695346 = require("./695346.js"),
  Chunk682578 = require("./682578.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  var e;
  let t = Chunk695346.xM.useSetting(),
    n = null == (e = (0, Chunk682578.J)()) || module;
  return (0, Chunk255367.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
    children: (0, Chunk255367.jsx)(Chunk51331.Z, {
      value: !!require && exports,
      onChange: Chunk695346.xM.updateSetting,
      title: Chunk388032.intl.string(Chunk388032.t.XahVjo),
      note: Chunk388032.intl.string(Chunk388032.t.R9fXyc),
      disabled: !require
    })
  })
}