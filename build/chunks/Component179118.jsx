/** Chunk was on web.js **/
/** chunk id: 179118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
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

function k(e) {
  let {
    giftCode: t,
    application: n,
    sku: o,
    subscriptionPlan: s,
    selectedGiftStyle: l,
    onClose: u,
    hasSentMessage: d,
    giftRecipient: _,
    giftMessageError: m,
    isSendingMessage: E
  } = e, [O, v] = i.useState(p.kO8.Modes.DEFAULT), I = (0, c.e7)([T.Z], () => T.Z.enabled), C = d || null != l && null != _, k = (null == o ? true : o.productLine) === D.POd.COLLECTIBLES, G = (0, b.Z)(), {
    selectedGiftingPromotionReward: Z
  } = (0, w.wD)(), F = null == G ? true : G.giftPurchaseConfirmation, B = (0, y.tK)(null == Z ? true : Z.skuId), V = (0, y.a5)(s) && null != B && null != F, H = () => null != s ? s.skuId : null != o ? o.id : null, Y = () => {
    let e;
    return null != m ? L.intl.string(L.t.qB8aya) : null == s ? null : (e = s.interval === x.rV.MONTH ? C ? V ? F.monthGiftText : L.t["4ZJ+7Z"] : L.t["P+z55d"] : C ? V ? F.yearGiftText : L.t.p0pZXP : L.t.bXqk3o, L.intl.format(e, {
      skuName: (0, P.MF)(s.id),
      intervalCount: s.intervalCount
    }))
  }, W = () => null != _ || d && null == m ? L.intl.string(L.t.zOmK9N) : null != m ? L.intl.string(L.t.d1lrmU) : L.intl.string(L.t["/s1xR7"]), K = (e, t) => {
    null != o && (0, N.dM)(new S.Z({
      code: t,
      maxUses: 1
    }), o), (0, A.JG)(e, () => v(p.kO8.Modes.SUCCESS), () => v(p.kO8.Modes.ERROR)), setTimeout(() => {
      v(p.kO8.Modes.DEFAULT)
    }, M)
  }, z = () => {
    let e;
    if (null == t) return null;
    switch (O) {
      case p.kO8.Modes.SUCCESS:
        e = L.intl.string(L.t.XVvPjU);
        break;
      case p.kO8.Modes.ERROR:
        e = L.intl.string(L.t.i4GM3L);
        break;
      default:
        e = L.intl.string(L.t.OpuAlK)
    }
    return (0, r.jsxs)("div", {
      className: j.giftCodeSection,
      children: [null != t && (0, r.jsx)(p.gNt, {
        label: L.intl.string(L.t["/dG4NA"]),
        children: (0, r.jsx)(p.kO8, {
          hideMessage: I ? L.intl.string(L.t["0RLn47"]) : null,
          value: (0, N.Nz)(t),
          mode: O,
          text: e,
          onCopy: e => K(e, t),
          supportsCopy: A.wS,
          className: j.__invalid_copyInput,
          buttonColor: f.Tt.LINK,
          buttonLook: f.iL.LINK
        })
      }), (0, r.jsx)("div", {
        className: j.subtext,
        children: L.intl.string(L.t.QWKUpn)
      })]
    })
  }, q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: j.blurb,
      children: Y()
    }), null == m && (0, r.jsx)(U, {
      giftCode: t,
      onClose: u
    }), (0, r.jsx)("div", {
      className: j.divider
    }), z()]
  }), Q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: j.giftRecipientContainer,
      children: [(0, r.jsx)(h.Z, {
        user: _,
        size: p.EFr.SIZE_40
      }), (0, r.jsxs)("div", {
        className: j.giftRecipientTextContainer,
        children: [(0, r.jsx)(p.Heading, {
          variant: "heading-md/semibold",
          children: R.ZP.getName(_)
        }), (0, r.jsxs)("div", {
          className: j.giftRecipientTag,
          children: [" ", R.ZP.getUserTag(_)]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: j.giftSentMessage,
      children: Y()
    })]
  });
  return E ? (0, r.jsxs)("div", {
    className: j.confirmation,
    children: [null != n ? (0, r.jsx)(g.Z, {
      game: n,
      className: j.__invalid_icon,
      size: g.A.LARGE,
      skuId: H()
    }) : null, (0, r.jsx)(p.$jN, {
      type: p.RAz.PULSING_ELLIPSIS
    })]
  }) : (0, r.jsxs)("div", {
    className: a()(j.confirmation, {
      [j.seasonalConfirmationPadding]: V
    }),
    children: [null != n ? (0, r.jsx)(g.Z, {
      game: n,
      className: j.__invalid_icon,
      size: g.A.LARGE,
      skuId: H()
    }) : null, (0, r.jsx)(p.Heading, {
      variant: "heading-lg/semibold",
      className: a()({
        [j.header]: null == l && !k,
        [j.headerCustomGifting]: null != l && !k
      }),
      children: W()
    }), d && null != _ && null == m || C ? Q() : q()]
  })
}
let U = e => {
  let {
    giftCode: t,
    onClose: n
  } = e;
  i.useEffect(() => {
    m.Z.fetchRelationships(), (0, O._)()
  }, []);
  let [o, a] = i.useState(), [s, f] = i.useState(false), [g, b] = i.useState(false), {
    userAffinities: y,
    isLoading: S
  } = (0, c.cj)([v.Z], () => ({
    userAffinities: v.Z.getUserAffinitiesMap(),
    isLoading: v.Z.isFetching()
  })), T = Array.from(y.keys()).sort((e, t) => v.Z.compare(e, t)), A = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()), N = l().difference(A, T), P = [...T, ...N], w = (0, c.e7)([C.default], () => C.default.filter(e => P.includes(e.id) && !e.bot), [P]);
  if (null == w || 0 === w.length) return null;
  let D = l().sortBy(w, e => P.indexOf(e.id));
  return (0, r.jsxs)("div", {
    className: j.giftRecipientSection,
    children: [(0, r.jsxs)("div", {
      className: j.giftRecipient,
      children: [(0, r.jsx)(u.d, {
        label: L.intl.string(L.t.MJw05f),
        placeholder: L.intl.string(L.t.J019jZ),
        wrapperClassName: j.giftRecipientInputWrapper,
        className: s ? j.giftRecipientInputError : true,
        renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(h.Z, {
          user: e.value,
          size: p.EFr.SIZE_20
        }),
        renderLeading: () => S ? (0, r.jsx)(p.$jN, {
          type: p.RAz.PULSING_ELLIPSIS
        }) : null,
        value: o,
        onChange: e => {
          a(e), f(false)
        },
        options: D.map(e => ({
          value: e,
          label: "".concat(R.ZP.getUserTag(e))
        }))
      }), (0, r.jsx)("div", {
        className: j.giftRecipientButton,
        children: (0, r.jsx)(d.zxk, {
          disabled: null == o,
          loading: g,
          onClick: () => {
            b(true), (0, E.YD)(o, t).then(() => {
              n(), (0, _.Ou)()
            }).catch(() => {
              f(true), b(false)
            })
          },
          text: L.intl.string(L.t["+EgwQn"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: s ? j.subtextError : j.subtext,
      children: s ? L.intl.string(L.t.jo5Vbl) : L.intl.string(L.t["8/N3v3"])
    })]
  })
}