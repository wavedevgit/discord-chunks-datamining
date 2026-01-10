/** Chunk was on 81985 **/
/** chunk id: 396664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t = i.Z.getChannel(e),
    n = (null == t ? true : t.name) == null ? l.intl.string(l.t.gi2swM) : l.intl.formatToPlainString(l.t.IFPJ6J, {
      channelName: t.name
    });
  (0, r.showToast)((0, r.createToast)(n, r.ToastType.SUCCESS))
}