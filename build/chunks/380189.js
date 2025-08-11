/** Chunk was on web.js **/
/** chunk id: 380189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yf: () => a,
  d0: () => s
});
var Chunk365449 = require("./365449.js"),
  Chunk138224 = require("./138224.js"),
  Chunk73800 = require("./73800.js");
class a {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented
  }
  preventDefault() {
    this.defaultPrevented = true, this.nativeEvent.preventDefault()
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => true
  }
  isPropagationStopped() {
    returnfalse
  }
  persist() {}
  constructor(e, t) {
    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
  }
}

function s(e) {
  let t = (0, o.useRef)({
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
  return (0, o.useCallback)(e => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      t.current.isFocused = true;
      let r = e.target,
        i = e => {
          t.current.isFocused = false, r.disabled && n(new a("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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