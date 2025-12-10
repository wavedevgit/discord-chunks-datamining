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
    } = e, y = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [O, v] = (0, i.useState)("entry"), S = (0, i.useRef)(null), I = (0, i.useRef)(null), T = (0, i.useCallback)(() => {
      if ("entry" === O && (v("idle"), null != S.current)) {
        var e;
        null == (e = S.current) || e.play()
      }
    }, [O]), C = (0, i.useCallback)(() => {
      if ("exit" !== O && (v("exit"), null != I.current)) {
        var e;
        null == (e = I.current) || e.play()
      }
    }, [O]), [A, N] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      b && N(true)
    }, [b]);
    let {
      mediaUrls: P,
      isSuccess: R
    } = (0, _.Z)(!y && a && A), w = (0, i.useRef)(null), [D, x] = (0, i.useState)(false), [L, j] = (0, i.useState)(false), [M, k] = (0, i.useState)("none"), [U, G] = (0, i.useState)(false);
    if ((0, i.useEffect)(() => {
        let e;
        a && n && !U && "none" === M && (y || !R ? (k("static"), y || (G(true), f.default.track(m.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)), e = false) : (k("animated"), j(true), e = true), c.Z.dispatch({
          type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
          value: true,
          isAnimated: e
        }), f.default.track(m.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
          wow_moment_type: e ? "animated" : "static"
        }))
      }, [y, a, n, R, U, M]), (0, i.useEffect)(() => {
        function e() {
          x(true), C()
        }
        return p.S.subscribe(m.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
          p.S.unsubscribe(m.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
        }
      }, [C]), (0, i.useEffect)(() => () => {
        c.Z.dispatch({
          type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
          value: false,
          isAnimated: false
        })
      }, []), "animated" === M) return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: h.videoContainer,
        children: [(0, r.jsx)("div", {
          className: h.entryAnimationContainer,
          children: (0, r.jsx)(d.Z, {
            playsInline: true,
            muted: true,
            autoPlay: true,
            onEnded: T,
            className: o()(h.video, "entry" === O ? h.visible : h.hidden),
            children: (0, r.jsx)("source", {
              src: P.modalGlowEntry
            })
          })
        }), (0, r.jsx)(d.Z, {
          ref: S,
          playsInline: true,
          muted: true,
          loop: true,
          className: o()(h.video, "idle" === O ? h.visible : h.hidden),
          children: (0, r.jsx)("source", {
            src: P.modalGlowIdle
          })
        }), (0, r.jsx)(d.Z, {
          ref: I,
          playsInline: true,
          muted: true,
          className: o()(h.video, "exit" === O ? h.visible : h.hidden),
          children: (0, r.jsx)("source", {
            src: P.modalGlowExit
          })
        })]
      }), (0, r.jsx)("div", {
        className: h.wowAnimation,
        children: (0, r.jsx)(l.zec, {
          fit: "layout",
          ref: w,
          dataBinding: {
            ExitTrigger: D,
            EntryTrigger: L
          },
          listenOnDocumentBody: true
        })
      }), (0, r.jsx)("div", {
        className: "exit" === O ? h.exitAnimationContainer : h.entryAnimationContainer,
        children: t
      })]
    });
    let Z = !D;
    return "static" === M ? (0, r.jsxs)(r.Fragment, {
      children: [Z && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          src: g.Z,
          alt: "",
          className: h.staticGlow
        }), (0, r.jsx)("img", {
          src: E.Z,
          alt: "",
          className: h.staticWumpusWithTrinkets
        })]
      }), t]
    }) : t
  }