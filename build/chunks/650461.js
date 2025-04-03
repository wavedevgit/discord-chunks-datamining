/** Chunk was on 37865 **/
n.d(t, {
  ZP: () => R
}), n(47120), n(266796), n(192379);
var r, l = n(392711),
  a = n.n(l),
  s = n(442837),
  i = n(570140),
  o = n(944163),
  E = n(709054),
  c = n(116175),
  u = n(308083);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let A = new Map,
  T = new Map,
  N = !1,
  I = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: u.zv.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [u.U6, u.U6, u.U6],
    tag: "",
    verificationForm: _({}, o.t),
    badgeKind: c.ZD.SWORD,
    badgePrimaryColor: void 0,
    badgeSecondaryColor: void 0,
    banner: u.qC.NIGHT_SKY,
    brandPrimaryColor: void 0,
    brandSecondaryColor: void 0,
    currentStep: u.Wy.GAMES,
    furthestStep: u.Wy.GAMES,
    requiredGameId: void 0
  });

function g(e) {
  var t;
  return null !== (t = A.get(e)) && void 0 !== t ? t : function() {
    let e = a().cloneDeep(I);
    return e.badgeKind = (0, c.lP)(), e.banner = (0, u.i1)(), e
  }()
}

function O(e, t) {
  let n = g(e);
  A.set(e, _({}, n, t));
  let r = T.get(e);
  if (null != r) {
    let n = _({}, r);
    Object.keys(t).forEach(e => {
      delete n[e]
    }), T.set(e, n)
  }
}
class f extends(r = s.ZP.PersistedStore) {
  initialize(e) {
    null != e && E.default.keys(e.progressByGuild).forEach(t => {
      var n, r, l, a, s;
      A.set(t, {
        gameApplicationIds: new Set((n = e.progressByGuild[t]).gameApplicationIds),
        playstyle: n.playstyle,
        interests: new Set(n.interests),
        description: n.description,
        wildcardDescriptors: null !== (r = n.wildcardDescriptors) && void 0 !== r ? r : [u.U6, u.U6, u.U6],
        tag: n.tag,
        verificationForm: null !== (l = n.verificationForm) && void 0 !== l ? l : _({}, o.t),
        badgeKind: null !== (a = n.badgeKind) && void 0 !== a ? a : c.ZD.SWORD,
        badgePrimaryColor: n.badgePrimaryColor,
        badgeSecondaryColor: n.badgeSecondaryColor,
        banner: null !== (s = n.banner) && void 0 !== s ? s : u.qC.NIGHT_SKY,
        brandPrimaryColor: n.brandPrimaryColor,
        brandSecondaryColor: n.brandSecondaryColor,
        currentStep: n.currentStep,
        furthestStep: n.furthestStep,
        requiredGameId: n.requiredGameId
      })
    })
  }
  getState() {
    let e = {};
    return A.forEach((t, n) => {
      e[n] = {
        gameApplicationIds: Array.from(t.gameApplicationIds),
        playstyle: t.playstyle,
        interests: Array.from(t.interests),
        description: t.description,
        wildcardDescriptors: t.wildcardDescriptors,
        tag: t.tag,
        verificationForm: t.verificationForm,
        badgeKind: t.badgeKind,
        badgePrimaryColor: t.badgePrimaryColor,
        badgeSecondaryColor: t.badgeSecondaryColor,
        banner: t.banner,
        brandPrimaryColor: t.brandPrimaryColor,
        brandSecondaryColor: t.brandSecondaryColor,
        currentStep: t.currentStep,
        furthestStep: t.furthestStep,
        requiredGameId: t.requiredGameId
      }
    }), {
      progressByGuild: e
    }
  }
  getStateForGuild(e) {
    return {
      progress: A.get(e),
      errors: T.get(e),
      submitting: N
    }
  }
  getGuildIds() {
    return [...A.keys()]
  }
}
d(f, "displayName", "ClanSetupStore"), d(f, "persistKey", "ClanSetupStore");
let R = new f(i.Z, {
  CLAN_SETUP_RESET: function() {
    A.clear(), T.clear()
  },
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    O(t, n)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    N = !0, T.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    N = !1, A.delete(t), T.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    N = !1, T.set(t, {
      gameApplicationIds: n.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: n.getFirstFieldErrorMessage("play_style"),
      description: n.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: n.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: n.getFirstFieldErrorMessage("search_terms"),
      tag: n.getFirstFieldErrorMessage("tag"),
      verificationForm: n.getFirstFieldErrorMessage(["verification_form", "form_fields"])
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: n,
      guildId: r,
      isLocalUpdate: l
    } = e;
    l && (t = null == n ? o.t : _({}, g(r).verificationForm, n), O(r, {
      verificationForm: t
    }))
  }
})