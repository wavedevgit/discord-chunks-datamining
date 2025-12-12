/** Chunk was on web.js **/
/** chunk id: 810462, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk260866 = require("./260866.js"),
  Chunk481060 = require("./481060.js"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk916355 = require("./916355.js");
let d = Chunk473749.forwardRef(function(e, t) {
  let {
    store: n,
    hasSendableExpressions: d,
    onKeyDown: f,
    gridNavigatorId: p,
    expressionsListRef: _,
    defaultSearchPlaceholder: m,
    emptySearchPlaceholder: h
  } = e, g = i.useRef(null), [E, b] = (0, c.Iu)(e => [e.searchQuery, e.isSearchSuggestion], a.X), y = n.useStore(e => e.searchPlaceholder), O = n.useStore(e => e.inspectedExpressionPosition, a.X), v = i.useCallback(e => {
    var t;
    n.setActiveCategoryIndex("" === e ? 0 : l.c), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, c.ql)(e), null == (t = _.current) || t.scrollTo(0)
  }, [_, n]), S = i.useCallback(() => {
    (0, c.ql)("")
  }, []);
  i.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null == (e = g.current) ? true : e.focus()
    }
  })), i.useLayoutEffect(() => {
    if (b) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [b]);
  let I = () => null != y ? y : d || null == h ? m : h;
  return (0, r.jsx)("div", {
    className: u.wrapper,
    children: (0, r.jsx)(s.E1j, {
      autoFocus: d,
      disabled: !d,
      query: E,
      ref: g,
      placeholder: I(),
      onClear: S,
      onKeyDown: f,
      onChange: v,
      inputProps: {
        "aria-haspopup": "grid",
        "aria-controls": p,
        "aria-expanded": true,
        "aria-activedescendant": (0, o.NE)(p, O.columnIndex, O.rowIndex)
      }
    })
  })
})