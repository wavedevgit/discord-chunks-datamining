/** Chunk was on 47841 **/
/** chunk id: 86933, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk73939 = require("./73939.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk627794 = require("./627794.js"),
  Chunk928348 = require("./928348.js"),
  Chunk268749 = require("./268749.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk181765 = require("./181765.js");

function f(e) {
  let {
    guildId: t,
    existingRules: n
  } = e, {
    cancelEditingRule: f,
    isLoading: g,
    hasChanges: b,
    editingRule: m,
    errorMessage: p,
    saveEditingRule: x
  } = (0, o.S)(), {
    updateRule: h
  } = (0, c.wP)(t), j = null != m, O = j && !(0, a.wC)(m), y = j || b || O, v = async () => {
    if (!b && !O) return f();
    null == m || O || h(m);
    let e = n.find(e => {
      let {
        id: t
      } = e;
      return t === (null == m ? true : m.id)
    });
    try {
      let e = await x(n);
      null != e && h(e)
    } catch (t) {
      null != e && h(e)
    }
  }, A = d.intl.string(d.t["ETE/oC"]), E = !b && j ? d.intl.formatToPlainString(d.t.nula34, {
    ruleName: null == m ? true : m.name
  }) : true;
  return null != p && (E = (0, r.jsx)(s.Text, {
    variant: "text-md/normal",
    color: "text-feedback-critical",
    className: u.i,
    children: p
  })), (0, r.jsx)(i.F, {
    component: "div",
    className: u.n,
    children: y && (0, r.jsx)(s.FQk, {
      children: (0, r.jsx)(l.A, {
        submitting: g,
        disabled: g,
        onSave: v,
        onReset: f,
        onResetText: A,
        message: E
      })
    })
  })
}