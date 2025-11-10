/** Chunk was on 22740 **/
/** chunk id: 538645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./953529.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk281598 = require("./281598.js"),
  Chunk365943 = require("./365943.js"),
  Chunk25251 = require("./25251.js"),
  Chunk373071 = require("./373071.js"),
  Chunk782691 = require("./782691.jsx"),
  Chunk664046 = require("./664046.js");
let b = "Make sure you're only uploading text files!",
  v = e => {
    var t, n, r;
    let {
      effect: i,
      onClick: l
    } = e, {
      deleteConfig: s
    } = (0, x.n6)();
    return (0, a.jsxs)(c.P3F, {
      className: f.previewCard,
      onClick: () => {
        l(i)
      },
      children: [(0, a.jsx)("div", {
        className: f.previewCardImage,
        style: {
          backgroundImage: "url(".concat(null == (r = i.config) || null == (n = r.effects) || null == (t = n[0]) ? true : t.base64, ")")
        }
      }), (0, a.jsxs)("div", {
        className: f.previewCardFooter,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/bold",
          children: i.name
        }), (0, a.jsx)(c.Button, {
          variant: "critical-secondary",
          text: "Delete",
          onClick: e => {
            e.preventDefault(), e.stopPropagation(), s(i.skuId)
          }
        })]
      })]
    })
  };

function j() {
  let {
    profileEffects: e,
    upsertConfig: t,
    clearAll: n
  } = (0, Chunk373071.n6)(), [i, j] = Chunk647438.useState(), _ = Chunk647438.useRef(null), y = (0, Chunk442837.Wu)([Chunk25251.Z], () => Chunk25251.Z.getAllProfileEffects()), [C, S] = Chunk647438.useState("");
  Chunk647438.useEffect(() => {
    (0, Chunk365943.t)(true)
  }, []);
  let E = Chunk647438.useMemo(() => "" === C ? y : y.filter(e => {
      var t, n, a, r;
      let i = C.toLowerCase(),
        l = null != (a = null == (t = e.config.title) ? true : t.toLowerCase()) ? a : "",
        s = null != (r = null == (n = e.config.description) ? true : n.toLowerCase()) ? r : "";
      return l.includes(i) || s.includes(i)
    }), [C, y]),
    T = Chunk647438.useCallback((e, n) => {
      if (null == n || !e.type.startsWith("text/")) return (0, m.Eo)(b);
      let [a, r] = n.split(",");
      if (!a.includes("text/plain")) return (0, m.Eo)(b);
      let i = JSON.parse(atob(r));
      i.skuId = (0, s.Z)(), t(i), (0, m.XA)("Profile Effect (maybe??) imported!")
    }, [exports]),
    O = Chunk647438.useCallback(e => {
      var t;
      if ((null == (t = e.currentTarget) ? true : t.files) == null) return void(0, m.Eo)("Error uploading file. Try again!");
      (0, m.Kr)(e.currentTarget.files, T, m.Eo)
    }, [T]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk664046.root,
    children: [null == Chunk120356 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk664046.col,
        children: [(0, Chunk951288.jsxs)("div", {
          className: l()(Chunk664046.section, Chunk664046.row),
          children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-xl/bold",
            children: "Custom Profile Effects"
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "critical-secondary",
            text: "Clear All",
            onClick: async () => {
              await Chunk668781.Z.confirm({
                title: "Clear All Profile Effects",
                body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                confirmText: "Clear All",
                confirmVariant: "critical-primary"
              }) && (require(), (0, Chunk281598.XA)("All profile effects cleared!"))
            }
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk664046.customEffectsGrid,
          children: Object.values(module).map(e => (0, a.jsx)(v, {
            effect: e,
            onClick: e => {
              j(e)
            }
          }, e.skuId))
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: l()(Chunk664046.row, Chunk664046.end, Chunk664046.section),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk664046.uploadButton,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "always-white",
            children: "Import Shared Config"
          }), (0, Chunk951288.jsx)(Chunk53281.Z, {
            ref: _,
            onChange: O,
            multiple: false
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Create New Effect",
          onClick: () => {
            exports({
              skuId: (0, Chunk772848.Z)(),
              name: "New Profile Effect",
              config: {
                effects: []
              }
            })
          }
        })]
      }), (0, Chunk951288.jsx)("hr", {}), (0, Chunk951288.jsxs)("div", {
        className: Chunk664046.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/bold",
          children: "All Effects"
        }), (0, Chunk951288.jsx)(Chunk481060.oil, {
          value: C,
          onChange: e => {
            S(e)
          }
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk664046.pfxGrid,
          children: E.map(e => (0, a.jsx)(c.P3F, {
            className: f.pfxListItem,
            style: {
              backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")")
            },
            onClick: () => {
              j({
                skuId: e.skuId,
                name: e.config.title,
                readonly: true,
                config: {
                  effects: e.config.effects
                }
              })
            },
            children: (0, a.jsx)("div", {
              className: f.pfxListItemFooter,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: e.config.title
              })
            })
          }, e.skuId))
        })]
      })]
    }), null != Chunk120356 && (0, Chunk951288.jsx)(Chunk782691.Z, {
      effect: Chunk120356
    })]
  })
}