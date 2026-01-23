/** Chunk was on 21738 **/
/** chunk id: 194045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk450510 = require("./450510.js"),
  Chunk891540 = require("./891540.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk532624 = require("./532624.js"),
  Chunk518647 = require("./518647.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk123973 = require("./123973.js"),
  Chunk102597 = require("./102597.js"),
  Chunk904054 = require("./904054.js"),
  Chunk857179 = require("./857179.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = new Chunk626584.A("SoundboardManager");
class v extends Chunk518647.A {
  _initialize() {
    super._initialize(), __OVERLAY__ || l.h.subscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  _terminate() {
    super._terminate(), __OVERLAY__ || l.h.unsubscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, y(this, "playingSoundsWeb", new Map), y(this, "_stopAndClearSounds", () => {
      u.A.supports(O.O5.SAMPLE_PLAYBACK) && u.A.getMediaEngine().eachConnection(e => {
        e.stopAllSamplesLocalPlayback()
      }), this.playingSoundsWeb.forEach(e => {
        e.pause(), e.src = ""
      }), this.playingSoundsWeb = new Map
    }), y(this, "_playSound", async function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
        r = arguments.length > 2 ? arguments[2] : true,
        i = arguments.length > 3 ? arguments[3] : true,
        l = null != i && d.A.getVoiceChannelId() === i;
      if ((null == i || l) && !u.A.isDeaf() && !f.A.isLocalSoundboardMuted(r)) try {
        let i = {
          soundKey: "".concat(r, "-").concat(e),
          soundURL: (0, A.A)(e),
          soundVolume: (0, _.A)(n),
          reportSoundStartedPlaying: () => (0, g.dZ)(e, r)
        };
        u.A.supports(O.O5.SAMPLE_PLAYBACK) ? await (0, b.o)(i) : await (0, b.G)(i, t.playingSoundsWeb)
      } catch (e) {
        I.warn("Error playing soundboard sound: ".concat(e.message))
      } finally {
        (0, g.g0)(e, r)
      }
    }), y(this, "_handleOverlaySoundboardSoundsFetchRequest", () => {
      (0, g.E7)()
    }), y(this, "_handleOpenEducationModal", (e, t) => {
      if (null == e) return;
      let l = c.A.getChannel(t),
        a = p.Ay.getKeybindForAction(E.hCu.SOUNDBOARD_HOLD);
      null != l && (0, m.A)(l) && null != a && o.A.hasHotspot(s._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, i.mMO)(async () => {
        let {
          default: t
        } = await n.e("51143").then(n.bind(n, 888762));
        return n => {
          var i, s;
          return (0, r.jsx)(t, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                y(e, t, n[t])
              })
            }
            return e
          }({}, n), s = s = {
            guildId: e,
            keybind: a,
            channel: l
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
          }), i))
        }
      })
    })
  }
}
let S = new v