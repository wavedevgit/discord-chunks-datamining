/** Chunk was on 13530 **/
/** chunk id: 639714, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => b,
  o: () => y
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
    trackClick: l,
    onInviteResolved: a,
    closeModal: b
  } = e, [y, A] = i.useState(), N = (0, o.bG)([x.A], () => {
    var e, t;
    return (null == y || null == (e = y.guild) ? true : e.id) != null && x.A.isMember(null == y || null == (t = y.guild) ? true : t.id)
  }), O = i.useMemo(() => {
    var e;
    return null == (e = t.websites) ? true : e.find(e => {
      let {
        category: t
      } = e;
      return t === s.w.DISCORD
    })
  }, [t.websites]);
  if (i.useEffect(() => {
      let e = async e => {
        let t = e.split("/").pop();
        if (null != t) {
          if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
          let e = await (0, m.A)(t);
          true !== e.banned && (A(e.invite), null != e.invite && (null == a || a(e.invite)))
        }
      };
      null != O && e(O.url)
    }, [O, a, y]), null == y || null == y.guild || !y.guild.features.includes(h.GuildFeatures.VERIFIED)) return null;
  let _ = f.Ay.getGuildIconURL({
    id: y.guild.id,
    icon: y.guild.icon,
    size: 32
  });
  return (0, n.jsxs)("div", {
    className: j.fi,
    children: [(0, n.jsx)(c.Heading, {
      className: j.bV,
      variant: "text-xs/semibold",
      color: "text-default",
      children: p.intl.string(p.t.kBDZSL)
    }), (0, n.jsxs)("div", {
      className: r()(j.nM, j.mX),
      children: [(0, n.jsx)("img", {
        className: v.$f,
        src: _,
        alt: p.intl.formatToPlainString(p.t.xm6W9D, {
          guildName: y.guild.name
        })
      }), (0, n.jsxs)("div", {
        className: v.U5,
        children: [(0, n.jsxs)("div", {
          className: v.YS,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: y.guild.name
          }), (0, n.jsx)(u.A, {
            guild: y.guild,
            size: 16
          })]
        }), null != y.approximate_member_count && (0, n.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: p.intl.format(p.t.zRl6XR, {
            count: y.approximate_member_count
          })
        })]
      })]
    }), (0, n.jsx)(c.Button, {
      variant: "secondary",
      text: N ? p.intl.string(p.t.cEnaWx) : p.intl.string(p.t.XpeFYr),
      onClick: () => {
        b(), l(g.Ws.JoinOfficialServer), d.h.dispatch({
          type: "INVITE_MODAL_OPEN",
          invite: y,
          code: y.code,
          context: h.BRT.APP
        })
      },
      fullWidth: true
    })]
  })
}

function y(e) {
  let {
    detectedGame: t,
    trackClick: l,
    onInviteResolved: a,
    closeModal: b
  } = e, [y, A] = i.useState(), N = i.useRef(null), O = i.useRef(a);
  i.useEffect(() => {
    O.current = a
  }, [a]);
  let _ = (0, o.bG)([x.A], () => {
      var e, t;
      return (null == y || null == (e = y.guild) ? true : e.id) != null && x.A.isMember(null == y || null == (t = y.guild) ? true : t.id)
    }),
    I = i.useMemo(() => {
      var e;
      return null == (e = t.websites) ? true : e.find(e => {
        let {
          category: t
        } = e;
        return t === s.w.DISCORD
      })
    }, [t.websites]);
  if (i.useEffect(() => {
      let e = async e => {
        let t = e.split("/").pop();
        if (null != t) {
          var l, n;
          if ((null == (l = N.current) ? true : l.toLowerCase()) === t.toLowerCase()) return;
          let e = await (0, m.A)(t);
          true !== e.banned && (N.current = t, A(e.invite), null != e.invite && (null == (n = O.current) || n.call(O, e.invite)))
        }
      };
      null != I && e(I.url)
    }, [I]), null == y || null == y.guild || !y.guild.features.includes(h.GuildFeatures.VERIFIED)) return null;
  let w = f.Ay.getGuildIconURL({
    id: y.guild.id,
    icon: y.guild.icon,
    size: 32
  });
  return (0, n.jsxs)("div", {
    className: j.fi,
    children: [(0, n.jsx)(c.Heading, {
      className: j.bV,
      variant: "text-xs/semibold",
      color: "text-default",
      children: p.intl.string(p.t.kBDZSL)
    }), (0, n.jsxs)("div", {
      className: r()(j.nM, j.mX),
      children: [(0, n.jsx)("img", {
        className: v.$f,
        src: w,
        alt: p.intl.formatToPlainString(p.t.xm6W9D, {
          guildName: y.guild.name
        })
      }), (0, n.jsxs)("div", {
        className: v.U5,
        children: [(0, n.jsxs)("div", {
          className: v.YS,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: y.guild.name
          }), (0, n.jsx)(u.A, {
            guild: y.guild,
            size: 16
          })]
        }), null != y.approximate_member_count && (0, n.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: p.intl.format(p.t.zRl6XR, {
            count: y.approximate_member_count
          })
        })]
      })]
    }), (0, n.jsx)(c.Button, {
      variant: "secondary",
      text: _ ? p.intl.string(p.t.cEnaWx) : p.intl.string(p.t.XpeFYr),
      onClick: () => {
        b(), l(g.Ws.JoinOfficialServer), d.h.dispatch({
          type: "INVITE_MODAL_OPEN",
          invite: y,
          code: y.code,
          context: h.BRT.APP
        })
      },
      fullWidth: true
    })]
  })
}