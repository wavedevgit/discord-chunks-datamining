/** Chunk was on 84992 **/
/** chunk id: 783017, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
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
  Chunk353516 = require("./353516.js"),
  Chunk530641 = require("./530641.js"),
  Chunk491567 = require("./491567.js"),
  Chunk419698 = require("./419698.js");
let m = t => {
  let {
    type: e,
    text: n,
    buttonText: s,
    buttonLoading: m,
    hideClose: N,
    onClose: f
  } = t, x = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), E = (0, a.e7)([u.default], () => {
    let t = u.default.getCurrentUser();
    return i()(null != t, "UserSettingsProfileCustomization: user cannot be undefined"), t
  }), _ = (0, L.rO)() ? Z.Z : g.Z, I = (t => {
    switch (t) {
      case H.Yk.PREMIUM_UPDATED:
        return M.intl.string(M.t["75Wt0E"]);
      case H.Yk.PREMIUM_ACTIVATED:
        return M.intl.string(M.t.QWljxE);
      default:
        return M.intl.string(M.t.X79Az5)
    }
  })(e);
  return (0, l.jsxs)("div", {
    className: h.container,
    children: [(0, l.jsx)(C.Heading, {
      className: h.header,
      variant: "display-md",
      color: "text-strong",
      children: I
    }), (0, l.jsxs)("div", {
      className: h.nameplatePreviewContainer,
      children: [x ? (0, l.jsx)("img", {
        src: p.Z,
        alt: "",
        className: h.nameplateGlow
      }) : (0, l.jsx)(d.Z, {
        playsInline: true,
        muted: true,
        autoPlay: true,
        loop: true,
        className: h.nameplateGlow,
        children: (0, l.jsx)("source", {
          src: _
        })
      }), (0, l.jsx)(o.Z, {
        user: E,
        isHighlighted: true,
        nameplate: null,
        nameplateData: E.nameplate,
        className: h.nameplatePreview,
        nameplatePreviewSize: "large"
      })]
    }), (0, l.jsx)("div", {
      className: h.textContainer,
      children: n
    }), !N && (0, l.jsx)("div", {
      className: h.footer,
      children: (0, l.jsx)(r.zxk, {
        variant: "expressive",
        fullWidth: true,
        text: s,
        onClick: f,
        loading: m
      })
    })]
  })
}