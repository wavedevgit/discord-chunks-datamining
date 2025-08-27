/** Chunk was on 88479 **/
/** chunk id: 279542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => A,
  fp: () => R,
  k0: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk241559 = require("./241559.js"),
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
  } = e, n = (0, o.e7)([h.Z], () => null != t && h.Z.can(N.Plq.MANAGE_GUILD, t), [t]), l = i.useCallback(async e => {
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
  }, [t]), a = i.useMemo(() => {
    let e = (0, j.IF)(null == t ? true : t.features.has(N.oNc.COMMUNITY)).map(e => T(S({}, e), {
      tooltipPosition: "left"
    }));
    return (0, j.LJ)(e)
  }, [t]), s = i.useMemo(() => a.find(e => e.value === (null == t ? true : t.verificationLevel)), [t, a]);
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
    }), (0, r.jsx)(C.Z, {
      changeTitle: E.intl.string(E.t.TxESJC),
      value: null == s ? true : s.value,
      options: a,
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
  } = e, s = (0, o.e7)([h.Z], () => null != t && h.Z.can(N.Plq.MANAGE_GUILD, t), [t]), d = i.useCallback(async e => {
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
  }, [t]), m = i.useMemo(() => u.find(e => e.value === (null == t ? true : t.explicitContentFilter)), [t, u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [l && (0, r.jsx)(c.$i$, {
      className: I.divider
    }), (0, r.jsxs)("div", {
      className: a()(I.setupContainer, n),
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
            helpdeskArticle: x.Z.getArticleURL(N.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, r.jsx)(C.Z, {
        changeTitle: E.intl.string(E.t["eBd+Ul"]),
        value: null == m ? true : m.value,
        options: u,
        disabled: !s,
        onChange: d
      })]
    })]
  })
}
async function R(e, t) {
  if (e.features.has(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let n = e.features;
  return t ? n.add(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await _.Z.saveGuild(e.id, {
    features: n
  })
}

function Z(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([h.Z], () => null != t && h.Z.can(N.Plq.MANAGE_GUILD, t), [t]), l = t.features.has(N.oNc.COMMUNITY), a = (0, g.n2)(t.id), [s, d] = i.useState(t.features.has(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), u = i.useCallback(async e => {
    d(e), await R(t, e)
  }, [t]);
  return l || !a ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: I.setupContainer,
      children: [(0, r.jsx)(c.j7V, {
        value: s,
        onChange: u,
        className: I.switchItem,
        disabled: !n,
        hideBorder: true,
        children: (0, r.jsxs)("div", {
          className: I.switchItemTextContent,
          children: [(0, r.jsxs)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [E.intl.string(E.t.jDarm5), (0, r.jsx)(m.Z, {
              className: I.betaTag
            })]
          }), (0, r.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: E.intl.string(E.t["/ee7yM"])
          })]
        })
      }), (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: E.intl.string(E.t.JxO639)
      })]
    }), (0, r.jsx)(c.$i$, {
      className: I.divider
    })]
  })
}

function D(e) {
  let {
    guild: t,
    mfaLevel: n
  } = e, l = (0, o.e7)([h.Z], () => null != t && h.Z.can(N.Plq.MANAGE_GUILD, t), [t]), a = (0, o.e7)([b.default], () => b.default.getCurrentUser()), {
    isGuildOwnerWithMFA: u,
    showMFAUserTooltip: m
  } = i.useMemo(() => null == a ? {
    canChangeMFALevel: false,
    showMFAUserTooltip: false
  } : {
    isGuildOwnerWithMFA: (0, p.yn)(t, a),
    showMFAUserTooltip: !a.mfaEnabled && (0, p.eM)(t, a)
  }, [a, t]), g = n === N.BpS.ELEVATED, f = (0, s.throttle)(async e => {
    u && (m || await _.Z.updateMFALevel({
      guildId: t.id,
      level: e ? N.BpS.ELEVATED : N.BpS.NONE,
      isEnabled: !e
    }))
  }, 1e3);
  return l ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.$i$, {
      className: I.divider
    }), (0, r.jsxs)("div", {
      className: I.setupContainer,
      children: [(0, r.jsx)(c.j7V, {
        value: g,
        onChange: f,
        className: I.switchItem,
        disabled: !u,
        hideBorder: true,
        children: (0, r.jsxs)("div", {
          className: I.switchItemTextContent,
          children: [(0, r.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: E.intl.string(E.t.lbBfER)
          }), (0, r.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: E.intl.string(E.t.REr5AA)
          })]
        })
      }), m && (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: E.intl.format(E.t.Xz1O0d, {
          onClick: function() {
            d.Z.open(N.oAB.ACCOUNT)
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
    titleClassName: Chunk759071.headerContainer,
    children: [(0, Chunk951288.jsx)(Chunk403170.z, {
      guild: module
    }), (0, Chunk951288.jsx)(Z, {
      guild: module
    }), (0, Chunk951288.jsx)(P, {
      guild: module
    }), (0, Chunk951288.jsx)(D, {
      guild: module,
      mfaLevel: exports
    }), (0, Chunk951288.jsx)(w, {
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