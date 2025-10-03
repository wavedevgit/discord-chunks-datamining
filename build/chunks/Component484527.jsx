/** Chunk was on 89311 **/
/** chunk id: 484527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  let {
    detectedGame: t,
    trackClick: n,
    onInviteResolved: l,
    closeModal: j
  } = e, [O, y] = i.useState(), I = (0, o.e7)([m.Z], () => {
    var e, t;
    return (null == O || null == (e = O.guild) ? true : e.id) != null && m.Z.isMember(null == O || null == (t = O.guild) ? true : t.id)
  }), b = i.useMemo(() => {
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
          if (null != O && O.code.toLowerCase() === t.toLowerCase()) return;
          let e = await (0, u.Z)(t);
          true !== e.banned && (y(e.invite), null != e.invite && (null == l || l(e.invite)))
        }
      };
      null != b && e(b.url)
    }, [b, l, O]), null == O || null == O.guild || !O.guild.features.includes(x.oNc.VERIFIED)) return null;
  let E = f.ZP.getGuildIconURL({
    id: O.guild.id,
    icon: O.guild.icon,
    size: 32
  });
  return (0, r.jsxs)("div", {
    className: h.column,
    children: [(0, r.jsx)(c.X6q, {
      className: h.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: g.intl.string(g.t.kBDZSE)
    }), (0, r.jsxs)("div", {
      className: a()(h.row, h.gapMd),
      children: [(0, r.jsx)("img", {
        className: v.guildIcon,
        src: E,
        alt: g.intl.formatToPlainString(g.t.xm6W9P, {
          guildName: O.guild.name
        })
      }), (0, r.jsxs)("div", {
        className: v.inviteInfo,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: O.guild.name
        }), null != O.approximate_member_count && (0, r.jsx)(c.Text, {
          variant: "text-xxs/normal",
          children: g.intl.format(g.t.zRl6XV, {
            count: O.approximate_member_count
          })
        })]
      })]
    }), (0, r.jsx)(c.zxk, {
      variant: "secondary",
      text: I ? g.intl.string(g.t.cEnaW1) : g.intl.string(g.t.XpeFYm),
      onClick: () => {
        j(), n(p.as.JoinOfficialServer), d.Z.dispatch({
          type: "INVITE_MODAL_OPEN",
          invite: O,
          code: O.code,
          context: x.IlC.APP
        })
      }
    })]
  })
}