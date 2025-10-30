/** Chunk was on 29679 **/
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
  Chunk231793 = require("./231793.js");

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
    saveEditingRule: b
  } = (0, c.w)(), {
    updateRule: x
  } = (0, o.pH)(t), j = null != f, v = j && !(0, s.Vb)(f), _ = j || p || v, C = async () => {
    if (!p && !v) return g();
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
  }, O = d.intl.string(d.t["ETE/oC"]), y = !p && j ? d.intl.formatToPlainString(d.t.nula34, {
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
    children: _ && (0, r.jsx)(l.oXn, {
      children: (0, r.jsx)(a.Z, {
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