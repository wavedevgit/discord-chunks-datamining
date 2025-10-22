/** Chunk was on 1272 **/
/** chunk id: 786089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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
  Chunk384809 = require("./384809.js");
let P = (0, Chunk647438.memo)(function(e) {
  var t, n, l, P, j, x;
  let {
    quest: Z
  } = e, [A, w] = (0, i.useState)(false), [L, R] = (0, i.useState)(24), [D, M] = (0, i.useState)(false), k = (0, i.useRef)(null), U = (0, i.useRef)(null), G = (0, i.useRef)(null), B = (0, c.e7)([m.default], () => m.default.getCurrentUser()), {
    ref: H,
    height: V = 0
  } = (0, p.ZP)(), F = (0, f.ZP)(), z = (0, E.B6)(null == (t = Z.userStatus) ? true : t.claimedAt, {
    month: "numeric",
    day: "numeric"
  }), W = null != (j = null == (n = Z.userStatus) ? true : n.claimedTier) ? j : 0, Y = Z.config.rewards[W], q = (null == Y ? true : Y.type) === s.w.FRACTIONAL_PREMIUM, K = (null == Y ? true : Y.type) === s.w.COLLECTIBLE, Q = (null == Y ? true : Y.type) === s.w.VIRTUAL_CURRENCY, X = null == Y || null == (P = Y.collectibleProduct) || null == (l = P.items) ? true : l[0], J = (null == X ? true : X.type) === o.Z.AVATAR_DECORATION ? X : null;
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
    ee = (0, i.useMemo)(() => null != Z.config.cosponsorMetadata, [Z]),
    et = (0, i.useMemo)(() => (0, v.fh)(Z, v.eC.REWARD), [Z]),
    en = A ? V + 8 : 0,
    er = (0, _.mH)(O.jn.TROPHY_CASE_CARD),
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
    eo = () => {
      w(true), b.default.track(S.rMx.QUEST_HOVER, function(e) {
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
        quest_id: Z.id
      }, ea))
    },
    es = () => w(false),
    ec = e => {
      M(true), b.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
        source: e,
        asset_id: e,
        quest_id: Z.id
      })
    };
  return null == Y || D ? null : (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)("div", {
      ref: k,
      tabIndex: 0,
      onFocus: eo,
      onBlur: es,
      onMouseEnter: eo,
      onMouseLeave: es,
      className: a()(T.container, {
        [T.hovered]: A
      }),
      children: [null != B && K && null != J && (0, r.jsx)("div", {
        ref: G,
        className: T.decoWrapper,
        style: {
          top: L
        },
        children: (0, r.jsx)(h.Z, {
          avatarDecorationOverride: J,
          user: B,
          guildId: null
        })
      }), q ? (0, r.jsx)(y.Z, {
        className: T.image
      }) : Q ? (0, r.jsx)(I.Z, {
        className: T.image
      }) : et.isAnimated ? (0, r.jsx)(g.Z, {
        className: T.assetBlurred,
        autoPlay: false,
        children: (0, r.jsx)("source", {
          src: et.url,
          type: null != (x = et.mimetype) ? x : true,
          onError: () => ec(et.url)
        })
      }) : (0, r.jsx)("img", {
        className: T.image,
        src: et.url,
        alt: Z.config.messages.questName,
        onError: () => ec(et.url)
      }), (0, r.jsx)("div", {
        className: a()(T.overlay, {
          [T.darkThemeGradient]: $,
          [T.lightThemeGradient]: !$
        })
      }), (0, r.jsx)("div", {
        ref: U,
        className: T.logoContainer,
        style: {
          transform: "translateY(-".concat(en, "px)")
        },
        children: (0, r.jsx)(C.ZP, {
          logotypeClassName: a()(T.logo, {
            [T.logoWithCosponsor]: ee
          }),
          quest: Z,
          withGameTile: false
        })
      }), (0, r.jsxs)("div", {
        ref: H,
        className: T.details,
        children: [(0, r.jsx)(d.Heading, {
          className: T.title,
          variant: "heading-md/semibold",
          color: "always-white",
          children: N.intl.format(N.t.EAYZAr, {
            questName: Z.config.messages.questName
          })
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: $ ? "text-muted" : "always-white",
          style: {
            opacity: $ ? 1 : .75
          },
          children: N.intl.format(N.t["kXVcV+"], {
            reward: Y.name,
            claimedDate: z
          })
        })]
      })]
    })
  })
})