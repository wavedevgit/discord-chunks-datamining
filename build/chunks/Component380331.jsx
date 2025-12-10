/** Chunk was on web.js **/
/** chunk id: 380331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk607070 = require("./607070.js"),
  Chunk806966 = require("./806966.js"),
  Chunk254494 = require("./254494.jsx"),
  Chunk648307 = require("./648307.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk624138 = require("./624138.js"),
  Chunk543241 = require("./543241.js"),
  Chunk883661 = require("./883661.jsx"),
  Chunk880949 = require("./880949.jsx"),
  Chunk784222 = require("./784222.js"),
  Chunk149203 = require("./149203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk911166 = require("./911166.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  j = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  M = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  k = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  U = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  G = (0, Chunk624138.Mg)(Chunk911166.__invalid_unicodeCategoryShortcutHeight),
  Z = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  B = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  F = M + j + 2 * U,
  V = L + j,
  H = V + (Z + 2 * B),
  Y = M + k + 2 * U,
  W = 7;

function K(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: a,
    categories: s,
    category: l,
    handleCategorySelect: u,
    isWindowFocused: d,
    useReducedMotion: p
  } = e, _ = (0, c.JA)("expression-guild-".concat(n)), m = l.type === T.En.GUILD ? null : l.id, h = t === n, E = l.type === T.En.GUILD ? l.guild : null, y = (0, r.jsxs)(f.P3F, x(D({}, _), {
    "aria-label": (0, O.Nf)(l, E),
    className: o()({
      [P.categoryItemGuildCategory]: null != E,
      [P.categoryItemDefaultCategory]: null == E,
      [P.categoryItemDefaultCategorySelected]: null == E && h,
      [P.categoryItemRecentEmoji]: l.type === T.En.RECENT
    }),
    onClick: () => {
      null != E && b.default.track(C.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == a ? true : a.location,
        tab: A.X1.EMOJI,
        guild_id: E.id
      }), u(n)
    },
    children: [null != E ? (0, r.jsx)(S.Z, {
      guild: E,
      isSelected: h,
      shouldAnimate: !p && d,
      isLocked: l.isNitroLocked
    }) : null, null == E && null != m ? (0, r.jsx)(v.Z, {
      categoryId: m,
      className: P.categoryIcon,
      height: M,
      width: M,
      size: "custom"
    }) : null]
  })), I = s[n + 1], N = null != I && l.type === T.En.GUILD && I.type !== T.En.GUILD;
  return null != E ? (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(g.V, {
      guild: E,
      children: (0, r.jsx)("div", {
        children: y
      })
    }), N ? (0, r.jsx)("hr", {
      className: P.guildCategorySeparator
    }, "separator") : null]
  }) : y
}
let z = e => {
  var t;
  let {
    className: n,
    emojiListRef: a,
    sectionDescriptors: s,
    intention: c,
    channel: d,
    fallbackGuildId: g,
    shouldShowSoundmojiInEmojiPicker: b = false,
    showOnlyUnicode: y = false
  } = e, v = m.kJ.useStore(e => e.activeCategoryIndex), S = (0, I.Ni)({
    sectionDescriptors: s,
    emojiListRef: a
  }), C = (0, p.O)(), A = (0, O.kI)(c, d, null != (t = null == d ? true : d.guild_id) ? t : g, b), R = i.useMemo(() => y ? (0, O.ZF)() : A, [A, y]), D = i.useRef(null), w = (0, u.e7)([E.Z], () => E.Z.isFocused()), x = (0, u.e7)([_.Z], () => _.Z.useReducedMotion, []), L = i.useMemo(() => l().memoize((e, t) => {
    let n = R[t];
    if (null != n) return (0, r.jsx)(K, {
      activeIndex: v,
      analyticsContext: C,
      categories: R,
      category: n,
      categoryIndex: t,
      handleCategorySelect: S,
      isWindowFocused: w,
      useReducedMotion: x
    }, t)
  }), [v, C, R, S, w, x]), U = i.useMemo(() => [8, 8, 0, 8], []), z = i.useCallback((e, t) => {
    let n = R[t];
    if (n.type === T.En.RECENT) return F;
    if (n.type === T.En.GUILD) {
      let e = R[t + 1];
      return null != e && e.type !== T.En.GUILD ? H : V
    }
    return Y
  }, [R]), {
    nonUnicodeCategoryCount: q,
    firstUnicodeCategoryIndex: Q,
    firstUnicodeCategoryOffsetTop: X,
    rowCountBySection: J
  } = i.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      r = 0;
    R.forEach(i => {
      i.type === T.En.GUILD ? (t += 1, n += 1) : i.type === T.En.UNICODE ? r += 1 : (e += 1, t += 1)
    });
    let i = F + t * V + H;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: i,
      rowCountBySection: [e, n, r]
    }
  }, [R]), [$, ee] = i.useState(true);
  i.useLayoutEffect(() => {
    ee(q >= W)
  }, [q]);
  let et = i.useCallback(e => {
      var t;
      let n = null == (t = D.current) ? true : t.getListDimensions();
      null != n && (e + n.height - Z >= X ? ee(false) : ee(true))
    }, [X]),
    en = i.useCallback(e => {
      var t;
      e(Q), null == (t = D.current) || t.scrollTo(X)
    }, [X, Q]),
    er = i.useCallback((e, t) => {
      let n = R[e];
      if (null == n) return 0;
      let r = $ ? G : 0;
      if (n.type === T.En.RECENT) return t ? 0 : k;
      if (n.type === T.En.GUILD) {
        let n = R[e + 1];
        return null != n && n.type !== T.En.GUILD ? t ? Z + false * B + j + r : j : t ? r : j
      }
      return t ? j + r : 2 * j
    }, [R, $]),
    ei = i.useMemo(() => function(e, t) {
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, e)
    }, []),
    ea = $ ? "shortcut" : "hiddenshortcut";
  return (0, r.jsx)(h.Z, {
    categoryListRef: D,
    expressionsListRef: a,
    className: n,
    store: m.kJ,
    categories: R,
    listPadding: U,
    onScroll: et,
    renderCategoryListItem: L,
    renderSection: ei,
    rowCount: R.length,
    categoryHeight: z,
    getScrollOffsetForIndex: er,
    rowCountBySection: J,
    children: e => q >= W && (0, r.jsx)(f.P3F, {
      "aria-hidden": !$,
      "aria-label": N.intl.string(N.t.dT0ctw),
      className: o()(P.unicodeShortcut, {
        [P.unicodeShortcutInvisible]: !$
      }),
      tabIndex: $ ? 0 : false,
      onClick: () => en(e),
      children: (0, r.jsx)(f.EO4, {
        size: "custom",
        color: "currentColor",
        height: M,
        width: M
      })
    }, ea)
  })
}