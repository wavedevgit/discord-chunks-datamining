/** Chunk was on 43605 **/
/** chunk id: 812055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C,
  b: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let v = Chunk70956.Z.Millis.HOUR,
  j = Chunk70956.Z.Millis.DAY,
  _ = 4 * Chunk70956.Z.Millis.DAY;

function y() {
  let [e, t] = Chunk473749.useState(Date.now()), n = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.hasLayers()), a = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getStatus()), s = Chunk695346.P4.useSetting(), c = (null == Chunk907862 ? true : Chunk907862.value) != null ? Number(Chunk907862.value) : null, p = Chunk695346.Cr.useSetting(), f = Chunk54381 === Chunk231338.Sk.DND && null != Chunk246133 && module - Chunk246133 > j && "0" === Chunk70956, {
    enabled: b
  } = (0, Chunk809930.a)({
    location: "useDoNotDisturbReminderPopoverDismissibleContent",
    autoTrackExposure: Chunk388032,
    disable: !Chunk388032
  });
  return Chunk473749.useEffect(() => {
    if (Chunk54381 === Chunk231338.Sk.DND) {
      exports(Date.now());
      let e = setInterval(() => exports(Date.now()), v);
      return () => clearInterval(module)
    }
  }, [Chunk54381]), (0, Chunk243778.bf)(Chunk668073 && !require ? Chunk704215.z.DO_NOT_DISTURB_REMINDER_POPOVER : null, {
    cooldownDurationMs: _,
    numTimesToRecur: 2
  }, Chunk921944.R.ACCOUNT_NAME_ZONE, true)
}

function C(e) {
  let {
    targetElementRef: t,
    onDismiss: n,
    children: l
  } = e, {
    enabled: r,
    titleText: i,
    bodyText: o
  } = (0, h.a)({
    location: "popover",
    autoTrackExposure: false
  });
  return null != t.current && r ? (0, a.jsxs)(a.Fragment, {
    children: [l, (0, a.jsx)(s.J2, {
      targetElementRef: t,
      title: f.intl.string(i),
      body: f.intl.string(o),
      caretConfig: {
        align: "start"
      },
      gradientColor: "purple",
      actions: [{
        text: f.intl.string(f.t.fwPurU),
        onClick: () => {
          (0, c.Z)({
            nextStatus: g.Sk.ONLINE
          }), null == n || n(x.L.PRIMARY)
        }
      }],
      graphic: {
        type: "image",
        src: b
      },
      onRequestClose: () => null == n ? true : n(x.L.DISMISS)
    })]
  }) : l
}