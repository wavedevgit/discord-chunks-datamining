/** Chunk was on web.js **/
/** chunk id: 663413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk422998 = require("./422998.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk49621 = require("./49621.js"),
  Chunk590703 = require("./590703.js"),
  Chunk265059 = require("./265059.js"),
  Chunk87001 = require("./87001.js"),
  Chunk611635 = require("./611635.jsx"),
  Chunk726249 = require("./726249.js"),
  Chunk203480 = require("./203480.js"),
  Chunk652215 = require("./652215.js");
let E = new Set([Chunk652215.BVt.LOGIN, Chunk652215.BVt.REGISTER]);

function y(e) {
  let {
    lang: t,
    style: n,
    className: a
  } = (0, _.xb)(), o = (0, l.zy)(), u = i.useMemo(() => E.has(o.pathname), [o.pathname]);
  (0, m.A)(window, u);
  let d = (0, c.bG)([f.A, p.A], () => p.A.getWindowOpen(g.MLl.DEVTOOLS_POPOUT) ? 0 : f.A.sidebarWidth);
  return (0, r.jsx)("html", {
    lang: t,
    style: "".concat(n, " --devtools-sidebar-width: ").concat(d, "px;"),
    className: s()(a, e, {
      overlay: __OVERLAY__
    })
  })
}

function b() {
  let [e, t] = i.useState([]);
  return i.useEffect(() => {
    Promise.all(u.x.map(e => n(907790)("./".concat(e, ".woff2")).then(e => {
      let {
        default: t
      } = e;
      return t
    }))).then(e => t(e))
  }, []), (0, r.jsx)(r.Fragment, {
    children: e.map((e, t) => (0, r.jsx)("link", {
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
  (0, h.cu)({
    skipsSettingDefaultPageTitle: n
  });
  let {
    clientThemesClassName: a,
    clientThemesCSS: s
  } = (0, d.Ay)(), l = i.createElement("style", {
    [d.Vg]: true
  }, s);
  return (0, r.jsxs)(o.mg, {
    children: [y(a), b(), l, t]
  })
}
let v = Chunk64700.memo(O)