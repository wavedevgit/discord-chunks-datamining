/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  ZP: () => S,
  fp: () => B,
  k0: () => P
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(392711),
  o = n(442837),
  A = n(481060),
  c = n(230711),
  d = n(497321),
  u = n(688465),
  g = n(241559),
  f = n(496675),
  m = n(246946),
  p = n(594174),
  h = n(63063),
  C = n(78451),
  b = n(434404),
  v = n(999382),
  x = n(181339),
  N = n(193544),
  j = n(981631),
  E = n(388032),
  I = n(403043);

function O(e) {
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

function y(e, t) {
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

function w(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([f.Z], () => null != t && f.Z.can(j.Plq.MANAGE_GUILD, t), [t]), s = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await b.Z.saveGuild(t.id, {
        verificationLevel: n
      }), b.Z.updateGuild({
        verificationLevel: n
      })
    } catch (e) {
      (0, A.showToast)((0, A.createToast)(E.NW.string(E.t["46Rs3t"]), A.ToastType.FAILURE))
    }
  }, [t]), a = i.useMemo(() => {
    let e = (0, C.IF)(null == t ? void 0 : t.hasFeature(j.oNc.COMMUNITY)).map(e => y(O({}, e), {
      tooltipPosition: "left"
    }));
    return (0, C.LJ)(e)
  }, [t]), l = i.useMemo(() => a.find(e => e.value === (null == t ? void 0 : t.verificationLevel)), [t, a]);
  return (0, r.jsxs)("div", {
    className: I.setupContainer,
    children: [(0, r.jsxs)("div", {
      className: I.switchItemTextContent,
      children: [(0, r.jsx)(A.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: E.NW.string(E.t.DpRdYG)
      }), (0, r.jsx)(A.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: E.NW.format(E.t.iuRk2t, {})
      })]
    }), (0, r.jsx)(N.Z, {
      changeTitle: E.NW.string(E.t.TxESJC),
      value: null == l ? void 0 : l.value,
      options: a,
      disabled: !n,
      onChange: s
    })]
  })
}

