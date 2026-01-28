/** Chunk was on 5606 **/
/** chunk id: 131678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk554146 = require("./554146.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk107005 = require("./107005.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk729632 = require("./729632.js");
let u = () => {
  let e = s.A.getArticleURL(o.MVz.PS_CONNECTION);
  return (0, r.jsx)(a.Z, {
    title: c.intl.string(c.t.v20wwm),
    body: c.intl.format(c.t.lTZBit, {
      help_article: e
    }),
    img: (0, r.jsx)("img", {
      src: d,
      width: "82",
      height: "auto",
      alt: ""
    }),
    newIndicatorDismissibleContent: i.M.PS_ONE_WAY_RECONNECT,
    onClick: () => (0, l.A)({
      platformType: o.fg2.PLAYSTATION,
      location: "PS two way upsell"
    })
  })
}