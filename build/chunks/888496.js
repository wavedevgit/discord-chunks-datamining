/** Chunk was on 82412 **/
n.d(t, {
  Dq: () => E,
  hf: () => _,
  li: () => b,
  oP: () => m,
  rJ: () => p,
  rm: () => f,
  ul: () => A
}), n(539854), n(388685);
var c = n(255367);
n(73800);
var r = n(120356),
  a = n.n(r),
  l = n(392711),
  o = n.n(l),
  i = n(481060),
  s = n(930153),
  u = n(275759),
  d = n(856651),
  O = n(388032),
  T = n(566825);

function m(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    r = [],
    a = Number(null != (t = e[d.PC.REDDIT_TOTAL_KARMA]) ? t : -1),
    l = "1" === e[d.PC.REDDIT_GOLD],
    o = "1" === e[d.PC.REDDIT_MOD];
  return a > -1 && r.push((0, c.jsx)(y, {
    className: n,
    count: a,
    label: O.t.SbCNo6
  }, d.PC.REDDIT_TOTAL_KARMA)), l && r.push((0, c.jsx)(P, {
    className: n,
    label: O.intl.string(O.t["06rDHR"])
  }, d.PC.REDDIT_GOLD)), o && r.push((0, c.jsx)(P, {
    className: n,
    label: O.intl.string(O.t.oWM95O)
  }, d.PC.REDDIT_MOD)), r
}

function p(e) {
  var t, n;
  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    a = [],
    l = Number(null != (t = e[d.PC.TWITTER_STATUSES_COUNT]) ? t : -1),
    o = Number(null != (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) ? n : -1);
  return l > -1 && a.push((0, c.jsx)(y, {
    className: r,
    count: l,
    label: O.t.llwqqa
  }, d.PC.TWITTER_STATUSES_COUNT)), o > -1 && a.push((0, c.jsx)(y, {
    className: r,
    count: o,
    label: O.t.LMNOUV
  }, d.PC.TWITTER_FOLLOWERS_COUNT)), a
}

function E(e) {
  var t, r, a;
  let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    o = [],
    i = Number(null != (t = e[d.PC.STEAM_GAME_COUNT]) ? t : -1),
    s = Number(null != (r = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) ? r : -1),
    u = Number(null != (a = e[d.PC.STEAM_ITEM_COUNT_TF2]) ? a : -1);
  return i > -1 && o.push((0, c.jsx)(y, {
    className: l,
    count: i,
    label: O.t.ppXMu7
  }, d.PC.STEAM_GAME_COUNT)), s > -1 && o.push((0, c.jsx)(h, {
    className: l,
    label: O.intl.format(O.t["Y88M5+"], {
      count: s
    }),
    imageSrc: n(738535),
    imageAlt: O.intl.string(O.t.HKUEZm)
  }, d.PC.STEAM_ITEM_COUNT_DOTA2)), u > -1 && o.push((0, c.jsx)(h, {
    className: l,
    label: O.intl.format(O.t["Y88M5+"], {
      count: u
    }),
    imageSrc: n(80730),
    imageAlt: O.intl.string(O.t.C8p1Sk)
  }, d.PC.STEAM_ITEM_COUNT_TF2)), o
}

function b(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = [];
  return "1" === e[d.PC.PAYPAL_VERIFIED] && n.push((0, c.jsx)(P, {
    className: a()(t, T.paypalVerifiedTag),
    label: O.intl.string(O.t.IhXLy8)
  }, d.PC.PAYPAL_VERIFIED)), n
}

