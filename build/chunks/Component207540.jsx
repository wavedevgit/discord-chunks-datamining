/** Chunk was on 79521 **/
/** chunk id: 207540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
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
let h = e => {
  let {
    channel: t,
    onClose: n,
    onConfirm: h,
    transitionState: S
  } = e, v = (0, o.ZP)(t, true), I = t.id, P = t.isForumPost(), T = (0, u.e7)([m.Z], () => m.Z.getGuild(t.getGuildId())), D = (0, N.u1)(I), {
    isSubscriptionGated: y
  } = (0, E.Z)(t.id), b = (0, f.Z)(T, t), [G, w] = i.useState(), A = (0, u.e7)([Z.default], () => t.isOwner(Z.default.getId()), [t]), U = (0, u.e7)([O.Z], () => O.Z.can(t.isThread() ? p.Plq.MANAGE_THREADS : p.Plq.MANAGE_CHANNELS, t), [t]), L = (0, u.e7)([_.Z], () => {
    var e;
    return null != (e = _.Z.getCount(t.id)) ? e : 0
  }, [t.id]), j = P && (U || A && L < 1), V = D.length > 0 && (t.type === p.d4z.GUILD_VOICE || t.type === p.d4z.GUILD_STAGE_VOICE);
  if (i.useEffect(() => {
      (async () => {
        if (!await (0, s.C)(t.getGuildId(), I)) return w(d.j.DEFAULT);
        let e = await (0, c.T)(t.getGuildId(), I);
        if (null != e) return w(e)
      })()
    }, [t, I]), i.useEffect(() => {
      null != T && T.features.has(p.GuildFeatures.COMMUNITY) && (T.rulesChannelId === I ? w(d.j.RULES) : T.publicUpdatesChannelId === I && w(d.j.UPDATES))
    }, [T, I]), null == T) return null;
  if (null != G) {
    let e, t = async () => {
      await g.Z.open(T.id, p.pNK.ONBOARDING), await n()
    }, i = async () => {
      await g.Z.open(T.id, p.pNK.COMMUNITY), await n()
    };
    switch (G) {
      case d.j.DEFAULT:
        e = C.intl.format(C.t.iWlB6h, {
          onClick: t
        });
        break;
      case d.j.TODO:
        e = C.intl.format(C.t["/rjozD"], {
          onClick: t
        });
        break;
      case d.j.RESOURCE:
        e = C.intl.format(C.t.Nf5ptw, {
          onClick: t
        });
        break;
      case d.j.RULES:
        e = C.intl.format(C.t["kB1f+3"], {
          reason: C.intl.string(C.t.yjrZPl),
          onClick: i
        });
        break;
      case d.j.UPDATES:
        e = C.intl.format(C.t["kB1f+3"], {
          reason: C.intl.string(C.t["1B1/NB"]),
          onClick: i
        })
    }
    return (0, l.jsx)(r.Modal, {
      title: C.intl.string(C.t["TY/V+H"]),
      onClose: n,
      subtitle: e,
      transitionState: S,
      actions: [{
        text: C.intl.string(C.t.BddRzS),
        onClick: n,
        variant: "primary"
      }]
    })
  }
  let {
    deleteText: M,
    deleteBody: k
  } = t.type === p.d4z.GUILD_CATEGORY ? {
    deleteText: C.intl.string(C.t.ifbXnL),
    deleteBody: C.intl.format(C.t.a6Gz9J, {
      channelName: v
    })
  } : t.isForumPost() ? {
    deleteText: j ? C.intl.string(C.t.nEOg1N) : C.intl.string(C.t.xwMqD7),
    deleteBody: j && A && !U ? C.intl.format(C.t["6/pY2+"], {
      postName: v
    }) : j ? C.intl.format(C.t.su3voL, {
      postName: v
    }) : C.intl.string(C.t.RUHcyk)
  } : t.isThread() ? {
    deleteText: C.intl.string(C.t.H7vTe2),
    deleteBody: C.intl.format(C.t.a6Gz9J, {
      channelName: v
    })
  } : y && b > 0 ? {
    deleteText: C.intl.string(C.t["8D8Rsb"]),
    deleteBody: C.intl.format(C.t["+qkiT9"], {
      channelName: v,
      numGuildRoleSubscriptionMembers: b
    })
  } : {
    deleteText: C.intl.string(C.t["8D8Rsb"]),
    deleteBody: C.intl.format(C.t.a6Gz9J, {
      channelName: v
    })
  };
  return (0, l.jsx)(r.Modal, {
    size: "sm",
    onClose: n,
    transitionState: S,
    title: M,
    subtitle: k,
    actions: [{
      text: C.intl.string(C.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: M,
      onClick: h,
      variant: "critical-primary"
    }],
    children: V ? (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: C.intl.format(C.t.Ze005A, {
        count: D.length
      })
    }) : null
  })
}