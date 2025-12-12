/** Chunk was on 88499 **/
/** chunk id: 789654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N,
  q: () => T
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./361932.js"), require("./187205.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  l = require.n(Chunk688619),
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
  Chunk416825 = require("./416825.js");

function y(e) {
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

function C(e, t) {
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

function O(e) {
  return e.replaceAll(/_|-/g, ".").toLowerCase()
}

function T(e, t) {
  let n = new Blob([t], {
      type: "application/json"
    }),
    a = URL.createObjectURL(n),
    r = document.createElement("a"),
    i = new TextEncoder().encode(t);
  crypto.subtle.digest("SHA-256", i).then(t => {
    let n = Array.from(new Uint8Array(t)).map(e => e.toString(16).padStart(2, "0")).join("");
    r.href = a, r.download = "".concat(e, "-").concat(n.slice(0, 8), ".json"), r.click(), URL.revokeObjectURL(a)
  })
}

function N() {
  let e = (0, Chunk410030.Fg)(),
    [t, n, i, s, d, u] = (0, Chunk500949.zn)(),
    {
      semanticColorOverrides: m,
      rawColorOverrides: v,
      tab: S,
      scales: O
    } = exports,
    N = Chunk473749.useMemo(() => {
      let t = Object.entries(Chunk668339).map(t => {
          let [n, a] = t, {
            colors: r,
            highlight: i
          } = a, l = r[e];
          if (null == l) return "";
          let s = E(n);
          if (i) return "--".concat(s, ": magenta !important;");
          let o = E(l.color),
            c = l.opacity,
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
              let [t, n, a] = "transparent" === e ? [0, 0, 0] : l()(e).hsl(), r = isNaN(t) ? 0 : o().round(t, 1), i = o().round(100 * a, 1);
              return {
                h: r,
                s: o().round(100 * n, 1),
                l: i
              }
            }(t.highlight ? "#FF00FF" : t.color),
            i = o().kebabCase(e);
          return ["--".concat(i, "-hsl: ").concat(n, " calc(var(--saturation-factor, 1) * ").concat(a, "%) ").concat(r, "% !important;"), "--".concat(i, ": hsl(var(--").concat(i, "-hsl)) !important;")]
        }),
        a = O.reduce((e, t) => {
          let {
            name: n
          } = t, a = (0, j.XM)(t), r = (0, j.W6)(a, n);
          return e + Object.keys(r).reduce((e, t) => {
            let n = r[t],
              i = a[t],
              l = (0, j.HI)(i);
            return "".concat(e, "\n--").concat(n, ": ").concat(l, ";")
          }, "")
        }, "");
      return "\n      :root {\n        ".concat(Chunk54381, "\n      }\n\n      .theme-").concat(module, " {\n        ").concat(exports.join("\n"), "\n      }\n\n      html {\n        ").concat(require.join("\n"), "\n      }\n    ")
    }, [Chunk246992, O, Chunk668339, module]);
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk416825.panel,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk416825.toolbar,
      style: {
        "--custom-theme-selection-selection-size": "40px",
        "--custom-theme-selection-group-column-gap": "var(--spacing-8)"
      },
      children: [(0, Chunk54381.jsxs)(Chunk481060.njP, {
        className: Chunk416825.tabBar,
        type: "top",
        look: "brand",
        selectedItem: S,
        onItemSelect: e => {
          n(t => C(y({}, t), {
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
          className: Chunk416825.toolbarThemeSelector,
          hideSystemSelector: true
        })
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk416825.toolbarButtons,
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
            T("color-overrides", JSON.stringify(y({}, exports), null, 2))
          },
          "aria-label": "Export"
        })]
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk416825.tab,
      hidden: S !== Chunk500949.H8.TOKENS,
      children: (0, Chunk54381.jsx)(P, {
        state: exports,
        setState: require
      })
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk416825.tab,
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

function P(e) {
  let {
    state: t,
    setState: n
  } = e, i = (0, x.Fg)(), {
    semanticColorOverrides: l,
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
      return C(y({}, t), {
        semanticColorOverrides: C(y({}, a), {
          [e]: r
        })
      })
    })
  }, [n]), d = r.useCallback(e => {
    n(t => {
      let {
        rawColorOverrides: n
      } = t;
      return null == n[e] ? C(y({}, t), {
        rawColorOverrides: C(y({}, n), {
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
      } = t, a = y({}, n);
      return delete a[e], C(y({}, t), {
        semanticColorOverrides: a
      })
    })
  }, [n]), f = r.useCallback(e => {
    n(t => {
      let {
        semanticColorOverrides: n
      } = t, a = n[e];
      if (null == a) return t;
      let r = y({}, n);
      return r[e] = (0, j.GU)(a), C(y({}, t), {
        semanticColorOverrides: r
      })
    })
  }, [n]), g = Object.keys(S).map(e => ({
    value: e,
    label: E(e)
  })), b = Object.keys(u.b).map(e => ({
    value: e,
    label: e
  }));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h.Text, {
      variant: "text-lg/semibold",
      children: "Semantic Tokens"
    }), (0, a.jsx)(m.d, {
      options: g,
      placeholder: "Search for a semantic token...",
      value: true,
      onChange: c,
      renderOptionPrefix: e => null == e ? null : (0, a.jsx)("div", {
        "data-theme": i,
        className: _.colorPreview,
        style: {
          "--custom-color": "var(--".concat(e.label, ")")
        }
      }),
      popoutLayerContext: v.O$
    }), (0, a.jsx)("ul", {
      className: _.overrides,
      children: Object.entries(l).map(e => {
        let [t, r] = e, l = r.colors[i];
        if (null == l) return null;
        let s = O(l.color),
          c = l.opacity,
          d = j.jC[t][i];
        return (0, a.jsx)(w, {
          title: E(t),
          subtitle: 1 === d.opacity ? O(d.raw) : "".concat(O(d.raw), " @ ").concat(100 * d.opacity, "%"),
          highlight: r.highlight,
          onReset: () => {
            n(e => {
              let {
                semanticColorOverrides: n
              } = e;
              if (null == n[t]) return e;
              let a = (0, j.$R)(t);
              return C(y({}, e), {
                semanticColorOverrides: C(y({}, n), {
                  [t]: a
                })
              })
            })
          },
          onRemove: () => p(t),
          onHighlightToggle: () => f(t),
          children: (0, a.jsxs)("div", {
            className: _.semanticOverride,
            children: [(0, a.jsx)(m.d, {
              value: s,
              options: o,
              onChange: e => {
                n(n => {
                  let {
                    semanticColorOverrides: a
                  } = n, r = a[t];
                  if (null == r) return n;
                  let l = r.colors[i];
                  if (null == l) return n;
                  let s = (0, j.lT)(r, t, e, l.opacity, i);
                  return C(y({}, n), {
                    semanticColorOverrides: C(y({}, a), {
                      [t]: s
                    })
                  })
                })
              },
              renderOptionPrefix: e => {
                if (null == e) return null;
                let t = e.label.replaceAll(".", "-");
                return (0, a.jsx)("div", {
                  "data-theme": i,
                  className: _.colorPreview,
                  style: {
                    "--custom-color": "var(--".concat(t, ")")
                  }
                })
              },
              popoutLayerContext: v.O$
            }), (0, a.jsx)(h.oil, {
              inputClassName: _.opacityInput,
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
                  let l = r.colors[i];
                  if (null == l) return e;
                  let s = (0, j.lT)(r, t, l.color, a, i);
                  return C(y({}, e), {
                    semanticColorOverrides: C(y({}, n), {
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
      className: _.divider
    }), (0, a.jsx)(h.Text, {
      variant: "text-lg/semibold",
      children: "Raw Tokens"
    }), (0, a.jsx)(m.d, {
      options: b,
      placeholder: "Search for a raw color...",
      value: true,
      onChange: d,
      renderOptionPrefix: e => {
        if (null == e) return null;
        let t = e.label.replaceAll(".", "-");
        return (0, a.jsx)("div", {
          "data-theme": i,
          className: _.colorPreview,
          style: {
            "--custom-color": "var(--".concat(t, ")")
          }
        })
      },
      popoutLayerContext: v.O$
    }), (0, a.jsx)("ul", {
      className: _.rawOverrides,
      children: Object.entries(s).map(e => {
        let [t, r] = e;
        return (0, a.jsxs)(w, {
          title: t,
          subtitle: u.b[t].hex,
          highlight: r.highlight,
          onReset: () => {
            n(e => {
              let {
                rawColorOverrides: n
              } = e, a = y({}, n);
              return a[t] = {
                color: u.b[t].hex,
                highlight: false
              }, C(y({}, e), {
                rawColorOverrides: a
              })
            })
          },
          onRemove: () => {
            n(e => {
              let {
                rawColorOverrides: n
              } = e, a = y({}, n);
              return delete a[t], C(y({}, e), {
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
              let r = y({}, n);
              return r[t] = C(y({}, a), {
                highlight: !a.highlight
              }), C(y({}, e), {
                rawColorOverrides: r
              })
            })
          },
          children: [(0, a.jsx)("input", {
            className: _.colorInput,
            type: "color",
            value: r.color,
            onChange: e => {
              let a = e.target.value;
              n(e => {
                let {
                  rawColorOverrides: n
                } = e;
                return C(y({}, e), {
                  rawColorOverrides: C(y({}, n), {
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

function w(e) {
  let {
    title: t,
    subtitle: n,
    highlight: r,
    onReset: i,
    onRemove: l,
    onHighlightToggle: s,
    children: o
  } = e;
  return (0, a.jsxs)("li", {
    className: _.override,
    "data-highlight": r,
    children: [(0, a.jsxs)("div", {
      className: _.overrideHeader,
      children: [(0, a.jsxs)("div", {
        className: _.title,
        children: [(0, a.jsx)(h.Text, {
          lineClamp: 1,
          variant: "text-md/medium",
          className: _.overrideHeading,
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
        className: _.clickabeIcon,
        children: (0, a.jsx)(h.tEF, {
          size: "xs",
          color: r ? "var(--text-brand)" : "currentColor"
        })
      }), (0, a.jsx)(h.P3F, {
        className: _.clickabeIcon,
        onClick: i,
        children: (0, a.jsx)(h.DuK, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, a.jsx)(h.P3F, {
        className: _.removeOverride,
        onClick: l,
        children: (0, a.jsx)(h.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, a.jsx)("div", {
      className: _.overrideContent,
      children: o
    })]
  })
}