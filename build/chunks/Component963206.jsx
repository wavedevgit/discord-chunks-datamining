/** Chunk was on 53937 **/
/** chunk id: 963206, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  P: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk377108 = require("./377108.js"),
  Chunk29909 = require("./29909.jsx"),
  Chunk636428 = require("./636428.js");
let a = (e, l, t) => () => {
  let a = null != l ? l : t;
  if (null == a) return null;
  let {
    url: o,
    proxyURL: d,
    width: u,
    height: h
  } = a;
  return (0, r.jsx)(i.Z, {
    width: u,
    height: h,
    src: null != d && "" !== d ? d : o,
    url: null != e && "" !== e ? e : null != d && "" !== d ? d : o,
    format: null != t ? n.EO.VIDEO : n.EO.IMAGE,
    className: s.gifFavoriteButton
  })
}