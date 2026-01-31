/** Chunk was on 62624 **/
/** chunk id: 324785, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk504049 = require("./504049.js"),
  Chunk734057 = require("./734057.js"),
  Chunk427262 = require("./427262.js"),
  Chunk226698 = require("./226698.js"),
  Chunk652215 = require("./652215.js"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk544800 = require("./544800.js");

function O(e) {
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

function h(e) {
  let {
    guildId: t,
    user: r,
    location: h,
    modReportId: j
  } = e, v = function(e, t) {
    if (null == e) return {};
    var r, n, l, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(e, ["guildId", "user", "location", "modReportId"]), [w, P] = l.useState(""), [C, x] = l.useState(false), k = (0, s.$9)(t, {
    location: h,
    targetUserId: r.id
  }), {
    isModReportClosed: I,
    isModReport: E
  } = (0, i.cf)([u.A], () => {
    let e = u.A.getChannel(j);
    return {
      isModReportClosed: null == e ? true : e.isArchivedThread(),
      isModReport: null == e ? true : e.isModeratorReportChannel()
    }
  }), S = l.useCallback(() => {
    if (c.A.kickUser(t, r.id, w, j).then(() => {
        C && null != j && f.A.resolveFlag(j)
      }), k(s.Nj.KICK), null != j) {
      var e;
      null == (e = v.onClose) || e.call(v)
    }
  }, [t, r.id, w, k, j, C, v]), T = l.useCallback(e => {
    P(e)
  }, []);
  return null != j && E ? (0, n.jsx)(o.Modal, m(O({}, v), {
    title: d.intl.formatToPlainString(d.t["1Ie87p"], {
      user: r.username
    }),
    subtitle: d.intl.format(d.t["/yH0UT"], {
      user: "@".concat(p.Ay.getName(r))
    }),
    actions: [{
      text: d.intl.string(d.t["3glT6Z"]),
      onClick: S,
      size: "sm",
      variant: "critical-primary"
    }],
    actionBarInput: I ? true : (0, n.jsx)(a.Checkbox, {
      checked: C,
      onChange: e => {
        x(e)
      },
      label: d.intl.string(y.default["8yIKem"])
    }),
    children: (0, n.jsx)(a.fs1, {
      label: d.intl.string(null != j ? d.t.hmKy8E : d.t["+2QEPt"]),
      maxLength: b.hlA,
      onChange: T,
      value: w,
      rows: 2
    })
  })) : (0, n.jsx)(o.ConfirmModal, m(O({
    title: d.intl.formatToPlainString(d.t["1Ie87p"], {
      user: r.username
    }),
    subtitle: d.intl.format(d.t["/yH0UT"], {
      user: "@".concat(p.Ay.getName(r))
    }),
    confirmText: d.intl.string(d.t["3glT6Z"]),
    cancelText: d.intl.string(d.t["ETE/oC"]),
    onConfirm: S
  }, v), {
    children: (0, n.jsx)("div", {
      className: g.Y,
      children: (0, n.jsx)(a.fs1, {
        label: d.intl.string(d.t["+2QEPt"]),
        maxLength: b.hlA,
        onChange: T,
        value: w,
        rows: 2
      })
    })
  }))
}