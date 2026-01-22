/** Chunk was on 28979 **/
/** chunk id: 53386, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  h: () => A
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk347481 = require("./347481.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.zD)(Chunk780964.X.VOICE_ECHO_CANCELLATION_SETTING, {
  useTitle: () => T.intl.string(T.t.iWTwu6),
  useValue: function() {
    return (0, n.bG)([u.A], () => u.A.getEchoCancellation())
  },
  setValue: function(t) {
    l.A.setEchoCancellation(t, {
      page: o.liQ.USER_SETTINGS,
      section: o.JJy.SETTINGS_VOICE_AND_VIDEO
    })
  },
  useDisabled: function() {
    return (0, n.bG)([u.A, r.A], () => {
      let t = u.A.getInputDeviceId();
      return r.A.hasEchoCancellation(t)
    })
  },
  usePredicate: function() {
    return (0, n.bG)([u.A], () => u.A.isInputProfileCustom())
  }
})