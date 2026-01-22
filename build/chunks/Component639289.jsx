/** Chunk was on web.js **/
/** chunk id: 639289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y,
  K: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk127445 = require("./127445.js"),
  Chunk652215 = require("./652215.js"),
  Chunk570837 = require("./570837.js"),
  Chunk819900 = require("./819900.js"),
  Chunk697634 = require("./697634.js");
let b = 1e3,
  y = e => {
    let {
      children: t,
      isConfirmationStep: n,
      isEligibleForWowMoment: a,
      shouldPrefetchWowMoment: b
    } = e, y = (0, o.bG)([u.A], () => u.A.useReducedMotion), [O, A] = (0, i.useState)("entry"), v = (0, i.useRef)(null), S = (0, i.useRef)(null), I = (0, i.useCallback)(() => {
      if ("entry" === O && (A("idle"), null != v.current)) {
        var e;
        null == (e = v.current) || e.play()
      }
    }, [O]), T = (0, i.useCallback)(() => {
      if ("exit" !== O && (A("exit"), null != S.current)) {
        var e;
        null == (e = S.current) || e.play()
      }
    }, [O]), [C, N] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      b && N(true)
    }, [b]);
    let {
      mediaUrls: R,
      isSuccess: w
    } = (0, _.A)(!y && a && C), P = (0, i.useRef)(null), [D, x] = (0, i.useState)(false), [L, j] = (0, i.useState)(false), [M, k] = (0, i.useState)("none"), [U, G] = (0, i.useState)(false);
    if ((0, i.useEffect)(() => {
        let e;
        a && n && !U && "none" === M && (y || !w ? (k("static"), y || (G(true), f.default.track(h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)), e = false) : (k("animated"), j(true), e = true), c.h.dispatch({
          type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
          value: true,
          isAnimated: e
        }), f.default.track(h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
          wow_moment_type: e ? "animated" : "static"
        }))
      }, [y, a, n, w, U, M]), (0, i.useEffect)(() => {
        function e() {
          x(true), T()
        }
        return p._.subscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e), () => {
          p._.unsubscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e)
        }
      }, [T]), (0, i.useEffect)(() => () => {
        c.h.dispatch({
          type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
          value: false,
          isAnimated: false
        })
      }, []), "animated" === M) return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: m.j,
        children: [(0, r.jsx)("div", {
          className: m.ws,
          children: (0, r.jsx)(d.A, {
            playsInline: true,
            muted: true,
            autoPlay: true,
            onEnded: I,
            className: s()(m.Ki, "entry" === O ? m.RK : m.R),
            children: (0, r.jsx)("source", {
              src: R.modalGlowEntry
            })
          })
        }), (0, r.jsx)(d.A, {
          ref: v,
          playsInline: true,
          muted: true,
          loop: true,
          className: s()(m.Ki, "idle" === O ? m.RK : m.R),
          children: (0, r.jsx)("source", {
            src: R.modalGlowIdle
          })
        }), (0, r.jsx)(d.A, {
          ref: S,
          playsInline: true,
          muted: true,
          className: s()(m.Ki, "exit" === O ? m.RK : m.R),
          children: (0, r.jsx)("source", {
            src: R.modalGlowExit
          })
        })]
      }), (0, r.jsx)("div", {
        className: m.Sh,
        children: (0, r.jsx)(l.eOb, {
          fit: "layout",
          ref: P,
          dataBinding: {
            ExitTrigger: D,
            EntryTrigger: L
          },
          listenOnDocumentBody: true
        })
      }), (0, r.jsx)("div", {
        className: "exit" === O ? m.aO : m.ws,
        children: t
      })]
    });
    let V = !D;
    return "static" === M ? (0, r.jsxs)(r.Fragment, {
      children: [V && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          src: g.A,
          alt: "",
          className: m.Uw
        }), (0, r.jsx)("img", {
          src: E.A,
          alt: "",
          className: m.Gv
        })]
      }), t]
    }) : t
  }