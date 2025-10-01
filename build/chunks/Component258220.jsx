/** Chunk was on 1272 **/
/** chunk id: 258220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g,
  r: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk835473 = require("./835473.js"),
  Chunk626135 = require("./626135.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = "Activity Encourages Hardware Acceleration";

function g(e) {
  var t;
  let {
    applicationId: n,
    transitionState: g,
    onClose: m
  } = e, [b, _] = i.useState(false), [O] = (0, c.Z)([n]), E = null != (t = null == O ? true : O.name) ? t : "This Activity";
  i.useEffect(() => {
    u.default.track(p.rMx.OPEN_MODAL, {
      type: h
    })
  }, []);
  let y = async () => {
    let e = "temporary";
    b && (e = "permanent", s.ZP.updatedUnsyncedSettings({
      disableActivityHardwareAccelerationPrompt: true
    })), u.default.track(p.rMx.MODAL_DISMISSED, {
      type: h,
      dismiss_type: e
    }), await m()
  }, v = async () => {
    u.default.track(p.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
      application_id: n
    }), d.ZP.setEnableHardwareAcceleration(true), await y()
  };
  return (0, r.jsx)(l.Modal, {
    size: "md",
    transitionState: g,
    onClose: y,
    "aria-label": f.intl.string(f.t.NQkK4u),
    title: f.intl.string(f.t.NQkK4u),
    actionBarInput: (0, r.jsx)(a.$q, {
      type: a.M0.INVERTED,
      size: 18,
      value: b,
      onChange: () => _(!b),
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: f.intl.string(f.t["5E9SBw"])
      })
    }),
    actions: [{
      variant: "secondary",
      text: f.intl.string(f.t["Ibf5/v"]),
      onClick: y
    }, {
      variant: "primary",
      text: f.intl.string(f.t["/wlDqq"]),
      onClick: v
    }],
    children: (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: f.intl.format(f.t.B9eiaG, {
        applicationName: E
      })
    })
  })
}