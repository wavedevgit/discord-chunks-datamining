/** Chunk was on 64982 **/
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
  a = require.n(Chunk120356),
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
  Chunk776853 = require("./776853.js");

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
      await v.Z.saveGuild(t.id, {
        verificationLevel: n
      }), v.Z.updateGuild({
        verificationLevel: n
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE))
    }
  }, [t]), a = i.useMemo(() => {
    let e = (0, j.IF)(null == t ? true : t.features.has(N.GuildFeatures.COMMUNITY)).map(e => T(S({}, e), {
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
        children: E.intl.string(E.t.DpRdYK)
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: E.intl.format(E.t.iuRk2j, {})
      })]
    }), (0, r.jsx)(C.Z, {
      changeTitle: E.intl.string(E.t.TxESJG),
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
  } = e, s = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]), d = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await v.Z.saveGuild(t.id, {
        explicitContentFilter: n
      }), v.Z.updateGuild({
        explicitContentFilter: n
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE))
    }
  }, [t.id]), u = i.useMemo(() => {
    let e = (0, j.MF)(null == t ? true : t.features.has(N.GuildFeatures.COMMUNITY)).map(e => T(S({}, e), {
      tooltipPosition: "left"
    }));
    return (0, j.LJ)(e)
  }, [t]), g = i.useMemo(() => u.find(e => e.value === (null == t ? true : t.explicitContentFilter)), [t, u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [l && (0, r.jsx)(c.izJ, {
      className: I.divider
    }), (0, r.jsxs)("div", {
      className: a()(I.setupContainer, n),
      children: [(0, r.jsxs)("div", {
        className: I.switchItemTextContent,
        children: [(0, r.jsx)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: E.intl.string(E.t.bPgfJz)
        }), (0, r.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: E.intl.format(E.t.BI4ukC, {
            helpdeskArticle: x.Z.getArticleURL(N.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, r.jsx)(C.Z, {
        changeTitle: E.intl.string(E.t["eBd+Uv"]),
        value: null == g ? true : g.value,
        options: u,
        disabled: !s,
        onChange: d
      })]
    })]
  })
}
async function Z(e, t) {
  if (e.features.has(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let n = e.features;
  return t ? n.add(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await v.Z.saveGuild(e.id, {
    features: n
  })
}

function R(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]), l = t.features.has(N.GuildFeatures.COMMUNITY), a = (0, u.n2)(t.id), [s, d] = i.useState(t.features.has(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), g = i.useCallback(async e => {
    d(e), await Z(t, e)
  }, [t]);
  return l || !a ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: I.setupContainer,
      children: [(0, r.jsx)(c.rsf, {
        label: E.intl.string(E.t.jDarmy),
        description: E.intl.string(E.t["/ee7yK"]),
        badge: "beta",
        checked: s,
        onChange: g,
        disabled: !n
      }), (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: E.intl.string(E.t.JxO63z)
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
  } = e, l = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]), a = (0, o.e7)([b.default], () => b.default.getCurrentUser()), {
    isGuildOwnerWithMFA: d,
    showMFAUserTooltip: u
  } = i.useMemo(() => null == a ? {
    canChangeMFALevel: false,
    showMFAUserTooltip: false
  } : {
    isGuildOwnerWithMFA: (0, p.yn)(t, a),
    showMFAUserTooltip: !a.mfaEnabled && (0, p.eM)(t, a)
  }, [a, t]), h = n === N.BpS.ELEVATED, x = (0, s.throttle)(async e => {
    d && (u || await v.Z.updateMFALevel({
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
        label: E.intl.string(E.t.lbBfEQ),
        description: E.intl.string(E.t.REr5AI),
        checked: h,
        onChange: x,
        disabled: !d
      }), u && (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: E.intl.format(E.t.Xz1O0W, {
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
  return null == module ? null : require ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      className: Chunk776853.headerContainer,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk388032.t["suhY+Y"])
    }), (0, Chunk951288.jsx)(Chunk723136.z, {
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
      className: Chunk776853.divider
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk776853.setupContainer,
      children: (0, Chunk951288.jsx)(Chunk181339.w, {
        guild: module
      })
    })]
  })
}