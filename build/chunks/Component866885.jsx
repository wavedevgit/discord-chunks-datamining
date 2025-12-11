/** Chunk was on web.js **/
/** chunk id: 866885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk37234 = require("./37234.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk413523 = require("./413523.js"),
  Chunk358221 = require("./358221.js"),
  Chunk703656 = require("./703656.js"),
  Chunk607187 = require("./607187.jsx"),
  Chunk937995 = require("./937995.jsx"),
  Chunk366050 = require("./366050.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk531826 = require("./531826.js"),
  Chunk175894 = require("./175894.js"),
  Chunk963614 = require("./963614.js"),
  Chunk917107 = require("./917107.js"),
  Chunk208156 = require("./208156.jsx"),
  Chunk676526 = require("./676526.jsx"),
  Chunk701488 = require("./701488.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk326464 = require("./326464.js"),
  Chunk290953 = require("./290953.js"),
  Chunk533348 = require("./533348.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = F(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function V(e) {
  var t, n, a;
  let {
    channel: p,
    isLoading: _
  } = e, [A, G] = i.useState(false), Z = (0, s.e7)([T.ZP], () => T.ZP.getCurrentEmbeddedActivity()), B = null == Z ? true : Z.applicationId, F = (0, s.e7)([T.ZP], () => null != B && T.ZP.isProxyTicketRefreshing(B), [B]), V = (0, s.e7)([T.ZP], () => T.ZP.getActivityPanelMode()), H = (0, m.q)(B), Y = null == Z ? true : Z.launchId, W = (0, s.e7)([v.Z], () => v.Z.getChannelId() === (null == p ? true : p.id)), {
    dockedRect: K,
    isHidden: z
  } = (0, s.cj)([O.Z], () => {
    let e = O.Z.pipWindow;
    return {
      dockedRect: null != e ? O.Z.getDockedRect(e.id) : null,
      isHidden: O.Z.isEmbeddedActivityHidden()
    }
  }), q = (0, C.sU)({
    channelId: null == p ? true : p.id
  }), {
    activityParticipant: Q,
    selectedParticipant: X,
    participantsOpen: J
  } = (0, s.cj)([g.Z], () => ({
    activityParticipant: null != Z && null != p ? g.Z.getParticipant(p.id, (0, h.gN)({
      applicationId: Z.applicationId,
      instanceId: Z.compositeInstanceId
    })) : null,
    selectedParticipant: null != p ? g.Z.getSelectedParticipant(p.id) : null,
    participantsOpen: null != p && g.Z.getParticipantsOpen(p.id)
  })), $ = W || null != q, ee = (0, P.Z)(null == p ? true : p.id), et = ee && (null == X ? true : X.type) !== j.fO.ACTIVITY, en = !ee && V === x.Ez.PIP, er = $ && (et || en) && null == K, ei = (!$ || er) && !z, ea = ei && null != O.Z.pipVideoWindow && null != O.Z.pipActivityWindow;

  function eo() {
    if (null != p) {
      var e;
      null != Z && u.Z.selectParticipant(p.id, (0, h.gN)({
        applicationId: Z.applicationId,
        instanceId: Z.compositeInstanceId
      }));
      let t = null != (e = p.getGuildId()) ? e : L.ME;
      d.Z.channelListScrollTo(t, p.id), (0, E.XU)(t, p.id)
    }
    null == q && (0, f.Ou)()
  }

  function es() {
    G(!A)
  }

  function el(e) {
    var t;
    let {
      onActive: n,
      onForceIdle: i,
      idle: a,
      isActivityInTextChannel: o,
      users: s
    } = e;
    return ei && null != Z && ((null == Q ? true : Q.type) === j.fO.ACTIVITY || o) ? (null == (t = Z.config) ? true : t.useInteractivePIP) ? (0, r.jsx)(w.of, {
      onJumpToChannel: eo,
      applicationId: Z.applicationId,
      channel: p,
      showControls: !a,
      onMouseDown: n,
      onMouseMove: n,
      onMouseLeave: i,
      onToggleHeight: es,
      isExpanded: A,
      hideExpandedButton: o,
      embeddedActivity: Z
    }) : o ? (0, r.jsx)(w.q5, {
      idle: a,
      onMouseMove: n,
      onMouseDown: n,
      onMouseLeave: i,
      onJumpToChannel: () => {
        eo(), (0, I.tg)(x.Ez.PANEL)
      },
      channel: p,
      applicationId: Z.applicationId,
      users: s,
      embeddedActivity: Z
    }) : null == Q ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        onMouseMove: n,
        onMouseDown: n,
        onMouseLeave: i,
        className: M.clickShield,
        onDoubleClick: eo
      }), (0, r.jsx)(w.YB, {
        idle: a,
        onMouseMove: n,
        onMouseDown: n,
        onMouseLeave: i,
        onJumpToChannel: eo,
        channel: p,
        applicationId: Z.applicationId,
        selectedParticipant: Q,
        embeddedActivity: Z
      })]
    }) : null
  }
  if (i.useEffect(() => {
      if (null != B) {
        let e = ei ? D.cE.PIP : D.cE.FOCUSED;
        c.Z.dispatch({
          type: "ACTIVITY_LAYOUT_MODE_UPDATE",
          layoutMode: e,
          applicationId: B
        })
      }
    }, [B, ei]), null == Z || null == Y || (0, P.Z)(null == p ? true : p.id) && null == Q || null == H) return null;
  let ec = Array.from(Z.userIds).map(e => S.default.getUser(e)).filter(e => null != e),
    eu = {
      instance_id: null != (a = null != (n = Z.compositeInstanceId) ? n : Z.launchId) ? a : "",
      location_id: null == (t = Z.location) ? true : t.id,
      launch_id: Z.launchId,
      referrer_id: Z.referrerId,
      custom_id: Z.customId
    };
  return null != Z.proxyTicket && (eu.discord_proxy_ticket = Z.proxyTicket), (null == p ? true : p.guild_id) != null && (null == p ? true : p.guild_id) !== "" && (eu.guild_id = p.guild_id), (null == p ? true : p.id) != null && (null == p ? true : p.id) !== "" && (eu.channel_id = p.id), (0, r.jsx)(y.ZP, {
    timeout: 2e3,
    children: e => {
      var t, n;
      let {
        idle: i,
        onActive: a,
        onForceIdle: s
      } = e;
      return (0, r.jsxs)(b.Z, {
        className: o()(M.root, {
          [M.pipMode]: ei,
          [U.elevationHigh]: ei,
          [k.idle]: i && !(null == (t = Z.config) ? true : t.useInteractivePIP),
          [M.pipModeShort]: ei && !A,
          [M.pipModeTall]: ei && A,
          [M.hidden]: z,
          [M.multiPIPMode]: ea
        }),
        noBorder: !ei,
        children: [(0, r.jsx)("div", {
          className: "theme-dark",
          children: el({
            onActive: a,
            onForceIdle: s,
            idle: i,
            isActivityInTextChannel: en,
            users: ec
          })
        }), _ || F ? (0, r.jsx)(l.$jN, {
          className: o()(M.iframe, {
            [M.pipModeShort]: ei && !A,
            [M.pipModeTall]: ei && A
          })
        }) : (0, r.jsx)(R.J, {
          allowPopups: (0, N.h)(H),
          referrerPolicy: D.um.has(Z.applicationId) ? "no-referrer" : "origin",
          url: Z.url,
          queryParams: eu,
          className: o()(M.iframe, {
            [M.pipModeShort]: ei && !A,
            [M.pipModeTall]: ei && A,
            [M.pipNonInteractive]: ei && !(null == (n = Z.config) ? true : n.useInteractivePIP)
          }),
          shouldRefocus: !ei && W
        }), !ei && null != p && (0, r.jsx)(w.Ds, {
          participantsOpen: J,
          showToggleParticipants: false,
          channelId: p.id
        })]
      })
    }
  })
}
let H = e => {
  var {
    channel: t
  } = e, n = B(e, ["channel"]);
  let i = T.ZP.getCurrentEmbeddedActivity();
  (0, A.Z)({
    connectedEmbeddedActivity: i
  });
  let {
    analyticsLocations: a
  } = (0, _.ZP)(p.Z.ACTIVITY_PIP), o = null == i;
  return (0, r.jsx)(_.Gt, {
    value: a,
    children: (0, r.jsx)(V, Z({
      channel: t,
      isLoading: o
    }, n))
  })
}