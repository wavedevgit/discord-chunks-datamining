/** Chunk was on 79521 **/
/** chunk id: 207540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
let v = e => {
  let {
    channel: t,
    onClose: n,
    onConfirm: v,
    transitionState: C
  } = e, P = (0, o.ZP)(t, true), S = t.id, I = t.isForumPost(), T = (0, r.e7)([Z.Z], () => Z.Z.getGuild(t.getGuildId())), D = (0, N.u1)(S), {
    isSubscriptionGated: y
  } = (0, E.Z)(t.id), b = (0, f.Z)(T, t), [w, G] = i.useState(), A = (0, r.e7)([m.default], () => t.isOwner(m.default.getId()), [t]), U = (0, r.e7)([O.Z], () => O.Z.can(t.isThread() ? p.Plq.MANAGE_THREADS : p.Plq.MANAGE_CHANNELS, t), [t]), j = (0, r.e7)([_.Z], () => {
    var e;
    return null != (e = _.Z.getCount(t.id)) ? e : 0
  }, [t.id]), L = I && (U || A && j < 1), V = D.length > 0 && (t.type === p.d4z.GUILD_VOICE || t.type === p.d4z.GUILD_STAGE_VOICE);
  if (i.useEffect(() => {
      (async () => {
        if (!await (0, s.C)(t.getGuildId(), S)) return G(c.j.DEFAULT);
        let e = await (0, d.T)(t.getGuildId(), S);
        if (null != e) return G(e)
      })()
    }, [t, S]), i.useEffect(() => {
      null != T && T.features.has(p.oNc.COMMUNITY) && (T.rulesChannelId === S ? G(c.j.RULES) : T.publicUpdatesChannelId === S && G(c.j.UPDATES))
    }, [T, S]), null == T) return null;
  if (null != w) {
    let e, t = async () => {
      await g.Z.open(T.id, p.pNK.ONBOARDING), await n()
    }, i = async () => {
      await g.Z.open(T.id, p.pNK.COMMUNITY), await n()
    };
    switch (w) {
      case c.j.DEFAULT:
        e = h.intl.format(h.t.iWlB6u, {
          onClick: t
        });
        break;
      case c.j.TODO:
        e = h.intl.format(h.t["/rjozM"], {
          onClick: t
        });
        break;
      case c.j.RESOURCE:
        e = h.intl.format(h.t.Nf5pt7, {
          onClick: t
        });
        break;
      case c.j.RULES:
        e = h.intl.format(h.t["kB1f+/"], {
          reason: h.intl.string(h.t.yjrZPj),
          onClick: i
        });
        break;
      case c.j.UPDATES:
        e = h.intl.format(h.t["kB1f+/"], {
          reason: h.intl.string(h.t["1B1/ND"]),
          onClick: i
        })
    }
    return (0, l.jsx)(u.Modal, {
      title: h.intl.string(h.t["TY/V+P"]),
      onClose: n,
      subtitle: e,
      transitionState: C,
      actions: [{
        text: h.intl.string(h.t.BddRzc),
        onClick: n,
        variant: "primary"
      }]
    })
  }
  let {
    deleteText: M,
    deleteBody: k
  } = t.type === p.d4z.GUILD_CATEGORY ? {
    deleteText: h.intl.string(h.t.ifbXnJ),
    deleteBody: h.intl.format(h.t.a6Gz9P, {
      channelName: P
    })
  } : t.isForumPost() ? {
    deleteText: L ? h.intl.string(h.t.nEOg1N) : h.intl.string(h.t.xwMqDw),
    deleteBody: L && A && !U ? h.intl.format(h.t["6/pY29"], {
      postName: P
    }) : L ? h.intl.format(h.t.su3voK, {
      postName: P
    }) : h.intl.string(h.t.RUHcys)
  } : t.isThread() ? {
    deleteText: h.intl.string(h.t.H7vTe3),
    deleteBody: h.intl.format(h.t.a6Gz9P, {
      channelName: P
    })
  } : y && b > 0 ? {
    deleteText: h.intl.string(h.t["8D8Rsb"]),
    deleteBody: h.intl.format(h.t["+qkiT0"], {
      channelName: P,
      numGuildRoleSubscriptionMembers: b
    })
  } : {
    deleteText: h.intl.string(h.t["8D8Rsb"]),
    deleteBody: h.intl.format(h.t.a6Gz9P, {
      channelName: P
    })
  };
  return (0, l.jsx)(u.Modal, {
    size: "sm",
    onClose: n,
    transitionState: C,
    title: M,
    subtitle: k,
    actions: [{
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: M,
      onClick: v,
      variant: "critical-primary"
    }],
    children: V ? (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: h.intl.format(h.t.Ze005O, {
        count: D.length
      })
    }) : null
  })
}