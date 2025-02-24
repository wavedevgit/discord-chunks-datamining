/** Chunk was on 624 **/
n.d(t, {
  Z: () => j
}), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(276264),
  d = n(205822),
  u = n(329013),
  m = n(594174),
  g = n(396821),
  p = n(4242),
  h = n(996746),
  f = n(711325),
  b = n(852630),
  N = n(731994),
  x = n(178389);

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j() {
  var e;
  let [t, n] = (0, i.useState)(!1), [s, a] = (0, i.useState)(!1), [l, c] = (0, i.useState)(null), m = (0, g.ZP)(e => e.toolsCache), {
    setToolsCache: h,
    removeToolsCache: b
  } = (0, g.L3)(), {
    setImgCache: j
  } = (0, g.W_)(), y = (0, i.useCallback)(e => {
    let t = m[e];
    null != t && c({
      src: t.url,
      palette: t.palette
    }), c(t => null == t ? {
      src: e
    } : E(_({}, t), {
      src: e
    }))
  }, [m]), A = (0, i.useCallback)(e => {
    b(e)
  }, [b]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: x.controls,
      children: [(0, r.jsxs)("div", {
        className: x.toggles,
        children: [(0, r.jsx)(o.zxk, {
          className: x.toggleButton,
          size: o.PhG.SMALL,
          onClick: () => {
            a(!1), n(e => !e)
          },
          color: o.Ttl.PRIMARY,
          children: "Toggle Themes"
        }), (0, r.jsx)(o.zxk, {
          className: x.toggleButton,
          size: o.PhG.SMALL,
          onClick: () => {
            n(!1), a(e => !e)
          },
          color: o.Ttl.PRIMARY,
          children: "Toggle Gradients"
        })]
      }), (0, r.jsxs)("div", {
        className: x.themePicker,
        children: [t && (0, r.jsx)(u.i, {}), " ", s && (0, r.jsx)(f.Z, {
          selected: null == l ? void 0 : null === (e = l.palette) || void 0 === e ? void 0 : e.name,
          onSelect: e => {
            (null == l ? void 0 : l.src) != null && h(l.src, l.src, e), c(t => null == t ? {
              palette: e
            } : E(_({}, t), {
              palette: e
            }))
          }
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: x.main,
      children: [(0, r.jsxs)("div", {
        className: x.previews,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          children: "Memberlist"
        }), (0, r.jsx)(S, {
          nameplate: l
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          children: "DMs"
        }), (0, r.jsx)(T, {
          nameplate: l
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          children: "RTC"
        }), (0, r.jsx)(I, {
          nameplate: l
        })]
      }), (0, r.jsxs)("div", {
        className: x.buttons,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          children: "Drag background image to screen"
        }), (0, r.jsx)(d.Z, {
          title: "upload image",
          description: "upload the background",
          icons: N.pA,
          onDrop: async e => {
            let t = URL.createObjectURL(e[0]),
              n = e[0],
              r = await n.arrayBuffer();
            j(t, t, (0, p.xh)(r)), h(t, t)
          }
        }), (0, r.jsx)("div", {
          className: x.uploadedArea,
          children: Object.values(m).map(e => {
            let {
              url: t
            } = e;
            return (0, r.jsx)(C, {
              src: t,
              onSetStatic: y,
              removeAsset: A
            }, t)
          })
        }), (0, r.jsx)(v, {
          label: "gradient override",
          onChange: e => c(t => null == t ? {
            palette: {
              name: "custom",
              darkBackground: e,
              lightBackground: e
            }
          } : E(_({}, t), {
            palette: {
              name: "custom",
              darkBackground: e,
              lightBackground: e
            }
          }))
        }), (0, r.jsx)(O, {
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
    removeAsset: i
  } = e;
  return (0, r.jsxs)("div", {
    className: x.uploaded,
    children: [(0, r.jsx)(o.P3F, {
      onClick: () => i(t),
      className: x.xicon,
      children: (0, r.jsx)(o.Dio, {
        size: "custom",
        width: 16,
        height: 16,
        name: "x"
      })
    }), (0, r.jsx)("img", {
      className: x.uploadedImg,
      src: t,
      alt: ""
    }), (0, r.jsx)("div", {
      className: x.uploadedControls,
      children: (0, r.jsx)(o.zxk, {
        onClick: () => n(t),
        size: o.PhG.TINY,
        color: o.Ttl.PRIMARY,
        children: "set nameplate"
      })
    })]
  })
}

function O(e) {
  let {
    label: t,
    onClick: n
  } = e;
  return (0, r.jsxs)("div", {
    className: x.flex,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: "coming soon"
    }), (0, r.jsx)(o.zxk, {
      disabled: !0,
      size: o.PhG.SMALL,
      color: o.Ttl.PRIMARY,
      onClick: n,
      children: t
    })]
  })
}

function v(e) {
  let {
    label: t,
    onChange: n
  } = e;
  return (0, r.jsxs)("div", {
    className: x.hexInput,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: t
    }), (0, r.jsx)("input", {
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
  } = e, n = (0, l.e7)([m.default], () => m.default.getCurrentUser());
  return (0, r.jsx)("div", {
    className: x.preview,
    children: (0, r.jsxs)("div", {
      className: x.simArea,
      children: [(0, r.jsx)(o.Text, {
        className: x.label,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, r.jsx)(c.Z, {
        nameplate: t,
        user: n,
        currentUser: n
      }), (0, r.jsx)(o.Text, {
        className: x.label,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Z, {
          nameplate: t,
          selected: !0,
          user: n,
          currentUser: n
        }), (0, r.jsx)(c.Z, {
          selected: !0,
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
  return (0, r.jsx)("div", {
    className: a()(x.preview, x.resizer),
    children: (0, r.jsxs)("div", {
      className: x.simArea,
      children: [(0, r.jsx)(o.Text, {
        className: x.label,
        variant: "text-sm/semibold",
        children: "DEFAULT"
      }), (0, r.jsx)(b.Z, {
        nameplate: t
      }), (0, r.jsx)(o.Text, {
        className: x.label,
        variant: "text-sm/semibold",
        children: "FOCUSED"
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(b.Z, {
          selected: !0,
          nameplate: t
        }), (0, r.jsx)(b.Z, {
          selected: !0
        })]
      })]
    })
  })
}

function I(e) {
  let {
    nameplate: t
  } = e;
  return (0, r.jsx)("div", {
    className: x.rtcSim,
    children: (0, r.jsx)(h.Z, {
      nameplate: t
    })
  })
}