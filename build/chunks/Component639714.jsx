/** Chunk was on 13530 **/
/** chunk id: 639714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk798236 = require("./798236.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk714991 = require("./714991.jsx"),
  Chunk970163 = require("./970163.js"),
  Chunk184989 = require("./184989.js"),
  Chunk486020 = require("./486020.js"),
  Chunk409626 = require("./409626.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk921380 = require("./921380.js");

function b(e) {
  let {
    detectedGame: t,
    trackClick: n,
    onInviteResolved: i,
    closeModal: b
  } = e, [y, O] = r.useState(), A = (0, o.bG)([f.A], () => {
    var e, t;
    return (null == y || null == (e = y.guild) ? true : e.id) != null && f.A.isMember(null == y || null == (t = y.guild) ? true : t.id)
  }), _ = r.useMemo(() => {
    var e;
    return null == (e = t.websites) ? true : e.find(e => {
      let {
        category: t
      } = e;
      return t === s.w.DISCORD
    })
  }, [t.websites]);
  if (r.useEffect(() => {
      let e = async e => {
        let t = e.split("/").pop();
        if (null != t) {
          if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
          let e = await (0, m.A)(t);
          true !== e.banned && (O(e.invite), null != e.invite && (null == i || i(e.invite)))
        }
      };
      null != _ && e(_.url)
    }, [_, i, y]), null == y || null == y.guild || !y.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
  let I = g.Ay.getGuildIconURL({
    id: y.guild.id,
    icon: y.guild.icon,
    size: 32
  });
  return (0, l.jsxs)("div", {
    className: h.fi,
    children: [(0, l.jsx)(c.Heading, {
      className: h.bV,
      variant: "text-xs/semibold",
      color: "text-default",
      children: j.intl.string(j.t.kBDZSL)
    }), (0, l.jsxs)("div", {
      className: a()(h.nM, h.mX),
      children: [(0, l.jsx)("img", {
        className: v.$f,
        src: I,
        alt: j.intl.formatToPlainString(j.t.xm6W9D, {
          guildName: y.guild.name
        })
      }), (0, l.jsxs)("div", {
        className: v.U5,
        children: [(0, l.jsxs)("div", {
          className: v.YS,
          children: [(0, l.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: y.guild.name
          }), (0, l.jsx)(d.A, {
            guild: y.guild,
            size: 16
          })]
        }), null != y.approximate_member_count && (0, l.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.zRl6XR, {
            count: y.approximate_member_count
          })
        })]
      })]
    }), (0, l.jsx)(c.Button, {
      variant: "secondary",
      text: A ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
      onClick: () => {
        b(), n(x.Ws.JoinOfficialServer), u.h.dispatch({
          type: "INVITE_MODAL_OPEN",
          invite: y,
          code: y.code,
          context: p.BRT.APP
        })
      },
      fullWidth: true
    })]
  })
}