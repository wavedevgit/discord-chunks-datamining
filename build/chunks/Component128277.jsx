/** Chunk was on web.js **/
/** chunk id: 128277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    user: t,
    currentUser: n,
    activity: o,
    className: P,
    onClose: w
  } = e, x = (0, _.Dt)(), L = (0, _.Dt)(), {
    themeType: j
  } = (0, b.z)(), M = (0, p.Z)({
    activity: o,
    user: t
  }), k = (0, E.Z)(o), U = null != k.text && "" !== k.text, {
    largeImage: G
  } = (0, d.FO)(o), {
    analyticsLocations: Z
  } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), F = (0, h.Z)({
    display: "live",
    user: t,
    activity: o,
    entry: M,
    analyticsLocations: Z
  }), B = (0, g.Z)({
    userId: t.id,
    onAction: F
  });
  if (!(0, l.Z)(o)) return null;
  let V = () => {
      var e, n;
      let l = null != (n = null == (e = o.state) ? true : e.split("; ")) ? n : [];
      return 0 === l.length ? null : null == o.sync_id ? (0, r.jsx)(S.Z, {
        variant: "text-xs/normal",
        text: l.join(", ")
      }) : (0, r.jsx)(S.Z, {
        variant: "text-xs/normal",
        text: l.map((e, n) => (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(s.P3F, {
            className: a()(N.clickableText, N.inline),
            onClick: e => {
              e.stopPropagation(), F({
                action: "OPEN_SPOTIFY_ARTIST"
              }), (0, m.d$)(o, t.id, n)
            },
            children: e
          }), n < l.length - 1 ? ", " : ""]
        }, n))
      })
    },
    H = () => {
      let {
        timestamps: e
      } = o;
      if (null == e) return null;
      let {
        start: t,
        end: n
      } = e;
      return null == t || null == n ? null : (0, r.jsx)(I.Z, {
        start: t,
        end: n
      })
    },
    Y = () => t.id === n.id ? null : (0, r.jsx)("div", {
      className: N.actions,
      children: (0, r.jsx)(T.Z, {
        user: t,
        activity: o,
        onAction: F
      })
    });
  return (0, r.jsx)(u.Gt, {
    value: Z,
    children: (0, r.jsxs)(O.Z, {
      ref: B,
      className: a()(N.card, P),
      onAction: F,
      onClose: w,
      "aria-labelledby": U ? "".concat(L, " ").concat(x) : x,
      children: [(0, r.jsx)(v.Z, D(R({
        textId: L
      }, k), {
        contextMenu: (0, r.jsx)(C.Z, {
          display: "live",
          user: t,
          activity: o,
          entry: M,
          onClose: w
        })
      })), (0, r.jsx)("div", {
        className: N.body,
        children: (0, r.jsxs)("div", {
          className: N.content,
          children: [(0, r.jsx)(f.E, {
            image: G,
            size: j === A.l.MODAL_V2 ? f.J.SIZE_100 : f.J.SIZE_60,
            className: N.clickableImage,
            onClick: e => {
              e.stopPropagation(), F({
                action: "OPEN_SPOTIFY_ALBUM"
              }), (0, m.Z5)(o, t.id)
            }
          }), (0, r.jsxs)("div", {
            className: N.details,
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)(S.f, {
                variant: "heading-sm/semibold",
                text: o.details,
                onClick: () => {
                  F({
                    action: "OPEN_SPOTIFY_TRACK"
                  }), (0, m.aG)(o)
                },
                id: x
              }), V()]
            }), (0, r.jsx)(y.Z, {
              user: t,
              activity: o,
              className: N.badges
            }), H(), j === A.l.MODAL_V2 && Y()]
          }), j === A.l.MODAL && Y()]
        })
      }), j !== A.l.MODAL && j !== A.l.MODAL_V2 && Y()]
    })
  })
}