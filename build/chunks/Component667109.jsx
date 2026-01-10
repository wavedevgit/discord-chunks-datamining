/** Chunk was on 75909 **/
/** chunk id: 667109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk304696 = require("./304696.js"),
  Chunk215113 = require("./215113.jsx");

function u(e) {
  let {
    handlePrimaryCtaClick: t
  } = e, {
    quest: n
  } = o.useContext(c.VideoQuestModalContext);
  return (0, r.jsx)(l.Button, {
    fullWidth: true,
    variant: "primary",
    onClick: () => t(a.jn.VIDEO_MODAL_PRIMARY_CTA, i.jZ.OPEN_GAME_LINK),
    text: (0, s.V_)(n)
  })
}