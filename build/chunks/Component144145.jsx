/** Chunk was on 1272 **/
/** chunk id: 144145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk287734 = require("./287734.js"),
  Chunk230711 = require("./230711.js"),
  Chunk726542 = require("./726542.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk802856 = require("./802856.js"),
  Chunk594190 = require("./594190.js"),
  Chunk592745 = require("./592745.js"),
  Chunk553795 = require("./553795.js"),
  Chunk757266 = require("./757266.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk626135 = require("./626135.js"),
  Chunk804739 = require("./804739.js"),
  Chunk346329 = require("./346329.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function S(e) {
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
let T = Chunk726542.Z.get(Chunk981631.ABu.XBOX).name;

function j(e) {
  let {
    currentActivities: t
  } = e, n = t.length > 1, j = function(e) {
    let {
      currentActivities: t
    } = e, n = (0, l.e7)([m.Z], () => m.Z.getAccounts().some(e => e.type === u.Z.get(I.ABu.XBOX).type)), i = t.some(e => {
      let {
        activity: t
      } = e;
      return (0, f.Z)(t)
    });
    return n || !i ? null : (0, r.jsx)(a.sNh, {
      id: "xbox-connect",
      action: () => c.Z.open(I.oAB.CONNECTIONS),
      label: C.intl.formatToPlainString(C.t.XWSHTU, {
        platform: T
      })
    })
  }(e), P = function(e) {
    let {
      currentActivities: t
    } = e, n = i.useContext(E.AnalyticsContext);
    return (0, l.Wu)([h.ZP, _.Z, g.Z, O.Z, b.Z], () => t.filter(e => !(0, p.Z)(e.activity)).map(e => {
      let {
        activity: t,
        game: r
      } = e, i = _.Z.getActiveLibraryApplication(r.id);
      return N(S({}, e), {
        libraryApplication: i,
        canJoin: null != t && (0, d.Z)(t, I.xjy.JOIN) && t.type === I.IIU.PLAYING,
        canPlay: (0, y.t)({
          LibraryApplicationStore: _.Z,
          LaunchableGameStore: g.Z,
          DispatchApplicationStore: O.Z,
          ConnectedAppsStore: b.Z,
          applicationId: r.id,
          branchId: null != i ? i.branchId : null
        }),
        isLaunching: g.Z.launchingGames.has(r.id),
        isRunning: h.ZP.getRunningVerifiedApplicationIds().includes(r.id),
        location: n.location
      })
    }), [n.location, t])
  }(e), x = [];
  for (let e of P) {
    let {
      activity: t
    } = e;
    null != t && null != t.type && x.push(function(e, t) {
      let {
        canJoin: n,
        activity: i,
        activityUser: l
      } = e;
      if (!n || null == i) return null;
      async function c() {
        if (null == i) return;
        let e = await o.Z.sendActivityInviteUser({
          type: I.mFx.JOIN_REQUEST,
          userId: l.id,
          activity: i,
          location: I.Sbl.USER_ACTIVITY_ACTIONS
        });
        null != e && s.default.selectPrivateChannel(e.id)
      }
      return (0, r.jsx)(a.sNh, {
        id: "join-".concat(i.session_id),
        label: t ? C.intl.formatToPlainString(C.t.wFAvxM, {
          name: l.toString()
        }) : C.intl.string(C.t.OKsSCQ),
        action: c
      })
    }(e, n), function(e, t) {
      let {
        activity: n,
        game: i,
        libraryApplication: l,
        location: o,
        canPlay: s,
        isRunning: c,
        isLaunching: u
      } = e;
      if (!s || null == n) return null;
      let d = c ? C.intl.formatToPlainString(C.t["gBme//"], {
        name: i.name
      }) : u ? C.intl.formatToPlainString(C.t.WtSQwM, {
        name: i.name
      }) : true;
      return (0, r.jsx)(a.sNh, {
        id: "play-".concat(n.session_id),
        action: function() {
          (0, v.playApplication)(i.id, l, {
            analyticsParams: {
              location: N(S({}, o), {
                object: I.qAy.LIST_ITEM
              })
            }
          })
        },
        label: t ? C.intl.formatToPlainString(C.t.ZDZEJC, {
          name: i.name
        }) : C.intl.string(C.t.XKUw8v),
        subtext: d
      })
    }(e, n))
  }
  return [j, ...x]
}