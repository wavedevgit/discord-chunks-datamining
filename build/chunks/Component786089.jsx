/** Chunk was on web.js **/
/** chunk id: 786089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function D(e) {
  var t, n, a, N, w, D;
  let {
    quest: x
  } = e, [L, j] = (0, i.useState)(false), [M, k] = (0, i.useState)(24), [U, G] = (0, i.useState)(false), B = (0, i.useRef)(null), Z = (0, i.useRef)(null), F = (0, i.useRef)(null), V = (0, c.e7)([m.default], () => m.default.getCurrentUser()), {
    ref: H,
    height: Y = 0
  } = (0, f.ZP)(), W = (0, _.ZP)(), K = (0, b.B6)(null == (t = x.userStatus) ? true : t.claimedAt, {
    month: "numeric",
    day: "numeric"
  }), z = null != (w = null == (n = x.userStatus) ? true : n.claimedTier) ? w : 0, q = x.config.rewards[z], X = (null == q ? true : q.type) === l.w.FRACTIONAL_PREMIUM, Q = (null == q ? true : q.type) === l.w.COLLECTIBLE, J = (null == q ? true : q.type) === l.w.VIRTUAL_CURRENCY, $ = null == q || null == (N = q.collectibleProduct) || null == (a = N.items) ? true : a[0], ee = (null == $ ? true : $.type) === s.Z.AVATAR_DECORATION ? $ : null;
  (0, f.PM)(B, e => {
    let {
      height: t
    } = e;
    if (!Q || null == t || null == Z.current || null == B.current || null == F.current) return;
    let n = B.current.getBoundingClientRect(),
      r = Z.current.getBoundingClientRect(),
      i = F.current.getBoundingClientRect();
    k((r.top - n.top - i.height) / 2)
  });
  let et = (0, u.wj)(W),
    en = (0, i.useMemo)(() => null != x.config.cosponsorMetadata, [x]),
    er = (0, i.useMemo)(() => (0, O.fh)(x, O.eC.REWARD), [x]),
    ei = L ? Y + 8 : 0,
    ea = (0, E.mH)(y.jn.TROPHY_CASE_CARD),
    {
      content_position: eo,
      row_index: es
    } = ea,
    el = P(ea, ["content_position", "row_index"]),
    ec = () => {
      j(true), g.default.track(S.rMx.QUEST_HOVER, R({
        quest_id: x.id
      }, el))
    },
    eu = () => j(false),
    ed = e => {
      G(true), g.default.track(S.rMx.QUEST_ASSET_LOADING_FAILURE, {
        source: e,
        asset_id: e,
        quest_id: x.id
      })
    };
  return null == q || U ? null : (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)("div", {
      ref: B,
      tabIndex: 0,
      onFocus: ec,
      onBlur: eu,
      onMouseEnter: ec,
      onMouseLeave: eu,
      className: o()(C.container, {
        [C.hovered]: L
      }),
      children: [null != V && Q && null != ee && (0, r.jsx)("div", {
        ref: F,
        className: C.decoWrapper,
        style: {
          top: M
        },
        children: (0, r.jsx)(p.Z, {
          avatarDecorationOverride: ee,
          user: V,
          guildId: null
        })
      }), X ? (0, r.jsx)(v.Z, {
        className: C.image
      }) : J ? (0, r.jsx)(I.Z, {
        className: C.image
      }) : er.isAnimated ? (0, r.jsx)(h.Z, {
        className: C.assetBlurred,
        autoPlay: false,
        children: (0, r.jsx)("source", {
          src: er.url,
          type: null != (D = er.mimetype) ? D : true,
          onError: () => ed(er.url)
        })
      }) : (0, r.jsx)("img", {
        className: C.image,
        src: er.url,
        alt: x.config.messages.questName,
        onError: () => ed(er.url)
      }), (0, r.jsx)("div", {
        className: o()(C.overlay, {
          [C.darkThemeGradient]: et,
          [C.lightThemeGradient]: !et
        })
      }), (0, r.jsx)("div", {
        ref: Z,
        className: C.logoContainer,
        style: {
          transform: "translateY(-".concat(ei, "px)")
        },
        children: (0, r.jsx)(T.ZP, {
          logotypeClassName: o()(C.logo, {
            [C.logoWithCosponsor]: en
          }),
          quest: x,
          withGameTile: false
        })
      }), (0, r.jsxs)("div", {
        ref: H,
        className: C.details,
        children: [(0, r.jsx)(d.X6q, {
          className: C.title,
          variant: "heading-md/semibold",
          color: "always-white",
          children: A.intl.format(A.t.EAYZAg, {
            questName: x.config.messages.questName
          })
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: et ? "text-muted" : "always-white",
          style: {
            opacity: et ? 1 : .75
          },
          children: A.intl.format(A.t.kXVcV1, {
            reward: q.name,
            claimedDate: K
          })
        })]
      })]
    })
  })
}
let x = (0, Chunk647438.memo)(D)