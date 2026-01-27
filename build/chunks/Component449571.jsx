/** Chunk was on web.js **/
/** chunk id: 449571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function F(e) {
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

function V(e, t) {
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
  } = e, [C, G] = i.useState(false), F = (0, s.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()), V = null == F ? true : F.applicationId, B = (0, s.bG)([S.Ay], () => null != V && S.Ay.isProxyTicketRefreshing(V), [V]), H = (0, s.bG)([S.Ay], () => S.Ay.getActivityPanelMode()), Y = (0, h.h)(V), W = null == F ? true : F.launchId, K = (0, s.bG)([v.A], () => v.A.getChannelId() === (null == p ? true : p.id)), {
    dockedRect: z,
    isHidden: q
  } = (0, s.cf)([O.A], () => {
    let e = O.A.pipWindow;
    return {
      dockedRect: null != e ? O.A.getDockedRect(e.id) : null,
      isHidden: O.A.isEmbeddedActivityHidden()
    }
  }), Z = (0, T.xi)({
    channelId: null == p ? true : p.id
  }), {
    activityParticipant: Q,
    selectedParticipant: X,
    participantsOpen: J
  } = (0, s.cf)([g.A], () => ({
    activityParticipant: null != F && null != p ? g.A.getParticipant(p.id, (0, m.Qt)({
      applicationId: F.applicationId,
      instanceId: F.compositeInstanceId
    })) : null,
    selectedParticipant: null != p ? g.A.getSelectedParticipant(p.id) : null,
    participantsOpen: null != p && g.A.getParticipantsOpen(p.id)
  })), $ = K || null != Z, ee = (0, w.A)(null == p ? true : p.id), et = ee && (null == X ? true : X.type) !== M.lp.ACTIVITY, en = !ee && H === L.Gd.PIP, er = $ && (et || en) && null == z, ei = (!$ || er) && !q, ea = ei && null != O.A.pipVideoWindow && null != O.A.pipActivityWindow;

  function eo() {
    if (null != p) {
      var e;
      null != F && u.A.selectParticipant(p.id, (0, m.Qt)({
        applicationId: F.applicationId,
        instanceId: F.compositeInstanceId
      }));
      let t = null != (e = p.getGuildId()) ? e : x.ME;
      d.A.channelListScrollTo(t, p.id), (0, E.uh)(t, p.id)
    }
    null == Z && (0, f.bz)()
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
    return ei && null != F && ((null == Q ? true : Q.type) === M.lp.ACTIVITY || o) ? (null == (t = F.config) ? true : t.useInteractivePIP) ? (0, r.jsx)(P.tM, {
      onJumpToChannel: eo,
      applicationId: F.applicationId,
      channel: p,
      showControls: !a,
      onMouseDown: n,
      onMouseMove: n,
      onMouseLeave: i,
      onToggleHeight: es,
      isExpanded: C,
      hideExpandedButton: o,
      embeddedActivity: F
    }) : o ? (0, r.jsx)(P.Mp, {
      idle: a,
      onMouseMove: n,
      onMouseDown: n,
      onMouseLeave: i,
      onJumpToChannel: () => {
        eo(), (0, I.gk)(L.Gd.PANEL)
      },
      channel: p,
      applicationId: F.applicationId,
      users: s,
      embeddedActivity: F
    }) : null == Q ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        onMouseMove: n,
        onMouseDown: n,
        onMouseLeave: i,
        className: j.OB,
        onDoubleClick: eo
      }), (0, r.jsx)(P.gE, {
        idle: a,
        onMouseMove: n,
        onMouseDown: n,
        onMouseLeave: i,
        onJumpToChannel: eo,
        channel: p,
        applicationId: F.applicationId,
        selectedParticipant: Q,
        embeddedActivity: F
      })]
    }) : null
  }
  if (i.useEffect(() => {
      if (null != V) {
        let e = ei ? D.bN.PIP : D.bN.FOCUSED;
        c.h.dispatch({
          type: "ACTIVITY_LAYOUT_MODE_UPDATE",
          layoutMode: e,
          applicationId: V
        })
      }
    }, [V, ei]), null == F || null == W || (0, w.A)(null == p ? true : p.id) && null == Q || null == Y) return null;
  let ec = Array.from(F.userIds).map(e => A.default.getUser(e)).filter(e => null != e),
    eu = {
      instance_id: null != (t = null != (n = F.compositeInstanceId) ? n : F.launchId) ? t : "",
      location_id: null == (a = F.location) ? true : a.id,
      launch_id: F.launchId,
      referrer_id: F.referrerId,
      custom_id: F.customId
    };
  return null != F.proxyTicket && (eu.discord_proxy_ticket = F.proxyTicket), (null == p ? true : p.guild_id) != null && (null == p ? true : p.guild_id) !== "" && (eu.guild_id = p.guild_id), (null == p ? true : p.id) != null && (null == p ? true : p.id) !== "" && (eu.channel_id = p.id), (0, r.jsx)(b.Ay, {
    timeout: 2e3,
    children: e => {
      var t, n;
      let {
        idle: i,
        onActive: a,
        onForceIdle: s
      } = e;
      return (0, r.jsxs)(y.A, {
        className: o()(j.zr, {
          [j.NW]: ei,
          [U.a8]: ei,
          [k.N7]: i && !(null == (t = F.config) ? true : t.useInteractivePIP),
          [j.p0]: ei && !C,
          [j.ST]: ei && C,
          [j.R]: q,
          [j.Gq]: ea
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
        }), _ || B ? (0, r.jsx)(l.y$y, {
          className: o()(j.pU, {
            [j.p0]: ei && !C,
            [j.ST]: ei && C
          })
        }) : (0, r.jsx)(R.o, {
          allowPopups: (0, N.b)(Y),
          referrerPolicy: D.$J.has(F.applicationId) ? "no-referrer" : "origin",
          url: F.url,
          queryParams: eu,
          className: o()(j.pU, {
            [j.p0]: ei && !C,
            [j.ST]: ei && C,
            [j.v8]: ei && !(null == (n = F.config) ? true : n.useInteractivePIP)
          }),
          shouldRefocus: !ei && K
        }), !ei && null != p && (0, r.jsx)(P.ll, {
          participantsOpen: J,
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
  } = e, n = V(e, ["channel"]), i = S.Ay.getCurrentEmbeddedActivity();
  (0, C.A)({
    connectedEmbeddedActivity: i
  });
  let {
    analyticsLocations: a
  } = (0, _.Ay)(p.A.ACTIVITY_PIP), o = null == i;
  return (0, r.jsx)(_.f5, {
    value: a,
    children: (0, r.jsx)(H, F({
      channel: t,
      isLoading: o
    }, n))
  })
}