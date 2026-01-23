/** Chunk was on web.js **/
/** chunk id: 367232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk376304 = require("./376304.js"),
  Chunk201275 = require("./201275.js"),
  Chunk386784 = require("./386784.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk287809 = require("./287809.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk489414 = require("./489414.js"),
  Chunk289770 = require("./289770.js"),
  Chunk247818 = require("./247818.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk794998 = require("./794998.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e) {
  let t = (0, m.jc)(),
    n = null == t ? true : t.channelId,
    v = d.A.getChannel(n),
    I = p.A.getGuild(null == v ? true : v.getGuildId()),
    S = (0, c.A)(null == I ? true : I.id, E.S$),
    T = t => (0, E.YV)(e.type, t, n),
    C = (e, t) => {
      let n = t === y.p6.PILL_ICON_SIZE;
      if ((null == e ? true : e.type) === g.iw.USER) {
        let i = h.default.getUser(e.value);
        if (null == i) return;
        return (0, r.jsx)(a.euF, {
          size: n ? a._3J.SIZE_16 : a._3J.SIZE_24,
          src: i.getAvatarURL(null == I ? true : I.id, t),
          status: n ? null : _.A.getStatus(i.id),
          "aria-hidden": true
        })
      }
      if ((null == e ? true : e.type) === g.iw.ROLE) {
        var i;
        let n = null != I ? f.A.getRole(I.id, e.value) : true;
        if (null == n || null == I) return;
        let s = (0, o.fm)(I, n) ? (0, l.ox)(n, t) : null;
        return null != s ? (0, r.jsx)(u.A, A({}, s)) : (0, r.jsx)(a.iTF, {
          size: "custom",
          color: null != (i = n.colorString) ? i : b.TpD,
          height: t,
          width: t
        })
      }
    },
    N = e => {
      let t = null;
      if (e.type === g.iw.USER) {
        let n = h.default.getUser(e.value);
        null != n && (t = (0, r.jsx)(s.A, {
          className: O.Tc,
          usernameClass: O.Xh,
          discriminatorClass: O.D2,
          botClass: O.Od,
          user: n,
          forceUsername: true
        }))
      } else if (e.type === g.iw.ROLE) {
        let n = null != I ? f.A.getRole(I.id, e.value) : true,
          i = null == n ? null : null == S ? true : S[n.id];
        null != i && (t = (0, r.jsxs)("div", {
          className: O.Ly,
          children: [(0, r.jsx)(a.nys, {
            size: "sm",
            color: "currentColor",
            className: O.jh
          }), (0, r.jsx)("span", {
            className: O.NT,
            children: i
          })]
        }))
      }
      return (0, r.jsxs)("span", {
        className: O.Pf,
        children: [(0, r.jsx)("span", {
          className: O.QK,
          children: e.label
        }), t]
      })
    },
    R = i.useMemo(() => (0, E.iA)(e.defaultValues, null == I ? true : I.id), [e.defaultValues, I]);
  return (0, r.jsx)(y.Ay, {
    selectActionComponent: e,
    queryOptions: T,
    renderIcon: C,
    renderOptionLabel: N,
    defaultValues: R
  })
}