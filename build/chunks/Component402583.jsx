/** Chunk was on web.js **/
/** chunk id: 402583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk517319 = require("./517319.js");

function g() {
  let e = (0, s.LN)(),
    t = (0, a.e7)([l.Z], () => l.Z.hasConsented(_.pjP.USAGE_STATISTICS)),
    n = i.useCallback(e => {
      e ? (0, o.g)([_.pjP.USAGE_STATISTICS], []).catch(f.S) : (0, f.V)({
        header: m.intl.string(m.t.OdPCbN),
        body: m.intl.string(m.t.MGWabA),
        confirmText: m.intl.string(m.t["D3+rU4"]),
        cancelText: m.intl.string(m.t.kYpG0u),
        onConfirm: () => (0, o.g)([], [_.pjP.USAGE_STATISTICS]).catch(f.S)
      })
    }, []);
  return (0, r.jsx)(u.U, {
    setting: p.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
    children: (0, r.jsx)(d.ZP, {
      title: m.intl.string(m.t.XuADY2),
      note: m.intl.format(m.t["igTSG/"], {
        helpdeskArticle: c.Z.getArticleURL(_.BhN.DATA_PRIVACY_CONTROLS)
      }),
      value: t,
      onChange: n,
      disabled: e,
      tooltipText: e ? m.intl.string(h.default["6Af/cw"]) : true
    })
  })
}