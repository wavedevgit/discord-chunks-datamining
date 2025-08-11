/** Chunk was on web.js **/
/** chunk id: 603490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk373662 = require("./373662.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    channel: t,
    message: n,
    togglePopout: c,
    renderEmojiPicker: u,
    shouldShow: d
  } = e, f = i.useRef(null);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: f,
    animation: a.yRy.Animation.FADE,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return u(t, n, r, false)
    },
    shouldShow: d,
    onRequestClose: c,
    position: o.tq ? "top" : "left",
    align: o.tq ? "center" : "top",
    clickTrap: true,
    children: () => (0, r.jsx)(s.sF, {
      ref: f,
      label: l.intl.string(l.t.lfIHs7),
      icon: a.EO4,
      onClick: c
    }, "add-reaction")
  })
}