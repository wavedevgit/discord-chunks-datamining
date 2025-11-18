/** Chunk was on 89311 **/
/** chunk id: 484527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk643872 = require("./643872.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk652898 = require("./652898.js"),
  Chunk93093 = require("./93093.js"),
  Chunk768581 = require("./768581.js"),
  Chunk810568 = require("./810568.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456486 = require("./456486.js"),
  Chunk863453 = require("./863453.js");

function O(e) {
  let {
    detectedGame: t,
    trackClick: n,
    onInviteResolved: r,
    closeModal: O
  } = e, [y, I] = l.useState(), b = (0, o.e7)([f.Z], () => {
    var e, t;
    return (null == y || null == (e = y.guild) ? true : e.id) != null && f.Z.isMember(null == y || null == (t = y.guild) ? true : t.id)
  }), E = l.useMemo(() => {
    var e;
    return null == (e = t.websites) ? true : e.find(e => {
      let {
        category: t
      } = e;
      return t === s.p.DISCORD
    })
  }, [t.websites]);
  if (l.useEffect(() => {
      let e = async e => {
        let t = e.split("/").pop();
        if (null != t) {
          if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
          let e = await (0, m.Z)(t);
          true !== e.banned && (I(e.invite), null != e.invite && (null == r || r(e.invite)))
        }
      };
      null != E && e(E.url)
    }, [E, r, y]), null == y || null == y.guild || !y.guild.features.includes(x.GuildFeatures.VERIFIED)) return null;
  let N = g.ZP.getGuildIconURL({
    id: y.guild.id,
    icon: y.guild.icon,
    size: 32
  });
  return (0, i.jsxs)("div", {
    className: v.column,
    children: [(0, i.jsx)(c.Heading, {
      className: v.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: h.intl.string(h.t.kBDZSL)
    }), (0, i.jsxs)("div", {
      className: a()(v.row, v.gapMd),
      children: [(0, i.jsx)("img", {
        className: j.guildIcon,
        src: N,
        alt: h.intl.formatToPlainString(h.t.xm6W9D, {
          guildName: y.guild.name
        })
      }), (0, i.jsxs)("div", {
        className: j.inviteInfo,
        children: [(0, i.jsxs)("div", {
          className: j.guildNameContainer,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: y.guild.name
          }), (0, i.jsx)(u.Z, {
            guild: y.guild,
            size: 16
          })]
        }), null != y.approximate_member_count && (0, i.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-tertiary",
          children: h.intl.format(h.t.zRl6XR, {
            count: y.approximate_member_count
          })
        })]
      })]
    }), (0, i.jsx)(c.Button, {
      variant: "secondary",
      text: b ? h.intl.string(h.t.cEnaWx) : h.intl.string(h.t.XpeFYr),
      onClick: () => {
        O(), n(p.as.JoinOfficialServer), d.Z.dispatch({
          type: "INVITE_MODAL_OPEN",
          invite: y,
          code: y.code,
          context: x.IlC.APP
        })
      },
      fullWidth: true
    })]
  })
}