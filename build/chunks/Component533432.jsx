/** Chunk was on web.js **/
/** chunk id: 533432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk260866 = require("./260866.js"),
  Chunk481060 = require("./481060.js"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk149203 = require("./149203.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx");
let p = Chunk473749.forwardRef(function(e, t) {
    let {
      emojiListRef: n,
      gridNavigatorId: p,
      onKeyDown: _,
      onFocus: m,
      autoFocus: h,
      defaultSearchPlaceholder: g
    } = e, E = i.useRef(null), b = (0, c.Iu)(e => e.searchQuery), [y, O] = l.kJ.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], a.X), v = i.useCallback(e => {
      var t;
      l.kJ.setActiveCategoryIndex("" === e ? 0 : u.c), l.kJ.setInspectedExpressionPosition(0, 0), l.kJ.setSearchPlaceholder(null), (0, c.ql)(e), null == (t = n.current) || t.scrollTo(0)
    }, [n]), S = i.useCallback(() => {
      (0, c.ql)("")
    }, []), I = e => {
      switch (e.key) {
        case d.vn.ARROW_LEFT:
        case d.vn.ARROW_RIGHT:
        case d.vn.ARROW_UP:
        case d.vn.ARROW_DOWN:
          document.activeElement !== e.target && e.preventDefault()
      }
      _(e)
    };
    return i.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        return null == (e = E.current) ? true : e.focus()
      }
    })), (0, r.jsx)(s.E1j, {
      autoFocus: h,
      query: b,
      ref: E,
      placeholder: null != O ? O : g,
      onClear: S,
      onKeyDown: I,
      onFocus: m,
      onChange: v,
      inputProps: {
        "aria-label": f.intl.string(f.t.tCauZX),
        "aria-haspopup": "grid",
        "aria-controls": p,
        "aria-expanded": true,
        "aria-activedescendant": (0, o.NE)(p, y.columnIndex, y.rowIndex)
      }
    })
  }),
  _ = Chunk473749.memo(p)