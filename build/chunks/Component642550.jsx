/** Chunk was on web.js **/
/** chunk id: 642550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk602034 = require("./602034.js"),
  Chunk397927 = require("./397927.js"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js"),
  Chunk256449 = require("./256449.js"),
  Chunk823894 = require("./823894.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641360 = require("./641360.js");
let _ = Chunk64700.forwardRef(function(e, t) {
  let {
    onKeyDown: n,
    stickersListRef: _,
    channel: h
  } = e, m = (0, u.ZO)(h), g = i.useRef(null), {
    searchQuery: E,
    isSearchSuggestion: b
  } = (0, c.RQ)(e => ({
    searchQuery: e.searchQuery,
    isSearchSuggestion: e.isSearchSuggestion
  }), a.x), y = l.bM.useStore(e => e.searchPlaceholder), O = l.bM.useStore(e => e.inspectedExpressionPosition, a.x), A = i.useCallback(e => {
    var t;
    l.bM.setActiveCategoryIndex("" === e ? 0 : false), l.bM.setInspectedExpressionPosition(0, 0), l.bM.setSearchPlaceholder(null), (0, c.Ri)(e), null == (t = _.current) || t.scrollTo(0)
  }, [_]), v = i.useCallback(() => {
    (0, c.Ri)("")
  }, []);
  return i.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null == (e = g.current) ? true : e.focus()
    }
  })), i.useLayoutEffect(() => {
    if (b) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [b]), (0, r.jsx)("div", {
    className: p.i,
    children: (0, r.jsx)(o.IWV, {
      autoFocus: m,
      disabled: !m,
      query: E,
      ref: g,
      placeholder: null != y ? y : m ? f.intl.string(f.t.dt5h1C) : f.intl.string(f.t["Pck/4U"]),
      onClear: v,
      onKeyDown: n,
      onChange: A,
      inputProps: {
        "aria-haspopup": "grid",
        "aria-controls": d.lq,
        "aria-expanded": true,
        "aria-activedescendant": (0, s.Aq)(d.lq, O.columnIndex, O.rowIndex)
      }
    })
  })
})