/** Chunk was on 12009 **/
/** chunk id: 605276, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk368844 = require("./368844.js"),
  Chunk65361 = require("./65361.js"),
  Chunk798476 = require("./798476.js"),
  Chunk6025 = require("./6025.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk526120 = require("./526120.js"),
  Chunk825334 = require("./825334.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617449 = require("./617449.js");
let v = Chunk73800.memo(function(e) {
    let {
      guild: n
    } = e, {
      guildProfile: t,
      fetchGuildProfile: a
    } = (0, o.u)(n.id);
    return (r.useEffect(() => {
      a()
    }, [a]), null == t) ? null : <d.ZP profile={t} disableCTA={true} disableGuildNameClick={true} />
  }),
  _ = e => {
    let {
      channelId: n,
      title: t,
      icon: o
    } = e, d = (0, a.e7)([m.Z], () => m.Z.getChannel(n)), x = (0, a.e7)([h.Z], () => h.Z.getMessages(n)), j = (0, a.e7)([f.Z], () => f.Z.can(b.Plq.VIEW_CHANNEL, d)), v = x.first(), _ = (0, c.zy)(v, false), Z = (null == _ ? true : _.length) > 0 ? _[0] : null, I = null != d && null == v && !x.loadingMore && !x.ready && !x.hasFetched && j;
    r.useEffect(() => {
      I && s.Z.fetchMessages({
        channelId: n,
        after: n,
        limit: 5
      })
    }, [n, I]);
    let y = e => {
      null != d && (e.shiftKey ? (0, p.C3)(d.guild_id, d.id) : u.Z.openResourceChannelAsSidebar({
        guildId: d.guild_id,
        channelId: d.id
      }))
    };
    return <i.P3F className={C.resourceChannel} onClick={e => y(e)}><l.Fragment>{(() => {
          let e = g.ZP.getResourceChannelIconURL({
            channelId: n,
            icon: o
          });
          return null != o && null != e ? <img src={e} className={C.resourceImage} alt={""} aria-hidden={true} /> : null != Z ? <img className={C.resourceImage} src={Z.src} alt={Z.alt} /> : <div className={C.placeholderImage}><i.hH0 size={"xs"} color={"currentColor"} /></div>
        })()}{<i.Text className={C.guildInfoText} variant={"text-sm/semibold"} color={"none"}>{t}</i.Text>}</l.Fragment></i.P3F>
  },
  Z = Chunk73800.memo(function(e) {
    let {
      guild: n
    } = e, t = (0, x.Z)(n.id);
    return 0 === t.length ? null : <i.Zbd className={C.sidebarCardWrapper}><div className={C.sidebarCard}>{<i.X6q className={C.sidebarCardHeader} variant={"heading-md/bold"} color={"header-primary"}>{j.intl.string(j.t.xwY4LS)}</i.X6q>}{<div className={C.resourceChannelsList}>{t.map(e => (0, l.jsx)(_, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))}</div>}</div></i.Zbd>
  }),
  I = Chunk73800.memo(function(e) {
    let {
      guild: n,
      isNewMember: t
    } = e;
    return <aside className={C.sidebar}>{<v guild={n} />}{t && <Z guild={n} />}</aside>
  })