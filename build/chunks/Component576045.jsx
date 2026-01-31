/** Chunk was on 17534 **/
/** chunk id: 576045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk831062 = require("./831062.js"),
  Chunk476592 = require("./476592.jsx"),
  Chunk665909 = require("./665909.js");

function c(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: c,
    warningType: u,
    header: d,
    description: h,
    onDismiss: p,
    buttons: g
  } = e;
  l.useEffect(() => {
    s.A.increment({
      name: i.K.SAFETY_WARNING_VIEW
    })
  }, []);
  let f = l.useCallback(() => {
    null == p || p(), (0, o._$)({
      channelId: t,
      warningId: n,
      senderId: c,
      warningType: u,
      cta: o.Wm.USER_BANNER_DISMISS
    })
  }, [p, t, n, c, u]);
  return (0, r.jsx)(a.Z, {
    buttons: g,
    description: h,
    header: d,
    onDismiss: f
  })
}