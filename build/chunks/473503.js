/** Chunk was on web.js **/
/** chunk id: 473503, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OA: () => O,
  kB: () => v
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js"),
  Chunk207777 = require("./207777.js"),
  Chunk969043 = require("./969043.js");
require("./246943.js");
var Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 10,
  h = 5;
class m {
  get(e) {
    return this._set.hasOwnProperty(e) || (this._set[e] = this._defaultValueFunc()), this._set[e]
  }
  delete(e) {
    delete this._set[e]
  }
  hasNext() {
    return !i().isEmpty(this._set)
  }
  next() {
    return c.default.keys(this._set)[0]
  }
  constructor(e) {
    p(this, "_set", true), p(this, "_defaultValueFunc", true), this._set = {}, this._defaultValueFunc = e
  }
}
class g {
  request(e, t) {
    this.requested.get(e).add(t)
  }
  hasRequested(e, t) {
    return this.requested.get(e).has(t)
  }
  finishRequesting(e, t) {
    let n = this.requested.get(e);
    t.forEach(e => n.delete(e)), E.compact(e)
  }
  getRequested(e) {
    return this.requested.get(e)
  }
  getNextBatch(e, t) {
    return Array.from(this.requested.get(e)).slice(0, t)
  }
  hasNext() {
    return this.requested.hasNext()
  }
  next() {
    return this.requested.next()
  }
  compact(e) {
    0 === this.requested.get(e).size && this.requested.delete(e)
  }
  constructor() {
    p(this, "requested", true), this.requested = new m(() => new Set)
  }
}
let E = new g,
  b = null;

function y(e, t) {
  return !e && null == t
}

function O(e) {
  let {
    loaded: t,
    firstMessage: n
  } = (0, a.cf)([d.A], () => d.A.getMessage(e.id)), r = (0, a.bG)([l.A], () => l.A.getChannel(e.parent_id));
  return null != r && y(t, n) && S(r, e.id), {
    loaded: t,
    firstMessage: n
  }
}

function A(e, t) {
  let n = false;
  t.forEach(t => {
    let {
      loaded: r,
      firstMessage: i
    } = d.A.getMessage(t);
    y(r, i) && (E.request(e.id, t), n = true)
  }), n && null == b && (b = setTimeout(I, 0))
}

function v(e) {
  A(e, (0, u.S)(e.id).slice(0, _))
}

function S(e, t) {
  if (E.hasRequested(e.id, t)) return;
  let n = (0, u.S)(e.id),
    r = n.findIndex(e => e === t),
    i = n.slice(r, r + h).filter(t => !E.hasRequested(e.id, t));
  A(e, i)
}
async function I() {
  try {
    for (; E.hasNext();) await T(E.next())
  } finally {
    b = null
  }
}
async function T(e) {
  let t = E.getNextBatch(e, _);
  try {
    var n;
    if (0 === t.length) return;
    let r = null == (n = l.A.getChannel(e)) ? true : n.guild_id;
    if (null == r) return;
    let {
      body: {
        threads: i
      }
    } = await s.Bo.post({
      url: f.Rsh.FORUM_POSTS(e),
      body: {
        thread_ids: t
      },
      rejectWithError: true
    });
    o.h.dispatch({
      type: "LOAD_FORUM_POSTS",
      guildId: r,
      threads: i
    })
  } catch (e) {} finally {
    E.finishRequesting(e, t)
  }
}