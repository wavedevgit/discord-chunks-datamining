/** Chunk was on web.js **/
/** chunk id: 128277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk503438 = require("./503438.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk379357 = require("./379357.js"),
  Chunk358696 = require("./358696.jsx"),
  Chunk649700 = require("./649700.js"),
  Chunk313201 = require("./313201.js"),
  Chunk952164 = require("./952164.js"),
  Chunk960870 = require("./960870.js"),
  Chunk139793 = require("./139793.js"),
  Chunk994746 = require("./994746.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk448980 = require("./448980.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk373826 = require("./373826.jsx"),
  Chunk262210 = require("./262210.jsx"),
  Chunk666984 = require("./666984.jsx"),
  Chunk670451 = require("./670451.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk704543 = require("./704543.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
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

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    user: t,
    currentUser: n,
    activity: a,
    className: R,
    onClose: D
  } = e, x = (0, p.Dt)(), L = (0, p.Dt)(), {
    themeType: M
  } = (0, b.z)(), k = (0, _.Z)({
    activity: a,
    user: t
  }), j = (0, E.Z)(a), U = null != j.text && "" !== j.text, {
    largeImage: G
  } = (0, d.FO)(a), {
    analyticsLocations: B
  } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), Z = (0, m.Z)({
    display: "live",
    user: t,
    activity: a,
    entry: k,
    analyticsLocations: B
  }), F = (0, g.Z)({
    userId: t.id,
    onAction: Z
  });
  if (!(0, l.Z)(a)) return null;
  let V = () => {
      var e, n;
      let l = null != (n = null == (e = a.state) ? true : e.split("; ")) ? n : [];
      return 0 === l.length ? null : null == a.sync_id ? (0, r.jsx)(I.Z, {
        variant: "text-xs/normal",
        text: l.join(", ")
      }) : (0, r.jsx)(I.Z, {
        variant: "text-xs/normal",
        text: l.map((e, n) => (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(s.P3F, {
            className: o()(N.clickableText, N.inline),
            onClick: e => {
              e.stopPropagation(), Z({
                action: "OPEN_SPOTIFY_ARTIST"
              }), (0, h.d$)(a, t.id, n)
            },
            children: e
          }), n < l.length - 1 ? ", " : ""]
        }, n))
      })
    },
    H = () => {
      let {
        timestamps: e
      } = a;
      if (null == e) return null;
      let {
        start: t,
        end: n
      } = e;
      return null == t || null == n ? null : (0, r.jsx)(T.Z, {
        start: t,
        end: n
      })
    },
    Y = () => t.id === n.id ? null : (0, r.jsx)("div", {
      className: N.actions,
      children: (0, r.jsx)(S.Z, {
        user: t,
        activity: a,
        onAction: Z
      })
    });
  return (0, r.jsx)(u.Gt, {
    value: B,
    children: (0, r.jsxs)(O.Z, {
      ref: F,
      className: o()(N.card, R),
      onAction: Z,
      onClose: D,
      "aria-labelledby": U ? "".concat(L, " ").concat(x) : x,
      children: [(0, r.jsx)(v.Z, w(P({
        textId: L
      }, j), {
        contextMenu: (0, r.jsx)(A.Z, {
          display: "live",
          user: t,
          activity: a,
          entry: k,
          onClose: D
        })
      })), (0, r.jsx)("div", {
        className: N.body,
        children: (0, r.jsxs)("div", {
          className: N.content,
          children: [(0, r.jsx)(f.E, {
            image: G,
            size: M === C.l.MODAL_V2 ? f.J.SIZE_100 : f.J.SIZE_60,
            className: N.clickableImage,
            onClick: e => {
              e.stopPropagation(), Z({
                action: "OPEN_SPOTIFY_ALBUM"
              }), (0, h.Z5)(a, t.id)
            }
          }), (0, r.jsxs)("div", {
            className: N.details,
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)(I.f, {
                variant: "heading-sm/semibold",
                text: a.details,
                onClick: () => {
                  Z({
                    action: "OPEN_SPOTIFY_TRACK"
                  }), (0, h.aG)(a)
                },
                id: x
              }), V()]
            }), (0, r.jsx)(y.Z, {
              user: t,
              activity: a,
              className: N.badges
            }), H(), M === C.l.MODAL_V2 && Y()]
          }), M === C.l.MODAL && Y()]
        })
      }), M !== C.l.MODAL && M !== C.l.MODAL_V2 && Y()]
    })
  })
}