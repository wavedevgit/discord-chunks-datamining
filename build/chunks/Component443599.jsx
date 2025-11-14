/** Chunk was on web.js **/
/** chunk id: 443599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => s
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk741086 = require("./741086.js"),
  Chunk481060 = require("./481060.js"),
  Chunk185625 = require("./185625.js");
async function s(e, t, s) {
  let {
    onSubmit: l,
    onClose: c,
    isEligibleForFeedback: u = true,
    isAuthenticated: d = true,
    emailToken: f,
    appContext: _
  } = s, p = (0, a.Gwq)();
  try {
    let s, h = d ? i.s.REPORT_TO_MOD.has(e.name) ? await (0, o.Lo)(e, t) : await (0, o.Nt)(e, t) : await (0, o.B0)(e, t),
      m = [],
      g = e => {
        m.push(e)
      },
      E = e => {
        s = e, null == l || l()
      };
    (0, a.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("13599"), n.e("2170"), n.e("62880"), n.e("39380"), n.e("36113"), n.e("54844")]).then(n.bind(n, 186023));
      return n => (0, r.jsx)(t, {
        menu: h,
        reportType: e,
        modalProps: n,
        onNavigate: g,
        onSubmit: E,
        isAuthenticated: d,
        emailToken: f
      })
    }, {
      onCloseCallback: () => {
        (0, o.k8)(e, m, s), null == c || c(), u && (0, o.X)(e, null != s ? s : null)
      },
      contextKey: null != _ ? (0, a.VnL)(_) : p
    })
  } catch (e) {}
}