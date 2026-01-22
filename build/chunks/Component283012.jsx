/** Chunk was on 50796 **/
/** chunk id: 283012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v,
  v: () => T
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk44234 = require("./44234.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk225142 = require("./225142.js"),
  Chunk701785 = require("./701785.js"),
  Chunk65995 = require("./65995.js"),
  Chunk111487 = require("./111487.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk658938 = require("./658938.js");

function T(e) {
  let {
    title: t,
    emojiId: n,
    emojiName: r,
    icon: i,
    completed: a,
    Icon: o,
    onClick: d
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }(e, ["title", "emojiId", "emojiName", "icon", "completed", "Icon", "onClick"]), m = "channel" === u.variant ? u.channelId : null, g = "static" === u.variant ? u.subtitle : u.channelName, f = null != m ? I.Ay.getNewMemberActionIconURL({
    channelId: m,
    icon: i
  }) : null;
  return (0, l.jsxs)(c.ZpM, {
    className: s()(j.XI, {
      [j.xU]: null != d
    }),
    onClick: d,
    children: [null != f ? (0, l.jsx)("img", {
      src: f,
      className: j.Kk,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": true
    }) : (0, l.jsx)(E.A, {
      emojiId: n,
      emojiName: r,
      size: E.g.LARGE,
      defaultComponent: (0, l.jsx)("div", {
        className: j.uM,
        children: (0, l.jsx)(o, {
          className: j.p,
          color: "currentColor"
        })
      })
    }), (0, l.jsxs)("div", {
      className: j.$I,
      children: [(0, l.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: t
      }), null != g ? (0, l.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g
      }) : null]
    }), a ? (0, l.jsx)(c.yr3, {
      size: "md",
      color: "currentColor",
      secondaryColor: "#fff",
      className: j.Yb
    }) : (0, l.jsx)(N.A, {
      className: j.t3,
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
    channelId: s,
    title: a,
    emoji: g,
    icon: f
  } = n, {
    id: N,
    name: I
  } = null != g ? g : {}, O = (0, o.bG)([m.A], () => m.A.getChannel(s)), S = (0, d.Ay)(O, true), E = (0, o.bG)([h.A], () => h.A.can(A.xBc.VIEW_CHANNEL, O)), x = r.useMemo(() => {
    if (null != O) return () => (0, p.qo)(O.guild_id, O.id)
  }, [O]);
  if (null == O || !E) return null;
  let _ = null != (t = (0, u.gU)(O)) ? t : c.N$i;
  return (0, l.jsx)(T, {
    variant: "channel",
    channelId: s,
    title: a,
    channelName: S,
    emojiId: N,
    emojiName: I,
    icon: f,
    completed: i,
    Icon: _,
    onClick: x
  })
}

function v(e) {
  let {
    guildId: t
  } = e, n = (0, o.bG)([O.h], () => O.h.getNewMemberActions(t), [t]), i = (0, o.bG)([S.A], () => S.A.getCompletedActions(t)), d = (0, o.bG)([g.Ay], () => g.Ay.getSelfMember(t)), u = (0, o.bG)([f.A], () => f.A.getGuild(t));
  r.useEffect(() => {
    var e;
    null == i && (null == d ? true : d.flags) != null && (0, a.Lt)(null != (e = d.flags) ? e : 0, x.D.STARTED_HOME_ACTIONS) && (0, p.aW)(t)
  }, [i, t, null == d ? true : d.flags]);
  let m = r.useCallback(() => {
    null != u && null != u.rulesChannelId && (0, p.qo)(u.id, u.rulesChannelId)
  }, [u]);
  return null == d || null == n || 0 === n.length ? null : (0, l.jsxs)("div", {
    className: j.kL,
    children: [(0, l.jsx)(c.Heading, {
      variant: "heading-lg/bold",
      color: "text-strong",
      children: _.intl.string(_.t.LhlgY9)
    }), n.map(e => (0, l.jsx)(b, {
      action: e,
      completed: (null == i ? true : i[e.channelId]) === true,
      guildId: t
    }, e.channelId)), (null == u ? true : u.rulesChannelId) != null && (0, l.jsxs)(c.ZpM, {
      className: s()(j.XI, j.xU),
      onClick: m,
      children: [(0, l.jsx)("div", {
        className: j.KK,
        children: (0, l.jsx)(c.B8Q, {
          size: "xs",
          color: "currentColor",
          className: j.ZO
        })
      }), (0, l.jsx)("div", {
        className: j.$I,
        children: (0, l.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: _.intl.string(_.t["K/i3iQ"])
        })
      })]
    })]
  })
}