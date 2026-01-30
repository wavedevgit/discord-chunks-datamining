/** Chunk was on 78376 **/
/** chunk id: 351104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk152076 = require("./152076.js"),
  Chunk93857 = require("./93857.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk171316 = require("./171316.js"),
  Chunk500470 = require("./500470.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g() {
  var e;
  let t = null != (e = (0, _.k)()) ? e : true,
    n = (0, u.KK)(),
    g = a.ES.useControlledSetting(t);
  return (0, r.jsx)(o.h, {
    children: (0, r.jsx)(c.Ay, {
      title: m.intl.string(m.t["3o2ojh"]),
      value: !n && !g,
      onChange: e => {
        !e && (0, s.w)() ? i.A.showAgeVerificationGetStartedModal({
          entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS
        }) : a.ES.updateControlledSetting(t, !e)
      },
      disabled: n,
      note: m.intl.format(m.t.IoztJ0, {
        helpdeskArticle: d.A.getArticleURL(p.MVz.MESSAGE_REQUESTS)
      })
    })
  })
}