/** Chunk was on web.js **/
/** chunk id: 518727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => O,
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk794503 = require("./794503.js");
let O = 1e3,
  v = e => {
    let {
      children: t,
      isConfirmationStep: n
    } = e, o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [O, v] = (0, i.useState)("entry"), I = (0, i.useRef)(null), T = (0, i.useRef)(null), S = (0, i.useCallback)(() => {
      if ("entry" === O && (v("idle"), null != I.current)) {
        var e;
        null == (e = I.current) || e.play()
      }
    }, [O]), A = (0, i.useCallback)(() => {
      if ("exit" !== O && (v("exit"), null != T.current)) {
        var e;
        null == (e = T.current) || e.play()
      }
    }, [O]), {
      isGift: N
    } = (0, h.wD)(), {
      wasTier2PremiumBeforePurchase: C,
      selectedSkuId: R,
      purchaseState: P
    } = (0, m.JL)(), [w, D] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      P === g.A.PURCHASING && D(true)
    }, [P]);
    let L = (0, f.P)(N, !!C, R),
      {
        mediaUrls: x,
        isSuccess: M
      } = (0, E.Z)(!o && L && w),
      k = (0, i.useRef)(null),
      [j, U] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      function e() {
        U(true), A()
      }
      return p.S.subscribe(b.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e), () => {
        p.S.unsubscribe(b.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e)
      }
    }, [A]);
    let G = !o && L && n && M;
    return ((0, i.useEffect)(() => {
      G && (c.Z.dispatch({
        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
        value: G
      }), _.default.track(b.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED))
    }, [G]), (0, i.useEffect)(() => () => {
      c.Z.dispatch({
        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
        value: false
      })
    }, []), (0, i.useEffect)(() => {
      !o && L && n && !M && _.default.track(b.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)
    }, [o, L, n, M]), G) ? (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: y.videoContainer,
        children: [(0, r.jsx)("div", {
          className: y.entryAnimationContainer,
          children: (0, r.jsx)(d.Z, {
            playsInline: true,
            muted: true,
            autoPlay: true,
            onEnded: S,
            className: a()(y.video, "entry" === O ? y.visible : y.hidden),
            children: (0, r.jsx)("source", {
              src: x.modalGlowEntry
            })
          })
        }), (0, r.jsx)(d.Z, {
          ref: I,
          playsInline: true,
          muted: true,
          loop: true,
          className: a()(y.video, "idle" === O ? y.visible : y.hidden),
          children: (0, r.jsx)("source", {
            src: x.modalGlowIdle
          })
        }), (0, r.jsx)(d.Z, {
          ref: T,
          playsInline: true,
          muted: true,
          className: a()(y.video, "exit" === O ? y.visible : y.hidden),
          children: (0, r.jsx)("source", {
            src: x.modalGlowExit
          })
        })]
      }), (0, r.jsx)("div", {
        className: y.wowAnimation,
        children: (0, r.jsx)(l._dj, {
          fit: "layout",
          ref: k,
          dataBinding: {
            ExitTrigger: j
          }
        })
      }), (0, r.jsx)("div", {
        className: "exit" === O ? y.exitAnimationContainer : y.entryAnimationContainer,
        children: t
      })]
    }) : t
  }