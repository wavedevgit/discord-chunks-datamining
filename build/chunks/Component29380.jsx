/** Chunk was on web.js **/
/** chunk id: 29380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk542094 = require("./542094.js"),
  Chunk895924 = require("./895924.js"),
  Chunk813370 = require("./813370.js"),
  Chunk626135 = require("./626135.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk160973 = require("./160973.js"),
  Chunk783097 = require("./783097.js"),
  Chunk890280 = require("./890280.js"),
  Chunk176412 = require("./176412.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk682964 = require("./682964.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function A(e) {
  let {
    context: t,
    application: n,
    sectionName: y,
    primaryEntryPointCommand: v
  } = e, S = i.useId(), A = i.useCallback(() => {
    u.yT(f.ti.ACTIVITY)
  }, []), N = i.useCallback(() => {
    d.Z.shouldShowModal() && A()
  }, [A]), {
    submitting: C,
    wasSubmitting: R
  } = (0, h.Z)({
    applicationId: n.id,
    context: t,
    launchingComponentId: S,
    onSubmissionComplete: A
  }), [P, w] = i.useState(false), D = (0, a.Qv)({
    applicationId: n.id,
    context: t
  }), L = i.useMemo(() => (0, p.XZ)(v.displayName), [v.displayName]), {
    onActivityItemSelected: x,
    buttonVariant: M,
    buttonText: j
  } = (0, m.P7)({
    context: t,
    application: n,
    location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW,
    sectionName: y,
    commandName: L,
    autoDismissOnClick: D === a.JS.LEAVE || (0, l.g)(n),
    launchingComponentId: S,
    submitting: null != R ? R : C,
    onConfirmActivityLaunchChecksAlertOpen: N
  }), {
    disabled: k,
    reason: U
  } = (0, _.Z)({
    context: t,
    application: n,
    activityAction: D
  });
  return (0, r.jsx)(o.ua7, {
    shouldShow: null != U,
    tooltipContentClassName: b.tooltipContent,
    text: U,
    children: e => {
      var {
        onClick: t
      } = e, i = T(e, ["onClick"]);
      return (0, r.jsx)(o.zxk, I(O({}, i), {
        type: "submit",
        size: "md",
        variant: M,
        disabled: k,
        loading: P,
        onClick: () => {
          w(true), x(), null == t || t(), c.default.track(g.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
            application_id: n.id,
            button_action: f._y.USE_APP_COMMAND
          })
        },
        "aria-label": E.intl.formatToPlainString(E.t["XjP/R0"], {
          buttonText: j,
          applicationName: n.name
        }),
        text: j
      }))
    }
  })
}