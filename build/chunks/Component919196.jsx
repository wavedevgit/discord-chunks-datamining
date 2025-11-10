/** Chunk was on 99063 **/
/** chunk id: 919196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk243814 = require("./243814.js"),
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
  Chunk156065 = require("./156065.js");

function C(e) {
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

function N(e) {
  var t, n, {
      application: r,
      guild: l,
      integration: a
    } = e,
    c = function(e, t) {
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
  return (0, i.jsx)(o.ConfirmModal, (t = C({}, c), n = n = {
    header: y.intl.formatToPlainString(y.t["rL9d/1"], {
      applicationName: r.name
    }),
    confirmText: y.intl.string(y.t.ebGf4m),
    cancelText: y.intl.string(y.t["ETE/oC"]),
    onConfirm: () => {
      d.Z.disableIntegration(l.id, a.id).catch(() => {
        s.Z.show({
          title: y.intl.string(y.t.wYqMmI),
          body: y.intl.string(y.t.A4Mnst)
        })
      })
    },
    children: (0, i.jsx)(o.Text, {
      variant: "text-md/normal",
      children: y.intl.format(y.t.FGE8ya, {
        applicationName: r.name
      })
    })
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

function S(e) {
  var t;
  let {
    guild: n,
    applicationIntegration: s,
    selectableWebhookChannels: d,
    editedWebhook: S,
    errors: E,
    canNavigate: w
  } = e, {
    application: I,
    integration: P,
    webhooks: T
  } = s, [Z, k] = (0, a.Wu)([m.Z], () => [m.Z.can(O.Plq.MANAGE_ROLES, n), null == I.bot || m.Z.canManageUser(O.Plq.MANAGE_GUILD, I.bot.id, n)], [I.bot, n]), D = (0, a.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_WEBHOOKS, n), [n]), A = r.useCallback(() => {
    w() && (0, o.h7j)(e => (0, i.jsx)(N, C({
      guild: n,
      application: I,
      integration: P
    }, e)))
  }, [I, w, n, P]), R = r.useMemo(() => {
    let e = [{
      icon: o.T39,
      text: y.intl.formatToPlainString(y.t.gcdJ8J, {
        timestamp: g.default.extractTimestamp(P.id)
      })
    }];
    return null != P.user && e.push({
      icon: o.tBG,
      text: y.intl.formatToPlainString(y.t.qE7oqs, {
        user: f.ZP.getUserTag(P.user)
      })
    }), e
  }, [P.id, P.user]), L = r.useMemo(() => {
    var e;
    return null != I.bot && (null == (e = P.scopes) ? true : e.includes(l.x.BOT)) ? (0, i.jsx)(j.Z, {
      guild: n,
      applicationIntegration: s
    }) : (0, i.jsx)(o.Zbd, {
      className: _.emptyCard,
      editable: true,
      children: (0, i.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: y.intl.string(y.t.pfLnza)
      })
    })
  }, [I.bot, s, n, P.scopes]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.Z, {
      name: I.name,
      imageSrc: null != (t = I.getIconURL(32)) ? t : b.pK["0"],
      details: R,
      isHeader: true
    }), (null == I ? true : I.description) != null ? (0, i.jsx)(p.Z, {
      userBio: I.description,
      className: _.headerDescription
    }) : null, Z ? (0, i.jsx)(u.Z, {
      application: I,
      canNavigate: w,
      guildId: n.id
    }) : null, (0, i.jsx)(o.izJ, {
      className: _.headerDivider
    }), null != I.bot ? (0, i.jsxs)("div", {
      className: _.section,
      children: [(0, i.jsx)(x.Z, {
        icon: (0, i.jsx)(o.wGt, {
          size: "xs",
          color: "currentColor"
        }),
        title: y.intl.string(y.t.AOdOYr)
      }), L]
    }) : null, (0, i.jsxs)("div", {
      className: _.section,
      children: [(0, i.jsx)(x.Z, {
        icon: (0, i.jsx)(o.tYf, {
          size: "md",
          color: "currentColor"
        }),
        title: y.intl.string(y.t["t9ZX/I"])
      }), T.length > 0 ? (0, i.jsx)(v.Z, {
        webhooks: T,
        editedWebhook: S,
        selectableWebhookChannels: d,
        errors: E,
        canNavigate: w
      }) : (0, i.jsx)(o.Zbd, {
        className: _.emptyCard,
        editable: true,
        children: (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: D ? y.intl.string(y.t.ahPd2Y) : y.intl.string(y.t.axqYMl)
        })
      })]
    }), (0, i.jsx)(o.izJ, {
      className: _.headerDivider
    }), (0, i.jsxs)(c.Z, {
      className: _.section,
      justify: c.Z.Justify.BETWEEN,
      align: c.Z.Align.CENTER,
      children: [(0, i.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: k ? y.intl.string(y.t.hdneL4) : y.intl.string(y.t.xRCMqx)
      }), (0, i.jsx)(c.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(o.Button, {
          variant: "critical-primary",
          size: "sm",
          text: y.intl.string(y.t.ebGf4m),
          disabled: !k,
          onClick: A
        })
      })]
    })]
  })
}