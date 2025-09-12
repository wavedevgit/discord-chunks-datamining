/** Chunk was on web.js **/
/** chunk id: 812055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T,
  b: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk246133 = require("./246133.js"),
  Chunk695346 = require("./695346.js"),
  Chunk819640 = require("./819640.js"),
  Chunk885110 = require("./885110.js"),
  Chunk70956 = require("./70956.js"),
  Chunk809930 = require("./809930.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk668073 = require("./668073.js");
let b = Chunk70956.Z.Millis.HOUR,
  y = Chunk70956.Z.Millis.DAY,
  O = 4 * Chunk70956.Z.Millis.DAY,
  v = 2;

function I() {
  let [e, t] = Chunk647438.useState(Date.now()), n = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.hasLayers()), r = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getStatus()), s = Chunk695346.P4.useSetting(), c = (null == Chunk907862 ? true : Chunk907862.value) != null ? Number(Chunk907862.value) : null, _ = Chunk695346.Cr.useSetting(), g = null != Chunk246133 && module - Chunk246133 > y, E = Chunk951288 === Chunk231338.Sk.DND && Chunk388032 && "0" === Chunk70956, {
    enabled: I
  } = (0, Chunk809930.a)({
    location: "useDoNotDisturbReminderPopoverDismissibleContent",
    autoTrackExposure: Chunk668073,
    disable: !Chunk668073
  }), T = I && !require;
  return Chunk647438.useEffect(() => {
    if (Chunk951288 === Chunk231338.Sk.DND) {
      exports(Date.now());
      let e = setInterval(() => exports(Date.now()), b);
      return () => clearInterval(module)
    }
  }, [Chunk951288]), (0, Chunk243778.bf)(T ? Chunk704215.z.DO_NOT_DISTURB_REMINDER_POPOVER : null, {
    cooldownDurationMs: O,
    numTimesToRecur: v
  }, Chunk921944.R.ACCOUNT_NAME_ZONE, true)
}

function T(e) {
  let {
    targetElementRef: t,
    onDismiss: n,
    children: i
  } = e, {
    enabled: a,
    titleText: o,
    bodyText: l
  } = (0, p.a)({
    location: "popover",
    autoTrackExposure: false
  });
  return null != t.current && a ? (0, r.jsxs)(r.Fragment, {
    children: [i, (0, r.jsx)(s.J2, {
      targetElementRef: t,
      title: g.intl.string(o),
      body: g.intl.string(l),
      caretConfig: {
        align: "start"
      },
      actions: [{
        text: g.intl.string(g.t.fwPura),
        onClick: () => {
          (0, c.Z)({
            nextStatus: m.Sk.ONLINE
          }), null == n || n(h.L.PRIMARY)
        }
      }],
      graphic: {
        type: "image",
        src: E
      },
      onRequestClose: () => null == n ? true : n(h.L.DISMISS)
    })]
  }) : i
}