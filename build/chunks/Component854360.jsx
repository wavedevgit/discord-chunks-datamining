/** Chunk was on 36760 **/
/** chunk id: 854360, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk910693 = require("./910693.js"),
  Chunk501517 = require("./501517.js"),
  Chunk592125 = require("./592125.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk541770 = require("./541770.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  var {
    guildId: t,
    user: n,
    location: j,
    modReportId: h
  } = e, v = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["guildId", "user", "location", "modReportId"]);
  let [P, x] = l.useState(""), [w, C] = l.useState(false), k = (0, s.sE)(t, {
    location: j,
    targetUserId: n.id
  }), {
    isModReportClosed: S,
    isModReport: I
  } = (0, i.cj)([p.Z], () => {
    let e = p.Z.getChannel(h);
    return {
      isModReportClosed: null == e ? true : e.isArchivedThread(),
      isModReport: null == e ? true : e.isModeratorReportChannel()
    }
  }), T = l.useCallback(() => {
    if (c.Z.kickUser(t, n.id, P, h).then(() => {
        w && null != h && u.Z.resolveFlag(h)
      }), k(s.jQ.KICK), null != h) {
      var e;
      null == (e = v.onClose) || e.call(v)
    }
  }, [t, n.id, P, k, h, w, v]), Z = l.useCallback(e => {
    x(e)
  }, []);
  return null != h && I ? (0, r.jsx)(o.Modal, O(y({}, v), {
    title: g.intl.formatToPlainString(g.t["1Ie87u"], {
      user: n.username
    }),
    subtitle: g.intl.format(g.t["/yH0UV"], {
      user: "@".concat(d.ZP.getName(n))
    }),
    actions: [{
      text: g.intl.string(g.t["3glT6e"]),
      onClick: T,
      size: "sm",
      variant: "critical-primary"
    }],
    actionBarInput: S ? true : (0, r.jsx)(a.XZJ, {
      checked: w,
      onChange: e => {
        C(e)
      },
      label: g.intl.string(b.default["8yIKen"])
    }),
    children: (0, r.jsx)(a.Kx8, {
      label: g.intl.string(null != h ? g.t.hmKy8P : g.t["+2QEPj"]),
      maxLength: f.GNZ,
      onChange: Z,
      value: P,
      rows: 2
    })
  })) : (0, r.jsxs)(a.ConfirmModal, O(y({
    header: g.intl.formatToPlainString(g.t["1Ie87u"], {
      user: n.username
    }),
    confirmText: g.intl.string(g.t["3glT6e"]),
    cancelText: g.intl.string(g.t["ETE/oK"]),
    onConfirm: T
  }, v), {
    children: [(0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      className: m.spacing,
      children: g.intl.format(g.t["/yH0UV"], {
        user: "@".concat(d.ZP.getName(n))
      })
    }), (0, r.jsx)("div", {
      className: m.spacing,
      children: (0, r.jsx)(a.Kx8, {
        label: g.intl.string(g.t["+2QEPj"]),
        maxLength: f.GNZ,
        onChange: Z,
        value: P,
        rows: 2
      })
    })]
  }))
}