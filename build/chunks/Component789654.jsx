/** Chunk was on 837 **/
/** chunk id: 789654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T,
  q: () => N
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./361932.js"), require("./187205.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  r = require.n(Chunk688619),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk131271 = require("./131271.js"),
  Chunk521904 = require("./521904.js"),
  Chunk407146 = require("./407146.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk374794 = require("./374794.jsx"),
  Chunk58755 = require("./58755.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk500949 = require("./500949.js"),
  Chunk416825 = require("./416825.js");

function _(e) {
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

function y(e, t) {
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
  SemanticColors: C
} = Chunk521904.V;

function S(e) {
  return e.replaceAll(/_|\./g, "-").toLowerCase()
}

function E(e) {
  return e.replaceAll(/_|-/g, ".").toLowerCase()
}

function N(e, t) {
  let n = new Blob([t], {
      type: "application/json"
    }),
    a = URL.createObjectURL(n),
    l = document.createElement("a"),
    i = new TextEncoder().encode(t);
  crypto.subtle.digest("SHA-256", i).then(t => {
    let n = Array.from(new Uint8Array(t)).map(e => e.toString(16).padStart(2, "0")).join("");
    l.href = a, l.download = "".concat(e, "-").concat(n.slice(0, 8), ".json"), l.click(), URL.revokeObjectURL(a)
  })
}

function T() {
  let e = (0, Chunk410030.Fg)(),
    [t, n, i, s, d, u] = (0, Chunk500949.zn)(),
    {
      semanticColorOverrides: b,
      rawColorOverrides: C,
      tab: E,
      scales: T
    } = exports,
    P = Chunk473749.useMemo(() => {
      let t = Object.entries(Chunk246992).map(t => {
          let [n, a] = t, {
            colors: l,
            highlight: i
          } = a, r = l[e];
          if (null == r) return "";
          let s = S(n);
          if (i) return "--".concat(s, ": magenta !important;");
          let o = S(r.color),
            c = r.opacity,
            d = c < 1 ? "hsl(var(--".concat(o, "-hsl) / ").concat(c, ")") : "var(--".concat(o, ")");
          return "--".concat(s, ": color-mix(\n        in oklab,\n        ").concat(d, " 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );")
        }),
        n = Object.keys(C).flatMap(e => {
          let t = C[e],
            {
              h: n,
              s: a,
              l
            } = function(e) {
              let [t, n, a] = "transparent" === e ? [0, 0, 0] : r()(e).hsl(), l = isNaN(t) ? 0 : o().round(t, 1), i = o().round(100 * a, 1);
              return {
                h: l,
                s: o().round(100 * n, 1),
                l: i
              }
            }(t.highlight ? "#FF00FF" : t.color),
            i = o().kebabCase(e);
          return ["--".concat(i, "-hsl: ").concat(n, " calc(var(--saturation-factor, 1) * ").concat(a, "%) ").concat(l, "% !important;"), "--".concat(i, ": hsl(var(--").concat(i, "-hsl)) !important;")]
        }),
        a = T.reduce((e, t) => {
          let {
            name: n
          } = t, a = (0, v.XM)(t), l = (0, v.W6)(a, n);
          return e + Object.keys(l).reduce((e, t) => {
            let n = l[t],
              i = a[t],
              r = (0, v.HI)(i);
            return "".concat(e, "\n--").concat(n, ": ").concat(r, ";")
          }, "")
        }, "");
      return "\n      :root {\n        ".concat(Chunk54381, "\n      }\n\n      .theme-").concat(module, " {\n        ").concat(exports.join("\n"), "\n      }\n\n      html {\n        ").concat(require.join("\n"), "\n      }\n    ")
    }, [C, T, Chunk246992, module]);
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
        selectedItem: E,
        onItemSelect: e => {
          n(t => y(_({}, t), {
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
        children: [(0, Chunk54381.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          onClick: Chunk688619,
          disabled: !Chunk521904,
          children: (0, Chunk54381.jsx)(Chunk481060.UEU, {})
        }), (0, Chunk54381.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          onClick: Chunk392711,
          disabled: !Chunk407146,
          children: (0, Chunk54381.jsx)(Chunk481060.zGS, {})
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
            let l = new FileReader;
            l.onload = () => {
              let e = l.result;
              if ("string" == typeof e) try {
                let t = JSON.parse(e);
                if (null == t) return;
                n(t)
              } catch (e) {}
            }, l.readAsText(a)
          },
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          children: (0, Chunk54381.jsx)(Chunk481060.rG2, {})
        }), (0, Chunk54381.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          onClick: () => {
            N("color-overrides", JSON.stringify(_({}, exports), null, 2))
          },
          children: (0, Chunk54381.jsx)(Chunk481060._8t, {})
        })]
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk416825.tab,
      hidden: E !== Chunk500949.H8.TOKENS,
      children: (0, Chunk54381.jsx)(O, {
        state: exports,
        setState: require
      })
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk416825.tab,
      hidden: E !== Chunk500949.H8.PALETTES,
      children: (0, Chunk54381.jsx)(Chunk58755.P, {
        state: exports,
        setState: require
      })
    }), (0, Chunk54381.jsx)(Chunk131271.ql, {
      children: (0, Chunk54381.jsx)("style", {
        id: "devtools-color-overrides",
        children: P
      })
    })]
  })
}

function O(e) {
  let {
    state: t,
    setState: n
  } = e, i = (0, h.Fg)(), {
    semanticColorOverrides: r,
    rawColorOverrides: s
  } = t, o = l.useMemo(() => Object.keys(u.b).reduce((e, t) => [...e, {
    value: t,
    label: t
  }], []), []), c = l.useCallback(e => {
    n(t => {
      var n;
      let {
        semanticColorOverrides: a
      } = t, l = null != (n = a[e]) ? n : (0, v.$R)(e);
      return y(_({}, t), {
        semanticColorOverrides: y(_({}, a), {
          [e]: l
        })
      })
    })
  }, [n]), d = l.useCallback(e => {
    n(t => {
      let {
        rawColorOverrides: n
      } = t;
      return null == n[e] ? y(_({}, t), {
        rawColorOverrides: y(_({}, n), {
          [e]: {
            color: u.b[e].hex,
            highlight: false
          }
        })
      }) : t
    })
  }, [n]), m = l.useCallback(e => {
    n(t => {
      let {
        semanticColorOverrides: n
      } = t, a = _({}, n);
      return delete a[e], y(_({}, t), {
        semanticColorOverrides: a
      })
    })
  }, [n]), x = l.useCallback(e => {
    n(t => {
      let {
        semanticColorOverrides: n
      } = t, a = n[e];
      if (null == a) return t;
      let l = _({}, n);
      return l[e] = (0, v.GU)(a), y(_({}, t), {
        semanticColorOverrides: l
      })
    })
  }, [n]), f = Object.keys(C).map(e => ({
    value: e,
    label: S(e)
  })), g = Object.keys(u.b).map(e => ({
    value: e,
    label: e
  }));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.Text, {
      variant: "text-lg/semibold",
      children: "Semantic Tokens"
    }), (0, a.jsx)(p.VcW, {
      options: f,
      placeholder: "Search for a semantic token...",
      value: true,
      onChange: c,
      renderOptionPrefix: e => null == e ? null : (0, a.jsx)("div", {
        "data-theme": i,
        className: j.colorPreview,
        style: {
          "--custom-color": "var(--".concat(e.label, ")")
        }
      }),
      popoutLayerContext: b.O$
    }), (0, a.jsx)("ul", {
      className: j.overrides,
      children: Object.entries(r).map(e => {
        let [t, l] = e, r = l.colors[i];
        if (null == r) return null;
        let s = E(r.color),
          c = r.opacity,
          d = v.jC[t][i];
        return (0, a.jsx)(P, {
          title: S(t),
          subtitle: 1 === d.opacity ? E(d.raw) : "".concat(E(d.raw), " @ ").concat(100 * d.opacity, "%"),
          highlight: l.highlight,
          onReset: () => {
            n(e => {
              let {
                semanticColorOverrides: n
              } = e;
              if (null == n[t]) return e;
              let a = (0, v.$R)(t);
              return y(_({}, e), {
                semanticColorOverrides: y(_({}, n), {
                  [t]: a
                })
              })
            })
          },
          onRemove: () => m(t),
          onHighlightToggle: () => x(t),
          children: (0, a.jsxs)("div", {
            className: j.semanticOverride,
            children: [(0, a.jsx)(p.VcW, {
              value: s,
              options: o,
              onChange: e => {
                n(n => {
                  let {
                    semanticColorOverrides: a
                  } = n, l = a[t];
                  if (null == l) return n;
                  let r = l.colors[i];
                  if (null == r) return n;
                  let s = (0, v.lT)(l, t, e, r.opacity, i);
                  return y(_({}, n), {
                    semanticColorOverrides: y(_({}, a), {
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
                  className: j.colorPreview,
                  style: {
                    "--custom-color": "var(--".concat(t, ")")
                  }
                })
              },
              popoutLayerContext: b.O$
            }), (0, a.jsx)(p.oil, {
              inputClassName: j.opacityInput,
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
                  } = e, l = n[t];
                  if (null == l) return e;
                  let r = l.colors[i];
                  if (null == r) return e;
                  let s = (0, v.lT)(l, t, r.color, a, i);
                  return y(_({}, e), {
                    semanticColorOverrides: y(_({}, n), {
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
      className: j.divider
    }), (0, a.jsx)(p.Text, {
      variant: "text-lg/semibold",
      children: "Raw Tokens"
    }), (0, a.jsx)(p.VcW, {
      options: g,
      placeholder: "Search for a raw color...",
      value: true,
      onChange: d,
      renderOptionPrefix: e => {
        if (null == e) return null;
        let t = e.label.replaceAll(".", "-");
        return (0, a.jsx)("div", {
          "data-theme": i,
          className: j.colorPreview,
          style: {
            "--custom-color": "var(--".concat(t, ")")
          }
        })
      },
      popoutLayerContext: b.O$
    }), (0, a.jsx)("ul", {
      className: j.rawOverrides,
      children: Object.entries(s).map(e => {
        let [t, l] = e;
        return (0, a.jsxs)(P, {
          title: t,
          subtitle: u.b[t].hex,
          highlight: l.highlight,
          onReset: () => {
            n(e => {
              let {
                rawColorOverrides: n
              } = e, a = _({}, n);
              return a[t] = {
                color: u.b[t].hex,
                highlight: false
              }, y(_({}, e), {
                rawColorOverrides: a
              })
            })
          },
          onRemove: () => {
            n(e => {
              let {
                rawColorOverrides: n
              } = e, a = _({}, n);
              return delete a[t], y(_({}, e), {
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
              let l = _({}, n);
              return l[t] = y(_({}, a), {
                highlight: !a.highlight
              }), y(_({}, e), {
                rawColorOverrides: l
              })
            })
          },
          children: [(0, a.jsx)("input", {
            className: j.colorInput,
            type: "color",
            value: l.color,
            onChange: e => {
              let a = e.target.value;
              n(e => {
                let {
                  rawColorOverrides: n
                } = e;
                return y(_({}, e), {
                  rawColorOverrides: y(_({}, n), {
                    [t]: {
                      color: a,
                      highlight: false
                    }
                  })
                })
              })
            }
          }), (0, a.jsx)(p.Text, {
            variant: "text-sm/medium",
            tabularNumbers: true,
            children: l.color
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
    highlight: l,
    onReset: i,
    onRemove: r,
    onHighlightToggle: s,
    children: o
  } = e;
  return (0, a.jsxs)("li", {
    className: j.override,
    "data-highlight": l,
    children: [(0, a.jsxs)("div", {
      className: j.overrideHeader,
      children: [(0, a.jsxs)("div", {
        className: j.title,
        children: [(0, a.jsx)(p.Text, {
          lineClamp: 1,
          variant: "text-md/medium",
          className: j.overrideHeading,
          tabularNumbers: true,
          children: t
        }), null != n ? (0, a.jsx)(p.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          tabularNumbers: true,
          children: n
        }) : null]
      }), (0, a.jsx)(p.P3F, {
        onClick: s,
        className: j.clickabeIcon,
        children: (0, a.jsx)(p.tEF, {
          size: "xs",
          color: l ? "var(--text-brand)" : "currentColor"
        })
      }), (0, a.jsx)(p.P3F, {
        className: j.clickabeIcon,
        onClick: i,
        children: (0, a.jsx)(p.DuK, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, a.jsx)(p.P3F, {
        className: j.removeOverride,
        onClick: r,
        children: (0, a.jsx)(p.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, a.jsx)("div", {
      className: j.overrideContent,
      children: o
    })]
  })
}