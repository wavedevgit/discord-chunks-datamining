/** Chunk was on web.js **/
/** chunk id: 758199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => O,
  u: () => E
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk92951 = require("./92951.jsx"),
  Chunk907331 = require("./907331.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk206295 = require("./206295.js"),
  Chunk314897 = require("./314897.js"),
  Chunk914498 = require("./914498.js"),
  Chunk967249 = require("./967249.js"),
  Chunk217702 = require("./217702.js"),
  Chunk906376 = require("./906376.js"),
  E = function(e) {
    return e[e.BOT = 0] = "BOT", e[e.ACTIVITY = 1] = "ACTIVITY", e
  }({});

function b(e) {
  var t, n, r;
  return {
    id: null != (t = null == e ? true : e.id) ? t : "0",
    linkType: null != (n = null == e ? true : e.linkType) ? n : h.U.UNKNOWN,
    referrerId: null != (r = null == e ? true : e.referrerId) ? r : _.default.getId(),
    activityCustomId: null == e ? true : e.activityCustomId,
    onView: null == e ? true : e.onView,
    onLinkCopied: null == e ? true : e.onLinkCopied,
    guildId: null == e ? true : e.guildId,
    channelId: null == e ? true : e.channelId,
    messageId: null == e ? true : e.messageId
  }
}

function y(e) {
  let {
    onClick: t,
    children: n,
    className: i
  } = e;
  return null != t ? (0, r.jsx)(c.P3F, {
    onClick: t,
    className: o()({
      [g.cursorPointer]: null != t
    }, i),
    children: n
  }) : (0, r.jsx)("div", {
    className: i,
    children: n
  })
}

function O(e) {
  let {
    title: t,
    header: n,
    footer: a,
    info: _,
    staticBannerSrc: h,
    videoBannerSrc: E,
    bannerAspectRatio: O = 0,
    iconSrc: v,
    actions: I = [],
    trackingConfig: T,
    onClickContent: S,
    onClickBanner: A
  } = e;
  T = b(T);
  let {
    primaryColor: C,
    secondaryColor: N
  } = (0, f.Z)(null != v ? v : h), R = "linear-gradient(45deg, ".concat(C, ", ").concat(N, ")"), P = (0, u.e7)([d.Z], () => d.Z.useReducedMotion), D = i.useRef(false), w = (0, l.O)(e => {
    if (false === D.current && e) {
      var t;
      null == T || null == (t = T.onView) || t.call(T), (0, p.GF)({
        appId: T.id,
        linkType: T.linkType,
        referrerId: T.referrerId,
        customId: T.activityCustomId,
        guildId: T.guildId,
        channelId: T.channelId,
        messageId: T.messageId
      }), D.current = true
    }
  }, true), L = null != h, x = null != E && false === P, M = L || x, k = 0 === O ? g.bannerAspectRatioBot : g.bannerAspectRatioActivity, j = i.useRef(null), U = i.useCallback(() => {
    let e = j.current;
    null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play())
  }, []), G = i.useMemo(() => !!x && new URL(E).pathname.endsWith(".gif"), [x, E]), B = i.useMemo(() => {
    if (null != S) return e => {
      S(e), (0, p.KX)(T.id, T.linkType, p.j_.CONTENT, T.referrerId, T.activityCustomId)
    }
  }, [S, T]), Z = i.useMemo(() => {
    if (null != A) return e => {
      A(e), (0, p.KX)(T.id, T.linkType, p.j_.BANNER, T.referrerId, T.activityCustomId)
    }
  }, [A, T]);
  return (0, r.jsxs)("div", {
    ref: w,
    className: g.embed,
    children: [M && (0, r.jsxs)(y, {
      onClick: Z,
      className: o()(g.bannerWrapper, k, {
        [g.showVideoOnFocus]: x
      }),
      children: [x && (G ? (0, r.jsx)("div", {
        className: g.videoBanner,
        style: {
          backgroundImage: "url(".concat(E, ")")
        }
      }) : (0, r.jsx)(s.Z, {
        ref: j,
        src: E,
        mediaLayoutType: m.hV.MOSAIC,
        loop: true,
        muted: true,
        className: g.videoBanner
      })), L && (0, r.jsx)("div", {
        className: g.staticBanner,
        style: {
          backgroundImage: "url(".concat(h, ")")
        },
        onTransitionEnd: U
      })]
    }), (0, r.jsxs)("div", {
      style: {
        background: R
      },
      children: [(0, r.jsxs)("div", {
        className: g.contentContainer,
        children: [null != n && (0, r.jsx)(c.xvT, {
          variant: "text-sm/semibold",
          color: "none",
          className: g.header,
          children: n
        }), (0, r.jsxs)(y, {
          onClick: B,
          className: o()(g.contentWrapper, {
            [g.contentWrapperClickable]: null != B
          }),
          children: [null != v && (0, r.jsx)("div", {
            className: g.img,
            style: {
              backgroundImage: "url(".concat(v, ")")
            }
          }), (0, r.jsxs)("div", {
            className: g.content,
            children: [(0, r.jsx)(c.xvT, {
              variant: "text-md/semibold",
              color: "none",
              lineClamp: 1,
              className: g.contentTitle,
              children: t
            }), (0, r.jsx)("div", {
              className: g.contentInfoWrapper,
              children: _
            })]
          })]
        }), I.length > 0 && (0, r.jsx)("div", {
          className: g.actionWrapper,
          children: I.map((e, t) => {
            let {
              label: n,
              icon: i,
              onClick: a,
              disabled: o,
              disabledReason: s,
              submitting: l,
              trackingArea: u
            } = e, d = 0 === t;
            return (0, r.jsxs)("div", {
              className: g.buttonWithPossibleDisabledTextWrapper,
              children: [(0, r.jsx)(c.zxk, {
                variant: d ? "overlay-primary" : "overlay-secondary",
                disabled: o || null != s,
                loading: l,
                icon: i,
                text: n,
                onClick: e => {
                  a(e), (0, p.KX)(T.id, T.linkType, u, T.referrerId, T.activityCustomId)
                },
                fullWidth: true
              }), null != s && (0, r.jsx)(c.xvT, {
                variant: "text-xs/medium",
                color: "none",
                className: g.disabledReason,
                children: s
              })]
            }, n)
          })
        })]
      }), null != a && a]
    })]
  })
}