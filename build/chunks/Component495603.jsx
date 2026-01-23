/** Chunk was on 77168 **/
/** chunk id: 495603, original params: n,l,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk985018 = require("./985018.jsx");

function d(n) {
  let {
    id: l,
    role: i,
    handleDeletePermission: d
  } = n, o = (0, u.A)({
    id: l,
    label: null == i ? a.intl.string(a.t["/AXYnE"]) : a.intl.string(a.t.sMsaLg)
  });
  return s.useEffect(() => {
    null == d && null == o && (0, r.Z_)()
  }, [o, d]), (0, t.jsxs)(e.W1t, {
    "data-menu-all-icons": true,
    navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
    "aria-label": null == i ? a.intl.string(a.t.pJMipx) : a.intl.string(a.t.ltedOh),
    onClose: r.Z_,
    onSelect: true,
    children: [null != d && (0, t.jsx)(e.rXV, {
      children: (0, t.jsx)(e.Drp, {
        id: "remove-permission",
        color: "danger",
        label: null == i ? a.intl.string(a.t.hXfRwD) : a.intl.string(a.t["T+3Adg"]),
        icon: e.ucK,
        action: d
      })
    }), null != o && (0, t.jsx)(e.rXV, {
      children: o
    })]
  })
}