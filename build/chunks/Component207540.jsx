/** Chunk was on 79521 **/
/** chunk id: 207540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk156699 = require("./156699.js"),
  Chunk734893 = require("./734893.js"),
  Chunk693196 = require("./693196.js"),
  Chunk66999 = require("./66999.js"),
  Chunk575830 = require("./575830.js"),
  Chunk554747 = require("./554747.js"),
  Chunk434404 = require("./434404.js"),
  Chunk144140 = require("./144140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let C = e => {
  let {
    channel: t,
    onClose: n,
    onConfirm: C,
    transitionState: v
  } = e, S = (0, o.ZP)(t, true), I = t.id, P = t.isForumPost(), T = (0, u.e7)([m.Z], () => m.Z.getGuild(t.getGuildId())), D = (0, N.u1)(I), {
    isSubscriptionGated: y
  } = (0, E.Z)(t.id), b = (0, f.Z)(T, t), [G, w] = i.useState(), A = (0, u.e7)([Z.default], () => t.isOwner(Z.default.getId()), [t]), U = (0, u.e7)([h.Z], () => h.Z.can(t.isThread() ? O.Plq.MANAGE_THREADS : O.Plq.MANAGE_CHANNELS, t), [t]), L = (0, u.e7)([_.Z], () => {
    var e;
    return null != (e = _.Z.getCount(t.id)) ? e : 0
  }, [t.id]), j = P && (U || A && L < 1), V = D.length > 0 && (t.type === O.d4z.GUILD_VOICE || t.type === O.d4z.GUILD_STAGE_VOICE);
  if (i.useEffect(() => {
      (async () => {
        if (!await (0, s.C)(t.getGuildId(), I)) return w(d.j.DEFAULT);
        let e = await (0, c.T)(t.getGuildId(), I);
        if (null != e) return w(e)
      })()
    }, [t, I]), i.useEffect(() => {
      null != T && T.features.has(O.GuildFeatures.COMMUNITY) && (T.rulesChannelId === I ? w(d.j.RULES) : T.publicUpdatesChannelId === I && w(d.j.UPDATES))
    }, [T, I]), null == T) return null;
  if (null != G) {
    let e, t = async () => {
      await g.Z.open(T.id, O.pNK.ONBOARDING), await n()
    }, i = async () => {
      await g.Z.open(T.id, O.pNK.COMMUNITY), await n()
    };
    switch (G) {
      case d.j.DEFAULT:
        e = p.intl.format(p.t.iWlB6h, {
          onClick: t
        });
        break;
      case d.j.TODO:
        e = p.intl.format(p.t["/rjozD"], {
          onClick: t
        });
        break;
      case d.j.RESOURCE:
        e = p.intl.format(p.t.Nf5ptw, {
          onClick: t
        });
        break;
      case d.j.RULES:
        e = p.intl.format(p.t["kB1f+3"], {
          reason: p.intl.string(p.t.yjrZPl),
          onClick: i
        });
        break;
      case d.j.UPDATES:
        e = p.intl.format(p.t["kB1f+3"], {
          reason: p.intl.string(p.t["1B1/NB"]),
          onClick: i
        })
    }
    return (0, l.jsx)(r.Modal, {
      title: p.intl.string(p.t["TY/V+H"]),
      onClose: n,
      subtitle: e,
      transitionState: v,
      actions: [{
        text: p.intl.string(p.t.BddRzS),
        onClick: n,
        variant: "primary"
      }]
    })
  }
  let {
    deleteText: M,
    deleteBody: k
  } = t.type === O.d4z.GUILD_CATEGORY ? {
    deleteText: p.intl.string(p.t.ifbXnL),
    deleteBody: p.intl.format(p.t.a6Gz9J, {
      channelName: S
    })
  } : t.isForumPost() ? {
    deleteText: j ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqD7),
    deleteBody: j && A && !U ? p.intl.format(p.t["6/pY2+"], {
      postName: S
    }) : j ? p.intl.format(p.t.su3voL, {
      postName: S
    }) : p.intl.string(p.t.RUHcyk)
  } : t.isThread() ? {
    deleteText: p.intl.string(p.t.H7vTe2),
    deleteBody: p.intl.format(p.t.a6Gz9J, {
      channelName: S
    })
  } : y && b > 0 ? {
    deleteText: p.intl.string(p.t["8D8Rsb"]),
    deleteBody: p.intl.format(p.t["+qkiT9"], {
      channelName: S,
      numGuildRoleSubscriptionMembers: b
    })
  } : {
    deleteText: p.intl.string(p.t["8D8Rsb"]),
    deleteBody: p.intl.format(p.t.a6Gz9J, {
      channelName: S
    })
  };
  return (0, l.jsx)(r.Modal, {
    size: "sm",
    onClose: n,
    transitionState: v,
    title: M,
    subtitle: k,
    actions: [{
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: M,
      onClick: C,
      variant: "critical-primary"
    }],
    children: V ? (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: p.intl.format(p.t.Ze005A, {
        count: D.length
      })
    }) : null
  })
}