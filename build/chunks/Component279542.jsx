/** Chunk was on 64523 **/
/** chunk id: 279542, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => L,
  fp: () => D,
  k0: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk688465 = require("./688465.jsx"),
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
  Chunk181339 = require("./181339.jsx"),
  Chunk403170 = require("./403170.jsx"),
  Chunk193544 = require("./193544.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759071 = require("./759071.js");

function T(e) {
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

function P(e, t) {
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
  } = e, n = (0, o.e7)([h.Z], () => null != t && h.Z.can(E.Plq.MANAGE_GUILD, t), [t]), l = i.useCallback(async e => {
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
      (0, c.showToast)((0, c.createToast)(I.intl.string(I.t["46Rs3t"]), c.ToastType.FAILURE))
    }
  }, [t]), s = i.useMemo(() => {
    let e = (0, v.IF)(null == t ? true : t.features.has(E.oNc.COMMUNITY)).map(e => P(T({}, e), {
      tooltipPosition: "left"
    }));
    return (0, v.LJ)(e)
  }, [t]), a = i.useMemo(() => s.find(e => e.value === (null == t ? true : t.verificationLevel)), [t, s]);
  return (0, r.jsxs)("div", {
    className: S.setupContainer,
    children: [(0, r.jsxs)("div", {
      className: S.switchItemTextContent,
      children: [(0, r.jsx)(c.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: I.intl.string(I.t.DpRdYG)
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I.intl.format(I.t.iuRk2t, {})
      })]
    }), (0, r.jsx)(N.Z, {
      changeTitle: I.intl.string(I.t.TxESJC),
      value: null == a ? true : a.value,
      options: s,
      disabled: !n,
      onChange: l
    })]
  })
}

function R(e) {
  let {
    guild: t,
    className: n,
    withDivider: l = true
  } = e, a = (0, o.e7)([h.Z], () => null != t && h.Z.can(E.Plq.MANAGE_GUILD, t), [t]), d = i.useCallback(async e => {
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
      (0, c.showToast)((0, c.createToast)(I.intl.string(I.t["46Rs3t"]), c.ToastType.FAILURE))
    }
  }, [t.id]), u = i.useMemo(() => {
    let e = (0, v.MF)(null == t ? true : t.features.has(E.oNc.COMMUNITY)).map(e => P(T({}, e), {
      tooltipPosition: "left"
    }));
    return (0, v.LJ)(e)
  }, [t]), m = i.useMemo(() => u.find(e => e.value === (null == t ? true : t.explicitContentFilter)), [t, u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [l && (0, r.jsx)(c.$i$, {
      className: S.divider
    }), (0, r.jsxs)("div", {
      className: s()(S.setupContainer, n),
      children: [(0, r.jsxs)("div", {
        className: S.switchItemTextContent,
        children: [(0, r.jsx)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: I.intl.string(I.t.bPgfJy)
        }), (0, r.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: I.intl.format(I.t.BI4ukJ, {
            helpdeskArticle: j.Z.getArticleURL(E.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, r.jsx)(N.Z, {
        changeTitle: I.intl.string(I.t["eBd+Ul"]),
        value: null == m ? true : m.value,
        options: u,
        disabled: !a,
        onChange: d
      })]
    })]
  })
}
async function D(e, t) {
  if (e.features.has(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let n = e.features;
  return t ? n.add(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await _.Z.saveGuild(e.id, {
    features: n
  })
}

function Z(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([h.Z], () => null != t && h.Z.can(E.Plq.MANAGE_GUILD, t), [t]), l = t.features.has(E.oNc.COMMUNITY), s = (0, m.n2)(t.id), [a, d] = i.useState(t.features.has(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), g = i.useCallback(async e => {
    d(e), await D(t, e)
  }, [t]);
  return l || !s ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.setupContainer,
      children: [(0, r.jsx)(c.j7V, {
        value: a,
        onChange: g,
        className: S.switchItem,
        disabled: !n,
        hideBorder: true,
        children: (0, r.jsxs)("div", {
          className: S.switchItemTextContent,
          children: [(0, r.jsxs)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [I.intl.string(I.t.jDarm5), (0, r.jsx)(u.Z, {
              className: S.betaTag
            })]
          }), (0, r.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: I.intl.string(I.t["/ee7yM"])
          })]
        })
      }), (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: I.intl.string(I.t.JxO639)
      })]
    }), (0, r.jsx)(c.$i$, {
      className: S.divider
    })]
  })
}

function A(e) {
  let {
    guild: t,
    mfaLevel: n
  } = e, l = (0, o.e7)([h.Z], () => null != t && h.Z.can(E.Plq.MANAGE_GUILD, t), [t]), s = (0, o.e7)([b.default], () => b.default.getCurrentUser()), {
    isGuildOwnerWithMFA: d,
    showMFAUserTooltip: u
  } = i.useMemo(() => null == s ? {
    canChangeMFALevel: false,
    showMFAUserTooltip: false
  } : {
    isGuildOwnerWithMFA: (0, f.yn)(t, s),
    showMFAUserTooltip: !s.mfaEnabled && (0, f.eM)(t, s)
  }, [s, t]), m = n === E.BpS.ELEVATED, x = (0, a.throttle)(async e => {
    d && (u || await _.Z.updateMFALevel({
      guildId: t.id,
      level: e ? E.BpS.ELEVATED : E.BpS.NONE,
      isEnabled: !e
    }))
  }, 1e3);
  return l ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.$i$, {
      className: S.divider
    }), (0, r.jsxs)("div", {
      className: S.setupContainer,
      children: [(0, r.jsx)(c.j7V, {
        value: m,
        onChange: x,
        className: S.switchItem,
        disabled: !d,
        hideBorder: true,
        children: (0, r.jsxs)("div", {
          className: S.switchItemTextContent,
          children: [(0, r.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: I.intl.string(I.t.lbBfER)
          }), (0, r.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: I.intl.string(I.t.REr5AA)
          })]
        })
      }), u && (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: I.intl.format(I.t.Xz1O0d, {
          onClick: function() {
            (0, p.openUserSettings)(g.n.ACCOUNT_PANEL, {
              section: E.oAB.ACCOUNT
            })
          }
        })
      })]
    })]
  }) : null
}

function L() {
  let {
    guild: e,
    mfaLevel: t
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps(), []), n = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled, []);
  return null == module ? null : require ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: Chunk388032.intl.string(Chunk388032.t["suhY+f"]),
    tag: Chunk481060.RB0.H1,
    titleClassName: Chunk759071.headerContainer,
    children: [(0, Chunk951288.jsx)(Chunk403170.z, {
      guild: module
    }), (0, Chunk951288.jsx)(Z, {
      guild: module
    }), (0, Chunk951288.jsx)(w, {
      guild: module
    }), (0, Chunk951288.jsx)(A, {
      guild: module,
      mfaLevel: exports
    }), (0, Chunk951288.jsx)(R, {
      guild: module
    }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
      className: Chunk759071.divider
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk759071.setupContainer,
      children: (0, Chunk951288.jsx)(Chunk181339.w, {
        guild: module
      })
    })]
  })
}