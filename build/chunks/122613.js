/** Chunk was on web.js **/
/** chunk id: 122613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk636449 = require("./636449.js"),
  Chunk337682 = require("./337682.js"),
  Chunk566620 = require("./566620.js"),
  Chunk224189 = require("./224189.js"),
  Chunk574952 = require("./574952.js");

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
    t = await (0, l.Z)(e.targetApplicationId, e.channelId), n = (0, o.R)()
  } catch (e) {
    returnfalse
  }
  return (0, o.C)(n, () => m(p(d({}, e), {
    targetApplication: t
  })))
}
async function m(e) {
  let {
    targetApplication: t,
    locationObject: n,
    channelId: o,
    analyticsLocations: l,
    componentId: u,
    commandOrigin: d,
    sectionName: f,
    source: p,
    onExecutedCallback: _,
    referrerId: m,
    customId: h,
    inviterUserId: g,
    onConfirmActivityLaunchChecksAlertOpen: E
  } = e, b = (0, c.Z)(), y = i.default.getCurrentUser();
  return null != o && null != r.Z.getChannel(o) && null != y && null != t && (a.tZ(t.id), await (0, s.G6)({
    channelId: o,
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
    referrerId: m,
    customId: h,
    inviterUserId: g,
    onConfirmActivityLaunchChecksAlertOpen: E
  }))
}