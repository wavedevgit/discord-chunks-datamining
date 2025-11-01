/** Chunk was on 28532 **/
/** chunk id: 538645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./953529.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
  Chunk558270 = require("./558270.js");
let b = "Make sure you're only uploading text files!",
  v = e => {
    var t, n, i;
    let {
      effect: l,
      onClick: r
    } = e, {
      deleteConfig: s
    } = (0, x.n6)();
    return (0, a.jsxs)(c.P3F, {
      className: f.previewCard,
      onClick: () => {
        r(l)
      },
      children: [(0, a.jsx)("div", {
        className: f.previewCardImage,
        style: {
          backgroundImage: "url(".concat(null == (i = l.config) || null == (n = i.effects) || null == (t = n[0]) ? true : t.base64, ")")
        }
      }), (0, a.jsxs)("div", {
        className: f.previewCardFooter,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/bold",
          children: l.name
        }), (0, a.jsx)(c.Button, {
          variant: "critical-secondary",
          text: "Delete",
          onClick: e => {
            e.preventDefault(), e.stopPropagation(), s(l.skuId)
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
  } = (0, Chunk373071.n6)(), [l, j] = Chunk647438.useState(), _ = Chunk647438.useRef(null), y = (0, Chunk442837.Wu)([Chunk25251.Z], () => Chunk25251.Z.getAllProfileEffects()), [C, S] = Chunk647438.useState("");
  Chunk647438.useEffect(() => {
    (0, Chunk365943.t)(true)
  }, []);
  let E = Chunk647438.useMemo(() => "" === C ? y : y.filter(e => {
      var t, n, a, i;
      let l = C.toLowerCase(),
        r = null != (a = null == (t = e.config.title) ? true : t.toLowerCase()) ? a : "",
        s = null != (i = null == (n = e.config.description) ? true : n.toLowerCase()) ? i : "";
      return r.includes(l) || s.includes(l)
    }), [C, y]),
    T = Chunk647438.useCallback((e, n) => {
      if (null == n || !e.type.startsWith("text/")) return (0, m.Eo)(b);
      let [a, i] = n.split(",");
      if (!a.includes("text/plain")) return (0, m.Eo)(b);
      let l = JSON.parse(atob(i));
      l.skuId = (0, s.Z)(), t(l), (0, m.XA)("Profile Effect (maybe??) imported!")
    }, [exports]),
    N = Chunk647438.useCallback(e => {
      var t;
      if ((null == (t = e.currentTarget) ? true : t.files) == null) return void(0, m.Eo)("Error uploading file. Try again!");
      (0, m.Kr)(e.currentTarget.files, T, m.Eo)
    }, [T]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk558270.root,
    children: [null == Chunk120356 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk558270.col,
        children: [(0, Chunk951288.jsxs)("div", {
          className: r()(Chunk558270.section, Chunk558270.row),
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
          className: Chunk558270.customEffectsGrid,
          children: Object.values(module).map(e => (0, a.jsx)(v, {
            effect: e,
            onClick: e => {
              j(e)
            }
          }, e.skuId))
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: r()(Chunk558270.row, Chunk558270.end, Chunk558270.section),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk558270.uploadButton,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "always-white",
            children: "Import Shared Config"
          }), (0, Chunk951288.jsx)(Chunk53281.Z, {
            ref: _,
            onChange: N,
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
        className: Chunk558270.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/bold",
          children: "All Effects"
        }), (0, Chunk951288.jsx)(Chunk481060.oil, {
          value: C,
          onChange: e => {
            S(e)
          }
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk558270.pfxGrid,
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