/** Chunk was on web.js **/
/** chunk id: 685073, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rg: () => d,
  Wb: () => h,
  Zo: () => p,
  gC: () => f,
  gS: () => _,
  q0: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk229527 = require("./229527.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk743981 = require("./743981.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  var t;
  return (null == e || null == (t = e.profile) ? true : t.tag) != null
}

function d(e) {
  return e.features.has(c.GuildFeatures.GUILD_TAGS)
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.Sl.SIZE_12;
  if (null == t) return;
  let {
    CDN_HOST: r
  } = window.GLOBAL_ENV;
  if (null == r) return;
  let i = l.lv[n];
  return "https://".concat(r, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(i)
}

function p(e) {
  return null != e && e.identityEnabled ? {
    guildId: e.identityGuildId,
    tag: e.tag,
    badge: e.badge
  } : {}
}

function _(e) {
  var t, n, i, a;
  let o = (0, r.bG)([s.A], () => s.A.getGuild(e), [e]);
  return null == e ? e : null == o ? o : {
    identityGuildId: o.id,
    identityEnabled: true,
    tag: null != (t = null == (i = o.profile) ? true : i.tag) ? t : true,
    badge: null != (n = null == (a = o.profile) ? true : a.badge) ? n : true
  }
}

function h(e, t, n) {
  let s = (0, r.bG)([o.default], () => o.default.getUser(e), [e]),
    l = (0, r.bG)([a.Ay], () => {
      if (null == t || null == e) return null;
      let n = a.Ay.getMember(t, e);
      return (0, i.TR)(n)
    }, [t, e]),
    {
      tag: c,
      guildId: u
    } = p(true !== n ? n : null == s ? true : s.primaryGuild);
  return null != u && null != c && !l
}