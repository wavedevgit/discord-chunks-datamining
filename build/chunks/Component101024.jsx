/** Chunk was on web.js **/
/** chunk id: 101024, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk602034 = require("./602034.js"),
  Chunk397927 = require("./397927.js"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js"),
  Chunk64306 = require("./64306.js");
let d = Chunk64700.forwardRef(function(e, t) {
  let {
    store: n,
    hasSendableExpressions: d,
    onKeyDown: f,
    gridNavigatorId: p,
    expressionsListRef: _,
    defaultSearchPlaceholder: h,
    emptySearchPlaceholder: m
  } = e, g = i.useRef(null), [E, y] = (0, c.RQ)(e => [e.searchQuery, e.isSearchSuggestion], a.x), b = n.useStore(e => e.searchPlaceholder), O = n.useStore(e => e.inspectedExpressionPosition, a.x), v = i.useCallback(e => {
    var t;
    n.setActiveCategoryIndex("" === e ? 0 : l.Uk), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, c.Ri)(e), null == (t = _.current) || t.scrollTo(0)
  }, [_, n]), A = i.useCallback(() => {
    (0, c.Ri)("")
  }, []);
  i.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null == (e = g.current) ? true : e.focus()
    }
  })), i.useLayoutEffect(() => {
    if (y) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [y]);
  let I = () => null != b ? b : d || null == m ? h : m;
  return (0, r.jsx)("div", {
    className: u.i,
    children: (0, r.jsx)(s.IWV, {
      autoFocus: d,
      disabled: !d,
      query: E,
      ref: g,
      placeholder: I(),
      onClear: A,
      onKeyDown: f,
      onChange: v,
      inputProps: {
        "aria-haspopup": "grid",
        "aria-controls": p,
        "aria-expanded": true,
        "aria-activedescendant": (0, o.Aq)(p, O.columnIndex, O.rowIndex)
      }
    })
  })
})