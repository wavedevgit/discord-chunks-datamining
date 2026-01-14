/** Chunk was on web.js **/
/** chunk id: 993315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk393681 = require("./393681.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  return (0, r.jsx)(l.U, {
    setting: u.s6.PRIVACY_DATA_BASIC_SERVICE_V2,
    children: (0, r.jsx)(l.H, {
      header: f.intl.string(f.t.D60Gfj),
      description: f.intl.format(f.t.R5N31P, {
        onClick: () => {
          let e = (0, a.Gl)("DataUsageDisclaimer");
          (0, s.openUserSettings)(e ? i.n.ACCOUNT_REMOVAL_SETTING : i.n.ACCOUNT_PANEL, {
            section: d.oAB.ACCOUNT,
            subsection: o.D.SECURITY,
            scrollPosition: e ? true : c.KQ.AccountScrollPositions.DISABLE_ACCOUNT
          })
        }
      })
    })
  })
}