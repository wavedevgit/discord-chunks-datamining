/** Chunk was on 1272 **/
/** chunk id: 635395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk230711 = require("./230711.js"),
  Chunk91896 = require("./91896.js"),
  Chunk849862 = require("./849862.js"),
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
class O extends Chunk647438.PureComponent {
  componentDidMount() {
    Chunk998502.ZP.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    Chunk998502.ZP.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    Chunk998502.ZP.setSystemTrayIcon(_)
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
        return (0, g.isMac)() && !r ? l : (0, g.isLinux)() || !r ? (i && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
      })
  }
}
let E = () => null;
Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.on("SYSTEM_TRAY_TOGGLE_MUTE", () => Chunk846027.Z.toggleSelfMute({
  location: "System Tray"
})), Chunk998502.ZP.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => Chunk846027.Z.toggleSelfDeaf()), Chunk998502.ZP.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  Chunk230711.Z.open(Chunk981631.oAB.VOICE)
}), E = Chunk442837.ZP.connectStores([Chunk19780.Z, Chunk131951.Z, Chunk606304.Z, Chunk888369.default, Chunk699516.Z, Chunk292959.Z, Chunk91896.Z], () => {
  let e = Chunk888369.default.getTotalMentionCount(),
    t = Chunk888369.default.hasAnyUnread(),
    n = (0, Chunk849862.m$)([Chunk699516.Z, Chunk91896.Z]),
    r = !Chunk292959.Z.getDisableUnreadBadge() && !!(exports || module + require > 0);
  return {
    connected: Chunk19780.Z.isConnected(),
    speaking: Chunk606304.Z.isCurrentUserSpeaking(),
    muted: Chunk131951.Z.isSelfMute() || Chunk131951.Z.isSelfMutedTemporarily(),
    deafened: Chunk131951.Z.isSelfDeaf(),
    unread: Chunk647438
  }
})(O));
let y = E