/** Chunk was on web.js **/
/** chunk id: 749302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk143205 = require("./143205.js");
let _ = [];

function p(e, t) {
  let n = (0, s.Z)(e, t);
  return i.useMemo(() => {
    let e = new Map;
    return n.forEach(t => {
      null != t && e.set(t.id, t)
    }), e
  }, [n])
}

function h(e) {
  let {
    application: t
  } = e;
  return (0, r.jsxs)("div", {
    className: f.subtext,
    children: [(0, r.jsx)(l.Z, {
      game: t,
      size: l.A.XXSMALL
    }), (0, r.jsx)("span", {
      children: t.name
    })]
  })
}

function m(e) {
  let {
    menuItemId: t,
    user: n,
    label: s,
    gameRelationships: f,
    onClick: m,
    color: g
  } = e, {
    id: E,
    bot: b
  } = n, y = (0, a.e7)([u.default], () => {
    var e;
    return (null == (e = u.default.getCurrentUser()) ? true : e.id) === E
  }) || b, O = y ? _ : f, [v, I] = i.useState(false), T = i.useCallback(() => I(true), []), S = i.useMemo(() => O.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [O]), A = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(E), [E]), C = p(S, v || 1 === O.length);
  if (y || 0 === O.length || A === d.OGo.FRIEND) return null;
  if (1 === O.length) {
    let {
      applicationId: e
    } = O[0], n = C.get(e);
    return null == n ? null : (0, r.jsx)(o.sNh, {
      color: g,
      id: t,
      label: s,
      subtext: (0, r.jsx)(h, {
        application: n
      }),
      onFocus: T,
      action: () => m(n)
    })
  }
  let N = [];
  return (O.forEach(e => {
    let {
      applicationId: t
    } = e, n = C.get(t);
    null != n && N.push((0, r.jsx)(o.sNh, {
      id: t,
      label: n.name,
      icon: (0, r.jsx)(l.Z, {
        game: n,
        size: l.A.XXSMALL
      }),
      action: () => m(n)
    }, t))
  }), 0 === N.length) ? null : (0, r.jsx)(o.sNh, {
    color: g,
    id: t,
    label: s,
    onFocus: T,
    children: N
  })
}