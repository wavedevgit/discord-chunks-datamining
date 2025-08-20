/** Chunk was on 7318 **/
/** chunk id: 753042, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk527379 = require("./527379.js"),
  Chunk376923 = require("./376923.js"),
  Chunk16829 = require("./16829.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk189432 = require("./189432.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk87819 = require("./87819.js");

function C(A) {
  let {
    member: e
  } = A, t = (0, l.e7)([c.Z], () => c.Z.getGuild(e.guildId), [e.guildId]), C = (0, o.mh)(e.userId, e.guildId), B = (0, o.mV)(e.userId, e.guildId), w = (0, o.LD)(e.userId), D = (0, o.wi)(e.userId, e.guildId);
  return (r.useEffect(() => {
    (0, a.zO)(e.guildId)
  }, [e.guildId]), null == t) ? null : (0, n.jsx)(i.xJW, {
    title: d.intl.string(d.t["ldCE/v"]),
    titleClassName: E.infoTitle,
    children: (0, n.jsxs)(h.WM, {
      children: [(0, n.jsx)(h._2, {
        icon: (0, n.jsx)(i.lZ8, {
          size: "custom",
          width: h.Mn,
          height: h.Mn
        }),
        name: (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: d.intl.string(d.t.nzGai4)
        }),
        description: C ? (0, n.jsx)(i.sV5, {
          size: "custom",
          width: h.Mn,
          height: h.Mn,
          color: i.TVs.colors.STATUS_POSITIVE
        }) : (0, n.jsx)(i.CTb, {
          size: "custom",
          width: h.Mn,
          height: h.Mn,
          color: i.TVs.colors.STATUS_DANGER
        })
      }), B !== o.qc.NO_GATE && (0, n.jsx)(h._2, {
        icon: (0, n.jsx)(i.snC, {
          size: "custom",
          width: h.Mn,
          height: h.Mn
        }),
        name: (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: d.intl.string(d.t["93hqlp"])
        }),
        description: B === o.qc.AGREED ? (0, n.jsx)(i.sV5, {
          size: "custom",
          width: h.Mn,
          height: h.Mn,
          color: i.TVs.colors.STATUS_POSITIVE
        }) : (0, n.jsx)(i.CTb, {
          size: "custom",
          width: h.Mn,
          height: h.Mn,
          color: i.TVs.colors.STATUS_DANGER
        })
      }), (0, n.jsx)(h._2, {
        icon: (0, n.jsx)(i.gw7, {
          size: "custom",
          color: "currentColor",
          width: h.Mn,
          height: h.Mn
        }),
        name: (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: d.intl.string(d.t.SaDIpK)
        }),
        description: (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: w
        })
      }), (0, n.jsx)(h._2, {
        icon: (0, n.jsx)(s.Vj, {
          guild: t,
          size: s.Vj.Sizes.SMOL,
          animate: false,
          className: E.guildIcon
        }),
        name: (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: d.intl.string(d.t["NQJ+WF"])
        }),
        description: (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: D
        })
      }), (0, n.jsx)(h._2, {
        icon: (0, n.jsx)(i.ejJ, {
          size: "custom",
          width: h.Mn,
          height: h.Mn
        }),
        name: (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: d.intl.string(d.t["eJOq+f"])
        }),
        description: (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: (0, n.jsx)(g.ZP, {
            userId: e.userId,
            guildId: e.guildId,
            showJoinMethodContextAsFooter: true,
            onClickInviter: A => {
              let t = f.Z.getChannelId();
              (0, v.r)(e.guildId, A.id, null != t ? t : u.lds)
            }
          })
        })
      })]
    })
  })
}