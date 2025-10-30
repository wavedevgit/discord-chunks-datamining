/** Chunk was on 95017 **/
/** chunk id: 538645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./953529.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk281598 = require("./281598.js"),
  Chunk365943 = require("./365943.js"),
  Chunk25251 = require("./25251.js"),
  Chunk373071 = require("./373071.js"),
  Chunk782691 = require("./782691.jsx"),
  Chunk558270 = require("./558270.js");
let f = "Make sure you're only uploading text files!",
  b = e => {
    var t, n, r;
    let {
      effect: l,
      onClick: i
    } = e, {
      deleteConfig: o
    } = (0, h.n6)();
    return (0, a.jsxs)(c.P3F, {
      className: g.previewCard,
      onClick: () => {
        i(l)
      },
      children: [(0, a.jsx)("div", {
        className: g.previewCardImage,
        style: {
          backgroundImage: "url(".concat(null == (r = l.config) || null == (n = r.effects) || null == (t = n[0]) ? true : t.base64, ")")
        }
      }), (0, a.jsxs)("div", {
        className: g.previewCardFooter,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/bold",
          children: l.name
        }), (0, a.jsx)(c.Button, {
          variant: "critical-secondary",
          text: "Delete",
          onClick: e => {
            e.preventDefault(), e.stopPropagation(), o(l.skuId)
          }
        })]
      })]
    })
  };

function v() {
  let {
    profileEffects: e,
    upsertConfig: t
  } = (0, Chunk373071.n6)(), [n, l] = Chunk647438.useState(), v = Chunk647438.useRef(null), j = (0, Chunk442837.Wu)([Chunk25251.Z], () => Chunk25251.Z.getAllProfileEffects()), [_, y] = Chunk647438.useState("");
  Chunk647438.useEffect(() => {
    (0, Chunk365943.t)(true)
  }, []);
  let C = Chunk647438.useMemo(() => "" === _ ? j : j.filter(e => {
      var t, n, a, r;
      let l = _.toLowerCase(),
        i = null != (a = null == (t = e.config.title) ? true : t.toLowerCase()) ? a : "",
        o = null != (r = null == (n = e.config.description) ? true : n.toLowerCase()) ? r : "";
      return i.includes(l) || o.includes(l)
    }), [_, j]),
    S = Chunk647438.useCallback((e, n) => {
      if (null == n || !e.type.startsWith("text/")) return (0, u.Eo)(f);
      let [a, r] = n.split(",");
      if (!a.includes("text/plain")) return (0, u.Eo)(f);
      let l = JSON.parse(atob(r));
      l.skuId = (0, o.Z)(), t(l), (0, u.XA)("Profile Effect (maybe??) imported!")
    }, [exports]),
    E = Chunk647438.useCallback(e => {
      var t;
      if ((null == (t = e.currentTarget) ? true : t.files) == null) return void(0, u.Eo)("Error uploading file. Try again!");
      (0, u.Kr)(e.currentTarget.files, S, u.Eo)
    }, [S]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk558270.root,
    children: [null == require && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk558270.col,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk558270.section,
          children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-xl/bold",
            children: "Custom Profile Effects"
          })
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk558270.customEffectsGrid,
          children: Object.values(module).map(e => (0, a.jsx)(b, {
            effect: e,
            onClick: e => {
              l(e)
            }
          }, e.skuId))
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: i()(Chunk558270.row, Chunk558270.end, Chunk558270.section),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk558270.uploadButton,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "always-white",
            children: "Import Shared Config"
          }), (0, Chunk951288.jsx)(Chunk53281.Z, {
            ref: v,
            onChange: E,
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
          value: _,
          onChange: e => {
            y(e)
          }
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk558270.pfxGrid,
          children: C.map(e => (0, a.jsx)(c.P3F, {
            className: g.pfxListItem,
            style: {
              backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")")
            },
            onClick: () => {
              l({
                skuId: e.skuId,
                name: e.config.title,
                readonly: true,
                config: {
                  effects: e.config.effects
                }
              })
            },
            children: (0, a.jsx)("div", {
              className: g.pfxListItemFooter,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: e.config.title
              })
            })
          }, e.skuId))
        })]
      })]
    }), null != require && (0, Chunk951288.jsx)(Chunk782691.Z, {
      effect: require
    })]
  })
}