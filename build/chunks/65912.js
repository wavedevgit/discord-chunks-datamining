/** Chunk was on 93375 **/
/** chunk id: 65912, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => R,
  w: () => y
});
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk55160 = require("./55160.js"),
  Chunk748521 = require("./748521.js"),
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
  Chunk388032 = require("./388032.jsx");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let A = Object.freeze({
    editingRule: null,
    hasChanges: false,
    isLoading: false,
    errorMessage: null
  }),
  _ = (0, Chunk748521.F)((e, t) => ({
    editingRule: null,
    hasChanges: false,
    setEditingRule: n => {
      var r, i;
      let a = t().editingRule,
        o = null != n && null != a && n.id === a.id,
        c = l().cloneDeep(n);
      null != c && (r = p({}, c), i = i = {
        actions: c.actions.filter(s.lm)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), c = r), (0, u.j)(() => e({
        editingRule: c,
        hasChanges: o,
        errorMessage: null
      }))
    },
    createNewEditingRule: (t, n, r) => {
      let l = p({}, (0, f.ep)(t, n), null != r ? r : {});
      return (0, u.j)(() => e({
        editingRule: l,
        hasChanges: false
      })), l
    },
    isLoading: false,
    errorMessage: null,
    cancelEditingRule: () => {
      (0, u.j)(() => e(p({}, A)))
    },
    saveRule: async (t, n) => {
      if (null == t) return (0, u.j)(() => e(p({}, A))), null;
      try {
        var r, l, i;
        (0, f.DO)(t) && (t.triggerMetadata.keywordFilter = (0, S.cb)((0, S.Ze)(null != (r = t.triggerMetadata.keywordFilter) ? r : [])), t.triggerMetadata.allowList = (0, S.cb)((0, S.Ze)(null != (l = t.triggerMetadata.allowList) ? l : []))), (0, f.Fn)(t) && (t.triggerMetadata.allowList = (0, S.cb)((0, S.Ze)(null != (i = t.triggerMetadata.allowList) ? i : []))), (0, E.yU)(t, n), (0, f.QO)(t)
      } catch (t) {
        return t instanceof c.V6 ? (0, u.j)(() => {
          e({
            errorMessage: d.intl.string(d.t["4Dxaus"]),
            isLoading: false
          })
        }) : t instanceof c.uS ? (0, u.j)(() => {
          e({
            errorMessage: d.intl.string(d.t.hDPEu1),
            isLoading: false
          })
        }) : (0, u.j)(() => {
          e({
            errorMessage: t.message,
            isLoading: false
          })
        }), null
      }
      try {
        (0, u.j)(() => {
          e({
            isLoading: true
          })
        });
        let n = null;
        return n = (0, f.Vb)(t) && !(0, O.U)(t.id) ? await (0, g.Je)(t) : await (0, g.JK)(t), (0, u.j)(() => e(p({}, A))), n
      } catch (n) {
        let t = new o.Hx(n);
        (0, u.j)(() => {
          e({
            isLoading: false,
            errorMessage: function(e) {
              if (e.code === j.evJ.INVALID_FORM_BODY) {
                var t, n;
                if ((null == (n = e.errors) || null == (t = n.trigger_metadata) ? true : t.regex_patterns) != null) return d.intl.string(d.t.hDPEu1)
              }
              return e.getAnyErrorMessage()
            }(t)
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

function y() {
  return _(e => ({
    hasChanges: e.hasChanges,
    editingRule: e.editingRule,
    isLoading: e.isLoading,
    errorMessage: e.errorMessage,
    saveRule: e.saveRule,
    saveEditingRule: e.saveEditingRule,
    cancelEditingRule: e.cancelEditingRule
  }), i.X)
}

function R() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
    t = _(e => ({
      hasChanges: e.hasChanges,
      editingRule: e.editingRule,
      setEditingRule: e.setEditingRule,
      createNewEditingRule: e.createNewEditingRule
    }), i.X);
  return null != e && t.setEditingRule(e), t
}