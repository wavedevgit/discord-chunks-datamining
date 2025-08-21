/** Chunk was on 93886 **/
/** chunk id: 789654, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => T,
  q: () => E
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./361932.js"), require("./187205.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk352206 = require("./352206.js"),
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}
let {
  SemanticColors: C
} = Chunk521904.V;

function N(e) {
  return e.replaceAll(/_|\./g, "-").toLowerCase()
}

function O(e) {
  return e.replaceAll(/_|-/g, ".").toLowerCase()
}

function E(e, t) {
  let a = new Blob([t], {
      type: "application/json"
    }),
    n = URL.createObjectURL(a),
    r = document.createElement("a"),
    l = new TextEncoder().encode(t);
  crypto.subtle.digest("SHA-256", l).then(t => {
    let a = Array.from(new Uint8Array(t)).map(e => e.toString(16).padStart(2, "0")).join("");
    r.href = n, r.download = "".concat(e, "-").concat(a.slice(0, 8), ".json"), r.click(), URL.revokeObjectURL(n)
  })
}

function T() {
  let e = (0, Chunk410030.Fg)(),
    [t, a, l, s, d, u] = (0, Chunk500949.zn)(),
    {
      semanticColorOverrides: f,
      rawColorOverrides: C,
      tab: O,
      scales: T
    } = exports,
    P = Chunk647438.useMemo(() => {
      let t = Object.entries(Chunk246992).map(t => {
          let [a, n] = t, {
            colors: r,
            highlight: l
          } = n, i = r[e];
          if (null == i) return "";
          let s = N(a);
          if (l) return "--".concat(s, ": magenta !important;");
          let o = N(i.color),
            c = i.opacity,
            d = c < 1 ? "hsl(var(--".concat(o, "-hsl) / ").concat(c, ")") : "var(--".concat(o, ")");
          return "--".concat(s, ": color-mix(\n        in oklab,\n        ").concat(d, " 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );")
        }),
        a = Object.keys(C).flatMap(e => {
          let t = C[e],
            {
              h: a,
              s: n,
              l: r
            } = function(e) {
              let [t, a, n] = "transparent" === e ? [0, 0, 0] : i()(e).hsl(), r = isNaN(t) ? 0 : o().round(t, 1), l = o().round(100 * n, 1);
              return {
                h: r,
                s: o().round(100 * a, 1),
                l: l
              }
            }(t.highlight ? "#FF00FF" : t.color),
            l = o().kebabCase(e);
          return ["--".concat(l, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(n, "%) ").concat(r, "% !important;"), "--".concat(l, ": hsl(var(--").concat(l, "-hsl)) !important;")]
        }),
        n = T.reduce((e, t) => {
          let {
            name: a
          } = t, n = (0, j.XM)(t), r = (0, j.W6)(n, a);
          return e + Object.keys(r).reduce((e, t) => {
            let a = r[t],
              l = n[t],
              i = (0, j.HI)(l);
            return "".concat(e, "\n--").concat(a, ": ").concat(i, ";")
          }, "")
        }, "");
      return "\n      :root {\n        ".concat(Chunk951288, "\n      }\n\n      .theme-").concat(module, " {\n        ").concat(exports.join("\n"), "\n      }\n\n      html {\n        ").concat(require.join("\n"), "\n      }\n    ")
    }, [C, T, Chunk246992, module]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk416825.panel,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk416825.toolbar,
      style: {
        "--custom-theme-selection-selection-size": "40px",
        "--custom-theme-selection-group-column-gap": "var(--spacing-8)"
      },
      children: [(0, Chunk951288.jsxs)(Chunk481060.njP, {
        className: Chunk416825.tabBar,
        type: "top",
        look: "brand",
        selectedItem: O,
        onItemSelect: e => {
          a(t => y(_({}, t), {
            tab: e
          }))
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.njP.Item, {
          id: Chunk500949.H8.TOKENS,
          children: "Tokens"
        }), (0, Chunk951288.jsx)(Chunk481060.njP.Item, {
          id: Chunk500949.H8.PALETTES,
          children: "Palettes"
        })]
      }), (0, Chunk951288.jsx)(Chunk705262.ZP, {
        type: Chunk705262.yH.SETTINGS,
        children: (0, Chunk951288.jsx)(Chunk705262.ZP.Basic, {
          className: Chunk416825.toolbarThemeSelector,
          hideSystemSelector: true
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk416825.toolbarButtons,
        children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          onClick: Chunk688619,
          disabled: !Chunk521904,
          children: (0, Chunk951288.jsx)(Chunk481060.UEU, {})
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          onClick: Chunk392711,
          disabled: !Chunk407146,
          children: (0, Chunk951288.jsx)(Chunk481060.zGS, {})
        }), (0, Chunk951288.jsx)(Chunk374794.Z, {
          "aria-label": "Import",
          filters: [{
            name: "JSON",
            extensions: ["json"]
          }],
          onChange: e => {
            let t = e.currentTarget.files,
              n = null == t ? true : t[0];
            if (null == n) return;
            let r = new FileReader;
            r.onload = () => {
              let e = r.result;
              if ("string" == typeof e) try {
                let t = JSON.parse(e);
                if (null == t) return;
                a(t)
              } catch (e) {}
            }, r.readAsText(n)
          },
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          children: (0, Chunk951288.jsx)(Chunk481060.rG2, {})
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.ICON,
          color: Chunk755721.zx.Colors.TRANSPARENT,
          look: Chunk755721.zx.Looks.BLANK,
          onClick: () => {
            E("color-overrides", JSON.stringify(_({}, exports), null, 2))
          },
          children: (0, Chunk951288.jsx)(Chunk481060._8t, {})
        })]
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk416825.tab,
      hidden: O !== Chunk500949.H8.TOKENS,
      children: (0, Chunk951288.jsx)(S, {
        state: exports,
        setState: require
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk416825.tab,
      hidden: O !== Chunk500949.H8.PALETTES,
      children: (0, Chunk951288.jsx)(Chunk58755.P, {
        state: exports,
        setState: require
      })
    }), (0, Chunk951288.jsx)(Chunk352206.ql, {
      children: (0, Chunk951288.jsx)("style", {
        id: "devtools-color-overrides",
        children: P
      })
    })]
  })
}

function S(e) {
  let {
    state: t,
    setState: a
  } = e, l = (0, h.Fg)(), {
    semanticColorOverrides: i,
    rawColorOverrides: s
  } = t, o = r.useMemo(() => Object.keys(u.b).reduce((e, t) => [...e, {
    value: t,
    label: t
  }], []), []), c = r.useCallback(e => {
    a(t => {
      var a;
      let {
        semanticColorOverrides: n
      } = t, r = null != (a = n[e]) ? a : (0, j.$R)(e);
      return y(_({}, t), {
        semanticColorOverrides: y(_({}, n), {
          [e]: r
        })
      })
    })
  }, [a]), d = r.useCallback(e => {
    a(t => {
      let {
        rawColorOverrides: a
      } = t;
      return null == a[e] ? y(_({}, t), {
        rawColorOverrides: y(_({}, a), {
          [e]: {
            color: u.b[e].hex,
            highlight: false
          }
        })
      }) : t
    })
  }, [a]), m = r.useCallback(e => {
    a(t => {
      let {
        semanticColorOverrides: a
      } = t, n = _({}, a);
      return delete n[e], y(_({}, t), {
        semanticColorOverrides: n
      })
    })
  }, [a]), p = r.useCallback(e => {
    a(t => {
      let {
        semanticColorOverrides: a
      } = t, n = a[e];
      if (null == n) return t;
      let r = _({}, a);
      return r[e] = (0, j.GU)(n), y(_({}, t), {
        semanticColorOverrides: r
      })
    })
  }, [a]), v = Object.keys(C).map(e => ({
    value: e,
    label: N(e)
  })), b = Object.keys(u.b).map(e => ({
    value: e,
    label: e
  }));
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(x.Text, {
      variant: "text-lg/semibold",
      children: "Semantic Tokens"
    }), (0, n.jsx)(x.VcW, {
      options: v,
      placeholder: "Search for a semantic token...",
      value: true,
      onChange: c,
      renderOptionPrefix: e => null == e ? null : (0, n.jsx)("div", {
        "data-theme": l,
        className: g.colorPreview,
        style: {
          "--custom-color": "var(--".concat(e.label, ")")
        }
      }),
      popoutLayerContext: f.O$
    }), (0, n.jsx)("ul", {
      className: g.overrides,
      children: Object.entries(i).map(e => {
        let [t, r] = e, i = r.colors[l];
        if (null == i) return null;
        let s = O(i.color),
          c = i.opacity,
          d = j.jC[t][l];
        return (0, n.jsx)(P, {
          title: N(t),
          subtitle: 1 === d.opacity ? O(d.raw) : "".concat(O(d.raw), " @ ").concat(100 * d.opacity, "%"),
          highlight: r.highlight,
          onReset: () => {
            a(e => {
              let {
                semanticColorOverrides: a
              } = e;
              if (null == a[t]) return e;
              let n = (0, j.$R)(t);
              return y(_({}, e), {
                semanticColorOverrides: y(_({}, a), {
                  [t]: n
                })
              })
            })
          },
          onRemove: () => m(t),
          onHighlightToggle: () => p(t),
          children: (0, n.jsxs)("div", {
            className: g.semanticOverride,
            children: [(0, n.jsx)(x.VcW, {
              value: s,
              options: o,
              onChange: e => {
                a(a => {
                  let {
                    semanticColorOverrides: n
                  } = a, r = n[t];
                  if (null == r) return a;
                  let i = r.colors[l];
                  if (null == i) return a;
                  let s = (0, j.lT)(r, t, e, i.opacity, l);
                  return y(_({}, a), {
                    semanticColorOverrides: y(_({}, n), {
                      [t]: s
                    })
                  })
                })
              },
              renderOptionPrefix: e => {
                if (null == e) return null;
                let t = e.label.replaceAll(".", "-");
                return (0, n.jsx)("div", {
                  "data-theme": l,
                  className: g.colorPreview,
                  style: {
                    "--custom-color": "var(--".concat(t, ")")
                  }
                })
              },
              popoutLayerContext: f.O$
            }), (0, n.jsx)(x.oil, {
              inputClassName: g.opacityInput,
              type: "number",
              value: c,
              min: 0,
              max: 1,
              step: .01,
              onChange: e => {
                let n = parseFloat(e);
                isNaN(n) || a(e => {
                  let {
                    semanticColorOverrides: a
                  } = e, r = a[t];
                  if (null == r) return e;
                  let i = r.colors[l];
                  if (null == i) return e;
                  let s = (0, j.lT)(r, t, i.color, n, l);
                  return y(_({}, e), {
                    semanticColorOverrides: y(_({}, a), {
                      [t]: s
                    })
                  })
                })
              }
            })]
          })
        }, t)
      })
    }), (0, n.jsx)("div", {
      className: g.divider
    }), (0, n.jsx)(x.Text, {
      variant: "text-lg/semibold",
      children: "Raw Tokens"
    }), (0, n.jsx)(x.VcW, {
      options: b,
      placeholder: "Search for a raw color...",
      value: true,
      onChange: d,
      renderOptionPrefix: e => {
        if (null == e) return null;
        let t = e.label.replaceAll(".", "-");
        return (0, n.jsx)("div", {
          "data-theme": l,
          className: g.colorPreview,
          style: {
            "--custom-color": "var(--".concat(t, ")")
          }
        })
      },
      popoutLayerContext: f.O$
    }), (0, n.jsx)("ul", {
      className: g.rawOverrides,
      children: Object.entries(s).map(e => {
        let [t, r] = e;
        return (0, n.jsxs)(P, {
          title: t,
          subtitle: u.b[t].hex,
          highlight: r.highlight,
          onReset: () => {
            a(e => {
              let {
                rawColorOverrides: a
              } = e, n = _({}, a);
              return n[t] = {
                color: u.b[t].hex,
                highlight: false
              }, y(_({}, e), {
                rawColorOverrides: n
              })
            })
          },
          onRemove: () => {
            a(e => {
              let {
                rawColorOverrides: a
              } = e, n = _({}, a);
              return delete n[t], y(_({}, e), {
                rawColorOverrides: n
              })
            })
          },
          onHighlightToggle: () => {
            a(e => {
              let {
                rawColorOverrides: a
              } = e, n = a[t];
              if (null == n) return e;
              let r = _({}, a);
              return r[t] = y(_({}, n), {
                highlight: !n.highlight
              }), y(_({}, e), {
                rawColorOverrides: r
              })
            })
          },
          children: [(0, n.jsx)("input", {
            className: g.colorInput,
            type: "color",
            value: r.color,
            onChange: e => {
              let n = e.target.value;
              a(e => {
                let {
                  rawColorOverrides: a
                } = e;
                return y(_({}, e), {
                  rawColorOverrides: y(_({}, a), {
                    [t]: {
                      color: n,
                      highlight: false
                    }
                  })
                })
              })
            }
          }), (0, n.jsx)(x.Text, {
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
    subtitle: a,
    highlight: r,
    onReset: l,
    onRemove: i,
    onHighlightToggle: s,
    children: o
  } = e;
  return (0, n.jsxs)("li", {
    className: g.override,
    "data-highlight": r,
    children: [(0, n.jsxs)("div", {
      className: g.overrideHeader,
      children: [(0, n.jsxs)("div", {
        className: g.title,
        children: [(0, n.jsx)(x.Text, {
          lineClamp: 1,
          variant: "text-md/medium",
          className: g.overrideHeading,
          tabularNumbers: true,
          children: t
        }), null != a ? (0, n.jsx)(x.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          tabularNumbers: true,
          children: a
        }) : null]
      }), (0, n.jsx)(x.P3F, {
        onClick: s,
        className: g.clickabeIcon,
        children: (0, n.jsx)(x.tEF, {
          size: "xs",
          color: r ? "var(--text-brand)" : "currentColor"
        })
      }), (0, n.jsx)(x.P3F, {
        className: g.clickabeIcon,
        onClick: l,
        children: (0, n.jsx)(x.DuK, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, n.jsx)(x.P3F, {
        className: g.removeOverride,
        onClick: i,
        children: (0, n.jsx)(x.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }), (0, n.jsx)("div", {
      className: g.overrideContent,
      children: o
    })]
  })
}