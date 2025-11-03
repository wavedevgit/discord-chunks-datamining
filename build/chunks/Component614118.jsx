/** Chunk was on web.js **/
/** chunk id: 614118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk602733 = require("./602733.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk937615 = require("./937615.js"),
  Chunk164670 = require("./164670.js"),
  Chunk411935 = require("./411935.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk594914 = require("./594914.jsx"),
  Chunk433386 = require("./433386.jsx"),
  Chunk840724 = require("./840724.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54602 = require("./54602.js");

function O(e) {
  var t, n, O, v, I, T, S, A;
  let {
    guildId: C,
    skuId: N
  } = e, R = (0, o.e7)([u.Z], () => u.Z.isFetchingForSKU(N)), P = (0, o.e7)([c.Z], () => c.Z.get(N)), w = null == P ? true : P.applicationId;
  (0, l.p2)();
  let {
    primaryIconAsset: D,
    primaryIconLabel: x
  } = i.useMemo(() => (0, f.FE)(P, w), [P, w]);
  i.useEffect(() => {
    null == C || null == N || u.Z.isFetchingForSKU(N) || (0, _.y)(C, N)
  }, [C, N]);
  let L = i.useCallback(e => {
      e.stopPropagation(), (null == P ? true : P.applicationId) != null && null != C && (0, p.g)({
        skuId: N,
        applicationId: P.applicationId,
        guildId: C,
        isStorefront: false
      })
    }, [N, null == P ? true : P.applicationId, C]),
    M = i.useCallback(() => {
      null != P && (0, h.P)(P, {
        isGift: false
      })
    }, [P]),
    j = i.useCallback(() => {
      null != P && (0, h.P)(P, {
        isGift: true
      })
    }, [P]);
  return R && null == P ? (0, r.jsx)("div", {
    className: y.container,
    children: (0, r.jsx)(s.$jN, {
      className: y.spinner
    })
  }) : null == P ? null : (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsx)(g.C, {
      applicationId: P.applicationId,
      skuId: N,
      variant: g.Z.EMBEDDED,
      onClick: L
    }), (0, r.jsxs)("div", {
      className: y.details,
      children: [(0, r.jsxs)("div", {
        className: y.detailsTitleDescription,
        children: [(0, r.jsx)(s.Text, {
          color: "always-white",
          variant: "text-md/bold",
          lineClamp: 1,
          children: P.name
        }), (0, r.jsxs)("div", {
          className: y.detailsDescription,
          children: [null != D && (0, r.jsx)("img", {
            src: D.toString(),
            alt: x,
            className: y.iconAsset
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            lineClamp: 1,
            children: (0, d.T4)(null != (I = null == (t = P.price) ? true : t.amount) ? I : 0, null != (T = null == (n = P.price) ? true : n.currency) ? T : E.pK.USD)
          })]
        })]
      }), (0, r.jsxs)(a.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(0, r.jsx)(a.zxk, {
          variant: "secondary",
          onClick: L,
          text: b.intl.string(b.t.KLBTgF),
          fullWidth: true
        }), (0, r.jsx)(a.zxk, {
          variant: "primary",
          onClick: M,
          text: b.intl.format(b.t.Xp5WTn, {
            price: (0, d.T4)(null != (S = null == (O = P.price) ? true : O.amount) ? S : 0, null != (A = null == (v = P.price) ? true : v.currency) ? A : E.pK.USD)
          }),
          fullWidth: true
        }), (0, r.jsx)(m.Z, {
          onGift: j
        })]
      })]
    })]
  })
}