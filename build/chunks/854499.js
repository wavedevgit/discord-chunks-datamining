/** Chunk was on web.js **/
/** chunk id: 854499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => d
});
var Chunk8321 = require("./8321.js"),
  Chunk114099 = require("./114099.js"),
  Chunk297987 = require("./297987.js"),
  Chunk401705 = require("./401705.js"),
  Chunk807177 = require("./807177.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js");
let u = 500;

function d(e) {
  let {
    isDisabled: t,
    onLongPressStart: n,
    onLongPressEnd: d,
    onLongPress: f,
    threshold: p = u,
    accessibilityDescription: _
  } = e, h = (0, c.useRef)(true), {
    addGlobalListener: m,
    removeGlobalListener: g
  } = (0, i.A)(), {
    pressProps: E
  } = (0, r.d)({
    isDisabled: t,
    onPressStart(e) {
      if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
          ...e,
          type: "longpressstart"
        }), h.current = setTimeout(() => {
          e.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: true
          })), (0, a.TW)(e.target).activeElement !== e.target && (0, s.e)(e.target), f && f({
            ...e,
            type: "longpress"
          }), h.current = true
        }, p), "touch" === e.pointerType)) {
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
  }), y = (0, o.I)(f && !t ? _ : true);
  return {
    longPressProps: (0, l.v)(E, y)
  }
}