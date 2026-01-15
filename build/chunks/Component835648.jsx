/** Chunk was on web.js **/
/** chunk id: 835648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk880949 = require("./880949.jsx"),
  Chunk806966 = require("./806966.js"),
  Chunk254494 = require("./254494.jsx"),
  Chunk648307 = require("./648307.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk697426 = require("./697426.js"),
  Chunk526617 = require("./526617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk98228 = require("./98228.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = [8, 8, 8, 8],
  w = 40;

function R(e) {
  let {
    icon: t,
    isSelected: n,
    onClick: i,
    listItemProps: a
  } = e;
  return (0, r.jsx)(u.P3F, N(C({}, a), {
    onClick: i,
    className: o()(I.categoryIcon, {
      [I.selected]: n
    }),
    children: (0, r.jsx)(t, {
      className: I.categoryIconIcon,
      color: "currentColor"
    })
  }))
}

function D(e, t, n, i, a) {
  switch (e.categoryInfo.type) {
    case E.bg.FAVORITES:
      return (0, r.jsx)(R, {
        icon: u.r7p,
        onClick: t,
        isSelected: n,
        listItemProps: i
      }, e.key);
    case E.bg.RECENTLY_HEARD:
      return (0, r.jsx)(R, {
        icon: u.T39,
        onClick: t,
        isSelected: n,
        listItemProps: i
      }, e.key);
    case E.bg.FREQUENTLY_USED:
      return (0, r.jsx)(R, {
        icon: u.IeX,
        onClick: t,
        isSelected: n,
        listItemProps: i
      }, e.key);
    case E.bg.GUILD:
      return (0, r.jsx)(u.P3F, N(C({}, i), {
        className: I.category,
        onClick: t,
        children: (0, r.jsx)(d.Z, {
          guild: e.categoryInfo.guild,
          isSelected: n,
          isLocked: a
        })
      }), e.key);
    case E.bg.DEFAULTS:
      return (0, r.jsx)(R, {
        icon: u.gw7,
        onClick: t,
        isSelected: n,
        listItemProps: i
      }, e.key);
    default:
      return null
  }
}

function x(e) {
  switch (e.categoryInfo.type) {
    case E.bg.FAVORITES:
      return S.intl.string(S.t.k8fFjp);
    case E.bg.RECENTLY_HEARD:
      return S.intl.string(S.t["8i/+SA"]);
    case E.bg.FREQUENTLY_USED:
      return S.intl.string(S.t["+cGVV6"]);
    case E.bg.GUILD:
      return e.categoryInfo.guild.name;
    case E.bg.DEFAULTS:
      return S.intl.string(S.t.Rtvk9X)
  }
}

function L(e) {
  let {
    category: t,
    categoryIndex: n,
    onClick: i,
    isSelected: a,
    isNitroLocked: o
  } = e, l = (0, s.JA)("soundboard_guild_".concat(n));
  return t.categoryInfo.type === E.bg.GUILD ? (0, r.jsx)(_.V, {
    guild: t.categoryInfo.guild,
    children: D(t, i, a, l, o)
  }) : (0, r.jsx)(c.u, {
    text: x(t),
    position: "right",
    align: "center",
    children: D(t, i, a, l, o)
  })
}

function j(e) {
  let {
    soundboardListRef: t,
    categories: n,
    shouldUpsellLockedCategories: a,
    listPadding: o = P,
    guildId: s,
    inExpressionPicker: c,
    showPinnedDefaultsShortcut: d = false
  } = e, _ = i.useRef(null), E = (0, l.e7)([h.default], () => h.default.getCurrentUser()), T = (0, g.I5)(E, v.PremiumTypes.TIER_2), C = i.useCallback(e => {
    var r;
    let i = n.length - 1;
    e(i), null == (r = t.current) || r.scrollToSectionTop(i)
  }, [n.length, t]), A = i.useCallback((e, t, n, i) => {
    let o = a && (0, b.O)(e.categoryInfo, T, s),
      l = () => {
        m.default.track(y.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
          location: {
            page: y.ZY5.SOUNDBOARD_POPOUT
          },
          guild_id: null != s ? s : null,
          num_expressions: e.items.length,
          tab: O.X1.SOUNDBOARD,
          sticker_pack_id: null,
          pack_id: null
        }), n()
      };
    return (0, r.jsx)(L, {
      category: e,
      categoryIndex: t,
      onClick: l,
      isSelected: i,
      isNitroLocked: o
    })
  }, [s, a, T]);
  return (0, r.jsx)(p.Z, {
    className: c ? I.expressionPickerCategoryList : I.categoryList,
    categoryListRef: _,
    expressionsListRef: t,
    store: f.Wq,
    categories: n,
    listPadding: o,
    renderCategoryListItem: A,
    rowCount: n.length,
    categoryHeight: w,
    children: e => d && (0, r.jsx)(u.P3F, {
      "aria-label": S.intl.string(S.t.Rtvk9X),
      className: I.defaultsShortcut,
      onClick: () => C(e),
      children: (0, r.jsx)(u.gw7, {
        size: "custom",
        width: 24,
        height: 24,
        color: "currentColor"
      })
    })
  })
}