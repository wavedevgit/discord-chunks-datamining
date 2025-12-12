/** Chunk was on web.js **/
/** chunk id: 248402, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var o, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358221 = require("./358221.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk606304 = require("./606304.js"),
  Chunk354459 = require("./354459.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E() {
  let e, t = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  if (null == r) e = null;
  else {
    var n, o, a, l, c;
    null != (e = Chunk358221.Z.getSelectedParticipantId(r)) && Chunk358221.Z.isParticipantPoppedOut(r, module) && (e = null);
    let t = Chunk199902.Z.getLastActiveStream(),
      g = null != module ? Chunk358221.Z.getParticipant(r, module) : null;
    if ((null == g ? true : g.type) !== Chunk354459.fO.ACTIVITY && ((null == g ? true : g.type) !== Chunk354459.fO.USER || (null == (n = g.voiceState) ? true : require.selfVideo)) || (e = null), null != exports && null == module) {
      let n = null == (o = Chunk358221.Z.getParticipant(r, (0, Chunk569545.V9)(exports))) ? true : o.id;
      null == require || Chunk358221.Z.isParticipantPoppedOut(r, require) || (e = require)
    }
    if (null == module) {
      let t = Chunk314897.default.getId(),
        n = s()(Chunk358221.Z.getVideoParticipants(r)).filter(e => e.type === h.fO.USER && e.user.id !== t && !_.Z.isLocalVideoDisabled(e.user.id) && !u.Z.isParticipantPoppedOut(r, e.id)),
        o = require.map(e => e.user.id),
        d = Date.now();
      null == (e = null == (a = require.map(e => [e.user.id, m.Z.getSpeakingDuration(e.user.id, d)]).filter(e => {
        let [t, n] = e;
        return 0 !== n
      }).maxBy(e => {
        let [t, n] = e;
        return -n
      })) ? true : Chunk392711[0]) && (e = null != i && o.has(i) ? i : null == (c = require.first()) || null == (l = Chunk570140.user) ? true : Chunk442837.id)
    }
  }
  i !== module && (i = module, exports && v.emitChange())
}
let b = s().debounce(E, 300);

function y() {
  return b(), false
}
class O extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk358221.Z, Chunk314897.default, Chunk606304.Z, Chunk199902.Z, Chunk131951.Z), this.syncWith([Chunk358221.Z, Chunk199902.Z], y)
  }
  getSpeaker(e) {
    return r !== e && (r = e, E(false)), null != i ? i : p.default.getId()
  }
}
g(O, "displayName", "VideoSpeakerStore");
let v = new O(Chunk570140.Z, {
    AUDIO_SET_LOCAL_VIDEO_DISABLED: y
  }),
  S = v