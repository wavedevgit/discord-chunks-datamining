/** Chunk was on web.js **/
/** chunk id: 823453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk131271 = require("./131271.js"),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk316792 = require("./316792.js"),
  Chunk999203 = require("./999203.js"),
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
  } = (0, _.vP)(), s = (0, l.TH)(), u = i.useMemo(() => E.has(s.pathname), [s.pathname]);
  (0, h.Z)(window, u);
  let d = (0, c.e7)([f.Z, p.Z], () => p.Z.getWindowOpen(g.KJ3.DEVTOOLS_POPOUT) ? 0 : f.Z.sidebarWidth);
  return (0, r.jsx)("html", {
    lang: t,
    style: "".concat(n, " --devtools-sidebar-width: ").concat(d, "px;"),
    className: o()(a, e, {
      overlay: __OVERLAY__
    })
  })
}

function y() {
  let [e, t] = Chunk473749.useState([]);
  return Chunk473749.useEffect(() => {
    Promise.all(Chunk316792.L.map(e => n(959598)("./".concat(e, ".woff2")).then(e => {
      let {
        default: t
      } = e;
      return t
    }))).then(e => t(e))
  }, []), (0, Chunk54381.jsx)(Chunk54381.Fragment, {
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
  (0, m.ZD)({
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
let v = Chunk473749.memo(O)