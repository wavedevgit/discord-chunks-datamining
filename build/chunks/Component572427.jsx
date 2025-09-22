/** Chunk was on 470 **/
/** chunk id: 572427, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk572004 = require("./572004.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(t, e, n) {
  let s = null != n;
  if (null == (0, r.e7)([o.Z], () => o.Z.getGuild(e), [e])) return null;

  function d() {
    let l = arguments.length > 0 && true !== arguments[0] && arguments[0],
      r = "".concat(location.protocol, "//").concat(location.host).concat(c.Z5c.GUILD_EVENT_DETAILS(e, t, l ? null : n));
    (0, u.JG)(r, () => (0, i.showToast)((0, i.createToast)(a.intl.string(a.t["L/PwZW"]), i.ToastType.SUCCESS)))
  }
  return (0, l.jsx)(i.sNh, {
    id: a.intl.string(a.t["9o+VKy"]),
    label: a.intl.string(a.t["9o+VKy"]),
    action: s ? true : () => d(true),
    children: s && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.sNh, {
        id: a.intl.string(a.t.QLtDqK),
        label: a.intl.string(a.t.QLtDqK),
        action: () => d(false)
      }), (0, l.jsx)(i.sNh, {
        id: a.intl.string(a.t.AYnhBw),
        label: a.intl.string(a.t.AYnhBw),
        action: () => d(true)
      })]
    })
  })
}