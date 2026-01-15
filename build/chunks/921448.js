/** Chunk was on web.js **/
/** chunk id: 921448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => l
});
var Chunk990415 = require("./990415.js"),
  Chunk473749 = require("./473749.js"),
  Chunk920154 = require("./920154.js"),
  Chunk477232 = require("./477232.js"),
  Chunk297808 = require("./297808.js");

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
  } = (0, a.x)(), p = (0, i.useCallback)(e => {
    e.currentTarget.contains(e.target) && u.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (u.current.isFocusWithin = false, f(), n && n(e), c && c(false))
  }, [n, c, u, f]), _ = (0, r.d0)(p), h = (0, i.useCallback)(e => {
    if (!e.currentTarget.contains(e.target)) return;
    let t = (0, o.r3)(e.target),
      n = (0, s.vY)(t);
    if (!u.current.isFocusWithin && n === (0, s.NI)(e.nativeEvent)) {
      l && l(e), c && c(true), u.current.isFocusWithin = true, _(e);
      let n = e.currentTarget;
      d(t, "focus", e => {
        if (u.current.isFocusWithin && !(0, s.bE)(n, e.target)) {
          let i = new t.defaultView.FocusEvent("blur", {
            relatedTarget: e.target
          });
          (0, r.nh)(i, n), p((0, r.yA)(i))
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