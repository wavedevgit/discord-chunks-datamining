/** Chunk was on 47841 **/
/** chunk id: 965033, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => G,
  qH: () => w,
  t9: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk134413 = require("./134413.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk576705 = require("./576705.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk809505 = require("./809505.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk512122 = require("./512122.jsx"),
  Chunk111771 = require("./111771.jsx"),
  Chunk294363 = require("./294363.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk841541 = require("./841541.js");

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

function C(e) {
  let {
    guild: t
  } = e, n = (0, o.bG)([f.A], () => null != t && f.A.can(E.xBc.MANAGE_GUILD, t), [t]), l = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await _.A.saveGuild(t.id, {
        verificationLevel: n
      }), _.A.updateGuild({
        verificationLevel: n
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["46Rs3v"]), c.ToastType.FAILURE))
    }
  }, [t]), s = i.useMemo(() => {
    let e = (0, j.vd)(null == t ? true : t.features.has(E.GuildFeatures.COMMUNITY)).map(e => T(I({}, e), {
      tooltipPosition: "left"
    }));
    return (0, j.w3)(e)
  }, [t]), a = i.useMemo(() => s.find(e => e.value === (null == t ? true : t.verificationLevel)), [t, s]);
  return (0, r.jsxs)("div", {
    className: S.hu,
    children: [(0, r.jsxs)("div", {
      className: S.aZ,
      children: [(0, r.jsx)(c.Text, {
        color: "text-strong",
        variant: "text-md/semibold",
        children: N.intl.string(N.t.DpRdYK)
      }), (0, r.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: N.intl.format(N.t.iuRk2j, {})
      })]
    }), (0, r.jsx)(y.A, {
      changeTitle: N.intl.string(N.t.TxESJG),
      value: null == a ? true : a.value,
      options: s,
      disabled: !n,
      onChange: l
    })]
  })
}

function P(e) {
  let {
    guild: t,
    className: n,
    withDivider: l = true
  } = e, a = (0, o.bG)([f.A], () => null != t && f.A.can(E.xBc.MANAGE_GUILD, t), [t]), d = i.useCallback(async e => {
    let {
      value: n
    } = e;
    try {
      await _.A.saveGuild(t.id, {
        explicitContentFilter: n
      }), _.A.updateGuild({
        explicitContentFilter: n
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["46Rs3v"]), c.ToastType.FAILURE))
    }
  }, [t.id]), u = i.useMemo(() => {
    let e = (0, j.QL)(null == t ? true : t.features.has(E.GuildFeatures.COMMUNITY)).map(e => T(I({}, e), {
      tooltipPosition: "left"
    }));
    return (0, j.w3)(e)
  }, [t]), g = i.useMemo(() => u.find(e => e.value === (null == t ? true : t.explicitContentFilter)), [t, u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [l && (0, r.jsx)(c.cGx, {
      className: S.yF
    }), (0, r.jsxs)("div", {
      className: s()(S.hu, n),
      children: [(0, r.jsxs)("div", {
        className: S.aZ,
        children: [(0, r.jsx)(c.Text, {
          color: "text-strong",
          variant: "text-md/semibold",
          children: N.intl.string(N.t.bPgfJz)
        }), (0, r.jsx)(c.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: N.intl.format(N.t.BI4ukC, {
            helpdeskArticle: x.A.getArticleURL(E.MVz.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, r.jsx)(y.A, {
        changeTitle: N.intl.string(N.t["eBd+Uv"]),
        value: null == g ? true : g.value,
        options: u,
        disabled: !a,
        onChange: d
      })]
    })]
  })
}
async function w(e, t) {
  if (e.features.has(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let n = e.features;
  return t ? n.add(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await _.A.saveGuild(e.id, {
    features: n
  })
}

function R(e) {
  let {
    guild: t
  } = e, n = (0, o.bG)([f.A], () => null != t && f.A.can(E.xBc.MANAGE_GUILD, t), [t]), l = t.features.has(E.GuildFeatures.COMMUNITY), s = (0, u.fw)(t.id), [a, d] = i.useState(t.features.has(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), g = i.useCallback(async e => {
    d(e), await w(t, e)
  }, [t]);
  return l || !s ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.hu,
      children: [(0, r.jsx)(c.dOG, {
        label: N.intl.string(N.t.jDarmy),
        description: N.intl.string(N.t["/ee7yK"]),
        badge: "beta",
        checked: a,
        onChange: g,
        disabled: !n
      }), (0, r.jsx)(c.po8, {
        messageType: c.YCn.INFO,
        textVariant: "text-xs/normal",
        children: N.intl.string(N.t.JxO63z)
      })]
    }), (0, r.jsx)(c.cGx, {
      className: S.yF
    })]
  })
}

function D(e) {
  let {
    guild: t,
    mfaLevel: n
  } = e, l = (0, o.bG)([f.A], () => null != t && f.A.can(E.xBc.MANAGE_GUILD, t), [t]), s = (0, o.bG)([h.default], () => h.default.getCurrentUser()), {
    isGuildOwnerWithMFA: d,
    showMFAUserTooltip: u
  } = i.useMemo(() => null == s ? {
    canChangeMFALevel: false,
    showMFAUserTooltip: false
  } : {
    isGuildOwnerWithMFA: (0, p.ok)(t, s),
    showMFAUserTooltip: !s.mfaEnabled && (0, p.bM)(t, s)
  }, [s, t]), b = n === E.EkJ.ELEVATED, x = (0, a.throttle)(async e => {
    !d || u || await _.A.updateMFALevel({
      guildId: t.id,
      level: e ? E.EkJ.ELEVATED : E.EkJ.NONE
    })
  }, 1e3);
  return l ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.cGx, {
      className: S.yF
    }), (0, r.jsxs)("div", {
      className: S.hu,
      children: [(0, r.jsx)(c.dOG, {
        label: N.intl.string(N.t.lbBfEQ),
        description: N.intl.string(N.t.REr5AI),
        checked: b,
        onChange: x,
        disabled: !d
      }), u && (0, r.jsx)(c.po8, {
        messageType: c.YCn.INFO,
        textVariant: "text-xs/normal",
        children: N.intl.format(N.t.Xz1O0W, {
          onClick: function() {
            (0, m.openUserSettings)(g.X.ACCOUNT_PANEL, {
              section: E.nc_.ACCOUNT
            })
          }
        })
      })]
    })]
  }) : null
}

function G() {
  let {
    guild: e,
    mfaLevel: t
  } = (0, o.cf)([O.A], () => O.A.getProps(), []), n = (0, o.bG)([b.A], () => b.A.enabled, []);
  return null == e ? null : n ? (0, r.jsx)(d.A, {}) : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Heading, {
      className: S.N1,
      variant: "heading-lg/semibold",
      children: N.intl.string(N.t["suhY+Y"])
    }), (0, r.jsx)(v.p, {
      guild: e
    }), (0, r.jsx)(R, {
      guild: e
    }), (0, r.jsx)(C, {
      guild: e
    }), (0, r.jsx)(D, {
      guild: e,
      mfaLevel: t
    }), (0, r.jsx)(P, {
      guild: e
    }), (0, r.jsx)(c.cGx, {
      className: S.yF
    }), (0, r.jsx)("div", {
      className: S.hu,
      children: (0, r.jsx)(A.b, {
        guild: e
      })
    })]
  })
}