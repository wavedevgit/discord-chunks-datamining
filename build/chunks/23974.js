/** Chunk was on web.js **/
/** chunk id: 23974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => h
}), require("./228524.js"), require("./65821.js");
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
let f = new Chunk118356.Vy("KvStore"),
  p = Object.prototype.hasOwnProperty,
  _ = Symbol("version");
class h extends Chunk311907.il {
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
          i()(null != e, "Shadow state must be set in dual-read mode before running validation."), (0, u.R7)(this.getName(), "Kv", t => {
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
        (0, c.xb)(this.mode)
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
    const n = {};
    if ("typescript" == (t = "typescript") || "typescript-libdiscore-dual-read" === t) {
      let t = false;
      const r = {
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
          if ("function" == typeof n && (n = n(r)), true !== r && (0, l.Kl)(r, n)) returnfalse;
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
      for (const i in e) {
        const a = e[i],
          s = e => {
            if (t = false, a(e, r), !t) returnfalse
          };
        n[i] = s
      }
    }
    super(o.h, n), d(this, "shadowState", null), d(this, "mode", true), d(this, "state", {
      derived: {
        length: 0,
        memoized: {}
      },
      root: {}
    }), d(this, "nextVersion", 0), this.mode = t, f.info("".concat(this.getName(), " initialized in mode: ").concat(this.mode))
  }
}