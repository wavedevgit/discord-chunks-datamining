/** Chunk was on 50751 **/
n.d(t, {
  Z: () => x
});
var i = n(200651),
  r = n(239091),
  o = n(32300),
  l = n(603618),
  s = n(926086),
  a = n(353038),
  u = n(761374),
  c = n(340101),
  d = n(273816),
  p = n(2923),
  h = n(586742),
  f = n(243487),
  m = n(430561),
  g = n(134849),
  O = n(501787),
  v = n(981631),
  y = n(388032);

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function b(e, t) {
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
let x = {
  [v.Odu.VIDEO]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n,
        size: r,
        padding: o,
        borderWidth: l,
        showEmpty: s
      } = e;
      return (0, i.jsx)(h.Z, {
        id: t.id,
        locked: n,
        widget: t,
        height: "auto" === r.height ? 0 : r.height - 2 * o - 2 * l,
        width: "auto" === r.width ? 0 : r.width - 2 * o - 2 * l,
        showEmpty: s
      })
    },
    renderTitle: () => (0, i.jsx)(m.PI, {
      children: y.NW.string(y.t.UPvOiY)
    }),
    renderButtons: (e, t) => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.ls, {
        onClick: o => {
          var l, s, a;
          return l = o, s = e, a = t, void((0, c.js)(s) && (0, r.jW)(l, async () => {
            let {
              default: e
            } = await n.e("26775").then(n.bind(n, 740579));
            return a(!0), t => (0, i.jsx)(e, b(E({}, t), {
              widget: s,
              onClose: () => a(!1)
            }))
          }))
        }
      }), (0, i.jsx)(m.RT, {
        id: e.id,
        pinned: e.pinned
      })]
    }),
    resizeValidation(e) {
      let {
        widget: t,
        computedSize: n,
        borderWidth: i,
        padding: r
      } = e;
      return (0, c.js)(t) ? "boolean" != typeof t.meta.horizontal || t.meta.horizontal ? {
        width: Math.max(n.width, O.vZ),
        height: Math.min(n.height, 2 * O.mo + 2 * i + 2 * r)
      } : {
        height: Math.max(n.height, O.vZ),
        width: Math.min(n.width, 2 * O.mo + 2 * i + 2 * r)
      } : n
    }
  },
  [v.Odu.VOICE_V3]: {
    renderWidget(e) {
      let {
        widget: t,
        anchorLeft: n,
        locked: r,
        showEmpty: o
      } = e;
      return (0, i.jsx)(f.Z, {
        anchorLeft: n,
        id: t.id,
        locked: r,
        pinned: t.pinned,
        widget: v.Odu.VOICE,
        isPreviewingInGame: !1,
        showEmpty: o
      })
    },
    renderTitle: () => (0, i.jsx)(m.PI, {
      children: y.NW.string(y.t.nFv3GR)
    }),
    renderButtons: (e, t) => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.ls, {
        onClick: e => {
          (0, r.jW)(e, async () => {
            let {
              default: e
            } = await n.e("32382").then(n.bind(n, 955280));
            return t(!0), n => (0, i.jsx)(e, b(E({}, n), {
              onClose: () => t(!1)
            }))
          })
        }
      }), (0, i.jsx)(m.RT, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [v.Odu.CLICK_ZONE_DEBUG]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n
      } = e;
      return (0, i.jsx)(s.Z, {
        id: t.id,
        locked: n,
        pinned: t.pinned
      })
    },
    renderTitle: () => (0, i.jsx)(m.PI, {
      children: "Click Zone Tester"
    }),
    renderButtons: (e, t) => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.ls, {
        onClick: e => {
          (0, r.jW)(e, async () => {
            let {
              default: e
            } = await n.e("38813").then(n.bind(n, 541501));
            return t(!0), n => (0, i.jsx)(e, b(E({}, n), {
              onClose: () => t(!1)
            }))
          })
        }
      }), (0, i.jsx)(m.RT, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [v.Odu.PERFORMANCE_DEBUG]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n,
        anchorLeft: r
      } = e;
      return (0, i.jsx)(d.Z, {
        id: t.id,
        anchorLeft: r,
        locked: n,
        pinned: t.pinned
      })
    },
    renderTitle: () => (0, i.jsx)(m.PI, {
      children: "Overlay Performance"
    }),
    renderButtons: e => (0, i.jsx)(m.RT, {
      id: e.id,
      pinned: e.pinned
    })
  },
  [v.Odu.GO_LIVE]: {
    renderWidget(e) {
      var t;
      let {
        widget: n,
        locked: r,
        size: o,
        dragStart: l,
        anchorTop: s,
        anchorLeft: a,
        showEmpty: d
      } = e;
      return (0, c.ZL)(n) ? (0, i.jsx)(u.Z, {
        id: n.id,
        locked: r,
        pinned: n.pinned,
        opacity: n.opacity,
        size: o,
        anchorTop: s,
        anchorLeft: a,
        widget: v.Odu.GO_LIVE,
        isPreviewingInGame: !1,
        dragStart: l,
        horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
        padding: 8,
        borderWidth: 2,
        showEmpty: d
      }) : null
    },
    renderTitle: () => (0, i.jsx)(m.PI, {
      children: y.NW.string(y.t["386XRk"])
    }),
    renderButtons(e, t) {
      var o;
      return (0, c.ZL)(e) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.ls, {
          onClick: o => {
            var l, s, a;
            return l = o, s = e, a = t, void((0, c.ZL)(s) && (0, r.jW)(l, async () => {
              let {
                default: e
              } = await n.e("34684").then(n.bind(n, 68738));
              return a(!0), t => (0, i.jsx)(e, b(E({}, t), {
                widget: s,
                onClose: () => a(!1)
              }))
            }))
          }
        }), (0, i.jsx)(m.GY, {
          widgetId: e.id,
          showAllStreams: null === (o = e.meta.showAllStreams) || void 0 === o || o
        }), (0, i.jsx)(m.RT, {
          id: e.id,
          pinned: e.pinned
        })]
      }) : null
    },
    resizeValidation(e) {
      let {
        operation: t,
        computedSize: n,
        originSize: i,
        borderWidth: r,
        padding: o,
        containerSpecs: l
      } = e, s = 2 * r + 2 * o, u = i.width - s, c = i.height - s, d = u / c, p = c / u, h = (() => {
        switch (t) {
          case a.B.RESIZE_NORTH:
          case a.B.RESIZE_SOUTH:
            return {
              height: n.height, width: Math.round((n.height - s) * d + s)
            };
          default:
            return {
              width: n.width, height: Math.round((n.width - s) * p + s)
            }
        }
      })();
      return h.width > l.maxX && (h.width = l.maxX, h.height = (l.maxX - s) * p + s), h.height > l.maxY && (h.height = l.maxY, h.width = (l.maxY - s) * d + s), h
    }
  },
  [v.Odu.QUICK_ACTIONS]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(p.Z, {
        locked: t
      })
    }
  },
  [v.Odu.NOTIFICATIONS]: {
    renderWidget(e) {
      let {
        locked: t,
        showEmpty: n
      } = e;
      return (0, i.jsx)(g.Z, {
        locked: t,
        showEmpty: n
      })
    },
    renderTitle: () => (0, i.jsx)(m.PI, {
      children: y.NW.string(y.t.gnKWdX)
    }),
    renderButtons: (e, t) => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.ls, {
        onClick: e => {
          (0, r.jW)(e, async () => {
            let {
              default: e
            } = await n.e("94706").then(n.bind(n, 168133));
            return t(!0), n => (0, i.jsx)(e, b(E({}, n), {
              onClose: () => t(!1)
            }))
          })
        }
      }), (0, i.jsx)(m.RT, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [v.Odu.ACTIVITY]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(l.ZP, {
        locked: t
      })
    },
    renderTitle: () => (0, i.jsx)(m.PI, {
      children: y.NW.string(y.t["6gwSFR"])
    }),
    renderButtons: () => null,
    predicate: () => (0, o.Rb)("ActivityPopout").allowActivityWidget
  }
}