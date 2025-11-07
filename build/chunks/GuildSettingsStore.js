/** Chunk was on web.js **/
/** chunk id: 999382, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f;
require.d(exports, {
  Z: () => te
}), require("./388685.js"), require("./997841.js");
var _, Chunk392711 = require("./392711.js"),
  h = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  g = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk311929 = require("./311929.js"),
  Chunk314852 = require("./314852.js"),
  Chunk131704 = require("./131704.js"),
  Chunk601964 = require("./601964.js"),
  Chunk758449 = require("./758449.js"),
  Chunk598077 = require("./598077.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk709054 = require("./709054.js"),
  Chunk330010 = require("./330010.js"),
  Chunk736617 = require("./736617.js"),
  Chunk978946 = require("./978946.js"),
  Chunk981631 = require("./981631.js"),
  Chunk128449 = require("./128449.js"),
  Chunk135899 = require("./135899.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = true,
  V = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "ownerConfiguredContentLevel", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
  H = ["brandColorPrimary", "description", "icon", "name", "traits", "visibility", "gameApplicationIds", "customBanner", "tag", "badge", "badgeColorPrimary", "badgeColorSecondary"],
  Y = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
  W = false,
  K = Chunk981631.QZA.CLOSED,
  z = {},
  q = null,
  X = false,
  Q = false,
  J = false,
  $ = null,
  ee = null,
  et = null,
  en = 0,
  er = Chunk981631.BpS.NONE,
  ei = null,
  ea = {
    primaryCategoryId: Chunk128449.o3,
    secondaryCategoryIds: [],
    keywords: [],
    emojiDiscoverabilityEnabled: F,
    partnerActionedTimestamp: null,
    partnerApplicationTimestamp: null,
    isPublished: false,
    reasonsToJoin: [],
    socialLinks: [],
    about: ""
  },
  eo = false,
  es = ea,
  el = ea,
  ec = null,
  eu = 0,
  ed = null,
  ef = null,
  e_ = null;

function ep(e) {
  if (null == s || null == o || o.id !== e) returnfalse;
  let t = N.Z.getGuild(e);
  return null != t && (o === s ? s = o = t : o = t, true)
}

function eh(e) {
  W = true, em(e)
}

function em(e) {
  var t;
  let {
    guildId: n,
    section: i,
    subsection: a,
    location: d
  } = e, _ = N.Z.getGuild(n);
  if (null == _) return eg();
  let p = I.Z.getProfile(n);
  o = s = _, l = c = p, J = Q, ee = $, K = M.QZA.OPEN, z = {}, q = null, u = w.default.castGuildIdAsEveryoneGuildRoleId(n), er = s.mfaLevel, el = es, f = null, ei = d, eb({
    section: null != (t = null != i ? i : r) ? t : (0, L.r)(),
    subsection: null != a ? a : null
  })
}

function eg() {
  W = false, K = Chunk981631.QZA.CLOSED, o = s = null, X = false, J = false, ee = null, et = null, en = 0, ec = null, ef = null, e_ = null, r = null, i = null, a = null, er = Chunk981631.BpS.NONE, d = true
}

function eE(e) {
  let {
    state: t
  } = e;
  return d = t, false
}

function eb(e) {
  if (null == s) returnfalse;
  let t = r;
  if (r = e.section, i = e.subsection, r === M.pNK.INSTANT_INVITES || r === M.pNK.INVITES) b.tn.get({
    url: M.ANM.GUILD_INSTANT_INVITES(s.id),
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    O.Z.dispatch({
      type: "GUILD_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  });
  else if (r === M.pNK.INTEGRATIONS || r === M.pNK.ROLES) {
    if (u = null, t !== e.section) return eK(e)
  } else r === M.pNK.MEMBERS ? u = (0, T.lV)(s) : r === M.pNK.VANITY_URL ? (0, x.U5)(s.id) : r === M.pNK.SAFETY && O.Z.dispatch({
    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
    subsection: null == i ? M.KsC.SAFETY_OVERVIEW : i
  })
}

function ey(e) {
  a = e.searchQuery
}

function eO(e) {
  let {
    guildId: t
  } = e;
  z = {};
  let n = N.Z.getGuild(t);
  null != n && (o = s = n)
}

function ev() {
  K = Chunk981631.QZA.SUBMITTING, z = {}
}

function eI() {
  K = Chunk981631.QZA.OPEN
}

function eS(e) {
  var t;
  K = M.QZA.OPEN, r = null != r ? r : (0, L.r)(), i = null, z = null != (t = e.errors) ? t : {}
}

function eT() {
  let e = s;
  if (null == module) returnfalse;
  V.some(t => e[t] !== o[t]) || (s = o)
}

function eA(e) {
  if (null == s) returnfalse;
  V.forEach(t => {
    if (null != s && e.hasOwnProperty(t)) {
      var n;
      s = (0, v.t8)(s, t, null != (n = e[t]) ? n : null)
    }
  }), eT()
}

function eC(e) {
  let {
    guildId: t
  } = e;
  if (null == c || null == s || s.id !== t) returnfalse;
  H.forEach(t => {
    if (null != c && e.hasOwnProperty(t)) {
      let n = e[t];
      true !== n && (c = Z(G({}, c), {
        [t]: n
      }))
    }
  })
}

function eN(e) {
  var t;
  return new A.Z({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new C.Z(e.inviter) : null,
    channel: (0, S.jD)(e.channel),
    guild: null != e.guild ? (0, P.Qs)(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: g()(null != (t = e.created_at) ? t : true),
    flags: e.flags
  })
}

function eR(e) {
  ef = e.invites.reduce((e, t) => (e[t.code] = eN(t), e), {})
}

function eP(e) {
  ef = G({}, ef), delete ef[e.code]
}

function ew(e) {
  ef = Z(G({}, ef), {
    [e.invite.code]: eN(e.invite)
  })
}

function eD(e) {
  ec = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map), eu++
}

function ex(e) {
  let {
    bans: t,
    guildId: n
  } = e;
  (ed !== n || null == ec) && (ed = n, ec = new Map), ec = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ec), eu++
}

function eL(e) {
  let {
    user: t,
    guildId: n
  } = e;
  if (null == ec || null == s || s.id !== n) returnfalse;
  ec.set(t.id, {
    user: t,
    reason: null
  }), eu++
}

function eM(e) {
  let {
    user: t,
    guildId: n
  } = e;
  if (null == ec || null == s || s.id !== n) returnfalse;
  ec.delete(t.id), eu++
}

function ej(e) {
  if (null == s || s.id !== e.guild.id) returnfalse;
  {
    let e = N.Z.getGuild(s.id);
    if (null == e) returnfalse;
    if (l = I.Z.getProfile(s.id), r !== M.pNK.PROFILE && r !== M.pNK.TAG && (c = l), r === M.pNK.PROFILE) {
      o = e, s = e;
      return
    }
    let t = o = e,
      n = G({}, s);
    V.forEach(r => {
      if (!Y.has(r) && ("rulesChannelId" !== r && "publicUpdatesChannelId" !== r || n[r] !== k.b4) && "features" !== r) {
        if ("ownerConfiguredContentLevel" === r) {
          t = (0, v.t8)(t, r, e[r]);
          return
        }
        t = (0, v.t8)(t, r, n[r])
      }
    }), s = t
  }
}

function ek(e) {
  if (null == s || s.id !== e.guild.id) returnfalse;
  eg()
}

function eU(e) {
  let {
    roleId: t
  } = e;
  u = null != t ? t : null
}

function eG(e) {
  let {
    guildId: t
  } = e;
  if (!ep(t)) returnfalse
}

function eB(e) {
  let {
    guildId: t
  } = e;
  if (!ep(t)) returnfalse
}

function eZ(e) {
  let {
    guildId: t,
    roleId: n
  } = e;
  if (!ep(t)) returnfalse;
  u === n && (u = null)
}

function eF(e) {
  X = true, Q = J = e.enabled, $ = ee = e.channelId
}

function eV(e) {
  let {
    guildId: t,
    enabled: n,
    channelId: r
  } = e;
  if (null == s || s.id !== t) returnfalse;
  J = n, ee = r
}

function eH(e) {
  var t;
  et = null != (t = e.code) ? t : null, en = e.uses
}

function eY(e) {
  let {
    level: t
  } = e;
  er = t
}

function eW(e) {
  e_ = e.integrations
}

function eK(e) {
  if (null == s || K !== M.QZA.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id) returnfalse;
  (0, D.i)(s.id)
}

function ez(e) {
  let {
    guildId: t
  } = e;
  null != s && t === s.id && (s = (0, v.t8)(s, "features", s.features.union(new Set([M.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]))))
}

function eq(e) {
  var t, n, r, i, a, o, l, c, u, d;
  let {
    guildId: f,
    metadata: _
  } = e;
  null != s && f === s.id && (false === eo && (eo = true), el = es = {
    primaryCategoryId: null != (t = _.primaryCategoryId) ? t : j.o3,
    secondaryCategoryIds: null != (n = _.secondaryCategoryIds) ? n : [],
    keywords: null != (r = _.keywords) ? r : [],
    emojiDiscoverabilityEnabled: null != (i = _.emojiDiscoverabilityEnabled) ? i : F,
    partnerActionedTimestamp: null != (a = _.partnerActionedTimestamp) ? a : null,
    partnerApplicationTimestamp: null != (o = _.partnerApplicationTimestamp) ? o : null,
    isPublished: null != (l = _.isPublished) && l,
    reasonsToJoin: null != (c = _.reasonsToJoin) ? c : [],
    socialLinks: null != (u = _.socialLinks) ? u : [],
    about: null != (d = _.about) ? d : ""
  }, z = {})
}

function eX() {
  es = el = ea
}

function eQ(e) {
  let {
    slug: t
  } = e;
  f = t
}

function eJ(e) {
  let {} = e;
  f = null
}

function e$(e) {
  let {
    guildId: t,
    categoryId: n
  } = e;
  null != s && t === s.id && (el = Z(G({}, el), {
    secondaryCategoryIds: [...el.secondaryCategoryIds, n]
  }), es = Z(G({}, es), {
    secondaryCategoryIds: [...es.secondaryCategoryIds, n]
  }))
}

function e0(e) {
  let t, {
    guildId: n,
    categoryId: r
  } = e;
  if (null == s || n !== s.id) return;
  let i = el.secondaryCategoryIds.indexOf(r);
  false !== i && ((t = [...el.secondaryCategoryIds]).splice(i, 1), el = Z(G({}, el), {
    secondaryCategoryIds: t
  })), false !== (i = es.secondaryCategoryIds.indexOf(r)) && ((t = [...es.secondaryCategoryIds]).splice(i, 1), es = Z(G({}, es), {
    secondaryCategoryIds: t
  }))
}

function e1(e) {
  let {
    guildId: t,
    errors: n
  } = e;
  null != s && t === s.id && (z = null != n ? n : {})
}

function e2(e) {
  let {
    guildId: t,
    primaryCategoryId: n,
    keywords: r,
    emojiDiscoverabilityEnabled: i,
    isPublished: a,
    reasonsToJoin: o,
    socialLinks: l,
    about: c
  } = e;
  null != s && t === s.id && (el = Z(G({}, el), {
    primaryCategoryId: null != n ? n : el.primaryCategoryId,
    keywords: null != r ? r : el.keywords,
    emojiDiscoverabilityEnabled: null != i ? i : el.emojiDiscoverabilityEnabled,
    isPublished: null != a ? a : el.isPublished,
    reasonsToJoin: null != o ? o : el.reasonsToJoin,
    socialLinks: null != l ? l : el.socialLinks,
    about: null != c ? c : el.about
  }))
}

function e3(e) {
  let {
    guildId: t,
    errors: n
  } = e;
  null != s && t === s.id && (z = null != n ? n : {})
}

function e4(e) {
  let {
    profile: t
  } = e;
  t.id === (null == s ? true : s.id) && (l = c = t)
}

function e8(e) {
  let {
    guildId: t
  } = e;
  if (null == s || s.id !== t) returnfalse;
  q = null
}

function e5(e) {
  let {
    profile: t
  } = e;
  if ((null == c ? true : c.id) == null || !ep(c.id)) returnfalse;
  t.id === (null == s ? true : s.id) && (l = c = t, q = null)
}

function e6(e) {
  let {
    guildId: t,
    error: n
  } = e;
  if (null == s || s.id !== t) returnfalse;
  q = n
}

function e7(e) {
  let {
    guildId: t
  } = e;
  if ((null == c ? true : c.id) == null || !ep(c.id)) returnfalse;
  t === (null == s ? true : s.id) && (l = c = I.Z.getProfile(t), q = null)
}
class e9 extends(_ = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk314852.Z, Chunk594174.default)
  }
  getMetadata() {
    return el
  }
  widgetHasChanges() {
    returnfalse !== X && (J !== Q || ee !== $)
  }
  hasChanges() {
    return !h().isEqual(s, o) || !h().isEqual(el, es) || !h().isEqual(c, l) || this.widgetHasChanges()
  }
  isOpen() {
    return W
  }
  getSavedRouteState() {
    return d
  }
  getSection() {
    return r
  }
  showNotice() {
    return this.hasChanges()
  }
  getGuildId() {
    return null != s ? s.id : null
  }
  showPublicSuccessModal() {
    return !Chunk433517.K.get(Chunk135899.zs)
  }
  getGuild() {
    return s
  }
  getGuildProfile() {
    return c
  }
  getWidget() {
    return {
      enabled: J,
      channelId: ee
    }
  }
  isSubmitting() {
    return K === Chunk981631.QZA.SUBMITTING
  }
  isGuildMetadataLoaded() {
    return eo
  }
  getErrors() {
    return z
  }
  getError(e) {
    var t;
    return null != (t = z[e]) ? t : null
  }
  getProfileError() {
    return q
  }
  getSelectedRoleId() {
    return u
  }
  getSlug() {
    return f
  }
  getBans() {
    return [ec, eu]
  }
  getProps() {
    return {
      submitting: this.isSubmitting(),
      integrations: e_,
      section: r,
      subsection: i,
      errors: z,
      guild: s,
      bans: ec,
      bansVersion: eu,
      invites: ef,
      selectedRoleId: u,
      fetchedEmbed: X,
      embedEnabled: J,
      embedChannelId: ee,
      mfaLevel: er,
      searchQuery: a,
      vanityURLCode: et,
      vanityURLUses: en,
      originalGuild: o,
      hasChanges: this.hasChanges(),
      guildMetadata: el,
      analyticsLocation: ei,
      isGuildMetadataLoaded: eo,
      originalProfile: l,
      profile: c
    }
  }
}
U(e9, "displayName", "GuildSettingsStore");
let te = new e9(Chunk570140.Z, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_INIT: em,
  GUILD_SETTINGS_OPEN: eh,
  GUILD_SETTINGS_CLOSE: eg,
  GUILD_SETTINGS_UPDATE: eA,
  GUILD_SETTINGS_PROFILE_UPDATE: eC,
  GUILD_SETTINGS_CANCEL_CHANGES: eO,
  GUILD_SETTINGS_SAVE_ROUTE_STACK: eE,
  GUILD_SETTINGS_SUBMIT: ev,
  GUILD_SETTINGS_SUBMIT_SUCCESS: eI,
  GUILD_SETTINGS_SUBMIT_FAILURE: eS,
  GUILD_SETTINGS_SET_SECTION: eb,
  GUILD_SETTINGS_SET_SEARCH_QUERY: ey,
  GUILD_SETTINGS_LOADED_BANS: eD,
  GUILD_SETTINGS_LOADED_BANS_BATCH: ex,
  GUILD_SETTINGS_LOADED_INVITES: eR,
  GUILD_SETTINGS_SET_WIDGET: eF,
  GUILD_SETTINGS_SET_VANITY_URL: eH,
  GUILD_SETTINGS_SET_MFA_SUCCESS: eY,
  GUILD_SETTINGS_ROLE_SELECT: eU,
  GUILD_SETTINGS_LOADED_INTEGRATIONS: eW,
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: ez,
  GUILD_BAN_ADD: eL,
  GUILD_BAN_REMOVE: eM,
  GUILD_ROLE_CREATE: eG,
  GUILD_ROLE_UPDATE: eB,
  GUILD_ROLE_DELETE: eZ,
  GUILD_UPDATE: ej,
  GUILD_DELETE: ek,
  GUILD_PROFILE_FETCH_SUCCESS: e4,
  GUILD_PROFILE_UPDATE: e8,
  GUILD_PROFILE_UPDATE_SUCCESS: e5,
  GUILD_PROFILE_UPDATE_FAILURE: e6,
  GUILD_PROFILE_UPDATE_VISIBILITY: e8,
  GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: e7,
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e6,
  USER_CONNECTIONS_UPDATE: eK,
  GUILD_INTEGRATIONS_UPDATE: eK,
  INSTANT_INVITE_REVOKE_SUCCESS: eP,
  INSTANT_INVITE_CREATE_SUCCESS: ew,
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eq,
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: eX,
  GUILD_DISCOVERY_CATEGORY_ADD: e$,
  GUILD_DISCOVERY_CATEGORY_DELETE: e0,
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: e1,
  GUILD_UPDATE_DISCOVERY_METADATA: e2,
  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e3,
  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eQ,
  GUILD_DISCOVERY_SLUG_FETCH_FAIL: eJ,
  GUILD_SETTINGS_WIDGET_UPDATE: eV
})