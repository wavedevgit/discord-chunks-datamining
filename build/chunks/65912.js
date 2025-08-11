/** Chunk was on web.js **/
/** chunk id: 65912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => A,
  w: () => S
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk94171 = require("./94171.js"),
  Chunk362383 = require("./362383.js"),
  Chunk731965 = require("./731965.js"),
  Chunk881052 = require("./881052.js"),
  Chunk823379 = require("./823379.js"),
  Chunk539573 = require("./539573.js"),
  Chunk236413 = require("./236413.js"),
  Chunk85960 = require("./85960.js"),
  Chunk36459 = require("./36459.js"),
  Chunk422303 = require("./422303.js"),
  Chunk866894 = require("./866894.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  if (e.code === m.evJ.INVALID_FORM_BODY) {
    var t, n;
    if ((null == (n = e.errors) || null == (t = n.trigger_metadata) ? true : t.regex_patterns) != null) return g.intl.string(g.t.hDPEu7)
  }
  return e.getAnyErrorMessage()
}
let I = Object.freeze({
    editingRule: null,
    hasChanges: false,
    isLoading: false,
    errorMessage: null
  }),
  T = (0, Chunk362383.F)((e, t) => ({
    editingRule: null,
    hasChanges: false,
    setEditingRule: n => {
      let r = t().editingRule,
        o = null != n && null != r && n.id === r.id,
        a = i().cloneDeep(n);
      null != a && (a = O(b({}, a), {
        actions: a.actions.filter(c.lm)
      })), (0, s.j)(() => e({
        editingRule: a,
        hasChanges: o,
        errorMessage: null
      }))
    },
    createNewEditingRule: (t, n, r) => {
      let i = b({}, (0, d.ep)(t, n), null != r ? r : {});
      return (0, s.j)(() => e({
        editingRule: i,
        hasChanges: false
      })), i
    },
    isLoading: false,
    errorMessage: null,
    cancelEditingRule: () => {
      (0, s.j)(() => e(b({}, I)))
    },
    saveRule: async (t, n) => {
      if (null == t) return (0, s.j)(() => e(b({}, I))), null;
      try {
        var r, i, o;
        (0, d.DO)(t) && (t.triggerMetadata.keywordFilter = (0, p.cb)((0, p.Ze)(null != (r = t.triggerMetadata.keywordFilter) ? r : [])), t.triggerMetadata.allowList = (0, p.cb)((0, p.Ze)(null != (i = t.triggerMetadata.allowList) ? i : []))), (0, d.Fn)(t) && (t.triggerMetadata.allowList = (0, p.cb)((0, p.Ze)(null != (o = t.triggerMetadata.allowList) ? o : []))), (0, f.yU)(t, n), (0, d.QO)(t)
      } catch (t) {
        return t instanceof u.V6 ? (0, s.j)(() => {
          e({
            errorMessage: g.intl.string(g.t["4Dxaur"]),
            isLoading: false
          })
        }) : t instanceof u.uS ? (0, s.j)(() => {
          e({
            errorMessage: g.intl.string(g.t.hDPEu7),
            isLoading: false
          })
        }) : (0, s.j)(() => {
          e({
            errorMessage: t.message,
            isLoading: false
          })
        }), null
      }
      try {
        (0, s.j)(() => {
          e({
            isLoading: true
          })
        });
        let n = null;
        return n = (0, d.Vb)(t) && !(0, h.U)(t.id) ? await (0, _.Je)(t) : await (0, _.JK)(t), (0, s.j)(() => e(b({}, I))), n
      } catch (n) {
        let t = new l.Hx(n);
        (0, s.j)(() => {
          e({
            isLoading: false,
            errorMessage: v(t)
          })
        })
      }
      return null
    },
    saveEditingRule: e => {
      let {
        editingRule: n,
        saveRule: r
      } = t();
      return r(n, e)
    }
  }));

function S() {
  return T(e => ({
    hasChanges: e.hasChanges,
    editingRule: e.editingRule,
    isLoading: e.isLoading,
    errorMessage: e.errorMessage,
    saveRule: e.saveRule,
    saveEditingRule: e.saveEditingRule,
    cancelEditingRule: e.cancelEditingRule
  }), Chunk94171.X)
}

function A() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
    t = T(e => ({
      hasChanges: e.hasChanges,
      editingRule: e.editingRule,
      setEditingRule: e.setEditingRule,
      createNewEditingRule: e.createNewEditingRule
    }), Chunk94171.X);
  return null != module && exports.setEditingRule(module), exports
}