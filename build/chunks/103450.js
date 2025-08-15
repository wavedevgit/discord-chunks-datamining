/** Chunk was on web.js **/
/** chunk id: 103450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => G
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
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
      activity: B,
      embeddedActivity: V,
      user: F,
      onGameJoin: Z,
      onClose: H,
      location: Y
    } = e,
    {
      analyticsLocations: W
    } = (0, E.ZP)(null != Y ? Y : []),
    [K, z] = r.useState(false),
    q = null != (t = null == V ? true : V.applicationId) ? t : null == B ? true : B.application_id,
    X = null != V || (0, m.Z)(B),
    Q = (0, i.e7)([P.default], () => P.default.getCurrentUser()),
    J = F.id === (null == Q ? true : Q.id),
    $ = (0, _.Z)({
      channelId: (0, f.p)(null == V ? true : V.location),
      userId: F.id,
      activity: B
    }),
    ee = (0, i.e7)([A.Z, O.Z, L.Z, I.Z], () => X || null != q && (0, M.t)({
      LibraryApplicationStore: A.Z,
      LaunchableGameStore: O.Z,
      DispatchApplicationStore: L.Z,
      ConnectedAppsStore: I.Z,
      applicationId: q
    })),
    et = (0, i.e7)([c.ZP], () => Array.from(c.ZP.getSelfEmbeddedActivities().values()).some(e => {
      let {
        applicationId: t,
        location: n
      } = e;
      return (t === (null == B ? true : B.application_id) || t === (null == V ? true : V.applicationId)) && (0, f.p)(n) === $
    })),
    en = (0, i.e7)([D.Z], () => null != B && null != B.application_id && D.Z.getState(B.application_id, k.mFx.JOIN) === k.OcF.LOADING),
    er = (0, b.q)(q),
    ei = (0, y.A)(er),
    ea = (0, p.s5)({
      userId: F.id,
      activity: B,
      channelId: $,
      application: er
    }),
    eo = (0, i.e7)([v.Z, S.Z, T.Z, C.Z, R.Z, w.Z, N.Z], () => null != V ? ea === p.Fw.CAN_JOIN : (0, d.Z)({
      user: F,
      activity: B,
      application: er,
      channelId: $,
      currentUser: Q,
      isEmbedded: X,
      ChannelStore: v.Z,
      GuildStore: S.Z,
      GuildMemberCountStore: T.Z,
      RelationshipStore: C.Z,
      SelectedChannelStore: R.Z,
      VoiceStateStore: w.Z,
      PermissionStore: N.Z
    })),
    es = (0, i.e7)([c.ZP], () => {
      if (Array.from(c.ZP.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == V ? true : V.applicationId) && e.location.id === (null == V ? true : V.location.id))) returntrue;
      let e = c.ZP.getCurrentEmbeddedActivity();
      return null != e && e.applicationId === (null == B ? true : B.application_id)
    }),
    el = (0, l.O)();
  if (X && null == V && (null == B || !(0, h.Z)(B, k.xjy.CONTEXTLESS))) return null;
  let ec = !x.isPlatformEmbedded;
  if (!((0, h.Z)(B, k.xjy.JOIN) || X) || null == q) return null;
  let eu = !J || X && !es,
    ed = eu && (ec || ee) && !K && !et;
  eu ? ec || ee || null == B || (G = U.intl.formatToPlainString(U.t.SqJBnJ, {
    name: B.name
  })) : G = U.intl.string(U.t["0OiwfH"]);
  let ef = null != (n = null == V ? true : V.launchId) ? n : null == B ? true : B.session_id,
    e_ = async (e, t) => {
      if (null == ef || null == q) return;
      let n = (0, h.Z)(t, k.xjy.EMBEDDED),
        r = R.Z.getVoiceChannelId(),
        i = v.Z.getChannel(r);
      if (await o.Z.join({
          userId: e.id,
          sessionId: ef,
          applicationId: q,
          channelId: r,
          messageId: null,
          intent: j.Ws.PLAY,
          embedded: n,
          locationObject: el.location,
          analyticsLocations: W
        }), !n) {
        var a;
        (0, g.Z)({
          type: k.q5t.JOIN,
          userId: e.id,
          guildId: null == i ? true : i.guild_id,
          channelId: r,
          channelType: null == i ? true : i.type,
          applicationId: q,
          partyId: null != t ? null == t || null == (a = t.party) ? true : a.id : "",
          locationObject: el.location,
          analyticsLocations: W
        })
      }
    }, ep = async () => {
      let e = false;
      async function t() {
        let e;
        z(true), null != B && (e = await a.Z.sendActivityInviteUser({
          type: k.mFx.JOIN_REQUEST,
          userId: F.id,
          activity: B,
          location: k.Sbl.USER_ACTIVITY_ACTIONS
        })), null != e && s.default.selectPrivateChannel(e.id)
      }
      if (X && !ei) {
        if (null == q) return;
        if (!eo) return t();
        if (e = await (0, u.Z)({
            applicationId: q,
            activityChannelId: $,
            locationObject: el.location,
            analyticsLocations: W
          })) {
          null == H || H();
          return
        }
      }
      if (!e) {
        if (eo) {
          null == Z || Z(), e_(F, B), null == H || H();
          return
        }
        await t()
      }
    }, eh = eo ? U.intl.string(U.t.VJlc0d) : U.intl.string(U.t.OKsSCQ);
  return es && (eh = U.intl.string(U.t.DPfdsr)), {
    buttonCTA: eh,
    tooltip: G,
    handleJoinRequest: ep,
    isEnabled: ed,
    isJoining: en,
    isEmbedded: X
  }
}