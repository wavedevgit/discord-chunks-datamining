/** Chunk was on 2292 **/
/** chunk id: 298305, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk920064 = require("./920064.js"),
  Chunk674658 = require("./674658.js"),
  Chunk898461 = require("./898461.js"),
  Chunk287809 = require("./287809.js"),
  Chunk504721 = require("./504721.js"),
  Chunk513653 = require("./513653.js"),
  Chunk180391 = require("./180391.js");

function g(e) {
  let {
    skuId: t,
    size: r,
    src: d,
    className: m
  } = e, p = (0, i.bG)([u.default], () => u.default.getCurrentUser()), g = (0, i.bG)([a.A], () => a.A.useReducedMotion), {
    product: x,
    isFetching: C
  } = (0, o.q)(t);
  if (C || null == x) return (0, n.jsx)(l.y$y, {
    type: l.tVU.PULSING_ELLIPSIS
  });
  let f = x.items[0];
  if (null == f || !(0, c.T)(f)) return null;
  let T = (0, s.A)(f.asset, r, !g);
  return (0, n.jsx)(l.JsQ, {
    "aria-label": null == p ? true : p.username,
    size: r,
    className: m,
    src: null != d ? d : null == p ? true : p.getAvatarURL(true, (0, l.FT9)(r), !g),
    avatarDecoration: T
  })
}

function x(e) {
  let {
    maxRewardImageSrc: t,
    claimableRewards: r,
    size: s,
    imageScaling: o = 1.5
  } = e, c = (0, i.bG)([u.default], () => u.default.getCurrentUser()), x = (0, i.bG)([a.A], () => a.A.useReducedMotion), C = (0, l.FT9)(s);
  return r.length > 0 ? (0, n.jsx)("img", {
    alt: "",
    src: t,
    style: {
      height: C * o
    }
  }) : (0, n.jsxs)("div", {
    className: d.kL,
    children: [(1 === r.length || 2 === r.length) && (0, n.jsx)(g, {
      skuId: r[0],
      size: s,
      className: d.M8,
      src: 1 === r.length ? null == c ? true : c.getAvatarURL(true, (0, l.FT9)(s), !x) : p
    }), 2 === r.length && (0, n.jsx)("div", {
      style: {
        marginRight: -Math.round(.321 * C)
      },
      children: (0, n.jsx)(g, {
        skuId: r[1],
        size: s,
        src: m
      })
    })]
  })
}