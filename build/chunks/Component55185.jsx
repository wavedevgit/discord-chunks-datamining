/** Chunk was on 81985 **/
/** chunk id: 55185, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => E,
  NK: () => C
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk246133 = require("./246133.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk223730 = require("./223730.jsx"),
  Chunk418924 = require("./418924.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk509780 = require("./509780.js"),
  Chunk273701 = require("./273701.js");

function b(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: g.goOnlineButton,
    children: (0, i.jsx)(s.Button, {
      variant: "primary",
      size: "sm",
      text: h.intl.string(f.default.Poezn1),
      onClick: () => {
        t(), (0, c.Z)({
          nextStatus: s.Skl.ONLINE
        })
      },
      fullWidth: true
    })
  })
}

function y(e) {
  let {
    showCurrentGame: t,
    shouldShowStatus: n = false
  } = e, r = (0, a.e7)([d.Z], () => d.Z.getStatus());
  return (0, i.jsxs)("div", {
    className: g.toggleContainer,
    children: [(0, i.jsxs)("div", {
      className: g.toggleContainerText,
      children: [(0, i.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: h.intl.string(f.default.WhdCGP)
      }), n && (0, i.jsxs)("div", {
        className: g.toggleContainerOnlineRow,
        children: [(0, i.jsx)(s.qbd, {
          status: s.Skl.ONLINE,
          size: 8
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: r === s.Skl.INVISIBLE ? h.intl.string(f.default.a3AofS) : h.intl.string(h.t.WbGtnH)
        })]
      })]
    }), (0, i.jsx)(s.rsf, {
      onChange: e => {
        u.G6.updateSetting(e), n && (0, c.Z)({
          nextStatus: e ? s.Skl.ONLINE : s.Skl.INVISIBLE
        })
      },
      checked: t
    })]
  })
}

function v(e) {
  let {
    children: t
  } = e, n = (0, l.useRef)(null);
  return (0, s.Tbt)(n), (0, i.jsx)("div", {
    className: g.wrapper,
    ref: n,
    children: (0, i.jsx)("div", {
      className: g.content,
      children: t
    })
  })
}

function O(e) {
  let {
    closePopout: t
  } = e, n = u.G6.useSetting();
  return (0, i.jsxs)(v, {
    children: [(0, i.jsx)(y, {
      showCurrentGame: n
    }), (0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: h.intl.string(f.default["7cfFob"])
    }), (0, i.jsx)(s.izJ, {
      className: g.divider
    }), (0, i.jsx)(p.yj, {
      onClosePopout: t
    })]
  })
}

function j(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsxs)(v, {
    children: [(0, i.jsxs)(s.Kqy, {
      align: "start",
      gap: 0,
      style: {
        marginBottom: 8
      },
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: g.controlTitle,
        children: h.intl.string(f.default["5YsmGI"])
      }), (0, i.jsxs)("div", {
        className: g.toggleContainerOnlineRow,
        children: [(0, i.jsx)(s.qbd, {
          status: s.Skl.ONLINE,
          size: 8
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: h.intl.string(f.default.U8MFdR)
        })]
      })]
    }), (0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: h.intl.string(f.default.Yl0mh4)
    }), (0, i.jsx)(b, {
      closePopout: t
    })]
  })
}

function x(e) {
  let {
    closePopout: t
  } = e, n = u.G6.useSetting();
  return (0, i.jsxs)(v, {
    children: [(0, i.jsx)(y, {
      showCurrentGame: n,
      shouldShowStatus: true
    }), (0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: h.intl.string(f.default["7cfFob"])
    }), (0, i.jsx)(s.izJ, {
      className: g.divider
    }), (0, i.jsx)(p.yj, {
      onClosePopout: t
    })]
  })
}
var C = ((r = {})[r.ActivityNux = 0] = "ActivityNux", r[r.StatusNux = 1] = "StatusNux", r[r.ActivityAndStatusNux = 2] = "ActivityAndStatusNux", r[r.Activity = 3] = "Activity", r[r.Status = 4] = "Status", r[r.ActivityAndStatus = 5] = "ActivityAndStatus", r);

function E(e) {
  let {
    showPopout: t,
    popoutState: n,
    handleClose: r,
    popoutTargetRef: a,
    children: d
  } = e, [g, b] = (0, l.useState)(n), y = (0, l.useRef)(null), v = function(e) {
    if (null === e) return null;
    switch (e) {
      case 0:
        return {
          type: "popover", title: h.intl.string(f.default.vxVbGP), body: [h.intl.string(f.default["7cfFob"])], action: {
            text: h.intl.string(f.default.k4tCg2),
            onClick: () => {
              u.G6.updateSetting(true)
            }
          }, textLink: {
            text: h.intl.string(h.t["ZrN+DT"]),
            onClick: p.S$
          }
        };
      case 1:
        return {
          type: "popover", title: h.intl.string(f.default.qKDqet), body: [h.intl.string(f.default.Yl0mh4)], action: {
            text: h.intl.string(f.default.Poezn1),
            onClick: () => {
              (0, c.Z)({
                nextStatus: s.Skl.ONLINE
              })
            }
          }
        };
      case 2:
        return {
          type: "popover", title: h.intl.string(f.default["6cA8HZ"]), body: [h.intl.string(f.default["7cfFob"])], action: {
            text: h.intl.string(f.default.k4tCg2),
            onClick: () => {
              u.G6.updateSetting(true), (0, c.Z)({
                nextStatus: s.Skl.ONLINE
              })
            }
          }, textLink: {
            text: h.intl.string(h.t["ZrN+DT"]),
            onClick: p.S$
          }
        };
      case 3:
        return {
          type: "popout", children: O
        };
      case 4:
        return {
          type: "popout", children: j
        };
      case 5:
        return {
          type: "popout", children: x
        };
      default:
        return null
    }
  }(g), C = (0, l.useRef)(t);
  if ((0, l.useEffect)(() => {
      t && !C.current && b(n), t !== C.current && (C.current = t)
    }, [n, t]), null == v || !t) return d;
  if ("popover" === v.type) {
    var E, S;
    let {
      action: e,
      title: t,
      body: n,
      textLink: l
    } = v;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.J2, {
        targetElementRef: a,
        shouldShow: true,
        position: "top",
        align: "center",
        onRequestClose: r,
        title: t,
        body: n,
        textLink: l,
        gradientColor: "purple",
        graphic: {
          type: "image",
          src: m.Z
        },
        actions: [(E = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), S = S = {
          onClick: t => {
            var n;
            null == (n = e.onClick) || n.call(e, t), r()
          }
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(S)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(S)).forEach(function(e) {
          Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(S, e))
        }), E)]
      }), d]
    })
  }
  let {
    children: _
  } = v;
  return (0, i.jsx)(s.yRy, {
    targetElementRef: y,
    shouldShow: true,
    spacing: 10,
    position: "top",
    align: "left",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(_, {
        closePopout: t
      })
    },
    onRequestClose: r,
    children: () => (0, i.jsx)(s.P3F, {
      innerRef: y,
      onClick: r,
      children: d
    })
  })
}