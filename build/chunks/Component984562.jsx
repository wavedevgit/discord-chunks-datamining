/** Chunk was on 47841 **/
/** chunk id: 984562, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk280513 = require("./280513.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk837011 = require("./837011.js"),
  Chunk90084 = require("./90084.js"),
  Chunk685073 = require("./685073.js"),
  Chunk828162 = require("./828162.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk342490 = require("./342490.jsx"),
  Chunk694878 = require("./694878.jsx"),
  Chunk989556 = require("./989556.jsx"),
  Chunk712150 = require("./712150.jsx"),
  Chunk190695 = require("./190695.jsx"),
  Chunk29086 = require("./29086.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk743981 = require("./743981.js"),
  Chunk583970 = require("./583970.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk175820 = require("./175820.js");
let S = function() {
  var e, t, n, S;
  (0, E.useSyncMessages)(A.messagesLoader);
  let I = (0, s.bG)([f.A], () => f.A.getGuild()),
    T = (0, s.bG)([f.A], () => f.A.getGuildProfile()),
    {
      fetchGuildProfile: C,
      fetchStatus: P
    } = (0, d.u)(null == I ? true : I.id);
  if (i.useEffect(() => {
      P === c.X.NOT_FETCHED && C()
    }, [C, P]), P !== c.X.FETCHED) return (0, r.jsx)("div", {
    className: N.dc,
    children: (0, r.jsx)(a.y$y, {})
  });
  if (null == I || null == T) return null;
  let w = l.i.VISIBLE.has(T.visibility),
    R = (0, u.Rg)(I),
    D = !R || (null == T ? true : T.tag) == null,
    G = null != (e = T.badge) ? e : y.hc["0"],
    L = null != (t = T.badgeColorPrimary) ? t : y.Ub["0"].primary,
    k = null != (n = T.badgeColorSecondary) ? n : y.Ub["0"].secondary,
    M = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x.A, {
        className: N.uW,
        guildId: I.id,
        isDisabled: D,
        tag: null != (S = T.tag) ? S : "",
        badge: G,
        primaryColor: L,
        secondaryColor: k
      }), (0, r.jsx)(h.A, {
        className: N.uW,
        selectedBadge: G,
        guildId: I.id
      }), (0, r.jsx)(j.A, {
        className: N.uW,
        guildId: I.id,
        badge: G,
        primaryColor: L,
        secondaryColor: k
      })]
    });
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.Heading, {
      className: N.DD,
      variant: "heading-lg/semibold",
      children: E.intl.string(A.default.mf2OwH)
    }), (0, r.jsxs)("div", {
      className: N.kL,
      children: [(0, r.jsxs)("div", {
        className: N.hu,
        children: [(0, r.jsxs)("div", {
          className: N.iQ,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: E.intl.format(A.default["655Uny"], {
              onClickServerProfile: () => {
                p.A.setSection(v.BEX.PROFILE)
              },
              onClickApplyToJoin: () => {
                p.A.setSection(v.BEX.ACCESS)
              }
            })
          }), !w && (0, r.jsx)(m.A, {
            className: N.pB,
            children: (0, r.jsx)(a.Text, {
              variant: "text-xs/medium",
              children: E.intl.format(A.default.CRbkIz, {
                onClickEditSetting: () => p.A.setSection(v.BEX.PROFILE, v.nd0.PROFILE_VISIBILITY)
              })
            })
          })]
        }), R ? (0, r.jsxs)("div", {
          className: N.DZ,
          children: [(0, r.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/semibold",
              color: "text-strong",
              children: E.intl.string(A.default["1zams8"])
            })
          }), (0, r.jsx)(a.dOG, {
            id: "enable-server-tag",
            checked: !D,
            onChange: () => {
              if (D) {
                var e;
                p.A.updateGuildProfile(I.id, {
                  tag: null != (e = T.tag) ? e : "",
                  badge: G,
                  badgeColorPrimary: L,
                  badgeColorSecondary: k
                })
              } else p.A.updateGuildProfile(I.id, {
                tag: null
              })
            }
          })]
        }) : (0, r.jsx)("div", {
          className: N.vw,
          children: (0, r.jsx)(b.u, {
            onClick: () => {
              (0, g.A)(I.id, o.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), p.A.close()
            }
          })
        }), D ? (0, r.jsx)(a.RDc, {
          children: (0, r.jsx)("div", {
            className: N.n8,
            children: M
          })
        }) : M]
      }), (0, r.jsxs)("div", {
        className: N.so,
        children: [(0, r.jsx)(O.A, {
          guildId: I.id,
          tag: T.tag,
          badge: G,
          primaryColor: L,
          secondaryColor: k
        }), !D && (0, r.jsx)(_.A, {
          guildId: I.id
        })]
      })]
    })]
  })
}