/** Chunk was on web.js **/
/** chunk id: 533432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk94171 = require("./94171.js"),
  Chunk260866 = require("./260866.js"),
  Chunk481060 = require("./481060.js"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk149203 = require("./149203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk948488 = require("./948488.js");
let m = Chunk73800.forwardRef(function(e, t) {
    let {
      emojiListRef: n,
      gridNavigatorId: o,
      isFullRow: m,
      onKeyDown: g,
      onFocus: E,
      autoFocus: b,
      className: y,
      defaultSearchPlaceholder: O
    } = e, v = i.useRef(null), I = (0, d.Iu)(e => e.searchQuery), [T, S] = u.kJ.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], s.X), A = i.useCallback(e => {
      var t;
      u.kJ.setActiveCategoryIndex("" === e ? 0 : f.c), u.kJ.setInspectedExpressionPosition(0, 0), u.kJ.setSearchPlaceholder(null), (0, d.ql)(e), null == (t = n.current) || t.scrollTo(0)
    }, [n]), N = i.useCallback(() => {
      (0, d.ql)("")
    }, []), C = e => {
      switch (e.keyCode) {
        case _.yXg.ARROW_LEFT:
        case _.yXg.ARROW_RIGHT:
        case _.yXg.ARROW_UP:
        case _.yXg.ARROW_DOWN:
          document.activeElement !== e.target && e.preventDefault()
      }
      g(e)
    };
    return i.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        return null == (e = v.current) ? true : e.focus()
      }
    })), (0, r.jsx)(c.E1j, {
      autoFocus: b,
      query: I,
      ref: v,
      placeholder: null != S ? S : O,
      onClear: N,
      onKeyDown: C,
      onFocus: E,
      onChange: A,
      className: a()(y, {
        [h.searchBarFullRow]: m
      }),
      inputProps: {
        "aria-label": p.intl.string(p.t.tCauZW),
        "aria-haspopup": "grid",
        "aria-controls": o,
        "aria-expanded": true,
        "aria-activedescendant": (0, l.NE)(o, T.columnIndex, T.rowIndex)
      }
    })
  }),
  g = Chunk73800.memo(m)