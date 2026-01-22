/** Chunk was on 84268 **/
/** chunk id: 320742, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk414121 = require("./414121.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk10005 = require("./10005.js"),
  Chunk945276 = require("./945276.js"),
  Chunk834981 = require("./834981.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk482064 = require("./482064.js"),
  Chunk473169 = require("./473169.js");
let j = e => {
  let {
    transitionState: t,
    onClose: r
  } = e, o = (0, b.A)(), [a, j] = s.useState(false), {
    getLinkCode: v,
    isGetLinkCodeLoading: _
  } = (0, p.A)({}), E = (0, y.VE)(), T = (0, y.VT)(), S = s.useRef(T);
  c()(!o, "FamilyCenterQRCodeModal should only be rendered for teens.");
  let N = () => {
    j(e => (u.default.track(m.HAw.FAMILY_CENTER_ACTION, {
      action: a ? x.qb.HideQRCode : x.qb.RevealQRCode
    }), !e)), a || setTimeout(() => {
      r()
    }, x.nz)
  };
  (0, d.Ay)(() => {
    v()
  }), s.useEffect(() => {
    T > S.current && r()
  }, [S, T, r]);
  let R = a && !_ && null != E;
  return (0, n.jsxs)(i.dWK, {
    transitionState: t,
    onClose: r,
    children: [(0, n.jsxs)(i.$Td, {
      className: g.lm,
      color: i.Hv$.WARNING,
      children: [(0, n.jsx)(i.mir, {
        size: "sm",
        color: "currentColor"
      }), C.intl.string(h.default.iHYMAz)]
    }), (0, n.jsxs)(i.cwr, {
      children: [(0, n.jsx)(i.Text, {
        className: O.QB,
        variant: "text-lg/bold",
        color: "text-strong",
        children: C.intl.string(h.default.AVTZaN)
      }), (0, n.jsx)(i.Text, {
        className: O.SX,
        variant: "text-sm/normal",
        color: "text-default",
        children: C.intl.format(h.default.LyyCsE, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), (0, n.jsx)("div", {
        className: g.Ac,
        children: (0, n.jsx)(i.DUT, {
          className: l()(g.u3, {
            [g.RK]: R
          }),
          onClick: N,
          children: (0, n.jsx)(f.Lx, {
            size: 272,
            text: R ? E : x.EC,
            overlaySize: f.Zs.SIZE_60,
            className: g.R6
          })
        })
      }), (0, n.jsx)(i.Text, {
        className: g.z_,
        variant: "text-xs/semibold",
        color: "text-default",
        children: C.intl.string(h.default.goDyoe)
      })]
    }), (0, n.jsx)(i.H7u, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: C.intl.string(C.t.cpT0Cq),
        onClick: r
      }, {
        variant: "primary",
        text: a ? C.intl.string(h.default.wg2xwQ) : C.intl.string(h.default["10dX6U"]),
        onClick: N,
        loading: a && _
      }]
    })]
  })
}