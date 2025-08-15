/** Chunk was on 95355 **/
/** chunk id: 440717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => s
});
var Chunk380189 = require("./380189.js"),
  Chunk73800 = require("./73800.js"),
  Chunk836388 = require("./836388.js"),
  Chunk893346 = require("./893346.js"),
  Chunk262083 = require("./262083.js");

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