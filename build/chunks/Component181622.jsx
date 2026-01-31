/** Chunk was on 66139 **/
/** chunk id: 181622, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ForwardFailedAlertModal: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk255266 = require("./255266.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk294454 = require("./294454.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk655412 = require("./655412.js");

function E(e) {
  let {
    icon: t,
    label: r
  } = e;
  return (0, n.jsxs)("div", {
    className: b.us,
    children: [t, (0, n.jsx)(s.Text, {
      className: b.Pf,
      variant: "text-md/medium",
      lineClamp: 1,
      children: r
    })]
  })
}

function L(e) {
  let {
    channel: t
  } = e, r = (0, o.Ay)(t);
  return (0, n.jsx)(E, {
    icon: (0, n.jsx)(u.A, {
      "aria-hidden": true,
      size: s._3J.SIZE_32,
      channel: t
    }),
    label: r
  })
}

function g(e) {
  let {
    user: t
  } = e, r = d.Ay.useName(t), l = (0, a.bG)([p.A], () => p.A.getNickname(t.id)), i = (0, a.bG)([h.A], () => h.A.getStatus(t.id));
  return (0, n.jsx)(E, {
    icon: (0, n.jsx)(c.A, {
      "aria-hidden": true,
      size: s._3J.SIZE_32,
      user: t,
      status: i
    }),
    label: null != l ? l : r
  })
}

function P(e) {
  let {
    channel: t
  } = e, r = (0, a.bG)([f.A], () => f.A.getGuild(null == t ? true : t.guild_id)), l = (0, o.Ay)(t);
  return (0, n.jsx)(E, {
    icon: (0, n.jsx)(A.A, {
      size: A.q.SMALL_32,
      guild: r,
      channel: t
    }),
    label: l
  })
}

function N(e) {
  let {
    destination: t
  } = e, {
    channel: r,
    user: l
  } = (0, a.cf)([_.A, I.default], () => ({
    channel: "channel" === t.type ? _.A.getChannel(t.id) : null,
    user: "user" === t.type ? I.default.getUser(t.id) : null
  }));
  return (null == r ? true : r.isGroupDM()) ? (0, n.jsx)(L, {
    channel: r
  }) : null != l ? (0, n.jsx)(g, {
    user: l
  }) : null != r ? (0, n.jsx)(P, {
    channel: r
  }) : null
}

function j(e) {
  var t, r;
  let {
    message: a,
    failedDestinations: s,
    forwardOptions: c
  } = e, o = function(e, t) {
    if (null == e) return {};
    var r, n, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["message", "failedDestinations", "forwardOptions"]), u = l.useCallback(() => {
    (0, O.fO)({
      message: a,
      source: "retry-modal",
      initialSelectedDestinations: s,
      forwardOptions: c
    })
  }, [s, a, c]);
  return (0, n.jsx)(i.ConfirmModal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    title: y.intl.string(y.t["/OPIaM"]),
    subtitle: y.intl.format(y.t.cn9vFb, {
      count: s.length
    }),
    confirmText: y.intl.string(y.t["5911Lb"]),
    onConfirm: u
  }, o), r = r = {
    variant: "primary",
    children: (0, n.jsx)("div", {
      className: b.Zc,
      children: s.map((e, t) => (0, n.jsx)(N, {
        destination: e
      }, t))
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}