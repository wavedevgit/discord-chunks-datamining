/** Chunk was on web.js **/
/** chunk id: 972607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk49229 = require("./49229.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk841702 = require("./841702.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk242874 = require("./242874.js"),
  Chunk552736 = require("./552736.js"),
  Chunk810498 = require("./810498.js"),
  Chunk219271 = require("./219271.js"),
  Chunk21119 = require("./21119.js"),
  Chunk7133 = require("./7133.js"),
  Chunk994500 = require("./994500.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk957565 = require("./957565.js"),
  Chunk45938 = require("./45938.js"),
  Chunk927578 = require("./927578.js"),
  Chunk427262 = require("./427262.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk381907 = require("./381907.js");
let j = 1500;

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
  } = e, [v, I] = i.useState(f.e2O.Modes.DEFAULT), T = (0, c.bG)([S.A], () => S.A.enabled), k = p || null != l && null != _, G = (null == a ? true : a.productLine) === D.EZt.COLLECTIBLES, F = (0, y.A)(), {
    selectedGiftingPromotionReward: V
  } = (0, P.Pv)(), B = null == F ? true : F.giftPurchaseConfirmation, H = (0, m.Mv)(V), Y = (0, b.Mq)(s) && null != H && null != B, W = () => null != s ? s.skuId : null != a ? a.id : null, K = () => {
    let e;
    return null != E ? x.intl.string(x.t.qB8aya) : null == s ? null : (e = s.interval === L.WT.MONTH ? k ? Y ? B.monthGiftText : x.t["4ZJ+7Z"] : x.t["P+z55d"] : k ? Y ? B.yearGiftText : x.t.p0pZXP : x.t.bXqk3o, x.intl.format(e, {
      skuName: (0, w.RH)(s.id),
      intervalCount: s.intervalCount
    }))
  }, z = () => null != _ || p && null == E ? x.intl.string(x.t.zOmK9N) : null != E ? x.intl.string(x.t.d1lrmU) : x.intl.string(x.t["/s1xR7"]), q = (e, t) => {
    null != a && (0, N.AK)(new A.A({
      code: t,
      maxUses: 1
    }), a), (0, C.C)(e, () => I(f.e2O.Modes.SUCCESS), () => I(f.e2O.Modes.ERROR)), setTimeout(() => {
      I(f.e2O.Modes.DEFAULT)
    }, j)
  }, Z = () => {
    let e;
    if (null == t) return null;
    switch (v) {
      case f.e2O.Modes.SUCCESS:
        e = x.intl.string(x.t.XVvPjU);
        break;
      case f.e2O.Modes.ERROR:
        e = x.intl.string(x.t.i4GM3L);
        break;
      default:
        e = x.intl.string(x.t.OpuAlK)
    }
    return (0, r.jsxs)("div", {
      className: M.PN,
      children: [null != t && (0, r.jsx)(f.D0$, {
        label: x.intl.string(x.t["/dG4NA"]),
        children: (0, r.jsx)(f.e2O, {
          hideMessage: T ? x.intl.string(x.t["0RLn47"]) : null,
          value: (0, N.Zq)(t),
          mode: v,
          text: e,
          onCopy: e => q(e, t),
          supportsCopy: C.p5,
          className: M.__invalid_copyInput,
          buttonColor: d.XD.LINK,
          buttonLook: d.pR.LINK
        })
      }), (0, r.jsx)("div", {
        className: M.W$,
        children: x.intl.string(x.t.QWKUpn)
      })]
    })
  }, Q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: M.I0,
      children: K()
    }), null == E && (0, r.jsx)(U, {
      giftCode: t,
      onClose: u
    }), (0, r.jsx)("div", {
      className: M.yF
    }), Z()]
  }), X = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: M.jx,
      children: [(0, r.jsx)(h.A, {
        user: _,
        size: f._3J.SIZE_40
      }), (0, r.jsxs)("div", {
        className: M.gn,
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-md/semibold",
          children: R.Ay.getName(_)
        }), (0, r.jsxs)("div", {
          className: M.Ik,
          children: [" ", R.Ay.getUserTag(_)]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: M._c,
      children: K()
    })]
  });
  return O ? (0, r.jsxs)("div", {
    className: M.EL,
    children: [null != n ? (0, r.jsx)(g.A, {
      game: n,
      className: M.__invalid_icon,
      size: g.M.LARGE,
      skuId: W()
    }) : null, (0, r.jsx)(f.y$y, {
      type: f.tVU.PULSING_ELLIPSIS
    })]
  }) : (0, r.jsxs)("div", {
    className: o()(M.EL, {
      [M.L1]: Y
    }),
    children: [null != n ? (0, r.jsx)(g.A, {
      game: n,
      className: M.__invalid_icon,
      size: g.M.LARGE,
      skuId: W()
    }) : null, (0, r.jsx)(f.Heading, {
      variant: "heading-lg/semibold",
      className: o()({
        [M.wx]: null == l && !G,
        [M.$A]: null != l && !G
      }),
      children: z()
    }), p && null != _ && null == E || k ? X() : Q()]
  })
}
let U = e => {
  let {
    giftCode: t,
    onClose: n
  } = e;
  i.useEffect(() => {
    _.A.fetchRelationships(), (0, O.u)()
  }, []);
  let [a, o] = i.useState(), [s, d] = i.useState(false), [m, g] = i.useState(false), {
    userAffinities: y,
    isLoading: b
  } = (0, c.cf)([v.A], () => ({
    userAffinities: v.A.getUserAffinitiesMap(),
    isLoading: v.A.isFetching()
  })), A = Array.from(y.keys()).sort((e, t) => v.A.compare(e, t)), S = (0, c.bG)([I.A], () => I.A.getFriendIDs()), C = l().difference(S, A), N = [...A, ...C], w = (0, c.bG)([T.default], () => T.default.filter(e => N.includes(e.id) && !e.bot), [N]);
  if (null == w || 0 === w.length) return null;
  let P = l().sortBy(w, e => N.indexOf(e.id));
  return (0, r.jsxs)("div", {
    className: M.vt,
    children: [(0, r.jsxs)("div", {
      className: M.AQ,
      children: [(0, r.jsx)(f.ZiE, {
        selectionMode: "single",
        label: x.intl.string(x.t.MJw05f),
        placeholder: x.intl.string(x.t.J019jZ),
        loading: b,
        value: a,
        onSelectionChange: e => {
          o(e), d(false)
        },
        options: P.map(e => ({
          id: e.id,
          value: e,
          label: "".concat(R.Ay.getUserTag(e)),
          leading: (0, r.jsx)(h.A, {
            user: e,
            size: f._3J.SIZE_20
          })
        }))
      }), (0, r.jsx)("div", {
        className: M.Qg,
        children: (0, r.jsx)(u.$nd, {
          disabled: null == a,
          loading: m,
          onClick: () => {
            g(true), (0, E.UN)(a, t).then(() => {
              n(), (0, p.bz)()
            }).catch(() => {
              d(true), g(false)
            })
          },
          text: x.intl.string(x.t["+EgwQn"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: s ? M.Sc : M.W$,
      children: s ? x.intl.string(x.t.jo5Vbl) : x.intl.string(x.t["8/N3v3"])
    })]
  })
}