/** Chunk was on web.js **/
/** chunk id: 758199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => O,
  u: () => E
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  var t, n, r, i;
  return {
    id: null != (t = null == e ? true : e.id) ? t : "0",
    linkType: null != (n = null == e ? true : e.linkType) ? n : m.U.UNKNOWN,
    referrerId: null != (r = null == e ? true : e.referrerId) ? r : p.default.getId(),
    activityCustomId: null == e ? true : e.activityCustomId,
    onView: null == e ? true : e.onView,
    onLinkCopied: null == e ? true : e.onLinkCopied,
    guildId: null == e ? true : e.guildId,
    channelId: null == e ? true : e.channelId,
    messageId: null == e ? true : e.messageId,
    isDeadEnd: null != (i = null == e ? true : e.isDeadEnd) && i
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
    info: p,
    staticBannerSrc: m,
    videoBannerSrc: E,
    bannerAspectRatio: O = 0,
    iconSrc: v,
    actions: S = [],
    trackingConfig: I,
    onClickContent: T,
    onClickBanner: A
  } = e;
  I = b(I);
  let {
    primaryColor: C,
    secondaryColor: N
  } = (0, f.Z)(null != v ? v : m), P = "linear-gradient(45deg, ".concat(C, ", ").concat(N, ")"), R = (0, u.e7)([d.Z], () => d.Z.useReducedMotion), w = i.useRef(false), D = (0, l.O)(e => {
    if (false === w.current && e) {
      var t;
      null == I || null == (t = I.onView) || t.call(I), (0, _.GF)({
        appId: I.id,
        linkType: I.linkType,
        referrerId: I.referrerId,
        customId: I.activityCustomId,
        guildId: I.guildId,
        channelId: I.channelId,
        messageId: I.messageId
      }), w.current = true
    }
  }, true), x = null != m, L = null != E && false === R, j = x || L, M = 0 === O ? g.bannerAspectRatioBot : g.bannerAspectRatioActivity, k = i.useRef(null), U = i.useCallback(() => {
    let e = k.current;
    null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play())
  }, []), G = i.useMemo(() => !!L && new URL(E).pathname.endsWith(".gif"), [L, E]), Z = i.useMemo(() => {
    if (null != T) return e => {
      T(e), (0, _.KX)({
        applicationId: I.id,
        linkType: I.linkType,
        area: _.j_.CONTENT,
        referrerId: I.referrerId,
        customId: I.activityCustomId,
        isDeadEnd: I.isDeadEnd
      })
    }
  }, [T, I]), B = i.useMemo(() => {
    if (null != A) return e => {
      A(e), (0, _.KX)({
        applicationId: I.id,
        linkType: I.linkType,
        area: _.j_.BANNER,
        referrerId: I.referrerId,
        customId: I.activityCustomId,
        isDeadEnd: I.isDeadEnd
      })
    }
  }, [A, I]);
  return (0, r.jsxs)("div", {
    ref: D,
    className: g.embed,
    children: [j && (0, r.jsxs)(y, {
      onClick: B,
      className: o()(g.bannerWrapper, M, {
        [g.showVideoOnFocus]: L
      }),
      children: [L && (G ? (0, r.jsx)("div", {
        className: g.videoBanner,
        style: {
          backgroundImage: "url(".concat(E, ")")
        }
      }) : (0, r.jsx)(s.Z, {
        ref: k,
        src: E,
        mediaLayoutType: h.hV.MOSAIC,
        loop: true,
        muted: true,
        className: g.videoBanner
      })), x && (0, r.jsx)("div", {
        className: g.staticBanner,
        style: {
          backgroundImage: "url(".concat(m, ")")
        },
        onTransitionEnd: U
      })]
    }), (0, r.jsxs)("div", {
      style: {
        background: P
      },
      children: [(0, r.jsxs)("div", {
        className: g.contentContainer,
        children: [null != n && (0, r.jsx)(c.xvT, {
          variant: "text-sm/semibold",
          color: "none",
          className: g.header,
          children: n
        }), (0, r.jsxs)(y, {
          onClick: Z,
          className: o()(g.contentWrapper, {
            [g.contentWrapperClickable]: null != Z
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
              children: p
            })]
          })]
        }), S.length > 0 && (0, r.jsx)("div", {
          className: g.actionWrapper,
          children: S.map((e, t) => {
            let {
              label: n,
              icon: i,
              onClick: a,
              disabled: o,
              disabledReason: s,
              submitting: l,
              trackingArea: u,
              isDeadEnd: d
            } = e, f = 0 === t;
            return (0, r.jsxs)("div", {
              className: g.buttonWithPossibleDisabledTextWrapper,
              children: [(0, r.jsx)(c.zxk, {
                variant: f ? "overlay-primary" : "overlay-secondary",
                disabled: o || null != s,
                loading: l,
                icon: i,
                text: n,
                onClick: e => {
                  a(e), (0, _.KX)({
                    applicationId: I.id,
                    linkType: I.linkType,
                    area: u,
                    referrerId: I.referrerId,
                    customId: I.activityCustomId,
                    isDeadEnd: d
                  })
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