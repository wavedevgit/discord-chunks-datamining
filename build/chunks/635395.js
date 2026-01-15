/** Chunk was on 1272 **/
/** chunk id: 635395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk91896 = require("./91896.js"),
  Chunk849862 = require("./849862.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk888369 = require("./888369.js"),
  Chunk131951 = require("./131951.js"),
  Chunk292959 = require("./292959.js"),
  Chunk19780 = require("./19780.js"),
  Chunk699516 = require("./699516.js"),
  Chunk606304 = require("./606304.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");
let _ = (0, Chunk358085.isMac)() ? null : "DEFAULT";
class O extends Chunk473749.PureComponent {
  componentDidMount() {
    b.ZP.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    b.ZP.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    b.ZP.setSystemTrayIcon(_)
  }
  render() {
    return null
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "getIcon", () => {
        let {
          deafened: e,
          muted: t,
          speaking: n,
          connected: r,
          unread: i
        } = this.props, l = _;
        return (0, m.isMac)() && !r ? l : (0, m.isLinux)() || !r ? (i && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
      })
  }
}
let v = () => null;
Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.on("SYSTEM_TRAY_TOGGLE_MUTE", () => l.Z.toggleSelfMute({
  location: "System Tray"
})), Chunk998502.ZP.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => l.Z.toggleSelfDeaf()), Chunk998502.ZP.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  (0, c.openUserSettings)(s.n.VOICE_AND_VIDEO_PANEL, {
    section: E.oAB.VOICE
  })
}), v = Chunk442837.ZP.connectStores([Chunk19780.Z, Chunk131951.Z, Chunk606304.Z, Chunk888369.default, Chunk699516.Z, Chunk292959.Z, Chunk91896.Z], () => {
  let e = u.default.getTotalMentionCount(),
    t = u.default.hasAnyUnread(),
    n = (0, o.m$)([g.Z, a.Z]),
    r = !p.Z.getDisableUnreadBadge() && !!(t || e + n > 0);
  return {
    connected: f.Z.isConnected(),
    speaking: h.Z.isCurrentUserSpeaking(),
    muted: d.Z.isSelfMute() || d.Z.isSelfMutedTemporarily(),
    deafened: d.Z.isSelfDeaf(),
    unread: r
  }
})(O));
let I = v