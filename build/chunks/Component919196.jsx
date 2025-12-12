/** Chunk was on 86736 **/
/** chunk id: 919196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk243814 = require("./243814.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk590157 = require("./590157.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk366598 = require("./366598.jsx"),
  Chunk125657 = require("./125657.jsx"),
  Chunk725875 = require("./725875.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk85541 = require("./85541.js");

function N(e) {
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

function S(e) {
  var t, n, {
      application: r,
      guild: l,
      integration: o
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.keys(e);
        for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["application", "guild", "integration"]);
  return (0, i.jsx)(a.ConfirmModal, (t = N({}, s), n = n = {
    title: _.intl.formatToPlainString(_.t["rL9d/1"], {
      applicationName: r.name
    }),
    subtitle: _.intl.format(_.t.FGE8ya, {
      applicationName: r.name
    }),
    confirmText: _.intl.string(_.t.ebGf4m),
    onConfirm: () => {
      u.Z.disableIntegration(l.id, o.id).catch(() => {
        c.Z.show({
          title: _.intl.string(_.t.wYqMmI),
          body: _.intl.string(_.t.A4Mnst)
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

function I(e) {
  let {
    guild: t,
    applicationIntegration: n,
    selectableWebhookChannels: a,
    editedWebhook: c,
    errors: u,
    canNavigate: I
  } = e, {
    application: w,
    integration: E,
    webhooks: P
  } = n, [T, Z] = (0, o.Wu)([b.Z], () => [b.Z.can(y.Plq.MANAGE_ROLES, t), null == w.bot || b.Z.canManageUser(y.Plq.MANAGE_GUILD, w.bot.id, t)], [w.bot, t]), k = (0, o.e7)([b.Z], () => b.Z.can(y.Plq.MANAGE_WEBHOOKS, t), [t]), A = r.useCallback(() => {
    I() && (0, s.h7j)(e => (0, i.jsx)(S, N({
      guild: t,
      application: w,
      integration: E
    }, e)))
  }, [w, I, t, E]), D = r.useMemo(() => {
    let e = [{
      icon: s.T39,
      text: _.intl.formatToPlainString(_.t.gcdJ8J, {
        timestamp: f.default.extractTimestamp(E.id)
      })
    }];
    return null != E.user && e.push({
      icon: s.tBG,
      text: _.intl.formatToPlainString(_.t.qE7oqs, {
        user: h.ZP.getUserTag(E.user)
      })
    }), e
  }, [E.id, E.user]), R = r.useMemo(() => {
    var e;
    return null != w.bot && (null == (e = E.scopes) ? true : e.includes(l.x.BOT)) ? (0, i.jsx)(v.Z, {
      guild: t,
      applicationIntegration: n
    }) : (0, i.jsx)(s.Zbd, {
      className: C.emptyCard,
      editable: true,
      children: (0, i.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: _.intl.string(_.t.pfLnza)
      })
    })
  }, [w.bot, n, t, E.scopes]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(x.Z, {
      name: w.name,
      imageSrc: g.ZP.getApplicationIconURL({
        id: w.id,
        icon: w.icon,
        size: 32
      }),
      details: D,
      isHeader: true
    }), (null == w ? true : w.description) != null ? (0, i.jsx)(m.Z, {
      userBio: w.description,
      className: C.headerDescription
    }) : null, T ? (0, i.jsx)(p.Z, {
      application: w,
      canNavigate: I,
      guildId: t.id
    }) : null, (0, i.jsx)(s.izJ, {
      className: C.headerDivider
    }), null != w.bot ? (0, i.jsxs)("div", {
      className: C.section,
      children: [(0, i.jsx)(j.Z, {
        icon: (0, i.jsx)(s.wGt, {
          size: "xs",
          color: "currentColor"
        }),
        title: _.intl.string(_.t.AOdOYr)
      }), R]
    }) : null, (0, i.jsxs)("div", {
      className: C.section,
      children: [(0, i.jsx)(j.Z, {
        icon: (0, i.jsx)(s.tYf, {
          size: "md",
          color: "currentColor"
        }),
        title: _.intl.string(_.t["t9ZX/I"])
      }), P.length > 0 ? (0, i.jsx)(O.Z, {
        webhooks: P,
        editedWebhook: c,
        selectableWebhookChannels: a,
        errors: u,
        canNavigate: I
      }) : (0, i.jsx)(s.Zbd, {
        className: C.emptyCard,
        editable: true,
        children: (0, i.jsx)(s.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: k ? _.intl.string(_.t.ahPd2Y) : _.intl.string(_.t.axqYMl)
        })
      })]
    }), (0, i.jsx)(s.izJ, {
      className: C.headerDivider
    }), (0, i.jsxs)(d.Z, {
      className: C.section,
      justify: d.Z.Justify.BETWEEN,
      align: d.Z.Align.CENTER,
      children: [(0, i.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: Z ? _.intl.string(_.t.hdneL4) : _.intl.string(_.t.xRCMqx)
      }), (0, i.jsx)(d.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(s.Button, {
          variant: "critical-primary",
          size: "sm",
          text: _.intl.string(_.t.ebGf4m),
          disabled: !Z,
          onClick: A
        })
      })]
    })]
  })
}