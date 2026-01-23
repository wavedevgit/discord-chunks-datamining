/** Chunk was on web.js **/
/** chunk id: 555337, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, s, o, l, c, u, d, f;
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
  X = null,
  Z = false,
  Q = false,
  $ = false,
  J = null,
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
  es = false,
  eo = ea,
  el = ea,
  ec = null,
  eu = 0,
  ed = null,
  ef = null,
  ep = null;

function e_(e) {
  if (null == o || null == s || s.id !== e) returnfalse;
  let t = N.A.getGuild(e);
  return null != t && (s === o ? o = s = t : s = t, true)
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
  s = o = p, l = c = _, $ = Q, ee = J, z = j.XlH.OPEN, q = {}, X = null, u = P.default.castGuildIdAsEveryoneGuildRoleId(n), er = o.mfaLevel, el = eo, f = null, ei = d, ey({
    section: null != (t = null != i ? i : r) ? t : (0, L.x)(),
    subsection: null != a ? a : null
  })
}

function eg() {
  K = false, z = j.XlH.CLOSED, s = o = null, Z = false, $ = false, ee = null, et = null, en = 0, ec = null, ef = null, ep = null, r = null, i = null, a = null, er = j.EkJ.NONE, d = true
}

function eE(e) {
  let {
    state: t
  } = e;
  return d = t, false
}

function ey(e) {
  if (null == o) returnfalse;
  let t = r;
  if (r = e.section, i = e.subsection, r === j.BEX.INSTANT_INVITES || r === j.BEX.INVITES) y.Bo.get({
    url: j.Rsh.GUILD_INSTANT_INVITES(o.id),
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    O.h.dispatch({
      type: "GUILD_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  });
  else if (r === j.BEX.INTEGRATIONS || r === j.BEX.ROLES) {
    if (u = null, t !== e.section) return ez(e)
  } else r === j.BEX.MEMBERS ? u = (0, S.af)(o) : r === j.BEX.VANITY_URL ? (0, x.Je)(o.id) : r === j.BEX.SAFETY && O.h.dispatch({
    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
    subsection: null == i ? j.nd0.SAFETY_OVERVIEW : i
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
  null != n && (s = o = n)
}

function ev() {
  z = j.XlH.SUBMITTING, q = {}
}

function eA() {
  z = j.XlH.OPEN
}

function eI(e) {
  var t;
  z = j.XlH.OPEN, r = null != r ? r : (0, L.x)(), i = null, q = null != (t = e.errors) ? t : {}
}

function eS() {
  let e = o;
  if (null == e) returnfalse;
  H.some(t => e[t] !== s[t]) || (o = s)
}

function eT(e) {
  if (null == o) returnfalse;
  H.forEach(t => {
    if (null != o && e.hasOwnProperty(t)) {
      var n;
      o = (0, v.hZ)(o, t, null != (n = e[t]) ? n : null)
    }
  }), eS()
}

function eC(e) {
  let {
    guildId: t
  } = e;
  if (null == c || null == o || o.id !== t) returnfalse;
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
    guild: null != e.guild ? (0, w.DY)(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: g()(null != (t = e.created_at) ? t : true),
    flags: e.flags,
    roles: e.roles
  })
}

function eR(e) {
  ef = e.invites.reduce((e, t) => (e[t.code] = eN(t), e), {})
}

function ew(e) {
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
  if (null == ec || null == o || o.id !== n) returnfalse;
  ec.set(t.id, {
    user: t,
    reason: null
  }), eu++
}

function ej(e) {
  let {
    user: t,
    guildId: n
  } = e;
  if (null == ec || null == o || o.id !== n) returnfalse;
  ec.delete(t.id), eu++
}

function eM(e) {
  if (null == o || o.id !== e.guild.id) returnfalse;
  {
    let e = N.A.getGuild(o.id);
    if (null == e) returnfalse;
    if (l = A.A.getProfile(o.id), r !== j.BEX.PROFILE && r !== j.BEX.TAG && (c = l), r === j.BEX.PROFILE) {
      s = e, o = e;
      return
    }
    let t = s = e,
      n = G({}, o);
    H.forEach(r => {
      if (!W.has(r) && ("rulesChannelId" !== r && "publicUpdatesChannelId" !== r || n[r] !== k.SP) && "features" !== r) {
        if ("ownerConfiguredContentLevel" === r) {
          t = (0, v.hZ)(t, r, e[r]);
          return
        }
        t = (0, v.hZ)(t, r, n[r])
      }
    }), o = t
  }
}

function ek(e) {
  if (null == o || o.id !== e.guild.id) returnfalse;
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
  Z = true, Q = $ = e.enabled, J = ee = e.channelId
}

function eH(e) {
  let {
    guildId: t,
    enabled: n,
    channelId: r
  } = e;
  if (null == o || o.id !== t) returnfalse;
  $ = n, ee = r
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
  if (null == o || z !== j.XlH.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id) returnfalse;
  (0, D.c)(o.id)
}

function eq(e) {
  let {
    guildId: t
  } = e;
  if (null == o || t !== o.id) returnfalse;
  o = (0, v.hZ)(o, "features", new Set([...o.features, j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]))
}

function eX(e) {
  let {
    guildId: t
  } = e;
  if (null == o || t !== o.id) returnfalse;
  o = (0, v.hZ)(o, "features", new Set([...o.features, j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]))
}

function eZ(e) {
  var t, n, r, i, a, s, l, c, u, d;
  let {
    guildId: f,
    metadata: p
  } = e;
  null != o && f === o.id && (false === es && (es = true), el = eo = {
    primaryCategoryId: null != (t = p.primaryCategoryId) ? t : M.ig,
    secondaryCategoryIds: null != (n = p.secondaryCategoryIds) ? n : [],
    keywords: null != (r = p.keywords) ? r : [],
    emojiDiscoverabilityEnabled: null != (i = p.emojiDiscoverabilityEnabled) ? i : B,
    partnerActionedTimestamp: null != (a = p.partnerActionedTimestamp) ? a : null,
    partnerApplicationTimestamp: null != (s = p.partnerApplicationTimestamp) ? s : null,
    isPublished: null != (l = p.isPublished) && l,
    reasonsToJoin: null != (c = p.reasonsToJoin) ? c : [],
    socialLinks: null != (u = p.socialLinks) ? u : [],
    about: null != (d = p.about) ? d : ""
  }, q = {})
}

function eQ() {
  eo = el = ea
}

function e$(e) {
  let {
    slug: t
  } = e;
  f = t
}

function eJ(e) {
  let {} = e;
  f = null
}

function e0(e) {
  let {
    guildId: t,
    categoryId: n
  } = e;
  null != o && t === o.id && (el = F(G({}, el), {
    secondaryCategoryIds: [...el.secondaryCategoryIds, n]
  }), eo = F(G({}, eo), {
    secondaryCategoryIds: [...eo.secondaryCategoryIds, n]
  }))
}

function e1(e) {
  let t, {
    guildId: n,
    categoryId: r
  } = e;
  if (null == o || n !== o.id) return;
  let i = el.secondaryCategoryIds.indexOf(r);
  false !== i && ((t = [...el.secondaryCategoryIds]).splice(i, 1), el = F(G({}, el), {
    secondaryCategoryIds: t
  })), false !== (i = eo.secondaryCategoryIds.indexOf(r)) && ((t = [...eo.secondaryCategoryIds]).splice(i, 1), eo = F(G({}, eo), {
    secondaryCategoryIds: t
  }))
}

function e2(e) {
  let {
    guildId: t,
    errors: n
  } = e;
  null != o && t === o.id && (q = null != n ? n : {})
}

function e3(e) {
  let {
    guildId: t,
    primaryCategoryId: n,
    keywords: r,
    emojiDiscoverabilityEnabled: i,
    isPublished: a,
    reasonsToJoin: s,
    socialLinks: l,
    about: c
  } = e;
  null != o && t === o.id && (el = F(G({}, el), {
    primaryCategoryId: null != n ? n : el.primaryCategoryId,
    keywords: null != r ? r : el.keywords,
    emojiDiscoverabilityEnabled: null != i ? i : el.emojiDiscoverabilityEnabled,
    isPublished: null != a ? a : el.isPublished,
    reasonsToJoin: null != s ? s : el.reasonsToJoin,
    socialLinks: null != l ? l : el.socialLinks,
    about: null != c ? c : el.about
  }))
}

function e6(e) {
  let {
    guildId: t,
    errors: n
  } = e;
  null != o && t === o.id && (q = null != n ? n : {})
}

function e4(e) {
  let {
    profile: t
  } = e;
  t.id === (null == o ? true : o.id) && (l = c = t)
}

function e5(e) {
  let {
    guildId: t
  } = e;
  if (null == o || o.id !== t) returnfalse;
  X = null
}

function e7(e) {
  let {
    profile: t
  } = e;
  if ((null == c ? true : c.id) == null || !e_(c.id)) returnfalse;
  t.id === (null == o ? true : o.id) && (l = c = t, X = null)
}

function e8(e) {
  let {
    guildId: t,
    error: n
  } = e;
  if (null == o || o.id !== t) returnfalse;
  X = n
}

function e9(e) {
  let {
    guildId: t
  } = e;
  if ((null == c ? true : c.id) == null || !e_(c.id)) returnfalse;
  t === (null == o ? true : o.id) && (l = c = A.A.getProfile(t), X = null)
}
class te extends(p = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(N.A, A.A, R.default)
  }
  getMetadata() {
    return el
  }
  widgetHasChanges() {
    returnfalse !== Z && ($ !== Q || ee !== J)
  }
  hasChanges() {
    return !h().isEqual(o, s) || !h().isEqual(el, eo) || !h().isEqual(c, l) || this.widgetHasChanges()
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
    return null != o ? o.id : null
  }
  showPublicSuccessModal() {
    return !b.w.get(k.wX)
  }
  getGuild() {
    return o
  }
  getGuildProfile() {
    return c
  }
  getWidget() {
    return {
      enabled: $,
      channelId: ee
    }
  }
  isSubmitting() {
    return z === j.XlH.SUBMITTING
  }
  isGuildMetadataLoaded() {
    return es
  }
  getErrors() {
    return q
  }
  getError(e) {
    var t;
    return null != (t = q[e]) ? t : null
  }
  getProfileError() {
    return X
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
      guild: o,
      bans: ec,
      bansVersion: eu,
      invites: ef,
      selectedRoleId: u,
      fetchedEmbed: Z,
      embedEnabled: $,
      embedChannelId: ee,
      mfaLevel: er,
      searchQuery: a,
      vanityURLCode: et,
      vanityURLUses: en,
      originalGuild: s,
      hasChanges: this.hasChanges(),
      guildMetadata: el,
      analyticsLocation: ei,
      isGuildMetadataLoaded: es,
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
  GUILD_SETTINGS_LOADED_BANS_BATCH: ex,
  GUILD_SETTINGS_LOADED_INVITES: eR,
  GUILD_SETTINGS_SET_WIDGET: eB,
  GUILD_SETTINGS_SET_VANITY_URL: eY,
  GUILD_SETTINGS_SET_MFA_SUCCESS: eW,
  GUILD_SETTINGS_ROLE_SELECT: eU,
  GUILD_SETTINGS_LOADED_INTEGRATIONS: eK,
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eq,
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: eX,
  GUILD_BAN_ADD: eL,
  GUILD_BAN_REMOVE: ej,
  GUILD_ROLE_CREATE: eG,
  GUILD_ROLE_UPDATE: eV,
  GUILD_ROLE_DELETE: eF,
  GUILD_UPDATE: eM,
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
  INSTANT_INVITE_REVOKE_SUCCESS: ew,
  INSTANT_INVITE_CREATE_SUCCESS: eP,
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eZ,
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: eQ,
  GUILD_DISCOVERY_CATEGORY_ADD: e0,
  GUILD_DISCOVERY_CATEGORY_DELETE: e1,
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: e2,
  GUILD_UPDATE_DISCOVERY_METADATA: e3,
  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e6,
  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: e$,
  GUILD_DISCOVERY_SLUG_FETCH_FAIL: eJ,
  GUILD_SETTINGS_WIDGET_UPDATE: eH
})