/** Chunk was on web.js **/
/** chunk id: 958185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk981631 = require("./981631.js");

function i(e) {
  let {
    LayerStore: t,
    PopoutWindowStore: n
  } = e, i = t.hasLayers(), a = n.getWindowOpen(r.KJ3.CHANNEL_CALL_POPOUT) || n.getWindowOpen(r.KJ3.ACTIVITY_POPOUT);
  return i && !a
}