/** Chunk was on 79041 **/
/** chunk id: 646466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let h = [{
    name: "Preview",
    value: "preview"
  }, {
    name: "Validate",
    value: "validate"
  }],
  x = {
    label: "[none selected]",
    value: null
  },
  f = {
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
  g = () => {
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
  v = () => {
    let e = (0, Chunk373071.lb)(),
      {
        previewProfileEffectSkuId: t,
        setPreviewProfileEffectSkuId: n
      } = (0, Chunk619899.N9)(),
      o = Chunk647438.useMemo(() => [x, ...module.map(e => ({
        label: e.name,
        value: e.skuId
      }))], [module]);
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk198764.previewSelector,
      children: [(0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 16
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk198764.headingContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/bold",
          children: "Preview Profile Effect"
        }), (0, Chunk951288.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          size: "sm",
          onClick: g,
          icon: Chunk481060.idN,
          "aria-label": "Open PFX preview instructions"
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: Chunk637443,
        value: exports,
        maxVisibleItems: 30,
        onChange: e => n(e)
      })]
    })
  },
  j = () => {
    let {
      previewAvatarDecorationSkuId: e,
      setPreviewAvatarDecorationSkuId: t
    } = (0, Chunk619899.N9)(), {
      avatarDecorationAssets: n
    } = (0, Chunk619899.xq)(), i = Chunk647438.useMemo(() => [f, ...require.map(e => ({
      label: e.name,
      value: e.name
    }))], [require]);
    return 0 === require.length ? null : (0, Chunk951288.jsxs)("div", {
      className: Chunk198764.previewSelector,
      children: [(0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 16
      }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/bold",
        children: "Preview Avatar Decorations"
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: Chunk373071,
        value: module,
        maxVisibleItems: 30,
        onChange: e => t(e)
      })]
    })
  },
  _ = e => {
    let {
      clearAssets: t,
      clearIgnoredFiles: n
    } = e, {
      collectionAssets: i
    } = (0, s.xq)(), {
      deleteCollectionAsset: o,
      clearAssets: c
    } = (0, s.N9)(), d = r.useMemo(() => Object.values(i).map(e => ({
      label: e.name,
      value: e.type
    })), [i]), u = r.useCallback(e => o(e), [o]), p = r.useCallback(() => {
      c(), t(), n()
    }, [c, t, n]);
    return 0 === d.length ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.LZC, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: m.headingContainer,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          children: "Uploaded Assets"
        }), (0, a.jsx)(l.Button, {
          variant: "critical-primary",
          size: "sm",
          onClick: p,
          text: "Clear All"
        })]
      }), (0, a.jsx)("ul", {
        children: d.map(e => (0, a.jsxs)("li", {
          className: m.uploadedFileListItem,
          children: [(0, a.jsx)(l.hU, {
            variant: "icon-only",
            size: "sm",
            onClick: () => u(e.value),
            icon: l.Dio,
            "aria-label": "Remove asset"
          }), (0, a.jsx)(l.Text, {
            variant: "text-md/normal",
            children: e.label
          })]
        }, e.value))
      })]
    })
  },
  y = e => {
    let {
      ignoredFiles: t,
      handleClearIgnoredFiles: n
    } = e;
    return 0 === t.length ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.LZC, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: m.headingContainer,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          children: "Ignored Files"
        }), (0, a.jsx)(l.Button, {
          variant: "primary",
          size: "sm",
          onClick: n,
          text: "Clear"
        })]
      }), (0, a.jsx)("ul", {
        children: t.map((e, t) => (0, a.jsx)("li", {
          className: m.ignoredFileListItem,
          children: (0, a.jsx)(l.Text, {
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
      errors: o
    } = (0, Chunk206878.g)(), s = Object.entries(Chunk637443), d = Object.entries(Chunk373071), p = Chunk619899.length > 0, h = Chunk281598.length > 0, x = Chunk647438.useCallback(n => {
      t(), e(n)
    }, [module, exports]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk18868.L, {
        onDrop: x
      }), require ? (0, Chunk951288.jsxs)("div", {
        className: Chunk198764.validationSummary,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: p ? "text-danger" : "text-default",
          children: "".concat(Chunk619899.length, " errors")
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: h ? "text-feedback-warning" : "text-default",
          children: "".concat(Chunk281598.length, " warnings")
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          onClick: exports,
          text: "Reset"
        })]
      }) : (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: "Drop asset folder to validate."
      }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 16
      }), p && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/bold",
          children: "Errors"
        }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk951288.jsx)("ul", {
          className: Chunk198764.validationIssuesList,
          children: Chunk619899.map((e, t) => {
            let [n, r] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(l.Text, {
                variant: "text-md/bold",
                color: "text-danger",
                children: n
              }), r.length > 0 && (0, a.jsx)("ul", {
                className: m.validationIssuesList,
                children: r.map((e, t) => (0, a.jsx)("li", {
                  children: (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: e
                  })
                }, "".concat(e, "-").concat(t)))
              })]
            }, "".concat(n, "-").concat(t))
          })
        })]
      }), h && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/bold",
          children: "Warnings"
        }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk951288.jsx)("ul", {
          className: Chunk198764.validationIssuesList,
          children: Object.entries(Chunk373071).map((e, t) => {
            let [n, r] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(l.Text, {
                variant: "text-md/bold",
                color: "text-feedback-warning",
                children: n
              }), r.length > 0 && (0, a.jsx)("ul", {
                className: m.validationIssuesList,
                children: r.map((e, t) => (0, a.jsx)("li", {
                  children: (0, a.jsx)(l.Text, {
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
    } = (0, Chunk619899.N9)(), {
      ignoredFilenames: i,
      clearAssets: o,
      clearIgnoredFilenames: u,
      processAndUpsertAssets: p
    } = (0, Chunk281598.hm)(), h = Chunk647438.useCallback(e => {
      n(), p(e)
    }, [p, require]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk18868.L, {
        onDrop: h
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: "Drop files in this panel to begin preview."
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk198764.previewToggleContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
          checked: module,
          onChange: e => t(e)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Enable Preview"
        }), (0, Chunk951288.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          size: "sm",
          onClick: b,
          icon: Chunk481060.idN,
          "aria-label": "Open preview instructions"
        })]
      }), (0, Chunk951288.jsx)(v, {}), (0, Chunk951288.jsx)(j, {}), (0, Chunk951288.jsx)(_, {
        clearAssets: Chunk637443,
        clearIgnoredFiles: Chunk206878
      }), (0, Chunk951288.jsx)(y, {
        ignoredFiles: Chunk373071,
        handleClearIgnoredFiles: Chunk206878
      })]
    })
  },
  E = () => {
    let [e, t] = Chunk647438.useState("preview");
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk198764.container,
      children: [(0, Chunk951288.jsx)(Chunk481060.sY7, {
        options: h,
        value: module,
        onChange: e => {
          let {
            value: n
          } = e;
          return t(n)
        },
        className: Chunk198764.panelModeControl,
        optionClassName: Chunk198764.panelModeControlOption
      }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 8
      }), "preview" === module && (0, Chunk951288.jsx)(S, {}), "validate" === module && (0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 16
      })]
    })
  }