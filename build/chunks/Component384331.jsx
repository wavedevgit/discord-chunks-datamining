/** Chunk was on 86590 **/
/** chunk id: 384331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardFailedAlertModal: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk810123 = require("./810123.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk296719 = require("./296719.js");

function S(e) {
  let {
    icon: t,
    label: n
  } = e;
  return (0, i.jsxs)("div", {
    className: y.failedRow,
    children: [t, (0, i.jsx)(s.Text, {
      className: y.label,
      variant: "text-md/medium",
      lineClamp: 1,
      children: n
    })]
  })
}

function O(e) {
  let {
    channel: t
  } = e, n = (0, o.ZP)(t);
  return (0, i.jsx)(S, {
    icon: (0, i.jsx)(u.Z, {
      "aria-hidden": true,
      size: s.EFr.SIZE_32,
      channel: t,
      experimentLocation: "forward-failed-retry-modal"
    }),
    label: n
  })
}

function h(e) {
  let {
    user: t
  } = e, n = b.ZP.useName(t), r = (0, a.e7)([p.Z], () => p.Z.getNickname(t.id)), l = (0, a.e7)([I.Z], () => I.Z.getStatus(t.id));
  return (0, i.jsx)(S, {
    icon: (0, i.jsx)(c.Z, {
      "aria-hidden": true,
      size: s.EFr.SIZE_32,
      user: t,
      status: l
    }),
    label: null != r ? r : n
  })
}

function m(e) {
  let {
    channel: t
  } = e, n = (0, a.e7)([E.Z], () => E.Z.getGuild(null == t ? true : t.guild_id)), r = (0, o.ZP)(t);
  return (0, i.jsx)(S, {
    icon: (0, i.jsx)(d.Z, {
      size: d.E.SMALL_32,
      guild: n,
      channel: t
    }),
    label: r
  })
}

function L(e) {
  let {
    destination: t
  } = e, {
    channel: n,
    user: r
  } = (0, a.cj)([f.Z, _.default], () => ({
    channel: "channel" === t.type ? f.Z.getChannel(t.id) : null,
    user: "user" === t.type ? _.default.getUser(t.id) : null
  }));
  return (null == n ? true : n.isGroupDM()) ? (0, i.jsx)(O, {
    channel: n
  }) : null != r ? (0, i.jsx)(h, {
    user: r
  }) : null != n ? (0, i.jsx)(m, {
    channel: n
  }) : null
}

function j(e) {
  var t, n, {
      message: a,
      failedDestinations: c,
      forwardOptions: o
    } = e,
    u = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          a = Object.keys(e);
        for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["message", "failedDestinations", "forwardOptions"]);
  let d = r.useCallback(() => {
    (0, A.l8)({
      message: a,
      source: "retry-modal",
      initialSelectedDestinations: c,
      forwardOptions: o
    })
  }, [c, a, o]);
  return (0, i.jsxs)(s.ConfirmModal, (t = function(e) {
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
  }({
    header: g.intl.string(g.t["/OPIaG"]),
    confirmText: g.intl.string(g.t["5911LS"]),
    cancelText: g.intl.string(g.t["ETE/oK"]),
    confirmButtonColor: l.zx.Colors.BRAND,
    onConfirm: d
  }, u), n = n = {
    children: [(0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      children: g.intl.format(g.t.cn9vFR, {
        count: c.length
      })
    }), (0, i.jsx)("div", {
      className: y.failedDestinations,
      children: c.map((e, t) => (0, i.jsx)(L, {
        destination: e
      }, t))
    })]
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