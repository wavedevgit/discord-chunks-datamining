/** Chunk was on 71447 **/
/** chunk id: 295102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk442433 = require("./442433.js"),
  Chunk383501 = require("./383501.js"),
  Chunk589051 = require("./589051.js"),
  Chunk547463 = require("./547463.jsx"),
  Chunk620851 = require("./620851.jsx"),
  Chunk646881 = require("./646881.jsx"),
  Chunk97548 = require("./97548.jsx"),
  Chunk324093 = require("./324093.js"),
  Chunk897720 = require("./897720.js"),
  Chunk888987 = require("./888987.jsx"),
  Chunk218670 = require("./218670.jsx"),
  Chunk709747 = require("./709747.jsx"),
  Chunk479207 = require("./479207.jsx"),
  Chunk393172 = require("./393172.jsx"),
  Chunk968898 = require("./968898.jsx"),
  Chunk196295 = require("./196295.jsx"),
  Chunk187667 = require("./187667.js");
require("./392164.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
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

function _(e, t) {
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
let S = {
  [Chunk652215.uss.VIDEO]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n,
        size: r,
        padding: l,
        borderWidth: a,
        showEmpty: s
      } = e;
      return (0, h.cv)(t) ? (0, i.jsx)(m.A, {
        id: t.id,
        locked: n,
        widget: t,
        height: "auto" === r.height ? 0 : r.height - 2 * l - 2 * a,
        width: "auto" === r.width ? 0 : r.width - 2 * l - 2 * a,
        showEmpty: s,
        padding: l,
        borderWidth: a
      }) : null
    },
    renderTitle: () => (0, i.jsx)(A.Pl, {
      children: O.intl.string(O.t.UPvOia)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(A.CS, {
        onClick: t => {
          (0, h.cv)(e) && (0, r.L3)(t, async () => {
            let {
              default: t
            } = await n.e("78238").then(n.bind(n, 440173));
            return n => (0, i.jsx)(t, _(x({}, n), {
              widget: e
            }))
          })
        }
      }), (0, i.jsx)(A.O0, {
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
      return (0, h.ZO)(n) ? (0, i.jsx)(y.Ay, {
        anchorLeft: r,
        id: n.id,
        locked: l,
        pinned: n.pinned,
        widget: E.uss.VOICE_V3,
        maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : 8,
        isPreviewingInGame: false,
        showEmpty: a
      }) : null
    },
    renderTitle: () => (0, i.jsx)(A.Pl, {
      children: O.intl.string(O.t.nFv3Gb)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(A.CS, {
        onClick: e => {
          (0, r.L3)(e, async () => {
            let {
              default: e
            } = await n.e("34901").then(n.bind(n, 51444));
            return t => (0, i.jsx)(e, x({}, t))
          })
        }
      }), (0, i.jsx)(A.O0, {
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
    renderTitle: () => (0, i.jsx)(A.Pl, {
      children: "Click Zone Tester"
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(A.CS, {
        onClick: e => {
          (0, r.L3)(e, async () => {
            let {
              default: e
            } = await n.e("49170").then(n.bind(n, 508457));
            return t => (0, i.jsx)(e, x({}, t))
          })
        }
      }), (0, i.jsx)(A.O0, {
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
    renderTitle: () => (0, i.jsx)(A.Pl, {
      children: "Overlay Performance"
    }),
    renderButtons: e => (0, i.jsx)(A.O0, {
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
        anchorTop: s,
        anchorLeft: o,
        showEmpty: u,
        padding: d,
        borderWidth: p
      } = e;
      return (0, h.dO)(n) ? (0, i.jsx)(c.A, {
        id: n.id,
        locked: r,
        pinned: n.pinned,
        opacity: n.opacity,
        size: l,
        anchorTop: s,
        anchorLeft: o,
        widget: n,
        isPreviewingInGame: false,
        dragStart: a,
        horizontal: null != (t = n.meta.horizontal) && t,
        padding: d,
        borderWidth: p,
        showEmpty: u
      }) : null
    },
    renderTitle: e => (0, i.jsx)(A.we, {
      widgetId: e.id,
      children: O.intl.string(O.t["386XRo"])
    }),
    renderButtons(e) {
      var t;
      return (0, h.dO)(e) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(A.CS, {
          onClick: t => {
            (0, h.dO)(e) && (0, r.L3)(t, async () => {
              let {
                default: t
              } = await n.e("21289").then(n.bind(n, 543824));
              return n => (0, i.jsx)(t, _(x({}, n), {
                widget: e
              }))
            })
          }
        }), (0, i.jsx)(A.GQ, {
          widgetId: e.id,
          showAllStreams: null == (t = e.meta.showAllStreams) || t
        }), (0, i.jsx)(A.O0, {
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
      return (0, i.jsx)(f.A, {
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
      return (0, i.jsx)(v.A, {
        pinned: r.pinned,
        locked: t,
        showEmpty: n
      })
    },
    renderTitle: () => (0, i.jsx)(A.Pl, {
      children: O.intl.string(O.t.gnKWdS)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(A.CS, {
        onClick: e => {
          (0, r.L3)(e, async () => {
            let {
              default: e
            } = await n.e("51607").then(n.bind(n, 320490));
            return t => (0, i.jsx)(e, x({}, t))
          })
        }
      }), (0, i.jsx)(A.O0, {
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
      return (0, i.jsx)(s.Ay, {
        locked: t
      })
    },
    renderTitle: () => (0, i.jsx)(A.Pl, {
      children: O.intl.string(O.t["6gwSFY"])
    }),
    renderButtons: () => null,
    predicate: () => !(0, a.NI)("WidgetRenderConfig").hasFriendList
  },
  [Chunk652215.uss.FRIENDS]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(u.A, {
        locked: t
      })
    },
    renderTitle: () => (0, i.jsx)(A.Pl, {
      children: O.intl.string(O.t.TdEu5X)
    }),
    renderButtons: () => null,
    predicate: () => (0, a.NI)("WidgetRenderConfig").hasFriendList
  },
  [Chunk652215.uss.TEXT_CHAT_V3]: {
    renderWidget(e) {
      let {
        locked: t,
        dragStart: n,
        dragging: r
      } = e;
      return (0, i.jsx)(g.A, {
        locked: t,
        dragStart: n,
        dragging: r
      })
    },
    renderTitle: () => (0, i.jsx)(A.Pl, {
      children: O.intl.string(O.t["/VQax8"])
    }),
    renderButtons: () => null,
    predicate: () => (0, a.NI)("WidgetRenderConfig").hasChat,
    containerRenderGate: {
      stores: [Chunk383501.A, Chunk187667.A],
      shouldRender(e) {
        var t;
        let {
          locked: n
        } = e;
        if (n) returnfalse;
        let i = null != (t = l.A.getChannelId()) ? t : null,
          [r] = b.A.getSessionEntries(),
          a = r.length > 0;
        return null != i || a
      }
    }
  }
}