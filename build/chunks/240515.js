/** Chunk was on 97652 (6e27dfa349424c64.js) **/
r.d(e, {
  default: () => I
});
var n = r(200651),
  i = r(192379),
  o = r(990547),
  c = r(481060),
  s = r(194359),
  a = r(819557),
  l = r(138201),
  d = r(626135),
  u = r(63063),
  f = r(5192),
  O = r(478923),
  m = r(858380),
  N = r(981631),
  p = r(388032),
  j = r(863702);

function x(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = r[e], e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n
    })
  }
  return t
}

function g(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(e)).forEach(function(r) {
    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
  }), t
}

function b() {
  return (0, n.jsxs)(a.z, {
    children: [(0, n.jsx)(a.q, {
      title: p.NW.string(p.t.ruhGkp),
      description: p.NW.string(p.t["/FWKKC"]),
      icon: c.owK
    }), (0, n.jsx)(a.q, {
      title: p.NW.string(p.t.N9v3en),
      description: p.NW.string(p.t.ddpuJi),
      icon: c.owK
    }), (0, n.jsx)(a.q, {
      title: p.NW.string(p.t["4ycGEx"]),
      description: p.NW.string(p.t["5yfN+v"]),
      icon: c.d3s
    })]
  })
}

function I(t) {
  var {
    user: e,
    guildId: r,
    channelId: a,
    onIgnore: I,
    onBlock: h,
    location: E = "ContextMenu"
  } = t, y = function(t, e) {
    if (null == t) return {};
    var r, n, i = function(t, e) {
      if (null == t) return {};
      var r, n, i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (n = 0; n < o.length; n++) r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
    }
    return i
  }(t, ["user", "guildId", "channelId", "onIgnore", "onBlock", "location"]);
  return i.useLayoutEffect(() => () => {
    d.default.track(N.rMx.USER_REMEDIATION_ACTION, {
      action: m.l.DISMISS_IGNORE,
      location: E
    })
  }, [E]), (0, n.jsx)(c.ConfirmModal, g(x({
    confirmText: p.NW.string(p.t.ytCpKi),
    cancelText: p.NW.string(p.t["ETE/oK"]),
    onConfirm: () => {
      null == I || I(), s.Z.ignoreUser(e.id, E, null != a ? a : void 0), d.default.track(N.rMx.IGNORE_USER_CONFIRMED)
    },
    onCancel: () => {
      d.default.track(N.rMx.USER_REMEDIATION_ACTION, {
        action: m.l.CANCEL_IGNORE,
        location: E
      })
    },
    impression: {
      impressionName: o.ImpressionNames.IGNORE_USER_CONFIRMATION
    },
    confirmButtonColor: c.zxk.Colors.BRAND
  }, y), {
    children: (0, n.jsxs)("div", {
      className: j.container,
      children: [(0, n.jsxs)("div", {
        className: j.confirmationHeader,
        children: [(0, n.jsxs)("div", {
          className: j.iconContainer,
          children: [(0, n.jsx)(c.qEK, {
            size: c.EFr.SIZE_56,
            src: e.getAvatarURL(void 0, 64),
            "aria-hidden": !0
          }), (0, n.jsx)("div", {
            className: j.icon,
            children: (0, n.jsx)(c.kZF, {})
          })]
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(c.X6q, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: p.NW.format(p.t["WrQD/f"], {
              username: f.ZP.getName(r, a, e)
            })
          }), (0, n.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-secondary",
            children: p.NW.string(p.t.JKL1u7)
          })]
        })]
      }), (0, n.jsx)(b, {}), (0, n.jsxs)("div", {
        className: j.otherOptions,
        children: [(0, n.jsx)(l.rT, {
          title: p.NW.string(p.t["1v01go"]),
          children: (0, n.jsx)(l.ZP, {
            title: p.NW.string(p.t.bwxY39),
            description: p.NW.string(p.t.NTnf1d),
            titleVariant: "text-md/medium",
            descriptionVariant: "text-xs/medium",
            buttonText: p.NW.string(p.t.QdfUHB),
            buttonColor: c.Ttl.PRIMARY,
            onButtonPress: () => {
              d.default.track(N.rMx.USER_REMEDIATION_ACTION, {
                action: m.l.GOTO_BLOCK,
                location: E
              }), (0, c.pTH)(), (0, c.h7j)(t => (0, n.jsx)(O.default, g(x({}, t), {
                user: e,
                guildId: r,
                channelId: a,
                onBlock: h,
                onIgnore: I,
                location: E
              })))
            }
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          className: j.featureGuide,
          children: p.NW.format(p.t.Hjvqr6, {
            articleLink: u.Z.getArticleURL(N.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
          })
        })]
      })]
    })
  }))
}