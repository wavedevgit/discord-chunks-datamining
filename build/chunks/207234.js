/** Chunk was on 75708 **/
/** chunk id: 207234, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => g,
  a: () => p
});
var Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk475468 = require("./475468.js"),
  Chunk821020 = require("./821020.js"),
  Chunk592125 = require("./592125.js"),
  Chunk819640 = require("./819640.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let m = () => {
    let {
      notificationCenterVariant: e
    } = (0, Chunk821020.Ag)({
      location: "TOGGLE_INBOX"
    });
    if ("sidebar" !== module) return;
    let t = Chunk944486.Z.getChannelId(),
      n = Chunk592125.Z.getChannel(exports);
    return window.location.pathname.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.STv)) && null != require ? (0, Chunk475468.K)(require.guild_id, exports) : (0, Chunk475468.z)(Chunk981631.Z5c.CHANNEL(Chunk981631.STv, null != exports ? exports : true))
  },
  p = {
    binds: ["mod+i"],
    comboKeysBindGlobal: true,
    action: () => !(Chunk819640.Z.getLayers().length > 0) && (m(), Chunk585483.S.dispatch(Chunk981631.CkL.TOGGLE_INBOX), false)
  },
  g = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: true,
    action: r().debounce(() => {
      if (Chunk585483.S.hasSubscribers(Chunk981631.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return Chunk585483.S.dispatch(Chunk981631.CkL.MARK_TOP_INBOX_CHANNEL_READ), false
    }, 100, {
      leading: true
    })
  }