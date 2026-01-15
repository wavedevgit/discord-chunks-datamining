/** Chunk was on 470 **/
/** chunk id: 572427, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk572004 = require("./572004.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(t, e, n) {
  let s = null != n;
  if (null == (0, i.e7)([u.Z], () => u.Z.getGuild(e), [e])) return null;

  function d() {
    let l = arguments.length > 0 && true !== arguments[0] && arguments[0],
      i = "".concat(location.protocol, "//").concat(location.host).concat(c.Z5c.GUILD_EVENT_DETAILS(e, t, l ? null : n));
    (0, o.JG)(i, () => (0, r.showToast)((0, r.createToast)(a.intl.string(a.t["L/PwZf"]), r.ToastType.SUCCESS)))
  }
  return (0, l.jsx)(r.sNh, {
    id: a.intl.string(a.t["9o+VKx"]),
    label: a.intl.string(a.t["9o+VKx"]),
    action: s ? true : () => d(true),
    children: s && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.sNh, {
        id: a.intl.string(a.t.QLtDqP),
        label: a.intl.string(a.t.QLtDqP),
        action: () => d(false)
      }), (0, l.jsx)(r.sNh, {
        id: a.intl.string(a.t.AYnhB7),
        label: a.intl.string(a.t.AYnhB7),
        action: () => d(true)
      })]
    })
  })
}