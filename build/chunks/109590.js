/** Chunk was on web.js **/
/** chunk id: 109590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EB: () => S,
  cl: () => O
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js"),
  Chunk238349 = require("./238349.js"),
  Chunk660189 = require("./660189.js");
require("./682474.js");
var Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 10,
  m = 5;
class h {
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
    return Chunk709054.default.keys(this._set)[0]
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
    p(this, "requested", true), this.requested = new h(() => new Set)
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
  } = (0, a.cj)([d.Z], () => d.Z.getMessage(e.id)), r = (0, a.e7)([l.Z], () => l.Z.getChannel(e.parent_id));
  return null != r && y(t, n) && I(r, e.id), {
    loaded: t,
    firstMessage: n
  }
}

function v(e, t) {
  let n = false;
  t.forEach(t => {
    let {
      loaded: r,
      firstMessage: i
    } = d.Z.getMessage(t);
    y(r, i) && (E.request(e.id, t), n = true)
  }), n && null == b && (b = setTimeout(T, 0))
}

function S(e) {
  v(e, (0, u.U)(e.id).slice(0, _))
}

function I(e, t) {
  if (E.hasRequested(e.id, t)) return;
  let n = (0, u.U)(e.id),
    r = n.findIndex(e => e === t),
    i = n.slice(r, r + m).filter(t => !E.hasRequested(e.id, t));
  v(e, i)
}
async function T() {
  try {
    for (; E.hasNext();) await A(E.next())
  } finally {
    b = null
  }
}
async function A(e) {
  let t = E.getNextBatch(e, _);
  try {
    var n;
    if (0 === t.length) return;
    let r = null == (n = l.Z.getChannel(e)) ? true : n.guild_id;
    if (null == r) return;
    let {
      body: {
        threads: i
      }
    } = await o.tn.post({
      url: f.ANM.FORUM_POSTS(e),
      body: {
        thread_ids: t
      },
      rejectWithError: true
    });
    s.Z.dispatch({
      type: "LOAD_FORUM_POSTS",
      guildId: r,
      threads: i
    })
  } catch (e) {} finally {
    E.finishRequesting(e, t)
  }
}