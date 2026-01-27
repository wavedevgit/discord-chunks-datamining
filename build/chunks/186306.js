/** Chunk was on web.js **/
/** chunk id: 186306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => s
}), require("./896048.js"), require("./321073.js");
var Chunk711371 = require("./711371.js");
let i = 250,
  a = new WeakMap,
  o = new WeakMap,
  s = {
    isMerging(e) {
      var t;
      return null == (t = o.get(e)) || t
    },
    isSaving(e) {
      var t;
      return null == (t = a.get(e)) || t
    },
    withoutMerging(e, t) {
      let n = this.isMerging(e);
      o.set(e, false);
      try {
        t()
      } finally {
        o.set(e, n)
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
        r = s.currentEntry(e);
      s.isMerging(e) && (null == r ? true : r.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
    },
    insertEntry(e, t) {
      let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
        a = arguments.length > 3 ? arguments[3] : true,
        o = arguments.length > 4 ? arguments[4] : true;
      o = null != o ? o : e.selection, a = null != a ? a : r.VW.richValue(e);
      let {
        history: l
      } = e, c = s.currentEntry(e);
      for (null != c && (c.mergeable = false), l.stack.length > 0 && (l.stack.length = l.index + 1); l.stack.length >= i;) l.stack.shift();
      l.stack.push({
        type: t,
        mergeable: n,
        createdAt: Date.now(),
        value: a,
        selection: o
      }), l.index = l.stack.length - 1
    },
    mergeEntry(e) {
      let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        {
          selection: n
        } = e,
        i = r.VW.richValue(e),
        a = s.currentEntry(e);
      null != a && (a.value = i, a.selection = n, t || (a.mergeable = false))
    }
  };

function l(e, t, n, i) {
  let o = e.children,
    l = e.selection,
    c = s.isSaving(e);
  a.set(e, false);
  try {
    let a = i();
    return c && (n ? s.mergeEntry(e) : e.children !== o ? s.insertEntry(e, t, false) : s.isMerging(e) && null != e.selection && (null == l || !r.ZF.equals(e.selection, l)) && s.mergeEntry(e)), a
  } finally {
    a.set(e, c)
  }
}