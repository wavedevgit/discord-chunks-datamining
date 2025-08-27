/** Chunk was on web.js **/
/** chunk id: 883382, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
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
  let e = (0, Chunk442837.cj)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)),
    [t, n] = Chunk647438.useState(module),
    h = e => {
      e ? (0, o.g)([_.pjP.PERSONALIZATION], []).catch(d.S).then(() => n(true)) : (0, d.V)({
        header: p.intl.string(p.t["9SNpzs"]),
        confirmText: p.intl.string(p.t["9g5UGx"]),
        cancelText: p.intl.string(p.t["+ZLPw8"]),
        onConfirm: () => {
          (0, o.g)([], [_.pjP.PERSONALIZATION]).catch(d.S).then(() => n(false))
        },
        body: p.intl.string(p.t.gJvDDg)
      })
    };
  return (0, Chunk951288.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_PERSONALIZE_V2,
    children: (0, Chunk951288.jsx)(Chunk51331.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.MNKzys),
      note: Chunk388032.intl.format(Chunk388032.t["eQL/Mj"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DATA_USED_FOR_RECOMMENDED)
      }),
      value: exports,
      onChange: h
    })
  })
}