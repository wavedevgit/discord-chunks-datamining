/** Chunk was on web.js **/
/** chunk id: 626698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
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
  Chunk100527 = require("./100527.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk580130 = require("./580130.js"),
  Chunk63063 = require("./63063.js"),
  Chunk515970 = require("./515970.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk639949 = require("./639949.jsx"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk549542 = require("./549542.jsx"),
  Chunk935212 = require("./935212.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk296953 = require("./296953.js"),
  Chunk550770 = require("./550770.js"),
  Chunk807808 = require("./807808.js");
let L = 2.8,
  j = 2,
  M = 1e3,
  k = 500,
  U = 1e3 + Chunk935212.t;

function G(e) {
  let {
    onNextStep: t
  } = e, n = (0, c.e7)([y.Z], () => y.Z.getFetchState() === y.p.ERROR || null == y.Z.getCheckpointData().messages), [a, G] = i.useState(true), Z = i.useRef(null), B = i.useContext(b.Q), F = (0, u.dQu)(B.primaryColor).hex(), V = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), H = (0, c.e7)([m.default], () => m.default.getCurrentUser()), {
    avatarDecoration: Y
  } = (0, c.e7)([y.Z], () => y.Z.getCheckpointData()), W = (0, c.Wu)([h.Z], () => {
    if ((null == Y ? true : Y.skuId) == null) return [];
    let e = h.Z.getForSku(null == Y ? true : Y.skuId);
    return null != e ? [...e] : []
  })[0], K = null != W, z = i.useRef(false);
  i.useEffect(() => {
    null != W && null != H && z.current && n && (0, _.ps)({
      analyticsLocations: [p.Z.CHECKPOINT],
      initialSelectedDecoration: Y
    })
  }, [W, H, Y, n]);
  let q = i.useCallback(e => {
      e.currentTarget.currentTime >= L && G(false)
    }, []),
    Q = (0, u.q_F)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      pause: a,
      delay: U
    }),
    X = (0, u.q_F)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      pause: a
    });
  i.useEffect(() => {
    null != Z.current && (Z.current.playbackRate = j)
  }, []), i.useEffect(() => {
    if (V) {
      null != Z.current && (Z.current.currentTime = .2);
      let e = setTimeout(() => {
        G(false)
      }, M);
      return () => clearTimeout(e)
    }
  }, [V]);
  let J = () => {
      (0, d.Z)(g.Z.getArticleURL(N.BhN.CHECKPOINT))
    },
    $ = () => {
      K || (z.current = true, (0, E._Z)())
    };
  return n ? (0, r.jsxs)(S.Z, {
    className: w.unavailableContainer,
    children: [(0, r.jsx)(l.Z, {
      autoPlay: !V,
      muted: true,
      playsInline: true,
      loop: true,
      className: w.unavailableLogo,
      children: (0, r.jsx)("source", {
        src: x.Z,
        type: "video/webm"
      })
    }), (0, r.jsx)(I.Z, {
      variant: "display-lg",
      className: w.display,
      children: R.intl.string(P.default.kimsIr)
    }), (0, r.jsx)(I.Z, {
      variant: "heading-xl/medium",
      className: w.subtitle,
      children: R.intl.format(P.default.GNHD4i, {
        learnMoreHook: (e, t) => (0, r.jsx)(u.P3F, {
          onClick: J,
          className: w.learnMore,
          children: (0, r.jsx)(I.Z, {
            variant: "heading-xl/medium",
            className: w.link,
            children: e
          })
        }, t)
      })
    }), (0, r.jsx)(I.Z, {
      variant: "text-lg/medium",
      children: R.intl.string(P.default["xLI+Hj"])
    }), (0, r.jsx)(O.Z, {
      disabled: K,
      onClick: $,
      className: w.claimButton,
      children: (0, r.jsx)(I.Z, {
        variant: "eyebrow",
        className: w.buttonCTA,
        children: K ? R.intl.string(R.t.lIsIFo) : R.intl.string(P.default.mDxM7m)
      })
    })]
  }) : (0, r.jsxs)(S.Z, {
    className: w.content,
    noPadding: true,
    children: [!a && (0, r.jsx)(I.Z, {
      variant: "text-lg/medium",
      className: w.disclaimer,
      children: R.intl.format(P.default["1jPMeG"], {
        learnMoreHook: (e, t) => (0, r.jsx)(u.P3F, {
          onClick: J,
          className: w.learnMore,
          children: (0, r.jsx)(I.Z, {
            variant: "text-lg/medium",
            className: w.link,
            children: e
          })
        }, t)
      })
    }), !a && (0, r.jsx)(I.Z, {
      variant: "text-md/medium",
      className: w.attribution,
      children: R.intl.format(P.default.g476ZL, {
        name: "Exyl"
      })
    }), a ? null : (0, r.jsx)(s.animated.div, {
      style: X,
      children: (0, r.jsx)(l.Z, {
        autoPlay: !V,
        muted: true,
        playsInline: true,
        loop: true,
        className: w.logoVideo,
        children: (0, r.jsx)("source", {
          src: x.Z,
          type: "video/webm"
        })
      })
    }), (0, r.jsx)(l.Z, {
      ref: Z,
      autoPlay: !V,
      muted: true,
      playsInline: true,
      className: o()(w.introVideo, {
        [w.introVideoHidden]: !a
      }),
      onTimeUpdate: a ? q : true,
      children: (0, r.jsx)("source", {
        src: D.Z,
        type: "video/webm"
      })
    }), a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(A.Z, {
        variant: "display-lg",
        className: w.title,
        textClassName: w.text,
        text: R.intl.string(P.default["CdU/PF"]),
        delay: k
      }), (0, r.jsx)(A.Z, {
        variant: "text-lg/medium",
        className: w.subtitleAnimated,
        textClassName: w.text,
        text: R.intl.string(P.default["M/LvW0"]),
        delay: k + A.t
      })]
    }), a ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(s.animated.div, {
        style: Q,
        children: [(0, r.jsx)(v.Z, {
          className: w.knickKnacks,
          slide: C.yD.WELCOME
        }), (0, r.jsxs)(O.Z, {
          contentClassName: w.startButtonContent,
          onClick: t,
          "aria-label": R.intl.string(R.t.I0v0Qv),
          muteSound: true,
          children: [(0, r.jsx)(u.o1U, {
            colorClass: w.iconColor,
            color: F,
            size: "md"
          }), R.intl.string(R.t.I0v0Qv)]
        })]
      }), (0, r.jsx)(s.animated.div, {
        style: X,
        children: (0, r.jsx)(T.Z, {
          className: w.ratingIcon,
          style: {
            color: F
          }
        })
      })]
    })]
  })
}