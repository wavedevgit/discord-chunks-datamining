/** Chunk was on 58227 **/
/** chunk id: 869764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D,
  k: () => v
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk195286 = require("./195286.js");

function v(e) {
  var {
    title: t,
    emojiId: n,
    emojiName: r,
    icon: i,
    completed: s,
    Icon: c,
    onClick: d
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, l, r = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        i = Object.keys(e);
      for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["title", "emojiId", "emojiName", "icon", "completed", "Icon", "onClick"]);
  let m = "channel" === u.variant ? u.channelId : null,
    g = "static" === u.variant ? u.subtitle : u.channelName,
    h = null != m ? N.ZP.getNewMemberActionIconURL({
      channelId: m,
      icon: i
    }) : null;
  return (0, l.jsxs)(o.Zbd, {
    className: a()(j.action, {
      [j.clickableAction]: null != d
    }),
    onClick: d,
    children: [null != h ? (0, l.jsx)("img", {
      src: h,
      className: j.icon,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": true
    }) : (0, l.jsx)(S.Z, {
      emojiId: n,
      emojiName: r,
      size: S.R.LARGE,
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
      }), null != g ? (0, l.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g
      }) : null]
    }), s ? (0, l.jsx)(o.owK, {
      size: "md",
      color: "currentColor",
      secondaryColor: "#fff",
      className: j.checkCircleCompleted
    }) : (0, l.jsx)(f.Z, {
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
    completed: i
  } = e, {
    channelId: a,
    title: m,
    emoji: g,
    icon: f
  } = n, {
    id: N,
    name: I
  } = null != g ? g : {}, O = (0, s.e7)([u.Z], () => u.Z.getChannel(a)), E = (0, c.ZP)(O, true), S = (0, s.e7)([h.Z], () => h.Z.can(x.Plq.VIEW_CHANNEL, O)), T = r.useMemo(() => {
    if (null != O) return () => (0, p.gp)(O.guild_id, O.id)
  }, [O]);
  if (null == O || !S) return null;
  let _ = null != (t = (0, d.KS)(O)) ? t : o.VL1;
  return (0, l.jsx)(v, {
    variant: "channel",
    channelId: a,
    title: m,
    channelName: E,
    emojiId: N,
    emojiName: I,
    icon: f,
    completed: i,
    Icon: _,
    onClick: T
  })
}

function D(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([O.Z], () => O.Z.getNewMemberActions(t), [t]), i = (0, s.e7)([E.Z], () => E.Z.getCompletedActions(t)), c = (0, s.e7)([m.ZP], () => m.ZP.getSelfMember(t)), d = (0, s.e7)([g.Z], () => g.Z.getGuild(t));
  r.useEffect(() => {
    var e;
    null == i && (null == c ? true : c.flags) != null && (0, I.yE)(null != (e = c.flags) ? e : 0, T.q.STARTED_HOME_ACTIONS) && (0, p.Fg)(t)
  }, [i, t, null == c ? true : c.flags]);
  let u = r.useCallback(() => {
    null != d && null != d.rulesChannelId && (0, p.gp)(d.id, d.rulesChannelId)
  }, [d]);
  return null == c || null == n || 0 === n.length ? null : (0, l.jsxs)("div", {
    className: j.container,
    children: [(0, l.jsx)(o.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: _.intl.string(_.t.LhlgY9)
    }), n.map(e => (0, l.jsx)(b, {
      action: e,
      completed: (null == i ? true : i[e.channelId]) === true,
      guildId: t
    }, e.channelId)), (null == d ? true : d.rulesChannelId) != null && (0, l.jsxs)(o.Zbd, {
      className: a()(j.action, j.clickableAction),
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
          children: _.intl.string(_.t["K/i3iQ"])
        })
      })]
    })]
  })
}