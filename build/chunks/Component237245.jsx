/** Chunk was on 64982 **/
/** chunk id: 237245, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  w: () => I
}), require("./388685.js"), require("./781311.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk490597 = require("./490597.js"),
  Chunk658666 = require("./658666.js"),
  Chunk384632 = require("./384632.js"),
  Chunk386885 = require("./386885.js"),
  Chunk981631 = require("./981631.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function y(e) {
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

function E(e) {
  var t;
  let {
    pendingState: l,
    dirtyState: h,
    originalGuild: b,
    settingsGuild: E,
    settingsMetadata: I,
    settingsProfile: S
  } = e, T = E.id, [P, w] = i.useState(false), [R, Z] = i.useState(null), D = E.features.has(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL), A = null != (t = (0, m.A)({
    guildId: E.id
  })) ? t : 0, L = i.useCallback(() => {
    Z(null), f.Z.init(T, v.pNK.ACCESS)
  }, [T]), k = i.useCallback(async e => {
    try {
      w(true), await e(), Z(null)
    } finally {
      w(false)
    }
  }, []), G = i.useCallback(async e => {
    try {
      await f.Z.saveGuild(T, e, {
        throwErr: true
      })
    } catch (e) {
      throw "object" == typeof e && "message" in e ? Z(e.message) : Z(O.intl.formatToPlainString(O.t.aTVNen, {
        statusPageURL: v.yXt.STATUS
      })), e
    }
  }, [T]), M = i.useCallback(async (e, t, n) => {
    try {
      await d.ZP.updateVerificationForm(T, e, t, n)
    } catch (e) {
      throw Z(new o.Hx(e).getAnyErrorMessage()), e
    }
  }, [T]), U = i.useCallback(async (e, t, n) => {
    let r = t.length > 0 ? [{
      field_type: u.QJ.TERMS,
      label: O.intl.string(O.t["9suSIC"]),
      values: t,
      required: true
    }] : [];
    await M(r, e, n)
  }, [M]), B = i.useCallback(e => {
    if (l.isAgeRestricted !== (E.ownerConfiguredContentLevel === v.V_K.AGE_RESTRICTED) && k(async () => {
        let e = l.isAgeRestricted ? v.V_K.AGE_RESTRICTED : v.V_K.DEFAULT;
        await G({
          ownerConfiguredContentLevel: e
        })
      }), l.joinType === j.A.INVITE) {
      let {
        requireTerms: t,
        termRules: n = []
      } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
      k(async () => {
        if (E.features.has(v.oNc.DISCOVERABLE)) {
          let e = new Set(E.features);
          e.delete(v.oNc.DISCOVERABLE), await G({
            features: e
          })
        }
        h.verificationDirty && await U(t, r, e)
      })
    } else if (l.joinType === j.A.APPLY) {
      let {
        pendingVerificationFields: t
      } = l;
      if (null == t) return;
      k(async () => {
        if (E.features.has(v.oNc.DISCOVERABLE)) {
          let e = new Set(E.features);
          e.delete(v.oNc.DISCOVERABLE), await G({
            features: e
          })
        }
        h.verificationDirty && await M([...t], true, e), h.profileDirty && null != S && await (0, p.pV)(E.id, {
          visibility: S.visibility
        })
      })
    } else if (l.joinType === j.A.DISCOVERABLE) {
      let {
        requireTerms: t,
        termRules: n = []
      } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
      k(async () => {
        if (h.verificationDirty && await U(t, r, e), h.guildDirty) {
          (0, x.UA)(E, b);
          let e = new Set(E.features);
          e.add(v.oNc.DISCOVERABLE), e.delete(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL), await G({
            features: e,
            discoverySplash: E.discoverySplash,
            description: E.description,
            preferredLocale: E.preferredLocale
          });
          try {
            await (0, c.Vv)(y({
              guildId: E.id
            }, I))
          } catch (e) {
            throw Z(new o.Hx(e).getAnyErrorMessage()), e
          }
        }
      })
    }
  }, [l, k, E, h, G, U, S, M, b, I]), F = i.useCallback(() => {
    var e;
    if (l.joinType === j.A.INVITE || l.joinType === j.A.DISCOVERABLE) {
      let {
        requireTerms: e,
        termRules: t = []
      } = l;
      if (t.map(e => e.value.trim()).filter(e => "" !== e).length < 1 && e) return void Z(O.intl.string(O.t.TCHkcX))
    }
    if (l.joinType === j.A.APPLY && !(null == (e = l.pendingVerificationFields) ? true : e.some(e => (0, g._C)(e)))) return void Z(O.intl.string(O.t.HGVrIy));
    (e => {
      if (D && A > 0 && l.joinType !== j.A.APPLY) return (0, s.ZDy)(async () => {
        let {
          default: t
        } = await n.e("55009").then(n.bind(n, 826390));
        return n => (0, r.jsx)(t, N(y({}, n), {
          guildId: T,
          submittedGuildJoinRequestsCount: A,
          onConfirm: e
        }))
      });
      e()
    })(e => (e => {
      if (l.joinType === j.A.DISCOVERABLE && l.settingsView === _.U.ELIGIBLE_DISABLED) return void(0, s.ZDy)(async () => {
        let {
          default: t
        } = await n.e("67376").then(n.bind(n, 207252));
        return n => (0, r.jsx)(t, N(y({}, n), {
          guildId: T,
          onConfirm: e
        }))
      });
      e()
    })(() => B(e)))
  }, [D, B, l, T, A]), H = l.joinType === j.A.DISCOVERABLE && l.settingsView === _.U.ELIGIBLE_DISABLED, z = null != E.description && I.primaryCategoryId !== C.o3 && I.keywords.length > 0;
  return (0, r.jsx)(a.Z, {
    message: H ? O.intl.string(O.t.V2G2Ym) : true,
    onSaveText: H ? O.intl.string(O.t["qjtt/v"]) : true,
    submitting: P,
    errorMessage: R,
    onReset: L,
    onSave: F,
    disabled: H && !z
  })
}

function I() {
  let {
    pendingState: e,
    dirtyState: t
  } = (0, Chunk442837.cj)([Chunk658666.Z], () => ({
    pendingState: Chunk658666.Z.pendingState,
    dirtyState: Chunk658666.Z.dirtyState
  })), {
    settingsGuild: n,
    settingsMetadata: i,
    originalGuild: s,
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
      guildProfile: Chunk951288
    }
  });
  return null == module || null == require ? null : module.joinType === Chunk384632.A.DISCOVERABLE && module.settingsView === Chunk386885.U.INELIGIBLE ? (0, Chunk951288.jsx)(Chunk852860.Z, {
    message: Chunk388032.intl.string(Chunk388032.t.TEXwRk),
    onReset: () => Chunk434404.Z.init(require.id, Chunk981631.pNK.ACCESS)
  }) : (0, Chunk951288.jsx)(E, {
    pendingState: module,
    dirtyState: exports,
    originalGuild: Chunk481060,
    settingsGuild: require,
    settingsMetadata: Chunk647438,
    settingsProfile: Chunk881052
  })
}