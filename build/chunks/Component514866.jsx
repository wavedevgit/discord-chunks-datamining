/** Chunk was on 22979 **/
/** chunk id: 514866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk668757 = require("./668757.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110478 = require("./110478.jsx"),
  Chunk515970 = require("./515970.js"),
  Chunk840767 = require("./840767.jsx"),
  Chunk906605 = require("./906605.js"),
  Chunk359119 = require("./359119.js"),
  Chunk423932 = require("./423932.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk306052 = require("./306052.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk134612 = require("./134612.js"),
  Chunk407383 = require("./407383.js"),
  Chunk293717 = require("./293717.js"),
  Chunk478411 = require("./478411.js");

function C() {
  let e = b.default.getCurrentUser(),
    t = null == e ? true : e.isStaff(),
    r = h.Rt.useSetting();
  return (0, a.jsxs)(s.Ttm, {
    children: [(0, a.jsx)("div", {
      className: i()(j.buttonsContainer, y.marginBottom20),
      children: (0, a.jsx)(f.g, {
        isDevTools: true
      })
    }), (0, a.jsx)("div", {
      className: i()(j.buttonsContainer, y.marginBottom8),
      children: (0, a.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Vibing Wumpus",
        onClick: () => (0, p.Z)({
          source: v.I.KEYBIND
        })
      })
    }), (0, a.jsx)("div", {
      className: i()(j.buttonsContainer, y.marginBottom8),
      children: (0, a.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Safety Tools Modal",
        onClick: () => (() => {
          let e = x.Z.getChannelId(),
            t = null != e ? e : "21154681615024128";
          (0, s.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("37031"), n.e("89650"), n.e("98932")]).then(n.bind(n, 611446));
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
              warningType: m.pj.INAPPROPRIATE_CONVERSATION_TIER_2
            }, n))
          }, {
            modalKey: g.X_
          })
        })()
      })
    }), t && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: i()(j.buttonsContainer, y.marginBottom8),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Clicker Game",
          onClick: () => (0, d.Z)("devtools")
        })
      }), (0, a.jsx)("div", {
        className: i()(j.buttonsContainer, y.marginBottom8),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Captcha Test Tool",
          onClick: () => (0, o.N)()
        })
      }), (0, a.jsx)("div", {
        className: i()(j.buttonsContainer, y.marginBottom8),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset Hang Status State",
          onClick: u.YU
        })
      }), (0, a.jsx)("div", {
        className: i()(j.buttonsContainer, y.marginBottom8),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Force libdiscore Crash",
          onClick: l.$R
        })
      }), (0, a.jsx)("div", {
        className: i()(j.buttonsContainer, y.marginBottom8),
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset to fake checkpoint",
          onClick: () => (0, c.pg)(true)
        })
      }), (0, a.jsx)("div", {
        className: i()(j.buttonsContainer, y.marginBottom20),
        children: (0, a.jsx)(s.rsf, {
          label: "Ignore profile speedbump disabled",
          checked: r,
          onChange: e => h.Rt.updateSetting(e)
        })
      })]
    })]
  })
}