/** Chunk was on 92917 **/
/** chunk id: 505417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => i
});
var Chunk985018 = require("./985018.jsx");

function i(e) {
  let {
    isVoiceChannel: t,
    isHubGuild: n,
    isOwnInvite: i,
    isGuest: l,
    isStage: a,
    isStream: s
  } = e;
  if (t)
    if (i)
      if (s) return r.intl.string(r.t.N85DCl);
      else if (a) return r.intl.string(r.t.TJQcNv);
  else if (l) return r.intl.string(r.t.mJyBir);
  else return r.intl.string(r.t.lxTgP9);
  else if (s) return r.intl.string(r.t.Mnvc3C);
  else if (a) return r.intl.string(r.t.FdPNr5);
  else if (l) return r.intl.string(r.t.f4gmrf);
  else return r.intl.string(r.t.H39rEY);
  return n ? i ? r.intl.string(r.t.UxmnHx) : r.intl.string(r.t.sigPEf) : i ? r.intl.string(r.t["oU/lsl"]) : r.intl.string(r.t.BoQUFf)
}