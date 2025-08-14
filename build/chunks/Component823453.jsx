/** Chunk was on web.js **/
/** chunk id: 823453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk446431 = require("./446431.js"),
  Chunk114858 = require("./114858.js"),
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
    className: o
  } = (0, p.vP)(), s = (0, l.TH)(), u = i.useMemo(() => E.has(s.pathname), [s.pathname]);
  (0, m.Z)(window, u);
  let d = (0, c.e7)([f.Z, _.Z], () => _.Z.getWindowOpen(g.KJ3.DEVTOOLS_POPOUT) ? 0 : f.Z.sidebarWidth);
  return (0, r.jsx)("html", {
    lang: t,
    style: "".concat(n, " --devtools-sidebar-width: ").concat(d, "px;"),
    className: a()(o, e, {
      overlay: __OVERLAY__
    })
  })
}

function y() {
  let [e, t] = Chunk73800.useState([]);
  return Chunk73800.useEffect(() => {
    Promise.all(Chunk316792.L.map(e => n(959598)("./".concat(e, ".woff2")).then(e => {
      let {
        default: t
      } = e;
      return t
    }))).then(e => t(e))
  }, []), (0, Chunk255367.jsx)(Chunk255367.Fragment, {
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
    clientThemesClassName: o,
    clientThemesCSS: a
  } = (0, d.ZP)(), l = i.createElement("style", {
    [d.PQ]: true
  }, a);
  return (0, r.jsxs)(s.ql, {
    children: [b(o), y(), l, t]
  })
}
let v = Chunk73800.memo(O)