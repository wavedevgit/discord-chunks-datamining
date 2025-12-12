/** Chunk was on web.js **/
/** chunk id: 61356, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk399606 = require("./399606.js"),
  Chunk541099 = require("./541099.js");

function o(e) {
  let {
    type: t,
    channelId: n
  } = e;
  return (0, r.e7)([i.Z], () => {
    let e = i.Z.activeViewType();
    return null != e && e === t && i.Z.activeChannelId() === n && i.Z.shouldShowPopup()
  }, [t, n])
}