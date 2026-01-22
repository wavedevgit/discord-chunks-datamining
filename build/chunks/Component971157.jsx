/** Chunk was on 21968 **/
/** chunk id: 971157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js"), require("./321073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk179771 = require("./179771.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk776479 = require("./776479.jsx"),
  Chunk389996 = require("./389996.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk447066 = require("./447066.jsx"),
  Chunk998874 = require("./998874.jsx"),
  Chunk657681 = require("./657681.jsx"),
  Chunk267001 = require("./267001.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk882441 = require("./882441.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function T(e) {
  var t, n;
  let {
    application: r,
    guild: l,
    integration: s
  } = e, o = function(e, t) {
    if (null == e) return {};
    var n, i, r, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["application", "guild", "integration"]);
  return (0, i.jsx)(a.ConfirmModal, (t = E({}, o), n = n = {
    title: v.intl.formatToPlainString(v.t["rL9d/1"], {
      applicationName: r.name
    }),
    subtitle: v.intl.format(v.t.FGE8ya, {
      applicationName: r.name
    }),
    confirmText: v.intl.string(v.t.ebGf4m),
    onConfirm: () => {
      u.A.disableIntegration(l.id, s.id).catch(() => {
        c.A.show({
          title: v.intl.string(v.t.wYqMmI),
          body: v.intl.string(v.t.A4Mnst)
        })
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function w(e) {
  let {
    guild: t,
    applicationIntegration: n,
    selectableWebhookChannels: a,
    editedWebhook: c,
    errors: u,
    canNavigate: w
  } = e, {
    application: C,
    integration: S,
    webhooks: _
  } = n, [I, P] = (0, s.yK)([p.A], () => [p.A.can(A.xBc.MANAGE_ROLES, t), null == C.bot || p.A.canManageUser(A.xBc.MANAGE_GUILD, C.bot.id, t)], [C.bot, t]), k = (0, s.bG)([p.A], () => p.A.can(A.xBc.MANAGE_WEBHOOKS, t), [t]), R = r.useCallback(() => {
    w() && (0, o.qfG)(e => (0, i.jsx)(T, E({
      guild: t,
      application: C,
      integration: S
    }, e)))
  }, [C, w, t, S]), L = r.useMemo(() => {
    let e = [{
      icon: o.O4,
      text: v.intl.formatToPlainString(v.t.gcdJ8J, {
        timestamp: g.default.extractTimestamp(S.id)
      })
    }];
    return null != S.user && e.push({
      icon: o.nys,
      text: v.intl.formatToPlainString(v.t.qE7oqs, {
        user: h.Ay.getUserTag(S.user)
      })
    }), e
  }, [S.id, S.user]), M = r.useMemo(() => {
    var e;
    return null != C.bot && (null == (e = S.scopes) ? true : e.includes(l.F.BOT)) ? (0, i.jsx)(O.A, {
      guild: t,
      applicationIntegration: n
    }) : (0, i.jsx)(o.ZpM, {
      className: N.aM,
      editable: true,
      children: (0, i.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: v.intl.string(v.t.pfLnza)
      })
    })
  }, [C.bot, n, t, S.scopes]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(x.A, {
      name: C.name,
      imageSrc: m.Ay.getApplicationIconURL({
        id: C.id,
        icon: C.icon,
        size: 32
      }),
      details: L,
      isHeader: true
    }), (null == C ? true : C.description) != null ? (0, i.jsx)(f.A, {
      userBio: C.description,
      className: N.ux
    }) : null, I ? (0, i.jsx)(b.A, {
      application: C,
      canNavigate: w,
      guildId: t.id
    }) : null, (0, i.jsx)(o.cGx, {
      className: N.zN
    }), null != C.bot ? (0, i.jsxs)("div", {
      className: N.uW,
      children: [(0, i.jsx)(j.A, {
        icon: (0, i.jsx)(o.CnV, {
          size: "xs",
          color: "currentColor"
        }),
        title: v.intl.string(v.t.AOdOYr)
      }), M]
    }) : null, (0, i.jsxs)("div", {
      className: N.uW,
      children: [(0, i.jsx)(j.A, {
        icon: (0, i.jsx)(o.XC7, {
          size: "md",
          color: "currentColor"
        }),
        title: v.intl.string(v.t["t9ZX/I"])
      }), _.length > 0 ? (0, i.jsx)(y.A, {
        webhooks: _,
        editedWebhook: c,
        selectableWebhookChannels: a,
        errors: u,
        canNavigate: w
      }) : (0, i.jsx)(o.ZpM, {
        className: N.aM,
        editable: true,
        children: (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: k ? v.intl.string(v.t.ahPd2Y) : v.intl.string(v.t.axqYMl)
        })
      })]
    }), (0, i.jsx)(o.cGx, {
      className: N.zN
    }), (0, i.jsxs)(d.A, {
      className: N.uW,
      justify: d.A.Justify.BETWEEN,
      align: d.A.Align.CENTER,
      children: [(0, i.jsx)(o.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: P ? v.intl.string(v.t.hdneL4) : v.intl.string(v.t.xRCMqx)
      }), (0, i.jsx)(d.A.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(o.Button, {
          variant: "critical-primary",
          size: "sm",
          text: v.intl.string(v.t.ebGf4m),
          disabled: !P,
          onClick: R
        })
      })]
    })]
  })
}