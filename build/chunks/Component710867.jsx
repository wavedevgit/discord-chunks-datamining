/** Chunk was on web.js **/
/** chunk id: 710867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk293335 = require("./293335.js"),
  Chunk107225 = require("./107225.js");
let o = e => {
  let {
    profileEffectConfig: t,
    onReady: n
  } = e, {
    pendingRef: o,
    setPending: s
  } = (0, i.Z)(t.effects, n);
  return (0, r.jsx)("div", {
    className: a.profileEffects,
    children: (0, r.jsx)("div", {
      className: a.inner,
      children: t.effects.map(e => (0, r.jsx)("img", {
        src: e.src,
        alt: "Preload Profile Effect Asset",
        "aria-hidden": true,
        style: {
          opacity: 0,
          position: "absolute"
        },
        onLoad: () => {
          s(o.current - 1), o.current = o.current - 1
        }
      }, e.src))
    })
  })
}