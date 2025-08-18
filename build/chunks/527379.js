/** Chunk was on 91173 **/
/** chunk id: 527379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Dr: () => f,
  YO: () => p,
  _X: () => _,
  _o: () => m,
  nb: () => g,
  zO: () => d
});
var Chunk570140 = require("./570140.js"),
  Chunk434404 = require("./434404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk241559 = require("./241559.js"),
  Chunk327999 = require("./327999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
async function d(e) {
  await r.Z.dispatch({
    type: "INITIALIZE_MEMBER_SAFETY_STORE",
    guildId: e
  })
}

function p(e) {
  r.Z.dispatch({
    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
    guildId: e
  })
}

function m(e, t) {
  var {
    continuationToken: n
  } = t, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(t, ["continuationToken"]);
  r.Z.dispatch({
    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
    guildId: e,
    pagination: i
  })
}
async function f(e, t) {
  await r.Z.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}

function _(e) {
  let t = (0, o.lv)(e),
    n = a.Z.getGuild(e);
  return !!t && null != n && (n.features.has(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || n.features.has(c.oNc.COMMUNITY) || n.features.has(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) ? (0, l.uL)(c.Z5c.CHANNEL(e, u.oC.MEMBER_SAFETY)) : i.Z.open(n.id, c.pNK.MEMBERS), true)
}
async function g(e, t) {
  let n = await (0, s._2)(e, t);
  return 0 === n.length ? [] : (await r.Z.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}