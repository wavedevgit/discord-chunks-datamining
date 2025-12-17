/** Chunk was on 6043 **/
/** chunk id: 789654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N,
  q: () => O
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./361932.js"), require("./187205.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk131271 = require("./131271.js"),
  Chunk521904 = require("./521904.js"),
  Chunk407146 = require("./407146.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk374794 = require("./374794.jsx"),
  Chunk58755 = require("./58755.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk500949 = require("./500949.js"),
  Chunk532255 = require("./532255.js");

function C(e) {
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let {
  SemanticColors: S
} = Chunk521904.V;

function E(e) {
  return e.replaceAll(/_|\./g, "-").toLowerCase()
}

function T(e) {
  return e.replaceAll(/_|-/g, ".").toLowerCase()
}

function O(e, t) {
  let n = new Blob([t], {
      type: "application/json"
    }),
    a = URL.createObjectURL(n),
    r = document.createElement("a"),
    l = new TextEncoder().encode(t);
  crypto.subtle.digest("SHA-256", l).then(t => {
    let n = Array.from(new Uint8Array(t)).map(e => e.toString(16).padStart(2, "0")).join("");
    r.href = a, r.download = "".concat(e, "-").concat(n.slice(0, 8), ".json"), r.click(), URL.revokeObjectURL(a)
  })
}

function N() {
  let e = (0, Chunk410030.Fg)(),
    [t, n, l, s, d, u] = (0, Chunk500949.zn)(),
    {
      semanticColorOverrides: m,
      rawColorOverrides: v,
      tab: S,
      scales: T
    } = exports,
    N = Chunk473749.useMemo(() => {
      let t = Object.entries(Chunk668339).map(t => {
          let [n, a] = t, {
            colors: r,
            highlight: l
          } = a, i = r[e];
          if (null == i) return "";
          let s = E(n);
          if (l) return "--".concat(s, ": magenta !important;");
          let o = E(i.color),
            c = i.opacity,
            d = c < 1 ? "hsl(var(--".concat(o, "-hsl) / ").concat(c, ")") : "var(--".concat(o, ")");
          return "--".concat(s, ": color-mix(\n        in oklab,\n        ").concat(d, " 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );")
        }),
        n = Object.keys(Chunk246992).flatMap(e => {
          let t = v[e],
            {
              h: n,
              s: a,
              l: r
            } = function(e) {
              let [t, n, a] = "transparent" === e ? [0, 0, 0] : i()(e).hsl(), r = isNaN(t) ? 0 : o().round(t, 1), l = o().round(100 * a, 1);
              return {
                h: r,
                s: o().round(100 * n, 1),
                l: l
              }
            }(t.highlight ? "#FF00FF" : t.color),
            l = o().kebabCase(e);
          return ["--".concat(l, "-hsl: ").concat(n, " calc(var(--saturation-factor, 1) * ").concat(a, "%) ").concat(r, "% !important;"), "--".concat(l, ": hsl(var(--").concat(l, "-hsl)) !important;")]
        }),
        a = T.reduce((e, t) => {
          let {
            name: n
          } = t, a = (0, j.XM)(t), r = (0, j.W6)(a, n);
          return e + Object.keys(r).reduce((e, t) => {
            let n = r[t],
              l = a[t],
              i = (0, j.HI)(l);
            return "".concat(e, "\n--").concat(n, ": ").concat(i, ";")
          }, "")
        }, "");
      return "\n      :root {\n        ".concat(Chunk54381, "\n      }\n\n      .theme-").concat(module, " {\n        ").concat(exports.join("\n"), "\n      }\n\n      html {\n        ").concat(require.join("\n"), "\n      }\n    ")
    }, [Chunk246992, T, Chunk668339, module]);
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk532255.panel,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk532255.toolbar,
      style: {
        "--custom-theme-selection-selection-size": "40px",
        "--custom-theme-selection-group-column-gap": "var(--spacing-8)"
      },
      children: [(0, Chunk54381.jsxs)(Chunk481060.njP, {
        className: Chunk532255.tabBar,
        type: "top",
        look: "brand",
        selectedItem: S,
        onItemSelect: e => {
          n(t => _(C({}, t), {
            tab: e
          }))
        },
        children: [(0, Chunk54381.jsx)(Chunk481060.njP.Item, {
          id: Chunk500949.H8.TOKENS,
          children: "Tokens"
        }), (0, Chunk54381.jsx)(Chunk481060.njP.Item, {
          id: Chunk500949.H8.PALETTES,
          children: "Palettes"
        })]
      }), (0, Chunk54381.jsx)(Chunk705262.ZP, {
        type: Chunk705262.yH.SETTINGS,
        children: (0, Chunk54381.jsx)(Chunk705262.ZP.Basic, {
          className: Chunk532255.toolbarThemeSelector,
          hideSystemSelector: true
        })
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk532255.toolbarButtons,
        children: [(0, Chunk54381.jsx)(Chunk481060.hU, {
          variant: "secondary",
          size: "md",
          icon: Chunk481060.UEU,
          onClick: Chunk688619,
          disabled: !Chunk521904,
          "aria-label": "Undo"
        }), (0, Chunk54381.jsx)(Chunk481060.hU, {
          variant: "secondary",
          size: "md",
          icon: Chunk481060.zGS,
          onClick: Chunk392711,
          disabled: !Chunk407146,
          "aria-label": "Redo"
        }), (0, Chunk54381.jsx)(Chunk374794.Z, {
          "aria-label": "Import",
          filters: [{
            name: "JSON",
            extensions: ["json"]
          }],
          onChange: e => {
            let t = e.currentTarget.files,
              a = null == t ? true : t[0];
            if (null == a) return;
            let r = new FileReader;
            r.onload = () => {
              let e = r.result;
              if ("string" == typeof e) try {
                let t = JSON.parse(e);
                if (null == t) return;
                n(t)
              } catch (e) {}
            }, r.readAsText(a)
          },
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          children: (0, Chunk54381.jsx)(Chunk481060.rG2, {})
        }), (0, Chunk54381.jsx)(Chunk481060.hU, {
          variant: "secondary",
          size: "md",
          icon: Chunk481060._8t,
          onClick: () => {
            O("color-overrides", JSON.stringify(C({}, exports), null, 2))
          },
          "aria-label": "Export"
        })]
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk532255.tab,
      hidden: S !== Chunk500949.H8.TOKENS,
      children: (0, Chunk54381.jsx)(w, {
        state: exports,
        setState: require
      })
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk532255.tab,
      hidden: S !== Chunk500949.H8.PALETTES,
      children: (0, Chunk54381.jsx)(Chunk58755.P, {
        state: exports,
        setState: require
      })
    }), (0, Chunk54381.jsx)(Chunk131271.ql, {
      children: (0, Chunk54381.jsx)("style", {
        id: "devtools-color-overrides",
        children: N
      })
    })]
  })
}

function w(e) {
  let {
    state: t,
    setState: n
  } = e, l = (0, f.Fg)(), {
    semanticColorOverrides: i,
    rawColorOverrides: s
  } = t, o = r.useMemo(() => Object.keys(u.b).reduce((e, t) => [...e, {
    value: t,
    label: t
  }], []), []), c = r.useCallback(e => {
    n(t => {
      var n;
      let {
        semanticColorOverrides: a
      } = t, r = null != (n = a[e]) ? n : (0, j.$R)(e);
      return _(C({}, t), {
        semanticColorOverrides: _(C({}, a), {
          [e]: r
        })
      })
    })
  }, [n]), d = r.useCallback(e => {
    n(t => {
      let {
        rawColorOverrides: n
      } = t;
      return null == n[e] ? _(C({}, t), {
        rawColorOverrides: _(C({}, n), {
          [e]: {
            color: u.b[e].hex,
            highlight: false
          }
        })
      }) : t
    })
  }, [n]), p = r.useCallback(e => {
    n(t => {
      let {
        semanticColorOverrides: n
      } = t, a = C({}, n);
      return delete a[e], _(C({}, t), {
        semanticColorOverrides: a
      })
    })
  }, [n]), x = r.useCallback(e => {
    n(t => {
      let {
        semanticColorOverrides: n
      } = t, a = n[e];
      if (null == a) return t;
      let r = C({}, n);
      return r[e] = (0, j.GU)(a), _(C({}, t), {
        semanticColorOverrides: r
      })
    })
  }, [n]), b = Object.keys(S).map(e => ({
    value: e,
    label: E(e)
  })), g = Object.keys(u.b).map(e => ({
    value: e,
    label: e
  }));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h.Text, {
      variant: "text-lg/semibold",
      children: "Semantic Tokens"
    }), (0, a.jsx)(m.d, {
      options: b,
      placeholder: "Search for a semantic token...",
      value: true,
      onChange: c,
      renderOptionPrefix: e => null == e ? null : (0, a.jsx)("div", {
        "data-theme": l,
        className: y.colorPreview,
        style: {
          "--custom-color": "var(--".concat(e.label, ")")
        }
      }),
      popoutLayerContext: v.O$
    }), (0, a.jsx)("ul", {
      className: y.overrides,
      children: Object.entries(i).map(e => {
        let [t, r] = e, i = r.colors[l];
        if (null == i) return null;
        let s = T(i.color),
          c = i.opacity,
          d = j.jC[t][l];
        return (0, a.jsx)(P, {
          title: E(t),
          subtitle: 1 === d.opacity ? T(d.raw) : "".concat(T(d.raw), " @ ").concat(100 * d.opacity, "%"),
          highlight: r.highlight,
          onReset: () => {
            n(e => {
              let {
                semanticColorOverrides: n
              } = e;
              if (null == n[t]) return e;
              let a = (0, j.$R)(t);
              return _(C({}, e), {
                semanticColorOverrides: _(C({}, n), {
                  [t]: a
                })
              })
            })
          },
          onRemove: () => p(t),
          onHighlightToggle: () => x(t),
          children: (0, a.jsxs)("div", {
            className: y.semanticOverride,
            children: [(0, a.jsx)(m.d, {
              value: s,
              options: o,
              onChange: e => {
                n(n => {
                  let {
                    semanticColorOverrides: a
                  } = n, r = a[t];
                  if (null == r) return n;
                  let i = r.colors[l];
                  if (null == i) return n;
                  let s = (0, j.lT)(r, t, e, i.opacity, l);
                  return _(C({}, n), {
                    semanticColorOverrides: _(C({}, a), {
                      [t]: s
                    })
                  })
                })
              },
              renderOptionPrefix: e => {
                if (null == e) return null;
                let t = e.label.replaceAll(".", "-");
                return (0, a.jsx)("div", {
                  "data-theme": l,
                  className: y.colorPreview,
                  style: {
                    "--custom-color": "var(--".concat(t, ")")
                  }
                })
              },
              popoutLayerContext: v.O$
            }), (0, a.jsx)(h.oil, {
              inputClassName: y.opacityInput,
              type: "number",
              value: c,
              min: 0,
              max: 1,
              step: .01,
              onChange: e => {
                let a = parseFloat(e);
                isNaN(a) || n(e => {
                  let {
                    semanticColorOverrides: n
                  } = e, r = n[t];
                  if (null == r) return e;
                  let i = r.colors[l];
                  if (null == i) return e;
                  let s = (0, j.lT)(r, t, i.color, a, l);
                  return _(C({}, e), {
                    semanticColorOverrides: _(C({}, n), {
                      [t]: s
                    })
                  })
                })
              }
            })]
          })
        }, t)
      })
    }), (0, a.jsx)("div", {
      className: y.divider
    }), (0, a.jsx)(h.Text, {
      variant: "text-lg/semibold",
      children: "Raw Tokens"
    }), (0, a.jsx)(m.d, {
      options: g,
      placeholder: "Search for a raw color...",
      value: true,
      onChange: d,
      renderOptionPrefix: e => {
        if (null == e) return null;
        let t = e.label.replaceAll(".", "-");
        return (0, a.jsx)("div", {
          "data-theme": l,
          className: y.colorPreview,
          style: {
            "--custom-color": "var(--".concat(t, ")")
          }
        })
      },
      popoutLayerContext: v.O$
    }), (0, a.jsx)("ul", {
      className: y.rawOverrides,
      children: Object.entries(s).map(e => {
        let [t, r] = e;
        return (0, a.jsxs)(P, {
          title: t,
          subtitle: u.b[t].hex,
          highlight: r.highlight,
          onReset: () => {
            n(e => {
              let {
                rawColorOverrides: n
              } = e, a = C({}, n);
              return a[t] = {
                color: u.b[t].hex,
                highlight: false
              }, _(C({}, e), {
                rawColorOverrides: a
              })
            })
          },
          onRemove: () => {
            n(e => {
              let {
                rawColorOverrides: n
              } = e, a = C({}, n);
              return delete a[t], _(C({}, e), {
                rawColorOverrides: a
              })
            })
          },
          onHighlightToggle: () => {
            n(e => {
              let {
                rawColorOverrides: n
              } = e, a = n[t];
              if (null == a) return e;
              let r = C({}, n);
              return r[t] = _(C({}, a), {
                highlight: !a.highlight
              }), _(C({}, e), {
                rawColorOverrides: r
              })
            })
          },
          children: [(0, a.jsx)("input", {
            className: y.colorInput,
            type: "color",
            value: r.color,
            onChange: e => {
              let a = e.target.value;
              n(e => {
                let {
                  rawColorOverrides: n
                } = e;
                return _(C({}, e), {
                  rawColorOverrides: _(C({}, n), {
                    [t]: {
                      color: a,
                      highlight: false
                    }
                  })
                })
              })
            }
          }), (0, a.jsx)(h.Text, {
            variant: "text-sm/medium",
            tabularNumbers: true,
            children: r.color
          })]
        }, t)
      })
    })]
  })
}

function P(e) {
  let {
    title: t,
    subtitle: n,
    highlight: r,
    onReset: l,
    onRemove: i,
    onHighlightToggle: s,
    children: o
  } = e;
  return (0, a.jsxs)("li", {
    className: y.override,
    "data-highlight": r,
    children: [(0, a.jsxs)("div", {
      className: y.overrideHeader,
      children: [(0, a.jsxs)("div", {
        className: y.title,
        children: [(0, a.jsx)(h.Text, {
          lineClamp: 1,
          variant: "text-md/medium",
          className: y.overrideHeading,
          tabularNumbers: true,
          children: t
        }), null != n ? (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          tabularNumbers: true,
          children: n
        }) : null]
      }), (0, a.jsx)(h.P3F, {
        onClick: s,
        className: y.clickabeIcon,
        children: (0, a.jsx)(h.tEF, {
          size: "xs",
          color: r ? "var(--text-brand)" : "currentColor"
        })
      }), (0, a.jsx)(h.P3F, {
        className: y.clickabeIcon,
        onClick: l,
        children: (0, a.jsx)(h.DuK, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, a.jsx)(h.P3F, {
        className: y.removeOverride,
        onClick: i,
        children: (0, a.jsx)(h.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, a.jsx)("div", {
      className: y.overrideContent,
      children: o
    })]
  })
}