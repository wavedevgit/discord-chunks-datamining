/** Chunk was on 24202 **/
/** chunk id: 268749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => R,
  U: () => y
});
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk198982 = require("./198982.js"),
  Chunk403362 = require("./403362.js"),
  Chunk753738 = require("./753738.js"),
  Chunk627794 = require("./627794.js"),
  Chunk53594 = require("./53594.js"),
  Chunk137207 = require("./137207.js"),
  Chunk789821 = require("./789821.js"),
  Chunk904813 = require("./904813.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
let h = Object.freeze({
    editingRule: null,
    hasChanges: false,
    isLoading: false,
    errorMessage: null
  }),
  _ = (0, Chunk265690.h)((e, t) => ({
    editingRule: null,
    hasChanges: false,
    setEditingRule: n => {
      var r, i;
      let a = t().editingRule,
        o = null != n && null != a && n.id === a.id,
        c = l().cloneDeep(n);
      null != c && (r = p({}, c), i = i = {
        actions: c.actions.filter(s.Vq)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), c = r), (0, u.r)(() => e({
        editingRule: c,
        hasChanges: o,
        errorMessage: null
      }))
    },
    createNewEditingRule: (t, n, r) => {
      let l = p({}, (0, E._I)(t, n), null != r ? r : {});
      return (0, u.r)(() => e({
        editingRule: l,
        hasChanges: false
      })), l
    },
    isLoading: false,
    errorMessage: null,
    cancelEditingRule: () => {
      (0, u.r)(() => e(p({}, h)))
    },
    saveRule: async (t, n) => {
      if (null == t) return (0, u.r)(() => e(p({}, h))), null;
      try {
        var r, l, i;
        (0, E.KU)(t) && (t.triggerMetadata.keywordFilter = (0, S.HR)((0, S.Uq)(null != (r = t.triggerMetadata.keywordFilter) ? r : [])), t.triggerMetadata.allowList = (0, S.HR)((0, S.Uq)(null != (l = t.triggerMetadata.allowList) ? l : []))), (0, E.ZG)(t) && (t.triggerMetadata.allowList = (0, S.HR)((0, S.Uq)(null != (i = t.triggerMetadata.allowList) ? i : []))), (0, A.xG)(t, n), (0, E.uV)(t)
      } catch (t) {
        return t instanceof c.lH ? (0, u.r)(() => {
          e({
            errorMessage: d.intl.string(d.t["4Dxaus"]),
            isLoading: false
          })
        }) : t instanceof c.Nr ? (0, u.r)(() => {
          e({
            errorMessage: d.intl.string(d.t.hDPEu1),
            isLoading: false
          })
        }) : (0, u.r)(() => {
          e({
            errorMessage: t.message,
            isLoading: false
          })
        }), null
      }
      try {
        (0, u.r)(() => {
          e({
            isLoading: true
          })
        });
        let n = null;
        return n = (0, E.wC)(t) && !(0, f.R)(t.id) ? await (0, g.Vj)(t) : await (0, g.G6)(t), (0, u.r)(() => e(p({}, h))), n
      } catch (n) {
        let t = new o.LG(n);
        (0, u.r)(() => {
          e({
            isLoading: false,
            errorMessage: function(e) {
              if (e.code === O.t02.INVALID_FORM_BODY) {
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

function R() {
  return _(e => ({
    hasChanges: e.hasChanges,
    editingRule: e.editingRule,
    isLoading: e.isLoading,
    errorMessage: e.errorMessage,
    saveRule: e.saveRule,
    saveEditingRule: e.saveEditingRule,
    cancelEditingRule: e.cancelEditingRule
  }), i.x)
}

function y() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
    t = _(e => ({
      hasChanges: e.hasChanges,
      editingRule: e.editingRule,
      setEditingRule: e.setEditingRule,
      createNewEditingRule: e.createNewEditingRule
    }), i.x);
  return null != e && t.setEditingRule(e), t
}