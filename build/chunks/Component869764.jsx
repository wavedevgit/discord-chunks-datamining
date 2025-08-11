/** Chunk was on 58227 **/
/** chunk id: 869764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D,
  k: () => v
}), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk526120 = require("./526120.js"),
  Chunk563534 = require("./563534.js"),
  Chunk846121 = require("./846121.js"),
  Chunk216701 = require("./216701.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk411114 = require("./411114.js");

function v(e) {
  var {
    title: t,
    emojiId: n,
    emojiName: i,
    icon: r,
    completed: a,
    Icon: c,
    onClick: d
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, l, i = function(e, t) {
      if (null == e) return {};
      var n, l, i = {},
        r = Object.keys(e);
      for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["title", "emojiId", "emojiName", "icon", "completed", "Icon", "onClick"]);
  let m = "channel" === u.variant ? u.channelId : null,
    h = "static" === u.variant ? u.subtitle : u.channelName,
    I = null != m ? N.ZP.getNewMemberActionIconURL({
      channelId: m,
      icon: r
    }) : null;
  return (0, l.jsxs)(o.Zbd, {
    className: s()(j.action, {
      [j.clickableAction]: null != d
    }),
    onClick: d,
    children: [null != I ? (0, l.jsx)("img", {
      src: I,
      className: j.icon,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": true
    }) : (0, l.jsx)(T.Z, {
      emojiId: n,
      emojiName: i,
      size: T.R.LARGE,
      defaultComponent: (0, l.jsx)("div", {
        className: j.channelIconContainer,
        children: (0, l.jsx)(c, {
          className: j.channelIcon,
          color: "currentColor"
        })
      })
    }), (0, l.jsxs)("div", {
      className: j.actionInfo,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), null != h ? (0, l.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: h
      }) : null]
    }), a ? (0, l.jsx)(o.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: "#fff",
      className: j.checkCircleCompleted
    }) : (0, l.jsx)(g.Z, {
      className: j.checkCircle,
      width: 24,
      height: 24
    })]
  })
}

function b(e) {
  var t;
  let {
    action: n,
    completed: r
  } = e, {
    channelId: s,
    title: m,
    emoji: h,
    icon: g
  } = n, {
    id: N,
    name: f
  } = null != h ? h : {}, p = (0, a.e7)([u.Z], () => u.Z.getChannel(s)), E = (0, c.ZP)(p, true), T = (0, a.e7)([I.Z], () => I.Z.can(O.Plq.VIEW_CHANNEL, p)), x = i.useMemo(() => {
    if (null != p) return () => (0, S.gp)(p.guild_id, p.id)
  }, [p]);
  if (null == p || !T) return null;
  let _ = null != (t = (0, d.KS)(p)) ? t : o.VL1;
  return (0, l.jsx)(v, {
    variant: "channel",
    channelId: s,
    title: m,
    channelName: E,
    emojiId: N,
    emojiName: f,
    icon: g,
    completed: r,
    Icon: _,
    onClick: x
  })
}

function D(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([p.Z], () => p.Z.getNewMemberActions(t), [t]), r = (0, a.e7)([E.Z], () => E.Z.getCompletedActions(t)), c = (0, a.e7)([m.ZP], () => m.ZP.getSelfMember(t)), d = (0, a.e7)([h.Z], () => h.Z.getGuild(t));
  i.useEffect(() => {
    var e;
    null == r && (null == c ? true : c.flags) != null && (0, f.yE)(null != (e = c.flags) ? e : 0, x.q.STARTED_HOME_ACTIONS) && (0, S.Fg)(t)
  }, [r, t, null == c ? true : c.flags]);
  let u = i.useCallback(() => {
    null != d && null != d.rulesChannelId && (0, S.gp)(d.id, d.rulesChannelId)
  }, [d]);
  return null == c || null == n || 0 === n.length ? null : (0, l.jsxs)("div", {
    className: j.container,
    children: [(0, l.jsx)(o.X6q, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: _.intl.string(_.t.LhlgY2)
    }), n.map(e => (0, l.jsx)(b, {
      action: e,
      completed: (null == r ? true : r[e.channelId]) === true,
      guildId: t
    }, e.channelId)), (null == d ? true : d.rulesChannelId) != null && (0, l.jsxs)(o.Zbd, {
      className: s()(j.action, j.clickableAction),
      onClick: u,
      children: [(0, l.jsx)("div", {
        className: j.rulesIconContainer,
        children: (0, l.jsx)(o.snC, {
          size: "xs",
          color: "currentColor",
          className: j.rulesIcon
        })
      }), (0, l.jsx)("div", {
        className: j.actionInfo,
        children: (0, l.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: _.intl.string(_.t["K/i3iY"])
        })
      })]
    })]
  })
}