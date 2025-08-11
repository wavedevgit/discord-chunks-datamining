/** Chunk was on web.js **/
/** chunk id: 656795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk650886 = require("./650886.js");

function o(e) {
  let {
    disabled: t,
    deviceId: n,
    width: o,
    height: a
  } = e;
  return t ? <div className={"media-engine-video"} style={{
      width: o,
      height: a
    }} /> : <i.Z streamId={n} style={{
      width: o,
      height: a
    }} />
}
o.defaultProps = {
  disabled: false,
  width: 320,
  height: 180
}