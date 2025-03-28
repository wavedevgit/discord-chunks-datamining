/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(442837),
  i = n(314897),
  o = n(979651),
  a = n(258609);

function s() {
  return (0, r.e7)([i.default, o.Z, a.Z], () => {
    var e;
    let t = i.default.getId(),
      n = a.Z.getRemoteSessionId();
    return null !== (e = o.Z.getVoiceStateForSession(t, n)) && void 0 !== e ? e : void 0
  }, [])
}