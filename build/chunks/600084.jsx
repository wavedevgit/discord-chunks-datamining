/** Chunk was on web.js **/
/** chunk id: 600084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk384275 = require("./384275.js"),
  Chunk82906 = require("./82906.js"),
  Chunk763762 = require("./763762.js"),
  Chunk933557 = require("./933557.js"),
  Chunk605436 = require("./605436.js"),
  Chunk736052 = require("./736052.js"),
  Chunk86203 = require("./86203.jsx"),
  Chunk189156 = require("./189156.jsx"),
  Chunk878857 = require("./878857.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk131704 = require("./131704.js"),
  Chunk881998 = require("./881998.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk7782 = require("./7782.jsx"),
  Chunk967128 = require("./967128.js"),
  Chunk320781 = require("./320781.jsx"),
  Chunk269203 = require("./269203.jsx"),
  Chunk86863 = require("./86863.jsx"),
  Chunk558756 = require("./558756.jsx"),
  Chunk753898 = require("./753898.js"),
  Chunk734386 = require("./734386.js"),
  Chunk184279 = require("./184279.jsx"),
  Chunk438306 = require("./438306.jsx"),
  Chunk544142 = require("./544142.jsx"),
  Chunk128557 = require("./128557.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk906667 = require("./906667.js"),
  Chunk20493 = require("./20493.js");

function F(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, i = t && (0, f.Yk)(n), a = (0, o.e7)([O.ZP], () => null != n.guild_id && n === O.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, _.Z)(n.id)) return null;
  if (n.isForumPost()) return <N.Z channel={n} />;
  if (b.Ec.has(n.type)) return <M.Z channel={n} />;
  if (a) return <k.Z channel={n} />;
  if (i) return <D.Z channel={n} />;
  return <x.Z channel={n} />
}

function V(e) {
  var t, n;
  let {
    channel: f,
    showingBanner: _
  } = e, b = (0, d.ZP)(f), {
    type: O
  } = f, N = (0, o.e7)([I.default], () => f.isPrivate() ? I.default.getUser(f.getRecipientId()) : null), D = T.ZP.useUserTag(N), {
    canManageRoles: x,
    canReadMessageHistory: M
  } = (0, o.cj)([v.Z], () => ({
    canManageRoles: v.Z.can(j.Plq.MANAGE_ROLES, f),
    canReadMessageHistory: v.Z.can(j.Plq.READ_MESSAGE_HISTORY, f)
  })), k = (0, o.e7)([g.Z], () => O === j.d4z.DM ? g.Z.getMutualGuilds(f.getRecipientId()) : null, [f, O]), {
    systemDMRedesignEnabled: V
  } = m.Z.useExperiment({
    location: "bf1a4f_1"
  }, {
    autoTrackExposure: null != (t = f.isSystemDM()) && t
  }), H = (0, u.Z)(null != (n = null == N ? true : N.id) ? n : j.lds), {
    authorizedAppToken: Y,
    authorizedAppsFetchState: W
  } = (0, o.cj)([y.Z], () => ({
    authorizedAppToken: y.Z.getNewestTokenForApplication(null == H ? true : H.id),
    authorizedAppsFetchState: y.Z.getFetchState()
  })), K = c.Z.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (i.useEffect(() => {
      O === j.d4z.DM && null == k && null != N && s.Z.wait(() => (0, E.Z)(f.getRecipientId(), N.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [k, O, f, N]), i.useEffect(() => {
      (null == N ? true : N.bot) && W === y.M.NOT_FETCHED && l.Z.fetch()
    }, [null == N ? true : N.bot, W]), f.isSystemDM()) return V ? <L.Z channel={f} /> : <w.Z channel={f}>{G.intl.string(G.t.Rzvnio)}</w.Z>;
  if (O === j.d4z.DM) {
    let e;
    return null != N && null != H ? null != Y && (e = <div className={B.buttonContainer}>{<P.W className={B.button} channel={f} user={N} />}{<R.n className={B.button} user={N} application={H} channel={f} oauth2Token={Y} />}{K && <p.Z channel={f} />}</div>) : e = <S.Z userId={f.getRecipientId()} channel={f} showingBanner={_} />, <w.Z channel={f} user={N}>{null != N && !N.isProvisional && <a.X6q variant={"heading-xl/medium"} className={Z.marginBottom20}>{D}</a.X6q>}{G.intl.format(G.t["Qvg+6+"], {
        username: b
      })}{(null == N ? true : N.isProvisional) && <h.q userId={N.id} />}{e}</w.Z>
  }
  if (f.isMultiUserDM())
    if (f.isManaged()) return <A.ZP channelId={f.id}>{<A.Ot>{G.intl.format(G.t.I3R7Vl, {
          channelName: b
        })}</A.Ot>}{<A.jz>{G.intl.string(G.t.M8Ao6O)}</A.jz>}</A.ZP>;
    else if (f.hasFlag(U.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return <C.Z channel={f} />;
  else return <w.Z channel={f}>{G.intl.format(G.t.MFwcqK, {
      name: b
    })}</w.Z>;
  return M ? <F channel={f} canManageRoles={x} /> : <A.ZP channelId={f.id}><A.jz>{G.intl.format(G.t.hPVEQE, {
        channelName: b
      })}</A.jz></A.ZP>
}