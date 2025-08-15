/** Chunk was on web.js **/
/** chunk id: 153799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk839606 = require("./839606.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  let {
    channelId: t
  } = e, {
    activePickerChannelId: n,
    closePicker: r
  } = i.B.getState();
  null != n && n !== t && r()
}
class s extends Chunk147913.Z {
  constructor(...e) {
    super(...e), a(this, "actions", {
      CHANNEL_SELECT: o
    })
  }
}
let l = new s