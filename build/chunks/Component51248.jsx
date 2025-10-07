/** Chunk was on 64982 **/
/** chunk id: 51248, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
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
  Chunk590745 = require("./590745.js");

function g(e) {
  let {
    guildId: t,
    existingRules: n
  } = e, {
    cancelEditingRule: g,
    isLoading: m,
    hasChanges: p,
    editingRule: f,
    errorMessage: h,
    saveEditingRule: x
  } = (0, c.w)(), {
    updateRule: b
  } = (0, o.pH)(t), j = null != f, _ = j && !(0, a.Vb)(f), v = j || p || _, C = async () => {
    if (!p && !_) return g();
    null == f || _ || b(f);
    let e = n.find(e => {
      let {
        id: t
      } = e;
      return t === (null == f ? true : f.id)
    });
    try {
      let e = await x(n);
      null != e && b(e)
    } catch (t) {
      null != e && b(e)
    }
  }, O = d.intl.string(d.t["ETE/oK"]), y = !p && j ? d.intl.formatToPlainString(d.t.nula39, {
    ruleName: null == f ? true : f.name
  }) : true;
  return null != h && (y = (0, r.jsx)(l.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: u.message,
    children: h
  })), (0, r.jsx)(i.W, {
    component: "div",
    className: u.saveNoticeContainer,
    children: v && (0, r.jsx)(l.oXn, {
      children: (0, r.jsx)(s.Z, {
        submitting: m,
        disabled: m,
        onSave: C,
        onReset: g,
        onResetText: O,
        message: y
      })
    })
  })
}