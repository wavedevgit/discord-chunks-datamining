/** Chunk was on web.js **/
/** chunk id: 179118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk194359 = require("./194359.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk93127 = require("./93127.js"),
  Chunk752048 = require("./752048.js"),
  Chunk590783 = require("./590783.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk51144 = require("./51144.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk769212 = require("./769212.js");
let M = 1500;

function j(e) {
  let {
    giftCode: t,
    application: n,
    sku: a,
    subscriptionPlan: s,
    selectedGiftStyle: l,
    onClose: u,
    hasSentMessage: _,
    giftRecipient: p,
    giftMessageError: g,
    isSendingMessage: y
  } = e, [O, I] = i.useState(f.kO8.Modes.DEFAULT), S = (0, c.e7)([T.Z], () => T.Z.enabled), j = _ || null != l && null != p, U = (null == a ? true : a.productLine) === D.POd.COLLECTIBLES, G = (0, E.Z)(), {
    selectedGiftingPromotionReward: B
  } = (0, P.wD)(), Z = null == G ? true : G.giftPurchaseConfirmation, F = (0, b.tK)(null == B ? true : B.skuId), V = (0, b.a5)(s) && null != F && null != Z, H = () => null != s ? s.skuId : null != a ? a.id : null, Y = () => {
    let e;
    return null != g ? x.intl.string(x.t.qB8aya) : null == s ? null : (e = s.interval === w.rV.MONTH ? j ? V ? Z.monthGiftText : x.t["4ZJ+7Z"] : x.t["P+z55d"] : j ? V ? Z.yearGiftText : x.t.p0pZXP : x.t.bXqk3o, x.intl.format(e, {
      skuName: (0, N.aq)(s.id),
      intervalCount: s.intervalCount
    }))
  }, W = () => null != p || _ && null == g ? x.intl.string(x.t.zOmK9N) : null != g ? x.intl.string(x.t.d1lrmU) : x.intl.string(x.t["/s1xR7"]), K = (e, t) => {
    null != a && (0, C.dM)(new v.Z({
      code: t,
      maxUses: 1
    }), a), (0, A.JG)(e, () => I(f.kO8.Modes.SUCCESS), () => I(f.kO8.Modes.ERROR)), setTimeout(() => {
      I(f.kO8.Modes.DEFAULT)
    }, M)
  }, z = () => {
    let e;
    if (null == t) return null;
    switch (O) {
      case f.kO8.Modes.SUCCESS:
        e = x.intl.string(x.t.XVvPjU);
        break;
      case f.kO8.Modes.ERROR:
        e = x.intl.string(x.t.i4GM3L);
        break;
      default:
        e = x.intl.string(x.t.OpuAlK)
    }
    return (0, r.jsxs)("div", {
      className: L.giftCodeSection,
      children: [null != t && (0, r.jsx)(f.gNt, {
        label: x.intl.string(x.t["/dG4NA"]),
        children: (0, r.jsx)(f.kO8, {
          hideMessage: S ? x.intl.string(x.t["0RLn47"]) : null,
          value: (0, C.Nz)(t),
          mode: O,
          text: e,
          onCopy: e => K(e, t),
          supportsCopy: A.wS,
          className: L.__invalid_copyInput,
          buttonColor: d.Tt.LINK,
          buttonLook: d.iL.LINK
        })
      }), (0, r.jsx)("div", {
        className: L.subtext,
        children: x.intl.string(x.t.QWKUpn)
      })]
    })
  }, q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: L.blurb,
      children: Y()
    }), null == g && (0, r.jsx)(k, {
      giftCode: t,
      onClose: u
    }), (0, r.jsx)("div", {
      className: L.divider
    }), z()]
  }), X = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: L.giftRecipientContainer,
      children: [(0, r.jsx)(h.Z, {
        user: p,
        size: f.EFr.SIZE_40
      }), (0, r.jsxs)("div", {
        className: L.giftRecipientTextContainer,
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-md/semibold",
          children: R.ZP.getName(p)
        }), (0, r.jsxs)("div", {
          className: L.giftRecipientTag,
          children: [" ", R.ZP.getUserTag(p)]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: L.giftSentMessage,
      children: Y()
    })]
  });
  return y ? (0, r.jsxs)("div", {
    className: L.confirmation,
    children: [null != n ? (0, r.jsx)(m.Z, {
      game: n,
      className: L.__invalid_icon,
      size: m.A.LARGE,
      skuId: H()
    }) : null, (0, r.jsx)(f.$jN, {
      type: f.RAz.PULSING_ELLIPSIS
    })]
  }) : (0, r.jsxs)("div", {
    className: o()(L.confirmation, {
      [L.seasonalConfirmationPadding]: V
    }),
    children: [null != n ? (0, r.jsx)(m.Z, {
      game: n,
      className: L.__invalid_icon,
      size: m.A.LARGE,
      skuId: H()
    }) : null, (0, r.jsx)(f.Heading, {
      variant: "heading-lg/semibold",
      className: o()({
        [L.header]: null == l && !U,
        [L.headerCustomGifting]: null != l && !U
      }),
      children: W()
    }), _ && null != p && null == g || j ? X() : q()]
  })
}
let k = e => {
  let {
    giftCode: t,
    onClose: n
  } = e;
  i.useEffect(() => {
    p.Z.fetchRelationships(), (0, y._)()
  }, []);
  let [a, o] = i.useState(), [s, d] = i.useState(false), [m, E] = i.useState(false), {
    userAffinities: b,
    isLoading: v
  } = (0, c.cj)([O.Z], () => ({
    userAffinities: O.Z.getUserAffinitiesMap(),
    isLoading: O.Z.isFetching()
  })), T = Array.from(b.keys()).sort((e, t) => O.Z.compare(e, t)), A = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()), C = l().difference(A, T), N = [...T, ...C], P = (0, c.e7)([S.default], () => S.default.filter(e => N.includes(e.id) && !e.bot), [N]);
  if (null == P || 0 === P.length) return null;
  let D = l().sortBy(P, e => N.indexOf(e.id));
  return (0, r.jsxs)("div", {
    className: L.giftRecipientSection,
    children: [(0, r.jsxs)("div", {
      className: L.giftRecipient,
      children: [(0, r.jsx)(f.VcW, {
        label: x.intl.string(x.t.MJw05f),
        placeholder: x.intl.string(x.t.J019jZ),
        wrapperClassName: L.giftRecipientInputWrapper,
        className: s ? L.giftRecipientInputError : true,
        renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(h.Z, {
          user: e.value,
          size: f.EFr.SIZE_20
        }),
        renderLeading: () => v ? (0, r.jsx)(f.$jN, {
          type: f.RAz.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          o(e), d(false)
        },
        options: D.map(e => ({
          value: e,
          label: "".concat(R.ZP.getUserTag(e))
        }))
      }), (0, r.jsx)("div", {
        className: L.giftRecipientButton,
        children: (0, r.jsx)(u.zxk, {
          disabled: null == a,
          loading: m,
          onClick: () => {
            E(true), (0, g.YD)(a, t).then(() => {
              n(), (0, _.Ou)()
            }).catch(() => {
              d(true), E(false)
            })
          },
          text: x.intl.string(x.t["+EgwQn"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: s ? L.subtextError : L.subtext,
      children: s ? x.intl.string(x.t.jo5Vbl) : x.intl.string(x.t["8/N3v3"])
    })]
  })
}