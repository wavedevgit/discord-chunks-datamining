/** Chunk was on web.js **/
/** chunk id: 293843, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk299619 = require("./299619.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk775602 = require("./775602.js"),
  Chunk975571 = require("./975571.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk612082 = require("./612082.jsx"),
  Chunk46192 = require("./46192.jsx"),
  Chunk155286 = require("./155286.jsx"),
  Chunk573138 = require("./573138.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk184047 = require("./184047.jsx"),
  Chunk476648 = require("./476648.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk652215 = require("./652215.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk822563 = require("./822563.js"),
  Chunk447515 = require("./447515.js"),
  Chunk844636 = require("./844636.js");
let w = 2.8,
  P = 2,
  D = 1e3,
  x = 500,
  L = 1e3 + Chunk476648.f;

function j(e) {
  let {
    onNextStep: t
  } = e, n = (0, c.bG)([h.A], () => h.A.getFetchState() === h.$.ERROR || null == h.A.getCheckpointData().messages), [a, j] = i.useState(true), M = i.useRef(null), k = i.useContext(_.P), U = (0, u.rdh)(k.primaryColor).hex(), G = (0, c.bG)([f.A], () => f.A.useReducedMotion), V = i.useCallback(e => {
    e.currentTarget.currentTime >= w && j(false)
  }, []), F = (0, u.zhh)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    pause: a,
    delay: L
  }), B = (0, u.zhh)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    pause: a
  });
  i.useEffect(() => {
    null != M.current && (M.current.playbackRate = P)
  }, []), i.useEffect(() => {
    if (G) {
      null != M.current && (M.current.currentTime = .2);
      let e = setTimeout(() => {
        j(false)
      }, D);
      return () => clearTimeout(e)
    }
  }, [G]);
  let H = () => {
    (0, d.A)(p.A.getArticleURL(S.MVz.CHECKPOINT))
  };
  return n ? (0, r.jsxs)(b.A, {
    className: C.Ur,
    children: [(0, r.jsx)(l.A, {
      autoPlay: !G,
      muted: true,
      playsInline: true,
      loop: true,
      className: C.CT,
      children: (0, r.jsx)("source", {
        src: R.A,
        type: "video/webm"
      })
    }), (0, r.jsx)(y.A, {
      variant: "display-lg",
      className: C.Vy,
      children: T.intl.string(I.default.kimsIr)
    }), (0, r.jsx)(y.A, {
      variant: "heading-xl/medium",
      className: C.VA,
      children: T.intl.format(I.default.GNHD4i, {
        learnMoreHook: (e, t) => (0, r.jsx)(u.DUT, {
          onClick: H,
          className: C.C2,
          children: (0, r.jsx)(y.A, {
            variant: "heading-xl/medium",
            className: C.nf,
            children: e
          })
        }, t)
      })
    }), (0, r.jsx)(y.A, {
      variant: "text-lg/medium",
      children: T.intl.string(I.default["xLI+Hj"])
    }), (0, r.jsx)(g.A, {
      className: C.Hk,
      textSize: 20
    })]
  }) : (0, r.jsxs)(b.A, {
    className: C.Qs,
    noPadding: true,
    children: [!a && (0, r.jsx)(y.A, {
      variant: "text-lg/medium",
      className: C.ed,
      children: T.intl.format(I.default["1jPMeG"], {
        learnMoreHook: (e, t) => (0, r.jsx)(u.DUT, {
          onClick: H,
          className: C.C2,
          children: (0, r.jsx)(y.A, {
            variant: "text-lg/medium",
            className: C.nf,
            children: e
          })
        }, t)
      })
    }), !a && (0, r.jsx)(y.A, {
      variant: "text-md/medium",
      className: C.al,
      children: T.intl.format(I.default.g476ZL, {
        name: "Exyl"
      })
    }), a ? null : (0, r.jsx)(o.animated.div, {
      style: B,
      children: (0, r.jsx)(l.A, {
        autoPlay: !G,
        muted: true,
        playsInline: true,
        loop: true,
        className: C.RS,
        children: (0, r.jsx)("source", {
          src: R.A,
          type: "video/webm"
        })
      })
    }), (0, r.jsx)(l.A, {
      ref: M,
      autoPlay: !G,
      muted: true,
      playsInline: true,
      className: s()(C.GW, {
        [C.e8]: !a
      }),
      onTimeUpdate: a ? V : true,
      children: (0, r.jsx)("source", {
        src: N.A,
        type: "video/webm"
      })
    }), a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(A.A, {
        variant: "display-lg",
        className: C.DD,
        textClassName: C.Qq,
        text: T.intl.string(I.default["CdU/PF"]),
        delay: x
      }), (0, r.jsx)(A.A, {
        variant: "text-lg/medium",
        className: C.cz,
        textClassName: C.Qq,
        text: T.intl.string(I.default["M/LvW0"]),
        delay: x + A.f
      })]
    }), a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(o.animated.div, {
        style: F,
        children: [(0, r.jsx)(E.A, {
          className: C.CB,
          slide: v.P7.WELCOME
        }), (0, r.jsxs)(m.A, {
          contentClassName: C.a0,
          onClick: t,
          "aria-label": T.intl.string(T.t.I0v0Qv),
          muteSound: true,
          children: [(0, r.jsx)(u.udU, {
            colorClass: C.d7,
            color: U,
            size: "md"
          }), T.intl.string(T.t.I0v0Qv)]
        })]
      }), (0, r.jsx)(o.animated.div, {
        style: B,
        children: (0, r.jsx)(O.A, {
          className: C.Lv,
          style: {
            color: U
          }
        })
      })]
    })]
  })
}