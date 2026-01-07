/** Chunk was on web.js **/
/** chunk id: 516888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => m
}), require("./953529.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk579092 = require("./579092.js"),
  Chunk570140 = require("./570140.js"),
  Chunk311929 = require("./311929.js"),
  Chunk823379 = require("./823379.js"),
  Chunk854586 = require("./854586.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Chunk579092.Yd("KvStore"),
  p = Object.prototype.hasOwnProperty,
  _ = Symbol("version");
class m extends Chunk442837.yh {
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
        }, t = e => {
          this.shadowState = e
        }, this.addChangeListener(() => {
          let e = this.shadowState;
          i()(null != e, "Shadow state must be set in dual-read mode before running validation."), (0, u.tL)(this.getName(), "Kv", t => {
            t(this.state, e)
          })
        });
        break;
      case "libdiscore":
        t = this.setKvState.bind(this);
        break;
      case "typescript":
        throw Error("This method should not be called in TypeScript mode.");
      default:
        (0, c.vE)(this.mode)
    }
    let {
      state: n,
      storeToken: r
    } = e.registerKvStore(this.getName());
    return t(n), r
  }
  memoized(e) {
    let t = Symbol();
    return () => {
      let {
        memoized: n
      } = this.state.derived, r = n[t];
      return p.call(n, t) || (r = e(this.state.root), n[t] = r), r
    }
  }
  version() {
    let {
      memoized: e
    } = this.state.derived, t = e[_];
    return null == t && (e[_] = t = ++this.nextVersion), t
  }
  get(e) {
    return this.state.root[e]
  }
  setKvState(e) {
    this.state = e, i()("object" == typeof this.state.root, "must have root"), i()("object" == typeof this.state.derived, "must have derived")
  }
  length() {
    return this.state.derived.length
  }
  constructor(e, t = "typescript") {
    let n = {};
    if ("typescript" == (t = "typescript") || "typescript-libdiscore-dual-read" === t) {
      let t = false,
        r = {
          reset: e => {
            let n = {};
            "function" == typeof e ? e(n = {}, this.state.root) : null != e && (n = e), this.setKvState({
              root: n,
              derived: {
                length: Object.keys(n).length,
                memoized: {}
              }
            }), t = true
          },
          get: e => this.state.root[e],
          set: (e, n) => {
            let r = this.state.root[e];
            if ("function" == typeof n && (n = n(r)), true !== r && (0, l.$E)(r, n)) returnfalse;
            this.state.root[e] = n;
            let {
              derived: i
            } = this.state;
            return true === r && i.length++, i.memoized = {}, t = true, true
          },
          remove: e => {
            let n = p.call(this.state.root, e);
            if (n) {
              delete this.state.root[e];
              let {
                derived: n
              } = this.state;
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
    super(s.Z, n), d(this, "shadowState", null), d(this, "mode", true), d(this, "state", {
      derived: {
        length: 0,
        memoized: {}
      },
      root: {}
    }), d(this, "nextVersion", 0), this.mode = t, f.info("".concat(this.getName(), " initialized in mode: ").concat(this.mode))
  }
}