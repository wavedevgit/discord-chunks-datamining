/** Chunk was on 35755 **/
n.d(t, {
  Z: () => b
}), n(47120);
var i = n(200651),
  l = n(192379),
  r = n(481060),
  o = n(542094),
  a = n(895924),
  s = n(626135),
  c = n(499254),
  u = n(827498),
  d = n(160973),
  p = n(783097),
  m = n(890280),
  f = n(176412),
  h = n(981631),
  v = n(388032),
  y = n(486320);

function b(e) {
  let {
    context: t,
    application: n,
    sectionName: b,
    primaryEntryPointCommand: N,
    buttonSize: g = r.PhG.MEDIUM
  } = e, x = l.useId(), j = l.useCallback(() => {
    c.yT(u.ti.ACTIVITY)
  }, []), {
    submitting: E,
    wasSubmitting: P
  } = (0, m.Z)({
    applicationId: n.id,
    context: t,
    launchingComponentId: x,
    onSubmissionComplete: j
  }), [C, O] = l.useState(!1), A = (0, o.Qv)({
    applicationId: n.id,
    context: t
  }), I = l.useMemo(() => (0, p.XZ)(N.displayName), [N.displayName]), {
    onActivityItemSelected: _,
    buttonColor: S,
    buttonText: T
  } = (0, f.P7)({
    context: t,
    application: n,
    location: a.Vh.APP_LAUNCHER_APPLICATION_VIEW,
    sectionName: b,
    commandName: I,
    autoDismissOnClick: A === o.JS.LEAVE,
    launchingComponentId: x,
    submitting: null != P ? P : E
  }), {
    disabled: L,
    reason: Z
  } = (0, d.Z)({
    context: t,
    application: n,
    activityAction: A
  });
  return (0, i.jsx)(r.ua7, {
    shouldShow: null != Z,
    tooltipContentClassName: y.tooltipContent,
    text: Z,
    children: e => {
      var t, l, {
          onClick: o
        } = e,
        a = function(e, t) {
          if (null == e) return {};
          var n, i, l = function(e, t) {
            if (null == e) return {};
            var n, i, l = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
          }
          return l
        }(e, ["onClick"]);
      return (0, i.jsx)(r.zxk, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({}, a), l = l = {
        type: "submit",
        size: g,
        color: S,
        disabled: L,
        submitting: C,
        onClick: () => {
          O(!0), _(), null == o || o(), s.default.track(h.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
            application_id: n.id,
            button_action: u._y.USE_APP_COMMAND
          })
        },
        "aria-label": v.NW.formatToPlainString(v.t["XjP/R0"], {
          buttonText: T,
          applicationName: n.name
        }),
        children: T
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t))
    }
  })
}