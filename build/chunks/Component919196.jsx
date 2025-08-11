/** Chunk was on 13616 **/
/** chunk id: 919196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk704526 = require("./704526.js");

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
      integration: o
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
  return (0, i.jsx)(a.ConfirmModal, (t = C({}, c), n = n = {
    header: y.intl.formatToPlainString(y.t["rL9d//"], {
      applicationName: r.name
    }),
    confirmText: y.intl.string(y.t.ebGf4u),
    cancelText: y.intl.string(y.t["ETE/oK"]),
    onConfirm: () => {
      d.Z.disableIntegration(l.id, o.id).catch(() => {
        s.Z.show({
          title: y.intl.string(y.t.wYqMmJ),
          body: y.intl.string(y.t.A4Mnsr)
        })
      })
    },
    children: (0, i.jsx)(a.Text, {
      variant: "text-md/normal",
      children: y.intl.format(y.t.FGE8yc, {
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
    errors: I,
    canNavigate: w
  } = e, {
    application: Z,
    integration: E,
    webhooks: P
  } = s, [T, k] = (0, o.Wu)([m.Z], () => [m.Z.can(O.Plq.MANAGE_ROLES, n), null == Z.bot || m.Z.canManageUser(O.Plq.MANAGE_GUILD, Z.bot.id, n)], [Z.bot, n]), A = (0, o.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_WEBHOOKS, n), [n]), R = r.useCallback(() => {
    w() && (0, a.h7j)(e => (0, i.jsx)(N, C({
      guild: n,
      application: Z,
      integration: E
    }, e)))
  }, [Z, w, n, E]), D = r.useMemo(() => {
    let e = [{
      icon: a.T39,
      text: y.intl.formatToPlainString(y.t.gcdJ8P, {
        timestamp: g.default.extractTimestamp(E.id)
      })
    }];
    return null != E.user && e.push({
      icon: a.tBG,
      text: y.intl.formatToPlainString(y.t.qE7oqq, {
        user: f.ZP.getUserTag(E.user)
      })
    }), e
  }, [E.id, E.user]), L = r.useMemo(() => {
    var e;
    return null != Z.bot && (null == (e = E.scopes) ? true : e.includes(l.x.BOT)) ? (0, i.jsx)(j.Z, {
      guild: n,
      applicationIntegration: s
    }) : (0, i.jsx)(a.Zbd, {
      className: _.emptyCard,
      editable: true,
      children: (0, i.jsx)(a.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: y.intl.string(y.t.pfLnzc)
      })
    })
  }, [Z.bot, s, n, E.scopes]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.Z, {
      name: Z.name,
      imageSrc: null != (t = Z.getIconURL(32)) ? t : b.pK["0"],
      details: D,
      isHeader: true
    }), (null == Z ? true : Z.description) != null ? (0, i.jsx)(p.Z, {
      userBio: Z.description,
      className: _.headerDescription
    }) : null, T ? (0, i.jsx)(u.Z, {
      application: Z,
      canNavigate: w,
      guildId: n.id
    }) : null, (0, i.jsx)(a.$i$, {
      className: _.headerDivider
    }), null != Z.bot ? (0, i.jsxs)("div", {
      className: _.section,
      children: [(0, i.jsx)(x.Z, {
        icon: (0, i.jsx)(a.wGt, {
          size: "xs",
          color: "currentColor"
        }),
        title: y.intl.string(y.t.AOdOYm)
      }), L]
    }) : null, (0, i.jsxs)("div", {
      className: _.section,
      children: [(0, i.jsx)(x.Z, {
        icon: (0, i.jsx)(a.tYf, {
          size: "md",
          color: "currentColor"
        }),
        title: y.intl.string(y.t["t9ZX/P"])
      }), P.length > 0 ? (0, i.jsx)(v.Z, {
        webhooks: P,
        editedWebhook: S,
        selectableWebhookChannels: d,
        errors: I,
        canNavigate: w
      }) : (0, i.jsx)(a.Zbd, {
        className: _.emptyCard,
        editable: true,
        children: (0, i.jsx)(a.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: A ? y.intl.string(y.t.ahPd2d) : y.intl.string(y.t.axqYMj)
        })
      })]
    }), (0, i.jsx)(a.$i$, {
      className: _.headerDivider
    }), (0, i.jsxs)(c.Z, {
      className: _.section,
      justify: c.Z.Justify.BETWEEN,
      align: c.Z.Align.CENTER,
      children: [(0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: k ? y.intl.string(y.t.hdneLy) : y.intl.string(y.t.xRCMq6)
      }), (0, i.jsx)(c.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(a.zxk, {
          variant: "critical-primary",
          size: "sm",
          text: y.intl.string(y.t.ebGf4u),
          disabled: !k,
          onClick: R
        })
      })]
    })]
  })
}