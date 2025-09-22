/** Chunk was on web.js **/
/** chunk id: 362602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => d
});
var Chunk459613 = require("./459613.js"),
  Chunk294579 = require("./294579.js"),
  Chunk253231 = require("./253231.js"),
  Chunk945353 = require("./945353.js"),
  Chunk640196 = require("./640196.js"),
  Chunk506364 = require("./506364.js"),
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
          })), (0, a.r3)(e.target).activeElement !== e.target && (0, o.A)(e.target), f && f({
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