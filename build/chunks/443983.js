/** Chunk was on web.js **/
/** chunk id: 443983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => d
});
var Chunk226098 = require("./226098.js"),
  Chunk920154 = require("./920154.js"),
  Chunk477232 = require("./477232.js"),
  Chunk928276 = require("./928276.js"),
  Chunk645537 = require("./645537.js"),
  Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js");
let u = 500;

function d(e) {
  let {
    isDisabled: t,
    onLongPressStart: n,
    onLongPressEnd: d,
    onLongPress: f,
    threshold: p = u,
    accessibilityDescription: _
  } = e, m = (0, c.useRef)(true), {
    addGlobalListener: h,
    removeGlobalListener: g
  } = (0, i.x)(), {
    pressProps: E
  } = (0, r.r)({
    isDisabled: t,
    onPressStart(e) {
      if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
          ...e,
          type: "longpressstart"
        }), m.current = setTimeout(() => {
          e.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: true
          })), (0, o.r3)(e.target).activeElement !== e.target && (0, a.A)(e.target), f && f({
            ...e,
            type: "longpress"
          }), m.current = true
        }, p), "touch" === e.pointerType)) {
        let t = e => {
          e.preventDefault()
        };
        h(e.target, "contextmenu", t, {
          once: true
        }), h(window, "pointerup", () => {
          setTimeout(() => {
            g(e.target, "contextmenu", t)
          }, 30)
        }, {
          once: true
        })
      }
    },
    onPressEnd(e) {
      m.current && clearTimeout(m.current), d && ("mouse" === e.pointerType || "touch" === e.pointerType) && d({
        ...e,
        type: "longpressend"
      })
    }
  }), b = (0, s.P)(f && !t ? _ : true);
  return {
    longPressProps: (0, l.d)(E, b)
  }
}