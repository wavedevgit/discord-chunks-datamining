/** Chunk was on 84992 **/
/** chunk id: 783017, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk526167 = require("./526167.js"),
  Chunk741245 = require("./741245.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk977339 = require("./977339.js"),
  Chunk667325 = require("./667325.js"),
  Chunk552039 = require("./552039.js"),
  Chunk445161 = require("./445161.js");
let x = e => {
    switch (e) {
      case H.Yk.PREMIUM_UPDATED:
        return M.intl.string(M.t["75Wt0N"]);
      case H.Yk.PREMIUM_ACTIVATED:
        return M.intl.string(M.t.QWljxM);
      default:
        return M.intl.string(M.t.X79Az8)
    }
  },
  f = e => {
    let {
      type: t,
      text: n,
      buttonText: i,
      hideClose: H,
      onClose: M
    } = e, f = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), p = (0, a.e7)([o.default], () => {
      let e = o.default.getCurrentUser();
      return l()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
    }), N = (0, L.rO)() ? m.Z : Z.Z, T = x(t);
    return (0, s.jsxs)("div", {
      className: h.container,
      children: [(0, s.jsx)(C.X6q, {
        className: h.header,
        variant: "display-md",
        color: "header-primary",
        children: T
      }), (0, s.jsxs)("div", {
        className: h.nameplatePreviewContainer,
        children: [f ? (0, s.jsx)("img", {
          src: g.Z,
          alt: "",
          className: h.nameplateGlow
        }) : (0, s.jsx)(u.Z, {
          playsInline: true,
          muted: true,
          autoPlay: true,
          loop: true,
          className: h.nameplateGlow,
          children: (0, s.jsx)("source", {
            src: N
          })
        }), (0, s.jsx)(d.Z, {
          user: p,
          isHighlighted: true,
          nameplate: null,
          nameplateData: p.nameplate,
          className: h.nameplatePreview,
          nameplatePreviewSize: "large"
        })]
      }), (0, s.jsx)("div", {
        className: h.textContainer,
        children: n
      }), !H && (0, s.jsx)("div", {
        className: h.footer,
        children: (0, s.jsx)(r.z, {
          variant: "expressive",
          fullWidth: true,
          text: i,
          onClick: M
        })
      })]
    })
  }