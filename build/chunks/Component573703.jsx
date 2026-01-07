/** Chunk was on 4419 **/
/** chunk id: 573703, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk376340 = require("./376340.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942016 = require("./942016.js"),
  Chunk38920 = require("./38920.js");

function u() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk942016.__invalid_getCrunchyrollApp,
    children: (0, Chunk54381.jsx)("div", {
      className: Chunk942016.__invalid_getCrunchyrollAppBody,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: (0, Chunk54381.jsx)(Chunk481060.eee, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.CRUNCHYROLL_CONNECTION),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })
      })
    })
  })
}

function C(e) {
  let {
    onClose: n
  } = e;
  return (0, o.jsx)(a.L, {
    img: (0, o.jsx)("img", {
      src: c,
      width: "224",
      height: "104",
      alt: ""
    }),
    title: l.intl.string(l.t.Fnvxvk),
    body: l.intl.string(l.t.YwXceg),
    content: (0, o.jsx)(u, {}),
    onClose: n
  })
}