/** Chunk was on 64935 **/
/** chunk id: 996522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk143413 = require("./143413.js"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js"),
  Chunk321045 = require("./321045.js"),
  Chunk456874 = require("./456874.js"),
  Chunk707539 = require("./707539.js"),
  Chunk519397 = require("./519397.jsx"),
  Chunk747926 = require("./747926.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk868320 = require("./868320.js");

function A(e) {
  let {
    message: t,
    compact: n
  } = e, i = (0, a.bG)([u.A], () => u.A.getChannel(d.default.castMessageIdAsChannelId(t.id)));
  return null == i ? null : (0, r.jsx)(v, {
    channel: i,
    compact: n,
    isSystemMessage: (0, c.A)(t)
  })
}

function v(e) {
  var t, i;
  let c, u, d, {
      channel: A,
      compact: v,
      isSystemMessage: O
    } = e,
    x = (0, a.bG)([m.A], () => m.A.getCount(A.id)),
    E = (t = A, c = (0, a.bG)([m.A], () => m.A.getMostRecentMessage(t.id)), u = (0, a.bG)([m.A], () => m.A.getCount(t.id)), d = (0, f.JO)(t), (null == (i = t.threadMetadata) ? true : i.archived) ? b.intl.string(b.t.ZTo4HS) : null == u || 0 === u ? b.intl.string(b.t.HYtNyE) : null == c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("span", {
        children: b.intl.string(b.t.ZTo4HS)
      }), (0, r.jsx)("span", {
        className: y.vE,
        children: (0, f.aK)(d)
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.A, {
        message: c,
        channel: t
      }), (0, r.jsx)("span", {
        className: y.vE,
        children: (0, f.aK)(d)
      })]
    })),
    j = null != x && x > 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(y.GI, {
        [y.E]: !v,
        [y.E_]: O
      })
    }), (0, r.jsx)(s.DUT, {
      onClick: function(e) {
        e.stopPropagation(), (0, _.JA)(A, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === h.Ks6.SPACE || e.which === h.Ks6.ENTER) && (e.preventDefault(), (t || n) && (0, _.JA)(A, n))
      },
      onContextMenu: function(e) {
        (0, o.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99011"), n.e("88974"), n.e("86901")]).then(n.bind(n, 44536));
          return t => (0, r.jsx)(e, function(e) {
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
          }({
            channel: A
          }, t))
        })
      },
      "aria-roledescription": b.intl.string(b.t["8ipxiY"]),
      className: l()(y.kL, {
        [y.og]: O
      }),
      children: (0, r.jsxs)(s.RDc, {
        children: [(0, r.jsxs)("div", {
          className: y.kq,
          children: [(0, r.jsx)(s.AC4, {
            children: b.intl.string(b.t["7Xm5QI"])
          }), (0, r.jsx)("span", {
            className: y.UU,
            children: A.name
          }), (0, r.jsx)("span", {
            className: y.lO,
            "aria-hidden": !j,
            children: (0, p.ub)(x, A.id)
          })]
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          "aria-hidden": true,
          lineClamp: 1,
          color: "text-default",
          className: y.sb,
          children: E
        })]
      })
    })]
  })
}