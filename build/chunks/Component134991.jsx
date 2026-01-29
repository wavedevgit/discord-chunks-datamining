/** Chunk was on 65298 **/
/** chunk id: 134991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438705 = require("./438705.js");
let p = e => {
  let {
    targetElementRef: t,
    shouldShow: n,
    onDismiss: p
  } = e, h = l.useCallback(() => {
    p(), (0, s.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL, {
      section: c.nc_.SUBSCRIPTIONS
    })
  }, [p]);
  return (0, a.jsx)(r.AM, {
    targetElementRef: t,
    position: "top",
    caretConfig: {
      align: "start"
    },
    size: "md",
    graphic: {
      type: "image",
      src: m
    },
    shouldShow: n,
    title: u.intl.format(d.default.bx8sR9, {
      premiumGroupProductName: (0, o.DP)()
    }),
    body: u.intl.format(d.default.StWqzJ, {
      totalSeats: o.LM
    }),
    onRequestClose: p,
    actions: [{
      text: u.intl.string(d.default.DD26QR),
      onClick: h
    }]
  })
}