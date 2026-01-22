/** Chunk was on 22477 **/
/** chunk id: 547798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk306173 = require("./306173.js"),
  Chunk397927 = require("./397927.js"),
  Chunk787880 = require("./787880.jsx"),
  Chunk796104 = require("./796104.js"),
  Chunk146104 = require("./146104.jsx"),
  Chunk69555 = require("./69555.js"),
  Chunk349435 = require("./349435.js"),
  Chunk674272 = require("./674272.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk559248 = require("./559248.jsx"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk327337 = require("./327337.js"),
  Chunk431804 = require("./431804.js"),
  Chunk229988 = require("./229988.js"),
  Chunk473169 = require("./473169.js");

function _() {
  let e = b.default.getCurrentUser(),
    t = null == e ? true : e.isStaff(),
    l = h.j0.useSetting();
  return (0, a.jsxs)(s.HOs, {
    children: [(0, a.jsx)("div", {
      className: i()(j.N, y.SX),
      children: (0, a.jsx)(f.M, {})
    }), (0, a.jsx)("div", {
      className: i()(j.N, y.QB),
      children: (0, a.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Vibing Wumpus",
        onClick: () => (0, p.A)({
          source: v.y.KEYBIND
        })
      })
    }), (0, a.jsx)("div", {
      className: i()(j.N, y.QB),
      children: (0, a.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Safety Tools Modal",
        onClick: () => {
          let e, t;
          return t = null != (e = x.A.getChannelId()) ? e : "21154681615024128", void(0, s.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("45033"), n.e("46717"), n.e("54105")]).then(n.bind(n, 788099));
            return n => (0, a.jsx)(e, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), a.forEach(function(t) {
                  var a;
                  a = n[t], t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = a
                })
              }
              return e
            }({
              otherUserId: "9876543210",
              channelId: t,
              warningId: "test-warning-id",
              warningType: m._j.INAPPROPRIATE_CONVERSATION_TIER_2
            }, n))
          }, {
            modalKey: g.V
          })
        }
      })
    }), t && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: i()(j.N, y.QB),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Clicker Game",
          onClick: () => (0, d.A)("devtools")
        })
      }), (0, a.jsx)("div", {
        className: i()(j.N, y.QB),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Captcha Test Tool",
          onClick: () => (0, o.g)()
        })
      }), (0, a.jsx)("div", {
        className: i()(j.N, y.QB),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset Hang Status State",
          onClick: u.B7
        })
      }), (0, a.jsx)("div", {
        className: i()(j.N, y.QB),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Force libdiscore Crash",
          onClick: r.Oy
        })
      }), (0, a.jsx)("div", {
        className: i()(j.N, y.QB),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset to fake checkpoint",
          onClick: () => (0, c.nX)(true)
        })
      }), (0, a.jsx)("div", {
        className: i()(j.N, y.SX),
        children: (0, a.jsx)(s.dOG, {
          label: "Ignore profile speedbump disabled",
          checked: l,
          onChange: e => h.j0.updateSetting(e)
        })
      })]
    })]
  })
}