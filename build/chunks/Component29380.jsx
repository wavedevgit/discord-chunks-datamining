/** Chunk was on 35755 **/
/** chunk id: 29380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function g(e) {
  let {
    context: t,
    application: n,
    sectionName: g,
    primaryEntryPointCommand: j
  } = e, N = i.useId(), C = i.useCallback(() => {
    u.yT(p.ti.ACTIVITY)
  }, []), E = i.useCallback(() => {
    d.Z.shouldShowModal() && C()
  }, [C]), {
    submitting: P,
    wasSubmitting: O
  } = (0, h.Z)({
    applicationId: n.id,
    context: t,
    launchingComponentId: N,
    onSubmissionComplete: C
  }), [A, _] = i.useState(false), I = (0, a.Qv)({
    applicationId: n.id,
    context: t
  }), S = i.useMemo(() => (0, f.XZ)(j.displayName), [j.displayName]), {
    onActivityItemSelected: T,
    buttonVariant: L,
    buttonText: R
  } = (0, v.P7)({
    context: t,
    application: n,
    location: o.Vh.APP_LAUNCHER_APPLICATION_VIEW,
    sectionName: g,
    commandName: S,
    autoDismissOnClick: I === a.JS.LEAVE || (0, s.g)(n),
    launchingComponentId: N,
    submitting: null != O ? O : P,
    onConfirmActivityLaunchChecksAlertOpen: E
  }), {
    disabled: Z,
    reason: w
  } = (0, m.Z)({
    context: t,
    application: n,
    activityAction: I
  });
  return (0, l.jsx)(r.ua7, {
    shouldShow: null != w,
    tooltipContentClassName: b.tooltipContent,
    text: w,
    children: e => {
      var t, i, {
          onClick: a
        } = e,
        o = function(e, t) {
          if (null == e) return {};
          var n, l, i = function(e, t) {
            if (null == e) return {};
            var n, l, i = {},
              r = Object.keys(e);
            for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, ["onClick"]);
      return (0, l.jsx)(r.zxk, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, o), i = i = {
        type: "submit",
        size: "md",
        variant: L,
        disabled: Z,
        loading: A,
        onClick: () => {
          _(true), T(), null == a || a(), c.default.track(y.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
            application_id: n.id,
            button_action: p._y.USE_APP_COMMAND
          })
        },
        "aria-label": x.intl.formatToPlainString(x.t["XjP/R0"], {
          buttonText: R,
          applicationName: n.name
        }),
        text: R
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}