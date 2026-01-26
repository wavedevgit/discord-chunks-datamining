/** Chunk was on web.js **/
/** chunk id: 433880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk379066 = require("./379066.js");
let p = [];

function _(e, t) {
  let n = (0, o.A)(e, t);
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
    className: f.W,
    children: [(0, r.jsx)(l.A, {
      game: t,
      size: l.M.XXSMALL
    }), (0, r.jsx)("span", {
      children: t.name
    })]
  })
}

function m(e) {
  let {
    menuItemId: t,
    user: n,
    label: o,
    gameRelationships: f,
    onClick: m,
    color: g
  } = e, {
    id: E,
    bot: y
  } = n, b = (0, a.bG)([u.default], () => {
    var e;
    return (null == (e = u.default.getCurrentUser()) ? true : e.id) === E
  }) || y, O = b ? p : f, [v, A] = i.useState(false), I = i.useCallback(() => A(true), []), S = i.useMemo(() => O.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [O]), T = (0, a.bG)([c.A], () => c.A.getRelationshipType(E), [E]), C = _(S, v || 1 === O.length);
  if (b || 0 === O.length || T === d.eA$.FRIEND) return null;
  if (1 === O.length) {
    let {
      applicationId: e
    } = O[0], n = C.get(e);
    return null == n ? null : (0, r.jsx)(s.Drp, {
      color: g,
      id: t,
      label: o,
      subtext: (0, r.jsx)(h, {
        application: n
      }),
      onFocus: I,
      action: () => m(n)
    })
  }
  let N = [];
  return (O.forEach(e => {
    let {
      applicationId: t
    } = e, n = C.get(t);
    if (null != n) {
      let e = n.getIconURL(16);
      N.push((0, r.jsx)(s.Drp, {
        id: t,
        label: n.name,
        icon: (0, r.jsx)(l.A, {
          game: n,
          size: l.M.XXSMALL
        }),
        leadingAccessory: null != e ? {
          type: "image",
          src: e
        } : true,
        action: () => m(n)
      }, t))
    }
  }), 0 === N.length) ? null : (0, r.jsx)(s.Drp, {
    color: g,
    id: t,
    label: o,
    onFocus: I,
    children: N
  })
}