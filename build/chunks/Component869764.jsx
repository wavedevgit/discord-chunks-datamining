/** Chunk was on 58227 **/
/** chunk id: 869764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D,
  k: () => v
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk95015 = require("./95015.js"),
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
  Chunk526120 = require("./526120.js"),
  Chunk563534 = require("./563534.js"),
  Chunk846121 = require("./846121.js"),
  Chunk216701 = require("./216701.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk437449 = require("./437449.js");

function v(e) {
  var {
    title: t,
    emojiId: n,
    emojiName: i,
    icon: r,
    completed: s,
    Icon: o,
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
    g = "static" === u.variant ? u.subtitle : u.channelName,
    f = null != m ? I.ZP.getNewMemberActionIconURL({
      channelId: m,
      icon: r
    }) : null;
  return (0, l.jsxs)(c.Zbd, {
    className: a()(j.action, {
      [j.clickableAction]: null != d
    }),
    onClick: d,
    children: [null != f ? (0, l.jsx)("img", {
      src: f,
      className: j.icon,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": true
    }) : (0, l.jsx)(S.Z, {
      emojiId: n,
      emojiName: i,
      size: S.R.LARGE,
      defaultComponent: (0, l.jsx)("div", {
        className: j.channelIconContainer,
        children: (0, l.jsx)(o, {
          className: j.channelIcon,
          color: "currentColor"
        })
      })
    }), (0, l.jsxs)("div", {
      className: j.actionInfo,
      children: [(0, l.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), null != g ? (0, l.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g
      }) : null]
    }), s ? (0, l.jsx)(c.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: "#fff",
      className: j.checkCircleCompleted
    }) : (0, l.jsx)(N.Z, {
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
    channelId: a,
    title: s,
    emoji: g,
    icon: f
  } = n, {
    id: N,
    name: I
  } = null != g ? g : {}, O = (0, o.e7)([m.Z], () => m.Z.getChannel(a)), E = (0, d.ZP)(O, true), S = (0, o.e7)([h.Z], () => h.Z.can(x.Plq.VIEW_CHANNEL, O)), T = i.useMemo(() => {
    if (null != O) return () => (0, p.gp)(O.guild_id, O.id)
  }, [O]);
  if (null == O || !S) return null;
  let _ = null != (t = (0, u.KS)(O)) ? t : c.VL1;
  return (0, l.jsx)(v, {
    variant: "channel",
    channelId: a,
    title: s,
    channelName: E,
    emojiId: N,
    emojiName: I,
    icon: f,
    completed: r,
    Icon: _,
    onClick: T
  })
}

function D(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([O.Z], () => O.Z.getNewMemberActions(t), [t]), r = (0, o.e7)([E.Z], () => E.Z.getCompletedActions(t)), d = (0, o.e7)([g.ZP], () => g.ZP.getSelfMember(t)), u = (0, o.e7)([f.Z], () => f.Z.getGuild(t));
  i.useEffect(() => {
    var e;
    null == r && (null == d ? true : d.flags) != null && (0, s.yE)(null != (e = d.flags) ? e : 0, T.q.STARTED_HOME_ACTIONS) && (0, p.Fg)(t)
  }, [r, t, null == d ? true : d.flags]);
  let m = i.useCallback(() => {
    null != u && null != u.rulesChannelId && (0, p.gp)(u.id, u.rulesChannelId)
  }, [u]);
  return null == d || null == n || 0 === n.length ? null : (0, l.jsxs)("div", {
    className: j.container,
    children: [(0, l.jsx)(c.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: _.intl.string(_.t.LhlgY9)
    }), n.map(e => (0, l.jsx)(b, {
      action: e,
      completed: (null == r ? true : r[e.channelId]) === true,
      guildId: t
    }, e.channelId)), (null == u ? true : u.rulesChannelId) != null && (0, l.jsxs)(c.Zbd, {
      className: a()(j.action, j.clickableAction),
      onClick: m,
      children: [(0, l.jsx)("div", {
        className: j.rulesIconContainer,
        children: (0, l.jsx)(c.snC, {
          size: "xs",
          color: "currentColor",
          className: j.rulesIcon
        })
      }), (0, l.jsx)("div", {
        className: j.actionInfo,
        children: (0, l.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: _.intl.string(_.t["K/i3iQ"])
        })
      })]
    })]
  })
}