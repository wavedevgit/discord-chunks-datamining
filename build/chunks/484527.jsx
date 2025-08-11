/** Chunk was on 89311 **/
/** chunk id: 484527, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk643872 = require("./643872.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk652898 = require("./652898.js"),
  Chunk93093 = require("./93093.js"),
  Chunk768581 = require("./768581.js"),
  Chunk810568 = require("./810568.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk263930 = require("./263930.js"),
  Chunk926921 = require("./926921.js");

function h(e) {
  let {
    detectedGame: t,
    trackClick: r,
    onInviteResolved: i,
    closeModal: h
  } = e, [b, O] = a.useState(), y = (0, s.e7)([m.Z], () => {
    var e, t;
    return (null == b || null == (e = b.guild) ? true : e.id) != null && m.Z.isMember(null == b || null == (t = b.guild) ? true : t.id)
  }), _ = a.useMemo(() => {
    var e;
    return null == (e = t.websites) ? true : e.find(e => {
      let {
        category: t
      } = e;
      return t === o.p.DISCORD
    })
  }, [t.websites]);
  if (a.useEffect(() => {
      let e = async e => {
        let t = e.split("/").pop();
        if (null != t) {
          if (null != b && b.code.toLowerCase() === t.toLowerCase()) return;
          let e = await (0, u.Z)(t);
          true !== e.banned && (O(e.invite), null != e.invite && (null == i || i(e.invite)))
        }
      };
      null != _ && e(_.url)
    }, [_, i, b]), null == b || null == b.guild || !b.guild.features.includes(f.oNc.VERIFIED)) return null;
  let I = g.ZP.getGuildIconURL({
    id: b.guild.id,
    icon: b.guild.icon,
    size: 32
  });
  return <div className={j.column}>{<c.X6q className={j.sectionHeader} variant={"text-xs/semibold"} color={"header-secondary"}>{x.intl.string(x.t.kBDZSE)}</c.X6q>}{<div className={l()(j.row, j.gapMd)}>{<img className={v.guildIcon} src={I} alt={x.intl.formatToPlainString(x.t.xm6W9P, {
          guildName: b.guild.name
        })} />}{<div className={v.inviteInfo}>{<c.Text variant={"text-sm/normal"}>{b.guild.name}</c.Text>}{null != b.approximate_member_count && <c.Text variant={"text-xxs/normal"}>{x.intl.format(x.t.zRl6XV, {
            count: b.approximate_member_count
          })}</c.Text>}</div>}</div>}{<c.zxk variant={"secondary"} text={y ? x.intl.string(x.t.cEnaW1) : x.intl.string(x.t.XpeFYm)} onClick={() => {
        h(), r(p.as.JoinOfficialServer), d.Z.dispatch({
          type: "INVITE_MODAL_OPEN",
          invite: b,
          code: b.code,
          context: f.IlC.APP
        })
      }} />}</div>
}