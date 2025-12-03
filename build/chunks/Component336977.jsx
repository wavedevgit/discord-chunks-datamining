/** Chunk was on 76815 **/
/** chunk id: 336977, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk626135 = require("./626135.js"),
  Chunk832239 = require("./832239.js"),
  Chunk532498 = require("./532498.js"),
  Chunk407383 = require("./407383.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk360649 = require("./360649.js"),
  Chunk617921 = require("./617921.js");

function g(t) {
  let {
    onClose: n,
    source: e = p.I.INAPPROPRIATE_CONVERSATION,
    transitionState: r
  } = t, o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [c, I] = a.useState(o), x = a.useRef(null), g = a.useRef(null);
  async function m() {
    await n()
  }
  return a.useEffect(() => {
    let t = new Date;
    return d.default.track(N.rMx.VIBING_WUMPUS_VIEWED, {
      source: e
    }), o || (0, _.JO)(), () => {
      d.default.track(N.rMx.VIBING_WUMPUS_CLOSED, {
        duration_open_ms: new Date().getTime() - t.getTime(),
        source: e
      }), (0, _.zu)()
    }
  }, [e]), (0, i.jsxs)("div", {
    className: C.riveContainer,
    children: [(0, i.jsx)(l.b_m, {
      withReducedMotion: "halt",
      listenOnDocumentBody: true,
      artboard: "Background",
      ref: g,
      className: C.backgroundRive
    }), (0, i.jsx)(l.Ioy, {
      graphic: {
        rive: l.glG,
        type: "rive",
        props: {
          ref: x,
          withReducedMotion: "halt"
        }
      },
      gradientColor: "blue",
      title: f.intl.string(f.t.L4ifkZ),
      subtitle: f.intl.string(f.t.GkCsLr),
      actions: [{
        text: f.intl.string(f.t["8eKkaf"]),
        onClick: () => {
          n(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, {
            action: p.G.BACK_TO_CONVERSATION
          })
        },
        variant: "secondary"
      }, {
        text: f.intl.string(c ? f.t.RscU7I : f.t.ZcgDJX),
        onClick: () => {
          var t, n, e, i;
          c ? ((0, _.JO)(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, {
            action: p.G.PLAY
          }), null == (t = x.current) || t.play(), null == (n = g.current) || n.play()) : ((0, _.hW)(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, {
            action: p.G.PAUSE
          }), null == (e = x.current) || e.pause(), null == (i = g.current) || i.pause()), I(!c)
        },
        icon: c ? l.o1U : l.fpf
      }],
      onClose: m,
      transitionState: r
    })]
  })
}

function m(t) {
  let {
    onClose: n,
    source: r = p.I.INAPPROPRIATE_CONVERSATION
  } = t, I = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [g, m] = a.useState(false);
  async function A() {
    let {
      default: t
    } = await e.e("29641").then(e.t.bind(e, 937359, 19));
    return t
  }
  return a.useEffect(() => {
    let t = new Date;
    return d.default.track(N.rMx.VIBING_WUMPUS_VIEWED, {
      source: r
    }), (0, _.JO)(), () => {
      d.default.track(N.rMx.VIBING_WUMPUS_CLOSED, {
        duration_open_ms: new Date().getTime() - t.getTime(),
        source: r
      }), (0, _.zu)()
    }
  }, [r]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: C.ringContainer,
      children: (0, i.jsx)("img", {
        src: x,
        alt: ""
      })
    }), (0, i.jsx)(l.Fmz, {
      importData: A,
      shouldAnimate: !g && !I,
      className: C.wumpus,
      pauseAtFrame: I ? 200 : true
    }), (0, i.jsx)(c.u, {
      text: g ? f.intl.string(f.t.RscU7I) : f.intl.string(f.t.ZcgDJX),
      position: "top",
      "aria-label": g ? f.intl.string(f.t.RscU7I) : f.intl.string(f.t.ZcgDJX),
      children: (0, i.jsx)(l.P3F, {
        onClick: () => {
          g ? ((0, _.JO)(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, {
            action: p.G.PLAY
          })) : ((0, _.hW)(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, {
            action: p.G.PAUSE
          })), m(!g)
        },
        className: o()(C.iconButton, C.absolute),
        children: g ? (0, i.jsx)(l.o1U, {
          size: "xs",
          color: "currentColor",
          className: C.icon
        }) : (0, i.jsx)(l.fpf, {
          size: "xs",
          color: "currentColor",
          className: C.icon
        })
      })
    }), (0, i.jsx)(l.hzk, {
      "data-migration-pending": true,
      className: C.body,
      children: (0, i.jsxs)("div", {
        className: C.textContainer,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: f.intl.string(f.t.L4ifkZ)
        }), (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: f.intl.string(f.t.R8LCMZ)
        })]
      })
    }), (0, i.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsx)("div", {
        className: C.buttonContainer,
        children: (0, i.jsx)(l.Button, {
          variant: "primary",
          text: f.intl.string(f.t["8eKkaf"]),
          fullWidth: true,
          onClick: () => {
            n(), d.default.track(N.rMx.VIBING_WUMPUS_ACTION, {
              action: p.G.BACK_TO_CONVERSATION
            })
          }
        })
      })
    })]
  })
}
let A = t => {
  let {
    onClose: n,
    transitionState: e
  } = t;
  return (0, I.J)("inappropriate_conversation_web") ? (0, i.jsx)(g, {
    onClose: n,
    transitionState: e
  }) : (0, i.jsx)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: e,
    parentComponent: "VibingWumpusModal",
    children: (0, i.jsx)(m, {
      onClose: n,
      transitionState: e
    })
  })
}