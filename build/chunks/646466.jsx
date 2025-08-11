/** Chunk was on 93886 **/
/** chunk id: 646466, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  O: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk373071 = require("./373071.js"),
  Chunk637443 = require("./637443.jsx"),
  Chunk619899 = require("./619899.js"),
  Chunk18868 = require("./18868.jsx"),
  Chunk281598 = require("./281598.js"),
  Chunk206878 = require("./206878.js"),
  Chunk63874 = require("./63874.js");

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
  f = () => {
    (0, Chunk481060.nfh)(Chunk637443.g) ? (0, Chunk481060.Mr3)(Chunk637443.g) : (0, Chunk481060.ZDy)(async () => {
      let {
        ShopAssetsPreviewInstructionModal: e
      } = await Promise.resolve().then(require.bind(require, 637443));
      return t => <e{...x({}, t)} />
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
      return t => <e{...x({}, t)} />
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
      s = Chunk73800.useMemo(() => [p, ...module.map(e => ({
        label: e.name,
        value: e.id
      }))], [module]);
    return <div className={Chunk63874.previewSelector}>{<Chunk481060.LZC size={16} />}{<div className={Chunk63874.headingContainer}>{<Chunk481060.X6q variant={"heading-md/bold"}>{"Preview Profile Effect"}</Chunk481060.X6q>}{<Chunk481060.hU variant={"icon-only"} size={"sm"} onClick={v} icon={Chunk481060.idN} aria-label={"Open PFX preview instructions"} />}</div>}{<Chunk481060.q4e options={Chunk637443} value={exports} maxVisibleItems={30} onChange={e => a(e)} />}</div>
  },
  g = () => {
    let {
      previewAvatarDecorationId: e,
      setPreviewAvatarDecorationId: t
    } = (0, Chunk619899.N9)(), {
      avatarDecorationAssets: a
    } = (0, Chunk619899.xq)(), i = Chunk73800.useMemo(() => [b, ...require.map(e => ({
      label: e.name,
      value: e.name
    }))], [require]);
    return 0 === require.length ? null : <div className={Chunk63874.previewSelector}>{<Chunk481060.LZC size={16} />}{<Chunk481060.X6q variant={"heading-md/bold"}>{"Preview Avatar Decorations"}</Chunk481060.X6q>}{<Chunk481060.q4e options={Chunk373071} value={module} maxVisibleItems={30} onChange={e => t(e)} />}</div>
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
    return 0 === d.length ? null : <n.Fragment>{<l.LZC size={16} />}{<div className={m.headingContainer}>{<l.X6q variant={"heading-lg/bold"}>{"Uploaded Assets"}</l.X6q>}{<l.zxk variant={"critical-primary"} size={"sm"} onClick={x} text={"Clear All"} />}</div>}{<ul>{d.map(e => (0, n.jsxs)("li", {
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
        }, e.value))}</ul>}</n.Fragment>
  },
  y = e => {
    let {
      ignoredFiles: t,
      handleClearIgnoredFiles: a
    } = e;
    return 0 === t.length ? null : <n.Fragment>{<l.LZC size={16} />}{<div className={m.headingContainer}>{<l.X6q variant={"heading-lg/bold"}>{"Ignored Files"}</l.X6q>}{<l.zxk variant={"primary"} size={"sm"} onClick={a} text={"Clear"} />}</div>}{<ul>{t.map((e, t) => (0, n.jsx)("li", {
          className: m.ignoredFileListItem,
          children: (0, n.jsx)(l.Text, {
            variant: "text-md/normal",
            children: e
          })
        }, "".concat(e, "-").concat(t)))}</ul>}</n.Fragment>
  },
  C = () => {
    let {
      validateShopAssetPackage: e,
      reset: t,
      validationComplete: a,
      warnings: i,
      errors: s
    } = (0, Chunk206878.g)(), o = Object.entries(Chunk637443), d = Object.entries(Chunk373071), x = Chunk619899.length > 0, h = Chunk281598.length > 0, p = Chunk73800.useCallback(a => {
      t(), e(a)
    }, [module, exports]);
    return <Chunk255367.Fragment>{<Chunk18868.L onDrop={p} />}{require ? <div className={Chunk63874.validationSummary}>{<Chunk481060.Text variant={"text-md/normal"} color={x ? "text-danger" : "text-default"}>{"".concat(Chunk619899.length, " errors")}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-md/normal"} color={h ? "text-feedback-warning" : "text-default"}>{"".concat(Chunk281598.length, " warnings")}</Chunk481060.Text>}{<Chunk481060.zxk variant={"primary"} size={"sm"} onClick={exports} text={"Reset"} />}</div> : <Chunk481060.Text variant={"text-md/normal"}>{"Drop asset folder to validate."}</Chunk481060.Text>}{<Chunk481060.LZC size={16} />}{x && <Chunk255367.Fragment>{<Chunk481060.X6q variant={"heading-lg/bold"}>{"Errors"}</Chunk481060.X6q>}{<Chunk481060.LZC size={8} />}{<ul className={Chunk63874.validationIssuesList}>{Chunk619899.map((e, t) => {
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
          })}</ul>}</Chunk255367.Fragment>}{h && <Chunk255367.Fragment>{<Chunk481060.X6q variant={"heading-lg/bold"}>{"Warnings"}</Chunk481060.X6q>}{<Chunk481060.LZC size={8} />}{<ul className={Chunk63874.validationIssuesList}>{Object.entries(Chunk373071).map((e, t) => {
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
          })}</ul>}</Chunk255367.Fragment>}</Chunk255367.Fragment>
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
    } = (0, Chunk281598.hm)(), h = Chunk73800.useCallback(e => {
      a(), x(e)
    }, [x, require]);
    return <Chunk255367.Fragment>{<Chunk18868.L onDrop={h} />}{<Chunk481060.Text variant={"text-md/normal"}>{"Drop files in this panel to begin preview."}</Chunk481060.Text>}{<div className={Chunk63874.previewToggleContainer}>{<Chunk481060.rsf checked={module} onChange={e => t(e)} />}{<Chunk481060.Text variant={"text-md/normal"}>{"Enable Preview"}</Chunk481060.Text>}{<Chunk481060.hU variant={"icon-only"} size={"sm"} onClick={f} icon={Chunk481060.idN} aria-label={"Open preview instructions"} />}</div>}{<j />}{<g />}{<_ clearAssets={Chunk637443} clearIgnoredFiles={Chunk206878} />}{<y ignoredFiles={Chunk373071} handleClearIgnoredFiles={Chunk206878} />}</Chunk255367.Fragment>
  },
  O = () => {
    let [e, t] = Chunk73800.useState("preview");
    return <div className={Chunk63874.container}>{<Chunk481060.sY7 options={h} value={module} onChange={e => {
          let {
            value: a
          } = e;
          return t(a)
        }} className={Chunk63874.panelModeControl} optionClassName={Chunk63874.panelModeControlOption} />}{<Chunk481060.LZC size={8} />}{"preview" === module && <N />}{"validate" === module && <C />}{<Chunk481060.LZC size={16} />}</div>
  }