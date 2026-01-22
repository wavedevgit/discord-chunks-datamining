/** Chunk was on 22477 **/
/** chunk id: 354486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  l: () => _
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
  y = 4 * Chunk927813.A.Millis.DAY;

function _() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      shouldShow: t = true
    } = e,
    [n, a] = l.useState(Date.now()),
    s = (0, i.bG)([u.A], () => u.A.hasLayers()),
    c = (0, i.bG)([m.A], () => m.A.getStatus()),
    p = d._6.useSetting(),
    b = (null == p ? true : p.value) != null ? Number(p.value) : null,
    g = d.CY.useSetting(),
    _ = c === x.cl.DND && null != b && n - b > j && "0" === g,
    {
      enabled: A
    } = (0, h.k)({
      location: "useDoNotDisturbReminderPopoverDismissibleContent",
      autoTrackExposure: _,
      disable: !_
    });
  return l.useEffect(() => {
    if (c === x.cl.DND) {
      a(Date.now());
      let e = setInterval(() => a(Date.now()), v);
      return () => clearInterval(e)
    }
  }, [c]), (0, o.Wl)(A && !s && t ? r.M.DO_NOT_DISTURB_REMINDER_POPOVER : null, {
    cooldownDurationMs: y,
    numTimesToRecur: 2
  }, f.m.ACCOUNT_NAME_ZONE, true)
}

function A(e) {
  let {
    targetElementRef: t,
    onDismiss: n,
    children: l
  } = e, {
    enabled: i,
    titleText: r,
    bodyText: o
  } = (0, h.k)({
    location: "popover",
    autoTrackExposure: false
  });
  return null != t.current && i ? (0, a.jsxs)(a.Fragment, {
    children: [l, (0, a.jsx)(s.AM, {
      targetElementRef: t,
      title: b.intl.string(r),
      body: b.intl.string(o),
      caretConfig: {
        align: "start"
      },
      gradientColor: "purple",
      actions: [{
        text: b.intl.string(b.t.fwPurU),
        onClick: () => {
          (0, c.A)({
            nextStatus: x.cl.ONLINE
          }), null == n || n(f.i.PRIMARY)
        }
      }],
      graphic: {
        type: "image",
        src: g
      },
      onRequestClose: () => null == n ? true : n(f.i.DISMISS)
    })]
  }) : l
}