/** Chunk was on web.js **/
/** chunk id: 956549, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk646865 = require("./646865.js"),
  Chunk909206 = require("./909206.js"),
  Chunk795816 = require("./795816.js"),
  Chunk817636 = require("./817636.js"),
  Chunk574152 = require("./574152.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function _(e) {
  let t;
  if (null == e.targetApplicationId) returnfalse;
  let n = false;
  try {
    t = await (0, l.A)(e.targetApplicationId, e.channelId), n = (0, a.f)()
  } catch (e) {
    returnfalse
  }
  return (0, a.w)(n, () => h(p(d({}, e), {
    targetApplication: t
  })))
}
async function h(e) {
  let {
    targetApplication: t,
    locationObject: n,
    channelId: a,
    analyticsLocations: l,
    componentId: u,
    commandOrigin: d,
    sectionName: f,
    source: p,
    onExecutedCallback: _,
    referrerId: h,
    customId: m,
    inviterUserId: g,
    onConfirmActivityLaunchChecksAlertOpen: E
  } = e, b = (0, c.A)(), y = i.default.getCurrentUser();
  return null != a && null != r.A.getChannel(a) && null != y && null != t && (s.MJ(t.id), await (0, o.su)({
    channelId: a,
    applicationId: t.id,
    isStart: true,
    embeddedActivitiesManager: b,
    componentId: u,
    commandOrigin: d,
    sectionName: f,
    locationObject: n,
    analyticsLocations: l,
    source: p,
    onExecutedCallback: _,
    referrerId: h,
    customId: m,
    inviterUserId: g,
    onConfirmActivityLaunchChecksAlertOpen: E
  }))
}