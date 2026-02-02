/** Chunk was on web.js **/
/** chunk id: 882276, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => s
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk2110 = require("./2110.js"),
  Chunk397927 = require("./397927.js"),
  Chunk369053 = require("./369053.js");
async function s(e, t, s) {
  let {
    onSubmit: l,
    onClose: c,
    isEligibleForFeedback: u = true,
    isAuthenticated: d = true,
    emailToken: f,
    appContext: p
  } = s, _ = (0, a.lxU)();
  try {
    let s, h = d ? i.x.REPORT_TO_MOD.has(e.name) ? await (0, o.Op)(e, t) : await (0, o.m9)(e, t) : await (0, o.IM)(e, t),
      m = [],
      g = e => {
        m.push(e)
      },
      E = e => {
        s = e, null == l || l()
      };
    (0, a.mMO)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("10614"), n.e("28936"), n.e("94857"), n.e("3183"), n.e("43549"), n.e("10253"), n.e("65442"), n.e("10117"), n.e("51693"), n.e("12236")]).then(n.bind(n, 779735));
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
        (0, o.Hl)(e, m, s), null == c || c(), u && (0, o.Zv)(e, null != s ? s : null)
      },
      contextKey: null != p ? (0, a.TId)(p) : _
    })
  } catch (e) {}
}