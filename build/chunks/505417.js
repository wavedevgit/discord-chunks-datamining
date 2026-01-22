/** Chunk was on web.js **/
/** chunk id: 505417, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => i
});
var Chunk985018 = require("./985018.jsx");

function i(e) {
  let {
    isVoiceChannel: t,
    isHubGuild: n,
    isOwnInvite: i,
    isGuest: a,
    isStage: s,
    isStream: o
  } = e;
  if (t)
    if (i)
      if (o) return r.intl.string(r.t.N85DCl);
      else if (s) return r.intl.string(r.t.TJQcNv);
  else if (a) return r.intl.string(r.t.mJyBir);
  else return r.intl.string(r.t.lxTgP9);
  else if (o) return r.intl.string(r.t.Mnvc3C);
  else if (s) return r.intl.string(r.t.FdPNr5);
  else if (a) return r.intl.string(r.t.f4gmrf);
  else return r.intl.string(r.t.H39rEY);
  return n ? i ? r.intl.string(r.t.UxmnHx) : r.intl.string(r.t.sigPEf) : i ? r.intl.string(r.t["oU/lsl"]) : r.intl.string(r.t.BoQUFf)
}