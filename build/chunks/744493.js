/** Chunk was on web.js **/
/** chunk id: 744493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => l
});
var Chunk89494 = require("./89494.js"),
  Chunk64700 = require("./64700.js"),
  Chunk114099 = require("./114099.js"),
  Chunk297987 = require("./297987.js"),
  Chunk241827 = require("./241827.js");

function l(e) {
  let {
    isDisabled: t,
    onBlurWithin: n,
    onFocusWithin: l,
    onFocusWithinChange: c
  } = e, u = (0, i.useRef)({
    isFocusWithin: false
  }), {
    addGlobalListener: d,
    removeAllGlobalListeners: f
  } = (0, a.A)(), p = (0, i.useCallback)(e => {
    e.currentTarget.contains(e.target) && u.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (u.current.isFocusWithin = false, f(), n && n(e), c && c(false))
  }, [n, c, u, f]), _ = (0, r.yB)(p), h = (0, i.useCallback)(e => {
    if (!e.currentTarget.contains(e.target)) return;
    let t = (0, o.TW)(e.target),
      n = (0, s.bq)(t);
    if (!u.current.isFocusWithin && n === (0, s.wt)(e.nativeEvent)) {
      l && l(e), c && c(true), u.current.isFocusWithin = true, _(e);
      let n = e.currentTarget;
      d(t, "focus", e => {
        if (u.current.isFocusWithin && !(0, s.sD)(n, e.target)) {
          let i = new t.defaultView.FocusEvent("blur", {
            relatedTarget: e.target
          });
          (0, r.o1)(i, n), p((0, r.eg)(i))
        }
      }, {
        capture: true
      })
    }
  }, [l, c, _, d, p]);
  return t ? {
    focusWithinProps: {
      onFocus: true,
      onBlur: true
    }
  } : {
    focusWithinProps: {
      onFocus: h,
      onBlur: p
    }
  }
}