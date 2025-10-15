/** Chunk was on 44686 **/
/** chunk id: 658666, original params: e,i,t (module,exports,require) **/
let n;
require.d(exports, {
  Z: () => M
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

function m(e, i, t) {
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
      m(e, i, t[i])
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

function N() {
  var e;
  let i = Chunk999382.Z.getGuildId();
  return null == exports ? null : null == (e = Chunk944163.Z.get(exports)) ? true : module.formFields
}

function C() {
  let e = N();
  if (null == module) return;
  let i = module.find(e => (0, c.J)(e));
  return null == exports ? [{
    id: (0, Chunk392711.uniqueId)(),
    value: ""
  }] : exports.values.map(e => ({
    id: (0, r.uniqueId)(),
    value: e
  }))
}

function D() {
  let e = N();
  if (null == module) return;
  let i = module.find(e => (0, c.J)(e));
  if (0 === module.length || 1 === module.length && null != exports) {
    let e = {
      field_type: Chunk246364.QJ.TEXT_INPUT,
      label: Chunk388032.intl.string(Chunk388032.t["83ZsRU"]),
      required: true
    };
    return null != exports ? [exports, module] : [module]
  }
  return [...module]
}

function y(e) {
  return e.features.has(S.oNc.DISCOVERABLE) ? I.A.DISCOVERABLE : e.features.has(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.features.has(S.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? I.A.APPLY : I.A.INVITE
}

function O(e, i) {
  let t = e.features.has(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
    n = e.ownerConfiguredContentLevel === S.V_K.AGE_RESTRICTED;
  switch (i) {
    case I.A.INVITE:
      return {
        joinType: I.A.INVITE, requireTerms: t, termRules: C(), isAgeRestricted: n
      };
    case I.A.APPLY:
      return {
        joinType: I.A.APPLY, pendingVerificationFields: D(), isAgeRestricted: n
      };
    case I.A.DISCOVERABLE:
      return {
        joinType: I.A.DISCOVERABLE, settingsView: A(), requireTerms: t, termRules: C(), isAgeRestricted: n
      }
  }
}

function P(e, i) {
  var t, n, l, r;
  let {
    requireTerms: a,
    termRules: u
  } = i;
  if (e.features.has(S.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.features.has(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== a) returntrue;
  let o = null != (n = N()) ? n : [];
  if (o.length > 1) returntrue;
  let d = null != (l = null == (t = o.find(e => (0, c.J)(e))) ? true : t.values) ? l : [],
    E = null != (r = null == u ? true : u.map(e => e.value.trim()).filter(e => "" !== e)) ? r : [];
  return !s().isEqual(d, E)
}

function L() {
  let e = Chunk999382.Z.getGuild();
  if (null == module || null == n) {
    p = T;
    return
  }
  let i = y(module) !== n.joinType,
    t = module.ownerConfiguredContentLevel === Chunk981631.V_K.AGE_RESTRICTED !== n.isAgeRestricted;
  switch (n.joinType) {
    case Chunk384632.A.INVITE:
      p = {
        verificationDirty: P(module, n),
        guildDirty: exports,
        profileDirty: false,
        isAgeRestrictedDirty: require
      };
      break;
    case Chunk384632.A.APPLY:
      var l, r;
      let a, u = N(),
        {
          pendingVerificationFields: o
        } = n,
        c = !module.features.has(Chunk981631.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !module.features.has(Chunk981631.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      a = null == Chunk570140 ? null != Chunk944163 : null != Chunk944163 && !s().isEqual(Chunk570140, Chunk944163), p = {
        verificationDirty: Chunk246364 || Chunk442837,
        guildDirty: exports,
        profileDirty: (null == (l = Chunk314852.Z.getProfile(module.id)) ? true : l.visibility) !== (null == (r = Chunk999382.Z.getGuildProfile()) ? true : Chunk392711.visibility),
        isAgeRestrictedDirty: require
      };
      break;
    case Chunk384632.A.DISCOVERABLE:
      p = {
        verificationDirty: P(module, n),
        guildDirty: exports || Chunk999382.Z.hasChanges(),
        profileDirty: false,
        isAgeRestrictedDirty: require
      }
  }
}

function R() {
  if (null == Chunk999382.Z.getGuildId() || null == n) returnfalse;
  n = n.joinType === Chunk384632.A.APPLY ? v(h({}, n), {
    pendingVerificationFields: D()
  }) : v(h({}, n), {
    termRules: C()
  }), L()
}

function b(e) {
  let {
    section: i,
    subsection: t
  } = e;
  if (i !== S.pNK.ACCESS) return j();
  let l = E.Z.getGuild();
  if (null == l) returnfalse;
  let r = t === S.KsC.ACCESS_DISCOVERABLE && l.features.has(S.oNc.COMMUNITY) ? I.A.DISCOVERABLE : y(l);
  n = O(l, r), L()
}

function j() {
  n = true, p = T
}

function V() {
  if ((null == n ? true : n.joinType) !== Chunk384632.A.DISCOVERABLE) returnfalse;
  n = v(h({}, n), {
    settingsView: A()
  }), L()
}
class G extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk944163.Z, Chunk733895.ZP), this.syncWith([Chunk999382.Z, Chunk944163.Z], () => {
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
m(G, "displayName", "GuildSettingsJoinRulesStore");
let M = new G(Chunk570140.Z, {
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
    n = O(l, t), L()
  },
  GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL: function(e) {
    let {
      guildId: i,
      isAgeRestricted: t
    } = e, l = E.Z.getGuild();
    if (i !== (null == l ? true : l.id)) returnfalse;
    n = v(h({}, null != n ? n : O(l, y(l))), {
      isAgeRestricted: t
    }), L()
  },
  MEMBER_VERIFICATION_FORM_UPDATE: R,
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: R,
  GUILD_SETTINGS_INIT: b,
  GUILD_SETTINGS_SET_SECTION: b,
  GUILD_SETTINGS_CLOSE: j,
  DISCOVER_CHECKLIST_FETCH_SUCCESS: V,
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: V,
  GUILD_SETTINGS_SUBMIT_SUCCESS: V
})