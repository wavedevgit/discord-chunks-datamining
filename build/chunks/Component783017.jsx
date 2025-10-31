/** Chunk was on 84992 **/
/** chunk id: 783017, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk526167 = require("./526167.js"),
  Chunk741245 = require("./741245.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk127290 = require("./127290.js"),
  Chunk667325 = require("./667325.js"),
  Chunk552039 = require("./552039.js"),
  Chunk445161 = require("./445161.js");
let g = e => {
  let {
    type: t,
    text: n,
    buttonText: l,
    buttonLoading: g,
    hideClose: N,
    onClose: f
  } = e, x = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), E = (0, a.e7)([L.default], () => {
    let e = L.default.getCurrentUser();
    return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  }), _ = (0, o.rO)() ? Z.Z : p.Z, I = (e => {
    switch (e) {
      case H.Yk.PREMIUM_UPDATED:
        return M.intl.string(M.t["75Wt0E"]);
      case H.Yk.PREMIUM_ACTIVATED:
        return M.intl.string(M.t.QWljxE);
      default:
        return M.intl.string(M.t.X79Az5)
    }
  })(t);
  return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsx)(C.Heading, {
      className: h.header,
      variant: "display-md",
      color: "header-primary",
      children: I
    }), (0, s.jsxs)("div", {
      className: h.nameplatePreviewContainer,
      children: [x ? (0, s.jsx)("img", {
        src: m.Z,
        alt: "",
        className: h.nameplateGlow
      }) : (0, s.jsx)(d.Z, {
        playsInline: true,
        muted: true,
        autoPlay: true,
        loop: true,
        className: h.nameplateGlow,
        children: (0, s.jsx)("source", {
          src: _
        })
      }), (0, s.jsx)(u.Z, {
        user: E,
        isHighlighted: true,
        nameplate: null,
        nameplateData: E.nameplate,
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
        text: l,
        onClick: f,
        loading: g
      })
    })]
  })
}