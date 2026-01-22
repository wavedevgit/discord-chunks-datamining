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
  } = e, I = (0, o.ZP)(t, true), S = t.id, P = t.isForumPost(), D = (0, u.e7)([_.Z], () => _.Z.getGuild(t.getGuildId())), T = (0, N.u1)(S), {
    isSubscriptionGated: y
  } = (0, E.Z)(t.id), b = (0, f.Z)(D, t), [G, w] = i.useState(), A = (0, u.e7)([O.default], () => t.isOwner(O.default.getId()), [t]), U = (0, u.e7)([m.Z], () => m.Z.can(t.isThread() ? p.Plq.MANAGE_THREADS : p.Plq.MANAGE_CHANNELS, t), [t]), L = (0, u.e7)([Z.Z], () => {
    var e;
    return null != (e = Z.Z.getCount(t.id)) ? e : 0
  }, [t.id]), j = P && (U || A && L < 1), M = T.length > 0 && (t.type === p.d4z.GUILD_VOICE || t.type === p.d4z.GUILD_STAGE_VOICE);
  if (i.useEffect(() => {
      (async () => {
        if (!await (0, s.C)(t.getGuildId(), S)) return w(d.j.DEFAULT);
        let e = await (0, c.T)(t.getGuildId(), S);
        if (null != e) return w(e)
      })()
    }, [t, S]), i.useEffect(() => {
      null != D && D.features.has(p.GuildFeatures.COMMUNITY) && (D.rulesChannelId === S ? w(d.j.RULES) : D.publicUpdatesChannelId === S && w(d.j.UPDATES))
    }, [D, S]), null == D) return null;
  if (null != G) {
    let e, t = async () => {
      await g.Z.open(D.id, p.pNK.ONBOARDING), await n()
    }, i = async () => {
      await g.Z.open(D.id, p.pNK.COMMUNITY), await n()
    };
    switch (G) {
      case d.j.DEFAULT:
        e = h.intl.format(h.t.iWlB6h, {
          onClick: t
        });
        break;
      case d.j.TODO:
        e = h.intl.format(h.t["/rjozD"], {
          onClick: t
        });
        break;
      case d.j.RESOURCE:
        e = h.intl.format(h.t.Nf5ptw, {
          onClick: t
        });
        break;
      case d.j.RULES:
        e = h.intl.format(h.t["kB1f+3"], {
          reason: h.intl.string(h.t.yjrZPl),
          onClick: i
        });
        break;
      case d.j.UPDATES:
        e = h.intl.format(h.t["kB1f+3"], {
          reason: h.intl.string(h.t["1B1/NB"]),
          onClick: i
        })
    }
    return (0, l.jsx)(r.Modal, {
      title: h.intl.string(h.t["TY/V+H"]),
      onClose: n,
      subtitle: e,
      transitionState: v,
      actions: [{
        text: h.intl.string(h.t.BddRzS),
        onClick: n,
        variant: "primary"
      }]
    })
  }
  let {
    deleteText: V,
    deleteBody: k
  } = t.type === p.d4z.GUILD_CATEGORY ? {
    deleteText: h.intl.string(h.t.ifbXnL),
    deleteBody: h.intl.format(h.t.a6Gz9J, {
      channelName: I
    })
  } : t.isForumPost() ? {
    deleteText: j ? h.intl.string(h.t.nEOg1N) : h.intl.string(h.t.xwMqD7),
    deleteBody: j && A && !U ? h.intl.format(h.t["6/pY2+"], {
      postName: I
    }) : j ? h.intl.format(h.t.su3voL, {
      postName: I
    }) : h.intl.string(h.t.RUHcyk)
  } : t.isThread() ? {
    deleteText: h.intl.string(h.t.H7vTe2),
    deleteBody: h.intl.format(h.t.a6Gz9J, {
      channelName: I
    })
  } : y && b > 0 ? {
    deleteText: h.intl.string(h.t["8D8Rsb"]),
    deleteBody: h.intl.format(h.t["+qkiT9"], {
      channelName: I,
      numGuildRoleSubscriptionMembers: b
    })
  } : {
    deleteText: h.intl.string(h.t["8D8Rsb"]),
    deleteBody: h.intl.format(h.t.a6Gz9J, {
      channelName: I
    })
  };
  return (0, l.jsx)(r.Modal, {
    size: "sm",
    onClose: n,
    transitionState: v,
    title: V,
    subtitle: k,
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: V,
      onClick: C,
      variant: "critical-primary"
    }],
    children: M ? (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: h.intl.format(h.t.Ze005A, {
        count: T.length
      })
    }) : null
  })
}