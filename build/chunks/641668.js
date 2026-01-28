/** Chunk was on web.js **/
/** chunk id: 641668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk561392 = require("./561392.js"),
  Chunk844222 = require("./844222.js");

function o() {
  let {
    reducedMotion: e
  } = r.useContext(a.C), {
    isOpen: t,
    setIsOpen: n,
    refs: o,
    floatingStyles: s,
    getReferenceProps: l,
    getFloatingProps: c,
    context: u
  } = (0, i.u)({
    placement: "bottom",
    matchReferenceWidth: true,
    transform: e.enabled
  }), {
    styles: d
  } = (0, i.D)(u, {
    common: {
      transformOrigin: "top center"
    },
    initial: {
      opacity: .5,
      transform: "scaleY(0.96)"
    },
    duration: 100
  });
  return {
    isOpen: t,
    setIsOpen: n,
    refs: o,
    floatingStyles: s,
    getReferenceProps: l,
    getFloatingProps: c,
    transitionStyles: e.enabled ? {} : d
  }
}