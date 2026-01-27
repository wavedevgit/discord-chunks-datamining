/** Chunk was on web.js **/
/** chunk id: 788318, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => A
}), require("./896048.js");
var a, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk313961 = require("./313961.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk485296 = require("./485296.js"),
  Chunk806931 = require("./806931.js");

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
    null != (e = u.A.getSelectedParticipantId(r)) && u.A.isParticipantPoppedOut(r, e) && (e = null);
    let t = f.A.getLastActiveStream(),
      g = null != e ? u.A.getParticipant(r, e) : null;
    if ((null == g ? true : g.type) !== m.lp.ACTIVITY && ((null == g ? true : g.type) !== m.lp.USER || (null == (n = g.voiceState) ? true : n.selfVideo)) || (e = null), null != t && null == e) {
      let n = null == (a = u.A.getParticipant(r, (0, d._z)(t))) ? true : a.id;
      null == n || u.A.isParticipantPoppedOut(r, n) || (e = n)
    }
    if (null == e) {
      let t = p.default.getId(),
        n = s()(u.A.getVideoParticipants(r)).filter(e => e.type === m.lp.USER && e.user.id !== t && !_.A.isLocalVideoDisabled(e.user.id) && !u.A.isParticipantPoppedOut(r, e.id)),
        a = n.map(e => e.user.id),
        d = Date.now();
      null == (e = null == (o = n.map(e => [e.user.id, h.A.getSpeakingDuration(e.user.id, d)]).filter(e => {
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
let y = s().throttle(E, 300, {
  trailing: true
});

function b() {
  return y(), false
}
class O extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, p.default, h.A, f.A, _.A), this.syncWith([u.A, f.A], b)
  }
  getSpeaker(e) {
    return r !== e && (r = e, E(false)), null != i ? i : p.default.getId()
  }
}
g(O, "displayName", "VideoSpeakerStore");
let v = new O(Chunk73153.h, {
    AUDIO_SET_LOCAL_VIDEO_DISABLED: b
  }),
  A = v