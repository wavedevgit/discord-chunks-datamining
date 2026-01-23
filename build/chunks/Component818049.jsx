/** Chunk was on 23628 **/
/** chunk id: 818049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk475815 = require("./475815.js"),
  Chunk341915 = require("./341915.js"),
  Chunk405670 = require("./405670.js"),
  Chunk245853 = require("./245853.js"),
  Chunk579473 = require("./579473.js"),
  Chunk590202 = require("./590202.js"),
  Chunk971649 = require("./971649.js"),
  Chunk651892 = require("./651892.js"),
  Chunk73473 = require("./73473.js"),
  Chunk717415 = require("./717415.jsx"),
  Chunk98197 = require("./98197.jsx"),
  Chunk583235 = require("./583235.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438655 = require("./438655.js");

function C(e) {
  let {
    quest: t,
    sourceQuestContent: n
  } = e, o = l.useMemo(() => (0, m.tW)(t, m.fY.VIDEO_PLAYER_THUMBNAIL, true, false), [t]);
  return null == o ? null : (0, r.jsx)(g.R, {
    questOrQuests: t,
    questContent: u.uF.VIDEO_MODAL_END_CARD,
    sourceQuestContent: n,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: o.url,
      alt: "Video thumbnail",
      className: _.xc
    })
  })
}

function x(e) {
  let {
    title: t,
    subtitle: n,
    icon: o,
    onClick: a,
    className: c
  } = e, [u, d] = l.useState(false), f = () => {
    d(true)
  }, m = () => {
    d(false)
  };
  return (0, r.jsx)(s.DUT, {
    className: i()(_.Mr, _.iM, c),
    onMouseEnter: f,
    onMouseLeave: m,
    onFocus: f,
    onBlur: m,
    onClick: a,
    children: (0, r.jsxs)("div", {
      className: _.ee,
      children: [(0, r.jsxs)("div", {
        className: _.XU,
        children: [(0, r.jsx)(s.DZT, {
          variant: "heading-md/semibold",
          className: _.Zr,
          children: t
        }), (0, r.jsx)(s.DZT, {
          variant: "heading-sm/normal",
          className: _.Hk,
          children: n
        })]
      }), (0, r.jsx)(b.A, {
        color: "#747783"
      }), (0, r.jsx)(o, {
        size: "md",
        color: u ? "#FFFFFF" : "#B5BAC1",
        className: _.J5
      })]
    })
  })
}

function A(e) {
  let {
    asset: t
  } = e;
  return null == t ? null : (0, r.jsx)("img", {
    src: t.url,
    alt: "",
    className: _.bU
  })
}

function j(e) {
  let {
    quest: t,
    asset: n,
    sourceQuestContent: l,
    orientation: o
  } = e;
  return null == n ? null : (0, r.jsx)(g.R, {
    questOrQuests: t,
    questContent: u.uF.VIDEO_MODAL_END_CARD,
    sourceQuestContent: l,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: n.url,
      alt: "Video thumbnail",
      className: i()(_.C, {
        [_.TW]: "portrait" === o
      })
    })
  })
}

function T(e) {
  let {
    ctaBtnLabel: t,
    title: n,
    subtitle: l,
    onCTAClick: o,
    orientation: a
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(_.pP, {
      [_.iC]: "portrait" === a
    }),
    children: [(0, r.jsx)(D, {
      title: n,
      subtitle: l
    }), (0, r.jsx)(w, {
      label: t,
      icon: s.KS6,
      onClick: o
    })]
  })
}

function D(e) {
  let {
    title: t,
    subtitle: n
  } = e;
  return (0, r.jsxs)("div", {
    className: _.PH,
    children: [(0, r.jsx)(s.DZT, {
      variant: "heading-md/semibold",
      className: _.m5,
      children: t
    }), (0, r.jsx)(s.DZT, {
      variant: "heading-sm/normal",
      className: _.s$,
      children: n
    })]
  })
}

function w(e) {
  let {
    label: t,
    icon: n,
    onClick: o,
    className: c
  } = e, [u, d] = l.useState(false), f = () => {
    d(true)
  }, m = () => {
    d(false)
  };
  return (0, r.jsxs)(s.DUT, {
    className: i()(_.uU, _.iM, c),
    onMouseEnter: f,
    onMouseLeave: m,
    onFocus: f,
    onBlur: m,
    onClick: o,
    children: [(0, r.jsx)(s.DZT, {
      variant: "heading-md/semibold",
      className: _.ce,
      children: t
    }), (0, r.jsx)(n, {
      size: "md",
      color: u ? a.A.colors.WHITE : "#B5BAC1",
      className: _.J5
    })]
  })
}

function N(e) {
  var t;
  let {
    videoRef: n,
    onExitFullScreen: o,
    onTrackQuestVideoFullscreenChanged: a,
    onTrackQuestContentClick: g,
    orientation: b
  } = e, {
    onClose: D,
    sourceQuestContent: w,
    quest: N
  } = l.useContext(h.VideoQuestModalContext), P = (0, d.Ay)(e => e.fullScreenEnabled), I = (0, d.Ay)(e => e.setFullScreenEnabled), L = (0, v.go)(), R = (0, y.H)({
    quest: N,
    onClose: D,
    sourceQuestContent: w,
    impressionId: L
  }), k = l.useCallback(e => {
    if (P) {
      var t;
      let e = (0, c.qf)(null == (t = n.current) ? true : t.parentNode, n.current);
      null != e && (e.removeEventListener(c.Wb, o), (0, c.sP)(e), I(false), a(false))
    }
    g(e, p.Cy.LEARN_MORE), R(e, p.Cy.OPEN_GAME_LINK)
  }, [P, n, o, I, a, R, g]), {
    title: M,
    subtitle: V
  } = {
    title: (0, E.wr)(N),
    subtitle: null != (t = N.config.ctaConfig.subtitle) ? t : S.intl.string(S.t.mxaHfx)
  }, {
    enabled: Q
  } = f.uK.useConfig({
    location: O.rE.VIDEO_MODAL
  }), U = l.useMemo(() => (0, m.tW)(N, m.fY.VIDEO_PLAYER_THUMBNAIL, true, false), [N]);
  return Q ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A, {
      asset: U
    }), (0, r.jsx)("div", {
      className: _.MM
    }), (0, r.jsxs)("div", {
      className: i()(_.Pb, {
        [_.II]: "portrait" === b
      }),
      children: [(0, r.jsx)(j, {
        quest: N,
        asset: U,
        sourceQuestContent: w,
        orientation: b
      }), (0, r.jsx)(T, {
        title: M,
        subtitle: V,
        ctaBtnLabel: N.config.ctaConfig.buttonLabel,
        onCTAClick: () => k(u.uF.VIDEO_MODAL),
        orientation: b
      })]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C, {
      quest: N,
      sourceQuestContent: w
    }), (0, r.jsx)("div", {
      className: _.MT
    }), (0, r.jsx)(x, {
      title: M,
      subtitle: V,
      icon: s.KS6,
      className: _.mT,
      onClick: () => k(u.uF.VIDEO_MODAL)
    })]
  })
}