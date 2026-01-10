/** Chunk was on 84249 **/
/** chunk id: 812055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  b: () => C
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
  y = 4 * Chunk70956.Z.Millis.DAY;

function C() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      shouldShow: t = true
    } = e,
    [n, a] = r.useState(Date.now()),
    s = (0, i.e7)([u.Z], () => u.Z.hasLayers()),
    c = (0, i.e7)([m.Z], () => m.Z.getStatus()),
    p = d.P4.useSetting(),
    b = (null == p ? true : p.value) != null ? Number(p.value) : null,
    g = d.Cr.useSetting(),
    C = c === x.Sk.DND && null != b && n - b > j && "0" === g,
    {
      enabled: _
    } = (0, h.a)({
      location: "useDoNotDisturbReminderPopoverDismissibleContent",
      autoTrackExposure: C,
      disable: !C
    });
  return r.useEffect(() => {
    if (c === x.Sk.DND) {
      a(Date.now());
      let e = setInterval(() => a(Date.now()), v);
      return () => clearInterval(e)
    }
  }, [c]), (0, o.bf)(_ && !s && t ? l.z.DO_NOT_DISTURB_REMINDER_POPOVER : null, {
    cooldownDurationMs: y,
    numTimesToRecur: 2
  }, f.R.ACCOUNT_NAME_ZONE, true)
}

function _(e) {
  let {
    targetElementRef: t,
    onDismiss: n,
    children: r
  } = e, {
    enabled: i,
    titleText: l,
    bodyText: o
  } = (0, h.a)({
    location: "popover",
    autoTrackExposure: false
  });
  return null != t.current && i ? (0, a.jsxs)(a.Fragment, {
    children: [r, (0, a.jsx)(s.J2, {
      targetElementRef: t,
      title: b.intl.string(l),
      body: b.intl.string(o),
      caretConfig: {
        align: "start"
      },
      gradientColor: "purple",
      actions: [{
        text: b.intl.string(b.t.fwPurU),
        onClick: () => {
          (0, c.Z)({
            nextStatus: x.Sk.ONLINE
          }), null == n || n(f.L.PRIMARY)
        }
      }],
      graphic: {
        type: "image",
        src: g
      },
      onRequestClose: () => null == n ? true : n(f.L.DISMISS)
    })]
  }) : r
}