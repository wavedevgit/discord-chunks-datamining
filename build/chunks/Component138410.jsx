/** Chunk was on 60667 **/
/** chunk id: 138410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => u
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
let u = () => {
  let e = s.A.getArticleURL(o.MVz.XBOX_CONNECTION);
  return (0, r.jsx)(a.Z, {
    title: c.intl.string(c.t["2okkZV"]),
    body: c.intl.format(c.t.OnERSS, {
      help_article: e
    }),
    img: (0, r.jsx)("img", {
      src: d,
      width: "auto",
      height: "45",
      alt: ""
    }),
    newIndicatorDismissibleContent: i.M.XBOX_ONE_WAY_RECONNECT,
    onClick: () => (0, l.A)({
      platformType: o.fg2.XBOX,
      location: "Xbox two way upsell"
    })
  })
}