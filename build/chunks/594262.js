/** Chunk was on web.js **/
/** chunk id: 594262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => G
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk308368 = require("./308368.js"),
  Chunk544420 = require("./544420.js"),
  Chunk956793 = require("./956793.js"),
  Chunk212245 = require("./212245.js"),
  Chunk933958 = require("./933958.js"),
  Chunk447031 = require("./447031.js"),
  Chunk902169 = require("./902169.js"),
  Chunk969151 = require("./969151.js"),
  Chunk3861 = require("./3861.js"),
  Chunk550151 = require("./550151.js"),
  Chunk833349 = require("./833349.js"),
  Chunk765379 = require("./765379.js"),
  Chunk946255 = require("./946255.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk207371 = require("./207371.js"),
  Chunk651743 = require("./651743.js"),
  Chunk734057 = require("./734057.js"),
  Chunk134861 = require("./134861.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk189081 = require("./189081.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk689168 = require("./689168.js"),
  Chunk194871 = require("./194871.js"),
  Chunk723702 = require("./723702.js"),
  Chunk144914 = require("./144914.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx");

function G(e) {
  var t, n;
  let G, {
      activity: V,
      embeddedActivity: F,
      user: B,
      onGameJoin: H,
      onClose: Y,
      location: W,
      supportsAskToJoin: K = true
    } = e,
    {
      analyticsLocations: z
    } = (0, E.Ay)(null != W ? W : []),
    [q, Z] = r.useState(false),
    Q = null != (t = null == F ? true : F.applicationId) ? t : null == V ? true : V.application_id,
    X = null != F || (0, m.A)(V),
    J = (0, i.bG)([R.default], () => R.default.getCurrentUser()),
    $ = B.id === (null == J ? true : J.id),
    ee = (0, p.A)({
      channelId: (0, f.H)(null == F ? true : F.location),
      userId: B.id,
      activity: V
    }),
    et = (0, i.bG)([T.A, O.A, L.A, A.A], () => X || null != Q && (0, M.A)({
      LibraryApplicationStore: T.A,
      LaunchableGameStore: O.A,
      DispatchApplicationStore: L.A,
      ConnectedAppsStore: A.A,
      applicationId: Q
    })),
    en = (0, i.bG)([c.Ay], () => Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(e => {
      let {
        applicationId: t,
        location: n
      } = e;
      return (t === (null == V ? true : V.application_id) || t === (null == F ? true : F.applicationId)) && (0, f.H)(n) === ee
    })),
    er = (0, i.bG)([D.A], () => null != V && null != V.application_id && D.A.getState(V.application_id, j.xL.JOIN) === j.eAD.LOADING),
    ei = (0, y.h)(Q),
    ea = (0, b.e)(ei),
    eo = (0, _.vG)({
      userId: B.id,
      activity: V,
      channelId: ee,
      application: ei
    }),
    es = (0, i.bG)([v.A, S.A, I.A, N.A, w.A, P.A, C.A], () => null != F ? eo === _.Gy.CAN_JOIN : (0, d.A)({
      user: B,
      activity: V,
      application: ei,
      channelId: ee,
      currentUser: J,
      isEmbedded: X,
      ChannelStore: v.A,
      GuildStore: S.A,
      GuildMemberCountStore: I.A,
      RelationshipStore: N.A,
      SelectedChannelStore: w.A,
      VoiceStateStore: P.A,
      PermissionStore: C.A
    })),
    el = (0, i.bG)([c.Ay], () => {
      if (Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == F ? true : F.applicationId) && e.location.id === (null == F ? true : F.location.id))) returntrue;
      let e = c.Ay.getCurrentEmbeddedActivity();
      return null != e && e.applicationId === (null == V ? true : V.application_id)
    }),
    ec = (0, l.p)();
  if (X && null == F && (null == V || !(0, h.A)(V, j.jUm.CONTEXTLESS))) return null;
  let eu = !x.isPlatformEmbedded;
  if (!((0, h.A)(V, j.jUm.JOIN) || X) || null == Q) return null;
  let ed = !$ || X && !el,
    ef = ed && (eu || et) && !q && !en;
  ed ? eu || et || null == V || (G = U.intl.formatToPlainString(U.t.SqJBnN, {
    name: V.name
  })) : G = U.intl.string(U.t["0OiwfH"]);
  let ep = null != (n = null == F ? true : F.launchId) ? n : null == V ? true : V.session_id,
    e_ = async (e, t) => {
      if (null == ep || null == Q) return;
      let n = (0, h.A)(t, j.jUm.EMBEDDED),
        r = w.A.getVoiceChannelId(),
        i = v.A.getChannel(r);
      if (await o.A.join({
          userId: e.id,
          sessionId: ep,
          applicationId: Q,
          channelId: r,
          messageId: null,
          intent: k.W9.PLAY,
          embedded: n,
          locationObject: ec.location,
          analyticsLocations: z
        }), !n) {
        var a;
        (0, g.A)({
          type: j.UqL.JOIN,
          userId: e.id,
          guildId: null == i ? true : i.guild_id,
          channelId: r,
          channelType: null == i ? true : i.type,
          applicationId: Q,
          partyId: null != t ? null == t || null == (a = t.party) ? true : a.id : "",
          locationObject: ec.location,
          analyticsLocations: z
        })
      }
    }, eh = async () => {
      let e = false;
      async function t() {
        let e;
        Z(true), null != V && (e = await a.A.sendActivityInviteUser({
          type: j.xL.JOIN_REQUEST,
          userId: B.id,
          activity: V,
          location: j.ThZ.USER_ACTIVITY_ACTIONS
        })), null != e && s.default.selectPrivateChannel(e.id)
      }
      if (X && !ea) {
        if (null == Q) return;
        if (!es) return t();
        if (e = await (0, u.A)({
            applicationId: Q,
            activityChannelId: ee,
            locationObject: ec.location,
            analyticsLocations: z
          })) {
          null == Y || Y();
          return
        }
      }
      if (!e) {
        if (es) {
          null == H || H(), e_(B, V), null == Y || Y();
          return
        }
        await t()
      }
    };
  if (!es && !K || !ef && null == G) return null;
  let em = es ? U.intl.string(U.t.VJlc0S) : U.intl.string(U.t.OKsSCR);
  return el && (em = U.intl.string(U.t.DPfdsq)), {
    buttonCTA: em,
    tooltip: G,
    handleJoinRequest: eh,
    isEnabled: ef,
    isJoining: er,
    isEmbedded: X
  }
}