/** Chunk was on web.js **/
/** chunk id: 179118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk223143 = require("./223143.js"),
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
  Chunk527866 = require("./527866.js");
let k = 1500;

function U(e) {
  let {
    giftCode: t,
    application: n,
    sku: a,
    subscriptionPlan: s,
    selectedGiftStyle: l,
    onClose: u,
    hasSentMessage: d,
    giftRecipient: _,
    giftMessageError: m,
    isSendingMessage: b
  } = e, [v, S] = i.useState(p.kO8.Modes.DEFAULT), T = (0, c.e7)([C.Z], () => C.Z.enabled), A = d || null != l && null != _, U = (null == a ? true : a.productLine) === x.POd.COLLECTIBLES, Z = (0, y.Z)(), {
    selectedGiftingPromotionReward: F
  } = (0, D.wD)(), B = null == Z ? true : Z.giftPurchaseConfirmation, V = (0, g.QJ)(null == F ? true : F.skuId), H = (0, O.a5)(s) && null != V && null != B, Y = () => null != s ? s.skuId : null != a ? a.id : null, W = () => {
    let e;
    return null != m ? j.intl.string(j.t.qB8aya) : null == s ? null : (e = s.interval === L.rV.MONTH ? A ? H ? B.monthGiftText : j.t["4ZJ+7Z"] : j.t["P+z55d"] : A ? H ? B.yearGiftText : j.t.p0pZXP : j.t.bXqk3o, j.intl.format(e, {
      skuName: (0, R.MF)(s.id),
      intervalCount: s.intervalCount
    }))
  }, K = () => null != _ || d && null == m ? j.intl.string(j.t.zOmK9N) : null != m ? j.intl.string(j.t.d1lrmU) : j.intl.string(j.t["/s1xR7"]), z = (e, t) => {
    null != a && (0, P.dM)(new I.Z({
      code: t,
      maxUses: 1
    }), a), (0, N.JG)(e, () => S(p.kO8.Modes.SUCCESS), () => S(p.kO8.Modes.ERROR)), setTimeout(() => {
      S(p.kO8.Modes.DEFAULT)
    }, k)
  }, q = () => {
    let e;
    if (null == t) return null;
    switch (v) {
      case p.kO8.Modes.SUCCESS:
        e = j.intl.string(j.t.XVvPjU);
        break;
      case p.kO8.Modes.ERROR:
        e = j.intl.string(j.t.i4GM3L);
        break;
      default:
        e = j.intl.string(j.t.OpuAlK)
    }
    return (0, r.jsxs)("div", {
      className: M.giftCodeSection,
      children: [null != t && (0, r.jsx)(p.gNt, {
        label: j.intl.string(j.t["/dG4NA"]),
        children: (0, r.jsx)(p.kO8, {
          hideMessage: T ? j.intl.string(j.t["0RLn47"]) : null,
          value: (0, P.Nz)(t),
          mode: v,
          text: e,
          onCopy: e => z(e, t),
          supportsCopy: N.wS,
          className: M.__invalid_copyInput,
          buttonColor: f.Tt.LINK,
          buttonLook: f.iL.LINK
        })
      }), (0, r.jsx)("div", {
        className: M.subtext,
        children: j.intl.string(j.t.QWKUpn)
      })]
    })
  }, Q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: M.blurb,
      children: W()
    }), null == m && (0, r.jsx)(G, {
      giftCode: t,
      onClose: u
    }), (0, r.jsx)("div", {
      className: M.divider
    }), q()]
  }), X = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: M.giftRecipientContainer,
      children: [(0, r.jsx)(h.Z, {
        user: _,
        size: p.EFr.SIZE_40
      }), (0, r.jsxs)("div", {
        className: M.giftRecipientTextContainer,
        children: [(0, r.jsx)(p.Heading, {
          variant: "heading-md/semibold",
          children: w.ZP.getName(_)
        }), (0, r.jsxs)("div", {
          className: M.giftRecipientTag,
          children: [" ", w.ZP.getUserTag(_)]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: M.giftSentMessage,
      children: W()
    })]
  });
  return b ? (0, r.jsxs)("div", {
    className: M.confirmation,
    children: [null != n ? (0, r.jsx)(E.Z, {
      game: n,
      className: M.__invalid_icon,
      size: E.A.LARGE,
      skuId: Y()
    }) : null, (0, r.jsx)(p.$jN, {
      type: p.RAz.PULSING_ELLIPSIS
    })]
  }) : (0, r.jsxs)("div", {
    className: o()(M.confirmation, {
      [M.seasonalConfirmationPadding]: H
    }),
    children: [null != n ? (0, r.jsx)(E.Z, {
      game: n,
      className: M.__invalid_icon,
      size: E.A.LARGE,
      skuId: Y()
    }) : null, (0, r.jsx)(p.Heading, {
      variant: "heading-lg/semibold",
      className: o()({
        [M.header]: null == l && !U,
        [M.headerCustomGifting]: null != l && !U
      }),
      children: K()
    }), d && null != _ && null == m || A ? X() : Q()]
  })
}
let G = e => {
  let {
    giftCode: t,
    onClose: n
  } = e;
  i.useEffect(() => {
    m.Z.fetchRelationships(), (0, v._)()
  }, []);
  let [a, o] = i.useState(), [s, f] = i.useState(false), [g, E] = i.useState(false), {
    userAffinities: y,
    isLoading: O
  } = (0, c.cj)([S.Z], () => ({
    userAffinities: S.Z.getUserAffinitiesMap(),
    isLoading: S.Z.isFetching()
  })), I = Array.from(y.keys()).sort((e, t) => S.Z.compare(e, t)), C = (0, c.e7)([T.Z], () => T.Z.getFriendIDs()), N = l().difference(C, I), P = [...I, ...N], R = (0, c.e7)([A.default], () => A.default.filter(e => P.includes(e.id) && !e.bot), [P]);
  if (null == R || 0 === R.length) return null;
  let D = l().sortBy(R, e => P.indexOf(e.id));
  return (0, r.jsxs)("div", {
    className: M.giftRecipientSection,
    children: [(0, r.jsxs)("div", {
      className: M.giftRecipient,
      children: [(0, r.jsx)(u.d, {
        label: j.intl.string(j.t.MJw05f),
        placeholder: j.intl.string(j.t.J019jZ),
        wrapperClassName: M.giftRecipientInputWrapper,
        className: s ? M.giftRecipientInputError : true,
        renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(h.Z, {
          user: e.value,
          size: p.EFr.SIZE_20
        }),
        renderLeading: () => O ? (0, r.jsx)(p.$jN, {
          type: p.RAz.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          o(e), f(false)
        },
        options: D.map(e => ({
          value: e,
          label: "".concat(w.ZP.getUserTag(e))
        }))
      }), (0, r.jsx)("div", {
        className: M.giftRecipientButton,
        children: (0, r.jsx)(d.zxk, {
          disabled: null == a,
          loading: g,
          onClick: () => {
            E(true), (0, b.YD)(a, t).then(() => {
              n(), (0, _.Ou)()
            }).catch(() => {
              f(true), E(false)
            })
          },
          text: j.intl.string(j.t["+EgwQn"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: s ? M.subtextError : M.subtext,
      children: s ? j.intl.string(j.t.jo5Vbl) : j.intl.string(j.t["8/N3v3"])
    })]
  })
}