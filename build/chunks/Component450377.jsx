/** Chunk was on 9536 **/
/** chunk id: 450377, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => A,
  fp: () => Z,
  k0: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk876549 = require("./876549.js");

function _(e) {
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
  } = e, n = (0, o.e7)([b.Z], () => null != t && b.Z.can(E.Plq.MANAGE_GUILD, t), [t]), l = i.useCallback(async e => {
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
      (0, c.showToast)((0, c.createToast)(I.intl.string(I.t["46Rs3v"]), c.ToastType.FAILURE))
    }
  }, [t]), a = i.useMemo(() => {
    let e = (0, j.IF)(null == t ? true : t.features.has(E.GuildFeatures.COMMUNITY)).map(e => T(_({}, e), {
      tooltipPosition: "left"
    }));
    return (0, j.LJ)(e)
  }, [t]), s = i.useMemo(() => a.find(e => e.value === (null == t ? true : t.verificationLevel)), [t, a]);
  return (0, r.jsxs)("div", {
    className: S.setupContainer,
    children: [(0, r.jsxs)("div", {
      className: S.switchItemTextContent,
      children: [(0, r.jsx)(c.Text, {
        color: "text-strong",
        variant: "text-md/semibold",
        children: I.intl.string(I.t.DpRdYK)
      }), (0, r.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: I.intl.format(I.t.iuRk2j, {})
      })]
    }), (0, r.jsx)(C.Z, {
      changeTitle: I.intl.string(I.t.TxESJG),
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
  } = e, s = (0, o.e7)([b.Z], () => null != t && b.Z.can(E.Plq.MANAGE_GUILD, t), [t]), d = i.useCallback(async e => {
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
      (0, c.showToast)((0, c.createToast)(I.intl.string(I.t["46Rs3v"]), c.ToastType.FAILURE))
    }
  }, [t.id]), u = i.useMemo(() => {
    let e = (0, j.MF)(null == t ? true : t.features.has(E.GuildFeatures.COMMUNITY)).map(e => T(_({}, e), {
      tooltipPosition: "left"
    }));
    return (0, j.LJ)(e)
  }, [t]), g = i.useMemo(() => u.find(e => e.value === (null == t ? true : t.explicitContentFilter)), [t, u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [l && (0, r.jsx)(c.izJ, {
      className: S.divider
    }), (0, r.jsxs)("div", {
      className: a()(S.setupContainer, n),
      children: [(0, r.jsxs)("div", {
        className: S.switchItemTextContent,
        children: [(0, r.jsx)(c.Text, {
          color: "text-strong",
          variant: "text-md/semibold",
          children: I.intl.string(I.t.bPgfJz)
        }), (0, r.jsx)(c.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: I.intl.format(I.t.BI4ukC, {
            helpdeskArticle: x.Z.getArticleURL(E.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, r.jsx)(C.Z, {
        changeTitle: I.intl.string(I.t["eBd+Uv"]),
        value: null == g ? true : g.value,
        options: u,
        disabled: !s,
        onChange: d
      })]
    })]
  })
}
async function Z(e, t) {
  if (e.features.has(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let n = e.features;
  return t ? n.add(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await v.Z.saveGuild(e.id, {
    features: n
  })
}

function R(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([b.Z], () => null != t && b.Z.can(E.Plq.MANAGE_GUILD, t), [t]), l = t.features.has(E.GuildFeatures.COMMUNITY), a = (0, u.n2)(t.id), [s, d] = i.useState(t.features.has(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), g = i.useCallback(async e => {
    d(e), await Z(t, e)
  }, [t]);
  return l || !a ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.setupContainer,
      children: [(0, r.jsx)(c.rsf, {
        label: I.intl.string(I.t.jDarmy),
        description: I.intl.string(I.t["/ee7yK"]),
        badge: "beta",
        checked: s,
        onChange: g,
        disabled: !n
      }), (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: I.intl.string(I.t.JxO63z)
      })]
    }), (0, r.jsx)(c.izJ, {
      className: S.divider
    })]
  })
}

function D(e) {
  let {
    guild: t,
    mfaLevel: n
  } = e, l = (0, o.e7)([b.Z], () => null != t && b.Z.can(E.Plq.MANAGE_GUILD, t), [t]), a = (0, o.e7)([h.default], () => h.default.getCurrentUser()), {
    isGuildOwnerWithMFA: d,
    showMFAUserTooltip: u
  } = i.useMemo(() => null == a ? {
    canChangeMFALevel: false,
    showMFAUserTooltip: false
  } : {
    isGuildOwnerWithMFA: (0, f.yn)(t, a),
    showMFAUserTooltip: !a.mfaEnabled && (0, f.eM)(t, a)
  }, [a, t]), p = n === E.BpS.ELEVATED, x = (0, s.throttle)(async e => {
    d && (u || await v.Z.updateMFALevel({
      guildId: t.id,
      level: e ? E.BpS.ELEVATED : E.BpS.NONE
    }))
  }, 1e3);
  return l ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.izJ, {
      className: S.divider
    }), (0, r.jsxs)("div", {
      className: S.setupContainer,
      children: [(0, r.jsx)(c.rsf, {
        label: I.intl.string(I.t.lbBfEQ),
        description: I.intl.string(I.t.REr5AI),
        checked: p,
        onChange: x,
        disabled: !d
      }), u && (0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        textVariant: "text-xs/normal",
        children: I.intl.format(I.t.Xz1O0W, {
          onClick: function() {
            (0, m.openUserSettings)(g.n.ACCOUNT_PANEL, {
              section: E.oAB.ACCOUNT
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
  } = (0, o.cj)([O.Z], () => O.Z.getProps(), []), n = (0, o.e7)([p.Z], () => p.Z.enabled, []);
  return null == e ? null : n ? (0, r.jsx)(d.Z, {}) : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Heading, {
      className: S.headerContainer,
      variant: "heading-lg/semibold",
      children: I.intl.string(I.t["suhY+Y"])
    }), (0, r.jsx)(y.z, {
      guild: e
    }), (0, r.jsx)(R, {
      guild: e
    }), (0, r.jsx)(P, {
      guild: e
    }), (0, r.jsx)(D, {
      guild: e,
      mfaLevel: t
    }), (0, r.jsx)(w, {
      guild: e
    }), (0, r.jsx)(c.izJ, {
      className: S.divider
    }), (0, r.jsx)("div", {
      className: S.setupContainer,
      children: (0, r.jsx)(N.w, {
        guild: e
      })
    })]
  })
}