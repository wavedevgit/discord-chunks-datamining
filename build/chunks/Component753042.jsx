/** Chunk was on 69937 **/
/** chunk id: 753042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk280533 = require("./280533.js");

function I(e) {
  let {
    member: t
  } = e, n = (0, i.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), I = (0, c.mh)(t.userId, t.guildId), m = (0, c.mV)(t.userId, t.guildId), h = (0, c.LD)(t.userId), N = (0, c.wi)(t.userId, t.guildId);
  return (l.useEffect(() => {
    (0, o.zO)(t.guildId)
  }, [t.guildId]), null == n) ? null : (0, r.jsx)(a.gNt, {
    label: T.intl.string(T.t["ldCE/p"]),
    children: (0, r.jsxs)(A.WM, {
      children: [(0, r.jsx)(A._2, {
        icon: (0, r.jsx)(a.lZ8, {
          size: "custom",
          width: A.Mn,
          height: A.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: T.intl.string(T.t.nzGai4)
        }),
        description: I ? (0, r.jsx)(a.sV5, {
          size: "custom",
          width: A.Mn,
          height: A.Mn,
          color: a.TVs.colors.STATUS_POSITIVE
        }) : (0, r.jsx)(a.CTb, {
          size: "custom",
          width: A.Mn,
          height: A.Mn,
          color: a.TVs.colors.ICON_FEEDBACK_CRITICAL
        })
      }), m !== c.qc.NO_GATE && (0, r.jsx)(A._2, {
        icon: (0, r.jsx)(a.snC, {
          size: "custom",
          width: A.Mn,
          height: A.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: T.intl.string(T.t["93hqln"])
        }),
        description: m === c.qc.AGREED ? (0, r.jsx)(a.sV5, {
          size: "custom",
          width: A.Mn,
          height: A.Mn,
          color: a.TVs.colors.STATUS_POSITIVE
        }) : (0, r.jsx)(a.CTb, {
          size: "custom",
          width: A.Mn,
          height: A.Mn,
          color: a.TVs.colors.ICON_FEEDBACK_CRITICAL
        })
      }), (0, r.jsx)(A._2, {
        icon: (0, r.jsx)(a.gw7, {
          size: "custom",
          color: "currentColor",
          width: A.Mn,
          height: A.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: T.intl.string(T.t.SaDIpL)
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: h
        })
      }), (0, r.jsx)(A._2, {
        icon: (0, r.jsx)(s.Vj, {
          guild: n,
          size: s.Vj.Sizes.SMOL,
          animate: false,
          className: g.guildIcon
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: T.intl.string(T.t["NQJ+WG"])
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: N
        })
      }), (0, r.jsx)(A._2, {
        icon: (0, r.jsx)(a.ejJ, {
          size: "custom",
          width: A.Mn,
          height: A.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: T.intl.string(T.t["eJOq+Z"])
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: (0, r.jsx)(u.ZP, {
            userId: t.userId,
            guildId: t.guildId,
            showJoinMethodContextAsFooter: true,
            onClickInviter: e => {
              let n = E.Z.getChannelId();
              (0, _.r)(t.guildId, e.id, null != n ? n : f.lds)
            }
          })
        })
      })]
    })
  })
}