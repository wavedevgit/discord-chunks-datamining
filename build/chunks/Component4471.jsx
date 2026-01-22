/** Chunk was on 14704 **/
/** chunk id: 4471, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk676279 = require("./676279.js"),
  Chunk659746 = require("./659746.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk537671 = require("./537671.js"),
  Chunk42085 = require("./42085.js"),
  Chunk49402 = require("./49402.js"),
  Chunk27753 = require("./27753.js");
let m = e => {
  let {
    type: t,
    text: s,
    buttonText: n,
    buttonLoading: m,
    hideClose: A,
    onClose: E
  } = e, f = (0, a.bG)([c.A], () => c.A.useReducedMotion), _ = (0, a.bG)([u.default], () => {
    let e = u.default.getCurrentUser();
    return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  }), x = (0, H.TM)() ? p.A : h.A, I = (e => {
    switch (e) {
      case o.Or.PREMIUM_UPDATED:
        return M.intl.string(M.t["75Wt0E"]);
      case o.Or.PREMIUM_ACTIVATED:
        return M.intl.string(M.t.QWljxE);
      default:
        return M.intl.string(M.t.X79Az5)
    }
  })(t);
  return (0, l.jsxs)("div", {
    className: g.kL,
    children: [(0, l.jsx)(C.Heading, {
      className: g.wx,
      variant: "display-md",
      color: "text-strong",
      children: I
    }), (0, l.jsxs)("div", {
      className: g.Dz,
      children: [f ? (0, l.jsx)("img", {
        src: N.A,
        alt: "",
        className: g.d9
      }) : (0, l.jsx)(d.A, {
        playsInline: true,
        muted: true,
        autoPlay: true,
        loop: true,
        className: g.d9,
        children: (0, l.jsx)("source", {
          src: x
        })
      }), (0, l.jsx)(L.A, {
        user: _,
        isHighlighted: true,
        nameplate: null,
        nameplateData: _.nameplate,
        className: g.M4,
        nameplatePreviewSize: "large"
      })]
    }), (0, l.jsx)("div", {
      className: g.FS,
      children: s
    }), !A && (0, l.jsx)("div", {
      className: g.qr,
      children: (0, l.jsx)(r.$nd, {
        variant: "expressive",
        fullWidth: true,
        text: n,
        onClick: E,
        loading: m
      })
    })]
  })
}