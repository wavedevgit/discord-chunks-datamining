/** Chunk was on 1272 **/
/** chunk id: 786089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk887003 = require("./887003.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk410030 = require("./410030.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk352084 = require("./352084.jsx"),
  Chunk125011 = require("./125011.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199679 = require("./199679.js");
let j = (0, Chunk647438.memo)(function(e) {
  var t, n, l, j, P, x;
  let {
    quest: A
  } = e, [Z, w] = (0, i.useState)(false), [L, R] = (0, i.useState)(24), [D, M] = (0, i.useState)(false), k = (0, i.useRef)(null), U = (0, i.useRef)(null), G = (0, i.useRef)(null), B = (0, c.e7)([m.default], () => m.default.getCurrentUser()), {
    ref: H,
    height: V = 0
  } = (0, p.ZP)(), F = (0, f.ZP)(), z = (0, E.B6)(null == (t = A.userStatus) ? true : t.claimedAt, {
    month: "numeric",
    day: "numeric"
  }), Y = null != (P = null == (n = A.userStatus) ? true : n.claimedTier) ? P : 0, W = A.config.rewards[Y], q = (null == W ? true : W.type) === o.w.FRACTIONAL_PREMIUM, K = (null == W ? true : W.type) === o.w.COLLECTIBLE, Q = (null == W ? true : W.type) === o.w.VIRTUAL_CURRENCY, J = null == W || null == (j = W.collectibleProduct) || null == (l = j.items) ? true : l[0], X = (null == J ? true : J.type) === s.Z.AVATAR_DECORATION ? J : null;
  (0, p.PM)(k, e => {
    let {
      height: t
    } = e;
    if (!K || null == t || null == U.current || null == k.current || null == G.current) return;
    let n = k.current.getBoundingClientRect(),
      r = U.current.getBoundingClientRect(),
      i = G.current.getBoundingClientRect();
    R((r.top - n.top - i.height) / 2)
  });
  let $ = (0, u.wj)(F),
    ee = (0, i.useMemo)(() => null != A.config.cosponsorMetadata, [A]),
    et = (0, i.useMemo)(() => (0, y.fh)(A, y.eC.REWARD), [A]),
    en = Z ? V + 8 : 0,
    er = (0, b.mH)(O.jn.TROPHY_CASE_CARD),
    {
      content_position: ei,
      row_index: el
    } = er,
    ea = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(er, ["content_position", "row_index"]),
    es = () => {
      w(true), _.default.track(S.rMx.QUEST_HOVER, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        quest_id: A.id
      }, ea))
    },
    eo = () => {
      w(false)
    },
    ec = e => {
      M(true), _.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
        source: e,
        asset_id: e,
        quest_id: A.id
      })
    };
  return null == W || D ? null : (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)("div", {
      ref: k,
      tabIndex: 0,
      onFocus: es,
      onBlur: eo,
      onMouseEnter: es,
      onMouseLeave: eo,
      className: a()(N.container, {
        [N.hovered]: Z
      }),
      children: [null != B && K && null != X && (0, r.jsx)("div", {
        ref: G,
        className: N.decoWrapper,
        style: {
          top: L
        },
        children: (0, r.jsx)(h.Z, {
          avatarDecorationOverride: X,
          user: B,
          guildId: null,
          animateOnHover: !Z
        })
      }), q ? (0, r.jsx)(v.Z, {
        className: N.image
      }) : Q ? (0, r.jsx)(I.Z, {
        className: N.image,
        isAnimated: Z,
        questName: A.config.messages.questName
      }) : et.isAnimated ? (0, r.jsx)(g.Z, {
        className: N.assetBlurred,
        autoPlay: false,
        children: (0, r.jsx)("source", {
          src: et.url,
          type: null != (x = et.mimetype) ? x : true,
          onError: () => ec(et.url)
        })
      }) : (0, r.jsx)("img", {
        className: N.image,
        src: et.url,
        alt: A.config.messages.questName,
        onError: () => ec(et.url)
      }), (0, r.jsx)("div", {
        className: a()(N.overlay, {
          [N.darkThemeGradient]: $,
          [N.lightThemeGradient]: !$
        })
      }), (0, r.jsx)("div", {
        ref: U,
        className: N.logoContainer,
        style: {
          transform: "translateY(-".concat(en, "px)")
        },
        children: (0, r.jsx)(C.ZP, {
          logotypeClassName: a()(N.logo, {
            [N.logoWithCosponsor]: ee
          }),
          quest: A,
          withGameTile: false
        })
      }), (0, r.jsxs)("div", {
        ref: H,
        className: N.details,
        children: [(0, r.jsx)(d.Heading, {
          className: N.title,
          variant: "heading-md/semibold",
          color: "always-white",
          children: T.intl.format(T.t.EAYZAr, {
            questName: A.config.messages.questName
          })
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: $ ? "text-muted" : "always-white",
          style: {
            opacity: $ ? 1 : .75
          },
          children: T.intl.format(T.t["kXVcV+"], {
            reward: W.name,
            claimedDate: z
          })
        })]
      })]
    })
  })
})