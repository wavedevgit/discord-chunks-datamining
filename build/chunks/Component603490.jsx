/** Chunk was on 13873 **/
/** chunk id: 603490, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, p = i.useRef(null);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: p,
    animation: a.yRy.Animation.FADE,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return u(t, n, r, false)
    },
    shouldShow: d,
    onRequestClose: c,
    position: l.tq ? "top" : "left",
    align: l.tq ? "center" : "top",
    clickTrap: true,
    children: () => (0, r.jsx)(o.sF, {
      ref: p,
      label: s.intl.string(s.t.lfIHs4),
      icon: a.EO4,
      onClick: c
    }, "add-reaction")
  })
}