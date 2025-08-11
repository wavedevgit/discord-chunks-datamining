/** Chunk was on web.js **/
/** chunk id: 853476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk502053 = require("./502053.js"),
  Chunk42326 = require("./42326.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  return e === i.u.CAMERA_SEND_LOW_FPS ? l.intl.string(l.t["1NyoVl"]) : true
}

function u(e) {
  let {
    userId: t,
    className: n
  } = e, i = (0, a.Z)(t), {
    avErrorUIEnabled: l
  } = (0, o.JN)({
    location: "VideoWarning"
  });
  if (null == i) return null;
  let u = c(i);
  return null != u ? <s.Z className={n} errorMessage={u} avError={l ? i : null} /> : null
}