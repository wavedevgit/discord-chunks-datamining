/** Chunk was on web.js **/
/** chunk id: 567367, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk849269 = require("./849269.js"),
  Chunk392054 = require("./392054.js"),
  Chunk207371 = require("./207371.js"),
  Chunk954571 = require("./954571.js"),
  Chunk211401 = require("./211401.js"),
  Chunk989837 = require("./989837.js"),
  Chunk500049 = require("./500049.js"),
  Chunk228965 = require("./228965.js"),
  Chunk735991 = require("./735991.js"),
  Chunk698141 = require("./698141.js"),
  Chunk297486 = require("./297486.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    context: t,
    application: n,
    sectionName: b,
    primaryEntryPointCommand: O
  } = e, v = i.useId(), A = i.useCallback(() => {
    d.k(p.Se.ACTIVITY)
  }, []), I = i.useCallback(() => {
    f.A.shouldShowModal() && A()
  }, [A]), {
    submitting: S,
    wasSubmitting: T
  } = (0, m.A)({
    applicationId: n.id,
    context: t,
    launchingComponentId: v,
    onSubmissionComplete: A
  }), [C, N] = i.useState(false), R = (0, o.Hq)({
    applicationId: n.id,
    context: t
  }), w = i.useMemo(() => (0, h.kF)(O.displayName), [O.displayName]), {
    onActivityItemSelected: P,
    buttonVariant: D,
    buttonText: x
  } = (0, g.dn)({
    context: t,
    application: n,
    location: l.Oh.APP_LAUNCHER_APPLICATION_VIEW,
    sectionName: b,
    commandName: w,
    autoDismissOnClick: R === o.o6.LEAVE || (0, c.x)(n),
    launchingComponentId: v,
    submitting: null != T ? T : S,
    onConfirmActivityLaunchChecksAlertOpen: I
  }), {
    disabled: L,
    reason: j
  } = (0, _.A)({
    context: t,
    application: n,
    activityAction: R
  });
  return (0, r.jsx)(a.m, {
    shouldShow: null != j,
    __unsupportedReactNodeAsText: j,
    children: (0, r.jsx)(s.Button, {
      type: "submit",
      size: "md",
      variant: D,
      disabled: L,
      loading: C,
      onClick: () => {
        N(true), P(), u.default.track(E.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
          application_id: n.id,
          button_action: p.F5.USE_APP_COMMAND
        })
      },
      "aria-label": y.intl.formatToPlainString(y.t["XjP/R+"], {
        buttonText: x,
        applicationName: n.name
      }),
      text: x
    })
  })
}