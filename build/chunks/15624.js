/** Chunk was on web.js **/
/** chunk id: 15624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk451478 = require("./451478.js");

function i() {
  returntrue
}

function a() {
  return i()
}
let o = {
  canUIRequestGatewaySocket: i,
  getState: function() {
    return Chunk451478.Z.isAppFocused() ? "focused" : "unfocused"
  },
  useCanUIRequestGatewaySocket: a
}