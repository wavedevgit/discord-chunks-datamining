/** Chunk was on web.js **/
/** chunk id: 715495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk30827 = require("./30827.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I() {
  var e;
  let [t, n] = (0, Chunk647438.useState)(false), [o, s] = (0, Chunk647438.useState)(false), [u, p] = (0, Chunk647438.useState)(null), [m, b] = (0, Chunk647438.useState)(320), O = (0, Chunk647438.useRef)(null), I = (0, Chunk647438.useRef)(null), P = (0, Chunk647438.useRef)(null), w = (0, Chunk396821.ZP)(e => e.toolsCache), {
    setToolsCache: D,
    removeToolsCache: x
  } = (0, Chunk396821.L3)(), {
    setImgCache: L
  } = (0, Chunk396821.W_)(), j = (0, Chunk647438.useCallback)(e => {
    let t = w[e];
    null != t && p({
      src: t.url,
      palette: t.palette,
      preview: true
    }), p(t => null == t ? {
      src: e,
      palette: f.jD,
      preview: true
    } : v(y({}, t), {
      src: e,
      preview: true
    }))
  }, [w]), M = (0, Chunk647438.useCallback)(e => {
    p(t => null == t ? null : v(y({}, t), {
      palette: e,
      preview: true
    }))
  }, []), k = (0, Chunk647438.useCallback)(e => {
    x(e)
  }, [x]), U = (0, Chunk647438.useCallback)(e => {
    if (null != O.current) {
      let t = O.current.getBoundingClientRect();
      b(Math.max(264, Math.min(432, e.clientX - t.left)))
    }
  }, []), G = (0, Chunk647438.useCallback)(e => {
    e.preventDefault(), e.stopPropagation();
    let t = e => {
        e.preventDefault(), U(e)
      },
      n = () => {
        null != I.current && (document.removeEventListener("mousemove", I.current), I.current = null), null != P.current && (document.removeEventListener("mouseup", P.current), P.current = null)
      };
    I.current = t, P.current = n, document.addEventListener("mousemove", t), document.addEventListener("mouseup", n)
  }, [U]);
  return (0, Chunk647438.useEffect)(() => () => {
    null != I.current && (document.removeEventListener("mousemove", I.current), I.current = null), null != P.current && (document.removeEventListener("mouseup", P.current), P.current = null)
  }, []), (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk30827.controls,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk30827.toggles,
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          size: "sm",
          onClick: () => {
            Chunk276264(false), require(e => !e)
          },
          variant: "secondary",
          text: "Toggle Themes"
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          size: "sm",
          onClick: () => {
            require(false), Chunk276264(e => !e)
          },
          variant: "secondary",
          text: "Toggle Gradients"
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk30827.themePicker,
        children: [exports && (0, Chunk951288.jsx)(Chunk329013.i, {}), Chunk442837 && (0, Chunk951288.jsx)(Chunk711325.Z, {
          selected: null == Chunk594174 || null == (e = Chunk594174.palette) ? true : module.name,
          onSelect: e => {
            (null == u ? true : u.src) != null && D(u.src, u.src, e), M(e)
          }
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk30827.main,
      children: [(0, Chunk951288.jsxs)("div", {
        ref: O,
        className: Chunk30827.previews,
        style: {
          width: "".concat(Chunk852630, "px")
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Memberlist"
        }), (0, Chunk951288.jsx)(C, {
          nameplate: Chunk594174
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "DMs"
        }), (0, Chunk951288.jsx)(N, {
          nameplate: Chunk594174
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "RTC"
        }), (0, Chunk951288.jsx)(R, {
          nameplate: Chunk594174
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk30827.resizeHandle,
          onMouseDown: G
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk30827.buttons,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Drag background image to screen"
        }), (0, Chunk951288.jsx)(Chunk205822.Z, {
          title: "upload image",
          description: "upload the background",
          icons: Chunk731994.pA,
          onDrop: async e => {
            let t = URL.createObjectURL(e[0]),
              n = e[0],
              r = await n.arrayBuffer();
            L(t, t, (0, _.xh)(r)), D(t, t, f.jD)
          }
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk30827.uploadedArea,
          children: Object.values(w).map(e => {
            let {
              url: t
            } = e;
            return (0, r.jsx)(T, {
              src: t,
              onSetStatic: j,
              removeAsset: k
            }, t)
          })
        }), (0, Chunk951288.jsx)(A, {
          label: "gradient override",
          onChange: e => M({
            name: f._j,
            darkBackground: e,
            lightBackground: e
          })
        }), (0, Chunk951288.jsx)(S, {
          label: "set",
          onClick: () => {}
        })]
      })]
    })]
  })
}

function T(e) {
  let {
    src: t,
    onSetStatic: n,
    removeAsset: i
  } = e;
  return (0, r.jsxs)("div", {
    className: E.uploaded,
    children: [(0, r.jsx)(a.P3F, {
      onClick: () => i(t),
      className: E.xicon,
      children: (0, r.jsx)(a.Dio, {
        size: "custom",
        width: 16,
        height: 16,
        name: "x"
      })
    }), (0, r.jsx)("img", {
      className: E.uploadedImg,
      src: t,
      alt: ""
    }), (0, r.jsx)("div", {
      className: E.uploadedControls,
      children: (0, r.jsx)(a.zxk, {
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
  return (0, r.jsxs)("div", {
    className: E.flex,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: "coming soon"
    }), (0, r.jsx)(a.zxk, {
      variant: "secondary",
      size: "sm",
      text: t,
      disabled: true,
      onClick: n
    })]
  })
}

function A(e) {
  let {
    label: t,
    onChange: n
  } = e;
  return (0, r.jsxs)("div", {
    className: E.hexInput,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: t
    }), (0, r.jsx)("input", {
      onChange: e => {
        n(e.target.value)
      },
      className: E.inputs,
      placeholder: "#000000"
    })]
  })
}

function C(e) {
  let {
    nameplate: t
  } = e, n = (0, o.e7)([u.default], () => u.default.getCurrentUser());
  return (0, r.jsx)("div", {
    className: E.preview,
    children: (0, r.jsxs)("div", {
      className: E.simArea,
      children: [(0, r.jsx)(a.Text, {
        className: E.label,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, r.jsx)(s.Z, {
        nameplate: t,
        user: n,
        currentUser: n
      }), (0, r.jsx)(a.Text, {
        className: E.label,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Z, {
          nameplate: t,
          selected: true,
          user: n,
          currentUser: n
        }), (0, r.jsx)(s.Z, {
          selected: true,
          user: n,
          currentUser: n
        })]
      })]
    })
  })
}

function N(e) {
  let {
    nameplate: t
  } = e;
  return (0, r.jsx)("div", {
    className: E.preview,
    children: (0, r.jsxs)("div", {
      className: E.simArea,
      children: [(0, r.jsx)(a.Text, {
        className: E.label,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, r.jsx)(m.Z, {
        nameplate: t
      }), (0, r.jsx)(a.Text, {
        className: E.label,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(m.Z, {
          selected: true,
          nameplate: t
        }), (0, r.jsx)(m.Z, {
          selected: true
        })]
      })]
    })
  })
}

function R(e) {
  let {
    nameplate: t
  } = e;
  return (0, r.jsx)("div", {
    className: E.preview,
    children: (0, r.jsx)("div", {
      className: E.rtcSim,
      children: (0, r.jsx)(p.Z, {
        nameplate: t
      })
    })
  })
}