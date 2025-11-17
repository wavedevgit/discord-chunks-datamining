/** Chunk was on 1272 **/
/** chunk id: 258220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h,
  r: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk835473 = require("./835473.js"),
  Chunk626135 = require("./626135.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let f = "Activity Encourages Hardware Acceleration";

function h(e) {
  var t;
  let {
    applicationId: n,
    transitionState: h,
    onClose: g
  } = e, [m, _] = i.useState(false), [b] = (0, o.Z)([n]), E = null != (t = null == b ? true : b.name) ? t : "This Activity";
  i.useEffect(() => {
    c.default.track(d.rMx.OPEN_MODAL, {
      type: f
    })
  }, []);
  let O = async () => {
    let e = "temporary";
    m && (e = "permanent", s.ZP.updatedUnsyncedSettings({
      disableActivityHardwareAccelerationPrompt: true
    })), c.default.track(d.rMx.MODAL_DISMISSED, {
      type: f,
      dismiss_type: e
    }), await g()
  }, y = async () => {
    c.default.track(d.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
      application_id: n
    }), u.ZP.setEnableHardwareAcceleration(true), await O()
  };
  return (0, r.jsx)(l.Modal, {
    size: "md",
    transitionState: h,
    onClose: O,
    "aria-label": p.intl.string(p.t.NQkK4l),
    title: p.intl.string(p.t.NQkK4l),
    actionBarInput: (0, r.jsx)(a.Checkbox, {
      checked: m,
      onChange: () => _(!m),
      label: p.intl.string(p.t["5E9SB9"]),
      labelType: "secondary"
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["Ibf5/h"]),
      onClick: O
    }, {
      variant: "primary",
      text: p.intl.string(p.t["/wlDqi"]),
      onClick: y
    }],
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: p.intl.format(p.t.B9eiaK, {
        applicationName: E
      })
    })
  })
}