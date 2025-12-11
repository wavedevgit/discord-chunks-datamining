/** Chunk was on 82477 **/
/** chunk id: 118122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk560067 = require("./560067.js"),
  Chunk451603 = require("./451603.js"),
  Chunk885714 = require("./885714.jsx"),
  Chunk155409 = require("./155409.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk40153 = require("./40153.jsx"),
  Chunk603592 = require("./603592.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk675999 = require("./675999.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105303 = require("./105303.js");
let C = {
  origin: {
    x: false,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function x(e) {
  (0, o.jW)(e, async () => {
    let {
      default: e
    } = await n.e("9606").then(n.bind(n, 987578));
    return t => (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, t))
  })
}

function E(e) {
  let {
    disableTooltip: t,
    lastTargetNode: n
  } = e, o = (0, l.Wu)([p.Z], () => p.Z.getGuildsArray()), E = (0, l.e7)([g.default], () => g.default.getCurrentUser()), S = i.useMemo(() => o.some(e => (0, h.eM)(e, E)), [o, E]), I = (0, a.s9z)(e => (0, a.DEQ)(e, O.PU)), {
    analyticsLocations: _
  } = (0, s.ZP)(), P = (0, r.jsx)(m.Z, {
    showPill: false,
    id: "create-join-button",
    onClick: () => {
      (0, u.yU)() ? (0, d.Z)({
        analyticsSource: {
          page: y.Sbl.CREATE_JOIN_GUILD_MODAL
        },
        analyticsLocation: {
          page: y.Sbl.CREATE_JOIN_GUILD_MODAL,
          section: y.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: _
      }) : c.Z.openCreateGuildModal({
        location: "Guild List"
      })
    },
    selected: I,
    onContextMenu: x,
    tooltip: v.intl.string(v.t.l5WIbf),
    icon: a.oFk
  });
  return t ? P : (0, r.jsx)("div", {
    className: j.tutorialContainer,
    children: (0, r.jsxs)(f.Z, {
      tutorialId: S ? "create-more-servers" : "create-first-server",
      inlineSpecs: C,
      position: "right",
      children: [P, null != n && (0, r.jsx)(b.ZP, {
        name: v.intl.string(v.t["45xjM5"]),
        targetNode: n,
        below: true,
        noCombine: true
      })]
    })
  })
}