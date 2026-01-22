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
  (0, N.useSyncMessages)(E.messagesLoader);
  let T = (0, s.bG)([m.A], () => m.A.getGuild()),
    I = (0, s.bG)([m.A], () => m.A.getGuildProfile()),
    {
      fetchGuildProfile: C,
      fetchStatus: P
    } = (0, d.u)(null == T ? true : T.id);
  if (i.useEffect(() => {
      P === o.X.NOT_FETCHED && C()
    }, [C, P]), P !== o.X.FETCHED) return (0, r.jsx)("div", {
    className: _.dc,
    children: (0, r.jsx)(a.y$y, {})
  });
  if (null == T || null == I) return null;
  let w = l.i.VISIBLE.has(I.visibility),
    R = (0, u.Rg)(T),
    D = !R || (null == I ? true : I.tag) == null,
    G = null != (e = I.badge) ? e : A.hc["0"],
    L = null != (t = I.badgeColorPrimary) ? t : A.Ub["0"].primary,
    k = null != (n = I.badgeColorSecondary) ? n : A.Ub["0"].secondary,
    M = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.A, {
        className: _.uW,
        guildId: T.id,
        isDisabled: D,
        tag: null != (S = I.tag) ? S : "",
        badge: G,
        primaryColor: L,
        secondaryColor: k
      }), (0, r.jsx)(x.A, {
        className: _.uW,
        selectedBadge: G,
        guildId: T.id
      }), (0, r.jsx)(j.A, {
        className: _.uW,
        guildId: T.id,
        badge: G,
        primaryColor: L,
        secondaryColor: k
      })]
    });
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.Heading, {
      className: _.DD,
      variant: "heading-lg/semibold",
      children: N.intl.string(E.default.mf2OwH)
    }), (0, r.jsxs)("div", {
      className: _.kL,
      children: [(0, r.jsxs)("div", {
        className: _.hu,
        children: [(0, r.jsxs)("div", {
          className: _.iQ,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: N.intl.format(E.default["655Uny"], {
              onClickServerProfile: () => {
                b.A.setSection(v.BEX.PROFILE)
              },
              onClickApplyToJoin: () => {
                b.A.setSection(v.BEX.ACCESS)
              }
            })
          }), !w && (0, r.jsx)(g.A, {
            className: _.pB,
            children: (0, r.jsx)(a.Text, {
              variant: "text-xs/medium",
              children: N.intl.format(E.default.CRbkIz, {
                onClickEditSetting: () => b.A.setSection(v.BEX.PROFILE, v.nd0.PROFILE_VISIBILITY)
              })
            })
          })]
        }), R ? (0, r.jsxs)("div", {
          className: _.DZ,
          children: [(0, r.jsx)("label", {
            htmlFor: "enable-server-tag",
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/semibold",
              color: "text-strong",
              children: N.intl.string(E.default["1zams8"])
            })
          }), (0, r.jsx)(a.dOG, {
            id: "enable-server-tag",
            checked: !D,
            onChange: () => {
              if (D) {
                var e;
                b.A.updateGuildProfile(T.id, {
                  tag: null != (e = I.tag) ? e : "",
                  badge: G,
                  badgeColorPrimary: L,
                  badgeColorSecondary: k
                })
              } else b.A.updateGuildProfile(T.id, {
                tag: null
              })
            }
          })]
        }) : (0, r.jsx)("div", {
          className: _.vw,
          children: (0, r.jsx)(p.u, {
            onClick: () => {
              (0, f.A)(T.id, c.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), b.A.close()
            }
          })
        }), D ? (0, r.jsx)(a.RDc, {
          children: (0, r.jsx)("div", {
            className: _.n8,
            children: M
          })
        }) : M]
      }), (0, r.jsxs)("div", {
        className: _.so,
        children: [(0, r.jsx)(y.A, {
          guildId: T.id,
          tag: I.tag,
          badge: G,
          primaryColor: L,
          secondaryColor: k
        }), !D && (0, r.jsx)(O.A, {
          guildId: T.id
        })]
      })]
    })]
  })
}