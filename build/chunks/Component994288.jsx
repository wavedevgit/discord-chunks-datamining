/** Chunk was on 28969 **/
/** chunk id: 994288, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk389245 = require("./389245.jsx"),
  Chunk662502 = require("./662502.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk562153 = require("./562153.js"),
  Chunk143547 = require("./143547.jsx"),
  Chunk235627 = require("./235627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk107724 = require("./107724.js");

function I(t) {
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

function E(t, e) {
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

function h(t) {
  let {
    user: e,
    onBlock: n,
    onIgnore: i,
    location: o,
    disallowIgnore: c,
    guildId: d,
    channelId: h
  } = t, N = (0, l.bG)([f.A], () => f.A.isIgnored(e.id));
  return (0, r.jsxs)("div", {
    className: y.kL,
    children: [(0, r.jsxs)("div", {
      className: y.RS,
      children: [(0, r.jsxs)("div", {
        className: y.zc,
        children: [(0, r.jsx)(s.euF, {
          size: s._3J.SIZE_56,
          src: e.getAvatarURL(true, 64),
          "aria-hidden": true
        }), (0, r.jsx)("div", {
          className: y.Kk,
          children: (0, r.jsx)(s.KTN, {})
        })]
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/bold",
          color: "text-strong",
          children: b.intl.format(b.t.CIbzHR, {
            username: m.Ay.getName(d, h, e)
          })
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "text-default",
          children: b.intl.string(b.t.S70jou)
        })]
      })]
    }), (0, r.jsx)(a.A, {}), c || N ? null : (0, r.jsxs)("div", {
      className: y.l_,
      children: [(0, r.jsx)(u.Y0, {
        title: b.intl.string(b.t["+BJTcB"]),
        children: (0, r.jsx)(u.PQ, {
          title: b.intl.string(b.t.hC8tcc),
          description: b.intl.string(b.t.If89rE),
          titleVariant: "text-md/medium",
          descriptionVariant: "text-xs/medium",
          buttonText: b.intl.string(b.t.mxJOd9),
          onButtonPress: () => {
            O.default.track(x.HAw.USER_REMEDIATION_ACTION, {
              action: j.p.GOTO_IGNORE,
              location: o
            }), (0, s.s7G)(), (0, s.qfG)(t => (0, r.jsx)(g.default, E(I({}, t), {
              user: e,
              guildId: d,
              channelId: h,
              onIgnore: i,
              onBlock: n,
              location: o
            })))
          }
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        className: y.FV,
        children: b.intl.format(b.t.DJN6eZ, {
          articleLink: p.A.getArticleURL(x.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
        })
      })]
    })]
  })
}

function N(t) {
  let {
    user: e,
    onBlock: n,
    onCancel: l,
    onIgnore: a,
    location: u = "ContextMenu",
    disallowIgnore: f,
    guildId: p,
    channelId: m
  } = t, g = function(t, e) {
    if (null == t) return {};
    var n, r, i, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(t); i < n.length; i++) r = n[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
      return o
    }
    if (o = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
          o = Object.getOwnPropertyNames(t);
        for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
        return i
      }(t, e), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) r = n[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
    return o
  }(t, ["user", "onBlock", "onCancel", "onIgnore", "location", "disallowIgnore", "guildId", "channelId"]);
  return i.useLayoutEffect(() => () => {
    O.default.track(x.HAw.USER_REMEDIATION_ACTION, {
      action: j.p.DISMISS_BLOCK,
      location: u
    })
  }, [u]), (0, r.jsx)(s.VoidConfirmModal, E(I({
    confirmText: b.intl.string(b.t.l4Emac),
    cancelText: b.intl.string(b.t["ETE/oC"]),
    onCancel: () => {
      O.default.track(x.HAw.USER_REMEDIATION_ACTION, {
        action: j.p.CANCEL_BLOCK,
        location: u
      }), null == l || l()
    },
    onConfirm: () => {
      null == n || n(), c.A.blockUser(e.id, {
        location: u
      }).then(() => {
        O.default.track(x.HAw.BLOCK_USER_CONFIRMED), d.A.showBlockSuccessToast(e.id, null != m ? m : true)
      })
    },
    impression: {
      impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION
    }
  }, g), {
    children: (0, r.jsx)(h, {
      user: e,
      guildId: p,
      channelId: m,
      onBlock: n,
      onIgnore: a,
      disallowIgnore: f
    })
  }))
}