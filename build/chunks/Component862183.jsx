/** Chunk was on web.js **/
/** chunk id: 862183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk611010 = require("./611010.js"),
  Chunk735991 = require("./735991.js"),
  Chunk297486 = require("./297486.js"),
  Chunk346446 = require("./346446.jsx"),
  Chunk717048 = require("./717048.jsx"),
  Chunk448137 = require("./448137.js"),
  Chunk262547 = require("./262547.js"),
  Chunk291071 = require("./291071.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e) {
  var t;
  let {
    command: n,
    application: h,
    onClick: g,
    query: E,
    searchResultsPosition: y
  } = e, b = i.useCallback(e => {
    if ((0, l.$B)(h)) {
      let t = h instanceof s.Ay ? h : s.Ay.createFromServer(h);
      (0, o.jA)(e, e => (0, r.jsx)(u.A, m({
        application: t
      }, e)))
    }
  }, [h]), {
    iconURL: O,
    name: v,
    description: A
  } = i.useMemo(() => (0, l.X2)(h, {
    fakeAppIconURL: _
  }), [h]), I = i.useMemo(() => {
    var e;
    let t = null != (e = null == n ? true : n.displayDescription) ? e : A;
    return null == t ? null : (0, c.SD)(t, true)
  }, [A, null == n ? true : n.displayDescription]), {
    trackSearchResultsItemImpressionRef: S
  } = (0, f.A)({
    applicationId: h.id,
    commandId: null == n ? true : n.id,
    query: E,
    searchResultsPosition: y
  });
  return (0, r.jsx)(a.DUT, {
    className: p.vk,
    innerRef: e => {
      S.current = e
    },
    onClick: g,
    onContextMenu: b,
    children: (0, r.jsxs)(a.M1G, {
      className: p.ao,
      children: [(0, r.jsx)(d.A, {
        src: O,
        className: p.Kk,
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, r.jsxs)("div", {
        className: p.Jn,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          lineClamp: 1,
          children: null != (t = null == n ? true : n.displayName) ? t : v
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: I
        })]
      }), null != n ? (0, r.jsx)(a.Text, {
        className: p.Pn,
        variant: "text-sm/normal",
        color: "text-subtle",
        children: v
      }) : null, (0, r.jsx)("div", {
        className: p.V1
      })]
    })
  })
}