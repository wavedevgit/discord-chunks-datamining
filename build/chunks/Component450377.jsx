/** Chunk was on 29679 **/
/** chunk id: 450377, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => A,
  fp: () => Z,
  k0: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk241559 = require("./241559.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk496675 = require("./496675.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk78451 = require("./78451.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk723136 = require("./723136.jsx"),
  Chunk532804 = require("./532804.jsx"),
  Chunk181339 = require("./181339.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk984734 = require("./984734.js");

function S(e) {
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

function T(e, t) {
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

function P(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]), l = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await _.Z.saveGuild(t.id, {
        verificationLevel: n
      }), _.Z.updateGuild({
        verificationLevel: n
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3t"]), c.ToastType.FAILURE))
    }
  }, [t]), s = i.useMemo(() => {
    let e = (0, j.IF)(null == t ? true : t.features.has(N.oNc.COMMUNITY)).map(e => T(S({}, e), {
      tooltipPosition: "left"
    }));
    return (0, j.LJ)(e)
  }, [t]), a = i.useMemo(() => s.find(e => e.value === (null == t ? true : t.verificationLevel)), [t, s]);
  return (0, r.jsxs)("div", {
    className: I.setupContainer,
    children: [(0, r.jsxs)("div", {
      className: I.switchItemTextContent,
      children: [(0, r.jsx)(c.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: E.intl.string(E.t.DpRdYG)
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: E.intl.format(E.t.iuRk2t, {})
      })]
    }), (0, r.jsx)(O.Z, {
      changeTitle: E.intl.string(E.t.TxESJC),
      value: null == a ? true : a.value,
      options: s,
      disabled: !n,
      onChange: l
    })]
  })
}

function w(e) {
  let {
    guild: t,
    className: n,
    withDivider: l = true
  } = e, a = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]), d = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await _.Z.saveGuild(t.id, {
        explicitContentFilter: n
      }), _.Z.updateGuild({
        explicitContentFilter: n
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3t"]), c.ToastType.FAILURE))
    }
  }, [t.id]), u = i.useMemo(() => {
    let e = (0, j.MF)(null == t ? true : t.features.has(N.oNc.COMMUNITY)).map(e => T(S({}, e), {
      tooltipPosition: "left"
    }));
    return (0, j.LJ)(e)
  }, [t]), g = i.useMemo(() => u.find(e => e.value === (null == t ? true : t.explicitContentFilter)), [t, u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [l && (0, r.jsx)(c.izJ, {
      className: I.divider
    }), (0, r.jsxs)("div", {
      className: s()(I.setupContainer, n),
      children: [(0, r.jsxs)("div", {
        className: I.switchItemTextContent,
        children: [(0, r.jsx)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: E.intl.string(E.t.bPgfJy)
        }), (0, r.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: E.intl.format(E.t.BI4ukJ, {
            helpdeskArticle: b.Z.getArticleURL(N.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, r.jsx)(O.Z, {
        changeTitle: E.intl.string(E.t["eBd+Ul"]),
        value: null == g ? true : g.value,
        options: u,
        disabled: !a,
        onChange: d
      })]
    })]
  })
}
async function Z(e, t) {
  if (e.features.has(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let n = e.features;
  return t ? n.add(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await _.Z.saveGuild(e.id, {
    features: n
  })
}

function R(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]), l = t.features.has(N.oNc.COMMUNITY), s = (0, u.n2)(t.id), [a, d] = i.useState(t.features.has(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), g = i.useCallback(async e => {
    d(e), await Z(t, e)
  }, [t]);
  return l || !s ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: I.setupContainer,
      children: [(0, r.jsx)(c.rsf, {
        label: E.intl.string(E.t.jDarm5),
        description: E.intl.string(E.t["/ee7yM"]),
        badge: "beta",
        checked: a,
        onChange: g,
        disabled: !n
      }), (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: E.intl.string(E.t.JxO639)
      })]
    }), (0, r.jsx)(c.izJ, {
      className: I.divider
    })]
  })
}

function D(e) {
  let {
    guild: t,
    mfaLevel: n
  } = e, l = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]), s = (0, o.e7)([x.default], () => x.default.getCurrentUser()), {
    isGuildOwnerWithMFA: d,
    showMFAUserTooltip: u
  } = i.useMemo(() => null == s ? {
    canChangeMFALevel: false,
    showMFAUserTooltip: false
  } : {
    isGuildOwnerWithMFA: (0, p.yn)(t, s),
    showMFAUserTooltip: !s.mfaEnabled && (0, p.eM)(t, s)
  }, [s, t]), h = n === N.BpS.ELEVATED, b = (0, a.throttle)(async e => {
    d && (u || await _.Z.updateMFALevel({
      guildId: t.id,
      level: e ? N.BpS.ELEVATED : N.BpS.NONE,
      isEnabled: !e
    }))
  }, 1e3);
  return l ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.izJ, {
      className: I.divider
    }), (0, r.jsxs)("div", {
      className: I.setupContainer,
      children: [(0, r.jsx)(c.rsf, {
        label: E.intl.string(E.t.lbBfER),
        description: E.intl.string(E.t.REr5AA),
        checked: h,
        onChange: b,
        disabled: !d
      }), u && (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: E.intl.format(E.t.Xz1O0d, {
          onClick: function() {
            (0, m.openUserSettings)(g.n.ACCOUNT_PANEL, {
              section: N.oAB.ACCOUNT
            })
          }
        })
      })]
    })]
  }) : null
}

function A() {
  let {
    guild: e,
    mfaLevel: t
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps(), []), n = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled, []);
  return null == module ? null : require ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: Chunk388032.intl.string(Chunk388032.t["suhY+f"]),
    tag: Chunk481060.RB0.H1,
    titleClassName: Chunk984734.headerContainer,
    children: [(0, Chunk951288.jsx)(Chunk723136.z, {
      guild: module
    }), (0, Chunk951288.jsx)(R, {
      guild: module
    }), (0, Chunk951288.jsx)(P, {
      guild: module
    }), (0, Chunk951288.jsx)(D, {
      guild: module,
      mfaLevel: exports
    }), (0, Chunk951288.jsx)(w, {
      guild: module
    }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
      className: Chunk984734.divider
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk984734.setupContainer,
      children: (0, Chunk951288.jsx)(Chunk181339.w, {
        guild: module
      })
    })]
  })
}