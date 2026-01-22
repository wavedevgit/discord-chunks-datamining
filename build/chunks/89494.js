/** Chunk was on web.js **/
/** chunk id: 89494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LE: () => p,
  eg: () => c,
  lR: () => f,
  o1: () => u,
  yB: () => d
});
var Chunk3388 = require("./3388.js"),
  Chunk959462 = require("./959462.js"),
  Chunk883768 = require("./883768.js"),
  Chunk297987 = require("./297987.js"),
  Chunk401705 = require("./401705.js"),
  Chunk64700 = require("./64700.js");

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
  (0, r.N)(() => {
    let e = t.current;
    return () => {
      e.observer && (e.observer.disconnect(), e.observer = null)
    }
  }, []);
  let n = (0, i.J)(t => {
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
  for (; e && !(0, a.t)(e);) e = e.parentElement;
  let t = (0, s.mD)(e),
    n = t.document.activeElement;
  if (!n || n === e) return;
  f = true;
  let r = false,
    i = e => {
      (e.target === n || r) && e.stopImmediatePropagation()
    },
    l = t => {
      (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = true, (0, o.e)(n), d()))
    },
    c = t => {
      (t.target === e || r) && t.stopImmediatePropagation()
    },
    u = t => {
      (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = true, (0, o.e)(n), d()))
    };
  t.addEventListener("blur", i, true), t.addEventListener("focusout", l, true), t.addEventListener("focusin", u, true), t.addEventListener("focus", c, true);
  let d = () => {
      cancelAnimationFrame(p), t.removeEventListener("blur", i, true), t.removeEventListener("focusout", l, true), t.removeEventListener("focusin", u, true), t.removeEventListener("focus", c, true), f = false, r = false
    },
    p = requestAnimationFrame(d);
  return d
}