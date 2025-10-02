/** Chunk was on 29679 **/
/** chunk id: 51248, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk236413 = require("./236413.js"),
  Chunk727072 = require("./727072.js"),
  Chunk65912 = require("./65912.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231793 = require("./231793.js");

function m(e) {
  let {
    guildId: t,
    existingRules: n
  } = e, {
    cancelEditingRule: m,
    isLoading: g,
    hasChanges: p,
    editingRule: f,
    errorMessage: h,
    saveEditingRule: b
  } = (0, c.w)(), {
    updateRule: x
  } = (0, o.pH)(t), j = null != f, v = j && !(0, a.Vb)(f), _ = j || p || v, O = async () => {
    if (!p && !v) return m();
    null == f || v || x(f);
    let e = n.find(e => {
      let {
        id: t
      } = e;
      return t === (null == f ? true : f.id)
    });
    try {
      let e = await b(n);
      null != e && x(e)
    } catch (t) {
      null != e && x(e)
    }
  }, y = d.intl.string(d.t["ETE/oK"]), C = !p && j ? d.intl.formatToPlainString(d.t.nula39, {
    ruleName: null == f ? true : f.name
  }) : true;
  return null != h && (C = (0, r.jsx)(l.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: u.message,
    children: h
  })), (0, r.jsx)(i.W, {
    component: "div",
    className: u.saveNoticeContainer,
    children: _ && (0, r.jsx)(l.oXn, {
      children: (0, r.jsx)(s.Z, {
        submitting: g,
        disabled: g,
        onSave: O,
        onReset: m,
        onResetText: y,
        message: C
      })
    })
  })
}