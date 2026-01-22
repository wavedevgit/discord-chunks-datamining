/** Chunk was on web.js **/
/** chunk id: 972607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let M = 1500;

function k(e) {
  let {
    giftCode: t,
    application: n,
    sku: a,
    subscriptionPlan: o,
    selectedGiftStyle: l,
    onClose: u,
    hasSentMessage: p,
    giftRecipient: _,
    giftMessageError: E,
    isSendingMessage: O
  } = e, [A, S] = i.useState(f.e2O.Modes.DEFAULT), T = (0, c.bG)([I.A], () => I.A.enabled), k = p || null != l && null != _, G = (null == a ? true : a.productLine) === D.EZt.COLLECTIBLES, V = (0, b.A)(), {
    selectedGiftingPromotionReward: F
  } = (0, P.Pv)(), B = null == V ? true : V.giftPurchaseConfirmation, H = (0, m.Mv)(null == F ? true : F.skuId), Y = (0, y.Mq)(o) && null != H && null != B, W = () => null != o ? o.skuId : null != a ? a.id : null, K = () => {
    let e;
    return null != E ? L.intl.string(L.t.qB8aya) : null == o ? null : (e = o.interval === x.WT.MONTH ? k ? Y ? B.monthGiftText : L.t["4ZJ+7Z"] : L.t["P+z55d"] : k ? Y ? B.yearGiftText : L.t.p0pZXP : L.t.bXqk3o, L.intl.format(e, {
      skuName: (0, R.RH)(o.id),
      intervalCount: o.intervalCount
    }))
  }, z = () => null != _ || p && null == E ? L.intl.string(L.t.zOmK9N) : null != E ? L.intl.string(L.t.d1lrmU) : L.intl.string(L.t["/s1xR7"]), q = (e, t) => {
    null != a && (0, N.AK)(new v.A({
      code: t,
      maxUses: 1
    }), a), (0, C.C)(e, () => S(f.e2O.Modes.SUCCESS), () => S(f.e2O.Modes.ERROR)), setTimeout(() => {
      S(f.e2O.Modes.DEFAULT)
    }, M)
  }, X = () => {
    let e;
    if (null == t) return null;
    switch (A) {
      case f.e2O.Modes.SUCCESS:
        e = L.intl.string(L.t.XVvPjU);
        break;
      case f.e2O.Modes.ERROR:
        e = L.intl.string(L.t.i4GM3L);
        break;
      default:
        e = L.intl.string(L.t.OpuAlK)
    }
    return (0, r.jsxs)("div", {
      className: j.PN,
      children: [null != t && (0, r.jsx)(f.D0$, {
        label: L.intl.string(L.t["/dG4NA"]),
        children: (0, r.jsx)(f.e2O, {
          hideMessage: T ? L.intl.string(L.t["0RLn47"]) : null,
          value: (0, N.Zq)(t),
          mode: A,
          text: e,
          onCopy: e => q(e, t),
          supportsCopy: C.p5,
          className: j.__invalid_copyInput,
          buttonColor: d.XD.LINK,
          buttonLook: d.pR.LINK
        })
      }), (0, r.jsx)("div", {
        className: j.W$,
        children: L.intl.string(L.t.QWKUpn)
      })]
    })
  }, Z = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: j.I0,
      children: K()
    }), null == E && (0, r.jsx)(U, {
      giftCode: t,
      onClose: u
    }), (0, r.jsx)("div", {
      className: j.yF
    }), X()]
  }), Q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: j.jx,
      children: [(0, r.jsx)(h.A, {
        user: _,
        size: f._3J.SIZE_40
      }), (0, r.jsxs)("div", {
        className: j.gn,
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-md/semibold",
          children: w.Ay.getName(_)
        }), (0, r.jsxs)("div", {
          className: j.Ik,
          children: [" ", w.Ay.getUserTag(_)]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: j._c,
      children: K()
    })]
  });
  return O ? (0, r.jsxs)("div", {
    className: j.EL,
    children: [null != n ? (0, r.jsx)(g.A, {
      game: n,
      className: j.__invalid_icon,
      size: g.M.LARGE,
      skuId: W()
    }) : null, (0, r.jsx)(f.y$y, {
      type: f.tVU.PULSING_ELLIPSIS
    })]
  }) : (0, r.jsxs)("div", {
    className: s()(j.EL, {
      [j.L1]: Y
    }),
    children: [null != n ? (0, r.jsx)(g.A, {
      game: n,
      className: j.__invalid_icon,
      size: g.M.LARGE,
      skuId: W()
    }) : null, (0, r.jsx)(f.Heading, {
      variant: "heading-lg/semibold",
      className: s()({
        [j.wx]: null == l && !G,
        [j.$A]: null != l && !G
      }),
      children: z()
    }), p && null != _ && null == E || k ? Q() : Z()]
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
  let [a, s] = i.useState(), [o, d] = i.useState(false), [m, g] = i.useState(false), {
    userAffinities: b,
    isLoading: y
  } = (0, c.cf)([A.A], () => ({
    userAffinities: A.A.getUserAffinitiesMap(),
    isLoading: A.A.isFetching()
  })), v = Array.from(b.keys()).sort((e, t) => A.A.compare(e, t)), I = (0, c.bG)([S.A], () => S.A.getFriendIDs()), C = l().difference(I, v), N = [...v, ...C], R = (0, c.bG)([T.default], () => T.default.filter(e => N.includes(e.id) && !e.bot), [N]);
  if (null == R || 0 === R.length) return null;
  let P = l().sortBy(R, e => N.indexOf(e.id));
  return (0, r.jsxs)("div", {
    className: j.vt,
    children: [(0, r.jsxs)("div", {
      className: j.AQ,
      children: [(0, r.jsx)(f.ZiE, {
        selectionMode: "single",
        label: L.intl.string(L.t.MJw05f),
        placeholder: L.intl.string(L.t.J019jZ),
        loading: y,
        value: a,
        onSelectionChange: e => {
          s(e), d(false)
        },
        options: P.map(e => ({
          id: e.id,
          value: e,
          label: "".concat(w.Ay.getUserTag(e)),
          leading: (0, r.jsx)(h.A, {
            user: e,
            size: f._3J.SIZE_20
          })
        }))
      }), (0, r.jsx)("div", {
        className: j.Qg,
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
          text: L.intl.string(L.t["+EgwQn"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: o ? j.Sc : j.W$,
      children: o ? L.intl.string(L.t.jo5Vbl) : L.intl.string(L.t["8/N3v3"])
    })]
  })
}