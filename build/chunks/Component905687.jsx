/** Chunk was on 83884 **/
/** chunk id: 905687, original params: n,l,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(n) {
  let {
    id: l,
    role: i,
    handleDeletePermission: d
  } = n, a = (0, u.Z)({
    id: l,
    label: null == i ? o.intl.string(o.t["/AXYnE"]) : o.intl.string(o.t.sMsaLg)
  });
  return t.useEffect(() => {
    null == d && null == a && (0, r.Zy)()
  }, [a, d]), (0, s.jsxs)(e.v2r, {
    navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
    "aria-label": null == i ? o.intl.string(o.t.pJMipx) : o.intl.string(o.t.ltedOh),
    onClose: r.Zy,
    onSelect: true,
    children: [null != d && (0, s.jsx)(e.kSQ, {
      children: (0, s.jsx)(e.sNh, {
        id: "remove-permission",
        color: "danger",
        label: null == i ? o.intl.string(o.t.hXfRwD) : o.intl.string(o.t["T+3Adg"]),
        icon: e.XHJ,
        action: d
      })
    }), null != a && (0, s.jsx)(e.kSQ, {
      children: a
    })]
  })
}