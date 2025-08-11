/** Chunk was on web.js **/
/** chunk id: 263059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk273284 = require("./273284.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk287954 = require("./287954.jsx"),
  Chunk660579 = require("./660579.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk64621 = require("./64621.jsx"),
  Chunk448980 = require("./448980.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk373826 = require("./373826.jsx"),
  Chunk262210 = require("./262210.jsx"),
  Chunk666984 = require("./666984.jsx"),
  Chunk386019 = require("./386019.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk227832 = require("./227832.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function k(e) {
  var t;
  let {
    user: n,
    currentUser: o,
    activity: x,
    profileGuildId: k,
    className: j,
    onClose: U
  } = e, G = (0, p.Dt)(), B = (0, p.Dt)(), Z = i.useRef(null), {
    themeType: F
  } = (0, I.z)(), {
    interactionSource: V,
    interactionSourceId: H
  } = (0, y.Xo)(), Y = (0, _.Z)({
    activity: x,
    user: n
  }), W = (0, E.Z)(x), K = null != W.text && "" !== W.text, {
    largeImage: z
  } = (0, d.FO)(x), {
    analyticsLocations: q
  } = (0, u.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), X = (0, m.Z)({
    display: "live",
    user: n,
    activity: x,
    entry: Y,
    analyticsLocations: q
  }), Q = (0, g.Z)({
    userId: n.id,
    onAction: X
  });
  if (!(0, l.Z)(x)) return null;
  let J = () => {
      var e, t;
      let o = null != (t = null == (e = x.state) ? true : e.split(";")) ? t : [];
      return 0 === o.length ? null : null == x.sync_id ? (0, r.jsx)(C.Z, {
        variant: "text-xs/normal",
        text: o.join(", ")
      }) : (0, r.jsx)(C.Z, {
        variant: "text-xs/normal",
        text: o.map((e, t) => (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(s.P3F, {
            className: a()(L.clickableText, L.inline),
            onClick: e => {
              e.stopPropagation(), X({
                action: "OPEN_SPOTIFY_ARTIST"
              }), (0, h.d$)(x, n.id, t)
            },
            children: e
          }), t < o.length - 1 ? ", " : ""]
        }, t))
      })
    },
    $ = () => {
      let {
        timestamps: e
      } = x;
      if (null == e) return null;
      let {
        start: t,
        end: n
      } = e;
      return null == t || null == n ? null : (0, r.jsx)(R.Z, {
        start: t,
        end: n
      })
    },
    ee = () => n.id === o.id ? null : (0, r.jsx)("div", {
      className: L.actions,
      children: (0, r.jsx)(P.Z, {
        user: n,
        activity: x,
        onAction: X
      })
    });
  if (null === F) return null;
  let et = null != (t = x.application_id) ? t : x.name,
    en = V === D.n_.ACTIVITY && H === et;
  return (0, r.jsx)(u.Gt, {
    value: q,
    children: (0, r.jsx)(T.Z, {
      targetElementRef: Z,
      sourceType: D.n_.ACTIVITY,
      user: n,
      children: (0, r.jsx)(O.Z, {
        user: n,
        guildId: k,
        themeType: F,
        sourceId: et,
        sourceDetails: null == Y ? (0, b.Z)(x) : null,
        entry: Y,
        sourceType: D.n_.ACTIVITY,
        onAction: X,
        children: () => (0, r.jsx)(v.Z, {
          ref: Z,
          user: n,
          className: L.toolbarContainer,
          sourceType: D.n_.ACTIVITY,
          interactionSourceId: et,
          onAction: X,
          onShowToolbar: () => X({
            action: "HOVER_ACTIVITY_CARD"
          }),
          renderMoreButtonPopout: e => (0, r.jsx)(w.Z, {
            display: "live",
            user: n,
            activity: x,
            entry: Y,
            onClose: U,
            children: e
          }),
          children: (0, r.jsxs)(A.Z, {
            ref: Q,
            className: a()(j, {
              [L.hoisted]: en
            }),
            onAction: X,
            onClose: U,
            "aria-labelledby": K ? "".concat(B, " ").concat(G) : G,
            children: [(0, r.jsx)(N.Z, M({
              textId: B
            }, W)), (0, r.jsx)("div", {
              className: L.body,
              children: (0, r.jsxs)("div", {
                className: L.content,
                children: [(0, r.jsx)(f.E, {
                  image: z,
                  size: F === D.lY.MODAL_V2 ? f.J.SIZE_100 : f.J.SIZE_60,
                  className: L.clickableImage,
                  onClick: e => {
                    e.stopPropagation(), X({
                      action: "OPEN_SPOTIFY_ALBUM"
                    }), (0, h.Z5)(x, n.id)
                  }
                }), (0, r.jsxs)("div", {
                  className: L.details,
                  children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsx)(C.f, {
                      variant: "heading-sm/semibold",
                      text: x.details,
                      onClick: () => {
                        X({
                          action: "OPEN_SPOTIFY_TRACK"
                        }), (0, h.aG)(x)
                      },
                      id: G
                    }), J()]
                  }), (0, r.jsx)(S.Z, {
                    user: n,
                    activity: x,
                    className: L.badges
                  }), $(), F === D.lY.MODAL_V2 && ee()]
                }), F === D.lY.MODAL && ee()]
              })
            }), F !== D.lY.MODAL && F !== D.lY.MODAL_V2 && ee()]
          })
        })
      })
    })
  })
}