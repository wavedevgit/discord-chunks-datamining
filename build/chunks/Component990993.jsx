/** Chunk was on 32249 **/
/** chunk id: 990993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk536687 = require("./536687.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    handlePrimaryCtaClick: t
  } = e, {
    quest: n
  } = o.useContext(u.VideoQuestModalContext), {
    enabled: p
  } = c.EO.useConfig({
    location: d.dr.VIDEO_MODAL
  });
  return (0, r.jsx)(l.Button, {
    fullWidth: true,
    variant: p ? "primary" : "secondary",
    onClick: () => t(s.jn.VIDEO_MODAL_PRIMARY_CTA, i.jZ.OPEN_GAME_LINK),
    text: p ? (0, a.B2)(n.config) : m.intl.string(m.t.nL0WvC)
  })
}