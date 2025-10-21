/** Chunk was on 46801 **/
/** chunk id: 854360, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk910693 = require("./910693.js"),
  Chunk501517 = require("./501517.js"),
  Chunk592125 = require("./592125.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk304726 = require("./304726.js"),
  Chunk643627 = require("./643627.js");

function p(e) {
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

function E(e, t) {
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

function m(e) {
  var {
    guildId: t,
    user: n,
    location: m,
    modReportId: y
  } = e, j = function(e, t) {
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
  let [v, h] = l.useState(""), [M, C] = l.useState(false), A = (0, u.sE)(t, {
    location: m,
    targetUserId: n.id
  }), {
    isModReportClosed: S,
    isModReport: P
  } = (0, o.cj)([d.Z], () => {
    let e = d.Z.getChannel(y);
    return {
      isModReportClosed: null == e ? true : e.isArchivedThread(),
      isModReport: null == e ? true : e.isModeratorReportChannel()
    }
  }), T = l.useCallback(() => {
    if (c.Z.kickUser(t, n.id, v, y).then(() => {
        M && null != y && s.Z.resolveFlag(y)
      }), A(u.jQ.KICK), null != y) {
      var e;
      null == (e = j.onClose) || e.call(j)
    }
  }, [t, n.id, v, A, y, M, j]), I = l.useCallback(e => {
    h(e)
  }, []);
  return null != y && P ? (0, r.jsx)(i.Modal, E(p({}, j), {
    title: g.intl.formatToPlainString(g.t["1Ie87u"], {
      user: n.username
    }),
    subtitle: g.intl.format(g.t["/yH0UV"], {
      user: "@".concat(f.ZP.getName(n))
    }),
    actions: [{
      text: g.intl.string(g.t["3glT6e"]),
      onClick: T,
      size: "sm",
      variant: "critical-primary"
    }],
    actionBarInput: S ? true : (0, r.jsx)(a.Checkbox, {
      checked: M,
      onChange: e => {
        C(e)
      },
      label: g.intl.string(b.default["8yIKen"])
    }),
    children: (0, r.jsx)(a.Kx8, {
      label: g.intl.string(null != y ? g.t.hmKy8P : g.t["+2QEPj"]),
      maxLength: _.GNZ,
      onChange: I,
      value: v,
      rows: 2
    })
  })) : (0, r.jsxs)(a.ConfirmModal, E(p({
    header: g.intl.formatToPlainString(g.t["1Ie87u"], {
      user: n.username
    }),
    confirmText: g.intl.string(g.t["3glT6e"]),
    cancelText: g.intl.string(g.t["ETE/oK"]),
    onConfirm: T
  }, j), {
    children: [(0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      className: O.spacing,
      children: g.intl.format(g.t["/yH0UV"], {
        user: "@".concat(f.ZP.getName(n))
      })
    }), (0, r.jsx)("div", {
      className: O.spacing,
      children: (0, r.jsx)(a.Kx8, {
        label: g.intl.string(g.t["+2QEPj"]),
        maxLength: _.GNZ,
        onChange: I,
        value: v,
        rows: 2
      })
    })]
  }))
}