/** Chunk was on web.js **/
/** chunk id: 675893, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk623445 = require("./623445.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk278857 = require("./278857.jsx"),
  Chunk890307 = require("./890307.jsx"),
  Chunk350207 = require("./350207.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

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
  } = e, g = i.useMemo(() => n.filter(e => e instanceof l.q), [n]), {
    analyticsLocations: E
  } = (0, a.ZP)(), {
    trackUserProfileAction: b
  } = (0, s.KZ)(), y = (0, o.Z)(t.id, g), O = i.useCallback(() => {
    null == h || h({
      tabSection: p.oh.WIDGETS
    })
  }, [h]), v = i.useCallback(e => {
    let t = false,
      i = [];
    for (let a of n) a instanceof l.q ? null != y[a.applicationId] && i.push((0, r.jsx)(d.Z, m({
      previewData: y[a.applicationId],
      onClick: O
    }, e), "application-widget-".concat(a.applicationId))) : a instanceof c.zy && !t && (i.push((0, r.jsx)(f.Z, m({
      widgets: n,
      onClick: O
    }, e), "collection-breadcrumb")), t = true);
    return i
  }, [y, O, n]);
  return 0 === n.length ? null : (0, r.jsx)(u.Z, {
    renderCards: v,
    heading: _.intl.string(_.t.Y55Tua),
    onExpand: () => {
      b({
        action: "PRESS_SHOW_MORE_WIDGETS",
        analyticsLocations: E
      }), O()
    }
  })
}