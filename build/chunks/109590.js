/** Chunk was on web.js **/
"use strict";
n.d(t, {
  EB: () => I,
  cl: () => y
}), n(47120);
var r = n(392711),
  i = n.n(r),
  o = n(442837),
  a = n(544891),
  s = n(570140),
  l = n(592125),
  c = n(709054),
  u = n(238349),
  d = n(660189);
n(682474);
var f = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = 10,
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
    _(this, "_set", void 0), _(this, "_defaultValueFunc", void 0), this._set = {}, this._defaultValueFunc = e
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
    _(this, "requested", void 0), this.requested = new m(() => new Set)
  }
}
let E = new g,
  v = null;

function b(e, t) {
  return !e && null == t
}

function y(e) {
  let {
    loaded: t,
    firstMessage: n
  } = (0, o.cj)([d.Z], () => d.Z.getMessage(e.id)), r = (0, o.e7)([l.Z], () => l.Z.getChannel(e.parent_id));
  return null != r && b(t, n) && S(r, e.id), {
    loaded: t,
    firstMessage: n
  }
}

function O(e, t) {
  let n = !1;
  t.forEach(t => {
    let {
      loaded: r,
      firstMessage: i
    } = d.Z.getMessage(t);
    b(r, i) && (E.request(e.id, t), n = !0)
  }), n && null == v && (v = setTimeout(T, 0))
}

function I(e) {
  O(e, (0, u.U)(e.id).slice(0, p))
}

function S(e, t) {
  if (E.hasRequested(e.id, t)) return;
  let n = (0, u.U)(e.id),
    r = n.findIndex(e => e === t),
    i = n.slice(r, r + h).filter(t => !E.hasRequested(e.id, t));
  O(e, i)
}
async function T() {
  try {
    for (; E.hasNext();) await N(E.next())
  } finally {
    v = null
  }
}
async function N(e) {
  let t = E.getNextBatch(e, p);
  try {
    var n;
    if (0 === t.length) return;
    let r = null === (n = l.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
    if (null == r) return;
    let {
      body: {
        threads: i
      }
    } = await a.tn.post({
      url: f.ANM.FORUM_POSTS(e),
      body: {
        thread_ids: t
      },
      rejectWithError: !0
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