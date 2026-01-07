/** Chunk was on web.js **/
/** chunk id: 205266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk704215 = require("./704215.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk249881 = require("./249881.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk359734 = require("./359734.js");
let d = "PS two way upsell",
  f = () => {
    let e = o.Z.getArticleURL(l.BhN.PS_CONNECTION);
    return (0, r.jsx)(s.t, {
      title: c.intl.string(c.t.v20wwm),
      body: c.intl.format(c.t.lTZBit, {
        help_article: e
      }),
      img: (0, r.jsx)("img", {
        src: u,
        width: "82",
        height: "auto",
        alt: ""
      }),
      newIndicatorDismissibleContent: i.z.PS_ONE_WAY_RECONNECT,
      onClick: () => (0, a.Z)({
        platformType: l.ABu.PLAYSTATION,
        location: d
      })
    })
  }