/** Chunk was on 89311 **/
/** chunk id: 484527, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk226788 = require("./226788.js"),
  Chunk943987 = require("./943987.js");

function h(e) {
  let {
    detectedGame: t,
    trackClick: r,
    onInviteResolved: l,
    closeModal: h
  } = e, [v, b] = i.useState(), y = (0, o.e7)([m.Z], () => {
    var e, t;
    return (null == v || null == (e = v.guild) ? true : e.id) != null && m.Z.isMember(null == v || null == (t = v.guild) ? true : t.id)
  }), P = i.useMemo(() => {
    var e;
    return null == (e = t.websites) ? true : e.find(e => {
      let {
        category: t
      } = e;
      return t === s.p.DISCORD
    })
  }, [t.websites]);
  if (i.useEffect(() => {
      let e = async e => {
        let t = e.split("/").pop();
        if (null != t) {
          if (null != v && v.code.toLowerCase() === t.toLowerCase()) return;
          let e = await (0, d.Z)(t);
          true !== e.banned && (b(e.invite), null != e.invite && (null == l || l(e.invite)))
        }
      };
      null != P && e(P.url)
    }, [P, l, v]), null == v || null == v.guild || !v.guild.features.includes(g.oNc.VERIFIED)) return null;
  let w = p.ZP.getGuildIconURL({
    id: v.guild.id,
    icon: v.guild.icon,
    size: 32
  });
  return (0, n.jsxs)("div", {
    className: x.column,
    children: [(0, n.jsx)(c.X6q, {
      className: x.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: j.intl.string(j.t.kBDZSE)
    }), (0, n.jsxs)("div", {
      className: a()(x.row, x.gapMd),
      children: [(0, n.jsx)("img", {
        className: O.guildIcon,
        src: w,
        alt: j.intl.formatToPlainString(j.t.xm6W9P, {
          guildName: v.guild.name
        })
      }), (0, n.jsxs)("div", {
        className: O.inviteInfo,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: v.guild.name
        }), null != v.approximate_member_count && (0, n.jsx)(c.Text, {
          variant: "text-xxs/normal",
          children: j.intl.format(j.t.zRl6XV, {
            count: v.approximate_member_count
          })
        })]
      })]
    }), (0, n.jsx)(c.zxk, {
      variant: "secondary",
      text: y ? j.intl.string(j.t.cEnaW1) : j.intl.string(j.t.XpeFYm),
      onClick: () => {
        h(), r(f.as.JoinOfficialServer), u.Z.dispatch({
          type: "INVITE_MODAL_OPEN",
          invite: v,
          code: v.code,
          context: g.IlC.APP
        })
      }
    })]
  })
}