/** Chunk was on web.js **/
/** chunk id: 990415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WZ: () => p,
  d0: () => d,
  nh: () => u,
  uR: () => f,
  yA: () => c
});
var Chunk159447 = require("./159447.js"),
  Chunk484948 = require("./484948.js"),
  Chunk970498 = require("./970498.js"),
  Chunk477232 = require("./477232.js"),
  Chunk928276 = require("./928276.js"),
  Chunk473749 = require("./473749.js");

function c(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
}

function u(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  })
}

function d(e) {
  let t = (0, l.useRef)({
    isFocused: false,
    observer: null
  });
  (0, r.b)(() => {
    let e = t.current;
    return () => {
      e.observer && (e.observer.disconnect(), e.observer = null)
    }
  }, []);
  let n = (0, i.i)(t => {
    null == e || e(t)
  });
  return (0, l.useCallback)(e => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      t.current.isFocused = true;
      let r = e.target,
        i = e => {
          t.current.isFocused = false, r.disabled && n(c(e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
        };
      r.addEventListener("focusout", i, {
        once: true
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && r.disabled) {
          var e;
          null == (e = t.current.observer) || e.disconnect();
          let n = r === document.activeElement ? null : document.activeElement;
          r.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: n
          })), r.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: n
          }))
        }
      }), t.current.observer.observe(r, {
        attributes: true,
        attributeFilter: ["disabled"]
      })
    }
  }, [n])
}
let f = false;

function p(e) {
  for (; e && !(0, a.E)(e);) e = e.parentElement;
  let t = (0, o.kR)(e),
    n = t.document.activeElement;
  if (!n || n === e) return;
  f = true;
  let r = false,
    i = e => {
      (e.target === n || r) && e.stopImmediatePropagation()
    },
    l = t => {
      (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = true, (0, s.A)(n), d()))
    },
    c = t => {
      (t.target === e || r) && t.stopImmediatePropagation()
    },
    u = t => {
      (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = true, (0, s.A)(n), d()))
    };
  t.addEventListener("blur", i, true), t.addEventListener("focusout", l, true), t.addEventListener("focusin", u, true), t.addEventListener("focus", c, true);
  let d = () => {
      cancelAnimationFrame(p), t.removeEventListener("blur", i, true), t.removeEventListener("focusout", l, true), t.removeEventListener("focusin", u, true), t.removeEventListener("focus", c, true), f = false, r = false
    },
    p = requestAnimationFrame(d);
  return d
}