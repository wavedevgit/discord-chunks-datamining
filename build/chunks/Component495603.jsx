/** Chunk was on 77168 **/
/** chunk id: 495603, original params: n,l,i (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(n) {
  let {
    id: l,
    role: i,
    handleDeletePermission: o
  } = n, a = (0, u.A)({
    id: l,
    label: null == i ? d.intl.string(d.t["/AXYnE"]) : d.intl.string(d.t.sMsaLg)
  });
  return s.useEffect(() => {
    null == o && null == a && (0, r.Z_)()
  }, [a, o]), (0, t.jsxs)(e.W1t, {
    navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
    "aria-label": null == i ? d.intl.string(d.t.pJMipx) : d.intl.string(d.t.ltedOh),
    onClose: r.Z_,
    onSelect: true,
    children: [null != o && (0, t.jsx)(e.rXV, {
      children: (0, t.jsx)(e.Drp, {
        id: "remove-permission",
        color: "danger",
        label: null == i ? d.intl.string(d.t.hXfRwD) : d.intl.string(d.t["T+3Adg"]),
        icon: e.ucK,
        action: o
      })
    }), null != a && (0, t.jsx)(e.rXV, {
      children: a
    })]
  })
}