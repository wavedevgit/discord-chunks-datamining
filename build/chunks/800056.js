/** Chunk was on 4670 **/
/** chunk id: 800056, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  r: () => c
});
var Chunk574381 = require("./574381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk827343 = require("./827343.js"),
  Chunk77729 = require("./77729.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let c = (0, Chunk419954.zD)(Chunk780964.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
  useTitle: () => T.intl.string(T.t.lt8rRx),
  useSubtitle: () => T.intl.string(T.t.ie1mgY),
  useValue: function() {
    return (0, l.bG)([o.A], () => o.A.getUseSystemScreensharePicker())
  },
  setValue: function(e) {
    (0, n.cX)() && e ? (0, s.A)({
      title: T.intl.string(T.t["9jf31O"]),
      subtitle: T.intl.string(T.t.uBd6JW),
      variant: "primary",
      onConfirm: () => {
        r.A.setUseSystemScreensharePicker(e), a.A.app.relaunch()
      },
      confirmText: T.intl.string(T.t.BddRzS)
    }) : r.A.setUseSystemScreensharePicker(e)
  },
  usePredicate: function() {
    return (0, l.bG)([o.A], () => o.A.supportsSystemScreensharePicker() && (0, n.cX)())
  }
})