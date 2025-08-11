/** Chunk was on web.js **/
/** chunk id: 532239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk340541 = require("./340541.js"),
  Chunk493754 = require("./493754.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t, n, d) {
  let _ = {
      streamUserId: n,
      channel: e,
      applicationId: d,
      appContext: (0, o.bp)()
    },
    p = () => {
      null != t && e.type === c.d4z.GUILD_VOICE && (0, s.W)(f({
        guild: t
      }, _))
    },
    {
      entrypoints: h
    } = (0, a._k)({
      location: "more_settings_invite_item"
    }),
    m = h ? i.oLu : i.ejJ;
  if (null != d) return <i.sNh id={"invite-to-stream"} label={u.intl.string(u.t["OzOM/v"])} action={p} icon={i.ejJ} />;
  if (null == t || null == e || !l.Z.can(c.Plq.CREATE_INSTANT_INVITE, e)) return null;
  let g = h ? u.intl.string(u.t["EE+P0N"]) : u.intl.string(u.t["6Qgren"]);
  return <i.sNh id={"invite-friends"} label={g} action={p} icon={m} />
}