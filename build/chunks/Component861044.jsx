/** Chunk was on 21738 **/
/** chunk id: 861044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk299619 = require("./299619.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk854987 = require("./854987.js"),
  Chunk222713 = require("./222713.js"),
  Chunk146104 = require("./146104.jsx"),
  Chunk612082 = require("./612082.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk49999 = require("./49999.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk123406 = require("./123406.js"),
  Chunk844636 = require("./844636.js"),
  Chunk966508 = require("./966508.js");

function E(e) {
  var t, n;
  let {
    markAsDismissed: E
  } = e, O = u.g[f.P7.WELCOME], y = (0, a.rdh)(O.primaryColor).hex(), I = (0, l.bG)([s.A], () => s.A.useReducedMotion);
  return (0, r.jsx)(c.P.Provider, {
    value: (t = function(e) {
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
    }({}, O), n = n = {
      backgroundOverlayColor: O.primaryColor
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t),
    children: (0, r.jsx)(o.Ay, {
      children: (0, r.jsxs)("div", {
        className: m.kL,
        style: {
          backgroundImage: "url(".concat(_.A, "), linear-gradient(").concat(y, "80, black)"),
          borderColor: y,
          boxShadow: "0 0 15px 5px ".concat(y, "50")
        },
        children: [(0, r.jsx)(i.A, {
          autoPlay: !I,
          muted: true,
          playsInline: true,
          loop: true,
          className: m.wm,
          children: (0, r.jsx)("source", {
            src: b.A,
            type: "video/webm"
          })
        }), (0, r.jsxs)("div", {
          className: m.FS,
          children: [(0, r.jsx)(a.Text, {
            variant: "display-sm",
            style: {
              color: y
            },
            className: m.Vy,
            children: g.intl.string(A.default["CdU/PF"])
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            style: {
              color: y
            },
            children: g.intl.string(A.default["M/LvW0"])
          }), (0, r.jsx)(a.DUT, {
            className: m.r,
            onClick: () => E(h.i.DISMISS),
            style: {
              color: y
            },
            children: (0, r.jsx)(a.Text, {
              variant: "text-xxs/normal",
              style: {
                color: y
              },
              children: g.intl.string(g.t.WAI6xu)
            })
          })]
        }), (0, r.jsx)(p.A, {
          className: m.vk,
          contentClassName: m.x6,
          onClick: () => {
            (0, d.A)("coachmark"), E(h.i.TAKE_ACTION)
          },
          children: (0, r.jsx)(a.KS6, {
            color: y,
            size: "sm"
          })
        })]
      })
    })
  })
}