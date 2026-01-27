/** Chunk was on 77870 **/
/** chunk id: 868048, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk832712 = require("./832712.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk393432 = require("./393432.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk355097 = require("./355097.js");

function u(e, t, n) {
  r.A.updateChannelOverrideSettings(e, t, {
    flags: (0, s.mD)(l.Ay.getChannelIdFlags(e, t), n)
  }, i.G_.unreads(n === c.vv.UNREADS_ALL_MESSAGES ? o.e.ALL_MESSAGES : o.e.ONLY_MENTIONS), {
    object: a.ZSU.NOTIFICATION_SETTING_UNREAD_NOTICE
  })
}