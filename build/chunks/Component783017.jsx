/** Chunk was on 84992 **/
/** chunk id: 783017, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk202267 = require("./202267.js"),
  Chunk667325 = require("./667325.js"),
  Chunk552039 = require("./552039.js"),
  Chunk445161 = require("./445161.js");
let p = t => {
  let {
    type: e,
    text: n,
    buttonText: i,
    buttonLoading: p,
    hideClose: x,
    onClose: f
  } = t, N = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), T = (0, a.e7)([o.default], () => {
    let t = o.default.getCurrentUser();
    return s()(null != t, "UserSettingsProfileCustomization: user cannot be undefined"), t
  }), I = (0, L.rO)() ? m.Z : Z.Z, E = (t => {
    switch (t) {
      case H.Yk.PREMIUM_UPDATED:
        return M.intl.string(M.t["75Wt0N"]);
      case H.Yk.PREMIUM_ACTIVATED:
        return M.intl.string(M.t.QWljxM);
      default:
        return M.intl.string(M.t.X79Az8)
    }
  })(e);
  return (0, l.jsxs)("div", {
    className: h.container,
    children: [(0, l.jsx)(C.X6q, {
      className: h.header,
      variant: "display-md",
      color: "header-primary",
      children: E
    }), (0, l.jsxs)("div", {
      className: h.nameplatePreviewContainer,
      children: [N ? (0, l.jsx)("img", {
        src: g.Z,
        alt: "",
        className: h.nameplateGlow
      }) : (0, l.jsx)(u.Z, {
        playsInline: true,
        muted: true,
        autoPlay: true,
        loop: true,
        className: h.nameplateGlow,
        children: (0, l.jsx)("source", {
          src: I
        })
      }), (0, l.jsx)(d.Z, {
        user: T,
        isHighlighted: true,
        nameplate: null,
        nameplateData: T.nameplate,
        className: h.nameplatePreview,
        nameplatePreviewSize: "large"
      })]
    }), (0, l.jsx)("div", {
      className: h.textContainer,
      children: n
    }), !x && (0, l.jsx)("div", {
      className: h.footer,
      children: (0, l.jsx)(r.z, {
        variant: "expressive",
        fullWidth: true,
        text: i,
        onClick: f,
        loading: p
      })
    })]
  })
}