/** Chunk was on 9536 **/
/** chunk id: 237245, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  w: () => S
}), require("./388685.js"), require("./781311.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk456268 = require("./456268.js"),
  Chunk863249 = require("./863249.js"),
  Chunk246364 = require("./246364.js"),
  Chunk983736 = require("./983736.js"),
  Chunk571728 = require("./571728.js"),
  Chunk699553 = require("./699553.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk492064 = require("./492064.js"),
  Chunk658666 = require("./658666.js"),
  Chunk384632 = require("./384632.js"),
  Chunk386885 = require("./386885.js"),
  Chunk981631 = require("./981631.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function N(e) {
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

function E(e, t) {
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
    dirtyState: p,
    originalGuild: x,
    settingsGuild: I,
    settingsMetadata: S,
    settingsProfile: _
  } = e, T = I.id, [P, w] = i.useState(false), [Z, R] = i.useState(null), D = I.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), A = null != (t = (0, m.A)({
    guildId: I.id
  })) ? t : 0, L = i.useCallback(() => {
    R(null), b.Z.init(T, O.pNK.ACCESS)
  }, [T]), k = i.useCallback(async e => {
    try {
      w(true), await e(), R(null)
    } finally {
      w(false)
    }
  }, []), G = i.useCallback(async e => {
    try {
      await b.Z.saveGuild(T, e, {
        throwErr: true
      })
    } catch (e) {
      throw "object" == typeof e && "message" in e ? R(e.message) : R(C.intl.formatToPlainString(C.t.aTVNes, {
        statusPageURL: O.yXt.STATUS
      })), e
    }
  }, [T]), M = i.useCallback(async (e, t, n) => {
    try {
      await d.ZP.updateVerificationForm(T, e, t, n)
    } catch (e) {
      throw R(new o.Hx(e).getAnyErrorMessage()), e
    }
  }, [T]), U = i.useCallback(async (e, t, n) => {
    let r = t.length > 0 ? [{
      field_type: u.QJ.TERMS,
      label: C.intl.string(C.t["9suSIA"]),
      values: t,
      required: true
    }] : [];
    await M(r, e, n)
  }, [M]), B = i.useCallback(e => {
    if (l.isAgeRestricted !== (I.ownerConfiguredContentLevel === O.V_K.AGE_RESTRICTED) && k(async () => {
        let e = l.isAgeRestricted ? O.V_K.AGE_RESTRICTED : O.V_K.DEFAULT;
        await G({
          ownerConfiguredContentLevel: e
        })
      }), l.joinType === j.A.INVITE) {
      let {
        requireTerms: t,
        termRules: n = []
      } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
      k(async () => {
        if (I.features.has(O.GuildFeatures.DISCOVERABLE)) {
          let e = new Set(I.features);
          e.delete(O.GuildFeatures.DISCOVERABLE), await G({
            features: e
          })
        }
        p.verificationDirty && await U(t, r, e)
      })
    } else if (l.joinType === j.A.APPLY) {
      let {
        pendingVerificationFields: t
      } = l;
      if (null == t) return;
      k(async () => {
        if (I.features.has(O.GuildFeatures.DISCOVERABLE)) {
          let e = new Set(I.features);
          e.delete(O.GuildFeatures.DISCOVERABLE), await G({
            features: e
          })
        }
        p.verificationDirty && await M([...t], true, e), p.profileDirty && null != _ && await (0, f.pV)(I.id, {
          visibility: _.visibility
        })
      })
    } else if (l.joinType === j.A.DISCOVERABLE) {
      let {
        requireTerms: t,
        termRules: n = []
      } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
      k(async () => {
        if (p.verificationDirty && await U(t, r, e), p.guildDirty) {
          (0, h.UA)(I, x);
          let e = new Set(I.features);
          e.add(O.GuildFeatures.DISCOVERABLE), e.delete(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), await G({
            features: e,
            discoverySplash: I.discoverySplash,
            description: I.description,
            preferredLocale: I.preferredLocale
          });
          try {
            await (0, c.Vv)(N({
              guildId: I.id
            }, S))
          } catch (e) {
            throw R(new o.Hx(e).getAnyErrorMessage()), e
          }
        }
      })
    }
  }, [l, k, I, p, G, U, _, M, x, S]), F = i.useCallback(() => {
    var e;
    if (l.joinType === j.A.INVITE || l.joinType === j.A.DISCOVERABLE) {
      let {
        requireTerms: e,
        termRules: t = []
      } = l;
      if (t.map(e => e.value.trim()).filter(e => "" !== e).length < 1 && e) return void R(C.intl.string(C.t.TCHkcd))
    }
    if (l.joinType === j.A.APPLY && !(null == (e = l.pendingVerificationFields) ? true : e.some(e => (0, g._C)(e)))) return void R(C.intl.string(C.t.HGVrI3));
    (e => {
      if (D && A > 0 && l.joinType !== j.A.APPLY) return (0, s.ZDy)(async () => {
        let {
          default: t
        } = await n.e("55009").then(n.bind(n, 826390));
        return n => (0, r.jsx)(t, E(N({}, n), {
          guildId: T,
          submittedGuildJoinRequestsCount: A,
          onConfirm: e
        }))
      });
      e()
    })(e => (e => {
      if (l.joinType === j.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED) return void(0, s.ZDy)(async () => {
        let {
          default: t
        } = await n.e("67376").then(n.bind(n, 207252));
        return n => (0, r.jsx)(t, E(N({}, n), {
          guildId: T,
          onConfirm: e
        }))
      });
      e()
    })(() => B(e)))
  }, [D, B, l, T, A]), H = l.joinType === j.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED, W = null != I.description && S.primaryCategoryId !== y.o3 && S.keywords.length > 0;
  return (0, r.jsx)(a.Z, {
    message: H ? C.intl.string(C.t.V2G2Yr) : true,
    onSaveText: H ? C.intl.string(C.t["qjtt/p"]) : true,
    submitting: P,
    errorMessage: Z,
    onReset: L,
    onSave: F,
    disabled: H && !W
  })
}

function S() {
  let {
    pendingState: e,
    dirtyState: t
  } = (0, l.cj)([x.Z], () => ({
    pendingState: x.Z.pendingState,
    dirtyState: x.Z.dirtyState
  })), {
    settingsGuild: n,
    settingsMetadata: i,
    originalGuild: s,
    guildProfile: o
  } = (0, l.cj)([p.Z], () => {
    let {
      guild: e,
      guildMetadata: t,
      originalGuild: n,
      profile: r
    } = p.Z.getProps();
    return {
      settingsGuild: e,
      settingsMetadata: t,
      originalGuild: n,
      guildProfile: r
    }
  });
  return null == e || null == n ? null : e.joinType === j.A.DISCOVERABLE && e.settingsView === v.U.INELIGIBLE ? (0, r.jsx)(a.Z, {
    message: C.intl.string(C.t.TEXwRt),
    onReset: () => b.Z.init(n.id, O.pNK.ACCESS)
  }) : (0, r.jsx)(I, {
    pendingState: e,
    dirtyState: t,
    originalGuild: s,
    settingsGuild: n,
    settingsMetadata: i,
    settingsProfile: o
  })
}