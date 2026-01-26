/** Chunk was on 77168 **/
/** chunk id: 495603, original params: n,l,i (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk985018 = require("./985018.jsx");

function a(n) {
  let {
    id: l,
    role: i,
    handleDeletePermission: a
  } = n, d = (0, u.A)({
    id: l,
    label: null == i ? c.intl.string(c.t["/AXYnE"]) : c.intl.string(c.t.sMsaLg)
  });
  return t.useEffect(() => {
    null == a && null == d && (0, r.Z_)()
  }, [d, a]), (0, e.jsxs)(s.W1t, {
    "data-menu-migrated": true,
    navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
    "aria-label": null == i ? c.intl.string(c.t.pJMipx) : c.intl.string(c.t.ltedOh),
    onClose: r.Z_,
    onSelect: true,
    children: [null != a && (0, e.jsx)(s.rXV, {
      children: (0, e.jsx)(s.Drp, {
        id: "remove-permission",
        color: "danger",
        label: null == i ? c.intl.string(c.t.hXfRwD) : c.intl.string(c.t["T+3Adg"]),
        icon: s.ucK,
        leadingAccessory: {
          type: "icon",
          icon: s.ucK
        },
        action: a
      })
    }), null != d && (0, e.jsx)(s.rXV, {
      children: d
    })]
  })
}