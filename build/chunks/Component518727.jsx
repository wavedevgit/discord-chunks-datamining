/** Chunk was on web.js **/
/** chunk id: 518727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => b,
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk402426 = require("./402426.js"),
  Chunk981631 = require("./981631.js"),
  Chunk839249 = require("./839249.js"),
  Chunk293914 = require("./293914.js"),
  Chunk503019 = require("./503019.js");
let b = 1e3,
  y = e => {
    let {
      children: t,
      isConfirmationStep: n,
      isEligibleForWowMoment: a,
      shouldPrefetchWowMoment: b
    } = e, y = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [O, v] = (0, i.useState)("entry"), I = (0, i.useRef)(null), T = (0, i.useRef)(null), S = (0, i.useCallback)(() => {
      if ("entry" === O && (v("idle"), null != I.current)) {
        var e;
        null == (e = I.current) || e.play()
      }
    }, [O]), A = (0, i.useCallback)(() => {
      if ("exit" !== O && (v("exit"), null != T.current)) {
        var e;
        null == (e = T.current) || e.play()
      }
    }, [O]), [C, N] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      b && N(true)
    }, [b]);
    let {
      mediaUrls: R,
      isSuccess: P
    } = (0, p.Z)(!y && a && C), D = (0, i.useRef)(null), [w, L] = (0, i.useState)(false), [x, M] = (0, i.useState)(false), [k, j] = (0, i.useState)("none"), [U, G] = (0, i.useState)(false);
    if ((0, i.useEffect)(() => {
        let e;
        a && n && !U && "none" === k && (y || !P ? (j("static"), y || (G(true), f.default.track(h.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)), e = false) : (j("animated"), M(true), e = true), c.Z.dispatch({
          type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
          value: true,
          isAnimated: e
        }), f.default.track(h.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
          wow_moment_type: e ? "animated" : "static"
        }))
      }, [y, a, n, P, U, k]), (0, i.useEffect)(() => {
        function e() {
          L(true), A()
        }
        return _.S.subscribe(h.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
          _.S.unsubscribe(h.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
        }
      }, [A]), (0, i.useEffect)(() => () => {
        c.Z.dispatch({
          type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
          value: false,
          isAnimated: false
        })
      }, []), "animated" === k) return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: m.videoContainer,
        children: [(0, r.jsx)("div", {
          className: m.entryAnimationContainer,
          children: (0, r.jsx)(d.Z, {
            playsInline: true,
            muted: true,
            autoPlay: true,
            onEnded: S,
            className: o()(m.video, "entry" === O ? m.visible : m.hidden),
            children: (0, r.jsx)("source", {
              src: R.modalGlowEntry
            })
          })
        }), (0, r.jsx)(d.Z, {
          ref: I,
          playsInline: true,
          muted: true,
          loop: true,
          className: o()(m.video, "idle" === O ? m.visible : m.hidden),
          children: (0, r.jsx)("source", {
            src: R.modalGlowIdle
          })
        }), (0, r.jsx)(d.Z, {
          ref: T,
          playsInline: true,
          muted: true,
          className: o()(m.video, "exit" === O ? m.visible : m.hidden),
          children: (0, r.jsx)("source", {
            src: R.modalGlowExit
          })
        })]
      }), (0, r.jsx)("div", {
        className: m.wowAnimation,
        children: (0, r.jsx)(l.zec, {
          fit: "layout",
          ref: D,
          dataBinding: {
            ExitTrigger: w,
            EntryTrigger: x
          },
          listenOnDocumentBody: true
        })
      }), (0, r.jsx)("div", {
        className: "exit" === O ? m.exitAnimationContainer : m.entryAnimationContainer,
        children: t
      })]
    });
    let B = !w;
    return "static" === k ? (0, r.jsxs)(r.Fragment, {
      children: [B && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          src: g.Z,
          alt: "",
          className: m.staticGlow
        }), (0, r.jsx)("img", {
          src: E.Z,
          alt: "",
          className: m.staticWumpusWithTrinkets
        })]
      }), t]
    }) : t
  }