/** Chunk was on 39048 **/
/** chunk id: 234721, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => S
}), require("./896048.js"), require("./733351.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk460760 = require("./460760.js"),
  Chunk408213 = require("./408213.js"),
  Chunk513461 = require("./513461.js"),
  Chunk709977 = require("./709977.js"),
  Chunk786180 = require("./786180.js"),
  Chunk250527 = require("./250527.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk310345 = require("./310345.js"),
  Chunk306846 = require("./306846.js"),
  Chunk894222 = require("./894222.js"),
  Chunk716610 = require("./716610.js"),
  Chunk652215 = require("./652215.js"),
  Chunk324580 = require("./324580.js"),
  Chunk985018 = require("./985018.jsx");

function A(e) {
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

function N(e) {
  var t;
  let {
    pendingState: l,
    dirtyState: h,
    originalGuild: x,
    settingsGuild: N,
    settingsMetadata: S,
    settingsProfile: I
  } = e, T = N.id, [C, P] = i.useState(false), [w, R] = i.useState(null), D = N.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), G = null != (t = (0, m.H)({
    guildId: N.id
  })) ? t : 0, L = i.useCallback(() => {
    R(null), f.A.init(T, O.BEX.ACCESS)
  }, [T]), k = i.useCallback(async e => {
    try {
      P(true), await e(), R(null)
    } finally {
      P(false)
    }
  }, []), M = i.useCallback(async e => {
    try {
      await f.A.saveGuild(T, e, {
        throwErr: true
      })
    } catch (e) {
      throw "object" == typeof e && "message" in e ? R(e.message) : R(y.intl.formatToPlainString(y.t.aTVNes, {
        statusPageURL: O.qF7.STATUS
      })), e
    }
  }, [T]), U = i.useCallback(async (e, t, n) => {
    try {
      await d.Ay.updateVerificationForm(T, e, t, n)
    } catch (e) {
      throw R(new o.LG(e).getAnyErrorMessage()), e
    }
  }, [T]), B = i.useCallback(async (e, t, n) => {
    let r = t.length > 0 ? [{
      field_type: u.rX.TERMS,
      label: y.intl.string(y.t["9suSIA"]),
      values: t,
      required: true
    }] : [];
    await U(r, e, n)
  }, [U]), F = i.useCallback(e => {
    if (l.isAgeRestricted !== (N.ownerConfiguredContentLevel === O.ftr.AGE_RESTRICTED) && k(async () => {
        let e = l.isAgeRestricted ? O.ftr.AGE_RESTRICTED : O.ftr.DEFAULT;
        await M({
          ownerConfiguredContentLevel: e
        })
      }), l.joinType === j.J.INVITE) {
      let {
        requireTerms: t,
        termRules: n = []
      } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
      k(async () => {
        if (N.features.has(O.GuildFeatures.DISCOVERABLE)) {
          let e = new Set(N.features);
          e.delete(O.GuildFeatures.DISCOVERABLE), await M({
            features: e
          })
        }
        h.verificationDirty && await B(t, r, e)
      })
    } else if (l.joinType === j.J.APPLY) {
      let {
        pendingVerificationFields: t
      } = l;
      if (null == t) return;
      k(async () => {
        if (N.features.has(O.GuildFeatures.DISCOVERABLE)) {
          let e = new Set(N.features);
          e.delete(O.GuildFeatures.DISCOVERABLE), await M({
            features: e
          })
        }
        h.verificationDirty && await U([...t], true, e), h.profileDirty && null != I && await (0, p._C)(N.id, {
          visibility: I.visibility
        })
      })
    } else if (l.joinType === j.J.DISCOVERABLE) {
      let {
        requireTerms: t,
        termRules: n = []
      } = l, r = n.map(e => e.value.trim()).filter(e => "" !== e);
      k(async () => {
        if (h.verificationDirty && await B(t, r, e), h.guildDirty) {
          (0, b.dl)(N, x);
          let e = new Set(N.features);
          e.add(O.GuildFeatures.DISCOVERABLE), e.delete(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), await M({
            features: e,
            discoverySplash: N.discoverySplash,
            description: N.description,
            preferredLocale: N.preferredLocale
          });
          try {
            await (0, c.Oh)(A({
              guildId: N.id
            }, S))
          } catch (e) {
            throw R(new o.LG(e).getAnyErrorMessage()), e
          }
        }
      })
    }
  }, [l, k, N, h, M, B, I, U, x, S]), H = i.useCallback(() => (e => {
    if (l.joinType === j.J.INVITE || l.joinType === j.J.DISCOVERABLE) {
      let {
        requireTerms: e,
        termRules: t = []
      } = l;
      if (t.map(e => e.value.trim()).filter(e => "" !== e).length < 1 && e) return void R(y.intl.string(y.t.TCHkcd))
    }
    if (l.joinType === j.J.APPLY) {
      var t;
      if (!(null == (t = l.pendingVerificationFields) ? true : t.some(e => (0, g.OP)(e)))) return void R(y.intl.string(y.t.HGVrI3))
    }
    e()
  })(() => {
    var e;
    return e = e => {
      var t;
      return t = () => F(e), void(l.joinType === j.J.DISCOVERABLE && l.settingsView === _.v.ELIGIBLE_DISABLED ? (0, a.mMO)(async () => {
        let {
          default: e
        } = await n.e("35125").then(n.bind(n, 60852));
        return n => (0, r.jsx)(e, E(A({}, n), {
          guildId: T,
          onConfirm: t
        }))
      }) : t())
    }, void(D && G > 0 && l.joinType !== j.J.APPLY ? (0, a.mMO)(async () => {
      let {
        default: t
      } = await n.e("63452").then(n.bind(n, 78903));
      return n => (0, r.jsx)(t, E(A({}, n), {
        guildId: T,
        submittedGuildJoinRequestsCount: G,
        onConfirm: e
      }))
    }) : e())
  }), [D, F, l, T, G]), V = l.joinType === j.J.DISCOVERABLE && l.settingsView === _.v.ELIGIBLE_DISABLED, K = null != N.description && S.primaryCategoryId !== v.ig && S.keywords.length > 0;
  return (0, r.jsx)(s.A, {
    message: V ? y.intl.string(y.t.V2G2Yr) : true,
    onSaveText: V ? y.intl.string(y.t["qjtt/p"]) : true,
    submitting: C,
    errorMessage: w,
    onReset: L,
    onSave: H,
    disabled: V && !K
  })
}

function S() {
  let {
    pendingState: e,
    dirtyState: t
  } = (0, l.cf)([x.A], () => ({
    pendingState: x.A.pendingState,
    dirtyState: x.A.dirtyState
  })), {
    settingsGuild: n,
    settingsMetadata: i,
    originalGuild: a,
    guildProfile: o
  } = (0, l.cf)([h.A], () => {
    let {
      guild: e,
      guildMetadata: t,
      originalGuild: n,
      profile: r
    } = h.A.getProps();
    return {
      settingsGuild: e,
      settingsMetadata: t,
      originalGuild: n,
      guildProfile: r
    }
  });
  return null == e || null == n ? null : e.joinType === j.J.DISCOVERABLE && e.settingsView === _.v.INELIGIBLE ? (0, r.jsx)(s.A, {
    message: y.intl.string(y.t.TEXwRt),
    onReset: () => f.A.init(n.id, O.BEX.ACCESS)
  }) : (0, r.jsx)(N, {
    pendingState: e,
    dirtyState: t,
    originalGuild: a,
    settingsGuild: n,
    settingsMetadata: i,
    settingsProfile: o
  })
}