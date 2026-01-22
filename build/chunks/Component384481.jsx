/** Chunk was on web.js **/
/** chunk id: 384481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk90644 = require("./90644.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk939341 = require("./939341.js"),
  Chunk623671 = require("./623671.jsx"),
  Chunk365185 = require("./365185.js"),
  Chunk915089 = require("./915089.js"),
  Chunk172710 = require("./172710.js"),
  Chunk92240 = require("./92240.js"),
  Chunk257367 = require("./257367.js"),
  Chunk317572 = require("./317572.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk282197 = require("./282197.jsx"),
  Chunk584904 = require("./584904.jsx"),
  Chunk351638 = require("./351638.jsx"),
  Chunk531648 = require("./531648.jsx"),
  Chunk753713 = require("./753713.jsx"),
  Chunk646648 = require("./646648.jsx"),
  Chunk8738 = require("./8738.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk380297 = require("./380297.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    user: t,
    currentUser: n,
    activity: a,
    className: R,
    onClose: P
  } = e, x = (0, _.GV)(), L = (0, _.GV)(), {
    themeType: j
  } = (0, b.E)(), M = (0, p.A)({
    activity: a,
    user: t
  }), k = (0, E.A)(a), U = null != k.text && "" !== k.text, {
    largeImage: G
  } = (0, d.XN)(a), {
    analyticsLocations: V
  } = (0, u.Ay)(c.A.USER_PROFILE_LIVE_ACTIVITY_CARD), F = (0, m.A)({
    display: "live",
    user: t,
    activity: a,
    entry: M,
    analyticsLocations: V
  }), B = (0, g.A)({
    userId: t.id,
    onAction: F
  });
  if (!(0, l.A)(a)) return null;
  let H = () => {
      var e, n;
      let l = null != (e = null == (n = a.state) ? true : n.split("; ")) ? e : [];
      return 0 === l.length ? null : null == a.sync_id ? (0, r.jsx)(v.A, {
        variant: "text-xs/normal",
        text: l.join(", ")
      }) : (0, r.jsx)(v.A, {
        variant: "text-xs/normal",
        text: l.map((e, n) => (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(o.DUT, {
            className: s()(N.sd, N.mG),
            onClick: e => {
              e.stopPropagation(), F({
                action: "OPEN_SPOTIFY_ARTIST"
              }), (0, h.mN)(a, t.id, n)
            },
            children: e
          }), n < l.length - 1 ? ", " : ""]
        }, n))
      })
    },
    Y = () => {
      let {
        timestamps: e
      } = a;
      if (null == e) return null;
      let {
        start: t,
        end: n
      } = e;
      return null == t || null == n ? null : (0, r.jsx)(S.A, {
        start: t,
        end: n
      })
    },
    W = () => t.id === n.id ? null : (0, r.jsx)("div", {
      className: N.o1,
      children: (0, r.jsx)(I.A, {
        user: t,
        activity: a,
        onAction: F
      })
    });
  return (0, r.jsx)(u.f5, {
    value: V,
    children: (0, r.jsxs)(O.A, {
      ref: B,
      className: s()(N.Nr, R),
      onAction: F,
      onClose: P,
      "aria-labelledby": U ? "".concat(L, " ").concat(x) : x,
      children: [(0, r.jsx)(A.A, D(w({
        textId: L
      }, k), {
        contextMenu: (0, r.jsx)(T.A, {
          display: "live",
          user: t,
          activity: a,
          entry: M,
          onClose: P
        })
      })), (0, r.jsx)("div", {
        className: N.rf,
        children: (0, r.jsxs)("div", {
          className: N.Qs,
          children: [(0, r.jsx)(f.d, {
            image: G,
            size: j === C.d.MODAL_V2 ? f.w.SIZE_100 : f.w.SIZE_60,
            className: N.mM,
            onClick: e => {
              e.stopPropagation(), F({
                action: "OPEN_SPOTIFY_ALBUM"
              }), (0, h.QX)(a, t.id)
            }
          }), (0, r.jsxs)("div", {
            className: N.zH,
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)(v.Q, {
                variant: "heading-sm/semibold",
                text: a.details,
                onClick: () => {
                  F({
                    action: "OPEN_SPOTIFY_TRACK"
                  }), (0, h.Mp)(a)
                },
                id: x
              }), H()]
            }), (0, r.jsx)(y.A, {
              user: t,
              activity: a,
              className: N.jp
            }), Y(), j === C.d.MODAL_V2 && W()]
          }), j === C.d.MODAL && W()]
        })
      }), j !== C.d.MODAL && j !== C.d.MODAL_V2 && W()]
    })
  })
}