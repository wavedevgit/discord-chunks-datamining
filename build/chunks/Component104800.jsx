/** Chunk was on 75909 **/
/** chunk id: 104800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk228488 = require("./228488.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk475595 = require("./475595.js"),
  Chunk304696 = require("./304696.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk215113 = require("./215113.jsx"),
  Chunk874010 = require("./874010.jsx"),
  Chunk684245 = require("./684245.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk273339 = require("./273339.js");

function C(e) {
  let {
    quest: t,
    sourceQuestContent: n
  } = e, l = o.useMemo(() => (0, f.fh)(t, f.eC.VIDEO_PLAYER_THUMBNAIL, true, false), [t]);
  return null == l ? null : (0, r.jsx)(v.A, {
    questOrQuests: t,
    questContent: d.jn.VIDEO_MODAL_END_CARD,
    sourceQuestContent: n,
    children: e => (0, r.jsx)("img", {
      ref: t => {
        e.current = t
      },
      src: l.url,
      alt: "Video thumbnail",
      className: b.stillFrameImageCard
    })
  })
}

function S(e) {
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
    className: i()(b.endScreenPanel, b.accentOnHover, c),
    onMouseEnter: m,
    onMouseLeave: f,
    onFocus: m,
    onBlur: f,
    onClick: s,
    children: (0, r.jsxs)("div", {
      className: b.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: b.endScreenPanelTextCont,
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          className: b.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(a.X6q, {
          variant: "heading-sm/normal",
          className: b.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(g.Z, {
        color: "#747783"
      }), (0, r.jsx)(l, {
        size: "md",
        color: u ? "#FFFFFF" : "#B5BAC1",
        className: b.endScreenIcon
      })]
    })
  })
}

function _(e) {
  var t;
  let {
    videoRef: n,
    onExitFullScreen: l,
    onTrackQuestVideoFullscreenChanged: i,
    onTrackQuestContentClick: f
  } = e, {
    onClose: v,
    sourceQuestContent: g,
    quest: _
  } = o.useContext(E.VideoQuestModalContext), y = (0, m.ZP)(e => e.fullScreenEnabled), x = (0, m.ZP)(e => e.setFullScreenEnabled), j = (0, u.aM)(), P = (0, O.e)({
    quest: _,
    onClose: v,
    sourceQuestContent: g,
    impressionId: j
  }), D = o.useCallback(e => {
    if (y) {
      var t;
      let e = (0, s.fn)(null == (t = n.current) ? true : t.parentNode, n.current);
      null != e && (e.removeEventListener(s.NO, l), (0, s.Pr)(e), x(false), i(false))
    }
    f(e, c.jZ.LEARN_MORE), P(e, c.jZ.OPEN_GAME_LINK)
  }, [y, n, l, x, i, P, f]), {
    title: R,
    subtitle: T
  } = {
    title: (0, p.V_)(_),
    subtitle: null != (t = _.config.ctaConfig.subtitle) ? t : h.intl.string(h.t.mxaHfx)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C, {
      quest: _,
      sourceQuestContent: g
    }), (0, r.jsx)("div", {
      className: b.videoContOverlay
    }), (0, r.jsx)(S, {
      title: R,
      subtitle: T,
      icon: a.d4D,
      className: b.endScreenPanelRight,
      onClick: () => D(d.jn.VIDEO_MODAL)
    })]
  })
}