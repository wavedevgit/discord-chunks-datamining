/** Chunk was on 21738 **/
/** chunk id: 217549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk956793 = require("./956793.js"),
  Chunk573648 = require("./573648.js"),
  Chunk833349 = require("./833349.js"),
  Chunk765379 = require("./765379.js"),
  Chunk61330 = require("./61330.js"),
  Chunk15285 = require("./15285.js"),
  Chunk651743 = require("./651743.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk962173 = require("./962173.js"),
  Chunk134861 = require("./134861.js"),
  Chunk189081 = require("./189081.js"),
  Chunk194871 = require("./194871.js"),
  Chunk954571 = require("./954571.js"),
  Chunk144914 = require("./144914.js"),
  Chunk715671 = require("./715671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function C(e) {
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
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = Chunk573648.A.get(Chunk652215.fg2.XBOX).name;

function j(e) {
  let {
    currentActivities: t
  } = e, n = t.length > 1, j = function(e) {
    let {
      currentActivities: t
    } = e, n = (0, l.bG)([A.A], () => A.A.getAccounts().some(e => e.type === c.A.get(v.fg2.XBOX).type)), i = t.some(e => {
      let {
        activity: t
      } = e;
      return (0, p.A)(t)
    });
    return n || !i ? null : (0, r.jsx)(a.Drp, {
      id: "xbox-connect",
      action: () => (0, f.openUserSettings)(m.X.CONNECTIONS_PANEL, {
        section: v.nc_.CONNECTIONS
      }),
      label: S.intl.formatToPlainString(S.t.XWSHTb, {
        platform: T
      })
    })
  }(e), x = function(e) {
    let {
      currentActivities: t
    } = e, n = i.useContext(O.AnalyticsContext);
    return (0, l.yK)([h.Ay, b.A, g.A, E.A, _.A], () => t.filter(e => !(0, d.A)(e.activity)).map(e => {
      let {
        activity: t,
        game: r
      } = e, i = b.A.getActiveLibraryApplication(r.id);
      return N(C({}, e), {
        libraryApplication: i,
        canJoin: null != t && (0, u.A)(t, v.jUm.JOIN) && t.type === v.$pd.PLAYING,
        canPlay: (0, y.A)({
          LibraryApplicationStore: b.A,
          LaunchableGameStore: g.A,
          DispatchApplicationStore: E.A,
          ConnectedAppsStore: _.A,
          applicationId: r.id,
          branchId: null != i ? i.branchId : null
        }),
        isLaunching: g.A.launchingGames.has(r.id),
        isRunning: h.Ay.getRunningVerifiedApplicationIds().includes(r.id),
        location: n.location
      })
    }), [n.location, t])
  }(e), P = [];
  for (let e of x) {
    let {
      activity: t
    } = e;
    null != t && null != t.type && P.push(function(e, t) {
      let {
        canJoin: n,
        activity: i,
        activityUser: l
      } = e;
      if (!n || null == i) return null;
      async function c() {
        if (null == i) return;
        let e = await s.A.sendActivityInviteUser({
          type: v.xL.JOIN_REQUEST,
          userId: l.id,
          activity: i,
          location: v.ThZ.USER_ACTIVITY_ACTIONS
        });
        null != e && o.default.selectPrivateChannel(e.id)
      }
      return (0, r.jsx)(a.Drp, {
        id: "join-".concat(i.session_id),
        label: t ? S.intl.formatToPlainString(S.t.wFAvxM, {
          name: l.toString()
        }) : S.intl.string(S.t.OKsSCR),
        action: c
      })
    }(e, n), function(e, t) {
      let {
        activity: n,
        game: i,
        libraryApplication: l,
        location: s,
        canPlay: o,
        isRunning: c,
        isLaunching: u
      } = e;
      if (!o || null == n) return null;
      let d = c ? S.intl.formatToPlainString(S.t["gBme/4"], {
        name: i.name
      }) : u ? S.intl.formatToPlainString(S.t.WtSQwG, {
        name: i.name
      }) : true;
      return (0, r.jsx)(a.Drp, {
        id: "play-".concat(n.session_id),
        action: function() {
          (0, I.playApplication)(i.id, l, {
            analyticsParams: {
              location: N(C({}, s), {
                object: v.ZSU.LIST_ITEM
              })
            }
          })
        },
        label: t ? S.intl.formatToPlainString(S.t.ZDZEJN, {
          name: i.name
        }) : S.intl.string(S.t.XKUw8m),
        subtext: d
      })
    }(e, n))
  }
  return [j, ...P]
}