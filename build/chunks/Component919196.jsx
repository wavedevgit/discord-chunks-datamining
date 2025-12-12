/** Chunk was on 9414 **/
/** chunk id: 919196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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
  Chunk27260 = require("./27260.js");

function S(e) {
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

function I(e) {
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
  return (0, i.jsx)(a.ConfirmModal, (t = S({}, s), n = n = {
    title: C.intl.formatToPlainString(C.t["rL9d/1"], {
      applicationName: r.name
    }),
    subtitle: C.intl.format(C.t.FGE8ya, {
      applicationName: r.name
    }),
    confirmText: C.intl.string(C.t.ebGf4m),
    onConfirm: () => {
      u.Z.disableIntegration(l.id, o.id).catch(() => {
        c.Z.show({
          title: C.intl.string(C.t.wYqMmI),
          body: C.intl.string(C.t.A4Mnst)
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
    application: E,
    integration: P,
    webhooks: T
  } = n, [Z, _] = (0, o.Wu)([m.Z], () => [m.Z.can(y.Plq.MANAGE_ROLES, t), null == E.bot || m.Z.canManageUser(y.Plq.MANAGE_GUILD, E.bot.id, t)], [E.bot, t]), k = (0, o.e7)([m.Z], () => m.Z.can(y.Plq.MANAGE_WEBHOOKS, t), [t]), A = r.useCallback(() => {
    w() && (0, s.h7j)(e => (0, i.jsx)(I, S({
      guild: t,
      application: E,
      integration: P
    }, e)))
  }, [E, w, t, P]), D = r.useMemo(() => {
    let e = [{
      icon: s.T39,
      text: C.intl.formatToPlainString(C.t.gcdJ8J, {
        timestamp: g.default.extractTimestamp(P.id)
      })
    }];
    return null != P.user && e.push({
      icon: s.tBG,
      text: C.intl.formatToPlainString(C.t.qE7oqs, {
        user: h.ZP.getUserTag(P.user)
      })
    }), e
  }, [P.id, P.user]), R = r.useMemo(() => {
    var e;
    return null != E.bot && (null == (e = P.scopes) ? true : e.includes(l.x.BOT)) ? (0, i.jsx)(v.Z, {
      guild: t,
      applicationIntegration: n
    }) : (0, i.jsx)(s.Zbd, {
      className: N.emptyCard,
      editable: true,
      children: (0, i.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: C.intl.string(C.t.pfLnza)
      })
    })
  }, [E.bot, n, t, P.scopes]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(x.Z, {
      name: E.name,
      imageSrc: f.ZP.getApplicationIconURL({
        id: E.id,
        icon: E.icon,
        size: 32
      }),
      details: D,
      isHeader: true
    }), (null == E ? true : E.description) != null ? (0, i.jsx)(p.Z, {
      userBio: E.description,
      className: N.headerDescription
    }) : null, Z ? (0, i.jsx)(b.Z, {
      application: E,
      canNavigate: w,
      guildId: t.id
    }) : null, (0, i.jsx)(s.izJ, {
      className: N.headerDivider
    }), null != E.bot ? (0, i.jsxs)("div", {
      className: N.section,
      children: [(0, i.jsx)(j.Z, {
        icon: (0, i.jsx)(s.wGt, {
          size: "xs",
          color: "currentColor"
        }),
        title: C.intl.string(C.t.AOdOYr)
      }), R]
    }) : null, (0, i.jsxs)("div", {
      className: N.section,
      children: [(0, i.jsx)(j.Z, {
        icon: (0, i.jsx)(s.tYf, {
          size: "md",
          color: "currentColor"
        }),
        title: C.intl.string(C.t["t9ZX/I"])
      }), T.length > 0 ? (0, i.jsx)(O.Z, {
        webhooks: T,
        editedWebhook: c,
        selectableWebhookChannels: a,
        errors: u,
        canNavigate: w
      }) : (0, i.jsx)(s.Zbd, {
        className: N.emptyCard,
        editable: true,
        children: (0, i.jsx)(s.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: k ? C.intl.string(C.t.ahPd2Y) : C.intl.string(C.t.axqYMl)
        })
      })]
    }), (0, i.jsx)(s.izJ, {
      className: N.headerDivider
    }), (0, i.jsxs)(d.Z, {
      className: N.section,
      justify: d.Z.Justify.BETWEEN,
      align: d.Z.Align.CENTER,
      children: [(0, i.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: _ ? C.intl.string(C.t.hdneL4) : C.intl.string(C.t.xRCMqx)
      }), (0, i.jsx)(d.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(s.Button, {
          variant: "critical-primary",
          size: "sm",
          text: C.intl.string(C.t.ebGf4m),
          disabled: !_,
          onClick: A
        })
      })]
    })]
  })
}