/** Chunk was on 75708 **/
/** chunk id: 438846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => a
});
var Chunk475468 = require("./475468.js"),
  Chunk19780 = require("./19780.js"),
  Chunk981631 = require("./981631.js");
let a = {
  binds: ["mod+shift+alt+v"],
  comboKeysBindGlobal: true,
  action(e) {
    e.preventDefault(), e.stopPropagation();
    let t = r.Z.getGuildId(),
      n = r.Z.getChannelId();
    return null != n && (0, i.K)(null != t ? t : s.ME, n), false
  }
}