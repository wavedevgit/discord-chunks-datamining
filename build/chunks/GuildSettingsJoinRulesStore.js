/** Chunk was on 8458 **/
/** chunk id: 306846, original params: e,i,t (module,exports,require) **/
let n;
require.d(exports, {
  A: () => V
}), require("./896048.js"), require("./733351.js");
var l, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk60175 = require("./60175.js"),
  Chunk513461 = require("./513461.js"),
  Chunk837011 = require("./837011.js"),
  Chunk555337 = require("./555337.js"),
  Chunk834720 = require("./834720.js"),
  Chunk894222 = require("./894222.js"),
  Chunk716610 = require("./716610.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(e, i, t) {
  return i in e ? Object.defineProperty(e, i, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[i] = t, e
}

function h(e) {
  for (var i = 1; i < arguments.length; i++) {
    var t = null != arguments[i] ? arguments[i] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(i) {
      g(e, i, t[i])
    })
  }
  return e
}

function T(e, i) {
  return i = null != i ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(e, i) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(i)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
  }), e
}
let m = {
    verificationDirty: false,
    guildDirty: false,
    profileDirty: false,
    isAgeRestrictedDirty: false
  },
  v = m;

function y() {
  let e = E.A.getGuild();
  if (null == e) return;
  let i = f.Ay.getDiscoveryChecklist(e.id);
  if (null != i) return (0, _.l)(e, i)
}

function p() {
  var e;
  let i = E.A.getGuildId();
  return null == i ? null : null == (e = o.A.get(i)) ? true : e.formFields
}

function C() {
  let e = p();
  if (null == e) return;
  let i = e.find(e => (0, d.i7)(e));
  return null == i ? [{
    id: (0, r.uniqueId)(),
    value: ""
  }] : i.values.map(e => ({
    id: (0, r.uniqueId)(),
    value: e
  }))
}

function D() {
  let e = p();
  if (null == e) return;
  let i = e.find(e => (0, d.i7)(e));
  if (0 === e.length || 1 === e.length && null != i) {
    let e = {
      field_type: d.rX.TEXT_INPUT,
      label: A.intl.string(A.t["83ZsRS"]),
      required: true
    };
    return null != i ? [i, e] : [e]
  }
  return [...e]
}

function N(e) {
  return e.features.has(S.GuildFeatures.DISCOVERABLE) ? I.J.DISCOVERABLE : e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? I.J.APPLY : I.J.INVITE
}

function O(e, i) {
  let t = e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED),
    n = e.ownerConfiguredContentLevel === S.ftr.AGE_RESTRICTED;
  switch (i) {
    case I.J.INVITE:
      return {
        joinType: I.J.INVITE, requireTerms: t, termRules: C(), isAgeRestricted: n
      };
    case I.J.APPLY:
      return {
        joinType: I.J.APPLY, pendingVerificationFields: D(), isAgeRestricted: n
      };
    case I.J.DISCOVERABLE:
      return {
        joinType: I.J.DISCOVERABLE, settingsView: y(), requireTerms: t, termRules: C(), isAgeRestricted: n
      }
  }
}

function R(e, i) {
  var t, n, l, r;
  let {
    requireTerms: u,
    termRules: a
  } = i;
  if (e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) !== u) returntrue;
  let o = null != (t = p()) ? t : [];
  if (o.length > 1) returntrue;
  let c = null != (n = null == (r = o.find(e => (0, d.i7)(e))) ? true : r.values) ? n : [],
    E = null != (l = null == a ? true : a.map(e => e.value.trim()).filter(e => "" !== e)) ? l : [];
  return !s().isEqual(c, E)
}

