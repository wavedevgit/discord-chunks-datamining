/** Chunk was on web.js **/
/** chunk id: 554042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk918222 = require("./918222.js"),
  Chunk607070 = require("./607070.js"),
  Chunk304761 = require("./304761.js"),
  Chunk865427 = require("./865427.js"),
  Chunk358085 = require("./358085.js"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759315 = require("./759315.js");
let y = [{
  label: "Latin alphabet",
  value: "aBcDeFgHiJkLmNoPqRsTuVwXyZ"
}, {
  label: "Latin pangram",
  value: "The quick brown fox jumps over the lazy dog"
}, {
  label: "Greek alphabet",
  value: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏ"
}, {
  label: "Greek pangram",
  value: "ΤΑΧΊΣΤΗ ΑΛΏΠΗΞ ΒΑΦΉΣ ΨΗΜΈΝΗ ΓΗ, ΔΡΑΣΚΕΛΊΖΕΙ ΥΠΈΡ ΝΩΘΡΟΎ ΚΥΝΌΣ"
}, {
  label: "Cyrillic alphabet",
  value: "АБВГЃҐДЕЀЁЖЗИЙЍКЌЛМНОПРСТУЎФХЧЦШЩЏЬЪЫЉЊЅЄЭІЇЈЋЮЯЂѢѲѴ"
}, {
  label: "Cyrillic pangram",
  value: "В ЧАЩАХ ЮГА ЖИЛ БЫ ЦИТРУС? ДА, НО ФАЛЬШИВЫЙ ЭКЗЕМПЛЯР!"
}, {
  label: "Custom",
  value: "custom"
}];

function O() {
  let [e, t] = Chunk647438.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
    platformZoom: n,
    theme: a
  } = (0, Chunk442837.cj)([Chunk210887.Z, Chunk607070.Z], () => ({
    theme: Chunk210887.Z.theme,
    platformZoom: Chunk607070.Z.zoom
  })), [O, v] = Chunk647438.useState("upright"), I = ["normal", "medium", "semibold", "bold", "extrabold"], T = [10, 12, 14, 15, 16, 18, 20, 24], S = new Map([
    ["normal", 400],
    ["medium", 500],
    ["semibold", 600],
    ["bold", 700],
    ["extrabold", 800]
  ]);
  Chunk647438.useEffect(() => {
    Chunk358085.isPlatformEmbedded || window.addEventListener("resize", () => {
      exports(Math.round(window.outerWidth / window.innerWidth * 100))
    })
  }, []);
  let A = Chunk358085.isPlatformEmbedded ? require : module,
    C = (0, Chunk442837.e7)([Chunk304761.C], () => {
      var e, t;
      return (0, Chunk865427.fD)() ? null == (t = Chunk304761.C.getCurrentBuildOverride()) || null == (e = exports.overrides) ? true : module.discord_web : null
    }),
    [N, R] = (0, Chunk918222.R)("playground-overrideText", null),
    [P, w] = (0, Chunk918222.R)("playground-defaultText", y[0].value),
    D = Chunk647438.useCallback(e => {
      let t = y.find(t => {
        let {
          value: n
        } = t;
        return n === e
      });
      "" === e || null == e ? (w(y[0].value), R(null)) : null != t ? w(t.value) : (w("custom"), R(e))
    }, [R, w]);
  return (0, Chunk951288.jsx)("div", {
    style: {
      "--playground-font-family": "mono" === O ? "gg mono" : "gg sans",
      "--playground-font-style": "italic" === O ? "italic" : "normal"
    },
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk759315.toolbar,
        children: [(0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block"
            },
            children: ["Zoom: ", A, "%"]
          }), null != C ? (0, Chunk951288.jsxs)(Chunk481060.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block",
              marginLeft: "1em"
            },
            color: "header-secondary",
            children: ["(", C.id, ")"]
          }) : null]
        }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
          className: Chunk759315.select,
          options: y,
          onChange: e => D(e),
          value: P
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk759315.input,
          children: (0, Chunk951288.jsx)(Chunk481060.oil, {
            placeholder: "Enter custom input...",
            value: null != N ? N : "",
            onChange: D
          })
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk759315.toolbar,
        children: [(0, Chunk951288.jsx)(Chunk755721.Gu, {
          withTransparentBackground: true,
          className: Chunk759315.theme,
          orientation: "horizontal",
          options: [{
            name: Chunk388032.intl.string(Chunk388032.t.b8Cei4),
            value: Chunk981631.BRd.DARK
          }, {
            name: Chunk388032.intl.string(Chunk388032.t.K2sFfn),
            value: Chunk981631.BRd.LIGHT
          }],
          onChange: e => {
            (0, u.ZI)({
              theme: e.value
            })
          },
          value: Chunk120356
        }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
          withTransparentBackground: true,
          className: Chunk759315.theme,
          orientation: "horizontal",
          options: [{
            name: "Upright",
            value: "upright"
          }, {
            name: "Italic",
            value: "italic"
          }, {
            name: "Mono",
            value: "mono"
          }],
          onChange: e => {
            v(e.value)
          },
          value: O
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk759315.textGrid,
        children: [(0, Chunk951288.jsx)("div", {}), I.map(e => (0, r.jsx)("div", {
          className: b.columnHeading,
          children: (0, r.jsx)(c.X6q, {
            variant: "eyebrow",
            children: e
          })
        }, e)), T.map(e => (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: b.fontSize,
            children: [(0, r.jsxs)(c.X6q, {
              variant: "eyebrow",
              children: [e, "px"]
            }), 100 !== A ? (0, r.jsxs)(c.X6q, {
              variant: "eyebrow",
              color: "text-muted",
              children: ["(", e * A / 100, ")"]
            }) : null]
          }, e), I.map(t => {
            var n;
            let i = null != (n = "custom" === P ? N : P) ? n : "";
            return (0, r.jsx)("div", {
              className: b.textSample,
              children: (0, r.jsxs)("div", {
                title: "".concat(e, "px at ").concat(t),
                className: o()(b.text, {
                  [b.breakAnywhere]: !i.includes(" ")
                }),
                style: {
                  fontSize: e,
                  fontWeight: S.get(t)
                },
                children: [(0, r.jsx)("p", {
                  children: i
                }), (0, r.jsx)("p", {
                  style: {
                    textTransform: "lowercase"
                  },
                  children: i
                }), (0, r.jsx)("p", {
                  style: {
                    textTransform: "uppercase"
                  },
                  children: i
                })]
              })
            }, "".concat(e, "-").concat(t))
          })]
        }, e))]
      })]
    })
  })
}