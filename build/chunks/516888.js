/** Chunk was on web.js **/
/** chunk id: 516888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => h
}), require("./953529.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk579092 = require("./579092.js"),
  Chunk570140 = require("./570140.js"),
  Chunk311929 = require("./311929.js"),
  Chunk823379 = require("./823379.js"),
  Chunk544407 = require("./544407.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Chunk579092.Yd("KvStore"),
  _ = Object.prototype.hasOwnProperty,
  p = Symbol("version");
class h extends Chunk442837.yh {
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
            memoized: {}
          }
        }, t = (e, t) => {
          i()(null != this.shadowState, "Shadow state must be set in dual-read mode before setting derived data."), this.shadowState = {
            root: e,
            derived: t
          }
        }, this.addChangeListener(() => {
          i()(null != this.shadowState, "Shadow state must be set in dual-read mode before running validation."), (0, u.t)(this.getName(), {
            root: this.root,
            derived: this.derived
          }, this.shadowState)
        });
        break;
      case "libdiscore":
        t = this.setKvRoot.bind(this);
        break;
      case "typescript":
        throw Error("This method should not be called in TypeScript mode.");
      default:
        (0, c.vE)(this.mode)
    }
    return e.registerKvStore(this.getName(), (e, n) => {
      t(e, n)
    })
  }
  memoized(e) {
    let t = Symbol();
    return () => {
      let {
        memoized: n
      } = this.derived, r = n[t];
      return _.call(n, t) || (r = e(this.root), n[t] = r), r
    }
  }
  version() {
    let e = this.derived.memoized[p];
    return null == module && (this.derived.memoized[p] = e = ++this.nextVersion), module
  }
  get(e) {
    return this.root[e]
  }
  setKvRoot(e, t) {
    this.root = e, this.derived = t
  }
  length() {
    return this.derived.length
  }
  constructor(e, t = "typescript") {
    let n = {};
    if ("typescript" === t || "typescript-libdiscore-dual-read" === t) {
      let t = false,
        r = {
          reset: e => {
            let n = {};
            "function" == typeof e ? e(n = {}, this.root) : null != e && (n = e), this.setKvRoot(n, {
              length: Object.keys(n).length,
              memoized: {}
            }), t = true
          },
          get: e => this.root[e],
          set: (e, n) => {
            let r = this.root[e];
            if ("function" == typeof n && (n = n(r)), true !== r && (0, l.$E)(r, n)) returnfalse;
            this.root[e] = n;
            let {
              derived: i
            } = this;
            return true === r && i.length++, i.memoized = {}, t = true, true
          },
          remove: e => {
            let n = _.call(this.root, e);
            if (n) {
              delete this.root[e];
              let {
                derived: n
              } = this;
              n.length--, n.memoized = {}, t = true
            }
            return n
          }
        };
      for (let i in e) {
        let a = e[i],
          o = e => {
            if (t = false, a(e, r), !t) returnfalse
          };
        n[i] = o
      }
    }
    super(s.Z, n), d(this, "mode", true), d(this, "shadowState", true), d(this, "root", true), d(this, "derived", true), d(this, "nextVersion", true), this.mode = t, this.shadowState = null, this.root = {}, this.derived = {
      length: 0,
      memoized: {}
    }, this.nextVersion = 0, f.info("".concat(this.getName(), " initialized in mode: ").concat(this.mode))
  }
}