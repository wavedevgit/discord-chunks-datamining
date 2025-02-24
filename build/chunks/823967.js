/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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