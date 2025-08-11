/** Chunk was on web.js **/
/** chunk id: 18578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.js"),
  Chunk475595 = require("./475595.js"),
  Chunk388032 = require("./388032.js"),
  Chunk536087 = require("./536087.js");

function _(e) {
  var t, n, o;
  let {
    videoActive: _,
    imageAsset: p,
    videoAsset: h,
    imageDimensions: m,
    onLoadComplete: g
  } = e, E = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), b = null == p || p.asset.isAnimated ? null : p.asset.url, y = null != h && h.asset.isAnimated ? h.asset.url : null, O = null == m ? true : m.width, v = null == m ? true : m.height, I = i.useMemo(() => {
    let e = null != O && null != v ? (0, u.nK)(O, v) : null;
    return null != b ? (0, u.sN)(b, {
      format: "webp",
      width: null == e ? true : e.width,
      height: null == e ? true : e.height
    }) : null != y ? (0, u.f0)(y, null != e ? e : true) : null
  }, [b, y, O, v]);
  return null == I ? null : <r.Fragment>{<img alt={null != (t = null == p ? true : p.alt) ? t : d.intl.string(d.t.P84bAA)} className={null != (n = null == p ? true : p.className) ? n : f.image} src={I} onLoad={g} />}{!E && null != h && null != y && _ && <c.Z autoPlay={true} loop={true} muted={true} preload={"auto"} poster={I} playsInline={true} className={a()(h.className, f.video, {
        [f.hidden]: !_
      })} controls={false} onProgress={g}><source src={h.asset.url} type={null != (o = h.asset.mimetype) ? o : true} /></c.Z>}</r.Fragment>
}