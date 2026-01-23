/** Chunk was on 21738 **/
/** chunk id: 327866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk800828 = require("./800828.js"),
  Chunk912309 = require("./912309.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk458294 = require("./458294.js"),
  Chunk430452 = require("./430452.js"),
  Chunk803224 = require("./803224.js"),
  Chunk383501 = require("./383501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk485296 = require("./485296.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js");
let b = (0, Chunk723702.isMac)() ? null : "DEFAULT";
class E extends Chunk64700.PureComponent {
  componentDidMount() {
    A.Ay.setSystemTrayIcon(this.getIcon())
  }
  componentDidUpdate() {
    A.Ay.setSystemTrayIcon(this.getIcon())
  }
  componentWillUnmount() {
    A.Ay.setSystemTrayIcon(b)
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
        } = this.props, l = b;
        return (0, m.isMac)() && !r ? l : (0, m.isLinux)() || !r ? (i && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
      })
  }
}
let O = () => null;
Chunk723702.isPlatformEmbedded && (Chunk837921.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => l.A.toggleSelfMute({
  location: "System Tray"
})), Chunk837921.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => l.A.toggleSelfDeaf()), Chunk837921.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
  (0, c.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, {
    section: _.nc_.VOICE
  })
}), O = Chunk311907.Ay.connectStores([Chunk383501.A, Chunk430452.A, Chunk485296.A, Chunk458294.default, Chunk994500.A, Chunk803224.A, Chunk800828.A], () => {
  let e = u.default.getTotalMentionCount(),
    t = u.default.hasAnyUnread(),
    n = (0, s.dH)([g.A, a.A]),
    r = !p.A.getDisableUnreadBadge() && !!(t || e + n > 0);
  return {
    connected: h.A.isConnected(),
    speaking: f.A.isCurrentUserSpeaking(),
    muted: d.A.isSelfMute() || d.A.isSelfMutedTemporarily(),
    deafened: d.A.isSelfDeaf(),
    unread: r
  }
})(E));
let y = O