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
    let e = Chunk63063.Z.getArticleURL(Chunk981631.BhN.XBOX_CONNECTION);
    return (0, Chunk54381.jsx)(Chunk249881.t, {
      title: Chunk388032.intl.string(Chunk388032.t["2okkZV"]),
      body: Chunk388032.intl.format(Chunk388032.t.OnERSS, {
        help_article: module
      }),
      img: (0, Chunk54381.jsx)("img", {
        src: Chunk195794,
        width: "auto",
        height: "45",
        alt: ""
      }),
      newIndicatorDismissibleContent: Chunk704215.z.XBOX_ONE_WAY_RECONNECT,
      onClick: () => (0, Chunk231757.Z)({
        platformType: Chunk981631.ABu.XBOX,
        location: d
      })
    })
  }