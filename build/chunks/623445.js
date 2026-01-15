/** Chunk was on web.js **/
/** chunk id: 623445, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./467055.js");
var Chunk473749 = require("./473749.js"),
  Chunk818531 = require("./818531.js"),
  Chunk662290 = require("./662290.js"),
  Chunk835473 = require("./835473.js"),
  Chunk929677 = require("./929677.js"),
  Chunk350327 = require("./350327.js"),
  Chunk823379 = require("./823379.js"),
  Chunk297146 = require("./297146.js"),
  Chunk330003 = require("./330003.js");

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
  let o = null == (a = e.profile) || null == (i = a.data) || null == (r = i.dynamic) ? true : r.find(e => e.name === t);
  return null == o || o.type !== n ? null : o.value
}
let h = {
  [Chunk818531.J.MARVEL_RIVALS]: e => {
    var t, n, r, i, a, o, s, l, c, d, f, p;
    let _ = null == (r = e.profile) || null == (n = r.data) || null == (t = n.primary) ? true : t.season,
      h = null == (o = e.profile) || null == (a = o.data) || null == (i = a.primary) ? true : i.rank_name,
      m = (0, u.i)(null == (c = e.profile) || null == (l = c.data) || null == (s = l.primary) ? true : s.rank_image),
      g = (0, u.i)(null == (p = e.profile) || null == (f = p.data) || null == (d = f.primary) ? true : d.featured_played_character_image);
    return null == _ || null == h || null == g ? null : {
      previewText: "".concat(_, ": ").concat(h),
      previewIcon: m,
      previewImage: g
    }
  },
  [Chunk818531.J.WUTHERING_WAVES]: (e, t) => {
    var n, r, i, o;
    let s = null == (n = e.profile) ? true : n.username,
      l = _(e, "union_level", a.h.NUMBER),
      c = (0, u.i)(null == (o = e.profile) || null == (i = o.data) || null == (r = i.primary) ? true : r.featured_played_character_image);
    return null == s || null == l || null == c ? null : {
      previewText: "".concat(s, ": Level ").concat(t.format(l)),
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
  let n = (0, o.Z)(t.map(e => e.applicationId)),
    {
      data: i
    } = (0, l.SK)(),
    {
      data: a
    } = (0, s.O)(e),
    u = (0, d.Z)();
  return r.useMemo(() => Object.fromEntries(t.map(e => {
    let t = null == i ? true : i.find(t => t.applicationId === e.applicationId),
      r = n.find(t => (null == t ? true : t.id) === e.applicationId),
      o = null == a ? true : a.find(t => t.application_id === e.applicationId);
    if (null == t || null == r || null == o) return null;
    let s = m(t, r, o, u);
    return null == s ? null : [e.applicationId, s]
  }).filter(c.lm)), [n, i, a, u, t])
}