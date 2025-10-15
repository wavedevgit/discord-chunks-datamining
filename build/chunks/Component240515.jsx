/** Chunk was on 97652 **/
/** chunk id: 240515, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function h() {
  return (0, Chunk951288.jsxs)(Chunk819557.z, {
    children: [(0, Chunk951288.jsx)(Chunk819557.q, {
      title: Chunk388032.intl.string(Chunk388032.t.ruhGkp),
      description: Chunk388032.intl.string(Chunk388032.t["/FWKKC"]),
      icon: Chunk481060.owK
    }), (0, Chunk951288.jsx)(Chunk819557.q, {
      title: Chunk388032.intl.string(Chunk388032.t.N9v3en),
      description: Chunk388032.intl.string(Chunk388032.t.ddpuJi),
      icon: Chunk481060.owK
    }), (0, Chunk951288.jsx)(Chunk819557.q, {
      title: Chunk388032.intl.string(Chunk388032.t["4ycGEx"]),
      description: Chunk388032.intl.string(Chunk388032.t["5yfN+v"]),
      icon: Chunk481060.d3s
    })]
  })
}

function E(t) {
  var {
    user: e,
    guildId: n,
    channelId: a,
    onIgnore: E,
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
    u.default.track(p.rMx.USER_REMEDIATION_ACTION, {
      action: j.l.DISMISS_IGNORE,
      location: N
    })
  }, [N]), (0, r.jsx)(c.ConfirmModal, I(b({
    confirmText: x.intl.string(x.t.ytCpKi),
    cancelText: x.intl.string(x.t["ETE/oK"]),
    onConfirm: () => {
      null == E || E(), s.Z.ignoreUser(e.id, N, null != a ? a : true), u.default.track(p.rMx.IGNORE_USER_CONFIRMED)
    },
    onCancel: () => {
      u.default.track(p.rMx.USER_REMEDIATION_ACTION, {
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
      className: g.container,
      children: [(0, r.jsxs)("div", {
        className: g.confirmationHeader,
        children: [(0, r.jsxs)("div", {
          className: g.iconContainer,
          children: [(0, r.jsx)(c.qEK, {
            size: c.EFr.SIZE_56,
            src: e.getAvatarURL(true, 64),
            "aria-hidden": true
          }), (0, r.jsx)("div", {
            className: g.icon,
            children: (0, r.jsx)(c.kZF, {})
          })]
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: x.intl.format(x.t["WrQD/f"], {
              username: O.ZP.getName(n, a, e)
            })
          }), (0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-secondary",
            children: x.intl.string(x.t.JKL1u7)
          })]
        })]
      }), (0, r.jsx)(h, {}), (0, r.jsxs)("div", {
        className: g.otherOptions,
        children: [(0, r.jsx)(d.rT, {
          title: x.intl.string(x.t["1v01go"]),
          children: (0, r.jsx)(d.JZ, {
            title: x.intl.string(x.t.bwxY39),
            description: x.intl.string(x.t.NTnf1d),
            titleVariant: "text-md/medium",
            descriptionVariant: "text-xs/medium",
            buttonText: x.intl.string(x.t.QdfUHB),
            onButtonPress: () => {
              u.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                action: j.l.GOTO_BLOCK,
                location: N
              }), (0, c.pTH)(), (0, c.h7j)(t => (0, r.jsx)(m.default, I(b({}, t), {
                user: e,
                guildId: n,
                channelId: a,
                onBlock: y,
                onIgnore: E,
                location: N
              })))
            }
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          className: g.featureGuide,
          children: x.intl.format(x.t.Hjvqr6, {
            articleLink: f.Z.getArticleURL(p.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
          })
        })]
      })]
    })
  }))
}