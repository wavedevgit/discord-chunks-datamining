/** Chunk was on 88282 **/
/** chunk id: 646466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => O,
  O: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk373071 = require("./373071.js"),
  Chunk637443 = require("./637443.jsx"),
  Chunk619899 = require("./619899.js"),
  Chunk18868 = require("./18868.jsx"),
  Chunk281598 = require("./281598.js"),
  Chunk206878 = require("./206878.js"),
  Chunk198764 = require("./198764.js");

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
let h = Chunk473749.createContext({
    setDropHandler: () => {}
  }),
  x = [{
    name: "Preview",
    value: "preview"
  }, {
    name: "Validate",
    value: "validate"
  }],
  f = {
    label: "[none selected]",
    value: null
  },
  g = {
    label: "[preview all]",
    value: null
  },
  b = () => {
    (0, Chunk481060.nfh)(Chunk637443.g) ? (0, Chunk481060.Mr3)(Chunk637443.g) : (0, Chunk481060.ZDy)(async () => {
      let {
        ShopAssetsPreviewInstructionModal: e
      } = await Promise.resolve().then(require.bind(require, 637443));
      return t => (0, a.jsx)(e, p({}, t))
    }, {
      modalKey: Chunk637443.g,
      onCloseRequest: () => (0, Chunk481060.Mr3)(Chunk637443.g)
    })
  },
  v = () => {
    (0, Chunk481060.nfh)(Chunk637443.c) ? (0, Chunk481060.Mr3)(Chunk637443.c) : (0, Chunk481060.ZDy)(async () => {
      let {
        ShopPFXPreviewInstructionModal: e
      } = await Promise.resolve().then(require.bind(require, 637443));
      return t => (0, a.jsx)(e, p({}, t))
    }, {
      modalKey: Chunk637443.c,
      onCloseRequest: () => (0, Chunk481060.Mr3)(Chunk637443.c)
    })
  },
  j = () => {
    let e = (0, Chunk373071.lb)(),
      {
        previewProfileEffectSkuId: t,
        setPreviewProfileEffectSkuId: n
      } = (0, Chunk619899.N9)(),
      s = Chunk473749.useMemo(() => [f, ...module.map(e => ({
        label: e.name,
        value: e.skuId
      }))], [module]);
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk198764.previewSelector,
      children: [(0, Chunk54381.jsx)(Chunk481060.LZC, {
        size: 16
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk198764.headingContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/bold",
          children: "Preview Profile Effect"
        }), (0, Chunk54381.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          size: "sm",
          onClick: v,
          icon: Chunk481060.idN,
          "aria-label": "Open PFX preview instructions"
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.q4e, {
        options: Chunk637443,
        value: exports,
        maxVisibleItems: 30,
        onChange: e => n(e)
      })]
    })
  },
  _ = () => {
    let {
      previewAvatarDecorationSkuId: e,
      setPreviewAvatarDecorationSkuId: t
    } = (0, Chunk619899.N9)(), {
      avatarDecorationAssets: n
    } = (0, Chunk619899.xq)(), i = Chunk473749.useMemo(() => [g, ...require.map(e => ({
      label: e.name,
      value: e.name
    }))], [require]);
    return 0 === require.length ? null : (0, Chunk54381.jsxs)("div", {
      className: Chunk198764.previewSelector,
      children: [(0, Chunk54381.jsx)(Chunk481060.LZC, {
        size: 16
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/bold",
        children: "Preview Avatar Decorations"
      }), (0, Chunk54381.jsx)(Chunk481060.q4e, {
        options: Chunk373071,
        value: module,
        maxVisibleItems: 30,
        onChange: e => t(e)
      })]
    })
  },
  y = e => {
    let {
      clearAssets: t,
      clearIgnoredFiles: n
    } = e, {
      collectionAssets: i
    } = (0, o.xq)(), {
      deleteCollectionAsset: s,
      clearAssets: c
    } = (0, o.N9)(), d = l.useMemo(() => Object.values(i).map(e => ({
      label: e.name,
      value: e.type
    })), [i]), u = l.useCallback(e => s(e), [s]), p = l.useCallback(() => {
      c(), t(), n()
    }, [c, t, n]);
    return 0 === d.length ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.LZC, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: m.headingContainer,
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
          className: m.uploadedFileListItem,
          children: [(0, a.jsx)(r.hU, {
            variant: "icon-only",
            size: "sm",
            onClick: () => u(e.value),
            icon: r.Dio,
            "aria-label": "Remove asset"
          }), (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: e.label
          })]
        }, e.value))
      })]
    })
  },
  C = e => {
    let {
      ignoredFiles: t,
      handleClearIgnoredFiles: n
    } = e;
    return 0 === t.length ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.LZC, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: m.headingContainer,
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
          className: m.ignoredFileListItem,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: e
          })
        }, "".concat(e, "-").concat(t)))
      })]
    })
  },
  S = () => {
    let {
      validateShopAssetPackage: e,
      reset: t,
      validationComplete: n,
      warnings: i,
      errors: s
    } = (0, Chunk206878.g)(), o = Object.entries(Chunk637443), c = Object.entries(Chunk373071), d = Chunk619899.length > 0, p = Chunk18868.length > 0, {
      setDropHandler: x
    } = Chunk473749.useContext(h), f = Chunk473749.useCallback(n => {
      t(), e(n)
    }, [module, exports]);
    return Chunk473749.useEffect(() => {
      x(f)
    }, [f, x]), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [require ? (0, Chunk54381.jsxs)("div", {
        className: Chunk198764.validationSummary,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: Chunk281598 ? "text-feedback-critical" : "text-default",
          children: "".concat(Chunk619899.length, " errors")
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: p ? "text-feedback-warning" : "text-default",
          children: "".concat(Chunk18868.length, " warnings")
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          onClick: exports,
          text: "Reset"
        })]
      }) : (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: "Drop asset folder to validate."
      }), (0, Chunk54381.jsx)(Chunk481060.LZC, {
        size: 16
      }), Chunk281598 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/bold",
          children: "Errors"
        }), (0, Chunk54381.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk54381.jsx)("ul", {
          className: Chunk198764.validationIssuesList,
          children: Chunk619899.map((e, t) => {
            let [n, l] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/bold",
                color: "text-feedback-critical",
                children: n
              }), l.length > 0 && (0, a.jsx)("ul", {
                className: m.validationIssuesList,
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
      }), p && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/bold",
          children: "Warnings"
        }), (0, Chunk54381.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk54381.jsx)("ul", {
          className: Chunk198764.validationIssuesList,
          children: Object.entries(Chunk373071).map((e, t) => {
            let [n, l] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/bold",
                color: "text-feedback-warning",
                children: n
              }), l.length > 0 && (0, a.jsx)("ul", {
                className: m.validationIssuesList,
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
  E = () => {
    let {
      previewEnabled: e,
      setPreviewEnabled: t,
      clearAssets: n
    } = (0, Chunk619899.N9)(), {
      ignoredFilenames: i,
      clearAssets: s,
      clearIgnoredFilenames: c,
      processAndUpsertAssets: u
    } = (0, Chunk281598.hm)(), {
      setDropHandler: p
    } = Chunk473749.useContext(h), x = Chunk473749.useCallback(e => {
      n(), u(e)
    }, [Chunk206878, require]);
    return Chunk473749.useEffect(() => {
      p(x)
    }, [x, p]), (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: "Drop files in this panel to begin preview."
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk198764.previewToggleContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          checked: module,
          onChange: e => t(e)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Enable Preview"
        }), (0, Chunk54381.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          size: "sm",
          onClick: b,
          icon: Chunk481060.idN,
          "aria-label": "Open preview instructions"
        })]
      }), (0, Chunk54381.jsx)(j, {}), (0, Chunk54381.jsx)(_, {}), (0, Chunk54381.jsx)(y, {
        clearAssets: Chunk637443,
        clearIgnoredFiles: Chunk18868
      }), (0, Chunk54381.jsx)(C, {
        ignoredFiles: Chunk373071,
        handleClearIgnoredFiles: Chunk18868
      })]
    })
  },
  N = () => {
    let [e, t] = Chunk473749.useState("preview");
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk198764.container,
      children: [(0, Chunk54381.jsx)(Chunk481060.sY7, {
        options: x,
        value: module,
        onChange: e => {
          let {
            value: n
          } = e;
          return t(n)
        },
        className: Chunk198764.panelModeControl,
        optionClassName: Chunk198764.panelModeControlOption
      }), (0, Chunk54381.jsx)(Chunk481060.LZC, {
        size: 8
      }), "preview" === module && (0, Chunk54381.jsx)(E, {}), "validate" === module && (0, Chunk54381.jsx)(S, {}), (0, Chunk54381.jsx)(Chunk481060.LZC, {
        size: 16
      })]
    })
  },
  O = e => {
    let {
      children: t
    } = e, [n, r] = l.useState(() => () => {}), i = l.useMemo(() => ({
      setDropHandler: e => r(() => e)
    }), []);
    return (0, a.jsx)(h.Provider, {
      value: i,
      children: (0, a.jsx)(c.L, {
        onDrop: n,
        children: t
      })
    })
  }