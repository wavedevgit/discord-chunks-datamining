/** Chunk was on 58121 **/
/** chunk id: 603072, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk252618 = require("./252618.js"),
  Chunk266454 = require("./266454.js"),
  Chunk984370 = require("./984370.js"),
  Chunk216306 = require("./216306.js"),
  Chunk104155 = require("./104155.jsx"),
  Chunk22082 = require("./22082.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk31445 = require("./31445.js"),
  Chunk59350 = require("./59350.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk56044 = require("./56044.js"),
  Chunk100658 = require("./100658.js");

function I(e) {
  let {
    guild: t
  } = e, n = (0, C.Z)(t);
  r.useEffect(() => {
    (0, m.Q3)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: y.L.DISMISS
    })
  });
  let i = n ? O.intl.formatToPlainString(O.t.uqZgYW, {
      guildName: t.name
    }) : O.intl.formatToPlainString(O.t.velJeX, {
      guildName: t.name
    }),
    a = n ? O.intl.string(O.t.h9mGOD) : O.intl.string(O.t.et6wam);
  return (0, u.Tt)({
    location: i
  }), <h.Z className={Z.header} innerClassname={Z.innerHeader} hideSearch={true} channelId={v.oC.CUSTOMIZE_COMMUNITY} guildId={t.id}>{<h.Z.Icon icon={d.H$4} aria-hidden={true} />}{<h.Z.Title>{a}</h.Z.Title>}</h.Z>
}

function w(e) {
  let {
    guildId: t,
    selectedSection: n
  } = e, i = (0, o.e7)([_.Z], () => _.Z.getGuild(t)), s = (0, C.Z)(i), [u, m] = r.useState(null != n ? n : j.l7.CUSTOMIZE);
  r.useEffect(() => {
    null != n && m(n)
  }, [n]);
  let h = (0, o.e7)([x.ZP], () => x.ZP.getCurrentSidebarChannelId(v.oC.CHANNEL_BROWSER)),
    y = null != h && u === j.l7.BROWSE,
    w = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(t).size > 0),
    P = (0, p.fU)(t);
  return null == i ? null : <l.Fragment>{<div className={a()(N.chat, {
        [N.threadSidebarOpen]: y
      })}>{<I guild={i} />}{<div className={a()(N.content, Z.container)}>{s && <d.njP className={Z.tabBar} type={"top"} look={"brand"} selectedItem={u} onItemSelect={e => m(e)}>{<d.njP.Item className={Z.tabBarItem} id={j.l7.CUSTOMIZE}>{O.intl.string(O.t.H2cICQ)}</d.njP.Item>}{<d.njP.Item className={Z.tabBarItem} id={j.l7.BROWSE} aria-label={O.intl.string(O.t.et6wam)}>{O.intl.string(O.t.et6wam)}{<d.IGR text={w ? O.intl.string(O.t.psHMa2) : P} color={w ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css} className={a()({
                [Z.newBadge]: w
              })} />}</d.njP.Item>}</d.njP>}{(() => {
          switch (u) {
            case j.l7.CUSTOMIZE:
              return <b.Z guildId={t} onBrowseChannels={() => m(j.l7.BROWSE)} />;
            case j.l7.BROWSE:
            default:
              return <f.Z guildId={t} />
          }
        })()}</div>}</div>}{y && <f.I channelId={h} />}</l.Fragment>
}