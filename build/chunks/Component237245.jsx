/** Chunk was on 5533 **/
/** chunk id: 237245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => E
}), require("./388685.js"), require("./781311.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk881052 = require("./881052.js"),
  Chunk456268 = require("./456268.js"),
  Chunk863249 = require("./863249.js"),
  Chunk246364 = require("./246364.js"),
  Chunk983736 = require("./983736.js"),
  Chunk571728 = require("./571728.js"),
  Chunk699553 = require("./699553.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk654351 = require("./654351.js"),
  Chunk658666 = require("./658666.js"),
  Chunk384632 = require("./384632.js"),
  Chunk386885 = require("./386885.js"),
  Chunk981631 = require("./981631.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  var t;
  let {
    pendingState: l,
    dirtyState: f,
    originalGuild: x,
    settingsGuild: I,
    settingsMetadata: E,
    settingsProfile: S
  } = e, T = I.id, [P, w] = i.useState(false), [R, Z] = i.useState(null), D = I.features.has(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL), A = null != (t = (0, g.A)({
    guildId: I.id
  })) ? t : 0, k = i.useCallback(() => {
    Z(null), h.Z.init(T, _.pNK.ACCESS)
  }, [T]), L = i.useCallback(async e => {
    try {
      w(true), await e(), Z(null)
    } finally {
      w(false)
    }
  }, []), M = i.useCallback(async e => {
    try {
      await h.Z.saveGuild(T, e, {
        throwErr: true
      })
    } catch (e) {
      throw "object" == typeof e && "message" in e ? Z(e.message) : Z(y.intl.formatToPlainString(y.t.aTVNen, {
        statusPageURL: _.yXt.STATUS
      })), e
    }
  }, [T]), G = i.useCallback(async (e, t, n) => {
    try {
      await d.ZP.updateVerificationForm(T, e, t, n)
    } catch (e) {
      throw Z(new o.Hx(e).getAnyErrorMessage()), e
    }
  }, [T]), U = i.useCallback(async (e, t, n) => {
    let r = t.length > 0 ? [{
      field_type: u.QJ.TERMS,
      label: y.intl.string(y.t["9suSIC"]),
      values: t,
      required: true
    }] : [];
    await G(r, e, n)
  }, [G]), B = i.useCallback(e => {
    if (l.isAgeRestricted !== (I.ownerConfiguredContentLevel === _.V_K.AGE_RESTRICTED) && L(async () => {
        let e = l.isAgeRestricted ? _.V_K.AGE_RESTRICTED : _.V_K.DEFAULT;
        await M({
          ownerConfiguredContentLevel: e
        })
      }), l.joinType === j.A.INVITE) {
      let {
        requireTerms: t,
        termRules: n = []
      } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
      L(async () => {
        if (I.features.has(_.oNc.DISCOVERABLE)) {
          let e = new Set(I.features);
          e.delete(_.oNc.DISCOVERABLE), await M({
            features: e
          })
        }
        f.verificationDirty && await U(t, r, e)
      })
    } else if (l.joinType === j.A.APPLY) {
      let {
        pendingVerificationFields: t
      } = l;
      if (null == t) return;
      L(async () => {
        if (I.features.has(_.oNc.DISCOVERABLE)) {
          let e = new Set(I.features);
          e.delete(_.oNc.DISCOVERABLE), await M({
            features: e
          })
        }
        f.verificationDirty && await G([...t], true, e), f.profileDirty && null != S && await (0, p.pV)(I.id, {
          visibility: S.visibility
        })
      })
    } else if (l.joinType === j.A.DISCOVERABLE) {
      let {
        requireTerms: t,
        termRules: n = []
      } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
      L(async () => {
        if (f.verificationDirty && await U(t, r, e), f.guildDirty) {
          (0, b.UA)(I, x);
          let e = new Set(I.features);
          e.add(_.oNc.DISCOVERABLE), e.delete(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL), await M({
            features: e,
            discoverySplash: I.discoverySplash,
            description: I.description,
            preferredLocale: I.preferredLocale
          });
          try {
            await (0, c.Vv)(C({
              guildId: I.id
            }, E))
          } catch (e) {
            throw Z(new o.Hx(e).getAnyErrorMessage()), e
          }
        }
      })
    }
  }, [l, L, I, f, M, U, S, G, x, E]), F = i.useCallback(() => {
    var e;
    let t = e => {
        if (l.joinType === j.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED) return void(0, a.ZDy)(async () => {
          let {
            default: t
          } = await n.e("67376").then(n.bind(n, 207252));
          return n => (0, r.jsx)(t, N(C({}, n), {
            guildId: T,
            onConfirm: e
          }))
        });
        e()
      },
      i = e => {
        if (D && A > 0 && l.joinType !== j.A.APPLY) return void(0, a.ZDy)(async () => {
          let {
            default: t
          } = await n.e("55009").then(n.bind(n, 826390));
          return n => (0, r.jsx)(t, N(C({}, n), {
            guildId: T,
            submittedGuildJoinRequestsCount: A,
            onConfirm: e
          }))
        });
        e()
      };
    if (l.joinType === j.A.INVITE || l.joinType === j.A.DISCOVERABLE) {
      let {
        requireTerms: e,
        termRules: t = []
      } = l;
      if (t.map(e => e.value.trim()).filter(e => "" !== e).length < 1 && e) return void Z(y.intl.string(y.t.TCHkcX))
    }
    if (l.joinType === j.A.APPLY && !(null == (e = l.pendingVerificationFields) ? true : e.some(e => (0, m._C)(e)))) return void Z(y.intl.string(y.t.HGVrIy));
    i(e => t(() => B(e)))
  }, [D, B, l, T, A]), H = l.joinType === j.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED, z = null != I.description && E.primaryCategoryId !== O.o3 && E.keywords.length > 0;
  return (0, r.jsx)(s.Z, {
    message: H ? y.intl.string(y.t.V2G2Ym) : true,
    onSaveText: H ? y.intl.string(y.t["qjtt/v"]) : true,
    submitting: P,
    errorMessage: R,
    onReset: k,
    onSave: F,
    disabled: H && !z
  })
}

function E() {
  let {
    pendingState: e,
    dirtyState: t
  } = (0, Chunk442837.cj)([Chunk658666.Z], () => ({
    pendingState: Chunk658666.Z.pendingState,
    dirtyState: Chunk658666.Z.dirtyState
  })), {
    settingsGuild: n,
    settingsMetadata: i,
    originalGuild: a,
    guildProfile: o
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => {
    let {
      guild: e,
      guildMetadata: t,
      originalGuild: n,
      profile: r
    } = Chunk999382.Z.getProps();
    return {
      settingsGuild: module,
      settingsMetadata: exports,
      originalGuild: require,
      guildProfile: Chunk255367
    }
  });
  return null == module || null == require ? null : module.joinType === Chunk384632.A.DISCOVERABLE && module.settingsView === Chunk386885.U.INELIGIBLE ? (0, Chunk255367.jsx)(Chunk852860.Z, {
    message: Chunk388032.intl.string(Chunk388032.t.TEXwRk),
    onReset: () => Chunk434404.Z.init(require.id, Chunk981631.pNK.ACCESS)
  }) : (0, Chunk255367.jsx)(I, {
    pendingState: module,
    dirtyState: exports,
    originalGuild: Chunk481060,
    settingsGuild: require,
    settingsMetadata: Chunk73800,
    settingsProfile: Chunk881052
  })
}