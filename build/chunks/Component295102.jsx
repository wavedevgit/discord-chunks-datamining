/** Chunk was on 71447 **/
/** chunk id: 295102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk442433 = require("./442433.js"),
  Chunk126904 = require("./126904.js"),
  Chunk547463 = require("./547463.jsx"),
  Chunk620851 = require("./620851.jsx"),
  Chunk646881 = require("./646881.jsx"),
  Chunk97548 = require("./97548.jsx"),
  Chunk324093 = require("./324093.js"),
  Chunk897720 = require("./897720.js"),
  Chunk888987 = require("./888987.jsx"),
  Chunk218670 = require("./218670.jsx"),
  Chunk479207 = require("./479207.jsx"),
  Chunk393172 = require("./393172.jsx"),
  Chunk968898 = require("./968898.jsx"),
  Chunk196295 = require("./196295.jsx");
require("./392164.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function v(e, t) {
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
let b = {
  [Chunk652215.uss.VIDEO]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n,
        size: r,
        padding: l,
        borderWidth: a,
        showEmpty: o
      } = e;
      return (0, d.cv)(t) ? (0, i.jsx)(f.A, {
        id: t.id,
        locked: n,
        widget: t,
        height: "auto" === r.height ? 0 : r.height - 2 * l - 2 * a,
        width: "auto" === r.width ? 0 : r.width - 2 * l - 2 * a,
        showEmpty: o,
        padding: l,
        borderWidth: a
      }) : null
    },
    renderTitle: () => (0, i.jsx)(g.Pl, {
      children: O.intl.string(O.t.UPvOia)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.CS, {
        onClick: t => {
          (0, d.cv)(e) && (0, r.L3)(t, async () => {
            let {
              default: t
            } = await n.e("78238").then(n.bind(n, 440173));
            return n => (0, i.jsx)(t, v(E({}, n), {
              widget: e
            }))
          })
        }
      }), (0, i.jsx)(g.O0, {
        id: e.id,
        pinned: e.pinned
      })]
    }),
    resizeValidation: Chunk479207.r
  },
  [Chunk652215.uss.VOICE_V3]: {
    renderWidget(e) {
      var t;
      let {
        widget: n,
        anchorLeft: r,
        locked: l,
        showEmpty: a
      } = e;
      return (0, d.ZO)(n) ? (0, i.jsx)(m.Ay, {
        anchorLeft: r,
        id: n.id,
        locked: l,
        pinned: n.pinned,
        widget: A.uss.VOICE_V3,
        maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : 8,
        isPreviewingInGame: false,
        showEmpty: a
      }) : null
    },
    renderTitle: () => (0, i.jsx)(g.Pl, {
      children: O.intl.string(O.t.nFv3Gb)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.CS, {
        onClick: e => {
          (0, r.L3)(e, async () => {
            let {
              default: e
            } = await n.e("34901").then(n.bind(n, 51444));
            return t => (0, i.jsx)(e, E({}, t))
          })
        }
      }), (0, i.jsx)(g.O0, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [Chunk652215.uss.CLICK_ZONE_DEBUG]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n
      } = e;
      return (0, i.jsx)(o.A, {
        id: t.id,
        locked: n,
        pinned: t.pinned
      })
    },
    renderTitle: () => (0, i.jsx)(g.Pl, {
      children: "Click Zone Tester"
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.CS, {
        onClick: e => {
          (0, r.L3)(e, async () => {
            let {
              default: e
            } = await n.e("49170").then(n.bind(n, 508457));
            return t => (0, i.jsx)(e, E({}, t))
          })
        }
      }), (0, i.jsx)(g.O0, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [Chunk652215.uss.PERFORMANCE_DEBUG]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n,
        anchorLeft: r
      } = e;
      return (0, i.jsx)(p.A, {
        id: t.id,
        anchorLeft: r,
        locked: n,
        pinned: t.pinned
      })
    },
    renderTitle: () => (0, i.jsx)(g.Pl, {
      children: "Overlay Performance"
    }),
    renderButtons: e => (0, i.jsx)(g.O0, {
      id: e.id,
      pinned: e.pinned
    })
  },
  [Chunk652215.uss.GO_LIVE]: {
    renderWidget(e) {
      var t;
      let {
        widget: n,
        locked: r,
        size: l,
        dragStart: a,
        anchorTop: o,
        anchorLeft: s,
        showEmpty: u,
        padding: p,
        borderWidth: h
      } = e;
      return (0, d.dO)(n) ? (0, i.jsx)(c.A, {
        id: n.id,
        locked: r,
        pinned: n.pinned,
        opacity: n.opacity,
        size: l,
        anchorTop: o,
        anchorLeft: s,
        widget: n,
        isPreviewingInGame: false,
        dragStart: a,
        horizontal: null != (t = n.meta.horizontal) && t,
        padding: p,
        borderWidth: h,
        showEmpty: u
      }) : null
    },
    renderTitle: e => (0, i.jsx)(g.we, {
      widgetId: e.id,
      children: O.intl.string(O.t["386XRo"])
    }),
    renderButtons(e) {
      var t;
      return (0, d.dO)(e) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.CS, {
          onClick: t => {
            (0, d.dO)(e) && (0, r.L3)(t, async () => {
              let {
                default: t
              } = await n.e("21289").then(n.bind(n, 543824));
              return n => (0, i.jsx)(t, v(E({}, n), {
                widget: e
              }))
            })
          }
        }), (0, i.jsx)(g.GQ, {
          widgetId: e.id,
          showAllStreams: null == (t = e.meta.showAllStreams) || t
        }), (0, i.jsx)(g.O0, {
          id: e.id,
          pinned: e.pinned
        })]
      }) : null
    },
    resizeValidation: Chunk324093.OL
  },
  [Chunk652215.uss.QUICK_ACTIONS]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(h.A, {
        locked: t
      })
    }
  },
  [Chunk652215.uss.NOTIFICATIONS]: {
    renderWidget(e) {
      let {
        locked: t,
        showEmpty: n,
        widget: r
      } = e;
      return (0, i.jsx)(y.A, {
        pinned: r.pinned,
        locked: t,
        showEmpty: n
      })
    },
    renderTitle: () => (0, i.jsx)(g.Pl, {
      children: O.intl.string(O.t.gnKWdS)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.CS, {
        onClick: e => {
          (0, r.L3)(e, async () => {
            let {
              default: e
            } = await n.e("51607").then(n.bind(n, 320490));
            return t => (0, i.jsx)(e, E({}, t))
          })
        }
      }), (0, i.jsx)(g.O0, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [Chunk652215.uss.ACTIVITY]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(a.Ay, {
        locked: t
      })
    },
    renderTitle: () => (0, i.jsx)(g.Pl, {
      children: O.intl.string(O.t["6gwSFY"])
    }),
    renderButtons: () => null,
    predicate: () => !(0, l.c6)("FriendsPopout").enableOverlayWidget
  },
  [Chunk652215.uss.FRIENDS]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(s.A, {
        locked: t
      })
    },
    renderTitle: () => (0, i.jsx)(g.Pl, {
      children: O.intl.string(O.t.TdEu5X)
    }),
    renderButtons: () => null,
    predicate: () => (0, l.c6)("FriendsPopout").enableOverlayWidget
  }
}