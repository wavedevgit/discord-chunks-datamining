/** Chunk was on 79939 **/
/** chunk id: 495494, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk910693 = require("./910693.js"),
  Chunk592125 = require("./592125.js"),
  Chunk51144 = require("./51144.js"),
  Chunk501517 = require("./501517.js"),
  Chunk981631 = require("./981631.js"),
  Chunk792389 = require("./792389.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk242369 = require("./242369.js");

function h(e) {
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
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function y(e) {
  var {
    guildId: t,
    user: r,
    location: y,
    modReportId: j
  } = e, v = function(e, t) {
    if (null == e) return {};
    var r, n, o = function(e, t) {
      if (null == e) return {};
      var r, n, o = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
  }(e, ["guildId", "user", "location", "modReportId"]);
  let [P, x] = o.useState(""), [C, E] = o.useState(false), w = (0, s.sE)(t, {
    location: y,
    targetUserId: r.id
  }), {
    isModReportClosed: T,
    isModReport: k
  } = (0, i.cj)([u.Z], () => {
    let e = u.Z.getChannel(j);
    return {
      isModReportClosed: null == e ? true : e.isArchivedThread(),
      isModReport: null == e ? true : e.isModeratorReportChannel()
    }
  }), R = o.useCallback(() => {
    if (c.Z.kickUser(t, r.id, P, j).then(() => {
        C && null != j && d.Z.resolveFlag(j)
      }), w(s.jQ.KICK), null != j) {
      var e;
      null == (e = v.onClose) || e.call(v)
    }
  }, [t, r.id, P, w, j, C, v]), S = o.useCallback(e => {
    x(e)
  }, []);
  return null != j && k ? (0, n.jsx)(l.Modal, m(h({}, v), {
    title: b.intl.formatToPlainString(b.t["1Ie87p"], {
      user: r.username
    }),
    subtitle: b.intl.format(b.t["/yH0UT"], {
      user: "@".concat(p.ZP.getName(r))
    }),
    actions: [{
      text: b.intl.string(b.t["3glT6Z"]),
      onClick: R,
      size: "sm",
      variant: "critical-primary"
    }],
    actionBarInput: T ? true : (0, n.jsx)(a.Checkbox, {
      checked: C,
      onChange: e => {
        E(e)
      },
      label: b.intl.string(g.default["8yIKem"])
    }),
    children: (0, n.jsx)(a.Kx8, {
      label: b.intl.string(null != j ? b.t.hmKy8E : b.t["+2QEPt"]),
      maxLength: f.GNZ,
      onChange: S,
      value: P,
      rows: 2
    })
  })) : (0, n.jsxs)(a.VoidConfirmModal, m(h({
    header: b.intl.formatToPlainString(b.t["1Ie87p"], {
      user: r.username
    }),
    confirmText: b.intl.string(b.t["3glT6Z"]),
    cancelText: b.intl.string(b.t["ETE/oC"]),
    onConfirm: R
  }, v), {
    children: [(0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      className: O.spacing,
      children: b.intl.format(b.t["/yH0UT"], {
        user: "@".concat(p.ZP.getName(r))
      })
    }), (0, n.jsx)("div", {
      className: O.spacing,
      children: (0, n.jsx)(a.Kx8, {
        label: b.intl.string(b.t["+2QEPt"]),
        maxLength: f.GNZ,
        onChange: S,
        value: P,
        rows: 2
      })
    })]
  }))
}