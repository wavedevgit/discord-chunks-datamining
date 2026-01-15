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
  Chunk517319 = require("./517319.js");

function g() {
  let e = (0, a.cj)([l.Z], () => l.Z.hasConsented(_.pjP.PERSONALIZATION)),
    [t, n] = i.useState(e),
    g = (0, s.LN)(),
    E = e => {
      e ? (0, o.g)([_.pjP.PERSONALIZATION], []).catch(f.S).then(() => n(true)) : (0, f.V)({
        header: h.intl.string(h.t["9SNpzv"]),
        confirmText: h.intl.string(h.t["9g5UGw"]),
        cancelText: h.intl.string(h.t["+ZLPw9"]),
        onConfirm: () => {
          (0, o.g)([], [_.pjP.PERSONALIZATION]).catch(f.S).then(() => n(false))
        },
        body: h.intl.string(h.t.gJvDDh)
      })
    };
  return (0, r.jsx)(u.U, {
    setting: p.s6.PRIVACY_DATA_PERSONALIZE_V2,
    children: (0, r.jsx)(d.ZP, {
      title: h.intl.string(h.t.MNKzyg),
      note: h.intl.format(h.t["eQL/Mr"], {
        helpdeskArticle: c.Z.getArticleURL(_.BhN.DATA_USED_FOR_RECOMMENDED)
      }),
      value: t,
      onChange: E,
      disabled: g,
      tooltipText: g ? h.intl.string(m.default["6Af/cw"]) : true
    })
  })
}