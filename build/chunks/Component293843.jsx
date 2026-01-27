/** Chunk was on 20941 **/
/** chunk id: 293843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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
let P = 1e3 + Chunk476648.f;

function w(e) {
  let {
    onNextStep: t
  } = e, n = (0, c.bG)([h.A], () => h.A.getFetchState() === h.$.ERROR || null == h.A.getCheckpointData().messages), [a, w] = l.useState(true), T = l.useRef(null), R = l.useContext(p.P), L = (0, u.rdh)(R.primaryColor).hex(), D = (0, c.bG)([m.A], () => m.A.useReducedMotion), k = l.useCallback(e => {
    e.currentTarget.currentTime >= 2.8 && w(false)
  }, []), M = (0, u.zhh)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    pause: a,
    delay: P
  }), H = (0, u.zhh)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    pause: a
  });
  l.useEffect(() => {
    null != T.current && (T.current.playbackRate = 2)
  }, []), l.useEffect(() => {
    if (D) {
      null != T.current && (T.current.currentTime = .2);
      let e = setTimeout(() => {
        w(false)
      }, 1e3);
      return () => clearTimeout(e)
    }
  }, [D]);
  let U = () => {
    (0, d.A)(f.A.getArticleURL(A.MVz.CHECKPOINT))
  };
  return n ? (0, r.jsxs)(y.A, {
    className: S.Ur,
    children: [(0, r.jsx)(o.A, {
      autoPlay: !D,
      muted: true,
      playsInline: true,
      loop: true,
      className: S.CT,
      children: (0, r.jsx)("source", {
        src: I.A,
        type: "video/webm"
      })
    }), (0, r.jsx)(v.A, {
      variant: "display-lg",
      className: S.Vy,
      children: E.intl.string(O.default.kimsIr)
    }), (0, r.jsx)(v.A, {
      variant: "heading-xl/medium",
      className: S.VA,
      children: E.intl.format(O.default.GNHD4i, {
        learnMoreHook: (e, t) => (0, r.jsx)(u.DUT, {
          onClick: U,
          className: S.C2,
          children: (0, r.jsx)(v.A, {
            variant: "heading-xl/medium",
            className: S.nf,
            children: e
          })
        }, t)
      })
    }), (0, r.jsx)(v.A, {
      variant: "text-lg/medium",
      children: E.intl.string(O.default["xLI+Hj"])
    }), (0, r.jsx)(g.A, {
      className: S.Hk,
      textSize: 20
    })]
  }) : (0, r.jsxs)(y.A, {
    className: S.Qs,
    noPadding: true,
    children: [!a && (0, r.jsx)(v.A, {
      variant: "text-lg/medium",
      className: S.ed,
      children: E.intl.format(O.default["1jPMeG"], {
        learnMoreHook: (e, t) => (0, r.jsx)(u.DUT, {
          onClick: U,
          className: S.C2,
          children: (0, r.jsx)(v.A, {
            variant: "text-lg/medium",
            className: S.nf,
            children: e
          })
        }, t)
      })
    }), !a && (0, r.jsx)(v.A, {
      variant: "text-md/medium",
      className: S.al,
      children: E.intl.format(O.default.g476ZL, {
        name: "Exyl"
      })
    }), a ? null : (0, r.jsx)(s.animated.div, {
      style: H,
      children: (0, r.jsx)(o.A, {
        autoPlay: !D,
        muted: true,
        playsInline: true,
        loop: true,
        className: S.RS,
        children: (0, r.jsx)("source", {
          src: I.A,
          type: "video/webm"
        })
      })
    }), (0, r.jsx)(o.A, {
      ref: T,
      autoPlay: !D,
      muted: true,
      playsInline: true,
      className: i()(S.GW, {
        [S.e8]: !a
      }),
      onTimeUpdate: a ? k : true,
      children: (0, r.jsx)("source", {
        src: N.A,
        type: "video/webm"
      })
    }), a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(C.A, {
        variant: "display-lg",
        className: S.DD,
        textClassName: S.Qq,
        text: E.intl.string(O.default["CdU/PF"]),
        delay: 500
      }), (0, r.jsx)(C.A, {
        variant: "text-lg/medium",
        className: S.cz,
        textClassName: S.Qq,
        text: E.intl.string(O.default["M/LvW0"]),
        delay: 500 + C.f
      })]
    }), a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(s.animated.div, {
        style: M,
        children: [(0, r.jsx)(x.A, {
          className: S.CB,
          slide: _.P7.WELCOME
        }), (0, r.jsxs)(b.A, {
          contentClassName: S.a0,
          onClick: t,
          "aria-label": E.intl.string(E.t.I0v0Qv),
          muteSound: true,
          children: [(0, r.jsx)(u.udU, {
            colorClass: S.d7,
            color: L,
            size: "md"
          }), E.intl.string(E.t.I0v0Qv)]
        })]
      }), (0, r.jsx)(s.animated.div, {
        style: H,
        children: (0, r.jsx)(j.A, {
          className: S.Lv,
          style: {
            color: L
          }
        })
      })]
    })]
  })
}