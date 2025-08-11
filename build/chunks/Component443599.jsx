/** Chunk was on web.js **/
/** chunk id: 443599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => s
}), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  } = s, p = (0, o.Gwq)();
  try {
    let s, h = d ? i.s.REPORT_TO_MOD.has(e.name) ? await (0, a.Lo)(e, t) : await (0, a.Nt)(e, t) : await (0, a.B0)(e, t),
      m = [],
      g = e => {
        m.push(e)
      },
      E = e => {
        s = e, null == l || l()
      };
    (0, o.ZDy)(async () => {
      let {
        default: t
      } = await n.e("54844").then(n.bind(n, 186023));
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
        (0, a.k8)(e, m, s), null == c || c(), u && (0, a.X)(e, null != s ? s : null)
      },
      contextKey: null != _ ? (0, o.VnL)(_) : p
    })
  } catch (e) {}
}