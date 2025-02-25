/** Chunk was on 81038 **/
let n;
i.d(t, {
  Z: () => w
}), i(47120), i(566702);
var l, r = i(392711),
  s = i.n(r),
  a = i(442837),
  o = i(570140),
  u = i(944163),
  d = i(246364),
  c = i(314852),
  m = i(999382),
  f = i(118215),
  E = i(384632),
  g = i(386885),
  h = i(981631),
  v = i(388032);

function N(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      N(e, t, i[t])
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}
let _ = {
    verificationDirty: !1,
    guildDirty: !1,
    profileDirty: !1
  },
  j = _;

function y() {
  let e = m.Z.getGuild();
  if (null == e) return;
  let t = f.ZP.getDiscoveryChecklist(e.id);
  if (null != t) return (0, g.V)(e, t)
}

function S() {
  var e;
  let t = m.Z.getGuildId();
  return null == t ? null : null === (e = u.Z.get(t)) || void 0 === e ? void 0 : e.formFields
}

function x() {
  let e = S();
  if (null == e) return;
  let t = e.find(e => (0, d.J)(e));
  return null == t ? [{
    id: (0, r.uniqueId)(),
    value: ""
  }] : t.values.map(e => ({
    id: (0, r.uniqueId)(),
    value: e
  }))
}

function b() {
  let e = S();
  if (null == e) return;
  let t = e.find(e => (0, d.J)(e));
  if (0 === e.length || 1 === e.length && null != t) {
    let e = {
      field_type: d.QJ.TEXT_INPUT,
      label: v.NW.string(v.t["83ZsRU"]),
      required: !0
    };
    return null != t ? [t, e] : [e]
  }
  return [...e]
}

function O(e) {
  return e.hasFeature(h.oNc.DISCOVERABLE) ? E.A.DISCOVERABLE : e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? E.A.APPLY : E.A.INVITE
}

function T(e, t) {
  let i = e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(h.oNc.CLAN);
  switch (t) {
    case E.A.INVITE:
      return {
        joinType: E.A.INVITE, requireTerms: i, termRules: x()
      };
    case E.A.APPLY:
      return {
        joinType: E.A.APPLY, pendingVerificationFields: b()
      };
    case E.A.DISCOVERABLE:
      return {
        joinType: E.A.DISCOVERABLE, settingsView: y(), requireTerms: i, termRules: x()
      }
  }
}

function A(e, t) {
  var i, n, l, r;
  let {
    requireTerms: a,
    termRules: o
  } = t;
  if (e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== a) return !0;
  let u = null !== (n = S()) && void 0 !== n ? n : [];
  if (u.length > 1) return !0;
  let c = null !== (l = null === (i = u.find(e => (0, d.J)(e))) || void 0 === i ? void 0 : i.values) && void 0 !== l ? l : [],
    m = null !== (r = null == o ? void 0 : o.map(e => e.value.trim()).filter(e => "" !== e)) && void 0 !== r ? r : [];
  return !s().isEqual(c, m)
}

function C() {
  let e = m.Z.getGuild();
  if (null == e || null == n) {
    j = _;
    return
  }
  let t = O(e) !== n.joinType;
  switch (n.joinType) {
    case E.A.INVITE:
      j = {
        verificationDirty: A(e, n),
        guildDirty: t,
        profileDirty: !1
      };
      break;
    case E.A.APPLY:
      var i, l;
      let r;
      let a = S(),
        {
          pendingVerificationFields: o
        } = n,
        u = !e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      r = null == a ? null != o : null != o && !s().isEqual(a, o), j = {
        verificationDirty: u || r,
        guildDirty: t,
        profileDirty: (null === (i = c.Z.getProfile(e.id)) || void 0 === i ? void 0 : i.visibility) !== (null === (l = m.Z.getGuildProfile()) || void 0 === l ? void 0 : l.visibility)
      };
      break;
    case E.A.DISCOVERABLE:
      j = {
        verificationDirty: A(e, n),
        guildDirty: t || m.Z.hasChanges(),
        profileDirty: !1
      }
  }
}

function P() {
  if (null == m.Z.getGuildId() || null == n) return !1;
  n = n.joinType === E.A.APPLY ? p(I({}, n), {
    pendingVerificationFields: b()
  }) : p(I({}, n), {
    termRules: x()
  }), C()
}

function D(e) {
  let {
    section: t,
    subsection: i
  } = e;
  if (t !== h.pNK.ACCESS) return L();
  let l = m.Z.getGuild();
  if (null == l) return !1;
  let r = i === h.KsC.ACCESS_DISCOVERABLE && l.hasFeature(h.oNc.COMMUNITY) ? E.A.DISCOVERABLE : O(l);
  n = T(l, r), C()
}

function L() {
  n = void 0, j = _
}

function R() {
  if ((null == n ? void 0 : n.joinType) !== E.A.DISCOVERABLE) return !1;
  n = p(I({}, n), {
    settingsView: y()
  }), C()
}
class F extends(l = a.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, u.Z, f.ZP), this.syncWith([m.Z, u.Z], () => {
      C()
    })
  }
  get pendingState() {
    return n
  }
  get dirtyState() {
    return j
  }
  showNotice() {
    return j.guildDirty || j.verificationDirty || j.profileDirty
  }
}
N(F, "displayName", "GuildSettingsJoinRulesStore");
let w = new F(o.Z, {
  GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function(e) {
    let {
      guildId: t,
      requireTerms: i,
      termRules: l
    } = e;
    if (t !== m.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== E.A.INVITE && (null == n ? void 0 : n.joinType) !== E.A.DISCOVERABLE) return !1;
    n = p(I({}, n), {
      requireTerms: i,
      termRules: l
    }), C()
  },
  GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function(e) {
    let {
      guildId: t,
      formFields: i
    } = e;
    if (t !== m.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== E.A.APPLY) return !1;
    n = p(I({}, n), {
      pendingVerificationFields: i
    }), C()
  },
  GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function(e) {
    let {
      guildId: t,
      joinType: i
    } = e, l = m.Z.getGuild();
    if (t !== (null == l ? void 0 : l.id)) return !1;
    n = T(l, i), C()
  },
  MEMBER_VERIFICATION_FORM_UPDATE: P,
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: P,
  GUILD_SETTINGS_INIT: D,
  GUILD_SETTINGS_SET_SECTION: D,
  GUILD_SETTINGS_CLOSE: L,
  DISCOVER_CHECKLIST_FETCH_SUCCESS: R,
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: R,
  GUILD_SETTINGS_SUBMIT_SUCCESS: R
})