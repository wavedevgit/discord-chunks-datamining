/** Chunk was on web.js **/
/** chunk id: 823453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk352206 = require("./352206.js"),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk316792 = require("./316792.js"),
  Chunk168551 = require("./168551.js"),
  Chunk19759 = require("./19759.js"),
  Chunk522474 = require("./522474.js"),
  Chunk892071 = require("./892071.jsx"),
  Chunk252618 = require("./252618.js"),
  Chunk587061 = require("./587061.js"),
  Chunk981631 = require("./981631.js");
require("./736478.js");
let E = new Set([Chunk981631.Z5c.LOGIN, Chunk981631.Z5c.REGISTER]);

function b(e) {
  let {
    lang: t,
    style: n,
    className: a
  } = (0, p.vP)(), s = (0, l.TH)(), u = i.useMemo(() => E.has(s.pathname), [s.pathname]);
  (0, m.Z)(window, u);
  let d = (0, c.e7)([f.Z, _.Z], () => _.Z.getWindowOpen(g.KJ3.DEVTOOLS_POPOUT) ? 0 : f.Z.sidebarWidth);
  return (0, r.jsx)("html", {
    lang: t,
    style: "".concat(n, " --devtools-sidebar-width: ").concat(d, "px;"),
    className: o()(a, e, {
      overlay: __OVERLAY__
    })
  })
}

function y() {
  let [e, t] = Chunk647438.useState([]);
  return Chunk647438.useEffect(() => {
    Promise.all(Chunk316792.L.map(e => n(959598)("./".concat(e, ".woff2")).then(e => {
      let {
        default: t
      } = e;
      return t
    }))).then(e => t(e))
  }, []), (0, Chunk951288.jsx)(Chunk951288.Fragment, {
    children: module.map((e, t) => (0, r.jsx)("link", {
      rel: "preload",
      href: e,
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    }, t))
  })
}

function O(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: n
  } = e;
  (0, h.ZD)({
    skipsSettingDefaultPageTitle: n
  });
  let {
    clientThemesClassName: a,
    clientThemesCSS: o
  } = (0, d.ZP)(), l = i.createElement("style", {
    [d.PQ]: true
  }, o);
  return (0, r.jsxs)(s.ql, {
    children: [b(a), y(), l, t]
  })
}
let v = Chunk647438.memo(O)