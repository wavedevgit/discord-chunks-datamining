/** Chunk was on web.js **/
/** chunk id: 850046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./446912.js");
var Chunk64700 = require("./64700.js"),
  Chunk205338 = require("./205338.js"),
  Chunk87075 = require("./87075.js"),
  Chunk429913 = require("./429913.js"),
  Chunk201718 = require("./201718.js"),
  Chunk207803 = require("./207803.js"),
  Chunk403362 = require("./403362.js"),
  Chunk789069 = require("./789069.js"),
  Chunk385771 = require("./385771.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t, n) {
  var r, i, a;
  let s = null == (a = e.profile) || null == (i = a.data) || null == (r = i.dynamic) ? true : r.find(e => e.name === t);
  return null == s || s.type !== n ? null : s.value
}
let h = {
  [Chunk205338.A.MARVEL_RIVALS]: e => {
    var t, n, r, i, a, s, o, l, c, d, f, p;
    let _ = null == (r = e.profile) || null == (n = r.data) || null == (t = n.primary) ? true : t.season,
      h = null == (s = e.profile) || null == (a = s.data) || null == (i = a.primary) ? true : i.rank_name,
      m = (0, u.a)(null == (c = e.profile) || null == (l = c.data) || null == (o = l.primary) ? true : o.rank_image),
      g = (0, u.a)(null == (p = e.profile) || null == (f = p.data) || null == (d = f.primary) ? true : d.featured_played_character_image);
    return null == _ || null == h || null == g ? null : {
      previewText: "".concat(_, ": ").concat(h),
      previewIcon: m,
      previewImage: g
    }
  },
  [Chunk205338.A.WUTHERING_WAVES]: (e, t) => {
    var n, r, i, s;
    let o = null == (n = e.profile) ? true : n.username,
      l = _(e, "union_level", a.f.NUMBER),
      c = (0, u.a)(null == (s = e.profile) || null == (i = s.data) || null == (r = i.primary) ? true : r.featured_played_character_image);
    return null == o || null == l || null == c ? null : {
      previewText: "".concat(o, ": Level ").concat(t.format(l)),
      previewIcon: null,
      previewImage: c
    }
  }
};

function m(e, t, n, r) {
  let i = t.getIconURL(16);
  if (null == i) return null;
  let a = h[e.widgetTemplateId](n, r);
  return null == a ? null : p({
    application: {
      id: t.id,
      name: t.name,
      icon: i
    }
  }, a)
}

function g(e, t) {
  let n = (0, s.A)(t.map(e => e.applicationId)),
    {
      data: i
    } = (0, l.FY)(),
    {
      data: a
    } = (0, o.P)(e),
    u = (0, d.A)();
  return r.useMemo(() => Object.fromEntries(t.map(e => {
    let t = null == i ? true : i.find(t => t.applicationId === e.applicationId),
      r = n.find(t => (null == t ? true : t.id) === e.applicationId),
      s = null == a ? true : a.find(t => t.application_id === e.applicationId);
    if (null == t || null == r || null == s) return null;
    let o = m(t, r, s, u);
    return null == o ? null : [e.applicationId, o]
  }).filter(c.Vq)), [n, i, a, u, t])
}