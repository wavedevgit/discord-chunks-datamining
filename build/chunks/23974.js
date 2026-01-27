/** Chunk was on web.js **/
/** chunk id: 23974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => d
}), require("./228524.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk867051 = require("./867051.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = Object.prototype.hasOwnProperty,
  u = Symbol("version");
class d extends Chunk311907.il {
  memoized(e) {
    let t = Symbol();
    return () => {
      let {
        memoized: n
      } = this.state.derived, r = n[t];
      return c.call(n, t) || (r = e(this.state.root), n[t] = r), r
    }
  }
  version() {
    let {
      memoized: e
    } = this.state.derived, t = e[u];
    return null == t && (e[u] = t = ++this.nextVersion), t
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
  constructor(e) {
    const t = {};
    let n = false;
    const r = {
      reset: e => {
        let t = {};
        "function" == typeof e ? e(t = {}, this.state.root) : null != e && (t = e), this.setKvState({
          root: t,
          derived: {
            length: Object.keys(t).length,
            memoized: {}
          }
        }), n = true
      },
      get: e => this.state.root[e],
      set: (e, t) => {
        let r = this.state.root[e];
        if ("function" == typeof t && (t = t(r)), true !== r && (0, s.Kl)(r, t)) returnfalse;
        this.state.root[e] = t;
        let {
          derived: i
        } = this.state;
        return true === r && i.length++, i.memoized = {}, n = true, true
      },
      remove: e => {
        let t = c.call(this.state.root, e);
        if (t) {
          delete this.state.root[e];
          let {
            derived: t
          } = this.state;
          t.length--, t.memoized = {}, n = true
        }
        return t
      }
    };
    for (const i in e) {
      const a = e[i],
        o = e => {
          if (n = false, a(e, r), !n) returnfalse
        };
      t[i] = o
    }
    super(o.h, t), l(this, "state", {
      derived: {
        length: 0,
        memoized: {}
      },
      root: {}
    }), l(this, "nextVersion", 0)
  }
}