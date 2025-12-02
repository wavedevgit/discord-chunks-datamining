/** Chunk was on web.js **/
/** chunk id: 103450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => G
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk278323 = require("./278323.js"),
  Chunk224706 = require("./224706.js"),
  Chunk287734 = require("./287734.js"),
  Chunk2052 = require("./2052.js"),
  Chunk317381 = require("./317381.js"),
  Chunk638880 = require("./638880.js"),
  Chunk255621 = require("./255621.js"),
  Chunk16609 = require("./16609.js"),
  Chunk452634 = require("./452634.js"),
  Chunk527805 = require("./527805.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk275920 = require("./275920.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk813370 = require("./813370.js"),
  Chunk592745 = require("./592745.js"),
  Chunk592125 = require("./592125.js"),
  Chunk757266 = require("./757266.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk283595 = require("./283595.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk181106 = require("./181106.js"),
  Chunk417363 = require("./417363.js"),
  Chunk358085 = require("./358085.js"),
  Chunk804739 = require("./804739.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function G(e) {
  var t, n;
  let G, {
      activity: Z,
      embeddedActivity: B,
      user: F,
      onGameJoin: V,
      onClose: H,
      location: Y,
      supportsAskToJoin: W = true
    } = e,
    {
      analyticsLocations: K
    } = (0, E.ZP)(null != Y ? Y : []),
    [z, q] = r.useState(false),
    X = null != (t = null == B ? true : B.applicationId) ? t : null == Z ? true : Z.application_id,
    Q = null != B || (0, h.Z)(Z),
    J = (0, i.e7)([R.default], () => R.default.getCurrentUser()),
    $ = F.id === (null == J ? true : J.id),
    ee = (0, p.Z)({
      channelId: (0, f.p)(null == B ? true : B.location),
      userId: F.id,
      activity: Z
    }),
    et = (0, i.e7)([A.Z, O.Z, x.Z, S.Z], () => Q || null != X && (0, j.t)({
      LibraryApplicationStore: A.Z,
      LaunchableGameStore: O.Z,
      DispatchApplicationStore: x.Z,
      ConnectedAppsStore: S.Z,
      applicationId: X
    })),
    en = (0, i.e7)([c.ZP], () => Array.from(c.ZP.getSelfEmbeddedActivities().values()).some(e => {
      let {
        applicationId: t,
        location: n
      } = e;
      return (t === (null == Z ? true : Z.application_id) || t === (null == B ? true : B.applicationId)) && (0, f.p)(n) === ee
    })),
    er = (0, i.e7)([D.Z], () => null != Z && null != Z.application_id && D.Z.getState(Z.application_id, M.mFx.JOIN) === M.OcF.LOADING),
    ei = (0, b.q)(X),
    ea = (0, y.A)(ei),
    eo = (0, _.s5)({
      userId: F.id,
      activity: Z,
      channelId: ee,
      application: ei
    }),
    es = (0, i.e7)([v.Z, T.Z, I.Z, N.Z, P.Z, w.Z, C.Z], () => null != B ? eo === _.Fw.CAN_JOIN : (0, d.Z)({
      user: F,
      activity: Z,
      application: ei,
      channelId: ee,
      currentUser: J,
      isEmbedded: Q,
      ChannelStore: v.Z,
      GuildStore: T.Z,
      GuildMemberCountStore: I.Z,
      RelationshipStore: N.Z,
      SelectedChannelStore: P.Z,
      VoiceStateStore: w.Z,
      PermissionStore: C.Z
    })),
    el = (0, i.e7)([c.ZP], () => {
      if (Array.from(c.ZP.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == B ? true : B.applicationId) && e.location.id === (null == B ? true : B.location.id))) returntrue;
      let e = c.ZP.getCurrentEmbeddedActivity();
      return null != e && e.applicationId === (null == Z ? true : Z.application_id)
    }),
    ec = (0, l.O)();
  if (Q && null == B && (null == Z || !(0, m.Z)(Z, M.xjy.CONTEXTLESS))) return null;
  let eu = !L.isPlatformEmbedded;
  if (!((0, m.Z)(Z, M.xjy.JOIN) || Q) || null == X) return null;
  let ed = !$ || Q && !el,
    ef = ed && (eu || et) && !z && !en;
  ed ? eu || et || null == Z || (G = U.intl.formatToPlainString(U.t.SqJBnN, {
    name: Z.name
  })) : G = U.intl.string(U.t["0OiwfH"]);
  let ep = null != (n = null == B ? true : B.launchId) ? n : null == Z ? true : Z.session_id,
    e_ = async (e, t) => {
      if (null == ep || null == X) return;
      let n = (0, m.Z)(t, M.xjy.EMBEDDED),
        r = P.Z.getVoiceChannelId(),
        i = v.Z.getChannel(r);
      if (await o.Z.join({
          userId: e.id,
          sessionId: ep,
          applicationId: X,
          channelId: r,
          messageId: null,
          intent: k.Ws.PLAY,
          embedded: n,
          locationObject: ec.location,
          analyticsLocations: K
        }), !n) {
        var a;
        (0, g.Z)({
          type: M.q5t.JOIN,
          userId: e.id,
          guildId: null == i ? true : i.guild_id,
          channelId: r,
          channelType: null == i ? true : i.type,
          applicationId: X,
          partyId: null != t ? null == t || null == (a = t.party) ? true : a.id : "",
          locationObject: ec.location,
          analyticsLocations: K
        })
      }
    }, em = async () => {
      let e = false;
      async function t() {
        let e;
        q(true), null != Z && (e = await a.Z.sendActivityInviteUser({
          type: M.mFx.JOIN_REQUEST,
          userId: F.id,
          activity: Z,
          location: M.Sbl.USER_ACTIVITY_ACTIONS
        })), null != e && s.default.selectPrivateChannel(e.id)
      }
      if (Q && !ea) {
        if (null == X) return;
        if (!es) return t();
        if (e = await (0, u.Z)({
            applicationId: X,
            activityChannelId: ee,
            locationObject: ec.location,
            analyticsLocations: K
          })) {
          null == H || H();
          return
        }
      }
      if (!e) {
        if (es) {
          null == V || V(), e_(F, Z), null == H || H();
          return
        }
        await t()
      }
    };
  if (!es && !W || !ef && null == G) return null;
  let eh = es ? U.intl.string(U.t.VJlc0S) : U.intl.string(U.t.OKsSCR);
  return el && (eh = U.intl.string(U.t.DPfdsq)), {
    buttonCTA: eh,
    tooltip: G,
    handleJoinRequest: em,
    isEnabled: ef,
    isJoining: er,
    isEmbedded: Q
  }
}