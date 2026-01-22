/** Chunk was on web.js **/
/** chunk id: 138410, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk554146 = require("./554146.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk107005 = require("./107005.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk963133 = require("./963133.js");
let d = "Xbox two way upsell",
  f = () => {
    let e = s.A.getArticleURL(l.MVz.XBOX_CONNECTION);
    return (0, r.jsx)(o.Z, {
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
      newIndicatorDismissibleContent: i.M.XBOX_ONE_WAY_RECONNECT,
      onClick: () => (0, a.A)({
        platformType: l.fg2.XBOX,
        location: d
      })
    })
  }