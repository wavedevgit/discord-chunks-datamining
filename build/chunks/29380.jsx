/** Chunk was on web.js **/
/** chunk id: 29380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk388032 = require("./388032.js"),
  Chunk854408 = require("./854408.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function N(e) {
  let {
    context: t,
    application: n,
    sectionName: O,
    primaryEntryPointCommand: I,
    buttonSize: A = o.Ph.MEDIUM
  } = e, N = i.useId(), C = i.useCallback(() => {
    d.yT(_.ti.ACTIVITY)
  }, []), R = i.useCallback(() => {
    f.Z.shouldShowModal() && C()
  }, [C]), {
    submitting: P,
    wasSubmitting: w
  } = (0, m.Z)({
    applicationId: n.id,
    context: t,
    launchingComponentId: N,
    onSubmissionComplete: C
  }), [D, L] = i.useState(false), x = (0, s.Qv)({
    applicationId: n.id,
    context: t
  }), M = i.useMemo(() => (0, h.XZ)(I.displayName), [I.displayName]), {
    onActivityItemSelected: k,
    buttonColor: j,
    buttonText: U
  } = (0, g.P7)({
    context: t,
    application: n,
    location: l.Vh.APP_LAUNCHER_APPLICATION_VIEW,
    sectionName: O,
    commandName: M,
    autoDismissOnClick: x === s.JS.LEAVE || (0, c.g)(n),
    launchingComponentId: N,
    submitting: null != w ? w : P,
    onConfirmActivityLaunchChecksAlertOpen: R
  }), {
    disabled: G,
    reason: B
  } = (0, p.Z)({
    context: t,
    application: n,
    activityAction: x
  });
  return <a.ua7 shouldShow={null != B} tooltipContentClassName={y.tooltipContent} text={B}>{e => {
      var {
        onClick: t
      } = e, i = S(e, ["onClick"]);
      return (0, r.jsx)(o.zx, T(v({}, i), {
        type: "submit",
        size: A,
        color: j,
        disabled: G,
        submitting: D,
        onClick: () => {
          L(true), k(), null == t || t(), u.default.track(E.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
            application_id: n.id,
            button_action: _._y.USE_APP_COMMAND
          })
        },
        "aria-label": b.intl.formatToPlainString(b.t["XjP/R0"], {
          buttonText: U,
          applicationName: n.name
        }),
        children: U
      }))
    }}</a.ua7>
}