/** Chunk was on web.js **/
/** chunk id: 850046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E,
  M: () => g
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
  var r, i;
  let a = null == (i = e.data) || null == (r = i.dynamic) ? true : r.find(e => e.name === t);
  return null == a || a.type !== n ? null : a.value
}
let h = {
  [Chunk205338.A.MARVEL_RIVALS]: e => {
    var t, n, r, i, a, o, s, l;
    let c = null == (n = e.data) || null == (t = n.primary) ? true : t.season,
      d = null == (i = e.data) || null == (r = i.primary) ? true : r.rank_name,
      f = (0, u.a)(null == (o = e.data) || null == (a = o.primary) ? true : a.rank_image),
      p = (0, u.a)(null == (l = e.data) || null == (s = l.primary) ? true : s.featured_played_character_image);
    return null == c || null == d || null == p ? null : {
      previewText: "".concat(c, ": ").concat(d),
      previewTextShort: d,
      previewIcon: f,
      previewImage: p
    }
  },
  [Chunk205338.A.WUTHERING_WAVES]: (e, t) => {
    var n, r;
    let i = e.username,
      o = _(e, "union_level", a.f.NUMBER),
      s = (0, u.a)(null == (r = e.data) || null == (n = r.primary) ? true : n.featured_played_character_image);
    return null == i || null == o || null == s ? null : {
      previewText: "".concat(i, ": Level ").concat(t.format(o)),
      previewTextShort: "Level ".concat(t.format(o)),
      previewIcon: null,
      previewImage: s
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

function g(e, t, n, r) {
  return m(e, t, n, r)
}

function E(e, t) {
  let n = (0, o.A)(t),
    {
      data: i
    } = (0, l.FY)(),
    {
      data: a
    } = (0, s.P)(e),
    u = (0, d.A)();
  return r.useMemo(() => Object.fromEntries(t.map(e => {
    var t;
    let r = null == i ? true : i.find(t => t.applicationId === e),
      o = n.find(t => (null == t ? true : t.id) === e),
      s = null == a || null == (t = a.find(t => t.application_id === e)) ? true : t.profile;
    if (null == r || null == o || null == s) return null;
    let l = m(r, o, s, u);
    return null == l ? null : [e, l]
  }).filter(c.Vq)), [n, i, a, u, t])
}