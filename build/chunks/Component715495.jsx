/** Chunk was on 75708 **/
/** chunk id: 715495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk396921 = require("./396921.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E() {
  var e;
  let [t, n] = (0, Chunk73800.useState)(false), [s, l] = (0, Chunk73800.useState)(false), [d, g] = (0, Chunk73800.useState)(null), [f, E] = (0, Chunk73800.useState)(320), N = (0, Chunk73800.useRef)(null), y = (0, Chunk73800.useRef)(null), A = (0, Chunk73800.useRef)(null), P = (0, Chunk396821.ZP)(e => e.toolsCache), {
    setToolsCache: R,
    removeToolsCache: D
  } = (0, Chunk396821.L3)(), {
    setImgCache: Z
  } = (0, Chunk396821.W_)(), w = (0, Chunk73800.useCallback)(e => {
    let t = P[e];
    null != t && g({
      src: t.url,
      palette: t.palette,
      preview: true
    }), g(t => null == t ? {
      src: e,
      palette: m.jD,
      preview: true
    } : j(_({}, t), {
      src: e,
      preview: true
    }))
  }, [P]), k = (0, Chunk73800.useCallback)(e => {
    g(t => null == t ? null : j(_({}, t), {
      palette: e,
      preview: true
    }))
  }, []), L = (0, Chunk73800.useCallback)(e => {
    D(e)
  }, [D]), M = (0, Chunk73800.useCallback)(e => {
    if (null != N.current) {
      let t = N.current.getBoundingClientRect();
      E(Math.max(264, Math.min(432, e.clientX - t.left)))
    }
  }, []), B = (0, Chunk73800.useCallback)(e => {
    e.preventDefault(), e.stopPropagation();
    let t = e => {
        e.preventDefault(), M(e)
      },
      n = () => {
        null != y.current && (document.removeEventListener("mousemove", y.current), y.current = null), null != A.current && (document.removeEventListener("mouseup", A.current), A.current = null)
      };
    y.current = t, A.current = n, document.addEventListener("mousemove", t), document.addEventListener("mouseup", n)
  }, [M]);
  return (0, Chunk73800.useEffect)(() => () => {
    null != y.current && (document.removeEventListener("mousemove", y.current), y.current = null), null != A.current && (document.removeEventListener("mouseup", A.current), A.current = null)
  }, []), (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk396921.controls,
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk396921.toggles,
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          size: "sm",
          onClick: () => {
            Chunk276264(false), require(e => !e)
          },
          variant: "secondary",
          text: "Toggle Themes"
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          size: "sm",
          onClick: () => {
            require(false), Chunk276264(e => !e)
          },
          variant: "secondary",
          text: "Toggle Gradients"
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk396921.themePicker,
        children: [exports && (0, Chunk255367.jsx)(Chunk329013.i, {}), Chunk442837 && (0, Chunk255367.jsx)(Chunk711325.Z, {
          selected: null == Chunk594174 || null == (e = Chunk594174.palette) ? true : module.name,
          onSelect: e => {
            (null == d ? true : d.src) != null && R(d.src, d.src, e), k(e)
          }
        })]
      })]
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk396921.main,
      children: [(0, Chunk255367.jsxs)("div", {
        ref: N,
        className: Chunk396921.previews,
        style: {
          width: "".concat(Chunk852630, "px")
        },
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Memberlist"
        }), (0, Chunk255367.jsx)(S, {
          nameplate: Chunk594174
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "DMs"
        }), (0, Chunk255367.jsx)(T, {
          nameplate: Chunk594174
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "RTC"
        }), (0, Chunk255367.jsx)(I, {
          nameplate: Chunk594174
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk396921.resizeHandle,
          onMouseDown: B
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk396921.buttons,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Drag background image to screen"
        }), (0, Chunk255367.jsx)(Chunk205822.Z, {
          title: "upload image",
          description: "upload the background",
          icons: Chunk731994.pA,
          onDrop: async e => {
            let t = URL.createObjectURL(e[0]),
              n = e[0],
              i = await n.arrayBuffer();
            Z(t, t, (0, p.xh)(i)), R(t, t, m.jD)
          }
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk396921.uploadedArea,
          children: Object.values(P).map(e => {
            let {
              url: t
            } = e;
            return (0, i.jsx)(C, {
              src: t,
              onSetStatic: w,
              removeAsset: L
            }, t)
          })
        }), (0, Chunk255367.jsx)(v, {
          label: "gradient override",
          onChange: e => k({
            name: m._j,
            darkBackground: e,
            lightBackground: e
          })
        }), (0, Chunk255367.jsx)(O, {
          label: "set",
          onClick: () => {}
        })]
      })]
    })]
  })
}

function C(e) {
  let {
    src: t,
    onSetStatic: n,
    removeAsset: r
  } = e;
  return (0, i.jsxs)("div", {
    className: x.uploaded,
    children: [(0, i.jsx)(a.P3F, {
      onClick: () => r(t),
      className: x.xicon,
      children: (0, i.jsx)(a.Dio, {
        size: "custom",
        width: 16,
        height: 16,
        name: "x"
      })
    }), (0, i.jsx)("img", {
      className: x.uploadedImg,
      src: t,
      alt: ""
    }), (0, i.jsx)("div", {
      className: x.uploadedControls,
      children: (0, i.jsx)(a.zxk, {
        onClick: () => n(t),
        size: "sm",
        variant: "secondary",
        text: "set nameplate"
      })
    })]
  })
}

function O(e) {
  let {
    label: t,
    onClick: n
  } = e;
  return (0, i.jsxs)("div", {
    className: x.flex,
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: "coming soon"
    }), (0, i.jsx)(a.zxk, {
      variant: "secondary",
      size: "sm",
      text: t,
      disabled: true,
      onClick: n
    })]
  })
}

function v(e) {
  let {
    label: t,
    onChange: n
  } = e;
  return (0, i.jsxs)("div", {
    className: x.hexInput,
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: t
    }), (0, i.jsx)("input", {
      onChange: e => {
        n(e.target.value)
      },
      className: x.inputs,
      placeholder: "#000000"
    })]
  })
}

function S(e) {
  let {
    nameplate: t
  } = e, n = (0, s.e7)([d.default], () => d.default.getCurrentUser());
  return (0, i.jsx)("div", {
    className: x.preview,
    children: (0, i.jsxs)("div", {
      className: x.simArea,
      children: [(0, i.jsx)(a.Text, {
        className: x.label,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, i.jsx)(l.Z, {
        nameplate: t,
        user: n,
        currentUser: n
      }), (0, i.jsx)(a.Text, {
        className: x.label,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(l.Z, {
          nameplate: t,
          selected: true,
          user: n,
          currentUser: n
        }), (0, i.jsx)(l.Z, {
          selected: true,
          user: n,
          currentUser: n
        })]
      })]
    })
  })
}

function T(e) {
  let {
    nameplate: t
  } = e;
  return (0, i.jsx)("div", {
    className: x.preview,
    children: (0, i.jsxs)("div", {
      className: x.simArea,
      children: [(0, i.jsx)(a.Text, {
        className: x.label,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, i.jsx)(f.Z, {
        nameplate: t
      }), (0, i.jsx)(a.Text, {
        className: x.label,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.Z, {
          selected: true,
          nameplate: t
        }), (0, i.jsx)(f.Z, {
          selected: true
        })]
      })]
    })
  })
}

function I(e) {
  let {
    nameplate: t
  } = e;
  return (0, i.jsx)("div", {
    className: x.preview,
    children: (0, i.jsx)("div", {
      className: x.rtcSim,
      children: (0, i.jsx)(g.Z, {
        nameplate: t
      })
    })
  })
}