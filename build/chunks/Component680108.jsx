/** Chunk was on 65298 **/
/** chunk id: 680108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js"), require("./228524.js"), require("./747238.js"), require("./801460.js"), require("./508300.js"), require("./650828.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk315949 = require("./315949.js"),
  Chunk559474 = require("./559474.js"),
  Chunk259248 = require("./259248.js"),
  Chunk43708 = require("./43708.js"),
  Chunk14752 = require("./14752.js"),
  Chunk103748 = require("./103748.jsx"),
  Chunk553622 = require("./553622.js");
let v = "Make sure you're only uploading text files!",
  j = e => {
    var t, n, l;
    let {
      effect: r,
      onClick: i
    } = e, {
      deleteConfig: s
    } = (0, x.wu)();
    return (0, a.jsxs)(c.DUT, {
      className: b.B0,
      onClick: () => {
        i(r)
      },
      children: [(0, a.jsx)("div", {
        className: b.yV,
        style: {
          backgroundImage: "url(".concat(null == (l = r.config) || null == (n = l.effects) || null == (t = n[0]) ? true : t.base64, ")")
        }
      }), (0, a.jsxs)("div", {
        className: b.eL,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/bold",
          children: r.name
        }), (0, a.jsx)(c.Button, {
          variant: "critical-secondary",
          text: "Delete",
          onClick: e => {
            e.preventDefault(), e.stopPropagation(), s(r.skuId)
          }
        })]
      })]
    })
  };

function _() {
  let {
    profileEffects: e,
    upsertConfig: t,
    clearAll: n
  } = (0, x.wu)(), [r, _] = l.useState(), y = l.useRef(null), A = (0, o.yK)([h.A], () => h.A.getAllProfileEffects());
  (0, m.A)();
  let [C, S] = l.useState(""), O = l.useMemo(() => "" === C ? A : A.filter(e => {
    var t, n, a, l;
    let r = C.toLowerCase(),
      i = null != (t = null == (a = e.config.title) ? true : a.toLowerCase()) ? t : "",
      s = null != (n = null == (l = e.config.description) ? true : l.toLowerCase()) ? n : "";
    return i.includes(r) || s.includes(r)
  }), [C, A]), T = l.useCallback((e, n) => {
    if (null == n || !e.type.startsWith("text/")) return (0, p.Ni)(v);
    let [a, l] = n.split(",");
    if (!a.includes("text/plain")) return (0, p.Ni)(v);
    let r = JSON.parse(atob(l));
    r.skuId = (0, s.A)(), t(r), (0, p.GF)("Profile Effect (maybe??) imported!")
  }, [t]), E = l.useCallback(e => {
    var t;
    (null == (t = e.currentTarget) ? true : t.files) == null ? (0, p.Ni)("Error uploading file. Try again!") : (0, p.KE)(e.currentTarget.files, T, p.Ni)
  }, [T]);
  return (0, a.jsxs)("div", {
    className: b.zr,
    children: [null == r && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: b.nz,
        children: [(0, a.jsxs)("div", {
          className: i()(b.uW, b.nM),
          children: [(0, a.jsx)(c.Heading, {
            variant: "heading-xl/bold",
            children: "Custom Profile Effects"
          }), (0, a.jsx)(c.Button, {
            variant: "critical-secondary",
            text: "Clear All",
            onClick: async () => {
              await d.A.confirm({
                title: "Clear All Profile Effects",
                body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                confirmText: "Clear All",
                confirmVariant: "critical-primary"
              }) && (n(), (0, p.GF)("All profile effects cleared!"))
            }
          })]
        }), (0, a.jsx)("div", {
          className: b.Iv,
          children: Object.values(e).map(e => (0, a.jsx)(j, {
            effect: e,
            onClick: e => {
              _(e)
            }
          }, e.skuId))
        })]
      }), (0, a.jsxs)("div", {
        className: i()(b.nM, b._N, b.uW),
        children: [(0, a.jsxs)("div", {
          className: b.au,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "always-white",
            children: "Import Shared Config"
          }), (0, a.jsx)(u.A, {
            ref: y,
            onChange: E,
            multiple: false
          })]
        }), (0, a.jsx)(c.Button, {
          variant: "primary",
          text: "Create New Effect",
          onClick: () => {
            t({
              skuId: (0, s.A)(),
              name: "New Profile Effect",
              config: {
                effects: []
              }
            })
          }
        })]
      }), (0, a.jsx)("hr", {}), (0, a.jsxs)("div", {
        className: b.uW,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: "All Effects"
        }), (0, a.jsx)(c.ksK, {
          value: C,
          onChange: e => {
            S(e)
          }
        }), (0, a.jsx)("div", {
          className: b.xm,
          children: O.map(e => (0, a.jsx)(c.DUT, {
            className: b.S5,
            style: {
              backgroundImage: "url(".concat(e.config.thumbnailPreviewSrc, ")")
            },
            onClick: () => {
              let t = {
                [g.qH.THUMBNAIL]: null != e.config.thumbnailPreviewSrc && "" !== e.config.thumbnailPreviewSrc ? {
                  src: e.config.thumbnailPreviewSrc,
                  name: "thumbnail.png",
                  base64: ""
                } : null,
                [g.qH.STATIC]: null != e.config.staticFrameSrc && "" !== e.config.staticFrameSrc ? {
                  src: e.config.staticFrameSrc,
                  name: "static.png",
                  base64: ""
                } : null,
                [g.qH.REDUCED_MOTION]: null != e.config.reducedMotionSrc && "" !== e.config.reducedMotionSrc ? {
                  src: e.config.reducedMotionSrc,
                  name: "reduced_motion.png",
                  base64: ""
                } : null
              };
              _({
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
              className: b.Hd,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "always-white",
                children: e.config.title
              })
            })
          }, e.skuId))
        })]
      })]
    }), null != r && (0, a.jsx)(f.A, {
      effect: r
    })]
  })
}