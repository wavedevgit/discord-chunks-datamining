/** Chunk was on 85911 **/
/** chunk id: 764075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => s
});
var Chunk784534 = require("./784534.js"),
  Chunk647438 = require("./647438.js"),
  Chunk294579 = require("./294579.js"),
  Chunk253231 = require("./253231.js"),
  Chunk571670 = require("./571670.js");

function s(e) {
  let {
    isDisabled: t,
    onBlurWithin: n,
    onFocusWithin: s,
    onFocusWithinChange: l
  } = e, c = (0, i.useRef)({
    isFocusWithin: false
  }), {
    addGlobalListener: d,
    removeAllGlobalListeners: f
  } = (0, o.x)(), v = (0, i.useCallback)(e => {
    e.currentTarget.contains(e.target) && c.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (c.current.isFocusWithin = false, f(), n && n(e), l && l(false))
  }, [n, l, c, f]), p = (0, r.d0)(v), h = (0, i.useCallback)(e => {
    if (!e.currentTarget.contains(e.target)) return;
    let t = (0, u.r3)(e.target),
      n = (0, a.vY)(t);
    if (!c.current.isFocusWithin && n === (0, a.NI)(e.nativeEvent)) {
      s && s(e), l && l(true), c.current.isFocusWithin = true, p(e);
      let n = e.currentTarget;
      d(t, "focus", e => {
        if (c.current.isFocusWithin && !(0, a.bE)(n, e.target)) {
          let i = new(0, r.Yf)("blur", new t.defaultView.FocusEvent("blur", {
            relatedTarget: e.target
          }));
          i.target = n, i.currentTarget = n, v(i)
        }
      }, {
        capture: true
      })
    }
  }, [s, l, p, d, v]);
  return t ? {
    focusWithinProps: {
      onFocus: true,
      onBlur: true
    }
  } : {
    focusWithinProps: {
      onFocus: h,
      onBlur: v
    }
  }
}