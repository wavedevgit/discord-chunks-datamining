/** Chunk was on 22477 **/
/** chunk id: 996958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk110574 = require("./110574.jsx"),
  Chunk65593 = require("./65593.jsx"),
  Chunk70040 = require("./70040.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk581057 = require("./581057.js"),
  Chunk270704 = require("./270704.js"),
  Chunk369496 = require("./369496.js"),
  Chunk565832 = require("./565832.jsx"),
  Chunk622697 = require("./622697.jsx"),
  Chunk259059 = require("./259059.jsx"),
  Chunk698638 = require("./698638.js"),
  Chunk465692 = require("./465692.js");

function v(e) {
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

function j(e, t) {
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

function y() {
  var e, t;
  let [n, i] = (0, l.useState)(false), [s, d] = (0, l.useState)(false), [h, x] = (0, l.useState)(null), y = (0, u.Ay)(e => e.toolsCache), {
    setToolsCache: O,
    removeToolsCache: E
  } = (0, u.DE)(), {
    setImgCache: N
  } = (0, u.TW)(), T = (0, l.useCallback)(e => {
    let t = y[e];
    null != t && x({
      src: t.url,
      palette: t.palette,
      preview: true
    }), x(t => null == t ? {
      src: e,
      palette: m.Wj,
      preview: true
    } : j(v({}, t), {
      src: e,
      preview: true
    }))
  }, [y]), I = (0, l.useCallback)(e => {
    x(t => null == t ? null : j(v({}, t), {
      palette: e,
      preview: true
    }))
  }, []), w = (0, l.useCallback)(e => {
    E(e)
  }, [E]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: g.ne,
      children: [(0, a.jsxs)("div", {
        className: g.gO,
        children: [(0, a.jsx)(r.Button, {
          size: "sm",
          onClick: () => {
            d(false), i(e => !e)
          },
          variant: "secondary",
          text: "Toggle Themes"
        }), (0, a.jsx)(r.Button, {
          size: "sm",
          onClick: () => {
            i(false), d(e => !e)
          },
          variant: "secondary",
          text: "Toggle Gradients"
        })]
      }), (0, a.jsxs)("div", {
        className: g.uQ,
        children: [n && (0, a.jsx)(c.I, {}), s && (0, a.jsx)(f.A, {
          selected: null == h || null == (e = h.palette) ? true : e.name,
          onSelect: e => {
            (null == h ? true : h.src) != null && O(h.src, h.src, e), I(e)
          }
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: g.iW,
      children: [(0, a.jsx)(_, {
        nameplate: h
      }, null == h || null == (t = h.palette) ? true : t.name), (0, a.jsxs)("div", {
        className: g.Uo,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-sm/semibold",
          children: "Drag background image to screen"
        }), (0, a.jsx)(o.A, {
          title: "upload image",
          description: "upload the background",
          icons: b.xi,
          onDrop: async e => {
            let t = URL.createObjectURL(e[0]),
              n = e[0],
              a = await n.arrayBuffer();
            N(t, t, (0, p.nI)(a)), O(t, t, m.Wj)
          }
        }), (0, a.jsx)("div", {
          className: g.is,
          children: Object.values(y).map(e => {
            let {
              url: t
            } = e;
            return (0, a.jsx)(A, {
              src: t,
              onSetStatic: T,
              removeAsset: w
            }, t)
          })
        }), (0, a.jsx)(S, {
          label: "gradient override",
          onChange: e => I({
            name: m.AK,
            darkBackground: e,
            lightBackground: e
          })
        }), (0, a.jsx)(C, {
          label: "set",
          onClick: () => {}
        })]
      })]
    })]
  })
}

function _(e) {
  let {
    nameplate: t
  } = e, [n, i] = (0, l.useState)(320), s = (0, l.useRef)(null), o = (0, l.useRef)(null), c = (0, l.useRef)(null), d = (0, l.useRef)(document), u = (0, l.useCallback)(e => {
    if (null != s.current) {
      let t = s.current.getBoundingClientRect();
      i(Math.max(264, Math.min(432, e.clientX - t.left)))
    }
  }, []), m = (0, l.useCallback)(e => {
    e.preventDefault(), e.stopPropagation();
    let t = e.currentTarget.ownerDocument;
    d.current = t;
    let n = e => {
        e.preventDefault(), u(e)
      },
      a = () => {
        null != o.current && (t.removeEventListener("mousemove", o.current), o.current = null), null != c.current && (t.removeEventListener("mouseup", c.current), c.current = null)
      };
    o.current = n, c.current = a, t.addEventListener("mousemove", n), t.addEventListener("mouseup", a)
  }, [u]);
  return (0, l.useEffect)(() => () => {
    null != o.current && (d.current.removeEventListener("mousemove", o.current), o.current = null), null != c.current && (d.current.removeEventListener("mouseup", c.current), c.current = null)
  }, []), (0, a.jsx)(r.IpV, {
    className: g.Fp,
    orientation: "horizontal",
    children: (0, a.jsxs)("div", {
      ref: s,
      className: g.ey,
      style: {
        width: "".concat(n, "px")
      },
      children: [(0, a.jsx)(r.Text, {
        variant: "text-sm/semibold",
        children: "Memberlist"
      }), (0, a.jsx)(O, {
        nameplate: t
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/semibold",
        children: "DMs"
      }), (0, a.jsx)(E, {
        nameplate: t
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/semibold",
        children: "RTC"
      }), (0, a.jsx)(N, {
        nameplate: t
      }), (0, a.jsx)("div", {
        className: g.Di,
        onMouseDown: m
      })]
    })
  })
}

function A(e) {
  let {
    src: t,
    onSetStatic: n,
    removeAsset: l
  } = e;
  return (0, a.jsxs)("div", {
    className: g.xO,
    children: [(0, a.jsx)(r.DUT, {
      onClick: () => l(t),
      className: g.yV,
      children: (0, a.jsx)(r.PGe, {
        size: "custom",
        width: 16,
        height: 16,
        name: "x"
      })
    }), (0, a.jsx)("img", {
      className: g.Ez,
      src: t,
      alt: ""
    }), (0, a.jsx)("div", {
      className: g.Lu,
      children: (0, a.jsx)(r.Button, {
        onClick: () => n(t),
        size: "sm",
        variant: "secondary",
        text: "set nameplate"
      })
    })]
  })
}

function C(e) {
  let {
    label: t,
    onClick: n
  } = e;
  return (0, a.jsxs)("div", {
    className: g.Uu,
    children: [(0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      children: "coming soon"
    }), (0, a.jsx)(r.Button, {
      variant: "secondary",
      size: "sm",
      text: t,
      disabled: true,
      onClick: n
    })]
  })
}

function S(e) {
  let {
    label: t,
    onChange: n
  } = e;
  return (0, a.jsxs)("div", {
    className: g.Im,
    children: [(0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      children: t
    }), (0, a.jsx)("input", {
      onChange: e => {
        n(e.target.value)
      },
      className: g.QL,
      placeholder: "#000000"
    })]
  })
}

function O(e) {
  let {
    nameplate: t
  } = e, n = (0, i.bG)([d.default], () => d.default.getCurrentUser());
  return (0, a.jsx)("div", {
    className: g.VH,
    children: (0, a.jsxs)("div", {
      className: g.H1,
      children: [(0, a.jsx)(r.Text, {
        className: g.Pf,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, a.jsx)(s.A, {
        nameplate: t,
        user: n,
        currentUser: n
      }), (0, a.jsx)(r.Text, {
        className: g.Pf,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.A, {
          nameplate: t,
          selected: true,
          user: n,
          currentUser: n
        }), (0, a.jsx)(s.A, {
          selected: true,
          user: n,
          currentUser: n
        })]
      })]
    })
  })
}

function E(e) {
  let {
    nameplate: t
  } = e;
  return (0, a.jsx)("div", {
    className: g.VH,
    children: (0, a.jsxs)("div", {
      className: g.H1,
      children: [(0, a.jsx)(r.Text, {
        className: g.Pf,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, a.jsx)(x.A, {
        nameplate: t
      }), (0, a.jsx)(r.Text, {
        className: g.Pf,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(x.A, {
          selected: true,
          nameplate: t
        }), (0, a.jsx)(x.A, {
          selected: true
        })]
      })]
    })
  })
}

function N(e) {
  let {
    nameplate: t
  } = e;
  return (0, a.jsx)("div", {
    className: g.VH,
    children: (0, a.jsx)("div", {
      className: g.X2,
      children: (0, a.jsx)(h.A, {
        nameplate: t
      })
    })
  })
}