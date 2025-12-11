/** Chunk was on web.js **/
/** chunk id: 31543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk260866 = require("./260866.js"),
  Chunk481060 = require("./481060.js"),
  Chunk806966 = require("./806966.js"),
  Chunk28546 = require("./28546.js"),
  Chunk453070 = require("./453070.js"),
  Chunk611480 = require("./611480.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201632 = require("./201632.js");
let _ = Chunk473749.forwardRef(function(e, t) {
  let {
    onKeyDown: n,
    stickersListRef: _,
    channel: m
  } = e, h = (0, u.fQ)(m), g = i.useRef(null), {
    searchQuery: E,
    isSearchSuggestion: b
  } = (0, c.Iu)(e => ({
    searchQuery: e.searchQuery,
    isSearchSuggestion: e.isSearchSuggestion
  }), a.X), y = l.ZN.useStore(e => e.searchPlaceholder), O = l.ZN.useStore(e => e.inspectedExpressionPosition, a.X), v = i.useCallback(e => {
    var t;
    l.ZN.setActiveCategoryIndex("" === e ? 0 : d.c), l.ZN.setInspectedExpressionPosition(0, 0), l.ZN.setSearchPlaceholder(null), (0, c.ql)(e), null == (t = _.current) || t.scrollTo(0)
  }, [_]), S = i.useCallback(() => {
    (0, c.ql)("")
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
    className: p.wrapper,
    children: (0, r.jsx)(s.E1j, {
      autoFocus: h,
      disabled: !h,
      query: E,
      ref: g,
      placeholder: null != y ? y : h ? f.intl.string(f.t.dt5h1C) : f.intl.string(f.t["Pck/4U"]),
      onClear: S,
      onKeyDown: n,
      onChange: v,
      inputProps: {
        "aria-haspopup": "grid",
        "aria-controls": d.Vr,
        "aria-expanded": true,
        "aria-activedescendant": (0, o.NE)(d.Vr, O.columnIndex, O.rowIndex)
      }
    })
  })
})