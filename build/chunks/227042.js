/** Chunk was on web.js **/
/** chunk id: 227042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk652215 = require("./652215.js");

function i(e) {
  let {
    LayerStore: t,
    PopoutWindowStore: n
  } = e, i = t.hasLayers(), a = n.getWindowOpen(r.MLl.CHANNEL_CALL_POPOUT) || n.getWindowOpen(r.MLl.ACTIVITY_POPOUT);
  return i && !a
}