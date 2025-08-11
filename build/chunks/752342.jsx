/** Chunk was on 11776 **/
/** chunk id: 752342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk572691 = require("./572691.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk313201 = require("./313201.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.js"),
  Chunk687158 = require("./687158.js"),
  Chunk899007 = require("./899007.js"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.js"),
  Chunk681837 = require("./681837.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk871604 = require("./871604.js"),
  Chunk952124 = require("./952124.js"),
  Chunk53558 = require("./53558.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk30556 = require("./30556.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk740628 = require("./740628.jsx"),
  Chunk398145 = require("./398145.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405666 = require("./405666.js");

function S(e) {
  let {
    user: t,
    currentUser: n,
    guildId: S,
    channelId: A,
    messageId: w,
    roleId: C,
    sessionId: L,
    initialSection: k,
    initialSubsection: D,
    transitionState: G,
    openedAt: R,
    onClose: M,
    sourceAnalyticsLocations: B = []
  } = e, U = S === T.ME ? true : S, F = (0, u.ZP)(t.id, U), V = s.ZP.getName(U, A, t), Y = (0, c.Dt)(), {
    analyticsLocations: W
  } = (0, a.ZP)([...B, o.Z.USER_PROFILE_MODAL]), H = (0, d.ZB)({
    layout: "MODAL",
    userId: t.id,
    sourceSessionId: L,
    guildId: U,
    channelId: A,
    messageId: w,
    roleId: C
  }), z = (0, P.Z)(t);
  return <a.Gt value={W}><d.Mt value={H} openedAt={R} fetchStartedAt={null == F ? true : F.fetchStartedAt} fetchEndedAt={null == F ? true : F.fetchEndedAt} isLoaded={null == F ? true : F.isLoaded}><l.Y0X data-migration-pending={true} transitionState={G} className={E.root} hideShadow={true} aria-labelledby={Y} parentComponent={"BotUserProfileModal"}><l.y5t component={(0, r.jsx)(l.nn4, {
            children: (0, r.jsx)(l.H, {
              id: Y,
              children: N.intl.format(N.t.KRe1Fh, {
                name: V
              })
            })
          })}><b.Z user={t} displayProfile={F} themeType={Z.lY.MODAL}>{<v.Z><x.Z user={t} guildId={U} onCloseProfile={M} /></v.Z>}{<div>{<p.Z user={t} displayProfile={F} themeType={Z.lY.MODAL} />}{<div className={E.headerInner}>{<f.Z user={t} displayProfile={F} guildId={U} channelId={A} themeType={Z.lY.MODAL} />}{<_.Z location={"BotUserProfileModal"} user={t} themeType={Z.lY.MODAL} hasEntered={G === l.Dvm.ENTERED} onCloseProfile={M} disableToolbar={true} />}{<div className={E.headerButtons}>{<O.Z type={"text"} userId={t.id} onClose={i.Z.popAll} className={E.messageTextButton} />}{<O.Z type={"icon"} userId={t.id} onClose={i.Z.popAll} tooltipContainerClassName={E.messageIconButton} />}{<y.Z user={t} guildId={U} />}{<h.Z user={t} />}</div>}</div>}</div>}{<div className={E.body}>{<j.Z className={E.username} user={t} nickname={V} pronouns={null == F ? true : F.pronouns} nicknameVariant={"heading-xl/bold"} nicknameIcons={(0, r.jsx)(g.Z, {
                  size: "sm",
                  userId: t.id
                })} tags={(0, r.jsx)(m.Z, {
                  displayProfile: F,
                  themeType: Z.lY.MODAL,
                  onClose: M
                })} />}{<I.Z user={t} currentUser={n} displayProfile={F} guildId={U} items={z} initialSection={null != k ? k : Z.oh.BOT_INFO} initialSubsection={D} onClose={M} />}</div>}</b.Z></l.y5t></l.Y0X></d.Mt></a.Gt>
}