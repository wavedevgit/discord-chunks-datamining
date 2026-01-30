/** Chunk was on 64935 **/
/** chunk id: 221950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cw: () => m,
  Ld: () => f,
  UD: () => p,
  aZ: () => g,
  jo: () => _,
  uO: () => d
});
var Chunk73153 = require("./73153.js"),
  Chunk997509 = require("./997509.js"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk134413 = require("./134413.js"),
  Chunk11541 = require("./11541.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");
async function d(e) {
  await r.h.dispatch({
    type: "INITIALIZE_MEMBER_SAFETY_STORE",
    guildId: e
  })
}

function p(e) {
  r.h.dispatch({
    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
    guildId: e
  })
}

function m(e, t) {
  let {
    continuationToken: n
  } = t, i = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(t, ["continuationToken"]);
  r.h.dispatch({
    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
    guildId: e,
    pagination: i
  })
}
async function f(e, t) {
  await r.h.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}

function g(e) {
  let t = (0, s.Ml)(e),
    n = a.A.getGuild(e);
  return !!t && null != n && (n.features.has(c.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || n.features.has(c.GuildFeatures.COMMUNITY) || n.features.has(c.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, l.pX)(c.BVt.CHANNEL(e, u.VV.MEMBER_SAFETY)) : i.A.open(n.id, c.BEX.MEMBERS), true)
}
async function _(e, t) {
  let n = await (0, o.vk)(e, t);
  return 0 === n.length ? [] : (await r.h.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}