/** Chunk was on 66181 **/
/** chunk id: 402583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk924628 = require("./924628.js"),
  Chunk480294 = require("./480294.js"),
  Chunk63063 = require("./63063.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk922628 = require("./922628.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h() {
  let e = (0, Chunk442837.e7)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.USAGE_STATISTICS)),
    t = Chunk647438.useCallback(e => {
      e ? (0, a.g)([p.pjP.USAGE_STATISTICS], []).catch(u.S) : (0, u.V)({
        header: g.intl.string(g.t.OdPCbG),
        body: g.intl.string(g.t.MGWabG),
        confirmText: g.intl.string(g.t["D3+rU1"]),
        cancelText: g.intl.string(g.t.kYpG0t),
        onConfirm: () => (0, a.g)([], [p.pjP.USAGE_STATISTICS]).catch(u.S)
      })
    }, []);
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2,
    children: (0, Chunk951288.jsx)(Chunk51331.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.XuADY2),
      note: Chunk388032.intl.format(Chunk388032.t.igTSGx, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DATA_PRIVACY_CONTROLS)
      }),
      value: module,
      onChange: exports
    })
  })
}