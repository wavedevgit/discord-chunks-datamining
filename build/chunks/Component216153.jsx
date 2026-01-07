/** Chunk was on web.js **/
/** chunk id: 216153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk704215 = require("./704215.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk249881 = require("./249881.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk195794 = require("./195794.js");
let d = "Xbox two way upsell",
  f = () => {
    let e = o.Z.getArticleURL(l.BhN.XBOX_CONNECTION);
    return (0, r.jsx)(s.t, {
      title: c.intl.string(c.t["2okkZV"]),
      body: c.intl.format(c.t.OnERSS, {
        help_article: e
      }),
      img: (0, r.jsx)("img", {
        src: u,
        width: "auto",
        height: "45",
        alt: ""
      }),
      newIndicatorDismissibleContent: i.z.XBOX_ONE_WAY_RECONNECT,
      onClick: () => (0, a.Z)({
        platformType: l.ABu.XBOX,
        location: d
      })
    })
  }