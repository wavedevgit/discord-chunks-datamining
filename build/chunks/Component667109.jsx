/** Chunk was on 75909 **/
/** chunk id: 667109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk937797 = require("./937797.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    handlePrimaryCtaClick: t
  } = e, {
    quest: n
  } = o.useContext(u.VideoQuestModalContext), {
    enabled: f
  } = c.EO.useConfig({
    location: d.dr.VIDEO_MODAL
  });
  return (0, r.jsx)(l.Button, {
    fullWidth: true,
    variant: f ? "primary" : "secondary",
    onClick: () => t(a.jn.VIDEO_MODAL_PRIMARY_CTA, i.jZ.OPEN_GAME_LINK),
    text: f ? (0, s.B2)(n.config) : m.intl.string(m.t.nL0WvC)
  })
}