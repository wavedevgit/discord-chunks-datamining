/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(232713),
  l = n(260866),
  c = n(481060),
  u = n(806966),
  d = n(28546),
  f = n(149203),
  _ = n(981631),
  p = n(388032),
  h = n(82845);
let g = i.forwardRef(function(e, t) {
    let {
      emojiListRef: n,
      gridNavigatorId: o,
      isFullRow: g,
      onKeyDown: m,
      onFocus: E,
      autoFocus: v,
      className: b,
      defaultSearchPlaceholder: y
    } = e, O = i.useRef(null), S = (0, d.Iu)(e => e.searchQuery), [I, T] = u.kJ.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], s.X), N = i.useCallback(e => {
      var t;
      u.kJ.setActiveCategoryIndex("" === e ? 0 : f.c), u.kJ.setInspectedExpressionPosition(0, 0), u.kJ.setSearchPlaceholder(null), (0, d.ql)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0)
    }, [n]), A = i.useCallback(() => {
      (0, d.ql)("")
    }, []), C = e => {
      switch (e.keyCode) {
        case _.yXg.ARROW_LEFT:
        case _.yXg.ARROW_RIGHT:
        case _.yXg.ARROW_UP:
        case _.yXg.ARROW_DOWN:
          document.activeElement !== e.target && e.preventDefault()
      }
      m(e)
    };
    return i.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        return null === (e = O.current) || void 0 === e ? void 0 : e.focus()
      }
    })), (0, r.jsx)(c.E1j, {
      autoFocus: v,
      query: S,
      ref: O,
      size: c.E1j.Sizes.MEDIUM,
      placeholder: null != T ? T : y,
      onClear: A,
      onKeyDown: C,
      onFocus: E,
      onChange: N,
      className: a()(b, {
        [h.searchBarFullRow]: g
      }),
      inputProps: {
        "aria-label": p.NW.string(p.t.tCauZW),
        "aria-haspopup": "grid",
        "aria-controls": o,
        "aria-expanded": !0,
        "aria-activedescendant": (0, l.NE)(o, I.columnIndex, I.rowIndex)
      }
    })
  }),
  m = i.memo(g)