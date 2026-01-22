/** Chunk was on 97492 **/
/** chunk id: 427868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk397927 = require("./397927.js"),
  Chunk194085 = require("./194085.jsx"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    channel: t,
    message: n,
    togglePopout: c,
    renderEmojiPicker: u,
    shouldShow: d
  } = e, f = l.useRef(null);
  return (0, r.jsx)(a.YNO, {
    targetElementRef: f,
    animation: a.YNO.Animation.FADE,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return u(t, n, r, false)
    },
    shouldShow: d,
    onRequestClose: c,
    position: i.Fr ? "top" : "left",
    align: i.Fr ? "center" : "top",
    clickTrap: true,
    children: () => (0, r.jsx)(s.qv, {
      ref: f,
      label: o.intl.string(o.t.lfIHs4),
      icon: a.nm2,
      onClick: c
    }, "add-reaction")
  })
}