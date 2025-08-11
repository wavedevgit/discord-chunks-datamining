/** Chunk was on web.js **/
/** chunk id: 518727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => y,
  Z: () => O
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
  Chunk585483 = require("./585483.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk45572 = require("./45572.js"),
  Chunk402426 = require("./402426.js"),
  Chunk981631 = require("./981631.js"),
  Chunk794503 = require("./794503.js");
let y = 1e3,
  O = e => {
    let {
      children: t,
      isConfirmationStep: n
    } = e, o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [y, O] = (0, i.useState)("entry"), v = (0, i.useRef)(null), I = (0, i.useRef)(null), T = (0, i.useCallback)(() => {
      if ("entry" === y && (O("idle"), null != v.current)) {
        var e;
        null == (e = v.current) || e.play()
      }
    }, [y]), S = (0, i.useCallback)(() => {
      if ("exit" !== y && (O("exit"), null != I.current)) {
        var e;
        null == (e = I.current) || e.play()
      }
    }, [y]), {
      isGift: A
    } = (0, p.wD)(), {
      wasTier2PremiumBeforePurchase: N,
      selectedSkuId: C,
      purchaseState: R
    } = (0, h.JL)(), [P, w] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      R === m.A.PURCHASING && w(true)
    }, [R]);
    let D = (0, f.P)(A, !!N, C),
      {
        mediaUrls: L,
        isSuccess: x
      } = (0, g.Z)(!o && D && P),
      M = (0, i.useRef)(null),
      [k, j] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      function e() {
        j(true), S()
      }
      return _.S.subscribe(E.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e), () => {
        _.S.unsubscribe(E.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e)
      }
    }, [S]);
    let U = !o && D && n && x;
    return ((0, i.useEffect)(() => {
      U && c.Z.dispatch({
        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
        value: U
      })
    }, [U]), (0, i.useEffect)(() => () => {
      c.Z.dispatch({
        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
        value: false
      })
    }, []), U) ? (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: b.videoContainer,
        children: [(0, r.jsx)("div", {
          className: b.entryAnimationContainer,
          children: (0, r.jsx)(d.Z, {
            playsInline: true,
            muted: true,
            autoPlay: true,
            onEnded: T,
            className: a()(b.video, "entry" === y ? b.visible : b.hidden),
            children: (0, r.jsx)("source", {
              src: L.modalGlowEntry
            })
          })
        }), (0, r.jsx)(d.Z, {
          ref: v,
          playsInline: true,
          muted: true,
          loop: true,
          className: a()(b.video, "idle" === y ? b.visible : b.hidden),
          children: (0, r.jsx)("source", {
            src: L.modalGlowIdle
          })
        }), (0, r.jsx)(d.Z, {
          ref: I,
          playsInline: true,
          muted: true,
          className: a()(b.video, "exit" === y ? b.visible : b.hidden),
          children: (0, r.jsx)("source", {
            src: L.modalGlowExit
          })
        })]
      }), (0, r.jsx)("div", {
        className: b.wowAnimation,
        children: (0, r.jsx)(l._dj, {
          fit: "layout",
          ref: M,
          dataBinding: {
            ExitTrigger: k
          }
        })
      }), (0, r.jsx)("div", {
        className: "exit" === y ? b.exitAnimationContainer : b.entryAnimationContainer,
        children: t
      })]
    }) : t
  }