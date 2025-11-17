/** Chunk was on web.js **/
/** chunk id: 29380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk388032 = require("./388032.jsx");

function y(e) {
  let {
    context: t,
    application: n,
    sectionName: y,
    primaryEntryPointCommand: O
  } = e, v = i.useId(), I = i.useCallback(() => {
    d.y(_.ti.ACTIVITY)
  }, []), T = i.useCallback(() => {
    f.Z.shouldShowModal() && I()
  }, [I]), {
    submitting: S,
    wasSubmitting: A
  } = (0, m.Z)({
    applicationId: n.id,
    context: t,
    launchingComponentId: v,
    onSubmissionComplete: I
  }), [C, N] = i.useState(false), R = (0, s.Qv)({
    applicationId: n.id,
    context: t
  }), P = i.useMemo(() => (0, h.XZ)(O.displayName), [O.displayName]), {
    onActivityItemSelected: D,
    buttonVariant: w,
    buttonText: x
  } = (0, g.P7)({
    context: t,
    application: n,
    location: l.Vh.APP_LAUNCHER_APPLICATION_VIEW,
    sectionName: y,
    commandName: P,
    autoDismissOnClick: R === s.JS.LEAVE || (0, c.g)(n),
    launchingComponentId: v,
    submitting: null != A ? A : S,
    onConfirmActivityLaunchChecksAlertOpen: T
  }), {
    disabled: L,
    reason: M
  } = (0, p.Z)({
    context: t,
    application: n,
    activityAction: R
  });
  return (0, r.jsx)(a.u, {
    shouldShow: null != M,
    __unsupportedReactNodeAsText: M,
    children: (0, r.jsx)(o.Button, {
      type: "submit",
      size: "md",
      variant: w,
      disabled: L,
      loading: C,
      onClick: () => {
        N(true), D(), u.default.track(E.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
          application_id: n.id,
          button_action: _._y.USE_APP_COMMAND
        })
      },
      "aria-label": b.intl.formatToPlainString(b.t["XjP/R+"], {
        buttonText: x,
        applicationName: n.name
      }),
      text: x
    })
  })
}