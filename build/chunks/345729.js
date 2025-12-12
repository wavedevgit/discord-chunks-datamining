/** Chunk was on web.js **/
/** chunk id: 345729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js");

function o() {
  let {
    reducedMotion: e
  } = Chunk473749.useContext(Chunk793030.Sfi), {
    isOpen: t,
    setIsOpen: n,
    refs: o,
    floatingStyles: a,
    getReferenceProps: s,
    getFloatingProps: l,
    context: c
  } = (0, Chunk793030.ON0)({
    placement: "bottom",
    matchReferenceWidth: true,
    transform: module.enabled
  }), {
    styles: u
  } = (0, Chunk793030.Y_D)(c, {
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
    isOpen: exports,
    setIsOpen: require,
    refs: o,
    floatingStyles: a,
    getReferenceProps: s,
    getFloatingProps: l,
    transitionStyles: module.enabled ? {} : u
  }
}