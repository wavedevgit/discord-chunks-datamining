/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  w: () => y
}), n(47120), n(566702), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(852860),
  o = n(881052),
  c = n(456268),
  A = n(863249),
  d = n(246364),
  u = n(983736),
  g = n(571728),
  f = n(699553),
  m = n(434404),
  p = n(999382),
  h = n(654351),
  C = n(658666),
  b = n(384632),
  v = n(386885),
  x = n(981631),
  N = n(128449),
  j = n(388032);

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function I(e, t) {
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

function O(e) {
  var t;
  let {
    pendingState: s,
    dirtyState: p,
    originalGuild: C,
    settingsGuild: O,
    settingsMetadata: y,
    settingsProfile: w
  } = e, P = O.id, [B, D] = i.useState(!1), [T, S] = i.useState(null), L = O.hasFeature(x.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL), R = null !== (t = (0, g.A)({
    guildId: O.id
  })) && void 0 !== t ? t : 0, Q = i.useCallback(() => {
    S(null), m.Z.init(P, x.pNK.ACCESS)
  }, [P]), Z = i.useCallback(async e => {
    try {
      D(!0), await e(), S(null)
    } finally {
      D(!1)
    }
  }, []), W = i.useCallback(async e => {
    try {
      await m.Z.saveGuild(P, e, {
        throwErr: !0
      })
    } catch (e) {
      throw "object" == typeof e && "message" in e ? S(e.message) : S(j.NW.formatToPlainString(j.t.aTVNen, {
        statusPageURL: x.yXt.STATUS
      })), e
    }
  }, [P]), k = i.useCallback(async (e, t) => {
    try {
      await A.ZP.updateVerificationForm(P, e, t)
    } catch (e) {
      throw S(new o.Hx(e).getAnyErrorMessage()), e
    }
  }, [P]), M = i.useCallback(async (e, t) => {
    let n = t.length > 0 ? [{
      field_type: d.QJ.TERMS,
      label: j.NW.string(j.t["9suSIC"]),
      values: t,
      required: !0
    }] : [];
    await k(n, e)
  }, [k]), _ = i.useCallback(() => {
    if (s.joinType === b.A.INVITE) {
      let {
        requireTerms: e,
        termRules: t = []
      } = s, n = t.map(e => e.value.trim()).filter(e => "" !== e);
      Z(async () => {
        if (O.hasFeature(x.oNc.DISCOVERABLE)) {
          let e = new Set(O.features);
          e.delete(x.oNc.DISCOVERABLE), await W({
            features: e
          })
        }
        p.verificationDirty && await M(e, n)
      })
    } else if (s.joinType === b.A.APPLY) {
      let {
        pendingVerificationFields: e
      } = s;
      if (null == e) return;
      Z(async () => {
        if (O.hasFeature(x.oNc.DISCOVERABLE)) {
          let e = new Set(O.features);
          e.delete(x.oNc.DISCOVERABLE), await W({
            features: e
          })
        }
        p.verificationDirty && await k([...e], !0), p.profileDirty && null != w && await (0, f.pV)(O.id, {
          visibility: w.visibility
        })
      })
    } else if (s.joinType === b.A.DISCOVERABLE) {
      let {
        requireTerms: e,
        termRules: t = []
      } = s, n = t.map(e => e.value.trim()).filter(e => "" !== e);
      Z(async () => {
        if (p.verificationDirty && await M(e, n), p.guildDirty) {
          (0, h.UA)(O, C);
          let e = new Set(O.features);
          e.add(x.oNc.DISCOVERABLE), e.delete(x.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL), await W({
            features: e,
            discoverySplash: O.discoverySplash,
            description: O.description,
            preferredLocale: O.preferredLocale
          });
          try {
            await (0, c.Vv)(E({
              guildId: O.id
            }, y))
          } catch (e) {
            throw S(new o.Hx(e).getAnyErrorMessage()), e
          }
        }
      })
    }
  }, [s, Z, O, p, W, M, w, k, C, y]), G = i.useCallback(() => {
    let e = e => {
        if (s.joinType === b.A.DISCOVERABLE && s.settingsView === v.U.ELIGIBLE_DISABLED) {
          (0, a.ZDy)(async () => {
            let {
              default: t
            } = await n.e("67376").then(n.bind(n, 207252));
            return n => (0, r.jsx)(t, I(E({}, n), {
              guildId: P,
              onConfirm: e
            }))
          });
          return
        }
        e()
      },
      t = e => {
        if (L && R > 0 && s.joinType !== b.A.APPLY) {
          (0, a.ZDy)(async () => {
            let {
              default: t
            } = await n.e("55009").then(n.bind(n, 826390));
            return n => (0, r.jsx)(t, I(E({}, n), {
              guildId: P,
              submittedGuildJoinRequestsCount: R,
              onConfirm: e
            }))
          });
          return
        }
        e()
      };
    return (e => {
      if (s.joinType === b.A.INVITE || s.joinType === b.A.DISCOVERABLE) {
        let {
          requireTerms: e,
          termRules: t = []
        } = s;
        if (t.map(e => e.value.trim()).filter(e => "" !== e).length < 1 && e) {
          S(j.NW.string(j.t.TCHkcX));
          return
        }
      }
      if (s.joinType === b.A.APPLY) {
        var t;
        if (!(null === (t = s.pendingVerificationFields) || void 0 === t ? void 0 : t.some(e => (0, u._C)(e)))) {
          S(j.NW.string(j.t.HGVrIy));
          return
        }
      }
      e()
    })(() => t(() => e(_)))
  }, [L, _, s, P, R]), F = s.joinType === b.A.DISCOVERABLE && s.settingsView === v.U.ELIGIBLE_DISABLED, U = null != O.description && y.primaryCategoryId !== N.o3 && y.keywords.length > 0;
  return (0, r.jsx)(l.Z, {
    message: F ? j.NW.string(j.t.V2G2Ym) : void 0,
    onSaveText: F ? j.NW.string(j.t["qjtt/v"]) : void 0,
    submitting: B,
    errorMessage: T,
    onReset: Q,
    onSave: G,
    disabled: F && !U
  })
}

function y() {
  let {
    pendingState: e,
    dirtyState: t
  } = (0, s.cj)([C.Z], () => ({
    pendingState: C.Z.pendingState,
    dirtyState: C.Z.dirtyState
  })), {
    settingsGuild: n,
    settingsMetadata: i,
    originalGuild: a,
    guildProfile: o
  } = (0, s.cj)([p.Z], () => {
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
  return null == e || null == n ? null : e.joinType === b.A.DISCOVERABLE && e.settingsView === v.U.INELIGIBLE ? (0, r.jsx)(l.Z, {
    message: j.NW.string(j.t.TEXwRk),
    onReset: () => m.Z.init(n.id, x.pNK.ACCESS)
  }) : (0, r.jsx)(O, {
    pendingState: e,
    dirtyState: t,
    originalGuild: a,
    settingsGuild: n,
    settingsMetadata: i,
    settingsProfile: o
  })
}