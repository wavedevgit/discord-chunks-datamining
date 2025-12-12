/** Chunk was on web.js **/
/** chunk id: 106771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk973616 = require("./973616.js"),
  Chunk783097 = require("./783097.js"),
  Chunk176412 = require("./176412.js"),
  Chunk570949 = require("./570949.jsx"),
  Chunk753972 = require("./753972.jsx"),
  Chunk532309 = require("./532309.js"),
  Chunk934347 = require("./934347.js"),
  Chunk413097 = require("./413097.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e) {
  var t;
  let {
    command: n,
    application: m,
    onClick: g,
    query: E,
    searchResultsPosition: b
  } = e, y = i.useCallback(e => {
    if ((0, l.BQ)(m)) {
      let t = m instanceof s.ZP ? m : s.ZP.createFromServer(m);
      (0, a.vq)(e, e => (0, r.jsx)(u.Z, h({
        application: t
      }, e)))
    }
  }, [m]), {
    iconURL: O,
    name: v,
    description: S
  } = i.useMemo(() => (0, l.sl)(m, {
    fakeAppIconURL: _
  }), [m]), I = i.useMemo(() => {
    var e;
    let t = null != (e = null == n ? true : n.displayDescription) ? e : S;
    return null == t ? null : (0, c.ae)(t, true)
  }, [S, null == n ? true : n.displayDescription]), {
    trackSearchResultsItemImpressionRef: T
  } = (0, f.Z)({
    applicationId: m.id,
    commandId: null == n ? true : n.id,
    query: E,
    searchResultsPosition: b
  });
  return (0, r.jsx)(o.P3F, {
    className: p.clickable,
    innerRef: e => {
      T.current = e
    },
    onClick: g,
    onContextMenu: y,
    children: (0, r.jsxs)(o.Rny, {
      className: p.focusBlock,
      children: [(0, r.jsx)(d.Z, {
        src: O,
        className: p.icon,
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, r.jsxs)("div", {
        className: p.cmdDetails,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          lineClamp: 1,
          children: null != (t = null == n ? true : n.displayName) ? t : v
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: I
        })]
      }), null != n ? (0, r.jsx)(o.Text, {
        className: p.cmdAppName,
        variant: "text-sm/normal",
        color: "text-subtle",
        children: v
      }) : null, (0, r.jsx)("div", {
        className: p.underline
      })]
    })
  })
}