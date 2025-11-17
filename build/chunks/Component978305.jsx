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
  i = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk597754 = require("./597754.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352258 = require("./352258.js"),
  Chunk197571 = require("./197571.js");
let O = e => {
  let {
    transitionState: r,
    onClose: t
  } = e, s = (0, m.Z)(), [a, O] = o.useState(false), {
    getLinkCode: _,
    isGetLinkCodeLoading: j
  } = (0, C.G)({}), q = (0, p.rW)(), N = (0, p.gU)(), z = o.useRef(N);
  i()(!s, "FamilyCenterQRCodeModal should only be rendered for teens.");
  let S = () => {
    O(e => (f.default.track(y.rMx.FAMILY_CENTER_ACTION, {
      action: a ? x.YC.HideQRCode : x.YC.RevealQRCode
    }), !e)), a || setTimeout(() => {
      t()
    }, x.f2)
  };
  (0, d.ZP)(() => {
    _()
  }), o.useEffect(() => {
    N > z.current && t()
  }, [z, N, t]);
  let E = a && !j && null != q;
  return (0, n.jsxs)(c.IX, {
    transitionState: r,
    onClose: t,
    children: [(0, n.jsxs)(c.qXd, {
      className: h.notice,
      color: c.DM8.WARNING,
      children: [(0, n.jsx)(c.d3s, {
        size: "sm",
        color: "currentColor"
      }), b.intl.string(v.default.iHYMAz)]
    }), (0, n.jsxs)(c.fef, {
      children: [(0, n.jsx)(c.Text, {
        className: g.marginBottom8,
        variant: "text-lg/bold",
        color: "header-primary",
        children: b.intl.string(v.default.AVTZaN)
      }), (0, n.jsx)(c.Text, {
        className: g.marginBottom20,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: b.intl.format(v.default.LyyCsE, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), (0, n.jsx)("div", {
        className: h.qrCodeContainer,
        children: (0, n.jsx)(c.P3F, {
          className: l()(h.qrCodeObscure, {
            [h.visible]: E
          }),
          onClick: S,
          children: (0, n.jsx)(u.c2, {
            size: 272,
            text: E ? q : x.vH,
            overlaySize: u.cK.SIZE_60,
            className: h.qrCodeOverlay
          })
        })
      }), (0, n.jsx)(c.Text, {
        className: h.reminder,
        variant: "text-xs/semibold",
        color: "header-secondary",
        children: b.intl.string(v.default.goDyoe)
      })]
    }), (0, n.jsx)(c.Go$, {
      actionsFullWidth: true,
      actions: [{
        variant: "secondary",
        text: b.intl.string(b.t.cpT0Cq),
        onClick: t
      }, {
        variant: "primary",
        text: a ? b.intl.string(v.default.wg2xwQ) : b.intl.string(v.default["10dX6U"]),
        onClick: S,
        loading: a && j
      }]
    })]
  })
}