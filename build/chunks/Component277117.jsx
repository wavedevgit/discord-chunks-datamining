/** Chunk was on 41700 **/
/** chunk id: 277117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk320582 = require("./320582.js"),
  Chunk246016 = require("./246016.js"),
  Chunk189156 = require("./189156.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk5192 = require("./5192.js"),
  Chunk621853 = require("./621853.js"),
  Chunk172351 = require("./172351.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk407699 = require("./407699.jsx"),
  Chunk78806 = require("./78806.jsx"),
  Chunk91433 = require("./91433.jsx"),
  Chunk900927 = require("./900927.jsx"),
  Chunk944043 = require("./944043.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk638970 = require("./638970.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk827313 = require("./827313.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk82600 = require("./82600.js");

function N(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: N,
    channel: R,
    isHoveringOrFocusing: w,
    onOpenProfile: A
  } = e, {
    relationshipType: D,
    originApplicationId: L
  } = (0, l.cj)([d.Z], () => ({
    relationshipType: d.Z.getRelationshipType(t.id),
    originApplicationId: d.Z.getOriginApplicationId(t.id)
  })), M = (0, s.vh)(t.id), k = (0, o.Y)({
    userId: t.id
  }), U = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation), G = (0, l.e7)([h.Z], () => {
    var e;
    return null == (e = h.Z.getUserProfile(t.id)) ? true : e.application
  });
  return (0, r.jsxs)("div", {
    className: T.body,
    children: [(0, r.jsx)(b.Z, {
      userId: t.id
    }), (0, r.jsx)(_.Z, {
      user: t,
      guildId: R.guild_id,
      nickname: p.ZP.getName(null, R.id, t),
      pronouns: null == N ? true : N.pronouns,
      onOpenProfile: A,
      tags: (0, r.jsx)(g.Z, {
        displayProfile: N,
        themeType: Z.l.SIDEBAR
      }),
      nicknameIcons: U ? null : (0, r.jsx)(S.Z, {
        userId: t.id,
        isVisible: w,
        onOpenProfile: A
      })
    }), D === E.OGo.PENDING_INCOMING && (0, r.jsx)(I.Z.Overlay, {
      children: (0, r.jsx)(O.Z, {
        user: t,
        channelId: R.id,
        applicationId: L
      })
    }), M.map(e => (0, r.jsx)(I.Z.Overlay, {
      children: (0, r.jsx)(O.Z, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: R.id
      })
    }, e.applicationId)), (0, r.jsx)(j.Z, {
      user: t
    }), t.isProvisional && (0, r.jsx)(I.Z.Overlay, {
      children: (0, r.jsx)(v.Z, {
        heading: P.intl.string(P.t.Iyka0U),
        headingIcon: (0, r.jsx)(i.Mgn, {
          size: "xxs",
          color: a.Z.colors.TEXT_STRONG
        }),
        headingColor: "text-strong",
        children: (0, r.jsx)(c.n, {
          userId: t.id
        })
      })
    }), (0, r.jsx)(C.Z, {
      user: t,
      currentUser: n,
      onOpenUserProfileModal: A
    }), (0, r.jsxs)(I.Z.Overlay, {
      className: T.overlay,
      children: [!U && (null == N ? true : N.bio) != null && (null == N ? true : N.bio) !== "" && (0, r.jsx)(v.Z, {
        heading: P.intl.string(P.t["61W33d"]),
        headingColor: "text-strong",
        children: (0, r.jsx)(m.Z, {
          userId: t.id,
          userBio: N.bio,
          isHoveringOrFocusing: w,
          animateOnHoverOrFocusOnly: true
        })
      }), (null == G ? true : G.popularApplicationCommandIds) != null && (0, r.jsx)(f.Z, {
        applicationId: G.id,
        commandIds: G.popularApplicationCommandIds,
        channel: R
      }), k.length > 0 && (0, r.jsx)(v.Z, {
        heading: P.intl.string(P.t["Uv/eTx"]),
        headingColor: "text-strong",
        children: (0, r.jsx)(y.Z, {
          applicationIds: k
        })
      }), (0, r.jsx)(v.Z, {
        heading: t.bot ? P.intl.string(P.t["A//N4k"]) : P.intl.string(P.t.a6XYD9),
        headingColor: "text-strong",
        children: (0, r.jsx)(x.Z, {
          userId: t.id
        })
      })]
    })]
  })
}