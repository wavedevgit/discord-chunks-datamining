/** Chunk was on web.js **/
/** chunk id: 731722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ic: () => f,
  Pb: () => p,
  jq: () => u,
  oZ: () => _,
  up: () => d,
  yF: () => h
});
var Chunk442837 = require("./442837.js"),
  Chunk715903 = require("./715903.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk131085 = require("./131085.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  var t;
  return (null == e || null == (t = e.profile) ? true : t.tag) != null
}

function d(e) {
  return e.features.has(c.GuildFeatures.GUILD_TAGS)
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.Gg.SIZE_12;
  if (null == t) return;
  let {
    CDN_HOST: r
  } = window.GLOBAL_ENV;
  if (null == r) return;
  let i = l.oC[n];
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
  let s = (0, r.e7)([o.Z], () => o.Z.getGuild(e), [e]);
  return null == e ? e : null == s ? s : {
    identityGuildId: s.id,
    identityEnabled: true,
    tag: null != (i = null == (t = s.profile) ? true : t.tag) ? i : true,
    badge: null != (a = null == (n = s.profile) ? true : n.badge) ? a : true
  }
}

function h(e, t, n) {
  let o = (0, r.e7)([s.default], () => s.default.getUser(e), [e]),
    l = (0, r.e7)([a.ZP], () => {
      if (null == t || null == e) return null;
      let n = a.ZP.getMember(t, e);
      return (0, i.EY)(n)
    }, [t, e]),
    {
      tag: c,
      guildId: u
    } = p(true !== n ? n : null == o ? true : o.primaryGuild);
  return null != u && null != c && !l
}