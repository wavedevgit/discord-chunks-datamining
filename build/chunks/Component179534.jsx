/** Chunk was on 39048 **/
/** chunk id: 179534, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk985925 = require("./985925.js"),
  Chunk547015 = require("./547015.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk138298 = require("./138298.js"),
  Chunk657331 = require("./657331.js"),
  Chunk761640 = require("./761640.js"),
  Chunk71393 = require("./71393.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk735937 = require("./735937.jsx"),
  Chunk104685 = require("./104685.jsx"),
  Chunk856768 = require("./856768.jsx"),
  Chunk189552 = require("./189552.js"),
  Chunk508160 = require("./508160.jsx"),
  Chunk749060 = require("./749060.jsx"),
  Chunk374963 = require("./374963.jsx"),
  Chunk636670 = require("./636670.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk503377 = require("./503377.js"),
  Chunk63135 = require("./63135.js");

function w(e) {
  let {
    guildId: t
  } = e, n = (0, a.bG)([b.A], () => b.A.getGuild(t)), {
    analyticsLocations: l
  } = (0, d.Ay)(c.A.GUILD_SETTINGS_MEMBERS_PAGE), w = (0, u.q)(t), R = (0, a.bG)([h.Ay], () => h.Ay.getGuildSidebarState(t), [t]), D = i.useCallback(() => {
    p.A.closeGuildSidebar(t)
  }, [t]), G = false == !!(null == n ? true : n.features.has(I.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), L = (0, a.bG)([x.A], () => x.A.getEstimatedMemberSearchCountByGuildId(t), [t]), k = i.useCallback(e => {
    null != e && (0, f.openUserProfileModal)({
      userId: e.userId,
      guildId: e.guildId,
      sourceAnalyticsLocations: l
    })
  }, [l]), M = i.useRef(null), U = i.useCallback(() => {
    var e;
    null == (e = M.current) || e.resetSearchText()
  }, []);
  if (null == n) return null;
  let B = (0, y.ii)(false, false, L);
  return (0, r.jsxs)(d.f5, {
    value: l,
    children: [(0, r.jsx)("div", {
      className: s()(P.customColumn, T.$Z, T.ed),
      children: (0, r.jsx)("div", {
        className: P.customContainer,
        children: (0, r.jsx)(o.ArX, {
          className: s()(P.customScroller, T.cj),
          orientation: "auto",
          children: (0, r.jsx)(o.ArX, {
            className: T.mh,
            orientation: "auto",
            children: (0, r.jsxs)("main", {
              className: s()(P.customColumn, P.contentColumnDefault, T.$Z, T.ed, T.z1),
              children: [(0, r.jsx)("div", {
                className: T.wx,
                children: (0, r.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: C.intl.string(C.t.S40K66)
                })
              }, "header"), (0, r.jsx)("div", {
                children: (0, r.jsxs)("div", {
                  className: T.CZ,
                  children: [(0, r.jsx)(O.A, {
                    guild: n
                  }), (0, r.jsx)(_.A, {
                    guild: n
                  }), G ? (0, r.jsxs)("div", {
                    className: T.FV,
                    children: [(0, r.jsx)(N.A, {
                      guild: n,
                      ref: M
                    }), (0, r.jsx)(A.A, {
                      guild: n,
                      searchState: B,
                      compact: true,
                      onSelectRow: k,
                      onResetForNewMembers: U
                    }), B !== y.IY.SUCCESS_STILL_INDEXING && (0, r.jsx)(E.A, {
                      guildId: n.id
                    })]
                  }) : (0, r.jsx)("div", {
                    className: T.qQ,
                    children: (0, r.jsxs)("div", {
                      className: T.pb,
                      children: [(0, r.jsx)("div", {
                        children: (0, r.jsx)(S.A, {})
                      }), (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: C.intl.format(C.t.Bf6yxB, {
                          onClick: e => {
                            null != n && (e.preventDefault(), m.A.close(), (0, j.aZ)(n.id))
                          }
                        })
                      })]
                    })
                  })]
                })
              }, "body"), (0, r.jsx)(v.A, {
                guildId: n.id
              })]
            })
          })
        })
      })
    }), w && null != R && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.pkL, {
        isVisible: true,
        onClick: D
      }), (0, r.jsx)("div", {
        className: T.zd,
        style: {
          width: I.da6
        },
        children: (0, r.jsx)(g.A, {
          userId: R.details.userId,
          guildId: R.details.guildId,
          onClose: D
        })
      })]
    })]
  })
}