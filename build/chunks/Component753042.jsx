/** Chunk was on 10576 **/
/** chunk id: 753042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    member: t
  } = e, n = (0, i.e7)([E.Z], () => E.Z.getGuild(t.guildId), [t.guildId]), g = (0, u.mh)(t.userId, t.guildId), h = (0, u.mV)(t.userId, t.guildId), N = (0, u.LD)(t.userId), O = (0, u.wi)(t.userId, t.guildId);
  return (l.useEffect(() => {
    (0, o.zO)(t.guildId)
  }, [t.guildId]), null == n) ? null : (0, r.jsx)(a.xJW, {
    title: m.intl.string(m.t["ldCE/v"]),
    titleClassName: I.infoTitle,
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
          children: m.intl.string(m.t.nzGai4)
        }),
        description: g ? (0, r.jsx)(a.sV5, {
          size: "custom",
          width: A.Mn,
          height: A.Mn,
          color: a.TVs.colors.STATUS_POSITIVE
        }) : (0, r.jsx)(a.CTb, {
          size: "custom",
          width: A.Mn,
          height: A.Mn,
          color: a.TVs.colors.STATUS_DANGER
        })
      }), h !== u.qc.NO_GATE && (0, r.jsx)(A._2, {
        icon: (0, r.jsx)(a.snC, {
          size: "custom",
          width: A.Mn,
          height: A.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: m.intl.string(m.t["93hqlp"])
        }),
        description: h === u.qc.AGREED ? (0, r.jsx)(a.sV5, {
          size: "custom",
          width: A.Mn,
          height: A.Mn,
          color: a.TVs.colors.STATUS_POSITIVE
        }) : (0, r.jsx)(a.CTb, {
          size: "custom",
          width: A.Mn,
          height: A.Mn,
          color: a.TVs.colors.STATUS_DANGER
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
          children: m.intl.string(m.t.SaDIpK)
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: N
        })
      }), (0, r.jsx)(A._2, {
        icon: (0, r.jsx)(s.Vj, {
          guild: n,
          size: s.Vj.Sizes.SMOL,
          animate: false,
          className: I.guildIcon
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: m.intl.string(m.t["NQJ+WF"])
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: O
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
          children: m.intl.string(m.t["eJOq+f"])
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: (0, r.jsx)(c.ZP, {
            userId: t.userId,
            guildId: t.guildId,
            showJoinMethodContextAsFooter: true,
            onClickInviter: e => {
              let n = d.Z.getChannelId();
              (0, _.r)(t.guildId, e.id, null != n ? n : T.lds)
            }
          })
        })
      })]
    })
  })
}