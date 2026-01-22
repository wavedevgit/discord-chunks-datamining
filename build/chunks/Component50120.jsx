/** Chunk was on 95153 **/
/** chunk id: 50120, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
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
let L = (0, Chunk358367.A)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n,
    onInteraction: o
  } = e, [c, L] = l.useState(false), T = (0, h.A)(), I = (0, P.A)(), w = (0, f.A)(), C = (0, y.A)(), N = (0, j.A)(), m = (0, A.A)(), R = (0, v.A)(), V = (0, _.A)(), k = (0, S.A)(), {
    analyticsLocations: M
  } = (0, u.Ay)(), U = l.useMemo(() => (0, g.H)(), []);
  async function G() {
    try {
      L(true), await (0, d.iD)(), window.location.reload(true)
    } catch (e) {
      L(false)
    }
  }
  let H = (0, b.t0)("UserSettingsCogContextMenu"),
    X = (0, E.getWebUserSettingsByUserSettingsSections)(),
    B = (0, O.Lu)(),
    F = l.useMemo(() => {
      let e = [];
      if (B.forEach(t => {
          let {
            section: n,
            predicate: i
          } = t;
          n !== s.Fq.HEADER && n !== s.Fq.CUSTOM && n !== s.Fq.DIVIDER && "logout" !== n && (null == i || i()) && null != X.get(n) && (n === x.nc_.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t))
        }), H) {
        let t = e.findIndex(e => e.section === x.nc_.NOTIFICATIONS),
          n = e.findIndex(e => e.section === x.nc_.CONNECTIONS);
        if (false !== t && false !== n && t > n) {
          let [i] = e.splice(t, 1);
          e.splice(n + 1, 0, i)
        }
      }
      return e
    }, [B, X, H]);
  return (0, i.jsx)(u.f5, {
    value: M,
    children: (0, i.jsxs)(r.W1t, {
      navId: "user-settings-cog",
      onClose: a.Z_,
      "aria-label": D.intl.string(D.t.opYYHn),
      onSelect: n,
      onInteraction: o,
      children: [F.map(e => {
        var t, n;
        let {
          section: l,
          label: a,
          onClick: s
        } = e, o = l.replace(/\W/gi, "_");
        return (0, i.jsx)(r.Drp, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          id: o
        }, {
          label: a,
          action: () => {
            var e, t;
            let n;
            return null != s ? s() : (t = null != (e = X.get(l)) ? e : p.X.ACCOUNT_PANEL, void(null != (n = Object.values(x.nc_).filter(e => e === l)[0]) && (0, E.openUserSettings)(t, {
              section: n,
              analyticsLocations: M
            })))
          }
        }), n = n = {
          children: (e => {
            switch (e) {
              case x.nc_.GAMES:
                return T;
              case x.nc_.STREAMER_MODE:
                return I;
              case x.nc_.APPEARANCE:
                return w;
              case x.nc_.ACCESSIBILITY:
                return C;
              case x.nc_.VOICE:
                return N;
              case x.nc_.TEXT:
                return m;
              case x.nc_.EXPERIMENTS:
                return R;
              case x.nc_.DEVELOPER_OPTIONS:
                return V;
              default:
                return null
            }
          })(l)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), o)
      }), e.user.isStaff() && k, e.user.isStaff() && U.length > 0 ? (0, i.jsx)(r.Drp, {
        label: "Build Overrides",
        id: "build_overrides",
        children: (0, i.jsx)(r.rXV, {
          children: U.map(e => (0, i.jsx)(r.iDA, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? true : t.id) === e.id,
            action: async () => {
              (null == t ? true : t.id) === e.id || 200 === (await (0, d.oA)(e.payload)).status && window.location.reload(true)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, i.jsx)(r.rXV, {
        children: (0, i.jsx)(r.Drp, {
          id: "clear-build-override",
          disabled: c,
          label: D.intl.string(D.t["/Nz9rY"]),
          action: G,
          color: "danger"
        })
      }) : null]
    })
  })
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.USER_SETTINGS_MENU])