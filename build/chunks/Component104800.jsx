/** Chunk was on 75909 **/
/** chunk id: 104800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk754700 = require("./754700.js"),
  Chunk793030 = require("./793030.js"),
  Chunk228488 = require("./228488.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk184299 = require("./184299.js"),
  Chunk720293 = require("./720293.js"),
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
  } = e, l = o.useMemo(() => (0, v.z0)(t, a.X.WATCH_VIDEO, v.n1.VIDEO, v.O.THUMBNAIL), [t]);
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
      className: S.stillFrameImageCard
    })
  })
}

function y(e) {
  let {
    title: t,
    subtitle: n,
    icon: l,
    onClick: a,
    className: c
  } = e, [u, d] = o.useState(false), m = () => {
    d(true)
  }, f = () => {
    d(false)
  };
  return (0, r.jsx)(s.P3F, {
    className: i()(S.endScreenPanel, S.accentOnHover, c),
    onMouseEnter: m,
    onMouseLeave: f,
    onFocus: m,
    onBlur: f,
    onClick: a,
    children: (0, r.jsxs)("div", {
      className: S.endScreenPanelInner,
      children: [(0, r.jsxs)("div", {
        className: S.endScreenPanelTextCont,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/semibold",
          className: S.endScreenPanelTextTitle,
          children: t
        }), (0, r.jsx)(s.X6q, {
          variant: "heading-sm/normal",
          className: S.endScreenPanelTextSubtitle,
          children: n
        })]
      }), (0, r.jsx)(O.Z, {
        color: "#747783"
      }), (0, r.jsx)(l, {
        size: "md",
        color: u ? "#FFFFFF" : "#B5BAC1",
        className: S.endScreenIcon
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
    onTrackQuestContentClick: a
  } = e, {
    onClose: v,
    sourceQuestContent: E,
    quest: O
  } = o.useContext(g.VideoQuestModalContext), _ = (0, p.ZP)(e => e.fullScreenEnabled), x = (0, p.ZP)(e => e.setFullScreenEnabled), j = (0, d.aM)(), D = (0, h.e)({
    quest: O,
    onClose: v,
    sourceQuestContent: E,
    impressionId: j
  }), P = o.useCallback(e => {
    if (_) {
      var t;
      let e = (0, c.fn)(null == (t = n.current) ? true : t.parentNode, n.current);
      null != e && (e.removeEventListener(c.NO, l), (0, c.Pr)(e), x(false), i(false))
    }
    a(e, u.jZ.LEARN_MORE), D(e, u.jZ.OPEN_GAME_LINK)
  }, [_, n, l, x, i, D, a]), {
    title: T,
    subtitle: R
  } = {
    title: (0, f.V_)(O),
    subtitle: null != (t = O.config.ctaConfig.subtitle) ? t : b.intl.string(b.t.mxaHfx)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C, {
      quest: O,
      sourceQuestContent: E
    }), (0, r.jsx)("div", {
      className: S.videoContOverlay
    }), (0, r.jsx)(y, {
      title: T,
      subtitle: R,
      icon: s.d4D,
      className: S.endScreenPanelRight,
      onClick: () => P(m.jn.VIDEO_MODAL)
    })]
  })
}