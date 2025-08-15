/** Chunk was on web.js **/
/** chunk id: 429091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => b
}), require("./953529.js"), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780935 = require("./780935.js"),
  Chunk579092 = require("./579092.js"),
  Chunk570140 = require("./570140.js"),
  Chunk311929 = require("./311929.js"),
  Chunk823379 = require("./823379.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Chunk579092.Yd("KkvStore"),
  _ = Symbol("version"),
  p = Symbol("boxedPartition"),
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
    if (!g.call(t, r) || !(0, c.$E)(e[n], t[n])) returnfalse
  }
  returntrue
}
class b extends Chunk442837.yh {
  _derivedVersion(e) {
    let t = e[_];
    return null == t && (e[_] = t = this.nextVersion++), t
  }
  mapPartitions(e) {
    let t = [];
    for (let n in this.root) t.push({
      partitionKey: n,
      values: e(this.root[n].root, n)
    });
    return t
  }
  getMode() {
    return this.mode
  }
  registerWithLibdiscore(e) {
    let t;
    switch (this.mode) {
      case "typescript-libdiscore-dual-read":
        this.shadowState = {
          root: {},
          derived: {
            length: 0,
            numPartitions: 0,
            memoized: {}
          }
        }, t = (e, t) => {
          i()(null != this.shadowState, "Shadow state must be set in dual-read mode before setting derived data."), this.shadowState = {
            root: e,
            derived: t
          }
        }, this.addChangeListener(() => {
          i()(null != this.shadowState, "Shadow state must be set in dual-read mode before running validation.")
        });
        break;
      case "libdiscore":
        t = this.setKkvRoot.bind(this);
        break;
      case "typescript":
        throw Error("This method should not be called in TypeScript mode.");
      default:
        (0, u.vE)(this.mode)
    }
    return e.registerKkvStore(this.getName(), (e, n) => {
      t(e, n)
    })
  }
  version() {
    return this._derivedVersion(this.derived.memoized)
  }
  partitionVersion(e) {
    let t = this.root[e];
    return null == t ? null : this._derivedVersion(t[o.V].memoized)
  }
  getRecord(e, t) {
    var n;
    return null == (n = this.root[e]) ? true : n.root[t]
  }
  getManyRecords(e, t) {
    let n = this.root[e];
    if (null == n) return [];
    let r = [];
    for (let e of t) {
      let t = n.root[e];
      null != t && r.push(t)
    }
    return r
  }
  getPartition(e) {
    let t = this.root[e];
    return null != t ? t.root : h
  }
  getBoxedPartition(e) {
    let t = this.root[e];
    if (null == t) return m;
    let {
      root: n,
      [o.V]: {
        memoized: r,
        length: i
      }
    } = t, a = r[p];
    return null == a && (r[p] = a = {
      current: n,
      version: this._derivedVersion(r),
      length: i
    }), a
  }
  partitionLength(e) {
    let t = this.root[e];
    return null == t ? 0 : t[o.V].length
  }
  length() {
    return this.derived.length
  }
  numPartitions() {
    return this.derived.numPartitions
  }
  getNullablePartition(e) {
    let t = this.root[e];
    return null == t ? null : t.root
  }
  memoizedPartition(e) {
    let t = Symbol(),
      n = e({});
    return r => {
      let i = this.root[r];
      if (null == i) return n;
      let {
        root: a,
        [o.V]: {
          memoized: s
        }
      } = i, l = s[t];
      return g.call(s, t) || (l = e(a), s[t] = l), l
    }
  }
  memoized(e) {
    let t = Symbol();
    return () => {
      let {
        memoized: n
      } = this.derived, r = n[t];
      return g.call(n, t) || (r = e(this.root), n[t] = r), r
    }
  }
  setKkvRoot(e, t) {
    this.root = e, this.derived = t
  }
  constructor(e, t = "typescript") {
    let n = {};
    if ("typescript" === t || "typescript-libdiscore-dual-read" === t) {
      let t = false,
        r = {
          reset: e => {
            let n = {};
            "function" == typeof e ? e(n, this.root) : null != e && (n = e);
            let r = {},
              i = 0,
              a = 0;
            for (let e in n) {
              let t = Object.keys(n[e]).length;
              i++, a += t, r[e] = {
                root: n[e],
                [o.V]: {
                  length: t,
                  memoized: {}
                }
              }
            }(0 !== a || 0 !== this.derived.length) && (t = true, this.setKkvRoot(r, {
              memoized: {},
              numPartitions: i,
              length: a
            }))
          },
          set: (e, n, r) => {
            let i = this.root[e];
            if (null == i) return r = "function" == typeof r ? r(true) : r, this.root[e] = {
              root: {
                [n]: r
              },
              [o.V]: {
                length: 1,
                memoized: {}
              }
            }, this.derived.numPartitions++, this.derived.length++, t = true, true;
            let a = i.root[n];
            return "function" == typeof r && (r = r(a)), !(true !== a && (0, c.$E)(a, r)) && (i.root[n] = r, true === a && (i[o.V].length++, this.derived.length++), i[o.V].memoized = {}, t = true, true)
          },
          setPartition: (e, n) => {
            let r = this.root[e];
            if (null == r) {
              "function" == typeof n && (n = n(true));
              let r = Object.keys(n).length;
              return 0 !== r && (this.root[e] = {
                root: n,
                [o.V]: {
                  length: r,
                  memoized: {}
                }
              }, this.derived.numPartitions++, this.derived.length += r, t = true, true)
            }
            if ("function" == typeof n && (n = n(r.root)), E(r.root, n)) returnfalse;
            let i = Object.keys(n).length,
              a = r[o.V].length;
            return this.derived.length -= a, 0 === i ? (delete this.root[e], this.derived.numPartitions--) : (this.root[e] = {
              root: n,
              [o.V]: {
                length: i,
                memoized: {}
              }
            }, this.derived.length += i), t = true, true
          },
          get: (e, t) => {
            var n;
            return null == (n = this.root[e]) ? true : n.root[t]
          },
          getPartition: e => {
            var t;
            return null == (t = this.root[e]) ? true : t.root
          },
          remove: (e, n) => {
            let r = this.root[e];
            return null != r && true !== r.root[n] && (delete r.root[n], r[o.V].length--, 0 === r[o.V].length ? (delete this.root[e], this.derived.numPartitions--) : r[o.V].memoized = {}, this.derived.length--, t = true, true)
          },
          removePartition: e => {
            let n = this.root[e];
            if (null == n) returnfalse;
            let r = n[o.V].length;
            return delete this.root[e], this.derived.numPartitions--, this.derived.length -= r, t = true, true
          }
        };
      for (let i in e) {
        let a = e[i],
          o = e => {
            if (t = false, a(e, r), !t) returnfalse;
            this.derived.memoized = {}
          };
        n[i] = o
      }
    }
    super(l.Z, n), d(this, "mode", true), d(this, "root", true), d(this, "shadowState", true), d(this, "derived", true), d(this, "nextVersion", true), this.mode = t, this.root = {}, this.shadowState = null, this.derived = {
      numPartitions: 0,
      memoized: {},
      length: 0
    }, this.nextVersion = 0, f.info("".concat(this.getName(), " initialized in mode: ").concat(this.mode))
  }
}