/** Chunk was on 20941 **/
/** chunk id: 367232, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
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

function C(e) {
  let t = (0, b.jc)(),
    n = null == t ? true : t.channelId,
    C = d.A.getChannel(n),
    _ = f.A.getGuild(null == C ? true : C.getGuildId()),
    A = (0, c.A)(null == _ ? true : _.id, x.S$),
    O = l.useMemo(() => (0, x.iA)(e.defaultValues, null == _ ? true : _.id), [e.defaultValues, _]);
  return (0, r.jsx)(y.Ay, {
    selectActionComponent: e,
    queryOptions: t => (0, x.YV)(e.type, t, n),
    renderIcon: (e, t) => {
      let n = t === y.p6.PILL_ICON_SIZE;
      if ((null == e ? true : e.type) === g.iw.USER) {
        let l = h.default.getUser(e.value);
        if (null == l) return;
        return (0, r.jsx)(a.euF, {
          size: n ? a._3J.SIZE_16 : a._3J.SIZE_24,
          src: l.getAvatarURL(null == _ ? true : _.id, t),
          status: n ? null : p.A.getStatus(l.id),
          "aria-hidden": true
        })
      }
      if ((null == e ? true : e.type) === g.iw.ROLE) {
        var l;
        let n = null != _ ? m.A.getRole(_.id, e.value) : true;
        if (null == n || null == _) return;
        let i = (0, s.fm)(_, n) ? (0, o.ox)(n, t) : null;
        return null != i ? (0, r.jsx)(u.A, function(e) {
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
        }({}, i)) : (0, r.jsx)(a.iTF, {
          size: "custom",
          color: null != (l = n.colorString) ? l : v.TpD,
          height: t,
          width: t
        })
      }
    },
    renderOptionLabel: e => {
      let t = null;
      if (e.type === g.iw.USER) {
        let n = h.default.getUser(e.value);
        null != n && (t = (0, r.jsx)(i.A, {
          className: j.Tc,
          usernameClass: j.Xh,
          discriminatorClass: j.D2,
          botClass: j.Od,
          user: n,
          forceUsername: true
        }))
      } else if (e.type === g.iw.ROLE) {
        let n = null != _ ? m.A.getRole(_.id, e.value) : true,
          l = null == n ? null : null == A ? true : A[n.id];
        null != l && (t = (0, r.jsxs)("div", {
          className: j.Ly,
          children: [(0, r.jsx)(a.nys, {
            size: "sm",
            color: "currentColor",
            className: j.jh
          }), (0, r.jsx)("span", {
            className: j.NT,
            children: l
          })]
        }))
      }
      return (0, r.jsxs)("span", {
        className: j.Pf,
        children: [(0, r.jsx)("span", {
          className: j.QK,
          children: e.label
        }), t]
      })
    },
    defaultValues: O
  })
}