/** Chunk was on 4419 **/
/** chunk id: 573703, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk376340 = require("./376340.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk835940 = require("./835940.js"),
  Chunk38920 = require("./38920.js");

function u() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk835940.__invalid_getCrunchyrollApp,
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk835940.__invalid_getCrunchyrollAppBody,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: (0, Chunk951288.jsx)(Chunk481060.Anchor, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.CRUNCHYROLL_CONNECTION),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })
      })
    })
  })
}

function C(n) {
  let {
    onClose: e
  } = n;
  return (0, o.jsx)(s.L, {
    img: (0, o.jsx)("img", {
      src: d,
      width: "224",
      height: "104",
      alt: ""
    }),
    title: a.intl.string(a.t.Fnvxvk),
    body: a.intl.string(a.t.YwXceg),
    content: (0, o.jsx)(u, {}),
    onClose: e
  })
}