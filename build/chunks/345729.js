/** Chunk was on web.js **/
/** chunk id: 345729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js");

function a() {
  let {
    reducedMotion: e
  } = r.useContext(i.Sfi), {
    isOpen: t,
    setIsOpen: n,
    refs: a,
    floatingStyles: o,
    getReferenceProps: s,
    getFloatingProps: l,
    context: c
  } = (0, i.ON0)({
    placement: "bottom",
    matchReferenceWidth: true,
    transform: e.enabled
  }), {
    styles: u
  } = (0, i.Y_D)(c, {
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
    refs: a,
    floatingStyles: o,
    getReferenceProps: s,
    getFloatingProps: l,
    transitionStyles: e.enabled ? {} : u
  }
}