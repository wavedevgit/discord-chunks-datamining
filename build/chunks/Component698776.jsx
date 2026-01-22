/** Chunk was on web.js **/
/** chunk id: 698776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk575593 = require("./575593.js"),
  Chunk674658 = require("./674658.js"),
  Chunk628856 = require("./628856.js"),
  Chunk226540 = require("./226540.js"),
  Chunk227 = require("./227.jsx"),
  Chunk486020 = require("./486020.js");
let u = e => {
  let {
    skuId: t,
    size: n = 128,
    animated: u = false
  } = e, {
    product: d
  } = (0, a.q)(t, true), f = null == d ? true : d.items[0];
  if (null == f) return null;
  if (f.type === i.R.AVATAR_DECORATION) {
    let e = c.Ay.getAvatarDecorationURL({
      avatarDecoration: f,
      size: n,
      canAnimate: u
    });
    return (0, r.jsx)("img", {
      src: e,
      alt: ""
    })
  }
  if (f.type === i.R.PROFILE_EFFECT) {
    let e = f.thumbnailPreviewSrc;
    return (0, r.jsx)("img", {
      src: e,
      alt: ""
    })
  }
  if (f.type === i.R.NAMEPLATE) {
    let e = (0, s.D)(f);
    return (0, r.jsx)(l.A, {
      nameplate: e,
      placement: o.u.PREVIEW
    })
  }
  return null
}