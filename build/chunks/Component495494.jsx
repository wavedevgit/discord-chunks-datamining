/** Chunk was on 79939 **/
/** chunk id: 495494, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk797013 = require("./797013.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk582604 = require("./582604.js");

function y(e) {
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

function O(e, t) {
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

function h(e) {
  var {
    guildId: t,
    user: r,
    location: h,
    modReportId: j
  } = e, v = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["guildId", "user", "location", "modReportId"]);
  let [x, P] = l.useState(""), [C, w] = l.useState(false), k = (0, s.sE)(t, {
    location: h,
    targetUserId: r.id
  }), {
    isModReportClosed: T,
    isModReport: S
  } = (0, o.cj)([u.Z], () => {
    let e = u.Z.getChannel(j);
    return {
      isModReportClosed: null == e ? true : e.isArchivedThread(),
      isModReport: null == e ? true : e.isModeratorReportChannel()
    }
  }), Z = l.useCallback(() => {
    if (c.Z.kickUser(t, r.id, x, j).then(() => {
        C && null != j && d.Z.resolveFlag(j)
      }), k(s.jQ.KICK), null != j) {
      var e;
      null == (e = v.onClose) || e.call(v)
    }
  }, [t, r.id, x, k, j, C, v]), E = l.useCallback(e => {
    P(e)
  }, []);
  return null != j && S ? (0, n.jsx)(i.Modal, O(y({}, v), {
    title: b.intl.formatToPlainString(b.t["1Ie87p"], {
      user: r.username
    }),
    subtitle: b.intl.format(b.t["/yH0UT"], {
      user: "@".concat(p.ZP.getName(r))
    }),
    actions: [{
      text: b.intl.string(b.t["3glT6Z"]),
      onClick: Z,
      size: "sm",
      variant: "critical-primary"
    }],
    actionBarInput: T ? true : (0, n.jsx)(a.Checkbox, {
      checked: C,
      onChange: e => {
        w(e)
      },
      label: b.intl.string(g.default["8yIKem"])
    }),
    children: (0, n.jsx)(a.Kx8, {
      label: b.intl.string(null != j ? b.t.hmKy8E : b.t["+2QEPt"]),
      maxLength: f.GNZ,
      onChange: E,
      value: x,
      rows: 2
    })
  })) : (0, n.jsxs)(a.ConfirmModal, O(y({
    header: b.intl.formatToPlainString(b.t["1Ie87p"], {
      user: r.username
    }),
    confirmText: b.intl.string(b.t["3glT6Z"]),
    cancelText: b.intl.string(b.t["ETE/oC"]),
    onConfirm: Z
  }, v), {
    children: [(0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      className: m.spacing,
      children: b.intl.format(b.t["/yH0UT"], {
        user: "@".concat(p.ZP.getName(r))
      })
    }), (0, n.jsx)("div", {
      className: m.spacing,
      children: (0, n.jsx)(a.Kx8, {
        label: b.intl.string(b.t["+2QEPt"]),
        maxLength: f.GNZ,
        onChange: E,
        value: x,
        rows: 2
      })
    })]
  }))
}