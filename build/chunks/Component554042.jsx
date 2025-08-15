/** Chunk was on 30202 **/
/** chunk id: 554042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk461059 = require("./461059.js");
let _ = [{
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

function j() {
  let [e, t] = Chunk73800.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
    platformZoom: n,
    theme: s
  } = (0, Chunk442837.cj)([Chunk210887.Z, Chunk607070.Z], () => ({
    theme: Chunk210887.Z.theme,
    platformZoom: Chunk607070.Z.zoom
  })), [j, E] = Chunk73800.useState("upright"), C = ["normal", "medium", "semibold", "bold", "extrabold"], O = new Map([
    ["normal", 400],
    ["medium", 500],
    ["semibold", 600],
    ["bold", 700],
    ["extrabold", 800]
  ]);
  Chunk73800.useEffect(() => {
    Chunk358085.isPlatformEmbedded || window.addEventListener("resize", () => {
      exports(Math.round(window.outerWidth / window.innerWidth * 100))
    })
  }, []);
  let v = Chunk358085.isPlatformEmbedded ? require : module,
    S = (0, Chunk442837.e7)([Chunk304761.C], () => {
      var e, t;
      return (0, Chunk865427.fD)() ? null == (t = Chunk304761.C.getCurrentBuildOverride()) || null == (e = exports.overrides) ? true : module.discord_web : null
    }),
    [T, N] = (0, Chunk918222.R)("playground-overrideText", null),
    [I, y] = (0, Chunk918222.R)("playground-defaultText", _[0].value),
    A = Chunk73800.useCallback(e => {
      let t = _.find(t => {
        let {
          value: n
        } = t;
        return n === e
      });
      "" === e || null == e ? (y(_[0].value), N(null)) : null != t ? y(t.value) : (y("custom"), N(e))
    }, [N, y]);
  return (0, Chunk255367.jsx)("div", {
    style: {
      "--playground-font-family": "mono" === j ? "gg mono" : "gg sans",
      "--playground-font-style": "italic" === j ? "italic" : "normal"
    },
    children: (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk461059.toolbar,
        children: [(0, Chunk255367.jsxs)("div", {
          children: [(0, Chunk255367.jsxs)(Chunk481060.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block"
            },
            children: ["Zoom: ", v, "%"]
          }), null != S ? (0, Chunk255367.jsxs)(Chunk481060.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block",
              marginLeft: "1em"
            },
            color: "header-secondary",
            children: ["(", S.id, ")"]
          }) : null]
        }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
          children: (0, Chunk255367.jsx)(Chunk481060.q4e, {
            className: Chunk461059.select,
            options: _,
            onChange: e => A(e),
            value: I
          })
        }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
          children: (0, Chunk255367.jsx)("div", {
            className: Chunk461059.input,
            children: (0, Chunk255367.jsx)(Chunk481060.oil, {
              placeholder: "Enter custom input...",
              value: null != T ? T : "",
              onChange: A
            })
          })
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk461059.toolbar,
        children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
          children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
            withTransparentBackground: true,
            className: Chunk461059.theme,
            orientation: "horizontal",
            options: [{
              name: Chunk388032.intl.string(Chunk388032.t.b8Cei4),
              value: Chunk981631.BRd.DARK
            }, {
              name: Chunk388032.intl.string(Chunk388032.t.K2sFfn),
              value: Chunk981631.BRd.LIGHT
            }],
            onChange: e => {
              (0, c.ZI)({
                theme: e.value
              })
            },
            value: Chunk120356
          })
        }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
          children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
            withTransparentBackground: true,
            className: Chunk461059.theme,
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
              E(e.value)
            },
            value: j
          })
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk461059.textGrid,
        children: [(0, Chunk255367.jsx)("div", {}), C.map(e => (0, i.jsx)("div", {
          className: x.columnHeading,
          children: (0, i.jsx)(o.X6q, {
            variant: "eyebrow",
            children: e
          })
        }, e)), [10, 12, 14, 15, 16, 18, 20, 24].map(e => (0, i.jsxs)(r.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: x.fontSize,
            children: [(0, i.jsxs)(o.X6q, {
              variant: "eyebrow",
              children: [e, "px"]
            }), 100 !== v ? (0, i.jsxs)(o.X6q, {
              variant: "eyebrow",
              color: "text-muted",
              children: ["(", e * v / 100, ")"]
            }) : null]
          }, e), C.map(t => {
            var n;
            let r = null != (n = "custom" === I ? T : I) ? n : "";
            return (0, i.jsx)("div", {
              className: x.textSample,
              children: (0, i.jsxs)("div", {
                title: "".concat(e, "px at ").concat(t),
                className: a()(x.text, {
                  [x.breakAnywhere]: !r.includes(" ")
                }),
                style: {
                  fontSize: e,
                  fontWeight: O.get(t)
                },
                children: [(0, i.jsx)("p", {
                  children: r
                }), (0, i.jsx)("p", {
                  style: {
                    textTransform: "lowercase"
                  },
                  children: r
                }), (0, i.jsx)("p", {
                  style: {
                    textTransform: "uppercase"
                  },
                  children: r
                })]
              })
            }, "".concat(e, "-").concat(t))
          })]
        }, e))]
      })]
    })
  })
}