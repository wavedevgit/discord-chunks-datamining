/** Chunk was on web.js **/
/** chunk id: 298305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk920064 = require("./920064.js"),
  Chunk287809 = require("./287809.js"),
  Chunk504721 = require("./504721.js"),
  Chunk513653 = require("./513653.js"),
  Chunk180391 = require("./180391.js");
let f = 1.5,
  p = .321;

function _(e) {
  let {
    maxRewardImageSrc: t,
    claimableRewards: n,
    size: _,
    imageScaling: h = f
  } = e, m = (0, i.bG)([l.default], () => l.default.getCurrentUser()), g = (0, i.bG)([s.A], () => s.A.useReducedMotion), E = (0, a.FT9)(_), b = {
    height: E * h
  };
  return n.length > 0 ? (0, r.jsx)("img", {
    alt: "",
    src: t,
    style: b
  }) : (0, r.jsxs)("div", {
    className: c.kL,
    children: [(1 === n.length || 2 === n.length) && (0, r.jsx)(a.JsQ, {
      "aria-label": null == m ? true : m.username,
      size: _,
      className: c.M8,
      src: 1 === n.length ? null == m ? true : m.getAvatarURL(true, (0, a.FT9)(_), !g) : d,
      avatarDecoration: (0, o.A)(n[0].assetId, _, !g)
    }), 2 === n.length && (0, r.jsx)("div", {
      style: {
        marginRight: -Math.round(E * p)
      },
      children: (0, r.jsx)(a.JsQ, {
        "aria-label": null == m ? true : m.username,
        size: _,
        src: u,
        avatarDecoration: (0, o.A)(n[1].assetId, _, !g)
      })
    })]
  })
}