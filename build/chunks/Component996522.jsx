/** Chunk was on 92917 **/
/** chunk id: 996522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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

function y(e) {
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
      channel: y,
      compact: v,
      isSystemMessage: x
    } = e,
    O = (0, a.bG)([m.A], () => m.A.getCount(y.id)),
    E = (t = y, c = (0, a.bG)([m.A], () => m.A.getMostRecentMessage(t.id)), u = (0, a.bG)([m.A], () => m.A.getCount(t.id)), d = (0, f.JO)(t), (null == (i = t.threadMetadata) ? true : i.archived) ? b.intl.string(b.t.ZTo4HS) : null == u || 0 === u ? b.intl.string(b.t.HYtNyE) : null == c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("span", {
        children: b.intl.string(b.t.ZTo4HS)
      }), (0, r.jsx)("span", {
        className: A.vE,
        children: (0, f.aK)(d)
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.A, {
        message: c,
        channel: t
      }), (0, r.jsx)("span", {
        className: A.vE,
        children: (0, f.aK)(d)
      })]
    })),
    j = null != O && O > 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(A.GI, {
        [A.E]: !v,
        [A.E_]: x
      })
    }), (0, r.jsx)(s.DUT, {
      onClick: function(e) {
        e.stopPropagation(), (0, h.JA)(y, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === _.Ks6.SPACE || e.which === _.Ks6.ENTER) && (e.preventDefault(), (t || n) && (0, h.JA)(y, n))
      },
      onContextMenu: function(e) {
        (0, o.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99011"), n.e("88974"), n.e("9282")]).then(n.bind(n, 44536));
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
            channel: y
          }, t))
        })
      },
      "aria-roledescription": b.intl.string(b.t["8ipxiY"]),
      className: l()(A.kL, {
        [A.og]: x
      }),
      children: (0, r.jsxs)(s.RDc, {
        children: [(0, r.jsxs)("div", {
          className: A.kq,
          children: [(0, r.jsx)(s.AC4, {
            children: b.intl.string(b.t["7Xm5QI"])
          }), (0, r.jsx)("span", {
            className: A.UU,
            children: y.name
          }), (0, r.jsx)("span", {
            className: A.lO,
            "aria-hidden": !j,
            children: (0, p.ub)(O, y.id)
          })]
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          "aria-hidden": true,
          lineClamp: 1,
          color: "text-default",
          className: A.sb,
          children: E
        })]
      })
    })]
  })
}