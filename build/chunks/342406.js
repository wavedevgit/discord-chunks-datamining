/** Chunk was on 9452 **/
/** chunk id: 342406, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk972959 = require("./972959.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk710808 = require("./710808.jsx"),
  Chunk253595 = require("./253595.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk972959.H)(() => ({
  isUploading: false
}));
async function c() {
  await (0, Chunk710808.xI)({
    onUploadStart: () => o.setState({
      isUploading: true
    }),
    onUploadFinish: () => o.setState({
      isUploading: false
    })
  })
}
let E = (0, Chunk509613.ax)(Chunk313789.n.VOICE_AND_VIDEO_UPLOAD_DEBUG_LOGS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.aY1OH2),
  useLabel: () => Chunk388032.intl.string(Chunk388032.t.EbwFfR),
  usePredicate: Chunk253595.W,
  useDisabled: () => o.useField("isUploading"),
  onClick: c
})