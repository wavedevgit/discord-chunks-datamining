/** Chunk was on 95153 **/
/** chunk id: 50120, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => D
}), require("./896048.js"), require("./667532.js"), require("./321073.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk148810 = require("./148810.js"),
  Chunk390486 = require("./390486.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk360619 = require("./360619.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk380450 = require("./380450.jsx"),
  Chunk227542 = require("./227542.jsx"),
  Chunk84654 = require("./84654.jsx"),
  Chunk8086 = require("./8086.jsx"),
  Chunk616621 = require("./616621.jsx"),
  Chunk264124 = require("./264124.jsx"),
  Chunk850060 = require("./850060.jsx"),
  Chunk235661 = require("./235661.jsx"),
  Chunk466410 = require("./466410.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let D = (0, Chunk358367.A)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n,
    onInteraction: c
  } = e, [s, D] = i.useState(false), _ = (0, h.A)(), m = (0, j.A)(), T = (0, v.A)(), I = (0, f.A)(), L = (0, P.A)(), N = (0, S.A)(), k = (0, E.A)(), R = (0, x.A)(), V = (0, A.A)(), {
    analyticsLocations: M
  } = (0, d.Ay)(), U = i.useMemo(() => (0, g.H)(), []);
  async function G() {
    try {
      D(true), await (0, u.iD)(), window.location.reload(true)
    } catch (e) {
      D(false)
    }
  }
  let X = (0, b.t0)("UserSettingsCogContextMenu"),
    H = (0, O.getWebUserSettingsByUserSettingsSections)(),
    F = (0, y.Lu)(),
    Y = i.useMemo(() => {
      let e = [];
      F.forEach(t => {
        let {
          section: n,
          predicate: r
        } = t;
        n !== o.Fq.HEADER && n !== o.Fq.CUSTOM && n !== o.Fq.DIVIDER && "logout" !== n && (null == r || r()) && null != H.get(n) && (n === w.nc_.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t))
      });
      let t = e.findIndex(e => e.section === w.nc_.ADVANCED);
      if (false !== t && e.splice(t, 0, {
          section: w.nc_.STREAMER_MODE,
          label: C.intl.string(C.t.S5GfOW)
        }), X) {
        let t = e.findIndex(e => e.section === w.nc_.NOTIFICATIONS),
          n = e.findIndex(e => e.section === w.nc_.CONNECTIONS);
        if (false !== t && false !== n && t > n) {
          let [r] = e.splice(t, 1);
          e.splice(n + 1, 0, r)
        }
      }
      return e
    }, [F, H, X]);
  return (0, r.jsx)(d.f5, {
    value: M,
    children: (0, r.jsxs)(l.W1t, {
      "data-menu-migration-ready": true,
      navId: "user-settings-cog",
      onClose: a.Z_,
      "aria-label": C.intl.string(C.t.opYYHn),
      onSelect: n,
      onInteraction: c,
      children: [Y.map(e => {
        var t, n;
        let {
          section: i,
          label: a,
          onClick: o
        } = e, c = i.replace(/\W/gi, "_");
        return (0, r.jsx)(l.Drp, (t = function(e) {
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
        }({
          id: c
        }, {
          void_label: a,
          action: () => {
            var e, t;
            let n;
            return null != o ? o() : (t = null != (e = H.get(i)) ? e : p.X.ACCOUNT_PANEL, void(null != (n = Object.values(w.nc_).filter(e => e === i)[0]) && (0, O.openUserSettings)(t, {
              section: n,
              analyticsLocations: M
            })))
          }
        }), n = n = {
          children: (e => {
            switch (e) {
              case w.nc_.GAMES:
                return _;
              case w.nc_.STREAMER_MODE:
                return m;
              case w.nc_.APPEARANCE:
                return T;
              case w.nc_.ACCESSIBILITY:
                return I;
              case w.nc_.VOICE:
                return L;
              case w.nc_.TEXT:
                return N;
              case w.nc_.EXPERIMENTS:
                return k;
              case w.nc_.DEVELOPER_OPTIONS:
                return R;
              default:
                return null
            }
          })(i)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), c)
      }), e.user.isStaff() && V, e.user.isStaff() && U.length > 0 ? (0, r.jsx)(l.Drp, {
        label: "Build Overrides",
        id: "build_overrides",
        children: (0, r.jsx)(l.rXV, {
          children: U.map(e => (0, r.jsx)(l.iDA, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? true : t.id) === e.id,
            action: async () => {
              (null == t ? true : t.id) === e.id || 200 === (await (0, u.oA)(e.payload)).status && window.location.reload(true)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, r.jsx)(l.rXV, {
        children: (0, r.jsx)(l.Drp, {
          id: "clear-build-override",
          disabled: s,
          label: C.intl.string(C.t["/Nz9rY"]),
          action: G,
          color: "danger"
        })
      }) : null]
    })
  })
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.USER_SETTINGS_MENU])