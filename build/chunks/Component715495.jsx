/** Chunk was on 22979 **/
/** chunk id: 715495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk276264 = require("./276264.jsx"),
  Chunk205822 = require("./205822.jsx"),
  Chunk329013 = require("./329013.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk396821 = require("./396821.js"),
  Chunk780771 = require("./780771.js"),
  Chunk4242 = require("./4242.js"),
  Chunk996746 = require("./996746.jsx"),
  Chunk711325 = require("./711325.jsx"),
  Chunk852630 = require("./852630.jsx"),
  Chunk731994 = require("./731994.js"),
  Chunk337555 = require("./337555.js");

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
  let [n, i] = (0, r.useState)(false), [s, d] = (0, r.useState)(false), [h, b] = (0, r.useState)(null), y = (0, u.ZP)(e => e.toolsCache), {
    setToolsCache: T,
    removeToolsCache: O
  } = (0, u.L3)(), {
    setImgCache: N
  } = (0, u.W_)(), P = (0, r.useCallback)(e => {
    let t = y[e];
    null != t && b({
      src: t.url,
      palette: t.palette,
      preview: true
    }), b(t => null == t ? {
      src: e,
      palette: m.jD,
      preview: true
    } : j(v({}, t), {
      src: e,
      preview: true
    }))
  }, [y]), w = (0, r.useCallback)(e => {
    b(t => null == t ? null : j(v({}, t), {
      palette: e,
      preview: true
    }))
  }, []), I = (0, r.useCallback)(e => {
    O(e)
  }, [O]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: g.controls,
      children: [(0, a.jsxs)("div", {
        className: g.toggles,
        children: [(0, a.jsx)(l.Button, {
          size: "sm",
          onClick: () => {
            d(false), i(e => !e)
          },
          variant: "secondary",
          text: "Toggle Themes"
        }), (0, a.jsx)(l.Button, {
          size: "sm",
          onClick: () => {
            i(false), d(e => !e)
          },
          variant: "secondary",
          text: "Toggle Gradients"
        })]
      }), (0, a.jsxs)("div", {
        className: g.themePicker,
        children: [n && (0, a.jsx)(c.i, {}), s && (0, a.jsx)(f.Z, {
          selected: null == h || null == (e = h.palette) ? true : e.name,
          onSelect: e => {
            (null == h ? true : h.src) != null && T(h.src, h.src, e), w(e)
          }
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: g.main,
      children: [(0, a.jsx)(C, {
        nameplate: h
      }, null == h || null == (t = h.palette) ? true : t.name), (0, a.jsxs)("div", {
        className: g.buttons,
        children: [(0, a.jsx)(l.Text, {
          variant: "text-sm/semibold",
          children: "Drag background image to screen"
        }), (0, a.jsx)(o.Z, {
          title: "upload image",
          description: "upload the background",
          icons: x.pA,
          onDrop: async e => {
            let t = URL.createObjectURL(e[0]),
              n = e[0],
              a = await n.arrayBuffer();
            N(t, t, (0, p.xh)(a)), T(t, t, m.jD)
          }
        }), (0, a.jsx)("div", {
          className: g.uploadedArea,
          children: Object.values(y).map(e => {
            let {
              url: t
            } = e;
            return (0, a.jsx)(_, {
              src: t,
              onSetStatic: P,
              removeAsset: I
            }, t)
          })
        }), (0, a.jsx)(E, {
          label: "gradient override",
          onChange: e => w({
            name: m._j,
            darkBackground: e,
            lightBackground: e
          })
        }), (0, a.jsx)(S, {
          label: "set",
          onClick: () => {}
        })]
      })]
    })]
  })
}

function C(e) {
  let {
    nameplate: t
  } = e, [n, i] = (0, r.useState)(320), s = (0, r.useRef)(null), o = (0, r.useRef)(null), c = (0, r.useRef)(null), d = (0, r.useRef)(document), u = (0, r.useCallback)(e => {
    if (null != s.current) {
      let t = s.current.getBoundingClientRect();
      i(Math.max(264, Math.min(432, e.clientX - t.left)))
    }
  }, []), m = (0, r.useCallback)(e => {
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
  return (0, r.useEffect)(() => () => {
    null != o.current && (d.current.removeEventListener("mousemove", o.current), o.current = null), null != c.current && (d.current.removeEventListener("mouseup", c.current), c.current = null)
  }, []), (0, a.jsx)(l.zJl, {
    className: g.previewsContainer,
    orientation: "horizontal",
    children: (0, a.jsxs)("div", {
      ref: s,
      className: g.previews,
      style: {
        width: "".concat(n, "px")
      },
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: "Memberlist"
      }), (0, a.jsx)(T, {
        nameplate: t
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: "DMs"
      }), (0, a.jsx)(O, {
        nameplate: t
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: "RTC"
      }), (0, a.jsx)(N, {
        nameplate: t
      }), (0, a.jsx)("div", {
        className: g.resizeHandle,
        onMouseDown: m
      })]
    })
  })
}

function _(e) {
  let {
    src: t,
    onSetStatic: n,
    removeAsset: r
  } = e;
  return (0, a.jsxs)("div", {
    className: g.uploaded,
    children: [(0, a.jsx)(l.P3F, {
      onClick: () => r(t),
      className: g.xicon,
      children: (0, a.jsx)(l.Dio, {
        size: "custom",
        width: 16,
        height: 16,
        name: "x"
      })
    }), (0, a.jsx)("img", {
      className: g.uploadedImg,
      src: t,
      alt: ""
    }), (0, a.jsx)("div", {
      className: g.uploadedControls,
      children: (0, a.jsx)(l.Button, {
        onClick: () => n(t),
        size: "sm",
        variant: "secondary",
        text: "set nameplate"
      })
    })]
  })
}

function S(e) {
  let {
    label: t,
    onClick: n
  } = e;
  return (0, a.jsxs)("div", {
    className: g.flex,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: "coming soon"
    }), (0, a.jsx)(l.Button, {
      variant: "secondary",
      size: "sm",
      text: t,
      disabled: true,
      onClick: n
    })]
  })
}

function E(e) {
  let {
    label: t,
    onChange: n
  } = e;
  return (0, a.jsxs)("div", {
    className: g.hexInput,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: t
    }), (0, a.jsx)("input", {
      onChange: e => {
        n(e.target.value)
      },
      className: g.inputs,
      placeholder: "#000000"
    })]
  })
}

function T(e) {
  let {
    nameplate: t
  } = e, n = (0, i.e7)([d.default], () => d.default.getCurrentUser());
  return (0, a.jsx)("div", {
    className: g.preview,
    children: (0, a.jsxs)("div", {
      className: g.simArea,
      children: [(0, a.jsx)(l.Text, {
        className: g.label,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, a.jsx)(s.Z, {
        nameplate: t,
        user: n,
        currentUser: n
      }), (0, a.jsx)(l.Text, {
        className: g.label,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Z, {
          nameplate: t,
          selected: true,
          user: n,
          currentUser: n
        }), (0, a.jsx)(s.Z, {
          selected: true,
          user: n,
          currentUser: n
        })]
      })]
    })
  })
}

function O(e) {
  let {
    nameplate: t
  } = e;
  return (0, a.jsx)("div", {
    className: g.preview,
    children: (0, a.jsxs)("div", {
      className: g.simArea,
      children: [(0, a.jsx)(l.Text, {
        className: g.label,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, a.jsx)(b.Z, {
        nameplate: t
      }), (0, a.jsx)(l.Text, {
        className: g.label,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(b.Z, {
          selected: true,
          nameplate: t
        }), (0, a.jsx)(b.Z, {
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
    className: g.preview,
    children: (0, a.jsx)("div", {
      className: g.rtcSim,
      children: (0, a.jsx)(h.Z, {
        nameplate: t
      })
    })
  })
}