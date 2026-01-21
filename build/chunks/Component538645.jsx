/** Chunk was on 22979 **/
/** chunk id: 538645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./953529.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk53281 = require("./53281.jsx"),
  Chunk267097 = require("./267097.js"),
  Chunk281598 = require("./281598.js"),
  Chunk25251 = require("./25251.js"),
  Chunk373071 = require("./373071.js"),
  Chunk489495 = require("./489495.js"),
  Chunk782691 = require("./782691.jsx"),
  Chunk75266 = require("./75266.js");
let v = "Make sure you're only uploading text files!",
  j = e => {
    var t, n, r;
    let {
      effect: i,
      onClick: l
    } = e, {
      deleteConfig: s
    } = (0, f.n6)();
    return (0, a.jsxs)(c.P3F, {
      className: g.previewCard,
      onClick: () => {
        l(i)
      },
      children: [(0, a.jsx)("div", {
        className: g.previewCardImage,
        style: {
          backgroundImage: "url(".concat(null == (r = i.config) || null == (n = r.effects) || null == (t = n[0]) ? true : t.base64, ")")
        }
      }), (0, a.jsxs)("div", {
        className: g.previewCardFooter,
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

function y() {
  let {
    profileEffects: e,
    upsertConfig: t,
    clearAll: n
  } = (0, f.n6)(), [i, y] = r.useState(), C = r.useRef(null), _ = (0, o.Wu)([h.Z], () => h.Z.getAllProfileEffects());
  (0, m.Z)();
  let [S, E] = r.useState(""), T = r.useMemo(() => "" === S ? _ : _.filter(e => {
    var t, n, a, r;
    let i = S.toLowerCase(),
      l = null != (a = null == (t = e.config.title) ? true : t.toLowerCase()) ? a : "",
      s = null != (r = null == (n = e.config.description) ? true : n.toLowerCase()) ? r : "";
    return l.includes(i) || s.includes(i)
  }), [S, _]), O = r.useCallback((e, n) => {
    if (null == n || !e.type.startsWith("text/")) return (0, p.Eo)(v);
    let [a, r] = n.split(",");
    if (!a.includes("text/plain")) return (0, p.Eo)(v);
    let i = JSON.parse(atob(r));
    i.skuId = (0, s.Z)(), t(i), (0, p.XA)("Profile Effect (maybe??) imported!")
  }, [t]), N = r.useCallback(e => {
    var t;
    if ((null == (t = e.currentTarget) ? true : t.files) == null) return void(0, p.Eo)("Error uploading file. Try again!");
    (0, p.Kr)(e.currentTarget.files, O, p.Eo)
  }, [O]);
  return (0, a.jsxs)("div", {
    className: g.root,
    children: [null == i && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: g.col,
        children: [(0, a.jsxs)("div", {
          className: l()(g.section, g.row),
          children: [(0, a.jsx)(c.Heading, {
            variant: "heading-xl/bold",
            children: "Custom Profile Effects"
          }), (0, a.jsx)(c.Button, {
            variant: "critical-secondary",
            text: "Clear All",
            onClick: async () => {
              await d.Z.confirm({
                title: "Clear All Profile Effects",
                body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                confirmText: "Clear All",
                confirmVariant: "critical-primary"
              }) && (n(), (0, p.XA)("All profile effects cleared!"))
            }
          })]
        }), (0, a.jsx)("div", {
          className: g.customEffectsGrid,
          children: Object.values(e).map(e => (0, a.jsx)(j, {
            effect: e,
            onClick: e => {
              y(e)
            }
          }, e.skuId))
        })]
      }), (0, a.jsxs)("div", {
        className: l()(g.row, g.end, g.section),
        children: [(0, a.jsxs)("div", {
          className: g.uploadButton,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "always-white",
            children: "Import Shared Config"
          }), (0, a.jsx)(u.Z, {
            ref: C,
            onChange: N,
            multiple: false
          })]
        }), (0, a.jsx)(c.Button, {
          variant: "primary",
          text: "Create New Effect",
          onClick: () => {
            t({
              skuId: (0, s.Z)(),
              name: "New Profile Effect",
              config: {
                effects: []
              }
            })
          }
        })]
      }), (0, a.jsx)("hr", {}), (0, a.jsxs)("div", {
        className: g.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: "All Effects"
        }), (0, a.jsx)(c.oil, {
          value: S,
          onChange: e => {
            E(e)
          }
        }), (0, a.jsx)("div", {
          className: g.pfxGrid,
          children: T.map(e => (0, a.jsx)(c.P3F, {
            className: g.pfxListItem,
            style: {
              backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")")
            },
            onClick: () => {
              let t = {
                [b.cq.THUMBNAIL]: null != e.config.thumbnailPreviewSrc && "" !== e.config.thumbnailPreviewSrc ? {
                  src: e.config.thumbnailPreviewSrc,
                  name: "thumbnail.png",
                  base64: ""
                } : null,
                [b.cq.STATIC]: null != e.config.staticFrameSrc && "" !== e.config.staticFrameSrc ? {
                  src: e.config.staticFrameSrc,
                  name: "static.png",
                  base64: ""
                } : null,
                [b.cq.REDUCED_MOTION]: null != e.config.reducedMotionSrc && "" !== e.config.reducedMotionSrc ? {
                  src: e.config.reducedMotionSrc,
                  name: "reduced_motion.png",
                  base64: ""
                } : null
              };
              y({
                skuId: e.skuId,
                name: e.config.title,
                readonly: true,
                config: {
                  effects: e.config.effects,
                  stillFrames: t
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
    }), null != i && (0, a.jsx)(x.Z, {
      effect: i
    })]
  })
}