function P(e) {
  let {
    guild: t,
    className: n,
    withDivider: s = !0
  } = e, l = (0, o.e7)([f.Z], () => null != t && f.Z.can(j.Plq.MANAGE_GUILD, t), [t]), c = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await b.Z.saveGuild(t.id, {
        explicitContentFilter: n
      }), b.Z.updateGuild({
        explicitContentFilter: n
      })
    } catch (e) {
      (0, A.showToast)((0, A.createToast)(E.NW.string(E.t["46Rs3t"]), A.ToastType.FAILURE))
    }
  }, [t.id]), d = i.useMemo(() => {
    let e = (0, C.MF)(null == t ? void 0 : t.hasFeature(j.oNc.COMMUNITY)).map(e => y(O({}, e), {
      tooltipPosition: "left"
    }));
    return (0, C.LJ)(e)
  }, [t]), u = i.useMemo(() => d.find(e => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, d]);
  return (0, r.jsxs)(r.Fragment, {
    children: [s && (0, r.jsx)(A.$i$, {
      className: I.divider
    }), (0, r.jsxs)("div", {
      className: a()(I.setupContainer, n),
      children: [(0, r.jsxs)("div", {
        className: I.switchItemTextContent,
        children: [(0, r.jsx)(A.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: E.NW.string(E.t.Kd6OQU)
        }), (0, r.jsx)(A.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: E.NW.format(E.t.zOmxND, {
            helpdeskArticle: h.Z.getArticleURL(j.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, r.jsx)(N.Z, {
        changeTitle: E.NW.string(E.t["eBd+Ul"]),
        value: null == u ? void 0 : u.value,
        options: d,
        disabled: !l,
        onChange: c
      })]
    })]
  })
}
async function B(e, t) {
  if (e.hasFeature(j.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let n = e.features;
  return t ? n.add(j.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(j.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await b.Z.saveGuild(e.id, {
    features: n
  })
}

function D(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([f.Z], () => null != t && f.Z.can(j.Plq.MANAGE_GUILD, t), [t]), s = t.hasFeature(j.oNc.COMMUNITY), a = (0, g.n2)(t.id), [l, c] = i.useState(t.hasFeature(j.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), d = i.useCallback(async e => {
    c(e), await B(t, e)
  }, [t]);
  return s || !a ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: I.setupContainer,
      children: [(0, r.jsx)(A.j7V, {
        value: l,
        onChange: d,
        className: I.switchItem,
        disabled: !n,
        hideBorder: !0,
        children: (0, r.jsxs)("div", {
          className: I.switchItemTextContent,
          children: [(0, r.jsxs)(A.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [E.NW.string(E.t.jDarm5), (0, r.jsx)(u.Z, {
              className: I.betaTag
            })]
          }), (0, r.jsx)(A.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: E.NW.string(E.t["/ee7yM"])
          })]
        })
      }), (0, r.jsx)(A.Wn, {
        messageType: A.QYI.INFO,
        textVariant: "text-xs/normal",
        children: E.NW.string(E.t.JxO639)
      })]
    }), (0, r.jsx)(A.$i$, {
      className: I.divider
    })]
  })
}

function T(e) {
  let {
    guild: t,
    mfaLevel: n
  } = e, s = (0, o.e7)([f.Z], () => null != t && f.Z.can(j.Plq.MANAGE_GUILD, t), [t]), a = (0, o.e7)([p.default], () => p.default.getCurrentUser()), {
    isGuildOwnerWithMFA: d,
    showMFAUserTooltip: u
  } = i.useMemo(() => null == a ? {
    canChangeMFALevel: !1,
    showMFAUserTooltip: !1
  } : {
    isGuildOwnerWithMFA: t.isOwnerWithRequiredMfaLevel(a),
    showMFAUserTooltip: !a.mfaEnabled && t.isOwner(a)
  }, [a, t]), g = n === j.BpS.ELEVATED, m = (0, l.throttle)(async e => {
    d && !u && await b.Z.updateMFALevel({
      guildId: t.id,
      level: e ? j.BpS.ELEVATED : j.BpS.NONE,
      isEnabled: !e
    })
  }, 1e3);
  return s ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.$i$, {
      className: I.divider
    }), (0, r.jsxs)("div", {
      className: I.setupContainer,
      children: [(0, r.jsx)(A.j7V, {
        value: g,
        onChange: m,
        className: I.switchItem,
        disabled: !d,
        hideBorder: !0,
        children: (0, r.jsxs)("div", {
          className: I.switchItemTextContent,
          children: [(0, r.jsx)(A.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: E.NW.string(E.t.lbBfER)
          }), (0, r.jsx)(A.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: E.NW.string(E.t.REr5AA)
          })]
        })
      }), u && (0, r.jsx)(A.Wn, {
        messageType: A.QYI.INFO,
        textVariant: "text-xs/normal",
        children: E.NW.format(E.t.Xz1O0d, {
          onClick: function() {
            c.Z.open(j.oAB.ACCOUNT)
          }
        })
      })]
    })]
  }) : null
}

function S() {
  let {
    guild: e,
    mfaLevel: t
  } = (0, o.cj)([v.Z], () => v.Z.getProps(), []), n = (0, o.e7)([m.Z], () => m.Z.enabled, []);
  return null == e ? null : n ? (0, r.jsx)(d.Z, {}) : (0, r.jsxs)(A.hjN, {
    title: E.NW.string(E.t["suhY+f"]),
    tag: A.RB0.H1,
    titleClassName: I.headerContainer,
    children: [(0, r.jsx)(D, {
      guild: e
    }), (0, r.jsx)(w, {
      guild: e
    }), (0, r.jsx)(T, {
      guild: e,
      mfaLevel: t
    }), (0, r.jsx)(P, {
      guild: e
    }), (0, r.jsx)(A.$i$, {
      className: I.divider
    }), (0, r.jsx)("div", {
      className: I.setupContainer,
      children: (0, r.jsx)(x.w, {
        guild: e
      })
    })]
  })
}