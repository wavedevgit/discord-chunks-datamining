/** Chunk was on 27434 **/
/** chunk id: 572427, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk592126 = require("./592126.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(t, n, e) {
  let u = null != e,
    {
      isMember: s
    } = (0, o.Z)(n, t);
  if (!s) return null;

  function d() {
    let l = arguments.length > 0 && true !== arguments[0] && arguments[0],
      o = "".concat(location.protocol, "//").concat(location.host).concat(a.Z5c.GUILD_EVENT_DETAILS(n, t, l ? null : e));
    (0, r.JG)(o, () => (0, i.showToast)((0, i.createToast)(c.intl.string(c.t["L/PwZW"]), i.ToastType.SUCCESS)))
  }
  return (0, l.jsx)(i.sNh, {
    id: c.intl.string(c.t["9o+VKy"]),
    label: c.intl.string(c.t["9o+VKy"]),
    action: u ? true : () => d(true),
    children: u && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.sNh, {
        id: c.intl.string(c.t.QLtDqK),
        label: c.intl.string(c.t.QLtDqK),
        action: () => d(false)
      }), (0, l.jsx)(i.sNh, {
        id: c.intl.string(c.t.AYnhBw),
        label: c.intl.string(c.t.AYnhBw),
        action: () => d(true)
      })]
    })
  })
}