/** Chunk was on 96750 **/
/** chunk id: 850827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk730749 = require("./730749.jsx"),
  Chunk726542 = require("./726542.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk750154 = require("./750154.js"),
  Chunk892001 = require("./892001.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk387903 = require("./387903.jsx"),
  Chunk606925 = require("./606925.jsx"),
  Chunk719216 = require("./719216.jsx"),
  Chunk429589 = require("./429589.jsx"),
  Chunk276149 = require("./276149.jsx"),
  Chunk636245 = require("./636245.jsx"),
  Chunk697761 = require("./697761.jsx"),
  Chunk611459 = require("./611459.jsx"),
  Chunk544671 = require("./544671.jsx"),
  Chunk757182 = require("./757182.jsx"),
  Chunk910424 = require("./910424.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk477839 = require("./477839.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk511479 = require("./511479.js"),
  Chunk964719 = require("./964719.js");
let R = e => {
    let {
      user: t,
      color: n,
      look: i,
      activity: l,
      onAction: a
    } = e, o = (0, f.Aq)();
    return (0, r.jsx)(x.Z, {
      user: t,
      color: n,
      look: i,
      activity: l,
      onAction: () => {
        o.dispatch(Z.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == a || a()
      }
    }, "custom-activity-button")
  },
  V = (0, Chunk730749.Z)(e => {
    let {
      activity: t,
      embeddedActivity: n,
      user: i,
      applicationStream: a,
      className: u,
      guildId: f,
      channelId: g,
      source: V,
      color: F = c.zx.Colors.WHITE,
      look: G = c.zx.Looks.OUTLINED,
      type: B,
      onAction: W
    } = e, H = (0, s.e7)([b.default], () => {
      let e = b.default.getCurrentUser();
      return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
    }), Y = B === I.Y.STREAM_PREVIEW || null != a, z = (0, O.Z)(t), J = z || Y ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL, K = (null == t ? true : t.type) === Z.IIU.HANG_STATUS, q = (0, s.e7)([v.Z, h.Z], () => {
      var e;
      return K ? h.Z.getChannel(null == (e = v.Z.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
    });
    if ((null == t ? true : t.application_id) === L.bO) {
      var X, Q;
      return X = function(e) {
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
      }({}, t), Q = Q = {
        buttons: [M.intl.string(k.default["Fv/2Oz"])],
        metadata: {
          button_urls: [L.U8]
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(Q)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(Q)).forEach(function(e) {
        Object.defineProperty(X, e, Object.getOwnPropertyDescriptor(Q, e))
      }), t = X, (0, r.jsx)(R, {
        user: i,
        color: F,
        look: G,
        activity: t,
        onAction: W
      })
    }
    let $ = J === p.Z.Direction.VERTICAL;
    return (0, r.jsx)(p.Z, {
      grow: 0,
      align: p.Z.Align.STRETCH,
      direction: J,
      wrap: $ ? p.Z.Wrap.WRAP : p.Z.Wrap.NO_WRAP,
      className: l()(u, U.buttonsWrapper, $ ? U.vertical : U.horizontal),
      children: (() => {
        if ((0, S.Z)(t)) return (0, r.jsx)(j.Z, {
          platform: d.Z.get(Z.ABu.XBOX),
          look: G,
          color: F,
          onAction: W,
          Icon: y.Z
        }, "ConnectPlatformActivityButton");
        if ((null == t ? true : t.platform) === Z.M7m.PS4 || (null == t ? true : t.platform) === Z.M7m.PS5) return (0, r.jsx)(j.Z, {
          look: G,
          color: F,
          platform: d.Z.get(Z.ABu.PLAYSTATION),
          onAction: W,
          Icon: _.Z
        }, "ConnectPlatformActivityButton");
        if (z) {
          let e = (0, r.jsx)(A.Z, {
              activity: t,
              user: i,
              guildId: f,
              channelId: g,
              source: V,
              look: G,
              color: F,
              onAction: W
            }, "spotify-activity-sync-button"),
            n = (0, r.jsx)(N.Z, {
              activity: t,
              user: i,
              source: V,
              look: G,
              color: F,
              onAction: W
            }, "spotify-activity-play-button");
          return (0, r.jsxs)(r.Fragment, {
            children: [n, e]
          })
        }
        if ((0, m.dS)(t)) {
          let e = (0, m.rq)(t);
          return null == e ? null : (0, r.jsx)(C.Z, {
            guildId: e.guildId,
            channelId: e.channelId,
            color: F,
            look: G,
            onAction: W
          }, e.channelId)
        }
        return Y ? (0, r.jsx)(D.Z, {
          isCurrentUser: H.id === i.id,
          color: F,
          look: G,
          applicationStream: a,
          onAction: W
        }, "watch-button") : K && null != q ? (0, r.jsx)(P.Z, {
          color: F,
          look: G,
          hangStatusChannel: q,
          onAction: W
        }, "hang-status-button") : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(w.Z, {
            activity: t,
            color: F,
            look: G,
            onAction: W
          }, "watch-button"), (0, r.jsx)(E.Z, {
            activity: t,
            embeddedActivity: n,
            user: i,
            color: F,
            look: G,
            onAction: W
          }, "join-activity-button"), (0, r.jsx)(T.Z, {
            activity: t,
            user: i,
            color: F,
            look: G,
            onAction: W
          }, "notify-button"), (0, r.jsx)(x.Z, {
            user: i,
            color: F,
            look: G,
            activity: t,
            onAction: W
          }, "custom-activity-button")]
        })
      })()
    })
  })