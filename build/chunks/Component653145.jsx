/** Chunk was on web.js **/
/** chunk id: 653145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function w(e, t, n) {
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
      w(e, t, n[t])
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

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  j = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  M = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  k = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  U = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  G = (0, Chunk240248.xI)(Chunk497481.__invalid_unicodeCategoryShortcutHeight),
  V = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  F = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  B = M + j + 2 * U,
  H = L + j,
  Y = H + (V + 2 * F),
  W = M + k + 2 * U,
  K = 7;

function z(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: a,
    categories: o,
    category: l,
    handleCategorySelect: u,
    isWindowFocused: d,
    useReducedMotion: p
  } = e, _ = (0, c.rm)("expression-guild-".concat(n)), h = l.type === I.s.GUILD ? null : l.id, m = t === n, E = l.type === I.s.GUILD ? l.guild : null, y = (0, r.jsxs)(f.DUT, x(P({}, _), {
    "aria-label": (0, O.wt)(l, E),
    className: s()({
      [R.ZG]: null != E,
      [R.Bj]: null == E,
      [R.s6]: null == E && m,
      [R.xg]: l.type === I.s.RECENT
    }),
    onClick: () => {
      null != E && b.default.track(T.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == a ? true : a.location,
        tab: C.kx.EMOJI,
        guild_id: E.id
      }), u(n)
    },
    children: [null != E ? (0, r.jsx)(v.A, {
      guild: E,
      isSelected: m,
      shouldAnimate: !p && d,
      isLocked: l.isNitroLocked
    }) : null, null == E && null != h ? (0, r.jsx)(A.A, {
      categoryId: h,
      className: R.Yl,
      height: M,
      width: M,
      size: "custom"
    }) : null]
  })), S = o[n + 1], N = null != S && l.type === I.s.GUILD && S.type !== I.s.GUILD;
  return null != E ? (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(g.Q, {
      guild: E,
      children: (0, r.jsx)("div", {
        children: y
      })
    }), N ? (0, r.jsx)("hr", {
      className: R.ny
    }, "separator") : null]
  }) : y
}
let q = e => {
  var t;
  let {
    className: n,
    emojiListRef: a,
    sectionDescriptors: o,
    intention: c,
    channel: d,
    fallbackGuildId: g,
    shouldShowSoundmojiInEmojiPicker: b = false,
    showOnlyUnicode: y = false
  } = e, A = h.Om.useStore(e => e.activeCategoryIndex), v = (0, S.cr)({
    sectionDescriptors: o,
    emojiListRef: a
  }), T = (0, p.p)(), C = (0, O.ss)(c, d, null != (t = null == d ? true : d.guild_id) ? t : g, b), w = i.useMemo(() => y ? (0, O.CQ)() : C, [C, y]), P = i.useRef(null), D = (0, u.bG)([E.A], () => E.A.isFocused()), x = (0, u.bG)([_.A], () => _.A.useReducedMotion, []), L = i.useMemo(() => l().memoize((e, t) => {
    let n = w[t];
    if (null != n) return (0, r.jsx)(z, {
      activeIndex: A,
      analyticsContext: T,
      categories: w,
      category: n,
      categoryIndex: t,
      handleCategorySelect: v,
      isWindowFocused: D,
      useReducedMotion: x
    }, t)
  }), [A, T, w, v, D, x]), U = i.useMemo(() => [8, 8, 0, 8], []), q = i.useCallback((e, t) => {
    let n = w[t];
    if (n.type === I.s.RECENT) return B;
    if (n.type === I.s.GUILD) {
      let e = w[t + 1];
      return null != e && e.type !== I.s.GUILD ? Y : H
    }
    return W
  }, [w]), {
    nonUnicodeCategoryCount: X,
    firstUnicodeCategoryIndex: Z,
    firstUnicodeCategoryOffsetTop: Q,
    rowCountBySection: $
  } = i.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      r = 0;
    w.forEach(i => {
      i.type === I.s.GUILD ? (t += 1, n += 1) : i.type === I.s.UNICODE ? r += 1 : (e += 1, t += 1)
    });
    let i = B + t * H + Y;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: i,
      rowCountBySection: [e, n, r]
    }
  }, [w]), [J, ee] = i.useState(true);
  i.useLayoutEffect(() => {
    ee(X >= K)
  }, [X]);
  let et = i.useCallback(e => {
      var t;
      let n = null == (t = P.current) ? true : t.getListDimensions();
      null == n || (e + n.height - V >= Q ? ee(false) : ee(true))
    }, [Q]),
    en = i.useCallback(e => {
      var t;
      e(Z), null == (t = P.current) || t.scrollTo(Q)
    }, [Q, Z]),
    er = i.useCallback((e, t) => {
      let n = w[e];
      if (null == n) return 0;
      let r = J ? G : 0;
      if (n.type === I.s.RECENT) return t ? 0 : k;
      if (n.type === I.s.GUILD) {
        let n = w[e + 1];
        return null != n && n.type !== I.s.GUILD ? t ? V + false * F + j + r : j : t ? r : j
      }
      return t ? j + r : 2 * j
    }, [w, J]),
    ei = i.useMemo(() => function(e, t) {
      return (0, r.jsx)(i.Fragment, {
        children: t
      }, e)
    }, []),
    ea = J ? "shortcut" : "hiddenshortcut";
  return (0, r.jsx)(m.A, {
    categoryListRef: P,
    expressionsListRef: a,
    className: n,
    store: h.Om,
    categories: w,
    listPadding: U,
    onScroll: et,
    renderCategoryListItem: L,
    renderSection: ei,
    rowCount: w.length,
    categoryHeight: q,
    getScrollOffsetForIndex: er,
    rowCountBySection: $,
    children: e => X >= K && (0, r.jsx)(f.DUT, {
      "aria-hidden": !J,
      "aria-label": N.intl.string(N.t.dT0ctw),
      className: s()(R.KB, {
        [R.h_]: !J
      }),
      tabIndex: J ? 0 : false,
      onClick: () => en(e),
      children: (0, r.jsx)(f.nm2, {
        size: "custom",
        color: "currentColor",
        height: M,
        width: M
      })
    }, ea)
  })
}