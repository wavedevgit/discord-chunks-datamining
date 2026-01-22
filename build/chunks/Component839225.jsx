/** Chunk was on 1218 **/
/** chunk id: 839225, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367727 = require("./367727.js"),
  Chunk954571 = require("./954571.js"),
  Chunk871123 = require("./871123.js"),
  Chunk44724 = require("./44724.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk992241 = require("./992241.js"),
  Chunk642785 = require("./642785.js"),
  Chunk78834 = require("./78834.js");

function v(e) {
  n.useEffect(() => {
    b.default.track(x.HAw.OPEN_MODAL, {
      type: "Social Layer Storefront Announcement Modal"
    }), (0, o.d6)(a.M.GAME_SHOP_ANNOUNCEMENT_MODAL, {
      dismissAction: f.i.AUTO_DISMISS
    })
  }, []);
  let t = n.useCallback(() => {
      (0, j.X)({
        guildId: (0, m.zf)()
      })
    }, []),
    {
      onClose: s
    } = e,
    i = n.useCallback(() => {
      (0, j.default)({
        guildId: (0, m.zf)()
      }), s()
    }, [s]);
  return (0, r.jsx)(l.NPJ, {
    theme: u.NJ.DARK,
    children: n => {
      var a, o;
      return (0, r.jsx)(d.dWK, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
            return Object.getOwnPropertyDescriptor(s, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = s[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), o = o = {
        size: "lg",
        children: (0, r.jsxs)("div", {
          className: c()(n, p.Qs),
          children: [(0, r.jsx)("div", {
            className: p.b,
            children: (0, r.jsx)(l.JnF, {
              onClick: s
            })
          }), (0, r.jsx)("div", {
            className: p.xX
          }), (0, r.jsxs)("div", {
            className: p.gn,
            children: [(0, r.jsx)(l.DZT, {
              variant: "display-md",
              color: "text-strong",
              className: p.DD,
              children: h.intl.string(h.t.to0E8U)
            }), (0, r.jsx)(l.DZT, {
              variant: "display-md",
              color: "text-strong",
              className: p.DD,
              children: h.intl.string(h.t.BKEkBd)
            }), (0, r.jsx)(l.DZT, {
              variant: "heading-lg/medium",
              color: "text-muted",
              className: p.VA,
              children: h.intl.string(h.t.SiXpR2)
            })]
          }), (0, r.jsxs)("div", {
            className: p.qT,
            children: [(0, r.jsxs)("div", {
              className: p.N4,
              children: [(0, r.jsx)("div", {
                className: p.AD,
                children: (0, r.jsx)("img", {
                  src: O,
                  alt: ""
                })
              }), (0, r.jsxs)("div", {
                className: p.kh,
                children: [(0, r.jsx)(l.DZT, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: h.intl.string(h.t["5hRbeH"])
                }), (0, r.jsx)(l.EYj, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: h.intl.string(h.t["72sDuh"])
                })]
              })]
            }), (0, r.jsxs)("div", {
              className: p.N4,
              children: [(0, r.jsx)("div", {
                className: p.AD,
                children: (0, r.jsx)("img", {
                  src: g,
                  alt: ""
                })
              }), (0, r.jsxs)("div", {
                className: p.kh,
                children: [(0, r.jsx)(l.DZT, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: h.intl.string(h.t.MO4ASw)
                }), (0, r.jsx)(l.EYj, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  children: h.intl.string(h.t.o4i2Wx)
                })]
              })]
            })]
          }), (0, r.jsx)(l.$nd, {
            variant: "primary",
            text: h.intl.string(h.t.CekBHq),
            onClick: i,
            onMouseDown: t
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          s.push.apply(s, r)
        }
        return s
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
      }), a))
    }
  })
}