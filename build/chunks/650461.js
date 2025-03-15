/** Chunk was on 17573 **/
r.d(t, {
  ZP: () => b
}), r(47120), r(266796), r(192379);
var n, l = r(392711),
  i = r.n(l),
  a = r(442837),
  o = r(570140),
  s = r(944163),
  h = r(709054),
  c = r(116175),
  v = r(308083);

function u(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      u(e, t, r[t])
    })
  }
  return e
}
let E = new Map,
  f = new Map,
  p = !1,
  M = Object.freeze({
    gameApplicationIds: new Set,
    playstyle: v.zv.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [v.U6, v.U6, v.U6],
    tag: "",
    verificationForm: d({}, s.t),
    badgeKind: c.ZD.SWORD,
    badgePrimaryColor: void 0,
    badgeSecondaryColor: void 0,
    banner: v.qC.NIGHT_SKY,
    brandPrimaryColor: void 0,
    brandSecondaryColor: void 0,
    currentStep: v.Wy.GAMES,
    furthestStep: v.Wy.GAMES,
    requiredGameId: void 0
  });

function _(e) {
  var t;
  return null !== (t = E.get(e)) && void 0 !== t ? t : function() {
    let e = i().cloneDeep(M);
    return e.badgeKind = (0, c.lP)(), e.banner = (0, v.i1)(), e
  }()
}

function O(e, t) {
  let r = _(e);
  E.set(e, d({}, r, t));
  let n = f.get(e);
  if (null != n) {
    let r = d({}, n);
    Object.keys(t).forEach(e => {
      delete r[e]
    }), f.set(e, r)
  }
}
class g extends(n = a.ZP.PersistedStore) {
  initialize(e) {
    null != e && h.default.keys(e.progressByGuild).forEach(t => {
      var r, n, l, i, a;
      E.set(t, {
        gameApplicationIds: new Set((r = e.progressByGuild[t]).gameApplicationIds),
        playstyle: r.playstyle,
        interests: new Set(r.interests),
        description: r.description,
        wildcardDescriptors: null !== (n = r.wildcardDescriptors) && void 0 !== n ? n : [v.U6, v.U6, v.U6],
        tag: r.tag,
        verificationForm: null !== (l = r.verificationForm) && void 0 !== l ? l : d({}, s.t),
        badgeKind: null !== (i = r.badgeKind) && void 0 !== i ? i : c.ZD.SWORD,
        badgePrimaryColor: r.badgePrimaryColor,
        badgeSecondaryColor: r.badgeSecondaryColor,
        banner: null !== (a = r.banner) && void 0 !== a ? a : v.qC.NIGHT_SKY,
        brandPrimaryColor: r.brandPrimaryColor,
        brandSecondaryColor: r.brandSecondaryColor,
        currentStep: r.currentStep,
        furthestStep: r.furthestStep,
        requiredGameId: r.requiredGameId
      })
    })
  }
  getState() {
    let e = {};
    return E.forEach((t, r) => {
      e[r] = {
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
      progress: E.get(e),
      errors: f.get(e),
      submitting: p
    }
  }
  getGuildIds() {
    return [...E.keys()]
  }
}
u(g, "displayName", "ClanSetupStore"), u(g, "persistKey", "ClanSetupStore");
let b = new g(o.Z, {
  CLAN_SETUP_RESET: function() {
    E.clear(), f.clear()
  },
  CLAN_SETUP_UPDATE: function(e) {
    let {
      guildId: t,
      updates: r
    } = e;
    O(t, r)
  },
  CLAN_SETUP_SUBMIT: function(e) {
    let {
      guildId: t
    } = e;
    p = !0, f.delete(t)
  },
  CLAN_SETUP_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    p = !1, E.delete(t), f.delete(t)
  },
  CLAN_SETUP_ERROR: function(e) {
    let {
      guildId: t,
      error: r
    } = e;
    p = !1, f.set(t, {
      gameApplicationIds: r.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: r.getFirstFieldErrorMessage("play_style"),
      description: r.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: r.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: r.getFirstFieldErrorMessage("search_terms"),
      tag: r.getFirstFieldErrorMessage("tag"),
      verificationForm: r.getFirstFieldErrorMessage(["verification_form", "form_fields"])
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let t;
    let {
      form: r,
      guildId: n,
      isLocalUpdate: l
    } = e;
    l && (t = null == r ? s.t : d({}, _(n).verificationForm, r), O(n, {
      verificationForm: t
    }))
  }
})