function L() {
  let e = E.A.getGuild();
  if (null == e || null == n) {
    v = m;
    return
  }
  let i = N(e) !== n.joinType,
    t = e.ownerConfiguredContentLevel === S.ftr.AGE_RESTRICTED !== n.isAgeRestricted;
  switch (n.joinType) {
    case I.J.INVITE:
      v = {
        verificationDirty: R(e, n),
        guildDirty: i,
        profileDirty: false,
        isAgeRestrictedDirty: t
      };
      break;
    case I.J.APPLY:
      var l, r;
      let u, a = p(),
        {
          pendingVerificationFields: o
        } = n,
        d = !e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) || !e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      u = null == a ? null != o : null != o && !s().isEqual(a, o), v = {
        verificationDirty: d || u,
        guildDirty: i,
        profileDirty: (null == (l = c.A.getProfile(e.id)) ? true : l.visibility) !== (null == (r = E.A.getGuildProfile()) ? true : r.visibility),
        isAgeRestrictedDirty: t
      };
      break;
    case I.J.DISCOVERABLE:
      v = {
        verificationDirty: R(e, n),
        guildDirty: i || E.A.hasChanges(),
        profileDirty: false,
        isAgeRestrictedDirty: t
      }
  }
}

function b() {
  if (null == E.A.getGuildId() || null == n) returnfalse;
  n = n.joinType === I.J.APPLY ? T(h({}, n), {
    pendingVerificationFields: D()
  }) : T(h({}, n), {
    termRules: C()
  }), L()
}

function P(e) {
  let {
    section: i,
    subsection: t
  } = e;
  if (i !== S.BEX.ACCESS) return j();
  let l = E.A.getGuild();
  if (null == l) returnfalse;
  let r = t === S.nd0.ACCESS_DISCOVERABLE && l.features.has(S.GuildFeatures.COMMUNITY) ? I.J.DISCOVERABLE : N(l);
  n = O(l, r), L()
}

function j() {
  n = true, v = m
}

function G() {
  if ((null == n ? true : n.joinType) !== I.J.DISCOVERABLE) returnfalse;
  n = T(h({}, n), {
    settingsView: y()
  }), L()
}
class F extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.Ay, c.A, E.A, o.A), this.syncWith([E.A, o.A], () => {
      L()
    })
  }
  get pendingState() {
    return n
  }
  get dirtyState() {
    return v
  }
  showNotice() {
    return v.guildDirty || v.verificationDirty || v.profileDirty || v.isAgeRestrictedDirty
  }
}
g(F, "displayName", "GuildSettingsJoinRulesStore");
let V = new F(Chunk73153.h, {
  GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function(e) {
    let {
      guildId: i,
      requireTerms: t,
      termRules: l
    } = e;
    if (i !== E.A.getGuildId() || (null == n ? true : n.joinType) !== I.J.INVITE && (null == n ? true : n.joinType) !== I.J.DISCOVERABLE) returnfalse;
    n = T(h({}, n), {
      requireTerms: t,
      termRules: l
    }), L()
  },
  GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function(e) {
    let {
      guildId: i,
      formFields: t
    } = e;
    if (i !== E.A.getGuildId() || (null == n ? true : n.joinType) !== I.J.APPLY) returnfalse;
    n = T(h({}, n), {
      pendingVerificationFields: t
    }), L()
  },
  GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function(e) {
    let {
      guildId: i,
      joinType: t
    } = e, l = E.A.getGuild();
    if (i !== (null == l ? true : l.id)) returnfalse;
    n = O(l, t), L()
  },
  GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL: function(e) {
    let {
      guildId: i,
      isAgeRestricted: t
    } = e, l = E.A.getGuild();
    if (i !== (null == l ? true : l.id)) returnfalse;
    n = T(h({}, null != n ? n : O(l, N(l))), {
      isAgeRestricted: t
    }), L()
  },
  MEMBER_VERIFICATION_FORM_UPDATE: b,
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: b,
  GUILD_SETTINGS_INIT: P,
  GUILD_SETTINGS_SET_SECTION: P,
  GUILD_SETTINGS_CLOSE: j,
  DISCOVER_CHECKLIST_FETCH_SUCCESS: G,
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: G,
  GUILD_SETTINGS_SUBMIT_SUCCESS: G
})