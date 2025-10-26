/** Chunk was on web.js **/
/** chunk id: 402583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk924628 = require("./924628.js"),
  Chunk915009 = require("./915009.js"),
  Chunk480294 = require("./480294.js"),
  Chunk63063 = require("./63063.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk922628 = require("./922628.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602698 = require("./602698.js");

function g() {
  let e = (0, Chunk915009.LN)(),
    t = (0, Chunk442837.e7)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.USAGE_STATISTICS)),
    n = Chunk647438.useCallback(e => {
      e ? (0, o.g)([p.pjP.USAGE_STATISTICS], []).catch(f.S) : (0, f.V)({
        header: h.intl.string(h.t.OdPCbN),
        body: h.intl.string(h.t.MGWabA),
        confirmText: h.intl.string(h.t["D3+rU4"]),
        cancelText: h.intl.string(h.t.kYpG0u),
        onConfirm: () => (0, o.g)([], [p.pjP.USAGE_STATISTICS]).catch(f.S)
      })
    }, []);
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
    children: (0, Chunk951288.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t.XuADY2),
      note: Chunk388032.intl.format(Chunk388032.t["igTSG/"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DATA_PRIVACY_CONTROLS)
      }),
      value: exports,
      onChange: require,
      disabled: module,
      tooltipText: module ? Chunk388032.intl.string(Chunk602698.default["6Af/cw"]) : true
    })
  })
}