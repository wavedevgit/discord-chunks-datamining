/** Chunk was on 87557 **/
/** chunk id: 354486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  l: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk827827 = require("./827827.js"),
  Chunk253932 = require("./253932.js"),
  Chunk186111 = require("./186111.js"),
  Chunk461213 = require("./461213.js"),
  Chunk927813 = require("./927813.js"),
  Chunk159609 = require("./159609.js"),
  Chunk49999 = require("./49999.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk64924 = require("./64924.js");
let v = Chunk927813.A.Millis.HOUR,
  j = Chunk927813.A.Millis.DAY,
  _ = 4 * Chunk927813.A.Millis.DAY;

function y() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      shouldShow: t = true
    } = e,
    [n, a] = l.useState(Date.now()),
    s = (0, r.bG)([u.A], () => u.A.hasLayers()),
    c = (0, r.bG)([m.A], () => m.A.getStatus()),
    p = d._6.useSetting(),
    f = (null == p ? true : p.value) != null ? Number(p.value) : null,
    b = d.CY.useSetting(),
    y = c === g.cl.DND && null != f && n - f > j && "0" === b,
    {
      enabled: A
    } = (0, h.k)({
      location: "useDoNotDisturbReminderPopoverDismissibleContent",
      autoTrackExposure: y,
      disable: !y
    });
  return l.useEffect(() => {
    if (c === g.cl.DND) {
      a(Date.now());
      let e = setInterval(() => a(Date.now()), v);
      return () => clearInterval(e)
    }
  }, [c]), (0, o.Wl)(A && !s && t ? i.M.DO_NOT_DISTURB_REMINDER_POPOVER : null, {
    cooldownDurationMs: _,
    numTimesToRecur: 2
  }, x.m.ACCOUNT_NAME_ZONE, true)
}

function A(e) {
  let {
    targetElementRef: t,
    onDismiss: n,
    children: l
  } = e, {
    enabled: r,
    titleText: i,
    bodyText: o
  } = (0, h.k)({
    location: "popover",
    autoTrackExposure: false
  });
  return null != t.current && r ? (0, a.jsxs)(a.Fragment, {
    children: [l, (0, a.jsx)(s.AM, {
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
          (0, c.A)({
            nextStatus: g.cl.ONLINE
          }), null == n || n(x.i.PRIMARY)
        }
      }],
      graphic: {
        type: "image",
        src: b
      },
      onRequestClose: () => null == n ? true : n(x.i.DISMISS)
    })]
  }) : l
}