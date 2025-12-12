/** Chunk was on web.js **/
/** chunk id: 823967, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk570140 = require("./570140.js");
class i {
  static setPermission(e, t) {
    r.Z.dispatch({
      type: "SET_NATIVE_PERMISSION",
      permissionType: e,
      state: t
    })
  }
}
let a = i