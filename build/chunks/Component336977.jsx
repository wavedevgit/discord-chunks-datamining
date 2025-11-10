/** Chunk was on 76815 **/
/** chunk id: 336977, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk626135 = require("./626135.js"),
  Chunk832239 = require("./832239.js"),
  Chunk407383 = require("./407383.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk360649 = require("./360649.js"),
  Chunk617921 = require("./617921.js");

function x(t) {
  let {
    onClose: n,
    source: x = d.I.INAPPROPRIATE_CONVERSATION
  } = t, m = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), [C, h] = a.useState(false);
  async function A() {
    let {
      default: t
    } = await e.e("29641").then(e.t.bind(e, 937359, 19));
    return t
  }
  return a.useEffect(() => {
    let t = new Date;
    return l.default.track(_.rMx.VIBING_WUMPUS_VIEWED, {
      source: x
    }), (0, u.JO)(), () => {
      l.default.track(_.rMx.VIBING_WUMPUS_CLOSED, {
        duration_open_ms: new Date().getTime() - t.getTime(),
        source: x
      }), (0, u.zu)()
    }
  }, [x]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: I.ringContainer,
      children: (0, i.jsx)("img", {
        src: N,
        alt: "",
        className: I.__invalid_ringArt
      })
    }), (0, i.jsx)(s.Fmz, {
      importData: A,
      shouldAnimate: !C && !m,
      className: I.wumpus,
      pauseAtFrame: m ? 200 : true
    }), (0, i.jsx)(o.u, {
      text: C ? p.intl.string(p.t.RscU7I) : p.intl.string(p.t.ZcgDJX),
      position: "top",
      "aria-label": C ? p.intl.string(p.t.RscU7I) : p.intl.string(p.t.ZcgDJX),
      children: (0, i.jsx)(s.P3F, {
        onClick: () => {
          C ? ((0, u.JO)(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, {
            action: d.G.PLAY
          })) : ((0, u.hW)(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, {
            action: d.G.PAUSE
          })), h(!C)
        },
        className: I.iconButton,
        children: C ? (0, i.jsx)(s.o1U, {
          size: "xs",
          color: "currentColor",
          className: I.icon
        }) : (0, i.jsx)(s.fpf, {
          size: "xs",
          color: "currentColor",
          className: I.icon
        })
      })
    }), (0, i.jsx)(s.hzk, {
      "data-migration-pending": true,
      className: I.body,
      children: (0, i.jsxs)("div", {
        className: I.textContainer,
        children: [(0, i.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: p.intl.string(p.t.L4ifkZ)
        }), (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: p.intl.string(p.t.R8LCMZ)
        })]
      })
    }), (0, i.jsx)(s.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsx)("div", {
        className: I.buttonContainer,
        children: (0, i.jsx)(s.Button, {
          variant: "primary",
          text: p.intl.string(p.t["8eKkaf"]),
          fullWidth: true,
          onClick: () => {
            n(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, {
              action: d.G.BACK_TO_CONVERSATION
            })
          }
        })
      })
    })]
  })
}
let m = t => {
  let {
    onClose: n,
    transitionState: e
  } = t;
  return (0, i.jsx)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: e,
    parentComponent: "VibingWumpusModal",
    children: (0, i.jsx)(x, {
      onClose: n
    })
  })
}