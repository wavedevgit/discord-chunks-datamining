/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  G: () => s
});
var r = n(960048),
  i = n(981631);
let o = [i.evJ.UNAUTHORIZED, i.evJ.EMAIL_VERIFICATION_REQUIRED, i.evJ.USER_BANNED],
  a = e => {
    var t;
    return null != e && !!("status" in e && "number" == typeof e.status && 0 === e.status || "code" in e && "number" == typeof e.code && o.includes(e.code) || "body" in e && null != e.body && "object" == typeof e.body && "code" in e.body && "number" == typeof(null === (t = e.body) || void 0 === t ? void 0 : t.code) && o.includes(e.body.code))
  },
  s = e => {
    null == e || a(e) || r.Z.captureException(e)
  }