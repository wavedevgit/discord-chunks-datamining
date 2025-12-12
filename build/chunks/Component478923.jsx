/** Chunk was on 97652 **/
/** chunk id: 478923, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk1596 = require("./1596.jsx"),
  Chunk681678 = require("./681678.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk240515 = require("./240515.jsx"),
  Chunk858380 = require("./858380.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk230784 = require("./230784.js");

function E(t) {
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

function h(t, e) {
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

function y(t) {
  let {
    user: e,
    onBlock: n,
    onIgnore: i,
    location: o,
    disallowIgnore: c,
    guildId: d,
    channelId: y
  } = t, N = (0, l.e7)([f.Z], () => f.Z.isIgnored(e.id));
  return (0, r.jsxs)("div", {
    className: I.container,
    children: [(0, r.jsxs)("div", {
      className: I.confirmationHeader,
      children: [(0, r.jsxs)("div", {
        className: I.iconContainer,
        children: [(0, r.jsx)(s.qEK, {
          size: s.EFr.SIZE_56,
          src: e.getAvatarURL(true, 64),
          "aria-hidden": true
        }), (0, r.jsx)("div", {
          className: I.icon,
          children: (0, r.jsx)(s.t6m, {})
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/bold",
          color: "text-strong",
          children: b.intl.format(b.t.CIbzHR, {
            username: x.ZP.getName(d, y, e)
          })
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "text-default",
          children: b.intl.string(b.t.S70jou)
        })]
      })]
    }), (0, r.jsx)(a.Z, {}), c || N ? null : (0, r.jsxs)("div", {
      className: I.otherOptions,
      children: [(0, r.jsx)(u.rT, {
        title: b.intl.string(b.t["+BJTcB"]),
        children: (0, r.jsx)(u.JZ, {
          title: b.intl.string(b.t.hC8tcc),
          description: b.intl.string(b.t.If89rE),
          titleVariant: "text-md/medium",
          descriptionVariant: "text-xs/medium",
          buttonText: b.intl.string(b.t.mxJOd9),
          onButtonPress: () => {
            O.default.track(p.rMx.USER_REMEDIATION_ACTION, {
              action: j.l.GOTO_IGNORE,
              location: o
            }), (0, s.pTH)(), (0, s.h7j)(t => (0, r.jsx)(g.default, h(E({}, t), {
              user: e,
              guildId: d,
              channelId: y,
              onIgnore: i,
              onBlock: n,
              location: o
            })))
          }
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        className: I.featureGuide,
        children: b.intl.format(b.t.DJN6eZ, {
          articleLink: m.Z.getArticleURL(p.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE)
        })
      })]
    })]
  })
}

function N(t) {
  var {
    user: e,
    onBlock: n,
    onCancel: l,
    onIgnore: a,
    location: u = "ContextMenu",
    disallowIgnore: f,
    guildId: m,
    channelId: x
  } = t, g = function(t, e) {
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
  }(t, ["user", "onBlock", "onCancel", "onIgnore", "location", "disallowIgnore", "guildId", "channelId"]);
  return i.useLayoutEffect(() => () => {
    O.default.track(p.rMx.USER_REMEDIATION_ACTION, {
      action: j.l.DISMISS_BLOCK,
      location: u
    })
  }, [u]), (0, r.jsx)(s.VoidConfirmModal, h(E({
    confirmText: b.intl.string(b.t.l4Emac),
    cancelText: b.intl.string(b.t["ETE/oC"]),
    onCancel: () => {
      O.default.track(p.rMx.USER_REMEDIATION_ACTION, {
        action: j.l.CANCEL_BLOCK,
        location: u
      }), null == l || l()
    },
    onConfirm: () => {
      null == n || n(), c.Z.blockUser(e.id, {
        location: u
      }).then(() => {
        O.default.track(p.rMx.BLOCK_USER_CONFIRMED), d.Z.showBlockSuccessToast(e.id, null != x ? x : true)
      })
    },
    impression: {
      impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION
    }
  }, g), {
    children: (0, r.jsx)(y, {
      user: e,
      guildId: m,
      channelId: x,
      onBlock: n,
      onIgnore: a,
      disallowIgnore: f
    })
  }))
}