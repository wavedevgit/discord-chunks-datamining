/** Chunk was on web.js **/
/** chunk id: 179118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let M = 1500;

function k(e) {
  let {
    giftCode: t,
    application: n,
    sku: a,
    subscriptionPlan: s,
    selectedGiftStyle: l,
    onClose: u,
    hasSentMessage: p,
    giftRecipient: _,
    giftMessageError: E,
    isSendingMessage: O
  } = e, [v, I] = i.useState(f.kO8.Modes.DEFAULT), C = (0, c.e7)([T.Z], () => T.Z.enabled), k = p || null != l && null != _, G = (null == a ? true : a.productLine) === D.POd.COLLECTIBLES, Z = (0, b.Z)(), {
    selectedGiftingPromotionReward: F
  } = (0, R.wD)(), B = null == Z ? true : Z.giftPurchaseConfirmation, V = (0, m.QJ)(null == F ? true : F.skuId), H = (0, y.a5)(s) && null != V && null != B, Y = () => null != s ? s.skuId : null != a ? a.id : null, W = () => {
    let e;
    return null != E ? L.intl.string(L.t.qB8aya) : null == s ? null : (e = s.interval === x.rV.MONTH ? k ? H ? B.monthGiftText : L.t["4ZJ+7Z"] : L.t["P+z55d"] : k ? H ? B.yearGiftText : L.t.p0pZXP : L.t.bXqk3o, L.intl.format(e, {
      skuName: (0, P.MF)(s.id),
      intervalCount: s.intervalCount
    }))
  }, K = () => null != _ || p && null == E ? L.intl.string(L.t.zOmK9N) : null != E ? L.intl.string(L.t.d1lrmU) : L.intl.string(L.t["/s1xR7"]), z = (e, t) => {
    null != a && (0, N.dM)(new S.Z({
      code: t,
      maxUses: 1
    }), a), (0, A.JG)(e, () => I(f.kO8.Modes.SUCCESS), () => I(f.kO8.Modes.ERROR)), setTimeout(() => {
      I(f.kO8.Modes.DEFAULT)
    }, M)
  }, q = () => {
    let e;
    if (null == t) return null;
    switch (v) {
      case f.kO8.Modes.SUCCESS:
        e = L.intl.string(L.t.XVvPjU);
        break;
      case f.kO8.Modes.ERROR:
        e = L.intl.string(L.t.i4GM3L);
        break;
      default:
        e = L.intl.string(L.t.OpuAlK)
    }
    return (0, r.jsxs)("div", {
      className: j.giftCodeSection,
      children: [null != t && (0, r.jsx)(f.gNt, {
        label: L.intl.string(L.t["/dG4NA"]),
        children: (0, r.jsx)(f.kO8, {
          hideMessage: C ? L.intl.string(L.t["0RLn47"]) : null,
          value: (0, N.Nz)(t),
          mode: v,
          text: e,
          onCopy: e => z(e, t),
          supportsCopy: A.wS,
          className: j.__invalid_copyInput,
          buttonColor: d.Tt.LINK,
          buttonLook: d.iL.LINK
        })
      }), (0, r.jsx)("div", {
        className: j.subtext,
        children: L.intl.string(L.t.QWKUpn)
      })]
    })
  }, Q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: j.blurb,
      children: W()
    }), null == E && (0, r.jsx)(U, {
      giftCode: t,
      onClose: u
    }), (0, r.jsx)("div", {
      className: j.divider
    }), q()]
  }), X = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: j.giftRecipientContainer,
      children: [(0, r.jsx)(h.Z, {
        user: _,
        size: f.EFr.SIZE_40
      }), (0, r.jsxs)("div", {
        className: j.giftRecipientTextContainer,
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-md/semibold",
          children: w.ZP.getName(_)
        }), (0, r.jsxs)("div", {
          className: j.giftRecipientTag,
          children: [" ", w.ZP.getUserTag(_)]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: j.giftSentMessage,
      children: W()
    })]
  });
  return O ? (0, r.jsxs)("div", {
    className: j.confirmation,
    children: [null != n ? (0, r.jsx)(g.Z, {
      game: n,
      className: j.__invalid_icon,
      size: g.A.LARGE,
      skuId: Y()
    }) : null, (0, r.jsx)(f.$jN, {
      type: f.RAz.PULSING_ELLIPSIS
    })]
  }) : (0, r.jsxs)("div", {
    className: o()(j.confirmation, {
      [j.seasonalConfirmationPadding]: H
    }),
    children: [null != n ? (0, r.jsx)(g.Z, {
      game: n,
      className: j.__invalid_icon,
      size: g.A.LARGE,
      skuId: Y()
    }) : null, (0, r.jsx)(f.Heading, {
      variant: "heading-lg/semibold",
      className: o()({
        [j.header]: null == l && !G,
        [j.headerCustomGifting]: null != l && !G
      }),
      children: K()
    }), p && null != _ && null == E || k ? X() : Q()]
  })
}
let U = e => {
  let {
    giftCode: t,
    onClose: n
  } = e;
  i.useEffect(() => {
    _.Z.fetchRelationships(), (0, O._)()
  }, []);
  let [a, o] = i.useState(), [s, d] = i.useState(false), [m, g] = i.useState(false), {
    userAffinities: b,
    isLoading: y
  } = (0, c.cj)([v.Z], () => ({
    userAffinities: v.Z.getUserAffinitiesMap(),
    isLoading: v.Z.isFetching()
  })), S = Array.from(b.keys()).sort((e, t) => v.Z.compare(e, t)), T = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()), A = l().difference(T, S), N = [...S, ...A], P = (0, c.e7)([C.default], () => C.default.filter(e => N.includes(e.id) && !e.bot), [N]);
  if (null == P || 0 === P.length) return null;
  let R = l().sortBy(P, e => N.indexOf(e.id));
  return (0, r.jsxs)("div", {
    className: j.giftRecipientSection,
    children: [(0, r.jsxs)("div", {
      className: j.giftRecipient,
      children: [(0, r.jsx)(f.VcW, {
        selectionMode: "single",
        label: L.intl.string(L.t.MJw05f),
        placeholder: L.intl.string(L.t.J019jZ),
        loading: y,
        value: a,
        onSelectionChange: e => {
          o(e), d(false)
        },
        options: R.map(e => ({
          id: e.id,
          value: e,
          label: "".concat(w.ZP.getUserTag(e)),
          leading: (0, r.jsx)(h.Z, {
            user: e,
            size: f.EFr.SIZE_20
          })
        }))
      }), (0, r.jsx)("div", {
        className: j.giftRecipientButton,
        children: (0, r.jsx)(u.zxk, {
          disabled: null == a,
          loading: m,
          onClick: () => {
            g(true), (0, E.YD)(a, t).then(() => {
              n(), (0, p.Ou)()
            }).catch(() => {
              d(true), g(false)
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