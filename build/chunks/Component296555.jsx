/** Chunk was on 65298 **/
/** chunk id: 296555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => T,
  G: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk43708 = require("./43708.js"),
  Chunk600239 = require("./600239.jsx"),
  Chunk940622 = require("./940622.js"),
  Chunk928953 = require("./928953.jsx"),
  Chunk559474 = require("./559474.js"),
  Chunk327885 = require("./327885.js"),
  Chunk876607 = require("./876607.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}
let h = Chunk64700.createContext({
    setDropHandler: () => {}
  }),
  x = [{
    name: "Preview",
    value: "preview"
  }, {
    name: "Validate",
    value: "validate"
  }],
  g = {
    id: "none",
    label: "[none selected]",
    value: null
  },
  f = {
    id: "all",
    label: "[preview all]",
    value: null
  },
  b = () => {
    (0, r.kBI)(s.k) ? (0, r.OoC)(s.k) : (0, r.mMO)(async () => {
      let {
        ShopAssetsPreviewInstructionModal: e
      } = await Promise.resolve().then(n.bind(n, 600239));
      return t => (0, a.jsx)(e, p({}, t))
    }, {
      modalKey: s.k,
      onCloseRequest: () => (0, r.OoC)(s.k)
    })
  },
  v = () => {
    (0, r.kBI)(s.g) ? (0, r.OoC)(s.g) : (0, r.mMO)(async () => {
      let {
        ShopPFXPreviewInstructionModal: e
      } = await Promise.resolve().then(n.bind(n, 600239));
      return t => (0, a.jsx)(e, p({}, t))
    }, {
      modalKey: s.g,
      onCloseRequest: () => (0, r.OoC)(s.g)
    })
  },
  j = () => {
    let e = (0, i.pF)(),
      {
        previewProfileEffectSkuId: t,
        setPreviewProfileEffectSkuId: n
      } = (0, o.JE)(),
      s = l.useMemo(() => [g, ...e.map(e => ({
        id: e.skuId,
        label: e.name,
        value: e.skuId
      }))], [e]);
    return (0, a.jsxs)("div", {
      className: m.kO,
      children: [(0, a.jsx)(r.hKd, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: m.wR,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/bold",
          children: "Preview Profile Effect"
        }), (0, a.jsx)(r.K0, {
          variant: "icon-only",
          size: "sm",
          onClick: v,
          icon: r.cBN,
          "aria-label": "Open PFX preview instructions"
        })]
      }), (0, a.jsx)(r.l6P, {
        label: "Profile Effect",
        hideLabel: true,
        selectionMode: "single",
        options: s,
        value: t,
        maxOptionsVisible: 30,
        onSelectionChange: n
      })]
    })
  },
  _ = () => {
    let {
      previewAvatarDecorationSkuId: e,
      setPreviewAvatarDecorationSkuId: t
    } = (0, o.JE)(), {
      avatarDecorationAssets: n
    } = (0, o.NE)(), i = l.useMemo(() => [f, ...n.map(e => ({
      id: e.name,
      label: e.name,
      value: e.name
    }))], [n]);
    return 0 === n.length ? null : (0, a.jsxs)("div", {
      className: m.kO,
      children: [(0, a.jsx)(r.hKd, {
        size: 16
      }), (0, a.jsx)(r.l6P, {
        label: "Preview Avatar Decorations",
        selectionMode: "single",
        options: i,
        value: e,
        maxOptionsVisible: 30,
        onSelectionChange: t
      })]
    })
  },
  y = e => {
    let {
      clearAssets: t,
      clearIgnoredFiles: n
    } = e, {
      collectionAssets: i
    } = (0, o.NE)(), {
      deleteCollectionAsset: s,
      clearAssets: c
    } = (0, o.JE)(), d = l.useMemo(() => Object.values(i).map(e => ({
      label: e.name,
      value: e.type
    })), [i]), u = l.useCallback(e => s(e), [s]), p = l.useCallback(() => {
      c(), t(), n()
    }, [c, t, n]);
    return 0 === d.length ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.hKd, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: m.wR,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-lg/bold",
          children: "Uploaded Assets"
        }), (0, a.jsx)(r.Button, {
          variant: "critical-primary",
          size: "sm",
          onClick: p,
          text: "Clear All"
        })]
      }), (0, a.jsx)("ul", {
        children: d.map(e => (0, a.jsxs)("li", {
          className: m._0,
          children: [(0, a.jsx)(r.K0, {
            variant: "icon-only",
            size: "sm",
            onClick: () => u(e.value),
            icon: r.PGe,
            "aria-label": "Remove asset"
          }), (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: e.label
          })]
        }, e.value))
      })]
    })
  },
  A = e => {
    let {
      ignoredFiles: t,
      handleClearIgnoredFiles: n
    } = e;
    return 0 === t.length ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.hKd, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: m.wR,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-lg/bold",
          children: "Ignored Files"
        }), (0, a.jsx)(r.Button, {
          variant: "primary",
          size: "sm",
          onClick: n,
          text: "Clear"
        })]
      }), (0, a.jsx)("ul", {
        children: t.map((e, t) => (0, a.jsx)("li", {
          className: m.yk,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: e
          })
        }, "".concat(e, "-").concat(t)))
      })]
    })
  },
  C = () => {
    let {
      validateShopAssetPackage: e,
      reset: t,
      validationComplete: n,
      warnings: i,
      errors: s
    } = (0, u.y)(), o = Object.entries(s), c = Object.entries(i), d = o.length > 0, p = c.length > 0, {
      setDropHandler: x
    } = l.useContext(h), g = l.useCallback(n => {
      t(), e(n)
    }, [e, t]);
    return l.useEffect(() => {
      x(g)
    }, [g, x]), (0, a.jsxs)(a.Fragment, {
      children: [n ? (0, a.jsxs)("div", {
        className: m._f,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: d ? "text-feedback-critical" : "text-default",
          children: "".concat(o.length, " errors")
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: p ? "text-feedback-warning" : "text-default",
          children: "".concat(c.length, " warnings")
        }), (0, a.jsx)(r.Button, {
          variant: "primary",
          size: "sm",
          onClick: t,
          text: "Reset"
        })]
      }) : (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: "Drop asset folder to validate."
      }), (0, a.jsx)(r.hKd, {
        size: 16
      }), d && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-lg/bold",
          children: "Errors"
        }), (0, a.jsx)(r.hKd, {
          size: 8
        }), (0, a.jsx)("ul", {
          className: m.ck,
          children: o.map((e, t) => {
            let [n, l] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/bold",
                color: "text-feedback-critical",
                children: n
              }), l.length > 0 && (0, a.jsx)("ul", {
                className: m.ck,
                children: l.map((e, t) => (0, a.jsx)("li", {
                  children: (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    children: e
                  })
                }, "".concat(e, "-").concat(t)))
              })]
            }, "".concat(n, "-").concat(t))
          })
        })]
      }), p && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-lg/bold",
          children: "Warnings"
        }), (0, a.jsx)(r.hKd, {
          size: 8
        }), (0, a.jsx)("ul", {
          className: m.ck,
          children: Object.entries(i).map((e, t) => {
            let [n, l] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/bold",
                color: "text-feedback-warning",
                children: n
              }), l.length > 0 && (0, a.jsx)("ul", {
                className: m.ck,
                children: l.map((e, t) => (0, a.jsx)("li", {
                  children: (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-warning",
                    children: e
                  })
                }, "".concat(e, "-").concat(t)))
              })]
            }, "".concat(n, "-").concat(t))
          })
        })]
      })]
    })
  },
  S = () => {
    let {
      previewEnabled: e,
      setPreviewEnabled: t,
      clearAssets: n
    } = (0, o.JE)(), {
      ignoredFilenames: i,
      clearAssets: s,
      clearIgnoredFilenames: c,
      processAndUpsertAssets: u
    } = (0, d.ds)(), {
      setDropHandler: p
    } = l.useContext(h), x = l.useCallback(e => {
      n(), u(e)
    }, [u, n]);
    return l.useEffect(() => {
      p(x)
    }, [x, p]), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: "Drop files in this panel to begin preview."
      }), (0, a.jsxs)("div", {
        className: m.sy,
        children: [(0, a.jsx)(r.dOG, {
          checked: e,
          onChange: e => t(e)
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: "Enable Preview"
        }), (0, a.jsx)(r.K0, {
          variant: "icon-only",
          size: "sm",
          onClick: b,
          icon: r.cBN,
          "aria-label": "Open preview instructions"
        })]
      }), (0, a.jsx)(j, {}), (0, a.jsx)(_, {}), (0, a.jsx)(y, {
        clearAssets: s,
        clearIgnoredFiles: c
      }), (0, a.jsx)(A, {
        ignoredFiles: i,
        handleClearIgnoredFiles: c
      })]
    })
  },
  O = () => {
    let [e, t] = l.useState("preview");
    return (0, a.jsxs)("div", {
      className: m.kL,
      children: [(0, a.jsx)(r.IzF, {
        options: x,
        value: e,
        onChange: e => {
          let {
            value: n
          } = e;
          return t(n)
        },
        className: m.Vj,
        optionClassName: m.UK
      }), (0, a.jsx)(r.hKd, {
        size: 8
      }), "preview" === e && (0, a.jsx)(S, {}), "validate" === e && (0, a.jsx)(C, {}), (0, a.jsx)(r.hKd, {
        size: 16
      })]
    })
  },
  T = e => {
    let {
      children: t
    } = e, [n, r] = l.useState(() => () => {}), i = l.useMemo(() => ({
      setDropHandler: e => r(() => e)
    }), []);
    return (0, a.jsx)(h.Provider, {
      value: i,
      children: (0, a.jsx)(c.i, {
        onDrop: n,
        children: t
      })
    })
  }