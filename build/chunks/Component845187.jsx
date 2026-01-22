/** Chunk was on 21738 **/
/** chunk id: 845187, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => f,
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk429913 = require("./429913.js"),
  Chunk954571 = require("./954571.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let f = "Activity Encourages Hardware Acceleration";

function h(e) {
  var t;
  let {
    applicationId: n,
    transitionState: h,
    onClose: A
  } = e, [g, m] = i.useState(false), [b] = (0, o.A)([n]), _ = null != (t = null == b ? true : b.name) ? t : "This Activity";
  i.useEffect(() => {
    c.default.track(d.HAw.OPEN_MODAL, {
      type: f
    })
  }, []);
  let E = async () => {
    let e = "temporary";
    g && (e = "permanent", s.Ay.updatedUnsyncedSettings({
      disableActivityHardwareAccelerationPrompt: true
    })), c.default.track(d.HAw.MODAL_DISMISSED, {
      type: f,
      dismiss_type: e
    }), await A()
  }, O = async () => {
    c.default.track(d.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
      application_id: n
    }), u.Ay.setEnableHardwareAcceleration(true), await E()
  };
  return (0, r.jsx)(l.Modal, {
    size: "md",
    transitionState: h,
    onClose: E,
    "aria-label": p.intl.string(p.t.NQkK4l),
    title: p.intl.string(p.t.NQkK4l),
    actionBarInput: (0, r.jsx)(a.Checkbox, {
      checked: g,
      onChange: () => m(!g),
      label: p.intl.string(p.t["5E9SB9"]),
      labelType: "secondary"
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["Ibf5/h"]),
      onClick: E
    }, {
      variant: "primary",
      text: p.intl.string(p.t["/wlDqi"]),
      onClick: O
    }],
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: p.intl.format(p.t.B9eiaK, {
        applicationName: _
      })
    })
  })
}