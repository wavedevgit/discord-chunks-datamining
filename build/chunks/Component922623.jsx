/** Chunk was on 23628 **/
/** chunk id: 922623, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk651892 = require("./651892.js"),
  Chunk717415 = require("./717415.jsx");

function u(e) {
  let {
    handlePrimaryCtaClick: t
  } = e, {
    quest: n
  } = l.useContext(c.VideoQuestModalContext);
  return (0, r.jsx)(o.Button, {
    fullWidth: true,
    variant: "primary",
    onClick: () => t(s.uF.VIDEO_MODAL_PRIMARY_CTA, i.Cy.OPEN_GAME_LINK),
    text: (0, a.wr)(n)
  })
}