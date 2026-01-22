/** Chunk was on web.js **/
/** chunk id: 700713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js");

function a() {
  let {
    reducedMotion: e
  } = r.useContext(i.CZY), {
    isOpen: t,
    setIsOpen: n,
    refs: a,
    floatingStyles: s,
    getReferenceProps: o,
    getFloatingProps: l,
    context: c
  } = (0, i.uaw)({
    placement: "bottom",
    matchReferenceWidth: true,
    transform: e.enabled
  }), {
    styles: u
  } = (0, i.DLI)(c, {
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
    floatingStyles: s,
    getReferenceProps: o,
    getFloatingProps: l,
    transitionStyles: e.enabled ? {} : u
  }
}