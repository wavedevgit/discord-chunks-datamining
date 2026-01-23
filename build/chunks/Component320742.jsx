/** Chunk was on 84268 **/
/** chunk id: 320742, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk414121 = require("./414121.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk10005 = require("./10005.js"),
  Chunk438732 = require("./438732.js"),
  Chunk834981 = require("./834981.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk482064 = require("./482064.js"),
  Chunk473169 = require("./473169.js");
let g = e => {
  let {
    transitionState: t,
    onClose: r
  } = e, o = (0, y.A)(), [a, g] = s.useState(false), {
    getLinkCode: v,
    isGetLinkCodeLoading: j
  } = (0, p.A)({}), E = (0, C.VE)(), T = (0, C.VT)(), S = s.useRef(T);
  i()(!o, "FamilyCenterQRCodeModal should only be rendered for teens.");
  let N = () => {
    g(e => (f.default.track(x.HAw.FAMILY_CENTER_ACTION, {
      action: a ? m.qb.HideQRCode : m.qb.RevealQRCode
    }), !e)), a || setTimeout(() => {
      r()
    }, m.nz)
  };
  (0, d.Ay)(() => {
    v()
  }), s.useEffect(() => {
    T > S.current && r()
  }, [S, T, r]);
  let R = a && !j && null != E;
  return (0, n.jsxs)(c.dWK, {
    transitionState: t,
    onClose: r,
    children: [(0, n.jsxs)(c.$Td, {
      className: _.lm,
      color: c.Hv$.WARNING,
      children: [(0, n.jsx)(c.mir, {
        size: "sm",
        color: "currentColor"
      }), h.intl.string(b.default.iHYMAz)]
    }), (0, n.jsxs)(c.cwr, {
      children: [(0, n.jsx)(c.Text, {
        className: O.QB,
        variant: "text-lg/bold",
        color: "text-strong",
        children: h.intl.string(b.default.AVTZaN)
      }), (0, n.jsx)(c.Text, {
        className: O.SX,
        variant: "text-sm/normal",
        color: "text-default",
        children: h.intl.format(b.default.LyyCsE, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), (0, n.jsx)("div", {
        className: _.Ac,
        children: (0, n.jsx)(c.DUT, {
          className: l()(_.u3, {
            [_.RK]: R
          }),
          onClick: N,
          children: (0, n.jsx)(u.Lx, {
            size: 272,
            text: R ? E : m.EC,
            overlaySize: u.Zs.SIZE_60,
            className: _.R6
          })
        })
      }), (0, n.jsx)(c.Text, {
        className: _.z_,
        variant: "text-xs/semibold",
        color: "text-default",
        children: h.intl.string(b.default.goDyoe)
      })]
    }), (0, n.jsx)(c.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: h.intl.string(h.t.cpT0Cq),
        onClick: r
      }, {
        variant: "primary",
        text: a ? h.intl.string(b.default.wg2xwQ) : h.intl.string(b.default["10dX6U"]),
        onClick: N,
        loading: a && j
      }]
    })]
  })
}