/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(570140);
class i {
  static setPermission(e, t) {
    r.Z.dispatch({
      type: "SET_NATIVE_PERMISSION",
      permissionType: e,
      state: t
    })
  }
}
let o = i