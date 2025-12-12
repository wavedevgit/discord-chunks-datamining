/** Chunk was on web.js **/
/** chunk id: 731722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ic: () => d,
  Pb: () => f,
  jq: () => c,
  up: () => u,
  yF: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk715903 = require("./715903.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk131085 = require("./131085.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  var t;
  return (null == e || null == (t = e.profile) ? true : t.tag) != null
}

function u(e) {
  return e.features.has(l.GuildFeatures.GUILD_TAGS)
}

function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s.Gg.SIZE_12;
  if (null == t) return;
  let {
    CDN_HOST: r
  } = window.GLOBAL_ENV;
  if (null == r) return;
  let i = s.oC[n];
  return "https://".concat(r, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(i)
}

function f(e) {
  return null != e && e.identityEnabled ? {
    guildId: e.identityGuildId,
    tag: e.tag,
    badge: e.badge
  } : {}
}

function p(e, t) {
  let n = (0, r.e7)([o.default], () => o.default.getUser(e), [e]),
    s = (0, r.e7)([a.ZP], () => {
      if (null == t || null == e) return null;
      let n = a.ZP.getMember(t, e);
      return (0, i.EY)(n)
    }, [t, e]),
    {
      tag: l,
      guildId: c
    } = f(null == n ? true : n.primaryGuild);
  return null != c && null != l && !s
}