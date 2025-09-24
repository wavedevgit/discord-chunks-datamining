/** Chunk was on web.js **/
/** chunk id: 675720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk887003 = require("./887003.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk786089 = require("./786089.jsx"),
  Chunk818923 = require("./818923.js"),
  Chunk52461 = require("./52461.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = e => {
    var t, n, r;
    let i = null == e || null == (n = e.config) || null == (t = n.rewardsConfig) ? true : t.rewards,
      a = Array.isArray(i) && i.length > 0,
      o = null == i ? true : i[0];
    return a && null != o && ("name" in o || "messages" in o && !(0, s.Ew)(null == (r = o.messages) ? true : r.name)) ? o : null
  },
  m = e => {
    var t, n;
    let r = null == e || null == (n = e.config) || null == (t = n.rewardsConfig) ? true : t.rewards,
      i = (null != r ? r : []).map(e => {
        var t, n, r, i;
        let o = "name" in e ? String(e.name) : String(null != (r = null == (t = e.messages) ? true : t.name) ? r : ""),
          s = "nameWithArticle" in e ? String(e.nameWithArticle) : String(null != (i = null == (n = e.messages) ? true : n.nameWithArticle) ? i : o);
        return e.type === a.w.VIRTUAL_CURRENCY && "orbQuantity" in e ? {
          skuId: e.skuId,
          name: o,
          type: e.type,
          nameWithArticle: s,
          orbQuantity: e.orbQuantity
        } : {
          skuId: e.skuId,
          name: o,
          type: e.type,
          nameWithArticle: s,
          asset: "asset" in e ? e.asset : "",
          assetVideo: "assetVideo" in e ? e.assetVideo : null,
          collectibleProduct: {
            items: [e]
          }
        }
      }),
      o = {
        id: e.config.id,
        startsAt: e.config.startsAt,
        expiresAt: e.config.expiresAt,
        features: e.config.features,
        colors: e.config.colors,
        assets: e.config.assets,
        messages: {
          questName: e.config.messages.questName,
          gameTitle: e.config.messages.gameTitle,
          gamePublisher: "gamePublisher" in e.config.messages ? e.config.messages.gamePublisher : ""
        },
        rewards: i,
        cosponsorMetadata: e.config.cosponsorMetadata
      };
    return {
      id: e.id,
      config: o,
      userStatus: null != e.userStatus ? p(f({}, e.userStatus), {
        claimedAt: new Date().toISOString(),
        claimedTier: 0
      }) : null
    }
  },
  g = () => (0, Chunk951288.jsx)(Chunk481060.X6q, {
    className: Chunk52461.trophyCaseHeading,
    variant: "heading-md/semibold",
    children: "Trophy Case Card"
  }),
  E = e => {
    let {
      quest: t
    } = e, n = i.useMemo(() => h(t), [t]), a = i.useMemo(() => m(t), [t]);
    return null == t || null == t.config ? (0, r.jsxs)("div", {
      className: u.trophyCaseCard,
      children: [(0, r.jsx)(g, {}), (0, r.jsx)("div", {
        className: u.trophyCaseContainer,
        children: (0, r.jsx)("div", {
          className: u.trophyCaseWrapper,
          children: (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: "Quest data is not available."
          })
        })
      })]
    }) : null == n ? (0, r.jsxs)("div", {
      className: u.trophyCaseCard,
      children: [(0, r.jsx)(g, {}), (0, r.jsx)("div", {
        className: u.trophyCaseContainer,
        children: (0, r.jsx)("div", {
          className: u.trophyCaseWrapper,
          children: (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: "This quest has no rewards configured. Trophy Case cards require at least one reward to display."
          })
        })
      })]
    }) : (0, r.jsx)("div", {
      className: c.previewBackground,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(g, {}), (0, r.jsx)("div", {
          className: u.trophyCaseContainer,
          children: (0, r.jsx)("div", {
            className: u.trophyCaseWrapper,
            children: (0, r.jsx)("div", {
              className: u.trophyCaseWrapperInner,
              children: (0, r.jsx)(l.Z, {
                quest: a
              })
            })
          })
        })]
      })
    })
  }