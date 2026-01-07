/** Chunk was on web.js **/
/** chunk id: 207234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => _,
  a: () => p
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk475468 = require("./475468.js"),
  Chunk821020 = require("./821020.js"),
  Chunk592125 = require("./592125.js"),
  Chunk819640 = require("./819640.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let f = () => {
    let {
      notificationCenterVariant: e
    } = (0, o.Ag)({
      location: "TOGGLE_INBOX"
    });
    if ("sidebar" !== e) return;
    let t = c.Z.getChannelId(),
      n = s.Z.getChannel(t);
    return window.location.pathname.startsWith(d.Z5c.CHANNEL(d.STv)) && null != n ? (0, a.K)(n.guild_id, t) : (0, a.z)(d.Z5c.CHANNEL(d.STv, null != t ? t : true))
  },
  p = {
    binds: ["mod+i"],
    comboKeysBindGlobal: true,
    action: () => !(l.Z.getLayers().length > 0) && (f(), u.S.dispatch(d.CkL.TOGGLE_INBOX), false)
  },
  _ = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: true,
    action: i().debounce(() => {
      if (u.S.hasSubscribers(d.CkL.MARK_TOP_INBOX_CHANNEL_READ)) return u.S.dispatch(d.CkL.MARK_TOP_INBOX_CHANNEL_READ), false
    }, 100, {
      leading: true
    })
  }