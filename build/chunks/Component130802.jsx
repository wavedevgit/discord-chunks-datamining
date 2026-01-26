/** Chunk was on 67564 **/
/** chunk id: 130802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u5: () => v,
  zd: () => x
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827827 = require("./827827.js"),
  Chunk253932 = require("./253932.js"),
  Chunk461213 = require("./461213.js"),
  Chunk481045 = require("./481045.jsx"),
  Chunk536482 = require("./536482.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk761960 = require("./761960.js"),
  Chunk233732 = require("./233732.js");

function b(e) {
  let {
    closePopout: t
  } = e;
  return (0, l.jsx)("div", {
    "data-button-hoisted-classname-wrapper": true,
    className: g.K2,
    children: (0, l.jsx)(o.Button, {
      variant: "primary",
      size: "sm",
      text: f.intl.string(h.default.Poezn1),
      onClick: () => {
        t(), (0, c.A)({
          nextStatus: o.clD.ONLINE
        })
      },
      fullWidth: true
    })
  })
}

function A(e) {
  let {
    showCurrentGame: t,
    shouldShowStatus: n = false
  } = e, r = (0, s.bG)([d.A], () => d.A.getStatus());
  return (0, l.jsxs)("div", {
    className: g.E3,
    children: [(0, l.jsxs)("div", {
      className: g.fu,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: f.intl.string(h.default.WhdCGP)
      }), n && (0, l.jsxs)("div", {
        className: g.$v,
        children: [(0, l.jsx)(o.nW6, {
          status: o.clD.ONLINE,
          size: 8
        }), (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: r === o.clD.INVISIBLE ? f.intl.string(h.default.a3AofS) : f.intl.string(f.t.WbGtnH)
        })]
      })]
    }), (0, l.jsx)(o.dOG, {
      onChange: e => {
        u.tz.updateSetting(e), n && (0, c.A)({
          nextStatus: e ? o.clD.ONLINE : o.clD.INVISIBLE
        })
      },
      checked: t
    })]
  })
}

function y(e) {
  let {
    children: t
  } = e, n = (0, i.useRef)(null);
  return (0, o.tjt)(n), (0, l.jsx)("div", {
    className: g.iE,
    ref: n,
    children: (0, l.jsx)("div", {
      className: g.Qs,
      children: t
    })
  })
}

function _(e) {
  let {
    closePopout: t
  } = e, n = u.tz.useSetting();
  return (0, l.jsxs)(y, {
    children: [(0, l.jsx)(A, {
      showCurrentGame: n
    }), (0, l.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: f.intl.string(h.default["7cfFob"])
    }), (0, l.jsx)(o.cGx, {
      className: g.yF
    }), (0, l.jsx)(p.qA, {
      onClosePopout: t
    })]
  })
}

function O(e) {
  let {
    closePopout: t
  } = e;
  return (0, l.jsxs)(y, {
    children: [(0, l.jsxs)(o.BJc, {
      align: "start",
      gap: 0,
      style: {
        marginBottom: 8
      },
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: g._M,
        children: f.intl.string(h.default["5YsmGI"])
      }), (0, l.jsxs)("div", {
        className: g.$v,
        children: [(0, l.jsx)(o.nW6, {
          status: o.clD.ONLINE,
          size: 8
        }), (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: f.intl.string(h.default.U8MFdR)
        })]
      })]
    }), (0, l.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: f.intl.string(h.default.Yl0mh4)
    }), (0, l.jsx)(b, {
      closePopout: t
    })]
  })
}

function j(e) {
  let {
    closePopout: t
  } = e, n = u.tz.useSetting();
  return (0, l.jsxs)(y, {
    children: [(0, l.jsx)(A, {
      showCurrentGame: n,
      shouldShowStatus: true
    }), (0, l.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: f.intl.string(h.default["7cfFob"])
    }), (0, l.jsx)(o.cGx, {
      className: g.yF
    }), (0, l.jsx)(p.qA, {
      onClosePopout: t
    })]
  })
}
var v = ((r = {})[r.ActivityNux = 0] = "ActivityNux", r[r.StatusNux = 1] = "StatusNux", r[r.ActivityAndStatusNux = 2] = "ActivityAndStatusNux", r[r.Activity = 3] = "Activity", r[r.Status = 4] = "Status", r[r.ActivityAndStatus = 5] = "ActivityAndStatus", r);

function x(e) {
  let {
    showPopout: t,
    popoutState: n,
    handleClose: r,
    popoutTargetRef: s,
    children: d
  } = e, [g, b] = (0, i.useState)(n), A = (0, i.useRef)(null), y = function(e) {
    if (null === e) return null;
    switch (e) {
      case 0:
        return {
          type: "popover", title: f.intl.string(h.default.vxVbGP), body: [f.intl.string(h.default["7cfFob"])], action: {
            text: f.intl.string(h.default.k4tCg2),
            onClick: () => {
              u.tz.updateSetting(true)
            }
          }, textLink: {
            text: f.intl.string(f.t["ZrN+DT"]),
            onClick: p.L7
          }
        };
      case 1:
        return {
          type: "popover", title: f.intl.string(h.default.qKDqet), body: [f.intl.string(h.default.Yl0mh4)], action: {
            text: f.intl.string(h.default.Poezn1),
            onClick: () => {
              (0, c.A)({
                nextStatus: o.clD.ONLINE
              })
            }
          }
        };
      case 2:
        return {
          type: "popover", title: f.intl.string(h.default["6cA8HZ"]), body: [f.intl.string(h.default["7cfFob"])], action: {
            text: f.intl.string(h.default.k4tCg2),
            onClick: () => {
              u.tz.updateSetting(true), (0, c.A)({
                nextStatus: o.clD.ONLINE
              })
            }
          }, textLink: {
            text: f.intl.string(f.t["ZrN+DT"]),
            onClick: p.L7
          }
        };
      case 3:
        return {
          type: "popout", children: _
        };
      case 4:
        return {
          type: "popout", children: O
        };
      case 5:
        return {
          type: "popout", children: j
        };
      default:
        return null
    }
  }(g), v = (0, i.useRef)(t);
  if ((0, i.useEffect)(() => {
      t && !v.current && b(n), t !== v.current && (v.current = t)
    }, [n, t]), null == y || !t) return d;
  if ("popover" === y.type) {
    var x, E;
    let {
      action: e,
      title: t,
      body: n,
      textLink: i
    } = y;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.AM, {
        targetElementRef: s,
        shouldShow: true,
        position: "top",
        align: "center",
        onRequestClose: r,
        title: t,
        body: n,
        textLink: i,
        gradientColor: "purple",
        graphic: {
          type: "image",
          src: m.A
        },
        actions: [(x = function(e) {
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
        }({}, e), E = E = {
          onClick: t => {
            var n;
            null == (n = e.onClick) || n.call(e, t), r()
          }
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(E)).forEach(function(e) {
          Object.defineProperty(x, e, Object.getOwnPropertyDescriptor(E, e))
        }), x)]
      }), d]
    })
  }
  let {
    children: C
  } = y;
  return (0, l.jsx)(o.YNO, {
    targetElementRef: A,
    shouldShow: true,
    spacing: 10,
    position: "top",
    align: "left",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(C, {
        closePopout: t
      })
    },
    onRequestClose: r,
    children: () => (0, l.jsx)(o.DUT, {
      innerRef: A,
      onClick: r,
      children: d
    })
  })
}