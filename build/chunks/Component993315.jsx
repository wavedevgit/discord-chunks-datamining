/** Chunk was on web.js **/
/** chunk id: 993315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk313789 = require("./313789.js"),
  Chunk736752 = require("./736752.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_BASIC_SERVICE_V2,
    children: (0, Chunk951288.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t.D60Gfj),
      description: Chunk388032.intl.format(Chunk388032.t.R5N31P, {
        onClick: () => {
          (0, Chunk518596.openUserSettings)(Chunk313789.n.ACCOUNT_PANEL, {
            section: Chunk981631.oAB.ACCOUNT,
            subsection: Chunk736752.D.SECURITY,
            scrollPosition: Chunk526761.KQ.AccountScrollPositions.DISABLE_ACCOUNT
          })
        }
      })
    })
  })
}