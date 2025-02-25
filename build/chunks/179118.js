/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => M
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  l = n.n(s),
  c = n(442837),
  u = n(481060),
  d = n(37234),
  f = n(194359),
  _ = n(700582),
  p = n(925329),
  h = n(479446),
  g = n(522489),
  m = n(717401),
  E = n(286961),
  v = n(93127),
  b = n(814443),
  y = n(590783),
  O = n(699516),
  S = n(246946),
  I = n(594174),
  T = n(572004),
  N = n(669079),
  A = n(74538),
  C = n(51144),
  R = n(987209),
  P = n(981631),
  D = n(474936),
  w = n(388032),
  L = n(183706);
let x = 1500;

function M(e) {
  let {
    giftCode: t,
    application: n,
    sku: o,
    subscriptionPlan: s,
    selectedGiftStyle: l,
    onClose: d,
    hasSentMessage: f,
    giftRecipient: h,
    giftMessageError: v,
    isSendingMessage: b
  } = e, [O, I] = i.useState(u.kO8.Modes.DEFAULT), M = (0, c.e7)([S.Z], () => S.Z.enabled), k = f || null != l && null != h, U = (null == o ? void 0 : o.productLine) === P.POd.COLLECTIBLES, G = (0, E.Z)(), {
    selectedGiftingPromotionReward: B
  } = (0, R.wD)(), F = null == G ? void 0 : G.giftPurchaseConfirmation, V = (0, m.tK)(null == B ? void 0 : B.skuId), Z = (0, m.a5)(s) && null != V && null != F, H = () => null != s ? s.skuId : null != o ? o.id : null, W = () => {
    let e;
    return null != v ? w.NW.string(w.t.qB8ayc) : null == s ? null : (e = s.interval === D.rV.MONTH ? k ? Z ? F.monthGiftText : w.t["4ZJ+7e"] : w.t["P+z55e"] : k ? Z ? F.yearGiftText : w.t.p0pZXF : w.t.bXqk3t, w.NW.format(e, {
      skuName: (0, A.aq)(s.id),
      intervalCount: s.intervalCount
    }))
  }, Y = () => null != h || f && null == v ? w.NW.string(w.t.zOmK9P) : null != v ? w.NW.string(w.t.d1lrmZ) : w.NW.string(w.t["/s1xR0"]), K = (e, t) => {
    null != o && (0, N.dM)(new y.Z({
      code: t,
      maxUses: 1
    }), o);
    try {
      (0, T.JG)(e), I(u.kO8.Modes.SUCCESS)
    } catch (e) {
      I(u.kO8.Modes.ERROR)
    }
    setTimeout(() => {
      I(u.kO8.Modes.DEFAULT)
    }, x)
  }, z = () => {
    let e;
    if (null == t) return null;
    switch (O) {
      case u.kO8.Modes.SUCCESS:
        e = w.NW.string(w.t.XVvPjY);
        break;
      case u.kO8.Modes.ERROR:
        e = w.NW.string(w.t.i4GM3N);
        break;
      default:
        e = w.NW.string(w.t.OpuAlJ)
    }
    return (0, r.jsxs)("div", {
      className: L.giftCodeSection,
      children: [(0, r.jsx)(u.vwX, {
        children: w.NW.string(w.t["/dG4ND"])
      }), null != t && (0, r.jsx)(u.kO8, {
        hideMessage: M ? w.NW.string(w.t["0RLn4+"]) : null,
        value: (0, N.Nz)(t),
        mode: O,
        text: e,
        onCopy: e => K(e, t),
        supportsCopy: T.wS,
        className: L.__invalid_copyInput,
        buttonColor: u.Ttl.LINK,
        buttonLook: u.iLD.LINK
      }), (0, r.jsx)("div", {
        className: L.subtext,
        children: w.NW.string(w.t.QWKUpq)
      })]
    })
  }, q = () => {
    let e = (0, N.MY)(h, U),
      {
        removeGiftRecipientUI: n
      } = g.m.getCurrentConfig({
        location: "GiftPurchaseConfirmation"
      }, {
        autoTrackExposure: !1,
        disable: __BILLING_STANDALONE__ || e !== N.xr.CUSTOM_STYLE
      }),
      i = !n && null == v;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: L.blurb,
        children: W()
      }), i && (0, r.jsx)(j, {
        giftCode: t,
        onClose: d
      }), (0, r.jsx)("div", {
        className: L.divider
      }), z()]
    })
  }, Q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.Z, {
      user: h,
      className: L.giftRecipient,
      size: u.EFr.SIZE_80
    }), (0, r.jsx)(u.X6q, {
      className: L.giftRecipientName,
      variant: "heading-md/semibold",
      children: C.ZP.getName(h)
    }), (0, r.jsxs)("div", {
      className: L.giftRecipientTag,
      children: [" ", C.ZP.getUserTag(h)]
    }), (0, r.jsx)("div", {
      className: L.giftSentMessage,
      children: W()
    })]
  });
  return b ? (0, r.jsxs)("div", {
    className: L.confirmation,
    children: [null != n ? (0, r.jsx)(p.Z, {
      game: n,
      className: L.__invalid_icon,
      size: p.Z.Sizes.LARGE,
      skuId: H()
    }) : null, (0, r.jsx)(u.$jN, {
      type: u.RAz.PULSING_ELLIPSIS
    })]
  }) : (0, r.jsxs)("div", {
    className: a()(L.confirmation, {
      [L.seasonalConfirmationPadding]: Z
    }),
    children: [null != n ? (0, r.jsx)(p.Z, {
      game: n,
      className: L.__invalid_icon,
      size: p.Z.Sizes.LARGE,
      skuId: H()
    }) : null, (0, r.jsx)(u.X6q, {
      variant: "heading-lg/semibold",
      className: a()({
        [L.header]: null == l && !U,
        [L.headerCustomGifting]: null != l && !U
      }),
      children: Y()
    }), f && null != h && null == v || k ? Q() : q()]
  })
}
let j = e => {
  let {
    giftCode: t,
    onClose: n
  } = e;
  i.useEffect(() => {
    f.Z.fetchRelationships(), (0, v.W)()
  }, []);
  let [o, a] = i.useState(), [s, p] = i.useState(!1), [g, m] = i.useState(!1), {
    userAffinities: E,
    isLoading: y
  } = (0, c.cj)([b.Z], () => ({
    userAffinities: b.Z.getUserAffinitiesUserIds(),
    isLoading: b.Z.getFetching()
  })), S = Array.from(E.values()), T = (0, c.e7)([O.Z], () => O.Z.getFriendIDs()), N = l().difference(T, S), A = [...S, ...N], R = (0, c.e7)([I.default], () => I.default.filter(e => A.includes(e.id) && !e.bot), [A]);
  if (null == R || 0 === R.length) return null;
  let P = l().sortBy(R, e => A.indexOf(e.id));
  return (0, r.jsxs)("div", {
    className: L.giftRecipientSection,
    children: [(0, r.jsx)(u.vwX, {
      children: w.NW.string(w.t.MJw05e)
    }), (0, r.jsxs)("div", {
      className: L.giftRecipient,
      children: [(0, r.jsx)(u.VcW, {
        placeholder: w.NW.string(w.t.J019jY),
        wrapperClassName: L.giftRecipientInputWrapper,
        className: s ? L.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, r.jsx)(_.Z, {
          user: e.value,
          size: u.EFr.SIZE_20
        }),
        renderLeading: () => y ? (0, r.jsx)(u.$jN, {
          type: u.RAz.PULSING_ELLIPSIS
        }) : null,
        value: o,
        onChange: e => {
          a(e), p(!1)
        },
        options: P.map(e => ({
          value: e,
          label: "".concat(C.ZP.getUserTag(e))
        }))
      }), (0, r.jsx)(u.zxk, {
        disabled: null == o,
        submitting: g,
        className: L.sendToRecipientButton,
        onClick: () => {
          m(!0), (0, h.YD)(o, t).then(() => {
            n(), (0, d.Ou)()
          }).catch(() => {
            p(!0), m(!1)
          })
        },
        children: w.NW.string(w.t["+EgwQk"])
      })]
    }), (0, r.jsx)("div", {
      className: s ? L.subtextError : L.subtext,
      children: s ? w.NW.string(w.t.jo5Vbm) : w.NW.string(w.t["8/N3v7"])
    })]
  })
}