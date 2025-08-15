/** Chunk was on 93886 **/
/** chunk id: 646466, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  O: () => O
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

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
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
  p = {
    label: "[none selected]",
    value: null
  },
  b = {
    label: "[preview all]",
    value: null
  },
  v = () => {
    (0, Chunk481060.nfh)(Chunk637443.g) ? (0, Chunk481060.Mr3)(Chunk637443.g) : (0, Chunk481060.ZDy)(async () => {
      let {
        ShopAssetsPreviewInstructionModal: e
      } = await Promise.resolve().then(require.bind(require, 637443));
      return t => (0, n.jsx)(e, x({}, t))
    }, {
      modalKey: Chunk637443.g,
      onCloseRequest: () => (0, Chunk481060.Mr3)(Chunk637443.g)
    })
  },
  f = () => {
    (0, Chunk481060.nfh)(Chunk637443.c) ? (0, Chunk481060.Mr3)(Chunk637443.c) : (0, Chunk481060.ZDy)(async () => {
      let {
        ShopPFXPreviewInstructionModal: e
      } = await Promise.resolve().then(require.bind(require, 637443));
      return t => (0, n.jsx)(e, x({}, t))
    }, {
      modalKey: Chunk637443.c,
      onCloseRequest: () => (0, Chunk481060.Mr3)(Chunk637443.c)
    })
  },
  j = () => {
    let e = (0, Chunk373071.lb)(),
      {
        previewProfileEffectId: t,
        setPreviewProfileEffectId: a
      } = (0, Chunk619899.N9)(),
      s = Chunk647438.useMemo(() => [p, ...module.map(e => ({
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
          onClick: f,
          icon: Chunk481060.idN,
          "aria-label": "Open PFX preview instructions"
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: Chunk637443,
        value: exports,
        maxVisibleItems: 30,
        onChange: e => a(e)
      })]
    })
  },
  g = () => {
    let {
      previewAvatarDecorationId: e,
      setPreviewAvatarDecorationId: t
    } = (0, Chunk619899.N9)(), {
      avatarDecorationAssets: a
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
      clearIgnoredFiles: a
    } = e, {
      collectionAssets: i
    } = (0, o.xq)(), {
      deleteCollectionAsset: s,
      clearAssets: c
    } = (0, o.N9)(), d = r.useMemo(() => Object.values(i).map(e => ({
      label: e.name,
      value: e.type
    })), [i]), u = r.useCallback(e => s(e), [s]), x = r.useCallback(() => {
      c(), t(), a()
    }, [c, t, a]);
    return 0 === d.length ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.LZC, {
        size: 16
      }), (0, n.jsxs)("div", {
        className: m.headingContainer,
        children: [(0, n.jsx)(l.X6q, {
          variant: "heading-lg/bold",
          children: "Uploaded Assets"
        }), (0, n.jsx)(l.zxk, {
          variant: "critical-primary",
          size: "sm",
          onClick: x,
          text: "Clear All"
        })]
      }), (0, n.jsx)("ul", {
        children: d.map(e => (0, n.jsxs)("li", {
          className: m.uploadedFileListItem,
          children: [(0, n.jsx)(l.hU, {
            variant: "icon-only",
            size: "sm",
            onClick: () => u(e.value),
            icon: l.Dio,
            "aria-label": "Remove asset"
          }), (0, n.jsx)(l.Text, {
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
      handleClearIgnoredFiles: a
    } = e;
    return 0 === t.length ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.LZC, {
        size: 16
      }), (0, n.jsxs)("div", {
        className: m.headingContainer,
        children: [(0, n.jsx)(l.X6q, {
          variant: "heading-lg/bold",
          children: "Ignored Files"
        }), (0, n.jsx)(l.zxk, {
          variant: "primary",
          size: "sm",
          onClick: a,
          text: "Clear"
        })]
      }), (0, n.jsx)("ul", {
        children: t.map((e, t) => (0, n.jsx)("li", {
          className: m.ignoredFileListItem,
          children: (0, n.jsx)(l.Text, {
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
      validationComplete: a,
      warnings: i,
      errors: s
    } = (0, Chunk206878.g)(), o = Object.entries(Chunk637443), d = Object.entries(Chunk373071), x = Chunk619899.length > 0, h = Chunk281598.length > 0, p = Chunk647438.useCallback(a => {
      t(), e(a)
    }, [module, exports]);
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk18868.L, {
        onDrop: p
      }), require ? (0, Chunk951288.jsxs)("div", {
        className: Chunk198764.validationSummary,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: x ? "text-danger" : "text-default",
          children: "".concat(Chunk619899.length, " errors")
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: h ? "text-feedback-warning" : "text-default",
          children: "".concat(Chunk281598.length, " warnings")
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
      }), x && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/bold",
          children: "Errors"
        }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
          size: 8
        }), (0, Chunk951288.jsx)("ul", {
          className: Chunk198764.validationIssuesList,
          children: Chunk619899.map((e, t) => {
            let [a, r] = e;
            return (0, n.jsxs)("li", {
              children: [(0, n.jsx)(l.Text, {
                variant: "text-md/bold",
                color: "text-danger",
                children: a
              }), r.length > 0 && (0, n.jsx)("ul", {
                className: m.validationIssuesList,
                children: r.map((e, t) => (0, n.jsx)("li", {
                  children: (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: e
                  })
                }, "".concat(e, "-").concat(t)))
              })]
            }, "".concat(a, "-").concat(t))
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
          children: Object.entries(Chunk373071).map((e, t) => {
            let [a, r] = e;
            return (0, n.jsxs)("li", {
              children: [(0, n.jsx)(l.Text, {
                variant: "text-md/bold",
                color: "text-feedback-warning",
                children: a
              }), r.length > 0 && (0, n.jsx)("ul", {
                className: m.validationIssuesList,
                children: r.map((e, t) => (0, n.jsx)("li", {
                  children: (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-warning",
                    children: e
                  })
                }, "".concat(e, "-").concat(t)))
              })]
            }, "".concat(a, "-").concat(t))
          })
        })]
      })]
    })
  },
  N = () => {
    let {
      previewEnabled: e,
      setPreviewEnabled: t,
      clearAssets: a
    } = (0, Chunk619899.N9)(), {
      ignoredFilenames: i,
      clearAssets: s,
      clearIgnoredFilenames: u,
      processAndUpsertAssets: x
    } = (0, Chunk281598.hm)(), h = Chunk647438.useCallback(e => {
      a(), x(e)
    }, [x, require]);
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
          onClick: v,
          icon: Chunk481060.idN,
          "aria-label": "Open preview instructions"
        })]
      }), (0, Chunk951288.jsx)(j, {}), (0, Chunk951288.jsx)(g, {}), (0, Chunk951288.jsx)(_, {
        clearAssets: Chunk637443,
        clearIgnoredFiles: Chunk206878
      }), (0, Chunk951288.jsx)(y, {
        ignoredFiles: Chunk373071,
        handleClearIgnoredFiles: Chunk206878
      })]
    })
  },
  O = () => {
    let [e, t] = Chunk647438.useState("preview");
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk198764.container,
      children: [(0, Chunk951288.jsx)(Chunk481060.sY7, {
        options: h,
        value: module,
        onChange: e => {
          let {
            value: a
          } = e;
          return t(a)
        },
        className: Chunk198764.panelModeControl,
        optionClassName: Chunk198764.panelModeControlOption
      }), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 8
      }), "preview" === module && (0, Chunk951288.jsx)(N, {}), "validate" === module && (0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsx)(Chunk481060.LZC, {
        size: 16
      })]
    })
  }