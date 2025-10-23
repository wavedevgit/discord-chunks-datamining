/** Chunk was on web.js **/
/** chunk id: 111386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk170337 = require("./170337.js"),
  Chunk442937 = require("./442937.js");
let f = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk170337.coachtipInner,
    children: [(0, Chunk951288.jsx)("img", {
      src: Chunk442937,
      alt: Chunk388032.intl.string(Chunk388032.t["9wkT13"]),
      className: Chunk170337.coachtipAsset
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk170337.coachtipTextContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.V5y3qZ)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.eSDHDk)
      })]
    })]
  }),
  _ = e => {
    let {
      children: t
    } = e, [n] = (0, l.US)([a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]), [s, c] = i.useState(false);
    return (i.useEffect(() => {
      setTimeout(() => {
        c(true)
      }, 300)
    }), n !== a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP) ? t : (0, r.jsx)(o.u, {
      __unsupportedReactNodeAsText: (0, r.jsx)(f, {}),
      position: "left",
      forceOpen: s,
      shouldShow: s,
      "aria-label": "test",
      children: (0, r.jsx)("div", {
        children: t
      })
    })
  }