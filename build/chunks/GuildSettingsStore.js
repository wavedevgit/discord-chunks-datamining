/** Chunk was on web.js **/
/** chunk id: 555337, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f;
require.d(exports, {
  A: () => tt
}), require("./896048.js"), require("./938796.js");
var p, Chunk735438 = require("./735438.js"),
  h = require.n(Chunk735438),
  Chunk989349 = require("./989349.js"),
  g = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk867051 = require("./867051.js"),
  Chunk837011 = require("./837011.js"),
  Chunk95701 = require("./95701.js"),
  Chunk260509 = require("./260509.js"),
  Chunk671759 = require("./671759.js"),
  Chunk427157 = require("./427157.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk860689 = require("./860689.js"),
  Chunk661191 = require("./661191.js"),
  Chunk794967 = require("./794967.js"),
  Chunk310527 = require("./310527.js"),
  Chunk595818 = require("./595818.js"),
  Chunk652215 = require("./652215.js"),
  Chunk324580 = require("./324580.js"),
  Chunk124759 = require("./124759.js");

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

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = true,
  H = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "ownerConfiguredContentLevel", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
  Y = ["brandColorPrimary", "description", "icon", "name", "traits", "visibility", "gameApplicationIds", "customBanner", "tag", "badge", "badgeColorPrimary", "badgeColorSecondary"],
  W = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
  K = false,
  z = Chunk652215.XlH.CLOSED,
  q = {},
  Z = null,
  Q = false,
  X = false,
  J = false,
  $ = null,
  ee = null,
  et = null,
  en = 0,
  er = Chunk652215.EkJ.NONE,
  ei = null,
  ea = {
    primaryCategoryId: Chunk324580.ig,
    secondaryCategoryIds: [],
    keywords: [],
    emojiDiscoverabilityEnabled: B,
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
  ep = null;

function e_(e) {
  if (null == s || null == o || o.id !== e) returnfalse;
  let t = N.A.getGuild(e);
  return null != t && (o === s ? s = o = t : o = t, true)
}

function eh(e) {
  K = true, em(e)
}

function em(e) {
  var t;
  let {
    guildId: n,
    section: i,
    subsection: a,
    location: d
  } = e, p = N.A.getGuild(n);
  if (null == p) return eg();
  let _ = A.A.getProfile(n);
  o = s = p, l = c = _, J = X, ee = $, z = M.XlH.OPEN, q = {}, Z = null, u = P.default.castGuildIdAsEveryoneGuildRoleId(n), er = s.mfaLevel, el = es, f = null, ei = d, ey({
    section: null != (t = null != i ? i : r) ? t : (0, x.x)(),
    subsection: null != a ? a : null
  })
}

function eg() {
  K = false, z = M.XlH.CLOSED, o = s = null, Q = false, J = false, ee = null, et = null, en = 0, ec = null, ef = null, ep = null, r = null, i = null, a = null, er = M.EkJ.NONE, d = true
}

function eE(e) {
  let {
    state: t
  } = e;
  return d = t, false
}

function ey(e) {
  if (null == s) returnfalse;
  let t = r;
  if (r = e.section, i = e.subsection, r === M.BEX.INSTANT_INVITES || r === M.BEX.INVITES) y.Bo.get({
    url: M.Rsh.GUILD_INSTANT_INVITES(s.id),
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    O.h.dispatch({
      type: "GUILD_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  });
  else if (r === M.BEX.INTEGRATIONS || r === M.BEX.ROLES) {
    if (u = null, t !== e.section) return ez(e)
  } else r === M.BEX.MEMBERS ? u = (0, S.af)(s) : r === M.BEX.VANITY_URL ? (0, L.Je)(s.id) : r === M.BEX.SAFETY && O.h.dispatch({
    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
    subsection: null == i ? M.nd0.SAFETY_OVERVIEW : i
  })
}

function eb(e) {
  a = e.searchQuery
}

function eO(e) {
  let {
    guildId: t
  } = e;
  q = {};
  let n = N.A.getGuild(t);
  null != n && (o = s = n)
}

function ev() {
  z = M.XlH.SUBMITTING, q = {}
}

function eA() {
  z = M.XlH.OPEN
}

function eI(e) {
  var t;
  z = M.XlH.OPEN, r = null != r ? r : (0, x.x)(), i = null, q = null != (t = e.errors) ? t : {}
}

function eS() {
  let e = s;
  if (null == e) returnfalse;
  H.some(t => e[t] !== o[t]) || (s = o)
}

function eT(e) {
  if (null == s) returnfalse;
  H.forEach(t => {
    if (null != s && e.hasOwnProperty(t)) {
      var n;
      s = (0, v.hZ)(s, t, null != (n = e[t]) ? n : null)
    }
  }), eS()
}

function eC(e) {
  let {
    guildId: t
  } = e;
  if (null == c || null == s || s.id !== t) returnfalse;
  Y.forEach(t => {
    if (null != c && e.hasOwnProperty(t)) {
      let n = e[t];
      true !== n && (c = F(G({}, c), {
        [t]: n
      }))
    }
  })
}

function eN(e) {
  var t;
  return new T.A({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new C.A(e.inviter) : null,
    channel: (0, I.OY)(e.channel),
    guild: null != e.guild ? (0, R.DY)(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: g()(null != (t = e.created_at) ? t : true),
    flags: e.flags,
    roles: e.roles
  })
}

function ew(e) {
  ef = e.invites.reduce((e, t) => (e[t.code] = eN(t), e), {})
}

function eR(e) {
  ef = G({}, ef), delete ef[e.code]
}

function eP(e) {
  ef = F(G({}, ef), {
    [e.invite.code]: eN(e.invite)
  })
}

function eD(e) {
  ec = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map), eu++
}

function eL(e) {
  let {
    bans: t,
    guildId: n
  } = e;
  (ed !== n || null == ec) && (ed = n, ec = new Map), ec = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ec), eu++
}

function ex(e) {
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
    let e = N.A.getGuild(s.id);
    if (null == e) returnfalse;
    if (l = A.A.getProfile(s.id), r !== M.BEX.PROFILE && r !== M.BEX.TAG && (c = l), r === M.BEX.PROFILE) {
      o = e, s = e;
      return
    }
    let t = o = e,
      n = G({}, s);
    H.forEach(r => {
      if (!W.has(r) && ("rulesChannelId" !== r && "publicUpdatesChannelId" !== r || n[r] !== k.SP) && "features" !== r) {
        if ("ownerConfiguredContentLevel" === r) {
          t = (0, v.hZ)(t, r, e[r]);
          return
        }
        t = (0, v.hZ)(t, r, n[r])
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
  if (!e_(t)) returnfalse
}

function eV(e) {
  let {
    guildId: t
  } = e;
  if (!e_(t)) returnfalse
}

function eF(e) {
  let {
    guildId: t,
    roleId: n
  } = e;
  if (!e_(t)) returnfalse;
  u === n && (u = null)
}

function eB(e) {
  Q = true, X = J = e.enabled, $ = ee = e.channelId
}

function eH(e) {
  let {
    guildId: t,
    enabled: n,
    channelId: r
  } = e;
  if (null == s || s.id !== t) returnfalse;
  J = n, ee = r
}

function eY(e) {
  var t;
  et = null != (t = e.code) ? t : null, en = e.uses
}

function eW(e) {
  let {
    level: t
  } = e;
  er = t
}

function eK(e) {
  ep = e.integrations
}

function ez(e) {
  if (null == s || z !== M.XlH.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id) returnfalse;
  (0, D.c)(s.id)
}

function eq(e) {
  let {
    guildId: t
  } = e;
  if (null == s || t !== s.id) returnfalse;
  s = (0, v.hZ)(s, "features", new Set([...s.features, M.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]))
}

function eZ(e) {
  let {
    guildId: t
  } = e;
  if (null == s || t !== s.id) returnfalse;
  s = (0, v.hZ)(s, "features", new Set([...s.features, M.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]))
}

function eQ(e) {
  var t, n, r, i, a, o, l, c, u, d;
  let {
    guildId: f,
    metadata: p
  } = e;
  null != s && f === s.id && (false === eo && (eo = true), el = es = {
    primaryCategoryId: null != (t = p.primaryCategoryId) ? t : j.ig,
    secondaryCategoryIds: null != (n = p.secondaryCategoryIds) ? n : [],
    keywords: null != (r = p.keywords) ? r : [],
    emojiDiscoverabilityEnabled: null != (i = p.emojiDiscoverabilityEnabled) ? i : B,
    partnerActionedTimestamp: null != (a = p.partnerActionedTimestamp) ? a : null,
    partnerApplicationTimestamp: null != (o = p.partnerApplicationTimestamp) ? o : null,
    isPublished: null != (l = p.isPublished) && l,
    reasonsToJoin: null != (c = p.reasonsToJoin) ? c : [],
    socialLinks: null != (u = p.socialLinks) ? u : [],
    about: null != (d = p.about) ? d : ""
  }, q = {})
}

function eX() {
  es = el = ea
}

function eJ(e) {
  let {
    slug: t
  } = e;
  f = t
}

function e$(e) {
  let {} = e;
  f = null
}

function e0(e) {
  let {
    guildId: t,
    categoryId: n
  } = e;
  null != s && t === s.id && (el = F(G({}, el), {
    secondaryCategoryIds: [...el.secondaryCategoryIds, n]
  }), es = F(G({}, es), {
    secondaryCategoryIds: [...es.secondaryCategoryIds, n]
  }))
}

function e1(e) {
  let t, {
    guildId: n,
    categoryId: r
  } = e;
  if (null == s || n !== s.id) return;
  let i = el.secondaryCategoryIds.indexOf(r);
  false !== i && ((t = [...el.secondaryCategoryIds]).splice(i, 1), el = F(G({}, el), {
    secondaryCategoryIds: t
  })), false !== (i = es.secondaryCategoryIds.indexOf(r)) && ((t = [...es.secondaryCategoryIds]).splice(i, 1), es = F(G({}, es), {
    secondaryCategoryIds: t
  }))
}

function e2(e) {
  let {
    guildId: t,
    errors: n
  } = e;
  null != s && t === s.id && (q = null != n ? n : {})
}

function e3(e) {
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
  null != s && t === s.id && (el = F(G({}, el), {
    primaryCategoryId: null != n ? n : el.primaryCategoryId,
    keywords: null != r ? r : el.keywords,
    emojiDiscoverabilityEnabled: null != i ? i : el.emojiDiscoverabilityEnabled,
    isPublished: null != a ? a : el.isPublished,
    reasonsToJoin: null != o ? o : el.reasonsToJoin,
    socialLinks: null != l ? l : el.socialLinks,
    about: null != c ? c : el.about
  }))
}

function e6(e) {
  let {
    guildId: t,
    errors: n
  } = e;
  null != s && t === s.id && (q = null != n ? n : {})
}

function e4(e) {
  let {
    profile: t
  } = e;
  t.id === (null == s ? true : s.id) && (l = c = t)
}

function e5(e) {
  let {
    guildId: t
  } = e;
  if (null == s || s.id !== t) returnfalse;
  Z = null
}

function e7(e) {
  let {
    profile: t
  } = e;
  if ((null == c ? true : c.id) == null || !e_(c.id)) returnfalse;
  t.id === (null == s ? true : s.id) && (l = c = t, Z = null)
}

function e8(e) {
  let {
    guildId: t,
    error: n
  } = e;
  if (null == s || s.id !== t) returnfalse;
  Z = n
}

function e9(e) {
  let {
    guildId: t
  } = e;
  if ((null == c ? true : c.id) == null || !e_(c.id)) returnfalse;
  t === (null == s ? true : s.id) && (l = c = A.A.getProfile(t), Z = null)
}
class te extends(p = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(N.A, A.A, w.default)
  }
  getMetadata() {
    return el
  }
  widgetHasChanges() {
    returnfalse !== Q && (J !== X || ee !== $)
  }
  hasChanges() {
    return !h().isEqual(s, o) || !h().isEqual(el, es) || !h().isEqual(c, l) || this.widgetHasChanges()
  }
  isOpen() {
    return K
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
    return !b.w.get(k.wX)
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
    return z === M.XlH.SUBMITTING
  }
  isGuildMetadataLoaded() {
    return eo
  }
  getErrors() {
    return q
  }
  getError(e) {
    var t;
    return null != (t = q[e]) ? t : null
  }
  getProfileError() {
    return Z
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
      integrations: ep,
      section: r,
      subsection: i,
      errors: q,
      guild: s,
      bans: ec,
      bansVersion: eu,
      invites: ef,
      selectedRoleId: u,
      fetchedEmbed: Q,
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
U(te, "displayName", "GuildSettingsStore");
let tt = new te(Chunk73153.h, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_INIT: em,
  GUILD_SETTINGS_OPEN: eh,
  GUILD_SETTINGS_CLOSE: eg,
  GUILD_SETTINGS_UPDATE: eT,
  GUILD_SETTINGS_PROFILE_UPDATE: eC,
  GUILD_SETTINGS_CANCEL_CHANGES: eO,
  GUILD_SETTINGS_SAVE_ROUTE_STACK: eE,
  GUILD_SETTINGS_SUBMIT: ev,
  GUILD_SETTINGS_SUBMIT_SUCCESS: eA,
  GUILD_SETTINGS_SUBMIT_FAILURE: eI,
  GUILD_SETTINGS_SET_SECTION: ey,
  GUILD_SETTINGS_SET_SEARCH_QUERY: eb,
  GUILD_SETTINGS_LOADED_BANS: eD,
  GUILD_SETTINGS_LOADED_BANS_BATCH: eL,
  GUILD_SETTINGS_LOADED_INVITES: ew,
  GUILD_SETTINGS_SET_WIDGET: eB,
  GUILD_SETTINGS_SET_VANITY_URL: eY,
  GUILD_SETTINGS_SET_MFA_SUCCESS: eW,
  GUILD_SETTINGS_ROLE_SELECT: eU,
  GUILD_SETTINGS_LOADED_INTEGRATIONS: eK,
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eq,
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: eZ,
  GUILD_BAN_ADD: ex,
  GUILD_BAN_REMOVE: eM,
  GUILD_ROLE_CREATE: eG,
  GUILD_ROLE_UPDATE: eV,
  GUILD_ROLE_DELETE: eF,
  GUILD_UPDATE: ej,
  GUILD_DELETE: ek,
  GUILD_PROFILE_FETCH_SUCCESS: e4,
  GUILD_PROFILE_UPDATE: e5,
  GUILD_PROFILE_UPDATE_SUCCESS: e7,
  GUILD_PROFILE_UPDATE_FAILURE: e8,
  GUILD_PROFILE_UPDATE_VISIBILITY: e5,
  GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: e9,
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e8,
  USER_CONNECTIONS_UPDATE: ez,
  GUILD_INTEGRATIONS_UPDATE: ez,
  INSTANT_INVITE_REVOKE_SUCCESS: eR,
  INSTANT_INVITE_CREATE_SUCCESS: eP,
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eQ,
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: eX,
  GUILD_DISCOVERY_CATEGORY_ADD: e0,
  GUILD_DISCOVERY_CATEGORY_DELETE: e1,
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: e2,
  GUILD_UPDATE_DISCOVERY_METADATA: e3,
  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e6,
  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eJ,
  GUILD_DISCOVERY_SLUG_FETCH_FAIL: e$,
  GUILD_SETTINGS_WIDGET_UPDATE: eH
})