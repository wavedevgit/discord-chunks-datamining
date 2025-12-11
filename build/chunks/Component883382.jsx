/** Chunk was on web.js **/
/** chunk id: 883382, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
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
  Chunk372807 = require("./372807.js");

function g() {
  let e = (0, Chunk442837.cj)([Chunk480294.Z], () => Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)),
    [t, n] = Chunk473749.useState(module),
    g = (0, Chunk915009.LN)(),
    E = e => {
      e ? (0, o.g)([_.pjP.PERSONALIZATION], []).catch(f.S).then(() => n(true)) : (0, f.V)({
        header: m.intl.string(m.t["9SNpzv"]),
        confirmText: m.intl.string(m.t["9g5UGw"]),
        cancelText: m.intl.string(m.t["+ZLPw9"]),
        onConfirm: () => {
          (0, o.g)([], [_.pjP.PERSONALIZATION]).catch(f.S).then(() => n(false))
        },
        body: m.intl.string(m.t.gJvDDh)
      })
    };
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DATA_PERSONALIZE_V2,
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      title: Chunk388032.intl.string(Chunk388032.t.MNKzyg),
      note: Chunk388032.intl.format(Chunk388032.t["eQL/Mr"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DATA_USED_FOR_RECOMMENDED)
      }),
      value: exports,
      onChange: E,
      disabled: g,
      tooltipText: g ? Chunk388032.intl.string(Chunk372807.default["6Af/cw"]) : true
    })
  })
}