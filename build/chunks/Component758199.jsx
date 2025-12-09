/** Chunk was on web.js **/
/** chunk id: 758199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => v,
  u: () => b
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk92951 = require("./92951.jsx"),
  Chunk907331 = require("./907331.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk607070 = require("./607070.js"),
  Chunk206295 = require("./206295.js"),
  Chunk314897 = require("./314897.js"),
  Chunk914498 = require("./914498.js"),
  Chunk967249 = require("./967249.js"),
  Chunk217702 = require("./217702.js"),
  Chunk906376 = require("./906376.js"),
  b = function(e) {
    return e[e.BOT = 0] = "BOT", e[e.ACTIVITY = 1] = "ACTIVITY", e
  }({});

function y(e) {
  var t, n, r, i;
  return {
    id: null != (t = null == e ? true : e.id) ? t : "0",
    linkType: null != (n = null == e ? true : e.linkType) ? n : h.U.UNKNOWN,
    referrerId: null != (r = null == e ? true : e.referrerId) ? r : _.default.getId(),
    activityCustomId: null == e ? true : e.activityCustomId,
    onView: null == e ? true : e.onView,
    onLinkCopied: null == e ? true : e.onLinkCopied,
    guildId: null == e ? true : e.guildId,
    channelId: null == e ? true : e.channelId,
    messageId: null == e ? true : e.messageId,
    isDeadEnd: null != (i = null == e ? true : e.isDeadEnd) && i
  }
}

function O(e) {
  let {
    onClick: t,
    children: n,
    className: i
  } = e;
  return null != t ? (0, r.jsx)(c.P3F, {
    onClick: t,
    className: o()({
      [E.cursorPointer]: null != t
    }, i),
    children: n
  }) : (0, r.jsx)("div", {
    className: i,
    children: n
  })
}

function v(e) {
  let {
    title: t,
    header: n,
    footer: a,
    info: _,
    staticBannerSrc: h,
    videoBannerSrc: b,
    bannerAspectRatio: v = 0,
    iconSrc: S,
    actions: I = [],
    primaryActionFirst: T = false,
    trackingConfig: A,
    onClickContent: C,
    onClickBanner: N
  } = e;
  A = y(A);
  let {
    primaryColor: P,
    secondaryColor: R
  } = (0, p.Z)(null != S ? S : h), D = "linear-gradient(45deg, ".concat(P, ", ").concat(R, ")"), w = (0, u.e7)([f.Z], () => f.Z.useReducedMotion), x = i.useRef(false), L = (0, l.O)(e => {
    if (false === x.current && e) {
      var t;
      null == A || null == (t = A.onView) || t.call(A), (0, m.GF)({
        appId: A.id,
        linkType: A.linkType,
        referrerId: A.referrerId,
        customId: A.activityCustomId,
        guildId: A.guildId,
        channelId: A.channelId,
        messageId: A.messageId
      }), x.current = true
    }
  }, true), j = null != h, M = null != b && false === w, k = j || M, U = 0 === v ? E.bannerAspectRatioBot : E.bannerAspectRatioActivity, G = i.useRef(null), Z = i.useCallback(() => {
    let e = G.current;
    null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play())
  }, []), B = i.useMemo(() => !!M && new URL(b).pathname.endsWith(".gif"), [M, b]), F = i.useMemo(() => {
    if (null != C) return e => {
      C(e), (0, m.KX)({
        applicationId: A.id,
        linkType: A.linkType,
        area: m.j_.CONTENT,
        referrerId: A.referrerId,
        customId: A.activityCustomId,
        isDeadEnd: A.isDeadEnd
      })
    }
  }, [C, A]), V = i.useMemo(() => {
    if (null != N) return e => {
      N(e), (0, m.KX)({
        applicationId: A.id,
        linkType: A.linkType,
        area: m.j_.BANNER,
        referrerId: A.referrerId,
        customId: A.activityCustomId,
        isDeadEnd: A.isDeadEnd
      })
    }
  }, [N, A]);
  return (0, r.jsxs)("div", {
    ref: L,
    className: E.embed,
    children: [k && (0, r.jsxs)(O, {
      onClick: V,
      className: o()(E.bannerWrapper, U, {
        [E.showVideoOnFocus]: M
      }),
      children: [M && (B ? (0, r.jsx)("div", {
        className: E.videoBanner,
        style: {
          backgroundImage: "url(".concat(b, ")")
        }
      }) : (0, r.jsx)(s.Z, {
        ref: G,
        src: b,
        mediaLayoutType: g.hV.MOSAIC,
        loop: true,
        muted: true,
        className: E.videoBanner
      })), j && (0, r.jsx)("div", {
        className: E.staticBanner,
        style: {
          backgroundImage: "url(".concat(h, ")")
        },
        onTransitionEnd: Z
      })]
    }), (0, r.jsxs)("div", {
      style: {
        background: D
      },
      children: [(0, r.jsxs)("div", {
        className: E.contentContainer,
        children: [null != n && (0, r.jsx)(c.xvT, {
          variant: "text-sm/semibold",
          color: "none",
          className: E.header,
          children: n
        }), (0, r.jsxs)(O, {
          onClick: F,
          className: o()(E.contentWrapper, {
            [E.contentWrapperClickable]: null != F
          }),
          children: [null != S && (0, r.jsx)("div", {
            className: E.img,
            style: {
              backgroundImage: "url(".concat(S, ")")
            }
          }), (0, r.jsxs)("div", {
            className: E.content,
            children: [(0, r.jsx)(c.xvT, {
              variant: "text-md/semibold",
              color: "none",
              lineClamp: 1,
              className: E.contentTitle,
              children: t
            }), (0, r.jsx)("div", {
              className: E.contentInfoWrapper,
              children: _
            })]
          })]
        }), I.length > 0 && (0, r.jsx)("div", {
          className: o()(E.actionWrapper, T ? E.actionWrapperPrimaryFirst : null),
          children: I.map((e, t) => {
            let {
              label: n,
              icon: i,
              onClick: a,
              disabled: o,
              disabledReason: s,
              submitting: l,
              trackingArea: u,
              isDeadEnd: f,
              iconButton: p
            } = e, _ = 0 === t;
            return p ? (0, r.jsx)(d.u, {
              text: n,
              children: (0, r.jsx)(c.hU, {
                variant: _ ? "overlay-primary" : "overlay-secondary",
                disabled: o || null != s,
                loading: l,
                icon: i,
                "aria-label": n,
                onClick: e => {
                  a(e), (0, m.KX)({
                    applicationId: A.id,
                    linkType: A.linkType,
                    area: u,
                    referrerId: A.referrerId,
                    customId: A.activityCustomId,
                    isDeadEnd: f
                  })
                }
              })
            }, n) : (0, r.jsxs)("div", {
              className: E.buttonWithPossibleDisabledTextWrapper,
              children: [(0, r.jsx)(c.zxk, {
                variant: _ ? "overlay-primary" : "overlay-secondary",
                disabled: o || null != s,
                loading: l,
                icon: i,
                text: n,
                onClick: e => {
                  a(e), (0, m.KX)({
                    applicationId: A.id,
                    linkType: A.linkType,
                    area: u,
                    referrerId: A.referrerId,
                    customId: A.activityCustomId,
                    isDeadEnd: f
                  })
                },
                fullWidth: true
              }), null != s && (0, r.jsx)(c.xvT, {
                variant: "text-xs/medium",
                color: "none",
                className: E.disabledReason,
                children: s
              })]
            }, n)
          })
        })]
      }), null != a && a]
    })]
  })
}