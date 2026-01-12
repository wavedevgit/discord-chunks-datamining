/** Chunk was on 9536 **/
/** chunk id: 51248, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk215569 = require("./215569.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk236413 = require("./236413.js"),
  Chunk727072 = require("./727072.js"),
  Chunk65912 = require("./65912.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk896811 = require("./896811.js");

function g(e) {
  let {
    guildId: t,
    existingRules: n
  } = e, {
    cancelEditingRule: g,
    isLoading: f,
    hasChanges: m,
    editingRule: b,
    errorMessage: p,
    saveEditingRule: h
  } = (0, c.w)(), {
    updateRule: x
  } = (0, o.pH)(t), j = null != b, v = j && !(0, s.Vb)(b), O = j || m || v, y = async () => {
    if (!m && !v) return g();
    null == b || v || x(b);
    let e = n.find(e => {
      let {
        id: t
      } = e;
      return t === (null == b ? true : b.id)
    });
    try {
      let e = await h(n);
      null != e && x(e)
    } catch (t) {
      null != e && x(e)
    }
  }, C = d.intl.string(d.t["ETE/oC"]), N = !m && j ? d.intl.formatToPlainString(d.t.nula34, {
    ruleName: null == b ? true : b.name
  }) : true;
  return null != p && (N = (0, r.jsx)(a.Text, {
    variant: "text-md/normal",
    color: "text-feedback-critical",
    className: u.message,
    children: p
  })), (0, r.jsx)(i.W, {
    component: "div",
    className: u.saveNoticeContainer,
    children: O && (0, r.jsx)(a.oXn, {
      children: (0, r.jsx)(l.Z, {
        submitting: f,
        disabled: f,
        onSave: y,
        onReset: g,
        onResetText: C,
        message: N
      })
    })
  })
}