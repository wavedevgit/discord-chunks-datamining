/** Chunk was on 75708 **/
/** chunk id: 538645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./953529.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk281598 = require("./281598.js"),
  Chunk25251 = require("./25251.js"),
  Chunk373071 = require("./373071.js"),
  Chunk782691 = require("./782691.jsx"),
  Chunk662583 = require("./662583.js");
let f = "Make sure you're only uploading text files!",
  b = e => {
    var t, n, r;
    let {
      effect: s,
      onClick: l
    } = e, {
      deleteConfig: o
    } = (0, p.n6)();
    return (0, i.jsxs)(c.P3F, {
      className: h.previewCard,
      onClick: () => {
        l(s)
      },
      children: [(0, i.jsx)("div", {
        className: h.previewCardImage,
        style: {
          backgroundImage: "url(".concat(null == (r = s.config) || null == (n = r.effects) || null == (t = n[0]) ? true : t.base64, ")")
        }
      }), (0, i.jsxs)("div", {
        className: a()(h.previewCardFooter, h.row),
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/bold",
          children: s.name
        }), (0, i.jsx)(c.zxk, {
          variant: "critical-secondary",
          text: "Delete",
          onClick: e => {
            e.preventDefault(), e.stopPropagation(), o(s.id)
          }
        })]
      })]
    })
  },
  x = () => ({
    id: (0, Chunk772848.Z)(),
    name: "New Profile Effect",
    config: {
      effects: []
    }
  });

function _() {
  let {
    profileEffects: e,
    upsertConfig: t
  } = (0, Chunk373071.n6)(), [n, s] = Chunk73800.useState(), _ = Chunk73800.useRef(null), j = (0, Chunk442837.Wu)([Chunk25251.Z], () => Chunk25251.Z.profileEffects), [E, C] = Chunk73800.useState(""), O = Chunk73800.useMemo(() => "" === E ? j : j.filter(e => {
    let t = E.toLowerCase();
    return e.config.title.toLowerCase().includes(t) || e.config.description.toLowerCase().includes(t)
  }), [E, j]), v = Chunk73800.useCallback((e, n) => {
    if (null == n || !e.type.startsWith("text/")) return (0, u.Eo)(f);
    let [i, r] = n.split(",");
    if (!i.includes("text/plain")) return (0, u.Eo)(f);
    let s = JSON.parse(atob(r));
    s.id = (0, l.Z)(), t(s), (0, u.XA)("Profile Effect (maybe??) imported!")
  }, [exports]), S = Chunk73800.useCallback(e => {
    var t;
    if ((null == (t = e.currentTarget) ? true : t.files) == null) return void(0, u.Eo)("Error uploading file. Try again!");
    (0, u.Kr)(e.currentTarget.files, v, u.Eo)
  }, [v]);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk662583.root,
    children: [null == require && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk662583.col,
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk662583.section,
          children: (0, Chunk255367.jsx)(Chunk481060.X6q, {
            variant: "heading-xl/bold",
            children: "Custom Profile Effects"
          })
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk662583.grid,
          children: Object.values(module).map(e => (0, i.jsx)(b, {
            effect: e,
            onClick: e => {
              s(e)
            }
          }, e.id))
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: a()(Chunk662583.row, Chunk662583.end, Chunk662583.section),
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk662583.uploadButton,
          children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "always-white",
            children: "Import Shared Config"
          }), (0, Chunk255367.jsx)(Chunk53281.Z, {
            ref: _,
            onChange: S,
            multiple: false
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Create New Effect",
          onClick: () => {
            exports(x())
          }
        })]
      }), (0, Chunk255367.jsx)("hr", {}), (0, Chunk255367.jsxs)("div", {
        className: Chunk662583.section,
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-xl/bold",
          children: "All Effects"
        }), (0, Chunk255367.jsx)("input", {
          value: E,
          onChange: e => {
            C(e.target.value)
          }
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk662583.pfxGrid,
          children: O.map(e => (0, i.jsx)(c.P3F, {
            className: h.pfxListItem,
            style: {
              backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")")
            },
            onClick: () => {
              s({
                id: e.id,
                name: e.config.title,
                readonly: true,
                config: {
                  effects: e.config.effects
                }
              })
            },
            children: (0, i.jsx)("div", {
              className: h.pfxListItemFooter,
              children: (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: e.config.title
              })
            })
          }, e.id))
        })]
      })]
    }), null != require && (0, Chunk255367.jsx)(Chunk782691.Z, {
      effect: require
    })]
  })
}