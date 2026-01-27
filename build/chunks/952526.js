/** Chunk was on web.js **/
/** chunk id: 952526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => p
}), require("./228524.js"), require("./896048.js"), require("./321073.js"), require("./65821.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk867051 = require("./867051.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = Symbol("version"),
  l = Symbol("boxedPartition"),
  c = Object.freeze({}),
  u = Object.freeze({
    current: c,
    length: 0,
    version: false
  }),
  d = Object.hasOwnProperty;

function f(e, t) {
  if (e === t) returntrue;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) returnfalse;
  for (let r of n) {
    let n = r;
    if (!d.call(t, r) || !(0, a.Kl)(e[n], t[n])) returnfalse
  }
  returntrue
}
class p extends Chunk311907.il {
  _derivedVersion(e) {
    let t = e[s];
    return null == t && (e[s] = t = this.nextVersion++), t
  }
  mapPartitions(e) {
    let t = [],
      {
        root: n
      } = this.state;
    for (let r in n) t.push({
      partitionKey: r,
      values: e(n[r].root, r)
    });
    return t
  }
  version() {
    return this._derivedVersion(this.state.derived.memoized)
  }
  partitionVersion(e) {
    let t = this.state.root[e];
    return null == t ? null : this._derivedVersion(t.derived.memoized)
  }
  getRecord(e, t) {
    var n;
    return null == (n = this.state.root[e]) ? true : n.root[t]
  }
  getManyRecords(e, t) {
    let n = this.state.root[e];
    if (null == n) return [];
    let r = [];
    for (let e of t) {
      let t = n.root[e];
      null != t && r.push(t)
    }
    return r
  }
  getPartition(e) {
    let t = this.state.root[e];
    return null != t ? t.root : c
  }
  getPartitionKeys() {
    return Object.keys(this.state.root)
  }
  getBoxedPartition(e) {
    let t = this.state.root[e];
    if (null == t) return u;
    let {
      root: n,
      derived: {
        memoized: r,
        length: i
      }
    } = t, a = r[l];
    return null == a && (r[l] = a = {
      current: n,
      version: this._derivedVersion(r),
      length: i
    }), a
  }
  partitionLength(e) {
    let t = this.state.root[e];
    return null == t ? 0 : t.derived.length
  }
  length() {
    return this.state.derived.length
  }
  numPartitions() {
    return this.state.derived.numPartitions
  }
  getNullablePartition(e) {
    let t = this.state.root[e];
    return null == t ? null : t.root
  }
  memoizedPartition(e, t) {
    let n = Symbol(),
      r = true !== t ? t : e("", {});
    return t => {
      let i = this.state.root[t];
      if (null == i) return r;
      let {
        root: a,
        derived: {
          memoized: o
        }
      } = i, s = o[n];
      return d.call(o, n) || (s = e(t, a), o[n] = s), s
    }
  }
  memoized(e) {
    let t = Symbol();
    return () => {
      let {
        memoized: n
      } = this.state.derived, r = n[t];
      return d.call(n, t) || (r = e(this.state.root), n[t] = r), r
    }
  }
  memoizedSecondaryIndex() {
    let e = this.memoized(e => {
      let t = {};
      for (let n in e) {
        let r = e[n];
        for (let e in r.root) {
          if (Object.prototype.hasOwnProperty.call(t, e)) throw Error("Duplicate clustering key: ".concat(e));
          t[e] = r.root[e]
        }
      }
      return t
    });
    return t => e()[t]
  }
  setKkvState(e) {
    this.state = e
  }
  debugFindRecordByClusteringKeyDoNotUse(e) {
    let t = [],
      {
        root: n
      } = this.state;
    for (let r in n) {
      let i = n[r].root[e];
      null != i && t.push({
        partitionKey: r,
        record: i
      })
    }
    return t
  }
  constructor(e) {
    const t = {};
    let n = false;
    const r = {
      getPartitionKeys: () => Object.keys(this.state.root),
      reset: e => {
        let t = {};
        "function" == typeof e ? e(t, this.state.root) : null != e && (t = e);
        let r = {},
          i = 0,
          a = 0;
        for (let e in t) {
          let n = Object.keys(t[e]).length;
          i++, a += n, r[e] = {
            root: t[e],
            derived: {
              length: n,
              memoized: {}
            }
          }
        }(0 !== a || 0 !== this.state.derived.length) && (n = true, this.setKkvState({
          root: r,
          derived: {
            memoized: {},
            numPartitions: i,
            length: a
          }
        }))
      },
      set: (e, t, r) => {
        let i = this.state.root[e];
        if (null == i) {
          r = "function" == typeof r ? r(true) : r, this.state.root[e] = {
            root: {
              [t]: r
            },
            derived: {
              length: 1,
              memoized: {}
            }
          };
          let {
            derived: i
          } = this.state;
          return i.numPartitions++, i.length++, n = true, true
        }
        let o = i.root[t];
        return "function" == typeof r && (r = r(o)), !(true !== o && (0, a.Kl)(o, r)) && (i.root[t] = r, true === o && (i.derived.length++, this.state.derived.length++), i.derived.memoized = {}, n = true, true)
      },
      setPartition: (e, t) => {
        let r = this.state.root[e];
        if (null == r) {
          "function" == typeof t && (t = t(true));
          let r = Object.keys(t).length;
          if (0 === r) returnfalse;
          let {
            root: i,
            derived: a
          } = this.state;
          return i[e] = {
            root: t,
            derived: {
              length: r,
              memoized: {}
            }
          }, a.numPartitions++, a.length += r, n = true, true
        }
        if ("function" == typeof t && (t = t(r.root)), f(r.root, t)) returnfalse;
        let i = Object.keys(t).length,
          a = r.derived.length;
        if (this.state.derived.length -= a, 0 === i) delete this.state.root[e], this.state.derived.numPartitions--;
        else {
          let {
            root: n,
            derived: r
          } = this.state;
          n[e] = {
            root: t,
            derived: {
              length: i,
              memoized: {}
            }
          }, r.length += i
        }
        return n = true, true
      },
      get: (e, t) => {
        var n;
        return null == (n = this.state.root[e]) ? true : n.root[t]
      },
      getPartition: e => {
        var t;
        return null == (t = this.state.root[e]) ? true : t.root
      },
      remove: (e, t) => {
        let r = this.state.root[e];
        return null != r && true !== r.root[t] && (delete r.root[t], r.derived.length--, 0 === r.derived.length ? (delete this.state.root[e], this.state.derived.numPartitions--) : r.derived.memoized = {}, this.state.derived.length--, n = true, true)
      },
      removePartition: e => {
        let t = this.state.root[e];
        if (null == t) returnfalse;
        let r = t.derived.length,
          {
            root: i,
            derived: a
          } = this.state;
        return delete i[e], a.numPartitions--, a.length -= r, n = true, true
      }
    };
    for (const i in e) {
      const a = e[i],
        o = e => {
          if (n = false, a(e, r), !n) returnfalse;
          this.state.derived.memoized = {}
        };
      t[i] = o
    }
    super(i.h, t), o(this, "state", {
      root: {},
      derived: {
        numPartitions: 0,
        length: 0,
        memoized: {}
      }
    }), o(this, "nextVersion", 0)
  }
}