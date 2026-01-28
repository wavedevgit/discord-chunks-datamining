/** Chunk was on 5606 **/
/** chunk id: 308494, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => s
});
var Chunk265422 = require("./265422.js"),
  Chunk383501 = require("./383501.js"),
  Chunk652215 = require("./652215.js");
let s = {
  binds: ["mod+shift+alt+v"],
  comboKeysBindGlobal: true,
  action(e) {
    e.preventDefault(), e.stopPropagation();
    let t = i.A.getGuildId(),
      n = i.A.getChannelId();
    return null != n && (0, r.i)(null != t ? t : l.ME, n), false
  }
}