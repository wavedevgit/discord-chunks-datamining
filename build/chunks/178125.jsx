/** Chunk was on 95257 **/
/** chunk id: 178125, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk856768 = require("./856768.js"),
  Chunk324067 = require("./324067.js"),
  Chunk771845 = require("./771845.js"),
  Chunk9156 = require("./9156.js"),
  Chunk117984 = require("./117984.js"),
  Chunk593214 = require("./593214.js"),
  Chunk378337 = require("./378337.js"),
  Chunk388032 = require("./388032.js"),
  Chunk918492 = require("./918492.js");

function p(e) {
  let {
    transitionState: n,
    onClose: l,
    parentId: a
  } = e, c = (0, d.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]), [u, v] = i.useState(c), [f, m] = i.useState(false);
  return <r.Y0X transitionState={n} parentComponent={"AddFavoriteChannelModal"}>{<r.xBx className={j.modalHeader}>{<div className={j.modalHeaderTitle}>{<r.X6q variant={"text-lg/semibold"}>{g.intl.string(g.t["4wcdEx"])}</r.X6q>}{<r.olH onClick={l} />}</div>}{<div className={j.guildSelector}><s.q guildId={u} onChange={function(e) {
            null != e && v(e.id)
          }} /></div>}</r.xBx>}{<r.hzk className={j.modalContent}><C guildId={u} hideMutedChannels={f} parentId={a} /></r.hzk>}{<r.mzw className={j.modalFooter}>{<o.zx className={j.goBackButton} look={o.iL.BLANK} color={o.Tt.PRIMARY} size={o.Ph.SMALL} onClick={l}>{g.intl.string(g.t["/g10LC"])}</o.zx>}{<div><r.XZJ type={r.XZJ.Types.INVERTED} value={f} onChange={(e, n) => m(n)}><r.Text variant={"text-sm/medium"} color={"interactive-normal"}>{g.intl.string(g.t.UwOLJC)}</r.Text></r.XZJ></div>}</r.mzw>}</r.Y0X>
}

function C(e) {
  let {
    guildId: n,
    hideMutedChannels: l,
    parentId: o
  } = e, r = (0, d.e7)([u.Z], () => u.Z.getCategories(n)), c = (0, x.Z)(r), s = i.useRef(null);
  return i.useEffect(() => {
    var e;
    null == s || null == (e = s.current) || e.scroll({
      top: 0
    })
  }, [n]), <div ref={s}>{c.map(e => e.type === a.d.GUILD_CATEGORY ? (0, t.jsx)(Z, {
      name: e.name
    }, e.id) : (0, t.jsx)(_, {
      channel: e,
      hideMutedChannels: l,
      parentId: o
    }, e.id))}</div>
}

function Z(e) {
  let {
    name: n
  } = e;
  return <r.Text className={j.categoryRow} variant={"eyebrow"} color={"interactive-normal"}>{n}</r.Text>
}

function _(e) {
  let {
    channel: n,
    hideMutedChannels: l,
    parentId: i
  } = e, a = (0, m.s4)(n.id);
  if ((0, d.e7)([v.ZP], () => v.ZP.isChannelMuted(n.guild_id, n.id)) && l) return null;
  let o = (0, c.KS)(n);
  return <div className={j.channelRow}>{<div className={j.channelName}>{null != o && <div className={j.channelIconContainer}><o className={j.channelIcon} size={"custom"} color={"currentColor"} height={20} width={20} /></div>}{<r.Text variant={"text-md/medium"} color={"interactive-normal"}>{n.name}</r.Text>}</div>}{null != a ? <b channelId={n.id} /> : <I channelId={n.id} parentId={i} />}</div>
}

function I(e) {
  let {
    channelId: n,
    parentId: l
  } = e;
  return <o.zx look={o.iL.OUTLINED} size={o.Ph.SMALL} color={o.Tt.BRAND} onClick={function() {
      (0, f.kj)(n, l)
    }}>{g.intl.string(g.t.OYkgVl)}</o.zx>
}

function b(e) {
  let {
    channelId: n
  } = e;
  return <r.zxk variant={"secondary"} size={"sm"} text={g.intl.string(g.t.N86XcH)} onClick={function() {
      (0, f.oC)(n)
    }} />
}