/** Chunk was on 29725 **/
/** chunk id: 538645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./953529.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk267097 = require("./267097.js"),
  Chunk281598 = require("./281598.js"),
  Chunk25251 = require("./25251.js"),
  Chunk373071 = require("./373071.js"),
  Chunk782691 = require("./782691.jsx"),
  Chunk75266 = require("./75266.js");
let g = "Make sure you're only uploading text files!",
  v = e => {
    var t, n, r;
    let {
      effect: l,
      onClick: i
    } = e, {
      deleteConfig: s
    } = (0, f.n6)();
    return (0, a.jsxs)(c.P3F, {
      className: b.previewCard,
      onClick: () => {
        i(l)
      },
      children: [(0, a.jsx)("div", {
        className: b.previewCardImage,
        style: {
          backgroundImage: "url(".concat(null == (r = l.config) || null == (n = r.effects) || null == (t = n[0]) ? true : t.base64, ")")
        }
      }), (0, a.jsxs)("div", {
        className: b.previewCardFooter,
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
  } = (0, Chunk373071.n6)(), [l, j] = Chunk473749.useState(), y = Chunk473749.useRef(null), C = (0, Chunk442837.Wu)([Chunk25251.Z], () => Chunk25251.Z.getAllProfileEffects());
  (0, Chunk267097.Z)();
  let [_, S] = Chunk473749.useState(""), E = Chunk473749.useMemo(() => "" === _ ? C : C.filter(e => {
    var t, n, a, r;
    let l = _.toLowerCase(),
      i = null != (a = null == (t = e.config.title) ? true : t.toLowerCase()) ? a : "",
      s = null != (r = null == (n = e.config.description) ? true : n.toLowerCase()) ? r : "";
    return i.includes(l) || s.includes(l)
  }), [_, C]), T = Chunk473749.useCallback((e, n) => {
    if (null == n || !e.type.startsWith("text/")) return (0, p.Eo)(g);
    let [a, r] = n.split(",");
    if (!a.includes("text/plain")) return (0, p.Eo)(g);
    let l = JSON.parse(atob(r));
    l.skuId = (0, s.Z)(), t(l), (0, p.XA)("Profile Effect (maybe??) imported!")
  }, [exports]), O = Chunk473749.useCallback(e => {
    var t;
    if ((null == (t = e.currentTarget) ? true : t.files) == null) return void(0, p.Eo)("Error uploading file. Try again!");
    (0, p.Kr)(e.currentTarget.files, T, p.Eo)
  }, [T]);
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk75266.root,
    children: [null == Chunk120356 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk75266.col,
        children: [(0, Chunk54381.jsxs)("div", {
          className: i()(Chunk75266.section, Chunk75266.row),
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-xl/bold",
            children: "Custom Profile Effects"
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
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
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk75266.customEffectsGrid,
          children: Object.values(module).map(e => (0, a.jsx)(v, {
            effect: e,
            onClick: e => {
              j(e)
            }
          }, e.skuId))
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: i()(Chunk75266.row, Chunk75266.end, Chunk75266.section),
        children: [(0, Chunk54381.jsxs)("div", {
          className: Chunk75266.uploadButton,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "always-white",
            children: "Import Shared Config"
          }), (0, Chunk54381.jsx)(Chunk53281.Z, {
            ref: y,
            onChange: O,
            multiple: false
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
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
      }), (0, Chunk54381.jsx)("hr", {}), (0, Chunk54381.jsxs)("div", {
        className: Chunk75266.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/bold",
          children: "All Effects"
        }), (0, Chunk54381.jsx)(Chunk481060.oil, {
          value: _,
          onChange: e => {
            S(e)
          }
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk75266.pfxGrid,
          children: E.map(e => (0, a.jsx)(c.P3F, {
            className: b.pfxListItem,
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
              className: b.pfxListItemFooter,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: e.config.title
              })
            })
          }, e.skuId))
        })]
      })]
    }), null != Chunk120356 && (0, Chunk54381.jsx)(Chunk782691.Z, {
      effect: Chunk120356
    })]
  })
}