/** Chunk was on web.js **/
/** chunk id: 866885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk748492 = require("./748492.jsx"),
  Chunk701488 = require("./701488.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk505386 = require("./505386.js"),
  Chunk186880 = require("./186880.js"),
  Chunk315091 = require("./315091.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
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

function Z(e, t) {
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
    channel: _,
    isLoading: p
  } = e, [C, G] = i.useState(false), B = (0, s.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()), Z = null == B ? true : B.applicationId, F = (0, s.e7)([S.ZP], () => null != Z && S.ZP.isProxyTicketRefreshing(Z), [Z]), V = (0, s.e7)([S.ZP], () => S.ZP.getActivityPanelMode()), H = (0, h.q)(Z), Y = null == B ? true : B.launchId, W = (0, s.e7)([v.Z], () => v.Z.getChannelId() === (null == _ ? true : _.id)), {
    dockedRect: K,
    isHidden: z
  } = (0, s.cj)([O.Z], () => {
    let e = O.Z.pipWindow;
    return {
      dockedRect: null != e ? O.Z.getDockedRect(e.id) : null,
      isHidden: O.Z.isEmbeddedActivityHidden()
    }
  }), q = (0, A.sU)({
    channelId: null == _ ? true : _.id
  }), {
    activityParticipant: X,
    selectedParticipant: Q,
    participantsOpen: J
  } = (0, s.cj)([g.Z], () => ({
    activityParticipant: null != B && null != _ ? g.Z.getParticipant(_.id, (0, m.gN)({
      applicationId: B.applicationId,
      instanceId: B.compositeInstanceId
    })) : null,
    selectedParticipant: null != _ ? g.Z.getSelectedParticipant(_.id) : null,
    participantsOpen: null != _ && g.Z.getParticipantsOpen(_.id)
  })), $ = W || null != q, ee = (0, R.Z)(null == _ ? true : _.id), et = ee && (null == Q ? true : Q.type) !== M.fO.ACTIVITY, en = !ee && V === L.Ez.PIP, er = $ && (et || en) && null == K, ei = (!$ || er) && !z, ea = ei && null != O.Z.pipVideoWindow && null != O.Z.pipActivityWindow;

  function eo() {
    if (null != _) {
      var e;
      null != B && u.Z.selectParticipant(_.id, (0, m.gN)({
        applicationId: B.applicationId,
        instanceId: B.compositeInstanceId
      }));
      let t = null != (e = _.getGuildId()) ? e : x.ME;
      d.Z.channelListScrollTo(t, _.id), (0, E.XU)(t, _.id)
    }
    null == q && (0, f.Ou)()
  }

  function es() {
    G(!C)
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
    return ei && null != B && ((null == X ? true : X.type) === M.fO.ACTIVITY || o) ? (null == (t = B.config) ? true : t.useInteractivePIP) ? (0, r.jsx)(w.of, {
      onJumpToChannel: eo,
      applicationId: B.applicationId,
      channel: _,
      showControls: !a,
      onMouseDown: n,
      onMouseMove: n,
      onMouseLeave: i,
      onToggleHeight: es,
      isExpanded: C,
      hideExpandedButton: o,
      embeddedActivity: B
    }) : o ? (0, r.jsx)(w.q5, {
      idle: a,
      onMouseMove: n,
      onMouseDown: n,
      onMouseLeave: i,
      onJumpToChannel: () => {
        eo(), (0, T.tg)(L.Ez.PANEL)
      },
      channel: _,
      applicationId: B.applicationId,
      users: s,
      embeddedActivity: B
    }) : null == X ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        onMouseMove: n,
        onMouseDown: n,
        onMouseLeave: i,
        className: k.clickShield,
        onDoubleClick: eo
      }), (0, r.jsx)(w.YB, {
        idle: a,
        onMouseMove: n,
        onMouseDown: n,
        onMouseLeave: i,
        onJumpToChannel: eo,
        channel: _,
        applicationId: B.applicationId,
        selectedParticipant: X,
        embeddedActivity: B
      })]
    }) : null
  }
  if (i.useEffect(() => {
      if (null != Z) {
        let e = ei ? D.cE.PIP : D.cE.FOCUSED;
        c.Z.dispatch({
          type: "ACTIVITY_LAYOUT_MODE_UPDATE",
          layoutMode: e,
          applicationId: Z
        })
      }
    }, [Z, ei]), null == B || null == Y || (0, R.Z)(null == _ ? true : _.id) && null == X || null == H) return null;
  let ec = Array.from(B.userIds).map(e => I.default.getUser(e)).filter(e => null != e),
    eu = {
      instance_id: null != (a = null != (n = B.compositeInstanceId) ? n : B.launchId) ? a : "",
      location_id: null == (t = B.location) ? true : t.id,
      launch_id: B.launchId,
      referrer_id: B.referrerId,
      custom_id: B.customId
    };
  return null != B.proxyTicket && (eu.discord_proxy_ticket = B.proxyTicket), (null == _ ? true : _.guild_id) != null && (null == _ ? true : _.guild_id) !== "" && (eu.guild_id = _.guild_id), (null == _ ? true : _.id) != null && (null == _ ? true : _.id) !== "" && (eu.channel_id = _.id), (0, r.jsx)(y.ZP, {
    timeout: 2e3,
    children: e => {
      var t, n;
      let {
        idle: i,
        onActive: a,
        onForceIdle: s
      } = e;
      return (0, r.jsxs)(b.Z, {
        className: o()(k.root, {
          [k.pipMode]: ei,
          [U.elevationHigh]: ei,
          [j.idle]: i && !(null == (t = B.config) ? true : t.useInteractivePIP),
          [k.pipModeShort]: ei && !C,
          [k.pipModeTall]: ei && C,
          [k.hidden]: z,
          [k.multiPIPMode]: ea
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
        }), p || F ? (0, r.jsx)(l.$jN, {
          className: o()(k.iframe, {
            [k.pipModeShort]: ei && !C,
            [k.pipModeTall]: ei && C
          })
        }) : (0, r.jsx)(P.J, {
          allowPopups: (0, N.h)(H),
          referrerPolicy: D.um.has(B.applicationId) ? "no-referrer" : "origin",
          url: B.url,
          queryParams: eu,
          className: o()(k.iframe, {
            [k.pipModeShort]: ei && !C,
            [k.pipModeTall]: ei && C,
            [k.pipNonInteractive]: ei && !(null == (n = B.config) ? true : n.useInteractivePIP)
          }),
          shouldRefocus: !ei && W
        }), !ei && null != _ && (0, r.jsx)(w.Ds, {
          participantsOpen: J,
          showToggleParticipants: false,
          channelId: _.id
        })]
      })
    }
  })
}
let H = e => {
  var {
    channel: t
  } = e, n = Z(e, ["channel"]);
  let i = S.ZP.getCurrentEmbeddedActivity();
  (0, C.Z)({
    connectedEmbeddedActivity: i
  });
  let {
    analyticsLocations: a
  } = (0, p.ZP)(_.Z.ACTIVITY_PIP), o = null == i;
  return (0, r.jsx)(p.Gt, {
    value: a,
    children: (0, r.jsx)(V, B({
      channel: t,
      isLoading: o
    }, n))
  })
}