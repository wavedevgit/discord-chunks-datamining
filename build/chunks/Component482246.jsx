/** Chunk was on web.js **/
/** chunk id: 482246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk287070 = require("./287070.jsx"),
  Chunk576622 = require("./576622.js"),
  Chunk287809 = require("./287809.js"),
  Chunk674658 = require("./674658.js"),
  Chunk645178 = require("./645178.js"),
  Chunk898461 = require("./898461.js"),
  Chunk203632 = require("./203632.js"),
  Chunk14702 = require("./14702.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk245948 = require("./245948.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
  let {
    skuId: t,
    isSelected: n,
    price: a,
    onSelect: o,
    shouldDisplayHeader: A = false,
    className: S,
    previewHeaderClassName: C,
    hideProfilePreview: N = false
  } = e, {
    product: w
  } = (0, m.q)(t, true), {
    giftRecipient: R,
    giftRecipientError: P
  } = (0, f.Pv)(), D = (0, u.bG)([h.default], () => h.default.getCurrentUser()), x = (0, g.o7)(w), L = i.useRef(null);
  if (null == w) return null;
  let [j] = w.items;
  l()(null != j, "Product item should not be empty");
  let M = () => {
      if ((null == w ? true : w.type) === c.R.BUNDLE) return null;
      switch (j.type) {
        case c.R.AVATAR_DECORATION:
          return O.intl.string(O.t["7v0T9P"]);
        case c.R.PROFILE_EFFECT:
          return O.intl.string(O.t.wR5wOo);
        case c.R.NAMEPLATE:
          return O.intl.string(O.t.x5CoXR);
        default:
          return null
      }
    },
    k = null != R && R.id !== (null == D ? true : D.id) && w.type !== c.R.BUNDLE && j.type !== c.R.NAMEPLATE && !N,
    U = () => {
      null != t && null != o && o(t)
    };
  return (0, r.jsxs)("div", {
    className: S,
    children: [A && (0, r.jsx)("div", {
      className: s()(v.QU, C),
      children: (0, r.jsx)(d.D0$, {
        label: O.intl.string(O.t.PpoJzt),
        children: k && (0, r.jsx)(d.YNO, {
          targetElementRef: L,
          preload: () => (0, _.A)(R.id, R.getAvatarURL(null, 80)),
          renderPopout: e => (0, r.jsx)(p.A, T(I({}, e), {
            user: R,
            pendingAvatar: R.getAvatarURL(null, (0, d.FT9)(d._3J.SIZE_80)),
            pendingAvatarDecoration: (0, E.T)(j) ? j : null,
            pendingProfileEffect: (0, y.C)(j) ? j : null,
            canUsePremiumCustomization: true,
            disabledInputs: true,
            hideExampleButton: true
          })),
          align: "center",
          position: "right",
          children: e => (0, r.jsx)(d.DUT, T(I({}, e), {
            className: v.Nx,
            innerRef: L,
            children: (0, r.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: O.intl.string(O.t["2GnJQL"])
            })
          }))
        }, R.id)
      })
    }), (0, r.jsxs)(d.DUT, {
      tag: "div",
      onClick: U,
      className: s()(v.i1, {
        [v.no]: n && null == P,
        [v.cN]: n && null != P
      }),
      children: [(0, r.jsxs)("div", {
        className: v.Ug,
        children: [(0, r.jsx)(b.O, {
          product: w,
          fallbackLabel: null
        }), (0, r.jsxs)("div", {
          className: v.JZ,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-md/semibold",
            children: x
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-sm/medium",
            color: "text-default",
            children: M()
          })]
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: a
        })]
      }), n && null != P && (0, r.jsx)("div", {
        className: v.Wh,
        children: (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          children: P
        })
      })]
    })]
  })
}