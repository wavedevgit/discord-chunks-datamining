/** Chunk was on web.js **/
/** chunk id: 186226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk417597 = require("./417597.js"),
  Chunk989837 = require("./989837.js");

function a(e) {
  let {
    type: t,
    channelId: n
  } = e;
  return (0, r.bG)([i.A], () => {
    let e = i.A.activeViewType();
    return null != e && e === t && i.A.activeChannelId() === n && i.A.shouldShowPopup()
  }, [t, n])
}