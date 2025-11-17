/** Chunk was on 34740 **/
/** chunk id: 603490, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, p = r.useRef(null);
  return (0, i.jsx)(a.yRy, {
    targetElementRef: p,
    animation: a.yRy.Animation.FADE,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return u(t, n, i, false)
    },
    shouldShow: d,
    onRequestClose: c,
    position: l.tq ? "top" : "left",
    align: l.tq ? "center" : "top",
    clickTrap: true,
    children: () => (0, i.jsx)(o.sF, {
      ref: p,
      label: s.intl.string(s.t.lfIHs4),
      icon: a.EO4,
      onClick: c
    }, "add-reaction")
  })
}