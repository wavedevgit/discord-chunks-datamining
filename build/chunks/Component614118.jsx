/** Chunk was on web.js **/
/** chunk id: 614118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
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

function v(e) {
  var t, n, v, I, T, S, A, C;
  let {
    guildId: N,
    skuId: R,
    channel: P
  } = e, D = (0, o.e7)([d.Z], () => d.Z.isFetchingForSKU(R)), w = (0, o.e7)([u.Z], () => u.Z.get(R)), x = null == w ? true : w.applicationId;
  (0, l.p2)();
  let L = (0, o.e7)([c.default], () => P.isDM() && null != P.recipients && 0 !== P.recipients.length ? c.default.getUser(P.recipients[0]) : null),
    {
      primaryIconAsset: M,
      primaryIconLabel: j
    } = i.useMemo(() => (0, _.FE)(w, x), [w, x]);
  i.useEffect(() => {
    null == N || null == R || d.Z.isFetchingForSKU(R) || (0, p.y)(N, R)
  }, [N, R]);
  let k = i.useCallback(e => {
      e.stopPropagation(), (null == w ? true : w.applicationId) != null && null != N && (0, h.g)({
        skuId: R,
        applicationId: w.applicationId,
        guildId: N,
        isStorefront: false
      })
    }, [R, null == w ? true : w.applicationId, N]),
    U = i.useCallback(() => {
      null != w && (0, m.P)(w, {
        isGift: false
      })
    }, [w]),
    G = i.useCallback(() => {
      null != w && (0, m.P)(w, {
        isGift: true,
        giftRecipient: null != L ? L : true
      })
    }, [w, L]);
  return D && null == w ? (0, r.jsx)("div", {
    className: O.container,
    children: (0, r.jsx)(s.$jN, {
      className: O.spinner
    })
  }) : null == w ? null : (0, r.jsxs)("div", {
    className: O.container,
    children: [(0, r.jsx)(E.C, {
      className: O.card,
      applicationId: w.applicationId,
      skuId: R,
      variant: E.Z.EMBEDDED,
      onClick: k
    }), (0, r.jsxs)("div", {
      className: O.details,
      children: [(0, r.jsxs)("div", {
        className: O.detailsTitleDescription,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/bold",
          lineClamp: 1,
          children: w.name
        }), (0, r.jsxs)("div", {
          className: O.detailsDescription,
          children: [null != M && (0, r.jsx)("img", {
            src: M.toString(),
            alt: j,
            className: O.iconAsset
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/semibold",
            lineClamp: 1,
            children: (0, f.T4)(null != (T = null == (t = w.price) ? true : t.amount) ? T : 0, null != (S = null == (n = w.price) ? true : n.currency) ? S : b.pK.USD)
          })]
        })]
      }), (0, r.jsxs)(a.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(0, r.jsx)(a.zxk, {
          variant: "secondary",
          onClick: k,
          text: y.intl.string(y.t.KLBTgF),
          fullWidth: true
        }), (0, r.jsx)(a.zxk, {
          variant: "primary",
          onClick: U,
          text: y.intl.format(y.t.Xp5WTn, {
            price: (0, f.T4)(null != (A = null == (v = w.price) ? true : v.amount) ? A : 0, null != (C = null == (I = w.price) ? true : I.currency) ? C : b.pK.USD)
          }),
          fullWidth: true
        }), (0, r.jsx)(g.Z, {
          onGift: G
        })]
      })]
    })]
  })
}