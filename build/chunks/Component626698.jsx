/** Chunk was on web.js **/
/** chunk id: 626698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk92951 = require("./92951.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk607070 = require("./607070.js"),
  Chunk63063 = require("./63063.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk639949 = require("./639949.jsx"),
  Chunk829468 = require("./829468.jsx"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk549542 = require("./549542.jsx"),
  Chunk935212 = require("./935212.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk860076 = require("./860076.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk296953 = require("./296953.js"),
  Chunk550770 = require("./550770.js"),
  Chunk807808 = require("./807808.js");
let R = 2.8,
  D = 2,
  w = 1e3,
  x = 500,
  L = 1e3 + Chunk935212.t;

function j(e) {
  let {
    onNextStep: t
  } = e, n = (0, c.e7)([m.Z], () => m.Z.getFetchState() === m.p.ERROR || null == m.Z.getCheckpointData().messages), [a, j] = i.useState(true), M = i.useRef(null), k = i.useContext(_.Q), U = (0, u.dQu)(k.primaryColor).hex(), G = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), Z = i.useCallback(e => {
    e.currentTarget.currentTime >= R && j(false)
  }, []), B = (0, u.q_F)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    pause: a,
    delay: L
  }), F = (0, u.q_F)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    pause: a
  });
  i.useEffect(() => {
    null != M.current && (M.current.playbackRate = D)
  }, []), i.useEffect(() => {
    if (G) {
      null != M.current && (M.current.currentTime = .2);
      let e = setTimeout(() => {
        j(false)
      }, w);
      return () => clearTimeout(e)
    }
  }, [G]);
  let V = () => {
    (0, d.Z)(p.Z.getArticleURL(I.BhN.CHECKPOINT))
  };
  return n ? (0, r.jsxs)(b.Z, {
    className: C.unavailableContainer,
    children: [(0, r.jsx)(l.Z, {
      autoPlay: !G,
      muted: true,
      playsInline: true,
      loop: true,
      className: C.unavailableLogo,
      children: (0, r.jsx)("source", {
        src: P.Z,
        type: "video/webm"
      })
    }), (0, r.jsx)(y.Z, {
      variant: "display-lg",
      className: C.display,
      children: A.intl.string(T.default.kimsIr)
    }), (0, r.jsx)(y.Z, {
      variant: "heading-xl/medium",
      className: C.subtitle,
      children: A.intl.format(T.default.GNHD4i, {
        learnMoreHook: (e, t) => (0, r.jsx)(u.P3F, {
          onClick: V,
          className: C.learnMore,
          children: (0, r.jsx)(y.Z, {
            variant: "heading-xl/medium",
            className: C.link,
            children: e
          })
        }, t)
      })
    }), (0, r.jsx)(y.Z, {
      variant: "text-lg/medium",
      children: A.intl.string(T.default["xLI+Hj"])
    }), (0, r.jsx)(g.Z, {
      className: C.claimButton,
      textSize: 20
    })]
  }) : (0, r.jsxs)(b.Z, {
    className: C.content,
    noPadding: true,
    children: [!a && (0, r.jsx)(y.Z, {
      variant: "text-lg/medium",
      className: C.disclaimer,
      children: A.intl.format(T.default["1jPMeG"], {
        learnMoreHook: (e, t) => (0, r.jsx)(u.P3F, {
          onClick: V,
          className: C.learnMore,
          children: (0, r.jsx)(y.Z, {
            variant: "text-lg/medium",
            className: C.link,
            children: e
          })
        }, t)
      })
    }), !a && (0, r.jsx)(y.Z, {
      variant: "text-md/medium",
      className: C.attribution,
      children: A.intl.format(T.default.g476ZL, {
        name: "Exyl"
      })
    }), a ? null : (0, r.jsx)(s.animated.div, {
      style: F,
      children: (0, r.jsx)(l.Z, {
        autoPlay: !G,
        muted: true,
        playsInline: true,
        loop: true,
        className: C.logoVideo,
        children: (0, r.jsx)("source", {
          src: P.Z,
          type: "video/webm"
        })
      })
    }), (0, r.jsx)(l.Z, {
      ref: M,
      autoPlay: !G,
      muted: true,
      playsInline: true,
      className: o()(C.introVideo, {
        [C.introVideoHidden]: !a
      }),
      onTimeUpdate: a ? Z : true,
      children: (0, r.jsx)("source", {
        src: N.Z,
        type: "video/webm"
      })
    }), a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(v.Z, {
        variant: "display-lg",
        className: C.title,
        textClassName: C.text,
        text: A.intl.string(T.default["CdU/PF"]),
        delay: x
      }), (0, r.jsx)(v.Z, {
        variant: "text-lg/medium",
        className: C.subtitleAnimated,
        textClassName: C.text,
        text: A.intl.string(T.default["M/LvW0"]),
        delay: x + v.t
      })]
    }), a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(s.animated.div, {
        style: B,
        children: [(0, r.jsx)(E.Z, {
          className: C.knickKnacks,
          slide: S.yD.WELCOME
        }), (0, r.jsxs)(h.Z, {
          contentClassName: C.startButtonContent,
          onClick: t,
          "aria-label": A.intl.string(A.t.I0v0Qv),
          muteSound: true,
          children: [(0, r.jsx)(u.o1U, {
            colorClass: C.iconColor,
            color: U,
            size: "md"
          }), A.intl.string(A.t.I0v0Qv)]
        })]
      }), (0, r.jsx)(s.animated.div, {
        style: F,
        children: (0, r.jsx)(O.Z, {
          className: C.ratingIcon,
          style: {
            color: U
          }
        })
      })]
    })]
  })
}