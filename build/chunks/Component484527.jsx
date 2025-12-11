/** Chunk was on 89311 **/
/** chunk id: 484527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk452379 = require("./452379.js"),
  Chunk214636 = require("./214636.js");

function b(e) {
  let {
    detectedGame: t,
    trackClick: n,
    onInviteResolved: r,
    closeModal: b
  } = e, [y, I] = i.useState(), O = (0, s.e7)([f.Z], () => {
    var e, t;
    return (null == y || null == (e = y.guild) ? true : e.id) != null && f.Z.isMember(null == y || null == (t = y.guild) ? true : t.id)
  }), P = i.useMemo(() => {
    var e;
    return null == (e = t.websites) ? true : e.find(e => {
      let {
        category: t
      } = e;
      return t === o.p.DISCORD
    })
  }, [t.websites]);
  if (i.useEffect(() => {
      let e = async e => {
        let t = e.split("/").pop();
        if (null != t) {
          if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
          let e = await (0, m.Z)(t);
          true !== e.banned && (I(e.invite), null != e.invite && (null == r || r(e.invite)))
        }
      };
      null != P && e(P.url)
    }, [P, r, y]), null == y || null == y.guild || !y.guild.features.includes(x.GuildFeatures.VERIFIED)) return null;
  let w = g.ZP.getGuildIconURL({
    id: y.guild.id,
    icon: y.guild.icon,
    size: 32
  });
  return (0, a.jsxs)("div", {
    className: h.column,
    children: [(0, a.jsx)(c.Heading, {
      className: h.sectionHeader,
      variant: "text-xs/semibold",
      color: "text-default",
      children: v.intl.string(v.t.kBDZSL)
    }), (0, a.jsxs)("div", {
      className: l()(h.row, h.gapMd),
      children: [(0, a.jsx)("img", {
        className: j.guildIcon,
        src: w,
        alt: v.intl.formatToPlainString(v.t.xm6W9D, {
          guildName: y.guild.name
        })
      }), (0, a.jsxs)("div", {
        className: j.inviteInfo,
        children: [(0, a.jsxs)("div", {
          className: j.guildNameContainer,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: y.guild.name
          }), (0, a.jsx)(u.Z, {
            guild: y.guild,
            size: 16
          })]
        }), null != y.approximate_member_count && (0, a.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: v.intl.format(v.t.zRl6XR, {
            count: y.approximate_member_count
          })
        })]
      })]
    }), (0, a.jsx)(c.Button, {
      variant: "secondary",
      text: O ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
      onClick: () => {
        b(), n(p.as.JoinOfficialServer), d.Z.dispatch({
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