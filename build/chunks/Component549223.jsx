/** Chunk was on 59276 **/
/** chunk id: 549223, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk923531 = require("./923531.js"),
  Chunk294433 = require("./294433.js"),
  Chunk945276 = require("./945276.js"),
  Chunk121733 = require("./121733.jsx"),
  Chunk191627 = require("./191627.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk468707 = require("./468707.js");
let f = {
    [Chunk191627.NV.USER_INTERACTION]: (0, Chunk627968.jsx)(Chunk121733.A, {
      width: 18,
      height: 18
    }),
    [Chunk191627.NV.USER_CALLED]: (0, Chunk627968.jsx)(Chunk397927._jp, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk191627.NV.USER_ADD]: (0, Chunk627968.jsx)(Chunk397927.$yI, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk191627.NV.GUILD_ADD]: (0, Chunk627968.jsx)(Chunk397927.Bxc, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk191627.NV.GUILD_INTERACTION]: (0, Chunk627968.jsx)(Chunk397927.N$i, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk191627.NV.TOTAL_VOICE_MINUTES]: (0, Chunk627968.jsx)(Chunk158954.O4, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [Chunk191627.NV.PURCHASES]: (0, Chunk627968.jsx)(Chunk158954.BFk, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    })
  },
  j = e => {
    let {
      header: t,
      description: r,
      icon: c
    } = e;
    return (0, o.jsxs)(n.BJc, {
      direction: "horizontal",
      className: d.nM,
      padding: 16,
      align: "center",
      gap: 16,
      fullWidth: false,
      children: [(0, o.jsx)("div", {
        className: d.zc,
        children: c
      }), (0, o.jsxs)("div", {
        className: d.u4,
        children: [(0, o.jsx)(i.Text, {
          variant: "text-sm/bold",
          children: t
        }), (0, o.jsx)(i.Text, {
          variant: "text-xs/medium",
          children: r
        })]
      })]
    })
  },
  O = e => {
    let {
      transitionState: t,
      onClose: r
    } = e, i = (0, l.y)(h.intl.string(p.default.q3IRal), h.intl.string(p.default.JNLpDZ)), a = (0, s.A)(), u = (0, c.Mo)();
    return (0, o.jsx)(n.Modal, {
      transitionState: t,
      onClose: r,
      actions: [],
      title: i,
      children: (0, o.jsx)(n.BJc, {
        gap: 8,
        fullWidth: false,
        children: u.map(e => {
          let [t, r] = e;
          return (0, o.jsx)(j, {
            icon: f[t],
            header: r.tooltipHeader(),
            description: r.tooltipDescription(null != a ? a : true)
          }, t)
        })
      })
    })
  }