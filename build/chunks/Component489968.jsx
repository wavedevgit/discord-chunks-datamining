/** Chunk was on 20501 **/
/** chunk id: 489968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk608787 = require("./608787.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk522474 = require("./522474.js"),
  Chunk788983 = require("./788983.js"),
  Chunk668826 = require("./668826.js"),
  Chunk120421 = require("./120421.js"),
  Chunk324815 = require("./324815.jsx"),
  Chunk763283 = require("./763283.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199333 = require("./199333.js"),
  Chunk450890 = require("./450890.js"),
  Chunk145133 = require("./145133.js");
let C = (0, Chunk608787.Un)({
  createPromise: () => require.e("67544").then(require.bind(require, 894308)),
  webpackId: 894308,
  name: "ClickerGamePopoutWindow"
});

function O() {
  let e = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.lifetimePoints > 0),
    t = (0, Chunk442837.e7)([Chunk522474.Z], () => Chunk522474.Z.getWindowOpen(Chunk981631.KJ3.CLICKER_GAME)),
    r = () => {
      Chunk788983.bA(Chunk981631.KJ3.CLICKER_GAME, e => (0, i.jsx)(C, {
        windowKey: e
      }), {
        defaultWidth: 854,
        defaultHeight: 768
      })
    },
    O = () => {
      Chunk607070.Z.useReducedMotion ? (0, Chunk481060.ZDy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(require.bind(require, 481060));
        return t => {
          var n, a;
          return (0, i.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, t), a = a = {
            header: x.intl.string(b.default.SvQ1xM),
            confirmText: x.intl.string(b.default.vLz9lJ),
            cancelText: x.intl.string(b.default["+Mgv5O"]),
            onConfirm: r,
            confirmButtonColor: l.zx.Colors.GREEN,
            children: (0, i.jsx)(s.xv, {
              variant: "text-md/normal",
              children: x.intl.string(b.default["v6v/BQ"])
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
          }), n))
        }
      }) : Chunk608787()
    };
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk199333.container,
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk199333.backgroundOverlay
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk199333.mainContent,
      children: [(0, Chunk255367.jsx)("img", {
        src: Chunk450890,
        alt: Chunk388032.intl.string(Chunk603571.default["7qZdOz"])
      }), (0, Chunk255367.jsxs)(Chunk324815.Z, {
        muted: true,
        className: Chunk199333.playButton,
        color: "white",
        disabled: exports,
        onClick: O,
        children: [(0, Chunk255367.jsx)(Chunk763283.Z, {
          color: "always-white",
          variant: "text-lg/bold",
          children: module ? Chunk388032.intl.string(Chunk603571.default.ziFxys) : Chunk388032.intl.string(Chunk603571.default.vLz9lJ)
        }), (0, Chunk255367.jsx)(Chunk763283.Z, {
          color: "always-white",
          variant: "text-xxs/medium",
          children: Chunk388032.intl.string(Chunk603571.default["10J8k5"])
        })]
      }), (0, Chunk255367.jsx)(Chunk324815.Z, {
        muted: true,
        className: Chunk199333.resetButton,
        color: "white",
        disabled: exports || !module,
        onClick: () => {
          (0, Chunk668826.yW)(), O()
        },
        children: (0, Chunk255367.jsx)(Chunk763283.Z, {
          color: "always-white",
          variant: "text-xs/bold",
          children: Chunk388032.intl.string(Chunk603571.default["/A+1UF"])
        })
      })]
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk199333.footer,
      children: [(0, Chunk255367.jsx)(Chunk763283.Z, {
        className: Chunk199333.availability,
        color: "always-white",
        variant: "text-xxs/medium",
        children: Chunk388032.intl.string(Chunk603571.default.eZleys)
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk199333.footerCenter,
        children: (0, Chunk255367.jsx)(Chunk324815.Z, {
          muted: true,
          color: "white",
          href: "https://www.youtube.com/watch?v=h-9SUgIeJnY",
          tag: "a",
          target: "_blank",
          children: (0, Chunk255367.jsx)(Chunk763283.Z, {
            color: "always-white",
            variant: "text-xs/bold",
            children: Chunk388032.intl.string(Chunk603571.default.CQXsEh)
          })
        })
      }), (0, Chunk255367.jsx)("img", {
        src: Chunk145133,
        alt: Chunk388032.intl.string(Chunk603571.default.ABYTMz)
      })]
    })]
  })
}