function A(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    r = [],
    a = Number(null != (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) ? t : -1),
    l = "1" === e[d.PC.EBAY_TOP_RATED_SELLER];
  return a > 0 && r.push((0, c.jsx)(y, {
    className: n,
    count: a,
    label: O.t.YmL22d,
    percent: !0
  }, d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), l && r.push((0, c.jsx)(P, {
    className: n,
    label: O.intl.string(O.t.TEEYwc)
  }, d.PC.EBAY_TOP_RATED_SELLER)), r
}

function _(e) {
  var t, n, r;
  let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    l = [],
    o = "1" === e[d.PC.TIKTOK_VERIFIED],
    i = Number(null != (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) ? t : -1),
    s = Number(null != (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) ? n : -1),
    u = Number(null != (r = e[d.PC.TIKTOK_LIKES_COUNT]) ? r : -1);
  return i > -1 && l.push((0, c.jsx)(y, {
    className: a,
    count: i,
    label: O.t["Mpm/BQ"]
  }, d.PC.TIKTOK_FOLLOWER_COUNT)), s > -1 && l.push((0, c.jsx)(y, {
    className: a,
    count: s,
    label: O.t.ftf12t
  }, d.PC.TIKTOK_FOLLOWING_COUNT)), u > -1 && l.push((0, c.jsx)(y, {
    className: a,
    count: u,
    label: O.t.Qwhe5u
  }, d.PC.TIKTOK_LIKES_COUNT)), o && l.push((0, c.jsx)(P, {
    className: a,
    label: O.intl.string(O.t.QHHwRU)
  }, d.PC.TIKTOK_VERIFIED)), l
}

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
    r = [],
    a = Object.keys(e.metadata);
  if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length) return r;
  for (let l of o().sortBy(a, t => {
      var n, c;
      return null == (c = e.application_metadata) || null == (n = c[t]) ? void 0 : n.name
    })) {
    let a = e.application_metadata[l];
    if (null == a) continue;
    let o = e.metadata[l];
    try {
      switch (a.type) {
        case d.xn.BOOLEAN_EQUAL:
        case d.xn.BOOLEAN_NOT_EQUAL:
          (a.type === d.xn.BOOLEAN_EQUAL && "1" === o || a.type === d.xn.BOOLEAN_NOT_EQUAL && "1" !== o) && r.push((0, c.jsx)(P, {
            className: t,
            label: a.name
          }, a.key));
          break;
        case d.xn.DATETIME_GREATER_THAN_EQUAL:
        case d.xn.DATETIME_LESS_THAN_EQUAL:
          r.push((0, c.jsx)(N, {
            className: t,
            date: o,
            locale: n,
            label: a.name
          }, a.key));
          break;
        case d.xn.INTEGER_EQUAL:
        case d.xn.INTEGER_NOT_EQUAL:
        case d.xn.INTEGER_GREATER_THAN_EQUAL:
        case d.xn.INTEGER_LESS_THAN_EQUAL:
          r.push((0, c.jsx)(y, {
            className: t,
            count: Number(o),
            label: a.name
          }, a.key))
      }
    } catch (e) {}
  }
  return r
}

function y(e) {
  let t, {
      count: n,
      label: r,
      className: l,
      percent: o
    } = e,
    u = (0, s.$U)(n) + (o ? "%" : "");
  return t = "string" == typeof r ? O.intl.format(O.t.HLoinJ, {
    name: r,
    value: u
  }) : O.intl.format(r, {
    value: u
  }), (0, c.jsx)(i.Text, {
    className: a()(T.connectedAccountVanityMetadata, l),
    variant: "text-xs/normal",
    color: "interactive-active",
    children: t
  })
}

function N(e) {
  let {
    date: t,
    locale: n,
    label: r,
    className: l
  } = e;
  return (0, c.jsx)(i.Text, {
    className: a()(T.connectedAccountVanityMetadata, l),
    variant: "text-xs/normal",
    color: "interactive-active",
    children: O.intl.format(O.t.HLoinJ, {
      value: (0, u.FI)(t, n),
      name: r
    })
  })
}

function h(e) {
  let {
    label: t,
    imageSrc: n,
    imageAlt: r,
    className: l
  } = e;
  return (0, c.jsxs)("div", {
    className: a()(T.connectedAccountVanityMetadata, T.connectedAccountVanityMetadataItem, l),
    children: [(0, c.jsx)(i.ua7, {
      text: r,
      children: e => {
        var t, a;
        return (0, c.jsx)("img", (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              c = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), c.forEach(function(t) {
              var c;
              c = n[t], t in e ? Object.defineProperty(e, t, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = c
            })
          }
          return e
        }({}, e), a = a = {
          src: n,
          alt: r,
          className: T.connectedAccountVanityMetadataItemIcon
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(e);
            n.push.apply(n, c)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
        }), t))
      }
    }), (0, c.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "interactive-active",
      children: t
    })]
  })
}

function P(e) {
  let {
    label: t,
    className: n
  } = e;
  return (0, c.jsx)(i.Text, {
    variant: "text-xs/semibold",
    color: "interactive-active",
    className: a()(T.connectedAccountVanityMetadata, T.connectedAccountVanityMetadataTag, n),
    children: t
  })
}