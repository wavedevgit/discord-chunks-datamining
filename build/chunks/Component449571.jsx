/** Chunk was on web.js **/
/** chunk id: 449571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk367513 = require("./367513.js"),
  Chunk951001 = require("./951001.js"),
  Chunk398590 = require("./398590.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk568598 = require("./568598.js"),
  Chunk313961 = require("./313961.js"),
  Chunk976860 = require("./976860.js"),
  Chunk272812 = require("./272812.jsx"),
  Chunk461782 = require("./461782.jsx"),
  Chunk334463 = require("./334463.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk851907 = require("./851907.js"),
  Chunk838274 = require("./838274.js"),
  Chunk536246 = require("./536246.js"),
  Chunk108959 = require("./108959.js"),
  Chunk398866 = require("./398866.jsx"),
  Chunk56129 = require("./56129.jsx"),
  Chunk360469 = require("./360469.js"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk463967 = require("./463967.js"),
  Chunk319567 = require("./319567.js"),
  Chunk976092 = require("./976092.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
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

function F(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = B(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function H(e) {
  var t, n, a;
  let {
    channel: p,
    isLoading: _
  } = e, [C, G] = i.useState(false), V = (0, o.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()), F = null == V ? true : V.applicationId, B = (0, o.bG)([S.Ay], () => null != F && S.Ay.isProxyTicketRefreshing(F), [F]), H = (0, o.bG)([S.Ay], () => S.Ay.getActivityPanelMode()), Y = (0, h.h)(F), W = null == V ? true : V.launchId, K = (0, o.bG)([v.A], () => v.A.getChannelId() === (null == p ? true : p.id)), {
    dockedRect: z,
    isHidden: q
  } = (0, o.cf)([O.A], () => {
    let e = O.A.pipWindow;
    return {
      dockedRect: null != e ? O.A.getDockedRect(e.id) : null,
      isHidden: O.A.isEmbeddedActivityHidden()
    }
  }), X = (0, T.xi)({
    channelId: null == p ? true : p.id
  }), {
    activityParticipant: Z,
    selectedParticipant: Q,
    participantsOpen: $
  } = (0, o.cf)([g.A], () => ({
    activityParticipant: null != V && null != p ? g.A.getParticipant(p.id, (0, m.Qt)({
      applicationId: V.applicationId,
      instanceId: V.compositeInstanceId
    })) : null,
    selectedParticipant: null != p ? g.A.getSelectedParticipant(p.id) : null,
    participantsOpen: null != p && g.A.getParticipantsOpen(p.id)
  })), J = K || null != X, ee = (0, R.A)(null == p ? true : p.id), et = ee && (null == Q ? true : Q.type) !== j.lp.ACTIVITY, en = !ee && H === x.Gd.PIP, er = J && (et || en) && null == z, ei = (!J || er) && !q, ea = ei && null != O.A.pipVideoWindow && null != O.A.pipActivityWindow;

  function es() {
    if (null != p) {
      var e;
      null != V && u.A.selectParticipant(p.id, (0, m.Qt)({
        applicationId: V.applicationId,
        instanceId: V.compositeInstanceId
      }));
      let t = null != (e = p.getGuildId()) ? e : L.ME;
      d.A.channelListScrollTo(t, p.id), (0, E.uh)(t, p.id)
    }
    null == X && (0, f.bz)()
  }

  function eo() {
    G(!C)
  }

  function el(e) {
    var t;
    let {
      onActive: n,
      onForceIdle: i,
      idle: a,
      isActivityInTextChannel: s,
      users: o
    } = e;
    return ei && null != V && ((null == Z ? true : Z.type) === j.lp.ACTIVITY || s) ? (null == (t = V.config) ? true : t.useInteractivePIP) ? (0, r.jsx)(P.tM, {
      onJumpToChannel: es,
      applicationId: V.applicationId,
      channel: p,
      showControls: !a,
      onMouseDown: n,
      onMouseMove: n,
      onMouseLeave: i,
      onToggleHeight: eo,
      isExpanded: C,
      hideExpandedButton: s,
      embeddedActivity: V
    }) : s ? (0, r.jsx)(P.Mp, {
      idle: a,
      onMouseMove: n,
      onMouseDown: n,
      onMouseLeave: i,
      onJumpToChannel: () => {
        es(), (0, I.gk)(x.Gd.PANEL)
      },
      channel: p,
      applicationId: V.applicationId,
      users: o,
      embeddedActivity: V
    }) : null == Z ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        onMouseMove: n,
        onMouseDown: n,
        onMouseLeave: i,
        className: M.OB,
        onDoubleClick: es
      }), (0, r.jsx)(P.gE, {
        idle: a,
        onMouseMove: n,
        onMouseDown: n,
        onMouseLeave: i,
        onJumpToChannel: es,
        channel: p,
        applicationId: V.applicationId,
        selectedParticipant: Z,
        embeddedActivity: V
      })]
    }) : null
  }
  if (i.useEffect(() => {
      if (null != F) {
        let e = ei ? D.bN.PIP : D.bN.FOCUSED;
        c.h.dispatch({
          type: "ACTIVITY_LAYOUT_MODE_UPDATE",
          layoutMode: e,
          applicationId: F
        })
      }
    }, [F, ei]), null == V || null == W || (0, R.A)(null == p ? true : p.id) && null == Z || null == Y) return null;
  let ec = Array.from(V.userIds).map(e => A.default.getUser(e)).filter(e => null != e),
    eu = {
      instance_id: null != (t = null != (n = V.compositeInstanceId) ? n : V.launchId) ? t : "",
      location_id: null == (a = V.location) ? true : a.id,
      launch_id: V.launchId,
      referrer_id: V.referrerId,
      custom_id: V.customId
    };
  return null != V.proxyTicket && (eu.discord_proxy_ticket = V.proxyTicket), (null == p ? true : p.guild_id) != null && (null == p ? true : p.guild_id) !== "" && (eu.guild_id = p.guild_id), (null == p ? true : p.id) != null && (null == p ? true : p.id) !== "" && (eu.channel_id = p.id), (0, r.jsx)(b.Ay, {
    timeout: 2e3,
    children: e => {
      var t, n;
      let {
        idle: i,
        onActive: a,
        onForceIdle: o
      } = e;
      return (0, r.jsxs)(y.A, {
        className: s()(M.zr, {
          [M.NW]: ei,
          [U.a8]: ei,
          [k.N7]: i && !(null == (t = V.config) ? true : t.useInteractivePIP),
          [M.p0]: ei && !C,
          [M.ST]: ei && C,
          [M.R]: q,
          [M.Gq]: ea
        }),
        noBorder: !ei,
        children: [(0, r.jsx)("div", {
          className: "theme-dark",
          children: el({
            onActive: a,
            onForceIdle: o,
            idle: i,
            isActivityInTextChannel: en,
            users: ec
          })
        }), _ || B ? (0, r.jsx)(l.y$y, {
          className: s()(M.pU, {
            [M.p0]: ei && !C,
            [M.ST]: ei && C
          })
        }) : (0, r.jsx)(w.o, {
          allowPopups: (0, N.b)(Y),
          referrerPolicy: D.$J.has(V.applicationId) ? "no-referrer" : "origin",
          url: V.url,
          queryParams: eu,
          className: s()(M.pU, {
            [M.p0]: ei && !C,
            [M.ST]: ei && C,
            [M.v8]: ei && !(null == (n = V.config) ? true : n.useInteractivePIP)
          }),
          shouldRefocus: !ei && K
        }), !ei && null != p && (0, r.jsx)(P.ll, {
          participantsOpen: $,
          showToggleParticipants: false,
          channelId: p.id
        })]
      })
    }
  })
}
let Y = e => {
  let {
    channel: t
  } = e, n = F(e, ["channel"]), i = S.Ay.getCurrentEmbeddedActivity();
  (0, C.A)({
    connectedEmbeddedActivity: i
  });
  let {
    analyticsLocations: a
  } = (0, _.Ay)(p.A.ACTIVITY_PIP), s = null == i;
  return (0, r.jsx)(_.f5, {
    value: a,
    children: (0, r.jsx)(H, V({
      channel: t,
      isLoading: s
    }, n))
  })
}