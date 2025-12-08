/** Chunk was on 97652 **/
/** chunk id: 240515, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk478923 = require("./478923.jsx"),
  Chunk858380 = require("./858380.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk230784 = require("./230784.js");

function b(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function I(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function E() {
  return (0, Chunk54381.jsxs)(Chunk819557.z, {
    children: [(0, Chunk54381.jsx)(Chunk819557.q, {
      title: Chunk388032.intl.string(Chunk388032.t.ruhGkg),
      description: Chunk388032.intl.string(Chunk388032.t["/FWKKC"]),
      icon: Chunk481060.owK
    }), (0, Chunk54381.jsx)(Chunk819557.q, {
      title: Chunk388032.intl.string(Chunk388032.t.N9v3eq),
      description: Chunk388032.intl.string(Chunk388032.t.ddpuJg),
      icon: Chunk481060.owK
    }), (0, Chunk54381.jsx)(Chunk819557.q, {
      title: Chunk388032.intl.string(Chunk388032.t["4ycGE0"]),
      description: Chunk388032.intl.string(Chunk388032.t["5yfN+o"]),
      icon: Chunk481060.d3s
    })]
  })
}

function h(t) {
  var {
    user: e,
    guildId: n,
    channelId: a,
    onIgnore: h,
    onBlock: y,
    location: N = "ContextMenu"
  } = t, v = function(t, e) {
    if (null == t) return {};
    var n, r, i = function(t, e) {
      if (null == t) return {};
      var n, r, i = {},
        o = Object.keys(t);
      for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
    }
    return i
  }(t, ["user", "guildId", "channelId", "onIgnore", "onBlock", "location"]);
  return i.useLayoutEffect(() => () => {
    u.default.track(x.rMx.USER_REMEDIATION_ACTION, {
      action: j.l.DISMISS_IGNORE,
      location: N
    })
  }, [N]), (0, r.jsx)(c.VoidConfirmModal, I(b({
    confirmText: g.intl.string(g.t.ytCpKs),
    cancelText: g.intl.string(g.t["ETE/oC"]),
    onConfirm: () => {
      null == h || h(), s.Z.ignoreUser(e.id, N, null != a ? a : true), u.default.track(x.rMx.IGNORE_USER_CONFIRMED)
    },
    onCancel: () => {
      u.default.track(x.rMx.USER_REMEDIATION_ACTION, {
        action: j.l.CANCEL_IGNORE,
        location: N
      })
    },
    impression: {
      impressionName: o.ImpressionNames.IGNORE_USER_CONFIRMATION
    },
    confirmButtonColor: l.zx.Colors.BRAND
  }, v), {
    children: (0, r.jsxs)("div", {
      className: p.container,
      children: [(0, r.jsxs)("div", {
        className: p.confirmationHeader,
        children: [(0, r.jsxs)("div", {
          className: p.iconContainer,
          children: [(0, r.jsx)(c.qEK, {
            size: c.EFr.SIZE_56,
            src: e.getAvatarURL(true, 64),
            "aria-hidden": true
          }), (0, r.jsx)("div", {
            className: p.icon,
            children: (0, r.jsx)(c.kZF, {})
          })]
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: g.intl.format(g.t["WrQD/Y"], {
              username: O.ZP.getName(n, a, e)
            })
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-default",
            children: g.intl.string(g.t.JKL1u1)
          })]
        })]
      }), (0, r.jsx)(E, {}), (0, r.jsxs)("div", {
        className: p.otherOptions,
        children: [(0, r.jsx)(d.rT, {
          title: g.intl.string(g.t["1v01gh"]),
          children: (0, r.jsx)(d.JZ, {
            title: g.intl.string(g.t.bwxY30),
            description: g.intl.string(g.t.NTnf1T),
            titleVariant: "text-md/medium",
            descriptionVariant: "text-xs/medium",
            buttonText: g.intl.string(g.t.QdfUHE),
            onButtonPress: () => {
              u.default.track(x.rMx.USER_REMEDIATION_ACTION, {
                action: j.l.GOTO_BLOCK,
                location: N
              }), (0, c.pTH)(), (0, c.h7j)(t => (0, r.jsx)(m.default, I(b({}, t), {
                user: e,
                guildId: n,
                channelId: a,
                onBlock: y,
                onIgnore: h,
                location: N
              })))
            }
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          className: p.featureGuide,
          children: g.intl.format(g.t.Hjvqr6, {
            articleLink: f.Z.getArticleURL(x.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
          })
        })]
      })]
    })
  }))
}