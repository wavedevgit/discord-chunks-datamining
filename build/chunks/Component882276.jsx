/** Chunk was on web.js **/
/** chunk id: 882276, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => o
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk2110 = require("./2110.js"),
  Chunk397927 = require("./397927.js"),
  Chunk369053 = require("./369053.js");
async function o(e, t, o) {
  let {
    onSubmit: l,
    onClose: c,
    isEligibleForFeedback: u = true,
    isAuthenticated: d = true,
    emailToken: f,
    appContext: p
  } = o, _ = (0, a.lxU)();
  try {
    let o, h = d ? i.x.REPORT_TO_MOD.has(e.name) ? await (0, s.Op)(e, t) : await (0, s.m9)(e, t) : await (0, s.IM)(e, t),
      m = [],
      g = e => {
        m.push(e)
      },
      E = e => {
        o = e, null == l || l()
      };
    (0, a.mMO)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("10614"), n.e("42944"), n.e("10117"), n.e("13696"), n.e("38663"), n.e("58652")]).then(n.bind(n, 779735));
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
        (0, s.Hl)(e, m, o), null == c || c(), u && (0, s.Zv)(e, null != o ? o : null)
      },
      contextKey: null != p ? (0, a.TId)(p) : _
    })
  } catch (e) {}
}