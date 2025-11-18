/** Chunk was on web.js **/
/** chunk id: 111386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk635712 = require("./635712.js"),
  Chunk442937 = require("./442937.js");
let f = () => (0, Chunk54381.jsxs)("div", {
    className: Chunk635712.coachtipInner,
    children: [(0, Chunk54381.jsx)("img", {
      src: Chunk442937,
      alt: Chunk388032.intl.string(Chunk388032.t["9wkT13"]),
      className: Chunk635712.coachtipAsset
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk635712.coachtipTextContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.V5y3qZ)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
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