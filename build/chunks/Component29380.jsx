/** Chunk was on 35755 **/
/** chunk id: 29380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk826405 = require("./826405.js"),
  Chunk176412 = require("./176412.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    context: t,
    application: n,
    sectionName: b,
    primaryEntryPointCommand: N
  } = e, j = l.useId(), C = l.useCallback(() => {
    d.y(m.ti.ACTIVITY)
  }, []), E = l.useCallback(() => {
    p.Z.shouldShowModal() && C()
  }, [C]), {
    submitting: P,
    wasSubmitting: A
  } = (0, v.Z)({
    applicationId: n.id,
    context: t,
    launchingComponentId: j,
    onSubmissionComplete: C
  }), [_, O] = l.useState(false), I = (0, o.Qv)({
    applicationId: n.id,
    context: t
  }), S = l.useMemo(() => (0, h.XZ)(N.displayName), [N.displayName]), {
    onActivityItemSelected: T,
    buttonVariant: L,
    buttonText: R
  } = (0, y.P7)({
    context: t,
    application: n,
    location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW,
    sectionName: b,
    commandName: S,
    autoDismissOnClick: I === o.JS.LEAVE || (0, c.g)(n),
    launchingComponentId: j,
    submitting: null != A ? A : P,
    onConfirmActivityLaunchChecksAlertOpen: E
  }), {
    disabled: Z,
    reason: w
  } = (0, f.Z)({
    context: t,
    application: n,
    activityAction: I
  });
  return (0, i.jsx)(r.u, {
    shouldShow: null != w,
    __unsupportedReactNodeAsText: w,
    children: (0, i.jsx)(a.Button, {
      type: "submit",
      size: "md",
      variant: L,
      disabled: Z,
      loading: _,
      onClick: () => {
        O(true), T(), u.default.track(g.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
          application_id: n.id,
          button_action: m._y.USE_APP_COMMAND
        })
      },
      "aria-label": x.intl.formatToPlainString(x.t["XjP/R+"], {
        buttonText: R,
        applicationName: n.name
      }),
      text: R
    })
  })
}