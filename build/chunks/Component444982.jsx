/** Chunk was on 46290 **/
/** chunk id: 444982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk239091 = require("./239091.js"),
  Chunk482798 = require("./482798.js"),
  Chunk32300 = require("./32300.js"),
  Chunk603618 = require("./603618.jsx"),
  Chunk926086 = require("./926086.jsx"),
  Chunk878939 = require("./878939.jsx"),
  Chunk761374 = require("./761374.jsx"),
  Chunk340101 = require("./340101.js"),
  Chunk273816 = require("./273816.jsx"),
  Chunk2923 = require("./2923.jsx"),
  Chunk586742 = require("./586742.jsx"),
  Chunk243487 = require("./243487.jsx"),
  Chunk430561 = require("./430561.jsx"),
  Chunk134849 = require("./134849.jsx"),
  Chunk501787 = require("./501787.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
let I = {
  [Chunk981631.Odu.VIDEO]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n,
        size: r,
        padding: o,
        borderWidth: l,
        showEmpty: a
      } = e;
      return (0, d.js)(t) ? (0, i.jsx)(h.Z, {
        id: t.id,
        locked: n,
        widget: t,
        height: "auto" === r.height ? 0 : r.height - 2 * o - 2 * l,
        width: "auto" === r.width ? 0 : r.width - 2 * o - 2 * l,
        showEmpty: a,
        padding: o,
        borderWidth: l
      }) : null
    },
    renderTitle: () => (0, Chunk951288.jsx)(Chunk430561.PI, {
      children: Chunk388032.intl.string(Chunk388032.t.UPvOiY)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.ls, {
        onClick: t => {
          (0, d.js)(e) && (0, r.jW)(t, async () => {
            let {
              default: t
            } = await n.e("26775").then(n.bind(n, 740579));
            return n => (0, i.jsx)(t, _(E({}, n), {
              widget: e
            }))
          })
        }
      }), (0, i.jsx)(g.RT, {
        id: e.id,
        pinned: e.pinned
      })]
    }),
    resizeValidation: Chunk586742.R
  },
  [Chunk981631.Odu.VOICE_V3]: {
    renderWidget(e) {
      var t;
      let {
        widget: n,
        anchorLeft: r,
        locked: o,
        showEmpty: l
      } = e;
      return (0, d.Aw)(n) ? (0, i.jsx)(m.ZP, {
        anchorLeft: r,
        id: n.id,
        locked: o,
        pinned: n.pinned,
        widget: v.Odu.VOICE_V3,
        maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : O.At,
        isPreviewingInGame: false,
        showEmpty: l
      }) : null
    },
    renderTitle: () => (0, Chunk951288.jsx)(Chunk430561.PI, {
      children: Chunk388032.intl.string(Chunk388032.t.nFv3GR)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.ls, {
        onClick: e => {
          (0, r.jW)(e, async () => {
            let {
              default: e
            } = await n.e("32382").then(n.bind(n, 955280));
            return t => (0, i.jsx)(e, E({}, t))
          })
        }
      }), (0, i.jsx)(g.RT, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [Chunk981631.Odu.CLICK_ZONE_DEBUG]: {
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
    renderTitle: () => (0, Chunk951288.jsx)(Chunk430561.PI, {
      children: "Click Zone Tester"
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.ls, {
        onClick: e => {
          (0, r.jW)(e, async () => {
            let {
              default: e
            } = await n.e("38813").then(n.bind(n, 541501));
            return t => (0, i.jsx)(e, E({}, t))
          })
        }
      }), (0, i.jsx)(g.RT, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [Chunk981631.Odu.PERFORMANCE_DEBUG]: {
    renderWidget(e) {
      let {
        widget: t,
        locked: n,
        anchorLeft: r
      } = e;
      return (0, i.jsx)(p.Z, {
        id: t.id,
        anchorLeft: r,
        locked: n,
        pinned: t.pinned
      })
    },
    renderTitle: () => (0, Chunk951288.jsx)(Chunk430561.PI, {
      children: "Overlay Performance"
    }),
    renderButtons: e => (0, i.jsx)(g.RT, {
      id: e.id,
      pinned: e.pinned
    })
  },
  [Chunk981631.Odu.GO_LIVE]: {
    renderWidget(e) {
      var t;
      let {
        widget: n,
        locked: r,
        size: o,
        dragStart: l,
        anchorTop: a,
        anchorLeft: s,
        showEmpty: c,
        padding: p,
        borderWidth: f
      } = e;
      return (0, d.ZL)(n) ? (0, i.jsx)(u.Z, {
        id: n.id,
        locked: r,
        pinned: n.pinned,
        opacity: n.opacity,
        size: o,
        anchorTop: a,
        anchorLeft: s,
        widget: n,
        isPreviewingInGame: false,
        dragStart: l,
        horizontal: null != (t = n.meta.horizontal) && t,
        padding: p,
        borderWidth: f,
        showEmpty: c
      }) : null
    },
    renderTitle: () => (0, Chunk951288.jsx)(Chunk430561.PI, {
      children: Chunk388032.intl.string(Chunk388032.t["386XRk"])
    }),
    renderButtons(e) {
      var t;
      return (0, d.ZL)(e) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.ls, {
          onClick: t => {
            (0, d.ZL)(e) && (0, r.jW)(t, async () => {
              let {
                default: t
              } = await n.e("34684").then(n.bind(n, 68738));
              return n => (0, i.jsx)(t, _(E({}, n), {
                widget: e
              }))
            })
          }
        }), (0, i.jsx)(g.GY, {
          widgetId: e.id,
          showAllStreams: null == (t = e.meta.showAllStreams) || t
        }), (0, i.jsx)(g.RT, {
          id: e.id,
          pinned: e.pinned
        })]
      }) : null
    },
    resizeValidation: Chunk761374.w
  },
  [Chunk981631.Odu.QUICK_ACTIONS]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(f.Z, {
        locked: t
      })
    }
  },
  [Chunk981631.Odu.NOTIFICATIONS]: {
    renderWidget(e) {
      let {
        locked: t,
        showEmpty: n,
        widget: r
      } = e;
      return (0, i.jsx)(y.Z, {
        pinned: r.pinned,
        locked: t,
        showEmpty: n
      })
    },
    renderTitle: () => (0, Chunk951288.jsx)(Chunk430561.PI, {
      children: Chunk388032.intl.string(Chunk388032.t.gnKWdX)
    }),
    renderButtons: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.ls, {
        onClick: e => {
          (0, r.jW)(e, async () => {
            let {
              default: e
            } = await n.e("94706").then(n.bind(n, 168133));
            return t => (0, i.jsx)(e, E({}, t))
          })
        }
      }), (0, i.jsx)(g.RT, {
        id: e.id,
        pinned: e.pinned
      })]
    })
  },
  [Chunk981631.Odu.ACTIVITY]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(a.ZP, {
        locked: t
      })
    },
    renderTitle: () => (0, Chunk951288.jsx)(Chunk430561.PI, {
      children: Chunk388032.intl.string(Chunk388032.t["6gwSFR"])
    }),
    renderButtons: () => null,
    predicate: () => (0, Chunk32300.Rb)("ActivityPopout").allowActivityWidget && !(0, Chunk482798.XU)("FriendsPopout").enableOverlayWidget
  },
  [Chunk981631.Odu.FRIENDS]: {
    renderWidget(e) {
      let {
        locked: t
      } = e;
      return (0, i.jsx)(c.Z, {
        locked: t
      })
    },
    renderTitle: () => (0, Chunk951288.jsx)(Chunk430561.PI, {
      children: Chunk388032.intl.string(Chunk388032.t.TdEu5e)
    }),
    renderButtons: () => null,
    predicate: () => (0, Chunk482798.XU)("FriendsPopout").enableOverlayWidget
  }
}