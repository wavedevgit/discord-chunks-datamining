/** Chunk was on 36760 **/
/** chunk id: 854360, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
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

function h(e) {
  var {
    guildId: t,
    user: n,
    location: h,
    modReportId: v
  } = e, x = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["guildId", "user", "location", "modReportId"]);
  let [P, C] = i.useState(""), [w, k] = i.useState(false), S = (0, u.sE)(t, {
    location: h,
    targetUserId: n.id
  }), {
    isModReportClosed: I,
    isModReport: T
  } = (0, l.cj)([d.Z], () => {
    let e = d.Z.getChannel(v);
    return {
      isModReportClosed: null == e ? true : e.isArchivedThread(),
      isModReport: null == e ? true : e.isModeratorReportChannel()
    }
  }), E = i.useCallback(() => {
    if (c.Z.kickUser(t, n.id, P, v).then(() => {
        w && null != v && p.Z.resolveFlag(v)
      }), S(u.jQ.KICK), null != v) {
      var e;
      null == (e = x.onClose) || e.call(x)
    }
  }, [t, n.id, P, S, v, w, x]), N = i.useCallback(e => {
    C(e)
  }, []);
  return null != v && T ? (0, r.jsx)(o.Modal, O(y({}, x), {
    title: b.intl.formatToPlainString(b.t["1Ie87u"], {
      user: n.username
    }),
    subtitle: b.intl.format(b.t["/yH0UV"], {
      user: "@".concat(g.ZP.getName(n))
    }),
    actions: [{
      text: b.intl.string(b.t["3glT6e"]),
      onClick: E,
      size: "sm",
      variant: "critical-primary"
    }],
    actionBarInput: I ? true : (0, r.jsx)(a.$q, {
      value: w,
      onChange: (e, t) => {
        k(t)
      },
      children: b.intl.string(m.default["8yIKen"])
    }),
    children: (0, r.jsx)(s.xJW, {
      titleClassName: j.title,
      title: b.intl.string(null != v ? b.t.hmKy8P : b.t["+2QEPj"]),
      className: j.spacing,
      children: (0, r.jsx)(s.Kx8, {
        maxLength: f.GNZ,
        onChange: N,
        value: P,
        rows: 2
      })
    })
  })) : (0, r.jsxs)(s.ConfirmModal, O(y({
    header: b.intl.formatToPlainString(b.t["1Ie87u"], {
      user: n.username
    }),
    confirmText: b.intl.string(b.t["3glT6e"]),
    cancelText: b.intl.string(b.t["ETE/oK"]),
    onConfirm: E
  }, x), {
    children: [(0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      className: j.spacing,
      children: b.intl.format(b.t["/yH0UV"], {
        user: "@".concat(g.ZP.getName(n))
      })
    }), (0, r.jsx)(s.xJW, {
      title: b.intl.string(b.t["+2QEPj"]),
      className: j.spacing,
      children: (0, r.jsx)(s.Kx8, {
        maxLength: f.GNZ,
        onChange: N,
        value: P,
        rows: 2
      })
    })]
  }))
}