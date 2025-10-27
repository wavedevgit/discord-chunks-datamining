/** Chunk was on 44686 **/
/** chunk id: 658666, original params: e,i,t (module,exports,require) **/
let n;
require.d(exports, {
  Z: () => F
}), require("./388685.js"), require("./781311.js");
var l, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk944163 = require("./944163.js"),
  Chunk246364 = require("./246364.js"),
  Chunk314852 = require("./314852.js"),
  Chunk999382 = require("./999382.js"),
  Chunk733895 = require("./733895.js"),
  Chunk384632 = require("./384632.js"),
  Chunk386885 = require("./386885.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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

function v(e, i) {
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
let T = {
    verificationDirty: false,
    guildDirty: false,
    profileDirty: false,
    isAgeRestrictedDirty: false
  },
  p = T;

function A() {
  let e = Chunk999382.Z.getGuild();
  if (null == module) return;
  let i = Chunk733895.ZP.getDiscoveryChecklist(module.id);
  if (null != exports) return (0, Chunk386885.V)(module, exports)
}

function C() {
  var e;
  let i = Chunk999382.Z.getGuildId();
  return null == exports ? null : null == (e = Chunk944163.Z.get(exports)) ? true : module.formFields
}

function D() {
  let e = C();
  if (null == module) return;
  let i = module.find(e => (0, d.J)(e));
  return null == exports ? [{
    id: (0, Chunk392711.uniqueId)(),
    value: ""
  }] : exports.values.map(e => ({
    id: (0, r.uniqueId)(),
    value: e
  }))
}

function y() {
  let e = C();
  if (null == module) return;
  let i = module.find(e => (0, d.J)(e));
  if (0 === module.length || 1 === module.length && null != exports) {
    let e = {
      field_type: Chunk246364.QJ.TEXT_INPUT,
      label: Chunk388032.intl.string(Chunk388032.t["83ZsRS"]),
      required: true
    };
    return null != exports ? [exports, module] : [module]
  }
  return [...module]
}

function O(e) {
  return e.features.has(S.GuildFeatures.DISCOVERABLE) ? I.A.DISCOVERABLE : e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? I.A.APPLY : I.A.INVITE
}

function P(e, i) {
  let t = e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED),
    n = e.ownerConfiguredContentLevel === S.V_K.AGE_RESTRICTED;
  switch (i) {
    case I.A.INVITE:
      return {
        joinType: I.A.INVITE, requireTerms: t, termRules: D(), isAgeRestricted: n
      };
    case I.A.APPLY:
      return {
        joinType: I.A.APPLY, pendingVerificationFields: y(), isAgeRestricted: n
      };
    case I.A.DISCOVERABLE:
      return {
        joinType: I.A.DISCOVERABLE, settingsView: A(), requireTerms: t, termRules: D(), isAgeRestricted: n
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
  let o = null != (n = C()) ? n : [];
  if (o.length > 1) returntrue;
  let c = null != (l = null == (t = o.find(e => (0, d.J)(e))) ? true : t.values) ? l : [],
    E = null != (r = null == a ? true : a.map(e => e.value.trim()).filter(e => "" !== e)) ? r : [];
  return !s().isEqual(c, E)
}

function L() {
  let e = Chunk999382.Z.getGuild();
  if (null == module || null == n) {
    p = T;
    return
  }
  let i = O(module) !== n.joinType,
    t = module.ownerConfiguredContentLevel === Chunk981631.V_K.AGE_RESTRICTED !== n.isAgeRestricted;
  switch (n.joinType) {
    case Chunk384632.A.INVITE:
      p = {
        verificationDirty: R(module, n),
        guildDirty: exports,
        profileDirty: false,
        isAgeRestrictedDirty: require
      };
      break;
    case Chunk384632.A.APPLY:
      var l, r;
      let u, a = C(),
        {
          pendingVerificationFields: o
        } = n,
        d = !module.features.has(Chunk981631.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) || !module.features.has(Chunk981631.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      u = null == Chunk570140 ? null != Chunk944163 : null != Chunk944163 && !s().isEqual(Chunk570140, Chunk944163), p = {
        verificationDirty: Chunk246364 || Chunk442837,
        guildDirty: exports,
        profileDirty: (null == (l = Chunk314852.Z.getProfile(module.id)) ? true : l.visibility) !== (null == (r = Chunk999382.Z.getGuildProfile()) ? true : Chunk392711.visibility),
        isAgeRestrictedDirty: require
      };
      break;
    case Chunk384632.A.DISCOVERABLE:
      p = {
        verificationDirty: R(module, n),
        guildDirty: exports || Chunk999382.Z.hasChanges(),
        profileDirty: false,
        isAgeRestrictedDirty: require
      }
  }
}

function N() {
  if (null == Chunk999382.Z.getGuildId() || null == n) returnfalse;
  n = n.joinType === Chunk384632.A.APPLY ? v(h({}, n), {
    pendingVerificationFields: y()
  }) : v(h({}, n), {
    termRules: D()
  }), L()
}

function b(e) {
  let {
    section: i,
    subsection: t
  } = e;
  if (i !== S.pNK.ACCESS) return G();
  let l = E.Z.getGuild();
  if (null == l) returnfalse;
  let r = t === S.KsC.ACCESS_DISCOVERABLE && l.features.has(S.GuildFeatures.COMMUNITY) ? I.A.DISCOVERABLE : O(l);
  n = P(l, r), L()
}

function G() {
  n = true, p = T
}

function j() {
  if ((null == n ? true : n.joinType) !== Chunk384632.A.DISCOVERABLE) returnfalse;
  n = v(h({}, n), {
    settingsView: A()
  }), L()
}
class V extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk733895.ZP, Chunk314852.Z, Chunk999382.Z, Chunk944163.Z), this.syncWith([Chunk999382.Z, Chunk944163.Z], () => {
      L()
    })
  }
  get pendingState() {
    return n
  }
  get dirtyState() {
    return p
  }
  showNotice() {
    return p.guildDirty || p.verificationDirty || p.profileDirty || p.isAgeRestrictedDirty
  }
}
g(V, "displayName", "GuildSettingsJoinRulesStore");
let F = new V(Chunk570140.Z, {
  GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function(e) {
    let {
      guildId: i,
      requireTerms: t,
      termRules: l
    } = e;
    if (i !== E.Z.getGuildId() || (null == n ? true : n.joinType) !== I.A.INVITE && (null == n ? true : n.joinType) !== I.A.DISCOVERABLE) returnfalse;
    n = v(h({}, n), {
      requireTerms: t,
      termRules: l
    }), L()
  },
  GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function(e) {
    let {
      guildId: i,
      formFields: t
    } = e;
    if (i !== E.Z.getGuildId() || (null == n ? true : n.joinType) !== I.A.APPLY) returnfalse;
    n = v(h({}, n), {
      pendingVerificationFields: t
    }), L()
  },
  GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function(e) {
    let {
      guildId: i,
      joinType: t
    } = e, l = E.Z.getGuild();
    if (i !== (null == l ? true : l.id)) returnfalse;
    n = P(l, t), L()
  },
  GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL: function(e) {
    let {
      guildId: i,
      isAgeRestricted: t
    } = e, l = E.Z.getGuild();
    if (i !== (null == l ? true : l.id)) returnfalse;
    n = v(h({}, null != n ? n : P(l, O(l))), {
      isAgeRestricted: t
    }), L()
  },
  MEMBER_VERIFICATION_FORM_UPDATE: N,
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: N,
  GUILD_SETTINGS_INIT: b,
  GUILD_SETTINGS_SET_SECTION: b,
  GUILD_SETTINGS_CLOSE: G,
  DISCOVER_CHECKLIST_FETCH_SUCCESS: j,
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: j,
  GUILD_SETTINGS_SUBMIT_SUCCESS: j
})