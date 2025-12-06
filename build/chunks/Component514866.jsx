/** Chunk was on 88282 **/
/** chunk id: 514866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
  Chunk517269 = require("./517269.js"),
  Chunk197571 = require("./197571.js");

function _() {
  let e = Chunk594174.default.getCurrentUser(),
    t = null == module ? true : module.isStaff(),
    l = Chunk695346.Rt.useSetting();
  return (0, Chunk54381.jsxs)(Chunk481060.Ttm, {
    children: [(0, Chunk54381.jsx)("div", {
      className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom20),
      children: (0, Chunk54381.jsx)(Chunk306052.g, {
        isDevTools: true
      })
    }), (0, Chunk54381.jsx)("div", {
      className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Vibing Wumpus",
        onClick: () => (0, Chunk423932.Z)()
      })
    }), (0, Chunk54381.jsx)("div", {
      className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Safety Tools Modal",
        onClick: () => (() => {
          let e = Chunk944486.Z.getChannelId(),
            t = null != module ? module : "21154681615024128";
          (0, Chunk481060.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([require.e("37031"), require.e("89650"), require.e("76144")]).then(require.bind(require, 611446));
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
            modalKey: Chunk134612.X_
          })
        })()
      })
    }), exports && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)("div", {
        className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Clicker Game",
          onClick: () => (0, Chunk840767.Z)("devtools")
        })
      }), (0, Chunk54381.jsx)("div", {
        className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Captcha Test Tool",
          onClick: () => (0, Chunk110478.N)()
        })
      }), (0, Chunk54381.jsx)("div", {
        className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset Hang Status State",
          onClick: Chunk906605.YU
        })
      }), (0, Chunk54381.jsx)("div", {
        className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Force libdiscore Crash",
          onClick: Chunk668757.$R
        })
      }), (0, Chunk54381.jsx)("div", {
        className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset to fake checkpoint",
          onClick: () => (0, Chunk515970.pg)(true)
        })
      }), (0, Chunk54381.jsx)("div", {
        className: r()(Chunk517269.buttonsContainer, Chunk197571.marginBottom20),
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Ignore profile speedbump disabled",
          checked: Chunk120356,
          onChange: e => h.Rt.updateSetting(e)
        })
      })]
    })]
  })
}