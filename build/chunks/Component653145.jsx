/** Chunk was on web.js **/
/** chunk id: 653145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk775602 = require("./775602.js"),
  Chunk850992 = require("./850992.js"),
  Chunk802019 = require("./802019.jsx"),
  Chunk407698 = require("./407698.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk240248 = require("./240248.js"),
  Chunk822123 = require("./822123.js"),
  Chunk535622 = require("./535622.jsx"),
  Chunk724511 = require("./724511.jsx"),
  Chunk484333 = require("./484333.js"),
  Chunk732139 = require("./732139.js"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk497481 = require("./497481.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
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

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  M = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  j = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  k = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  U = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  G = (0, Chunk240248.xI)(Chunk497481.__invalid_unicodeCategoryShortcutHeight),
  V = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  F = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  B = j + M + 2 * U,
  H = x + M,
  Y = H + (V + 2 * F),
  W = j + k + 2 * U,
  K = 7;

function z(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: a,
    categories: s,
    category: l,
    handleCategorySelect: u,
    isWindowFocused: d,
    useReducedMotion: p
  } = e, _ = (0, c.rm)("expression-guild-".concat(n)), h = l.type === S.s.GUILD ? null : l.id, m = t === n, E = l.type === S.s.GUILD ? l.guild : null, b = (0, r.jsxs)(f.DUT, L(P({}, _), {
    "aria-label": (0, O.wt)(l, E),
    className: o()({
      [w.ZG]: null != E,
      [w.Bj]: null == E,
      [w.s6]: null == E && m,
      [w.xg]: l.type === S.s.RECENT
    }),
    onClick: () => {
      null != E && y.default.track(T.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == a ? true : a.location,
        tab: C.kx.EMOJI,
        guild_id: E.id
      }), u(n)
    },
    children: [null != E ? (0, r.jsx)(A.A, {
      guild: E,
      isSelected: m,
      shouldAnimate: !p && d,
      isLocked: l.isNitroLocked
    }) : null, null == E && null != h ? (0, r.jsx)(v.A, {
      categoryId: h,
      className: w.Yl,
      height: j,
      width: j,
      size: "custom"
    }) : null]
  })), I = s[n + 1], N = null != I && l.type === S.s.GUILD && I.type !== S.s.GUILD;
  return null != E ? (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(g.Q, {
      guild: E,
      children: (0, r.jsx)("div", {
        children: b
      })
    }), N ? (0, r.jsx)("hr", {
      className: w.ny
    }, "separator") : null]
  }) : b
}
let q = e => {
  var t;
  let {
    className: n,
    emojiListRef: a,
    sectionDescriptors: s,
    intention: c,
    channel: d,
    fallbackGuildId: g,
    shouldShowSoundmojiInEmojiPicker: y = false,
    showOnlyUnicode: b = false
  } = e, v = h.Om.useStore(e => e.activeCategoryIndex), A = (0, I.cr)({
    sectionDescriptors: s,
    emojiListRef: a
  }), T = (0, p.p)(), C = (0, O.ss)(c, d, null != (t = null == d ? true : d.guild_id) ? t : g, y), R = i.useMemo(() => b ? (0, O.CQ)() : C, [C, b]), P = i.useRef(null), D = (0, u.bG)([E.A], () => E.A.isFocused()), L = (0, u.bG)([_.A], () => _.A.useReducedMotion, []), x = i.useMemo(() => l().memoize((e, t) => {
    let n = R[t];
    if (null != n) return (0, r.jsx)(z, {
      activeIndex: v,
      analyticsContext: T,
      categories: R,
      category: n,
      categoryIndex: t,
      handleCategorySelect: A,
      isWindowFocused: D,
      useReducedMotion: L
    }, t)
  }), [v, T, R, A, D, L]), U = i.useMemo(() => [8, 8, 0, 8], []), q = i.useCallback((e, t) => {
    let n = R[t];
    if (n.type === S.s.RECENT) return B;
    if (n.type === S.s.GUILD) {
      let e = R[t + 1];
      return null != e && e.type !== S.s.GUILD ? Y : H
    }
    return W
  }, [R]), {
    nonUnicodeCategoryCount: Z,
    firstUnicodeCategoryIndex: Q,
    firstUnicodeCategoryOffsetTop: X,
    rowCountBySection: J
  } = i.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      r = 0;
    R.forEach(i => {
      i.type === S.s.GUILD ? (t += 1, n += 1) : i.type === S.s.UNICODE ? r += 1 : (e += 1, t += 1)
    });
    let i = B + t * H + Y;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: i,
      rowCountBySection: [e, n, r]
    }
  }, [R]), [$, ee] = i.useState(true);
  i.useLayoutEffect(() => {
    ee(Z >= K)
  }, [Z]);
  let et = i.useCallback(e => {
      var t;
      let n = null == (t = P.current) ? true : t.getListDimensions();
      null == n || (e + n.height - V >= X ? ee(false) : ee(true))
    }, [X]),
    en = i.useCallback(e => {
      var t;
      e(Q), null == (t = P.current) || t.scrollTo(X)
    }, [X, Q]),
    er = i.useCallback((e, t) => {
      let n = R[e];
      if (null == n) return 0;
      let r = $ ? G : 0;
      if (n.type === S.s.RECENT) return t ? 0 : k;
      if (n.type === S.s.GUILD) {
        let n = R[e + 1];
        return null != n && n.type !== S.s.GUILD ? t ? V + false * F + M + r : M : t ? r : M
      }
      return t ? M + r : 2 * M
    }, [R, $]),
    ei = i.useMemo(() => function(e, t) {
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, e)
    }, []),
    ea = $ ? "shortcut" : "hiddenshortcut";
  return (0, r.jsx)(m.A, {
    categoryListRef: P,
    expressionsListRef: a,
    className: n,
    store: h.Om,
    categories: R,
    listPadding: U,
    onScroll: et,
    renderCategoryListItem: x,
    renderSection: ei,
    rowCount: R.length,
    categoryHeight: q,
    getScrollOffsetForIndex: er,
    rowCountBySection: J,
    children: e => Z >= K && (0, r.jsx)(f.DUT, {
      "aria-hidden": !$,
      "aria-label": N.intl.string(N.t.dT0ctw),
      className: o()(w.KB, {
        [w.h_]: !$
      }),
      tabIndex: $ ? 0 : false,
      onClick: () => en(e),
      children: (0, r.jsx)(f.nm2, {
        size: "custom",
        color: "currentColor",
        height: j,
        width: j
      })
    }, ea)
  })
}