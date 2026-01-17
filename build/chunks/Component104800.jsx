/** Chunk was on 75909 **/
/** chunk id: 104800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk228488 = require("./228488.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk937797 = require("./937797.js"),
  Chunk475595 = require("./475595.js"),
  Chunk304696 = require("./304696.js"),
  Chunk602667 = require("./602667.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk874010 = require("./874010.jsx"),
  Chunk684245 = require("./684245.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209668 = require("./209668.js");

function x(e) {
  let {
    quest: t,
    sourceQuestContent: n
  } = e, l = o.useMemo(() => (0, v.fh)(t, v.eC.VIDEO_PLAYER_THUMBNAIL, true, false), [t]);
  return null == l ? null : (0, r.jsx)(E.A, {
    questOrQuests: t,
    questContent: m.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: n,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: l.url,
      alt: "Video thumbnail",
      className: _.stillFrameImageCard
    })
  })
}

function y(e) {
  let {
    title: t,
    subtitle: n,
    icon: l,
    onClick: s,
    className: c
  } = e, [u, d] = o.useState(false), m = () => {
    d(true)
  }, f = () => {
    d(false)
  };
  return (0, r.jsx)(a.P3F, {
    className: i()(_.endScreenPanel, _.accentOnHover, c),
    onMouseEnter: m,
    onMouseLeave: f,
    onFocus: m,
    onBlur: f,
    onClick: s,
    children: (0, r.jsxs)("div", {
      className: _.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: _.endScreenPanelTextCont,
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          className: _.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(a.X6q, {
          variant: "heading-sm/normal",
          className: _.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(C.Z, {
        color: "#747783"
      }), (0, r.jsx)(l, {
        size: "md",
        color: u ? "#FFFFFF" : "#B5BAC1",
        className: _.endScreenIcon
      })]
    })
  })
}

function j(e) {
  let {
    asset: t
  } = e;
  return null == t ? null : (0, r.jsx)("img", {
    src: t.url,
    alt: "",
    className: _.endScreenImageBackground
  })
}

function P(e) {
  let {
    quest: t,
    asset: n,
    sourceQuestContent: o,
    orientation: l
  } = e;
  return null == n ? null : (0, r.jsx)(E.A, {
    questOrQuests: t,
    questContent: m.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: o,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: n.url,
      alt: "Video thumbnail",
      className: i()(_.endScreenCard, {
        [_.endScreenCardPortrait]: "portrait" === l
      })
    })
  })
}

function D(e) {
  let {
    ctaBtnLabel: t,
    title: n,
    subtitle: o,
    onCTAClick: l,
    orientation: s
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(_.endScreenCtaContainer, {
      [_.endScreenCtaContainerPortrait]: "portrait" === s
    }),
    children: [(0, r.jsx)(T, {
      title: n,
      subtitle: o
    }), (0, r.jsx)(I, {
      label: t,
      icon: a.d4D,
      onClick: l
    })]
  })
}

function T(e) {
  let {
    title: t,
    subtitle: n
  } = e;
  return (0, r.jsxs)("div", {
    className: _.endScreenCtaTitleContainer,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-md/semibold",
      className: _.endScreenCtaTitle,
      children: t
    }), (0, r.jsx)(a.X6q, {
      variant: "heading-sm/normal",
      className: _.endScreenCtaSubtitle,
      children: n
    })]
  })
}

function I(e) {
  let {
    label: t,
    icon: n,
    onClick: l,
    className: c
  } = e, [u, d] = o.useState(false), m = () => {
    d(true)
  }, f = () => {
    d(false)
  };
  return (0, r.jsxs)(a.P3F, {
    className: i()(_.endScreenCtaBtn, _.accentOnHover, c),
    onMouseEnter: m,
    onMouseLeave: f,
    onFocus: m,
    onBlur: f,
    onClick: l,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-md/semibold",
      className: _.endScreenCtaBtnTitle,
      children: t
    }), (0, r.jsx)(n, {
      size: "md",
      color: u ? s.Z.colors.WHITE : "#B5BAC1",
      className: _.endScreenIcon
    })]
  })
}

function N(e) {
  var t;
  let {
    videoRef: n,
    onExitFullScreen: l,
    onTrackQuestVideoFullscreenChanged: s,
    onTrackQuestContentClick: E,
    orientation: C
  } = e, {
    onClose: T,
    sourceQuestContent: I,
    quest: N
  } = o.useContext(h.VideoQuestModalContext), w = (0, f.ZP)(e => e.fullScreenEnabled), k = (0, f.ZP)(e => e.setFullScreenEnabled), A = (0, d.aM)(), M = (0, b.e)({
    quest: N,
    onClose: T,
    sourceQuestContent: I,
    impressionId: A
  }), R = o.useCallback(e => {
    if (w) {
      var t;
      let e = (0, c.fn)(null == (t = n.current) ? true : t.parentNode, n.current);
      null != e && (e.removeEventListener(c.NO, l), (0, c.Pr)(e), k(false), s(false))
    }
    E(e, u.jZ.LEARN_MORE), M(e, u.jZ.OPEN_GAME_LINK)
  }, [w, n, l, k, s, M, E]), {
    title: L,
    subtitle: V
  } = {
    title: (0, g.V_)(N),
    subtitle: null != (t = N.config.ctaConfig.subtitle) ? t : O.intl.string(O.t.mxaHfx)
  }, {
    enabled: Z
  } = p.VG.useConfig({
    location: S.dr.VIDEO_MODAL
  }), F = o.useMemo(() => (0, v.fh)(N, v.eC.VIDEO_PLAYER_THUMBNAIL, true, false), [N]);
  return Z ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j, {
      asset: F
    }), (0, r.jsx)("div", {
      className: _.endScreenOverlay
    }), (0, r.jsxs)("div", {
      className: i()(_.endScreenContainer, {
        [_.endScreenContainerPortrait]: "portrait" === C
      }),
      children: [(0, r.jsx)(P, {
        quest: N,
        asset: F,
        sourceQuestContent: I,
        orientation: C
      }), (0, r.jsx)(D, {
        title: L,
        subtitle: V,
        ctaBtnLabel: N.config.ctaConfig.buttonLabel,
        onCTAClick: () => R(m.jn.VIDEO_MODAL),
        orientation: C
      })]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(x, {
      quest: N,
      sourceQuestContent: I
    }), (0, r.jsx)("div", {
      className: _.videoContOverlay
    }), (0, r.jsx)(y, {
      title: L,
      subtitle: V,
      icon: a.d4D,
      className: _.endScreenPanelRight,
      onClick: () => R(m.jn.VIDEO_MODAL)
    })]
  })
}