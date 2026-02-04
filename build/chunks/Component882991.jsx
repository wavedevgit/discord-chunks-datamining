/** Chunk was on 21738 **/
/** chunk id: 882991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk528767 = require("./528767.js"),
  Chunk105530 = require("./105530.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = "STAGE_INVITED_TO_SPEAK_MODAL";
class f extends Chunk272355.A {
  _initialize() {
    l.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    l.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), p(this, "handleVoiceStateUpdates", e => {
      var t;
      let {
        voiceStates: l
      } = e, a = s.default.getId(), f = null == (t = c.A.getSession()) ? true : t.sessionId, g = l.find(e => e.userId === a && e.sessionId === f);
      if (null == g) return;
      let m = g.channelId;
      if (null == m) {
        (0, i.kBI)(h) && (0, i.OoC)(h);
        return
      }
      let A = o.A.getChannel(m);
      if (!(null == A ? true : A.isGuildStageVoice())) return;
      let _ = (0, u.eY)(g) === u.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      if (null != A && _) {
        if ((0, i.kBI)(h)) return;
        (0, i.mMO)(async () => {
          let {
            default: e
          } = await n.e("90037").then(n.bind(n, 427412));
          return t => {
            var n, i;
            return (0, r.jsx)(e, (n = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  p(e, t, n[t])
                })
              }
              return e
            }({}, t), i = i = {
              channel: A
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n))
          }
        }, {
          modalKey: h,
          onCloseRequest: d.FXj
        })
      }
    })
  }
}
let g = new f