/** Chunk was on 1113 **/
/** chunk id: 246884, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk272613 = require("./272613.js"),
  Chunk398884 = require("./398884.js"),
  Chunk772366 = require("./772366.jsx"),
  Chunk728321 = require("./728321.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk531053 = require("./531053.jsx"),
  Chunk606256 = require("./606256.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk819638 = require("./819638.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk283237 = require("./283237.js");
let x = {
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

function j(e) {
  (0, a.L3)(e, async () => {
    let {
      default: e
    } = await n.e("17288").then(n.bind(n, 4571));
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

function v(e) {
  let {
    disableTooltip: t,
    lastTargetNode: n
  } = e, a = (0, i.yK)([g.A], () => g.A.getGuildsArray()), v = (0, i.bG)([f.default], () => f.default.getCurrentUser()), E = l.useMemo(() => a.some(e => (0, p.bM)(e, v)), [a, v]), C = (0, s.red)(e => (0, s.fDT)(e, y.fc)), {
    analyticsLocations: S
  } = (0, o.Ay)(), I = (0, r.jsx)(b.A, {
    showPill: false,
    id: "create-join-button",
    onClick: () => {
      (0, u.Sn)() ? (0, d.A)({
        analyticsSource: {
          page: A.ThZ.CREATE_JOIN_GUILD_MODAL
        },
        analyticsLocation: {
          page: A.ThZ.CREATE_JOIN_GUILD_MODAL,
          section: A.JJy.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: S
      }) : c.A.openCreateGuildModal({
        location: "Guild List"
      })
    },
    selected: C,
    onContextMenu: j,
    tooltip: O.intl.string(O.t.l5WIbf),
    icon: s.U1e
  });
  return t ? I : (0, r.jsx)("div", {
    className: _.Uq,
    children: (0, r.jsxs)(h.A, {
      tutorialId: E ? "create-more-servers" : "create-first-server",
      inlineSpecs: x,
      position: "right",
      children: [I, null != n && (0, r.jsx)(m.Ay, {
        name: O.intl.string(O.t["45xjM5"]),
        targetNode: n,
        below: true,
        noCombine: true
      })]
    })
  })
}