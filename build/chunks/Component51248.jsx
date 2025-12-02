/** Chunk was on 384 **/
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
    saveEditingRule: b
  } = (0, c.w)(), {
    updateRule: x
  } = (0, o.pH)(t), j = null != f, _ = j && !(0, s.Vb)(f), v = j || p || _, O = async () => {
    if (!p && !_) return g();
    null == f || _ || x(f);
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
  }, C = d.intl.string(d.t["ETE/oC"]), y = !p && j ? d.intl.formatToPlainString(d.t.nula34, {
    ruleName: null == f ? true : f.name
  }) : true;
  return null != h && (y = (0, r.jsx)(a.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: u.message,
    children: h
  })), (0, r.jsx)(i.W, {
    component: "div",
    className: u.saveNoticeContainer,
    children: v && (0, r.jsx)(a.oXn, {
      children: (0, r.jsx)(l.Z, {
        submitting: m,
        disabled: m,
        onSave: O,
        onReset: g,
        onResetText: C,
        message: y
      })
    })
  })
}