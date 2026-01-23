/** Chunk was on web.js **/
/** chunk id: 379654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk850046 = require("./850046.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk633075 = require("./633075.js"),
  Chunk289173 = require("./289173.js"),
  Chunk80330 = require("./80330.jsx"),
  Chunk274900 = require("./274900.jsx"),
  Chunk783256 = require("./783256.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

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
  let {
    user: t,
    widgets: n = [],
    onOpenUserProfileModal: h
  } = e, g = i.useMemo(() => n.filter(e => e instanceof l.R), [n]), {
    analyticsLocations: E
  } = (0, a.Ay)(), {
    trackUserProfileAction: y
  } = (0, o.NJ)(), b = (0, s.A)(t.id, g), O = i.useCallback(() => {
    null == h || h({
      tabSection: p.RP.WIDGETS
    })
  }, [h]), v = i.useCallback(e => {
    let t = false,
      i = [];
    for (let a of n) a instanceof l.R ? null != b[a.applicationId] && i.push((0, r.jsx)(d.A, m({
      previewData: b[a.applicationId],
      onClick: O
    }, e), "application-widget-".concat(a.applicationId))) : a instanceof c.Yy && !t && (i.push((0, r.jsx)(f.A, m({
      widgets: n,
      onClick: O
    }, e), "collection-breadcrumb")), t = true);
    return i
  }, [b, O, n]);
  return 0 === n.length ? null : (0, r.jsx)(u.A, {
    renderCards: v,
    heading: _.intl.string(_.t.Y55Tua),
    onExpand: () => {
      y({
        action: "PRESS_SHOW_MORE_WIDGETS",
        analyticsLocations: E
      }), O()
    }
  })
}