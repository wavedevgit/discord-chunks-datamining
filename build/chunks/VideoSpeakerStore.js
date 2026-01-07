/** Chunk was on web.js **/
/** chunk id: 248402, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var a, Chunk392711 = require("./392711.js"),
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
    var n, a, o, l, c;
    null != (e = u.Z.getSelectedParticipantId(r)) && u.Z.isParticipantPoppedOut(r, e) && (e = null);
    let t = f.Z.getLastActiveStream(),
      g = null != e ? u.Z.getParticipant(r, e) : null;
    if ((null == g ? true : g.type) !== h.fO.ACTIVITY && ((null == g ? true : g.type) !== h.fO.USER || (null == (n = g.voiceState) ? true : n.selfVideo)) || (e = null), null != t && null == e) {
      let n = null == (a = u.Z.getParticipant(r, (0, d.V9)(t))) ? true : a.id;
      null == n || u.Z.isParticipantPoppedOut(r, n) || (e = n)
    }
    if (null == e) {
      let t = p.default.getId(),
        n = s()(u.Z.getVideoParticipants(r)).filter(e => e.type === h.fO.USER && e.user.id !== t && !_.Z.isLocalVideoDisabled(e.user.id) && !u.Z.isParticipantPoppedOut(r, e.id)),
        a = n.map(e => e.user.id),
        d = Date.now();
      null == (e = null == (o = n.map(e => [e.user.id, m.Z.getSpeakingDuration(e.user.id, d)]).filter(e => {
        let [t, n] = e;
        return 0 !== n
      }).maxBy(e => {
        let [t, n] = e;
        return -n
      })) ? true : o[0]) && (e = null != i && a.has(i) ? i : null == (c = n.first()) || null == (l = c.user) ? true : l.id)
    }
  }
  i !== e && (i = e, t && v.emitChange())
}
let b = s().debounce(E, 300);

function y() {
  return b(), false
}
class O extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(u.Z, p.default, m.Z, f.Z, _.Z), this.syncWith([u.Z, f.Z], y)
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