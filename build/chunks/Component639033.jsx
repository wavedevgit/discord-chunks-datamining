/** Chunk was on 1272 **/
/** chunk id: 639033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk797258 = require("./797258.js"),
  Chunk590415 = require("./590415.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "STAGE_INVITED_TO_SPEAK_MODAL";
class h extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), p(this, "handleVoiceStateUpdates", e => {
      var t;
      let {
        voiceStates: l
      } = e, a = o.default.getId(), h = null == (t = c.Z.getSession()) ? true : t.sessionId, g = l.find(e => e.userId === a && e.sessionId === h);
      if (null == g) return;
      let m = g.channelId;
      if (null == m) {
        (0, i.nfh)(f) && (0, i.Mr3)(f);
        return
      }
      let _ = s.Z.getChannel(m);
      if (!(null == _ ? true : _.isGuildStageVoice())) return;
      let b = (0, u.gf)(g) === u.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      if (null != _ && b) {
        if ((0, i.nfh)(f)) return;
        (0, i.ZDy)(async () => {
          let {
            default: e
          } = await n.e("13878").then(n.bind(n, 113140));
          return t => (0, r.jsx)(e, function(e, t) {
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
                p(e, t, n[t])
              })
            }
            return e
          }({}, t), {
            channel: _
          }))
        }, {
          modalKey: f,
          onCloseRequest: d.VqG
        })
      }
    })
  }
}
let g = new h