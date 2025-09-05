/** Chunk was on web.js **/
/** chunk id: 538645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./953529.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk281598 = require("./281598.js"),
  Chunk25251 = require("./25251.js"),
  Chunk373071 = require("./373071.js"),
  Chunk782691 = require("./782691.jsx"),
  Chunk664046 = require("./664046.js");
let m = "Make sure you're only uploading text files!",
  g = e => {
    var t, n, i;
    let {
      effect: a,
      onClick: s
    } = e, {
      deleteConfig: l
    } = (0, _.n6)();
    return (0, r.jsxs)(c.P3F, {
      className: h.previewCard,
      onClick: () => {
        s(a)
      },
      children: [(0, r.jsx)("div", {
        className: h.previewCardImage,
        style: {
          backgroundImage: "url(".concat(null == (i = a.config) || null == (n = i.effects) || null == (t = n[0]) ? true : t.base64, ")")
        }
      }), (0, r.jsxs)("div", {
        className: o()(h.previewCardFooter, h.row),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/bold",
          children: a.name
        }), (0, r.jsx)(c.zxk, {
          variant: "critical-secondary",
          text: "Delete",
          onClick: e => {
            e.preventDefault(), e.stopPropagation(), l(a.id)
          }
        })]
      })]
    })
  },
  E = () => ({
    id: (0, Chunk772848.Z)(),
    name: "New Profile Effect",
    config: {
      effects: []
    }
  });

function b() {
  let {
    profileEffects: e,
    upsertConfig: t
  } = (0, Chunk373071.n6)(), [n, a] = Chunk647438.useState(), b = Chunk647438.useRef(null), y = (0, Chunk442837.Wu)([Chunk25251.Z], () => Chunk25251.Z.getAllProfileEffects()), [O, v] = Chunk647438.useState(""), I = Chunk647438.useMemo(() => "" === O ? y : y.filter(e => {
    let t = O.toLowerCase();
    return e.config.title.toLowerCase().includes(t) || e.config.description.toLowerCase().includes(t)
  }), [O, y]), T = () => {
    exports(E())
  }, S = Chunk647438.useCallback((e, n) => {
    if (null == n || !e.type.startsWith("text/")) return (0, d.Eo)(m);
    let [r, i] = n.split(",");
    if (!r.includes("text/plain")) return (0, d.Eo)(m);
    let a = JSON.parse(atob(i));
    a.id = (0, s.Z)(), t(a), (0, d.XA)("Profile Effect (maybe??) imported!")
  }, [exports]), A = Chunk647438.useCallback(e => {
    var t;
    if ((null == (t = e.currentTarget) ? true : t.files) == null) return void(0, d.Eo)("Error uploading file. Try again!");
    (0, d.Kr)(e.currentTarget.files, S, d.Eo)
  }, [S]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk664046.root,
    children: [null == require && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk664046.col,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk664046.section,
          children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-xl/bold",
            children: "Custom Profile Effects"
          })
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk664046.grid,
          children: Object.values(module).map(e => (0, r.jsx)(g, {
            effect: e,
            onClick: e => {
              a(e)
            }
          }, e.id))
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: o()(Chunk664046.row, Chunk664046.end, Chunk664046.section),
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk664046.uploadButton,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "always-white",
            children: "Import Shared Config"
          }), (0, Chunk951288.jsx)(Chunk53281.Z, {
            ref: b,
            onChange: A,
            multiple: false
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Create New Effect",
          onClick: T
        })]
      }), (0, Chunk951288.jsx)("hr", {}), (0, Chunk951288.jsxs)("div", {
        className: Chunk664046.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-xl/bold",
          children: "All Effects"
        }), (0, Chunk951288.jsx)("input", {
          value: O,
          onChange: e => {
            v(e.target.value)
          }
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk664046.pfxGrid,
          children: I.map(e => (0, r.jsx)(c.P3F, {
            className: h.pfxListItem,
            style: {
              backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")")
            },
            onClick: () => {
              a({
                id: e.id,
                name: e.config.title,
                readonly: true,
                config: {
                  effects: e.config.effects
                }
              })
            },
            children: (0, r.jsx)("div", {
              className: h.pfxListItemFooter,
              children: (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: e.config.title
              })
            })
          }, e.id))
        })]
      })]
    }), null != require && (0, Chunk951288.jsx)(Chunk782691.Z, {
      effect: require
    })]
  })
}