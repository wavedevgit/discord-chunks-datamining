/** Chunk was on web.js **/
/** chunk id: 482246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
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
  Chunk927578 = require("./927578.js"),
  Chunk993408 = require("./993408.js"),
  Chunk674658 = require("./674658.js"),
  Chunk645178 = require("./645178.js"),
  Chunk898461 = require("./898461.js"),
  Chunk203632 = require("./203632.js"),
  Chunk14702 = require("./14702.jsx"),
  Chunk219103 = require("./219103.jsx"),
  Chunk525723 = require("./525723.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk245948 = require("./245948.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
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

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = e => {
  var t, n;
  let {
    skuId: a,
    isSelected: o,
    pricePreview: C,
    onSelect: w,
    shouldDisplayHeader: P = false,
    className: D,
    previewHeaderClassName: x,
    hideProfilePreview: L = false,
    fallbackPrice: j
  } = e, {
    product: M
  } = (0, E.q)(a, true), {
    giftRecipient: k,
    giftRecipientError: U
  } = (0, f.Pv)(), G = (0, u.bG)([h.default], () => h.default.getCurrentUser()), V = (0, y.o7)(M), F = i.useRef(null), B = m.Ay.canUseCollectibles(G), H = i.useMemo(() => (0, g.fT)(M, B), [M, B]), Y = (0, I.V_)(M);
  if (null == M) return null;
  let [W] = M.items;
  l()(null != W, "Product item should not be empty");
  let K = () => {
      if ((null == M ? true : M.type) === c.R.BUNDLE) return null;
      switch (W.type) {
        case c.R.AVATAR_DECORATION:
          return S.intl.string(S.t["7v0T9P"]);
        case c.R.PROFILE_EFFECT:
          return S.intl.string(S.t.wR5wOo);
        case c.R.NAMEPLATE:
          return S.intl.string(S.t.x5CoXR);
        default:
          return null
      }
    },
    z = null != k && k.id !== (null == G ? true : G.id) && M.type !== c.R.BUNDLE && W.type !== c.R.NAMEPLATE && !L,
    q = () => {
      null != a && null != w && w(a)
    },
    Z = null == C || null == (n = C.invoice_items) || null == (t = n[0]) ? true : t.unit_price;
  return (0, r.jsxs)("div", {
    className: D,
    children: [P && (0, r.jsx)("div", {
      className: s()(T.QU, x),
      children: (0, r.jsx)(d.D0$, {
        label: S.intl.string(S.t.PpoJzt),
        children: z && (0, r.jsx)(d.YNO, {
          targetElementRef: F,
          preload: () => (0, _.A)(k.id, k.getAvatarURL(null, 80)),
          renderPopout: e => (0, r.jsx)(p.A, R(N({}, e), {
            user: k,
            pendingAvatar: k.getAvatarURL(null, (0, d.FT9)(d._3J.SIZE_80)),
            pendingAvatarDecoration: (0, b.T)(W) ? W : null,
            pendingProfileEffect: (0, O.C)(W) ? W : null,
            canUsePremiumCustomization: true,
            disabledInputs: true,
            hideExampleButton: true
          })),
          align: "center",
          position: "right",
          children: e => (0, r.jsx)(d.DUT, R(N({}, e), {
            className: T.Nx,
            innerRef: F,
            children: (0, r.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: S.intl.string(S.t["2GnJQL"])
            })
          }))
        }, k.id)
      })
    }), (0, r.jsxs)(d.DUT, {
      tag: "div",
      onClick: q,
      className: s()(T.i1, {
        [T.no]: o && null == U,
        [T.cN]: o && null != U
      }),
      children: [(0, r.jsxs)("div", {
        className: T.Ug,
        children: [(0, r.jsx)(v.O, {
          product: M,
          fallbackLabel: null
        }), (0, r.jsxs)("div", {
          className: T.JZ,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-md/semibold",
            children: V
          }), (0, r.jsx)(d.Heading, {
            variant: "heading-sm/medium",
            color: "text-default",
            children: K()
          })]
        }), null != C && null != Z ? (0, r.jsx)(A.x, {
          price: {
            amount: Z.amount,
            currency: Z.currency,
            taxInclusive: C.tax_inclusive,
            tax: C.tax,
            exponent: Z.exponent
          },
          discount: H,
          discountOfferAmount: Y,
          variant: "text-md/bold"
        }) : (0, r.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: j
        })]
      }), o && null != U && (0, r.jsx)("div", {
        className: T.Wh,
        children: (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          children: U
        })
      })]
    })]
  })
}