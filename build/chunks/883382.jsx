/** Chunk was on 75708 **/
/** chunk id: 883382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk924628 = require("./924628.js"),
  Chunk480294 = require("./480294.js"),
  Chunk63063 = require("./63063.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk922628 = require("./922628.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h() {
  let e = (0, Chunk442837.cj)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)),
    [t, n] = Chunk73800.useState(module);
  return <Chunk838436.U setting={Chunk726985.s6.PRIVACY_DATA_PERSONALIZE_V2}><Chunk51331.Z title={Chunk388032.intl.string(Chunk388032.t.MNKzys)} note={Chunk388032.intl.format(Chunk388032.t["eQL/Mj"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DATA_USED_FOR_RECOMMENDED)
      })} value={exports} onChange={e => {
        e ? (0, a.g)([p.pjP.PERSONALIZATION], []).catch(u.S).then(() => n(true)) : (0, u.V)({
          header: g.intl.string(g.t["9SNpzs"]),
          confirmText: g.intl.string(g.t["9g5UGx"]),
          cancelText: g.intl.string(g.t["+ZLPw8"]),
          onConfirm: () => {
            (0, a.g)([], [p.pjP.PERSONALIZATION]).catch(u.S).then(() => n(false))
          },
          body: g.intl.string(g.t.gJvDDg)
        })
      }} /></Chunk838436.U>
}