/** Chunk was on 37832 **/
/** chunk id: 853476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk502053 = require("./502053.js"),
  Chunk42326 = require("./42326.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    userId: t,
    className: n
  } = e, s = (0, a.Z)(t), {
    avErrorUIEnabled: c
  } = (0, i.JN)({
    location: "VideoWarning"
  });
  if (null == s) return null;
  let d = s === l.u.CAMERA_SEND_LOW_FPS ? u.intl.string(u.t["1NyoVl"]) : true;
  return null != d ? (0, r.jsx)(o.Z, {
    className: n,
    errorMessage: d,
    avError: c ? s : null
  }) : null
}