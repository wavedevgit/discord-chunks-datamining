/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  ZP: () => Z,
  fp: () => P,
  k0: () => T
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(392711),
  o = n(442837),
  c = n(481060),
  d = n(230711),
  u = n(497321),
  m = n(688465),
  g = n(241559),
  p = n(496675),
  h = n(246946),
  f = n(594174),
  b = n(63063),
  x = n(78451),
  j = n(434404),
  N = n(999382),
  v = n(181339),
  _ = n(193544),
  O = n(981631),
  y = n(388032),
  C = n(403043);

function I(e) {
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

function S(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([p.Z], () => null != t && p.Z.can(O.Plq.MANAGE_GUILD, t), [t]), s = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await j.Z.saveGuild(t.id, {
        verificationLevel: n
      }), j.Z.updateGuild({
        verificationLevel: n
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(y.NW.string(y.t["46Rs3t"]), c.ToastType.FAILURE))
    }
  }, [t]), a = i.useMemo(() => {
    let e = (0, x.IF)(null == t ? void 0 : t.hasFeature(O.oNc.COMMUNITY)).map(e => E(I({}, e), {
      tooltipPosition: "left"
    }));
    return (0, x.LJ)(e)
  }, [t]), l = i.useMemo(() => a.find(e => e.value === (null == t ? void 0 : t.verificationLevel)), [t, a]);
  return (0, r.jsxs)("div", {
    className: C.setupContainer,
    children: [(0, r.jsxs)("div", {
      className: C.switchItemTextContent,
      children: [(0, r.jsx)(c.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: y.NW.string(y.t.DpRdYG)
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: y.NW.format(y.t.iuRk2t, {})
      })]
    }), (0, r.jsx)(_.Z, {
      changeTitle: y.NW.string(y.t.TxESJC),
      value: null == l ? void 0 : l.value,
      options: a,
      disabled: !n,
      onChange: s
    })]
  })
}

function T(e) {
  let {
    guild: t,
    className: n,
    withDivider: s = !0
  } = e, l = (0, o.e7)([p.Z], () => null != t && p.Z.can(O.Plq.MANAGE_GUILD, t), [t]), d = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await j.Z.saveGuild(t.id, {
        explicitContentFilter: n
      }), j.Z.updateGuild({
        explicitContentFilter: n
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(y.NW.string(y.t["46Rs3t"]), c.ToastType.FAILURE))
    }
  }, [t.id]), u = i.useMemo(() => {
    let e = (0, x.MF)(null == t ? void 0 : t.hasFeature(O.oNc.COMMUNITY)).map(e => E(I({}, e), {
      tooltipPosition: "left"
    }));
    return (0, x.LJ)(e)
  }, [t]), m = i.useMemo(() => u.find(e => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [s && (0, r.jsx)(c.$i$, {
      className: C.divider
    }), (0, r.jsxs)("div", {
      className: a()(C.setupContainer, n),
      children: [(0, r.jsxs)("div", {
        className: C.switchItemTextContent,
        children: [(0, r.jsx)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: y.NW.string(y.t.Kd6OQU)
        }), (0, r.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: y.NW.format(y.t.zOmxND, {
            helpdeskArticle: b.Z.getArticleURL(O.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, r.jsx)(_.Z, {
        changeTitle: y.NW.string(y.t["eBd+Ul"]),
        value: null == m ? void 0 : m.value,
        options: u,
        disabled: !l,
        onChange: d
      })]
    })]
  })
}
async function P(e, t) {
  if (e.hasFeature(O.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let n = e.features;
  return t ? n.add(O.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(O.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await j.Z.saveGuild(e.id, {
    features: n
  })
}

function w(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([p.Z], () => null != t && p.Z.can(O.Plq.MANAGE_GUILD, t), [t]), s = t.hasFeature(O.oNc.COMMUNITY), a = (0, g.n2)(t.id), [l, d] = i.useState(t.hasFeature(O.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), u = i.useCallback(async e => {
    d(e), await P(t, e)
  }, [t]);
  return s || !a ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: C.setupContainer,
      children: [(0, r.jsx)(c.j7V, {
        value: l,
        onChange: u,
        className: C.switchItem,
        disabled: !n,
        hideBorder: !0,
        children: (0, r.jsxs)("div", {
          className: C.switchItemTextContent,
          children: [(0, r.jsxs)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [y.NW.string(y.t.jDarm5), (0, r.jsx)(m.Z, {
              className: C.betaTag
            })]
          }), (0, r.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: y.NW.string(y.t["/ee7yM"])
          })]
        })
      }), (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: y.NW.string(y.t.JxO639)
      })]
    }), (0, r.jsx)(c.$i$, {
      className: C.divider
    })]
  })
}

function R(e) {
  let {
    guild: t,
    mfaLevel: n
  } = e, s = (0, o.e7)([p.Z], () => null != t && p.Z.can(O.Plq.MANAGE_GUILD, t), [t]), a = (0, o.e7)([f.default], () => f.default.getCurrentUser()), {
    isGuildOwnerWithMFA: u,
    showMFAUserTooltip: m
  } = i.useMemo(() => null == a ? {
    canChangeMFALevel: !1,
    showMFAUserTooltip: !1
  } : {
    isGuildOwnerWithMFA: t.isOwnerWithRequiredMfaLevel(a),
    showMFAUserTooltip: !a.mfaEnabled && t.isOwner(a)
  }, [a, t]), g = n === O.BpS.ELEVATED, h = (0, l.throttle)(async e => {
    u && !m && await j.Z.updateMFALevel({
      guildId: t.id,
      level: e ? O.BpS.ELEVATED : O.BpS.NONE,
      isEnabled: !e
    })
  }, 1e3);
  return s ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.$i$, {
      className: C.divider
    }), (0, r.jsxs)("div", {
      className: C.setupContainer,
      children: [(0, r.jsx)(c.j7V, {
        value: g,
        onChange: h,
        className: C.switchItem,
        disabled: !u,
        hideBorder: !0,
        children: (0, r.jsxs)("div", {
          className: C.switchItemTextContent,
          children: [(0, r.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: y.NW.string(y.t.lbBfER)
          }), (0, r.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: y.NW.string(y.t.REr5AA)
          })]
        })
      }), m && (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: y.NW.format(y.t.Xz1O0d, {
          onClick: function() {
            d.Z.open(O.oAB.ACCOUNT)
          }
        })
      })]
    })]
  }) : null
}

function Z() {
  let {
    guild: e,
    mfaLevel: t
  } = (0, o.cj)([N.Z], () => N.Z.getProps(), []), n = (0, o.e7)([h.Z], () => h.Z.enabled, []);
  return null == e ? null : n ? (0, r.jsx)(u.Z, {}) : (0, r.jsxs)(c.hjN, {
    title: y.NW.string(y.t["suhY+f"]),
    tag: c.RB0.H1,
    titleClassName: C.headerContainer,
    children: [(0, r.jsx)(w, {
      guild: e
    }), (0, r.jsx)(S, {
      guild: e
    }), (0, r.jsx)(R, {
      guild: e,
      mfaLevel: t
    }), (0, r.jsx)(T, {
      guild: e
    }), (0, r.jsx)(c.$i$, {
      className: C.divider
    }), (0, r.jsx)("div", {
      className: a()(C.setupContainer),
      children: (0, r.jsx)(v.w, {
        guild: e
      })
    })]
  })
}