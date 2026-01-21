/** Chunk was on 6524 **/
/** chunk id: 494439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    label: t,
    onAction: n
  } = e, u = (0, i.Aq)();
  return (0, r.jsx)(l.sNh, {
    id: "user-profile-overlay",
    label: null != t ? t : a.intl.string(a.t.LYju5J),
    action: () => {
      null == n || n(), u.dispatch(o.CkL.POPOUT_CLOSE)
    }
  })
}