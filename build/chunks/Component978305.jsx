/** Chunk was on 90688 **/
/** chunk id: 978305, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk148806 = require("./148806.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352258 = require("./352258.js"),
  Chunk197571 = require("./197571.js");
let O = e => {
  let {
    transitionState: r,
    onClose: t
  } = e, s = (0, x.Z)(), [i, O] = o.useState(false), {
    getLinkCode: _,
    isGetLinkCodeLoading: j
  } = (0, C.G)({}), q = (0, m.rW)(), N = (0, m.gU)(), z = o.useRef(N);
  a()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
  let S = () => {
    O(e => (f.default.track(v.rMx.FAMILY_CENTER_ACTION, {
      action: i ? p.YC.HideQRCode : p.YC.RevealQRCode
    }), !e)), i || setTimeout(() => {
      t()
    }, p.f2)
  };
  (0, d.ZP)(() => {
    _()
  }), o.useEffect(() => {
    N > z.current && t()
  }, [z, N, t]);
  let E = i && !j && null != q;
  return (0, n.jsxs)(c.IX, {
    transitionState: r,
    onClose: t,
    children: [(0, n.jsxs)(c.qXd, {
      className: g.notice,
      color: c.DM8.WARNING,
      children: [(0, n.jsx)(c.d3s, {
        size: "sm",
        color: "currentColor"
      }), y.intl.string(b.default.iHYMAz)]
    }), (0, n.jsxs)(c.fef, {
      children: [(0, n.jsx)(c.Text, {
        className: h.marginBottom8,
        variant: "text-lg/bold",
        color: "text-strong",
        children: y.intl.string(b.default.AVTZaN)
      }), (0, n.jsx)(c.Text, {
        className: h.marginBottom20,
        variant: "text-sm/normal",
        color: "text-default",
        children: y.intl.format(b.default.LyyCsE, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), (0, n.jsx)("div", {
        className: g.qrCodeContainer,
        children: (0, n.jsx)(c.P3F, {
          className: l()(g.qrCodeObscure, {
            [g.visible]: E
          }),
          onClick: S,
          children: (0, n.jsx)(u.c2, {
            size: 272,
            text: E ? q : p.vH,
            overlaySize: u.cK.SIZE_60,
            className: g.qrCodeOverlay
          })
        })
      }), (0, n.jsx)(c.Text, {
        className: g.reminder,
        variant: "text-xs/semibold",
        color: "text-default",
        children: y.intl.string(b.default.goDyoe)
      })]
    }), (0, n.jsx)(c.Go$, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: y.intl.string(y.t.cpT0Cq),
        onClick: t
      }, {
        variant: "primary",
        text: i ? y.intl.string(b.default.wg2xwQ) : y.intl.string(b.default["10dX6U"]),
        onClick: S,
        loading: i && j
      }]
    })]
  })
}