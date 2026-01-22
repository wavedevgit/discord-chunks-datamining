/** Chunk was on web.js **/
/** chunk id: 186306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => o
}), require("./896048.js"), require("./321073.js");
var Chunk711371 = require("./711371.js");
let i = 250,
  a = new WeakMap,
  s = new WeakMap,
  o = {
    isMerging(e) {
      var t;
      return null == (t = s.get(e)) || t
    },
    isSaving(e) {
      var t;
      return null == (t = a.get(e)) || t
    },
    withoutMerging(e, t) {
      let n = this.isMerging(e);
      s.set(e, false);
      try {
        t()
      } finally {
        s.set(e, n)
      }
    },
    withoutSaving(e, t) {
      let n = this.isSaving(e);
      a.set(e, false);
      try {
        t()
      } finally {
        a.set(e, n)
      }
    },
    withSingleEntry: (e, t) => l(e, "other", false, t),
    withMergedEntry: (e, t) => l(e, "other", true, t),
    currentEntry: e => e.history.stack.length > 0 ? e.history.stack[e.history.index] : null,
    insertOrMergeEntry(e, t) {
      let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
        r = o.currentEntry(e);
      o.isMerging(e) && (null == r ? true : r.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
    },
    insertEntry(e, t) {
      let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
        a = arguments.length > 3 ? arguments[3] : true,
        s = arguments.length > 4 ? arguments[4] : true;
      s = null != s ? s : e.selection, a = null != a ? a : r.VW.richValue(e);
      let {
        history: l
      } = e, c = o.currentEntry(e);
      for (null != c && (c.mergeable = false), l.stack.length > 0 && (l.stack.length = l.index + 1); l.stack.length >= i;) l.stack.shift();
      l.stack.push({
        type: t,
        mergeable: n,
        createdAt: Date.now(),
        value: a,
        selection: s
      }), l.index = l.stack.length - 1
    },
    mergeEntry(e) {
      let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        {
          selection: n
        } = e,
        i = r.VW.richValue(e),
        a = o.currentEntry(e);
      null != a && (a.value = i, a.selection = n, t || (a.mergeable = false))
    }
  };

function l(e, t, n, i) {
  let s = e.children,
    l = e.selection,
    c = o.isSaving(e);
  a.set(e, false);
  try {
    let a = i();
    return c && (n ? o.mergeEntry(e) : e.children !== s ? o.insertEntry(e, t, false) : o.isMerging(e) && null != e.selection && (null == l || !r.ZF.equals(e.selection, l)) && o.mergeEntry(e)), a
  } finally {
    a.set(e, c)
  }
}