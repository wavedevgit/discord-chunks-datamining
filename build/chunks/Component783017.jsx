/** Chunk was on 84992 **/
/** chunk id: 783017, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
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
  Chunk127290 = require("./127290.js"),
  Chunk667325 = require("./667325.js"),
  Chunk552039 = require("./552039.js"),
  Chunk445161 = require("./445161.js");
let x = e => {
  let {
    type: t,
    text: n,
    buttonText: i,
    hideClose: x,
    onClose: f
  } = e, p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), N = (0, a.e7)([o.default], () => {
    let e = o.default.getCurrentUser();
    return l()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  }), T = (0, L.rO)() ? m.Z : Z.Z, I = (e => {
    switch (e) {
      case H.Yk.PREMIUM_UPDATED:
        return M.intl.string(M.t["75Wt0N"]);
      case H.Yk.PREMIUM_ACTIVATED:
        return M.intl.string(M.t.QWljxM);
      default:
        return M.intl.string(M.t.X79Az8)
    }
  })(t);
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
          src: T
        })
      }), (0, s.jsx)(d.Z, {
        user: N,
        isHighlighted: true,
        nameplate: null,
        nameplateData: N.nameplate,
        className: h.nameplatePreview,
        nameplatePreviewSize: "large"
      })]
    }), (0, s.jsx)("div", {
      className: h.textContainer,
      children: n
    }), !x && (0, s.jsx)("div", {
      className: h.footer,
      children: (0, s.jsx)(r.z, {
        variant: "expressive",
        fullWidth: true,
        text: i,
        onClick: f
      })
    })]
  })
}