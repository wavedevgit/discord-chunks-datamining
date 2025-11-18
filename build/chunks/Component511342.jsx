/** Chunk was on 1272 **/
/** chunk id: 511342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk100527 = require("./100527.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk501669 = require("./501669.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk437329 = require("./437329.js");

function f(e) {
  let {
    guild: t,
    markAsDismissed: n,
    renderTargetElement: f
  } = e, h = i.useRef(null), g = {
    text: d.intl.string(u.default.Xnghqy),
    onClick: () => {
      s.Z.open(t.id, o.pNK.BOOST_PERKS, {
        section: a.Z.GUILD_BOOSTING_PROGRESS_BAR
      }), n(c.L.TAKE_ACTION)
    }
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: h,
      children: f()
    }), (0, r.jsx)(l.Mb, {
      targetElementRef: h,
      title: d.intl.string(u.default.UuwXRZ),
      body: d.intl.string(u.default.MIwlcR),
      caretConfig: {
        position: "top",
        align: "center"
      },
      assetUrl: p.Z,
      action: g,
      onRequestClose: () => n(c.L.USER_DISMISS)
    })]
  })
}