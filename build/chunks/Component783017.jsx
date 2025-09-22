/** Chunk was on 84992 **/
/** chunk id: 783017, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk526167 = require("./526167.js"),
  Chunk741245 = require("./741245.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk127290 = require("./127290.js"),
  Chunk667325 = require("./667325.js"),
  Chunk552039 = require("./552039.js"),
  Chunk445161 = require("./445161.js");
let x = t => {
  let {
    type: e,
    text: n,
    buttonText: i,
    buttonLoading: x,
    hideClose: N,
    onClose: f
  } = t, p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), T = (0, a.e7)([L.default], () => {
    let t = L.default.getCurrentUser();
    return l()(null != t, "UserSettingsProfileCustomization: user cannot be undefined"), t
  }), E = (0, o.rO)() ? m.Z : Z.Z, I = (t => {
    switch (t) {
      case H.Yk.PREMIUM_UPDATED:
        return M.intl.string(M.t["75Wt0N"]);
      case H.Yk.PREMIUM_ACTIVATED:
        return M.intl.string(M.t.QWljxM);
      default:
        return M.intl.string(M.t.X79Az8)
    }
  })(e);
  return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsx)(C.X6q, {
      className: h.header,
      variant: "display-md",
      color: "header-primary",
      children: I
    }), (0, s.jsxs)("div", {
      className: h.nameplatePreviewContainer,
      children: [p ? (0, s.jsx)("img", {
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
          src: E
        })
      }), (0, s.jsx)(d.Z, {
        user: T,
        isHighlighted: true,
        nameplate: null,
        nameplateData: T.nameplate,
        className: h.nameplatePreview,
        nameplatePreviewSize: "large"
      })]
    }), (0, s.jsx)("div", {
      className: h.textContainer,
      children: n
    }), !N && (0, s.jsx)("div", {
      className: h.footer,
      children: (0, s.jsx)(r.zxk, {
        variant: "expressive",
        fullWidth: true,
        text: i,
        onClick: f,
        loading: x
      })
    })]
  })
}