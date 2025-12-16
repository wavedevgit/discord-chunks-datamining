/** Chunk was on 1272 **/
/** chunk id: 337721, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk907862 = require("./907862.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk930128 = require("./930128.js");

function u(e) {
  let {
    guild: t,
    markAsDismissed: n,
    targetElementRef: u
  } = e;
  return (0, r.jsx)(i.J2, {
    targetElementRef: u,
    title: s.intl.string(s.t.Hgd22r),
    body: s.intl.string(s.t.SorTPA),
    graphic: {
      type: "image",
      src: c
    },
    actions: [{
      text: s.intl.string(s.t["9l+df7"]),
      variant: "primary",
      onClick: e => {
        l.Z.open(t.id, a.pNK.DISCOVERY_LANDING_PAGE)
      }
    }],
    onRequestClose: () => n(o.L.USER_DISMISS),
    position: "bottom",
    caretConfig: {
      align: "center"
    }
  })
}