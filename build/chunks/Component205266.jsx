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
    let e = Chunk63063.Z.getArticleURL(Chunk981631.BhN.PS_CONNECTION);
    return (0, Chunk54381.jsx)(Chunk249881.t, {
      title: Chunk388032.intl.string(Chunk388032.t.v20wwm),
      body: Chunk388032.intl.format(Chunk388032.t.lTZBit, {
        help_article: module
      }),
      img: (0, Chunk54381.jsx)("img", {
        src: Chunk359734,
        width: "82",
        height: "auto",
        alt: ""
      }),
      newIndicatorDismissibleContent: Chunk704215.z.PS_ONE_WAY_RECONNECT,
      onClick: () => (0, Chunk231757.Z)({
        platformType: Chunk981631.ABu.PLAYSTATION,
        location: d
      })
    })
  }