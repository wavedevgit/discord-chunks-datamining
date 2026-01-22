/** Chunk was on 87997 **/
/** chunk id: 443439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    label: t,
    onAction: n
  } = e, u = (0, i.aL)();
  return (0, r.jsx)(l.Drp, {
    id: "user-profile-overlay",
    label: null != t ? t : o.intl.string(o.t.LYju5J),
    action: () => {
      null == n || n(), u.dispatch(a.jej.POPOUT_CLOSE)
    }
  })
}