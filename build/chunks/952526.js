/** Chunk was on web.js **/
/** chunk id: 952526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => y
}), require("./228524.js"), require("./896048.js"), require("./321073.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk118356 = require("./118356.js"),
  Chunk73153 = require("./73153.js"),
  Chunk867051 = require("./867051.js"),
  Chunk403362 = require("./403362.js"),
  Chunk747465 = require("./747465.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Chunk118356.Vy("KkvStore"),
  p = Symbol("version"),
  _ = Symbol("boxedPartition"),
  h = Object.freeze({}),
  m = Object.freeze({
    current: h,
    length: 0,
    version: false
  }),
  g = Object.hasOwnProperty;

function E(e, t) {
  if (e === t) returntrue;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) returnfalse;
  for (let r of n) {
    let n = r;
    if (!g.call(t, r) || !(0, l.Kl)(e[n], t[n])) returnfalse
  }
  returntrue
}
class y extends Chunk311907.il {
  _derivedVersion(e) {
    let t = e[p];
    return null == t && (e[p] = t = this.nextVersion++), t
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
  getMode() {
    return this.mode
  }
  registerWithLibdiscore(e) {
    let t;
    switch (this.mode) {
      case "typescript-libdiscore-dual-read": {
        this.shadowState = {
          root: {},
          derived: {
            length: 0,
            numPartitions: 0,
            memoized: {}
          }
        }, t = e => {
          i()(null != this.shadowState, "Shadow state must be set in dual-read mode before setting derived data."), this.shadowState = e
        };
        let e = Symbol(),
          n = {
            root: {},
            derived: {
              length: 0,
              memoized: {}
            }
          };
        this.addChangeListener(() => {
          let t = this.shadowState;
          i()(null != t, "Shadow state must be set in dual-read mode before running validation."), (0, u.R7)(this.getName(), "Kkv", r => {
            let {
              root: i
            } = this.state, a = Object.keys(i), s = Object.keys(t.root);
            for (let s of a) {
              if (!Object.prototype.hasOwnProperty.call(t.root, s)) {
                r(i[s], n);
                continue
              }
              let a = i[s],
                o = t.root[s],
                l = a.derived.memoized[e],
                c = o.derived.memoized[e];
              if (null != l && l === c) continue;
              r(a, o);
              let u = {};
              a.derived.memoized[e] = u, o.derived.memoized[e] = u
            }
            for (let e of s) Object.prototype.hasOwnProperty.call(i, e) || r(n, t.root[e])
          })
        });
        break
      }
      case "libdiscore":
        t = this.setKkvState.bind(this);
        break;
      case "typescript":
        throw Error("This method should not be called in TypeScript mode.");
      default:
        (0, c.xb)(this.mode)
    }
    let {
      storeToken: n,
      state: r
    } = e.registerKkvStore(this.getName());
    return t(r), n
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
    return null != t ? t.root : h
  }
  getPartitionKeys() {
    return Object.keys(this.state.root)
  }
  getBoxedPartition(e) {
    let t = this.state.root[e];
    if (null == t) return m;
    let {
      root: n,
      derived: {
        memoized: r,
        length: i
      }
    } = t, a = r[_];
    return null == a && (r[_] = a = {
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
          memoized: s
        }
      } = i, o = s[n];
      return g.call(s, n) || (o = e(t, a), s[n] = o), o
    }
  }
  memoized(e) {
    let t = Symbol();
    return () => {
      let {
        memoized: n
      } = this.state.derived, r = n[t];
      return g.call(n, t) || (r = e(this.state.root), n[t] = r), r
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
  constructor(e, t = "typescript") {
    const n = {};
    if ("typescript" == (t = "typescript") || "typescript-libdiscore-dual-read" === t) {
      let t = false;
      const r = {
        getPartitionKeys: () => Object.keys(this.state.root),
        reset: e => {
          let n = {};
          "function" == typeof e ? e(n, this.state.root) : null != e && (n = e);
          let r = {},
            i = 0,
            a = 0;
          for (let e in n) {
            let t = Object.keys(n[e]).length;
            i++, a += t, r[e] = {
              root: n[e],
              derived: {
                length: t,
                memoized: {}
              }
            }
          }(0 !== a || 0 !== this.state.derived.length) && (t = true, this.setKkvState({
            root: r,
            derived: {
              memoized: {},
              numPartitions: i,
              length: a
            }
          }))
        },
        set: (e, n, r) => {
          let i = this.state.root[e];
          if (null == i) {
            r = "function" == typeof r ? r(true) : r, this.state.root[e] = {
              root: {
                [n]: r
              },
              derived: {
                length: 1,
                memoized: {}
              }
            };
            let {
              derived: i
            } = this.state;
            return i.numPartitions++, i.length++, t = true, true
          }
          let a = i.root[n];
          return "function" == typeof r && (r = r(a)), !(true !== a && (0, l.Kl)(a, r)) && (i.root[n] = r, true === a && (i.derived.length++, this.state.derived.length++), i.derived.memoized = {}, t = true, true)
        },
        setPartition: (e, n) => {
          let r = this.state.root[e];
          if (null == r) {
            "function" == typeof n && (n = n(true));
            let r = Object.keys(n).length;
            if (0 === r) returnfalse;
            let {
              root: i,
              derived: a
            } = this.state;
            return i[e] = {
              root: n,
              derived: {
                length: r,
                memoized: {}
              }
            }, a.numPartitions++, a.length += r, t = true, true
          }
          if ("function" == typeof n && (n = n(r.root)), E(r.root, n)) returnfalse;
          let i = Object.keys(n).length,
            a = r.derived.length;
          if (this.state.derived.length -= a, 0 === i) delete this.state.root[e], this.state.derived.numPartitions--;
          else {
            let {
              root: t,
              derived: r
            } = this.state;
            t[e] = {
              root: n,
              derived: {
                length: i,
                memoized: {}
              }
            }, r.length += i
          }
          return t = true, true
        },
        get: (e, t) => {
          var n;
          return null == (n = this.state.root[e]) ? true : n.root[t]
        },
        getPartition: e => {
          var t;
          return null == (t = this.state.root[e]) ? true : t.root
        },
        remove: (e, n) => {
          let r = this.state.root[e];
          return null != r && true !== r.root[n] && (delete r.root[n], r.derived.length--, 0 === r.derived.length ? (delete this.state.root[e], this.state.derived.numPartitions--) : r.derived.memoized = {}, this.state.derived.length--, t = true, true)
        },
        removePartition: e => {
          let n = this.state.root[e];
          if (null == n) returnfalse;
          let r = n.derived.length,
            {
              root: i,
              derived: a
            } = this.state;
          return delete i[e], a.numPartitions--, a.length -= r, t = true, true
        }
      };
      for (const i in e) {
        const a = e[i],
          s = e => {
            if (t = false, a(e, r), !t) returnfalse;
            this.state.derived.memoized = {}
          };
        n[i] = s
      }
    }
    super(o.h, n), d(this, "state", {
      root: {},
      derived: {
        numPartitions: 0,
        length: 0,
        memoized: {}
      }
    }), d(this, "shadowState", null), d(this, "mode", true), d(this, "nextVersion", 0), this.mode = t, f.info("".concat(this.getName(), " initialized in mode: ").concat(this.mode))
  }
}