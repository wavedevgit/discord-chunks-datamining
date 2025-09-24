/** Chunk was on 11222 **/
/** chunk id: 646466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk373071 = require("./373071.js"),
  Chunk637443 = require("./637443.jsx"),
  Chunk619899 = require("./619899.js"),
  Chunk18868 = require("./18868.jsx"),
  Chunk281598 = require("./281598.js"),
  Chunk206878 = require("./206878.js"),
  Chunk198764 = require("./198764.js");

function h(e) {
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
let x = [{
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
  b = {
    label: "[preview all]",
    value: null
  },
  g = () => {
    (0, Chunk481060.nfh)(Chunk637443.g) ? (0, Chunk481060.Mr3)(Chunk637443.g) : (0, Chunk481060.ZDy)(async () => {
      let {
        ShopAssetsPreviewInstructionModal: e
      } = await Promise.resolve().then(require.bind(require, 637443));
      return t => (0, a.jsx)(e, h({}, t))
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
      return t => (0, a.jsx)(e, h({}, t))
    }, {
      modalKey: Chunk637443.c,
      onCloseRequest: () => (0, Chunk481060.Mr3)(Chunk637443.c)
    })
  },
  j = () => {
    let e = (0, Chunk373071.lb)(),
      {
        previewProfileEffectId: t,
        setPreviewProfileEffectId: n
      } = (0, Chunk619899.N9)(),
      i = Chunk647438.useMemo(() => [f, ...module.map(e => ({
        label: e.name,
        value: e.id
      }))], [module]);
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk198764.previewSelector,
      children: [(0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 16
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk198764.headingContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/bold",
          children: "Preview Profile Effect"
        }), (0, Chunk951288.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          size: "sm",
          onClick: v,
          icon: Chunk481060.idN,
          "aria-label": "Open PFX preview instructions"
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: Chunk755721,
        value: exports,
        maxVisibleItems: 30,
        onChange: e => n(e)
      })]
    })
  },
  _ = () => {
    let {
      previewAvatarDecorationId: e,
      setPreviewAvatarDecorationId: t
    } = (0, Chunk619899.N9)(), {
      avatarDecorationAssets: n
    } = (0, Chunk619899.xq)(), i = Chunk647438.useMemo(() => [b, ...require.map(e => ({
      label: e.name,
      value: e.name
    }))], [require]);
    return 0 === require.length ? null : (0, Chunk951288.jsxs)("div", {
      className: Chunk198764.previewSelector,
      children: [(0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 16
      }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/bold",
        children: "Preview Avatar Decorations"
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: Chunk755721,
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
    } = (0, c.xq)(), {
      deleteCollectionAsset: s,
      clearAssets: o
    } = (0, c.N9)(), d = r.useMemo(() => Object.values(i).map(e => ({
      label: e.name,
      value: e.type
    })), [i]), u = r.useCallback(e => s(e), [s]), m = r.useCallback(() => {
      o(), t(), n()
    }, [o, t, n]);
    return 0 === d.length ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.LZC, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: p.headingContainer,
        children: [(0, a.jsx)(l.X6q, {
          variant: "heading-lg/bold",
          children: "Uploaded Assets"
        }), (0, a.jsx)(l.zxk, {
          variant: "critical-primary",
          size: "sm",
          onClick: m,
          text: "Clear All"
        })]
      }), (0, a.jsx)("ul", {
        children: d.map(e => (0, a.jsxs)("li", {
          className: p.uploadedFileListItem,
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
  C = e => {
    let {
      ignoredFiles: t,
      handleClearIgnoredFiles: n
    } = e;
    return 0 === t.length ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.LZC, {
        size: 16
      }), (0, a.jsxs)("div", {
        className: p.headingContainer,
        children: [(0, a.jsx)(l.X6q, {
          variant: "heading-lg/bold",
          children: "Ignored Files"
        }), (0, a.jsx)(l.zxk, {
          variant: "primary",
          size: "sm",
          onClick: n,
          text: "Clear"
        })]
      }), (0, a.jsx)("ul", {
        children: t.map((e, t) => (0, a.jsx)("li", {
          className: p.ignoredFileListItem,
          children: (0, a.jsx)(l.Text, {
            variant: "text-md/normal",
            children: e
          })
        }, "".concat(e, "-").concat(t)))
      })]
    })
  },
  E = () => {
    let {
      validateShopAssetPackage: e,
      reset: t,
      validationComplete: n,
      warnings: i,
      errors: s
    } = (0, Chunk206878.g)(), o = Object.entries(Chunk373071), c = Object.entries(Chunk755721), u = Chunk637443.length > 0, h = Chunk619899.length > 0, x = Chunk647438.useCallback(n => {
      t(), e(n)
    }, [module, exports]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk18868.L, {
        onDrop: x
      }), require ? (0, Chunk951288.jsxs)("div", {
        className: Chunk198764.validationSummary,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: Chunk281598 ? "text-danger" : "text-default",
          children: "".concat(Chunk637443.length, " errors")
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: h ? "text-feedback-warning" : "text-default",
          children: "".concat(Chunk619899.length, " warnings")
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
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
      }), Chunk281598 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/bold",
          children: "Errors"
        }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk951288.jsx)("ul", {
          className: Chunk198764.validationIssuesList,
          children: Chunk637443.map((e, t) => {
            let [n, r] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(l.Text, {
                variant: "text-md/bold",
                color: "text-danger",
                children: n
              }), r.length > 0 && (0, a.jsx)("ul", {
                className: p.validationIssuesList,
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
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/bold",
          children: "Warnings"
        }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk951288.jsx)("ul", {
          className: Chunk198764.validationIssuesList,
          children: Object.entries(Chunk755721).map((e, t) => {
            let [n, r] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(l.Text, {
                variant: "text-md/bold",
                color: "text-feedback-warning",
                children: n
              }), r.length > 0 && (0, a.jsx)("ul", {
                className: p.validationIssuesList,
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
  N = () => {
    let {
      previewEnabled: e,
      setPreviewEnabled: t,
      clearAssets: n
    } = (0, Chunk619899.N9)(), {
      ignoredFilenames: s,
      clearAssets: o,
      clearIgnoredFilenames: m,
      processAndUpsertAssets: h
    } = (0, Chunk281598.hm)(), x = Chunk647438.useCallback(e => {
      n(), h(e)
    }, [h, require]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk18868.L, {
        onDrop: x
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: "Drop files in this panel to begin preview."
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk198764.previewToggleContainer,
        children: [(0, Chunk951288.jsx)(Chunk755721.T2, {
          checked: module,
          onChange: e => t(e)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Enable Preview"
        }), (0, Chunk951288.jsx)(Chunk481060.hU, {
          variant: "icon-only",
          size: "sm",
          onClick: g,
          icon: Chunk481060.idN,
          "aria-label": "Open preview instructions"
        })]
      }), (0, Chunk951288.jsx)(j, {}), (0, Chunk951288.jsx)(_, {}), (0, Chunk951288.jsx)(y, {
        clearAssets: Chunk637443,
        clearIgnoredFiles: Chunk206878
      }), (0, Chunk951288.jsx)(C, {
        ignoredFiles: Chunk373071,
        handleClearIgnoredFiles: Chunk206878
      })]
    })
  },
  T = () => {
    let [e, t] = Chunk647438.useState("preview");
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk198764.container,
      children: [(0, Chunk951288.jsx)(Chunk481060.sY7, {
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
      }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 8
      }), "preview" === module && (0, Chunk951288.jsx)(N, {}), "validate" === module && (0, Chunk951288.jsx)(E, {}), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 16
      })]
    })
  }