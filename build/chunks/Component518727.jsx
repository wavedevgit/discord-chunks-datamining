/** Chunk was on web.js **/
/** chunk id: 518727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => I,
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk164275 = require("./164275.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk45572 = require("./45572.js"),
  Chunk402426 = require("./402426.js"),
  Chunk981631 = require("./981631.js"),
  Chunk839249 = require("./839249.js"),
  Chunk293914 = require("./293914.js"),
  Chunk503019 = require("./503019.js");
let I = 1e3,
  T = e => {
    let {
      children: t,
      isConfirmationStep: n
    } = e, a = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [I, T] = (0, i.useState)("entry"), S = (0, i.useRef)(null), A = (0, i.useRef)(null), C = (0, i.useCallback)(() => {
      if ("entry" === I && (T("idle"), null != S.current)) {
        var e;
        null == (e = S.current) || e.play()
      }
    }, [I]), N = (0, i.useCallback)(() => {
      if ("exit" !== I && (T("exit"), null != A.current)) {
        var e;
        null == (e = A.current) || e.play()
      }
    }, [I]), {
      isGift: R
    } = (0, h.wD)(), {
      wasTier2PremiumBeforePurchase: P,
      selectedSkuId: D,
      purchaseState: w
    } = (0, m.JL)(), [x, L] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      w === g.A.PURCHASING && L(true)
    }, [w]);
    let M = (0, f.P)(R, !!P, D),
      {
        mediaUrls: k,
        isSuccess: j
      } = (0, E.Z)(!a && M && x),
      U = (0, i.useRef)(null),
      [G, B] = (0, i.useState)(false),
      [Z, F] = (0, i.useState)(false),
      [V, H] = (0, i.useState)("none"),
      [Y, W] = (0, i.useState)(false);
    if ((0, i.useEffect)(() => {
        let e;
        M && n && !Y && "none" === V && (a || !j ? (H("static"), a || (W(true), _.default.track(b.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)), e = false) : (H("animated"), F(true), e = true), c.Z.dispatch({
          type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
          value: true,
          isAnimated: e
        }), _.default.track(b.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
          wow_moment_type: e ? "animated" : "static"
        }))
      }, [a, M, n, j, Y, V]), (0, i.useEffect)(() => {
        function e() {
          B(true), N()
        }
        return p.S.subscribe(b.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e), () => {
          p.S.unsubscribe(b.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e)
        }
      }, [N]), (0, i.useEffect)(() => () => {
        c.Z.dispatch({
          type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
          value: false,
          isAnimated: false
        })
      }, []), "animated" === V) return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: y.videoContainer,
        children: [(0, r.jsx)("div", {
          className: y.entryAnimationContainer,
          children: (0, r.jsx)(d.Z, {
            playsInline: true,
            muted: true,
            autoPlay: true,
            onEnded: C,
            className: o()(y.video, "entry" === I ? y.visible : y.hidden),
            children: (0, r.jsx)("source", {
              src: k.modalGlowEntry
            })
          })
        }), (0, r.jsx)(d.Z, {
          ref: S,
          playsInline: true,
          muted: true,
          loop: true,
          className: o()(y.video, "idle" === I ? y.visible : y.hidden),
          children: (0, r.jsx)("source", {
            src: k.modalGlowIdle
          })
        }), (0, r.jsx)(d.Z, {
          ref: A,
          playsInline: true,
          muted: true,
          className: o()(y.video, "exit" === I ? y.visible : y.hidden),
          children: (0, r.jsx)("source", {
            src: k.modalGlowExit
          })
        })]
      }), (0, r.jsx)("div", {
        className: y.wowAnimation,
        children: (0, r.jsx)(l.zec, {
          fit: "layout",
          ref: U,
          dataBinding: {
            ExitTrigger: G,
            EntryTrigger: Z
          },
          listenOnDocumentBody: true
        })
      }), (0, r.jsx)("div", {
        className: "exit" === I ? y.exitAnimationContainer : y.entryAnimationContainer,
        children: t
      })]
    });
    let K = !G;
    return "static" === V ? (0, r.jsxs)(r.Fragment, {
      children: [K && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          src: O.Z,
          alt: "",
          className: y.staticGlow
        }), (0, r.jsx)("img", {
          src: v.Z,
          alt: "",
          className: y.staticWumpusWithTrinkets
        })]
      }), t]
    }) : t
  }