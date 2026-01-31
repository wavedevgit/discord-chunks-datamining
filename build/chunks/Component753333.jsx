/** Chunk was on 7869 **/
/** chunk id: 753333, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk957565 = require("./957565.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(t, e, n) {
  let s = null != n;
  if (null == (0, r.bG)([u.A], () => u.A.getGuild(e), [e])) return null;

  function d() {
    let l = arguments.length > 0 && true !== arguments[0] && arguments[0],
      r = "".concat(location.protocol, "//").concat(location.host).concat(a.BVt.GUILD_EVENT_DETAILS(e, t, l ? null : n));
    (0, o.C)(r, () => (0, i.showToast)((0, i.createToast)(c.intl.string(c.t["L/PwZf"]), i.ToastType.SUCCESS)))
  }
  return (0, l.jsx)(i.Drp, {
    id: c.intl.string(c.t["9o+VKx"]),
    label: c.intl.string(c.t["9o+VKx"]),
    action: s ? true : () => d(true),
    children: s && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.Drp, {
        id: c.intl.string(c.t.QLtDqP),
        label: c.intl.string(c.t.QLtDqP),
        action: () => d(false)
      }), (0, l.jsx)(i.Drp, {
        id: c.intl.string(c.t.AYnhB7),
        label: c.intl.string(c.t.AYnhB7),
        action: () => d(true)
      })]
    })
  })
}