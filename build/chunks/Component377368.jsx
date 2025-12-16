/** Chunk was on 1272 **/
/** chunk id: 377368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk536442 = require("./536442.js"),
  Chunk810788 = require("./810788.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk556296 = require("./556296.js"),
  Chunk131468 = require("./131468.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk641015 = require("./641015.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk49230 = require("./49230.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = new Chunk710845.Z("SoundboardManager");
class C extends Chunk131468.Z {
  _initialize() {
    super._initialize(), __OVERLAY__ || Chunk570140.Z.subscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  _terminate() {
    super._terminate(), __OVERLAY__ || Chunk570140.Z.unsubscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, y(this, "playingSoundsWeb", new Map), y(this, "_stopAndClearSounds", () => {
      u.Z.supports(v.AN.SAMPLE_PLAYBACK) && u.Z.getMediaEngine().eachConnection(e => {
        e.stopAllSamplesLocalPlayback()
      }), this.playingSoundsWeb.forEach(e => {
        e.pause(), e.src = ""
      }), this.playingSoundsWeb = new Map
    }), y(this, "_playSound", async function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
        r = arguments.length > 2 ? arguments[2] : true,
        i = arguments.length > 3 ? arguments[3] : true,
        l = null != i && d.Z.getVoiceChannelId() === i;
      if ((null == i || l) && !u.Z.isDeaf() && !h.Z.isLocalSoundboardMuted(r)) try {
        let i = {
          soundKey: "".concat(r, "-").concat(e),
          soundURL: (0, b.Z)(e),
          soundVolume: (0, _.Z)(n),
          reportSoundStartedPlaying: () => (0, g.xR)(e, r)
        };
        u.Z.supports(v.AN.SAMPLE_PLAYBACK) ? await (0, E.$)(i) : await (0, E.h)(i, t.playingSoundsWeb)
      } catch (e) {
        I.warn("Error playing soundboard sound: ".concat(e.message))
      } finally {
        (0, g.R)(e, r)
      }
    }), y(this, "_handleOverlaySoundboardSoundsFetchRequest", () => {
      (0, g.w)()
    }), y(this, "_handleOpenEducationModal", (e, t) => {
      if (null == e) return;
      let l = c.Z.getChannel(t),
        a = p.ZP.getKeybindForAction(O.kg4.SOUNDBOARD_HOLD);
      null != l && (0, m.Z)(l) && null != a && o.Z.hasHotspot(s.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, i.ZDy)(async () => {
        let {
          default: t
        } = await n.e("69208").then(n.bind(n, 490166));
        return n => (0, r.jsx)(t, function(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e
        }(function(e) {
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
        }({}, n), {
          guildId: e,
          keybind: a,
          channel: l
        }))
      })
    })
  }
}
let S = new C