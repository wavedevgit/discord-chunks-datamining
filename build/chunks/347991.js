/** Chunk was on web.js **/
/** chunk id: 347991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => d
});
var Chunk146810 = require("./146810.js"),
  Chunk5679 = require("./5679.js"),
  Chunk278769 = require("./278769.js"),
  Chunk610063 = require("./610063.js"),
  Chunk24645 = require("./24645.js"),
  Chunk933492 = require("./933492.js"),
  Chunk647438 = require("./647438.js");
let u = 500;

function d(e) {
  let {
    isDisabled: t,
    onLongPressStart: n,
    onLongPressEnd: d,
    onLongPress: f,
    threshold: _ = u,
    accessibilityDescription: p
  } = e, h = (0, c.useRef)(true), {
    addGlobalListener: m,
    removeGlobalListener: g
  } = (0, i.x)(), {
    pressProps: E
  } = (0, r.r)({
    isDisabled: t,
    onPressStart(e) {
      if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
          ...e,
          type: "longpressstart"
        }), h.current = setTimeout(() => {
          e.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: true
          })), (0, o.r3)(e.target).activeElement !== e.target && (0, a.A)(e.target), f && f({
            ...e,
            type: "longpress"
          }), h.current = true
        }, _), "touch" === e.pointerType)) {
        let t = e => {
          e.preventDefault()
        };
        m(e.target, "contextmenu", t, {
          once: true
        }), m(window, "pointerup", () => {
          setTimeout(() => {
            g(e.target, "contextmenu", t)
          }, 30)
        }, {
          once: true
        })
      }
    },
    onPressEnd(e) {
      h.current && clearTimeout(h.current), d && ("mouse" === e.pointerType || "touch" === e.pointerType) && d({
        ...e,
        type: "longpressend"
      })
    }
  }), b = (0, s.P)(f && !t ? p : true);
  return {
    longPressProps: (0, l.d)(E, b)
  }
}