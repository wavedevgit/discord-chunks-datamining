/** Chunk was on 47841 **/
/** chunk id: 86933, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    guildId: t,
    existingRules: n
  } = e, {
    cancelEditingRule: g,
    isLoading: m,
    hasChanges: p,
    editingRule: f,
    errorMessage: b,
    saveEditingRule: h
  } = (0, c.S)(), {
    updateRule: x
  } = (0, o.wP)(t), j = null != f, _ = j && !(0, a.wC)(f), O = j || p || _, v = async () => {
    if (!p && !_) return g();
    null == f || _ || x(f);
    let e = n.find(e => {
      let {
        id: t
      } = e;
      return t === (null == f ? true : f.id)
    });
    try {
      let e = await h(n);
      null != e && x(e)
    } catch (t) {
      null != e && x(e)
    }
  }, y = d.intl.string(d.t["ETE/oC"]), A = !p && j ? d.intl.formatToPlainString(d.t.nula34, {
    ruleName: null == f ? true : f.name
  }) : true;
  return null != b && (A = (0, r.jsx)(s.Text, {
    variant: "text-md/normal",
    color: "text-feedback-critical",
    className: u.i,
    children: b
  })), (0, r.jsx)(i.F, {
    component: "div",
    className: u.n,
    children: O && (0, r.jsx)(s.FQk, {
      children: (0, r.jsx)(l.A, {
        submitting: m,
        disabled: m,
        onSave: v,
        onReset: g,
        onResetText: y,
        message: A
      })
    })
  })
}