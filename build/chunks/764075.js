/** Chunk was on web.js **/
/** chunk id: 764075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => l
});
var Chunk784534 = require("./784534.js"),
  Chunk647438 = require("./647438.js"),
  Chunk294579 = require("./294579.js"),
  Chunk253231 = require("./253231.js"),
  Chunk571670 = require("./571670.js");

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
  } = (0, o.x)(), _ = (0, i.useCallback)(e => {
    e.currentTarget.contains(e.target) && u.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (u.current.isFocusWithin = false, f(), n && n(e), c && c(false))
  }, [n, c, u, f]), p = (0, r.d0)(_), h = (0, i.useCallback)(e => {
    if (!e.currentTarget.contains(e.target)) return;
    let t = (0, a.r3)(e.target),
      n = (0, s.vY)(t);
    if (!u.current.isFocusWithin && n === (0, s.NI)(e.nativeEvent)) {
      l && l(e), c && c(true), u.current.isFocusWithin = true, p(e);
      let n = e.currentTarget;
      d(t, "focus", e => {
        if (u.current.isFocusWithin && !(0, s.bE)(n, e.target)) {
          let i = new(0, r.Yf)("blur", new t.defaultView.FocusEvent("blur", {
            relatedTarget: e.target
          }));
          i.target = n, i.currentTarget = n, _(i)
        }
      }, {
        capture: true
      })
    }
  }, [l, c, p, d, _]);
  return t ? {
    focusWithinProps: {
      onFocus: true,
      onBlur: true
    }
  } : {
    focusWithinProps: {
      onFocus: h,
      onBlur: _
    }
  }
}