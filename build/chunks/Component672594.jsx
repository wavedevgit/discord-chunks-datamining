/** Chunk was on web.js **/
/** chunk id: 672594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk602034 = require("./602034.js"),
  Chunk397927 = require("./397927.js"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js");
require("./732139.js");
var Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx");
let f = Chunk64700.forwardRef(function(e, t) {
    let {
      emojiListRef: n,
      gridNavigatorId: f,
      onKeyDown: p,
      onFocus: _,
      autoFocus: h,
      defaultSearchPlaceholder: m
    } = e, g = i.useRef(null), E = (0, c.RQ)(e => e.searchQuery), [y, b] = l.Om.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], a.x), O = i.useCallback(e => {
      var t;
      l.Om.setActiveCategoryIndex("" === e ? 0 : false), l.Om.setInspectedExpressionPosition(0, 0), l.Om.setSearchPlaceholder(null), (0, c.Ri)(e), null == (t = n.current) || t.scrollTo(0)
    }, [n]), v = i.useCallback(() => {
      (0, c.Ri)("")
    }, []), A = e => {
      switch (e.key) {
        case u.dh.ARROW_LEFT:
        case u.dh.ARROW_RIGHT:
        case u.dh.ARROW_UP:
        case u.dh.ARROW_DOWN:
          document.activeElement !== e.target && e.preventDefault()
      }
      p(e)
    };
    return i.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        return null == (e = g.current) ? true : e.focus()
      }
    })), (0, r.jsx)(o.IWV, {
      autoFocus: h,
      query: E,
      ref: g,
      placeholder: null != b ? b : m,
      onClear: v,
      onKeyDown: A,
      onFocus: _,
      onChange: O,
      inputProps: {
        "aria-label": d.intl.string(d.t.tCauZX),
        "aria-haspopup": "grid",
        "aria-controls": f,
        "aria-expanded": true,
        "aria-activedescendant": (0, s.Aq)(f, y.columnIndex, y.rowIndex)
      }
    })
  }),
  p = Chunk64700.memo(f)