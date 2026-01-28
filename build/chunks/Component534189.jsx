/** Chunk was on 78528 **/
/** chunk id: 534189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk922590 = require("./922590.js"),
  Chunk821269 = require("./821269.js"),
  Chunk437774 = require("./437774.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk351906 = require("./351906.js"),
  Chunk562153 = require("./562153.js"),
  Chunk622543 = require("./622543.js"),
  Chunk987112 = require("./987112.jsx"),
  Chunk31432 = require("./31432.jsx"),
  Chunk389996 = require("./389996.jsx"),
  Chunk559506 = require("./559506.jsx"),
  Chunk361311 = require("./361311.jsx"),
  Chunk886891 = require("./886891.jsx"),
  Chunk743987 = require("./743987.jsx"),
  Chunk383448 = require("./383448.jsx"),
  Chunk900179 = require("./900179.jsx"),
  Chunk646986 = require("./646986.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk243166 = require("./243166.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk673721 = require("./673721.js");

function P(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: P,
    channel: w,
    isHoveringOrFocusing: R,
    onOpenProfile: D
  } = e, {
    relationshipType: M,
    originApplicationId: L
  } = (0, i.cf)([u.A], () => ({
    relationshipType: u.A.getRelationshipType(t.id),
    originApplicationId: u.A.getOriginApplicationId(t.id)
  })), k = (0, a.fi)(t.id), U = (0, o.q)({
    userId: t.id
  }), G = (0, i.bG)([d.A], () => d.A.hidePersonalInformation), B = (0, i.bG)([h.A], () => {
    var e;
    return null == (e = h.A.getUserProfile(t.id)) ? true : e.application
  });
  return (0, r.jsxs)("div", {
    className: T.rf,
    children: [(0, r.jsx)(b.A, {
      userId: t.id
    }), (0, r.jsx)(E.A, {
      user: t,
      guildId: w.guild_id,
      nickname: p.Ay.getName(null, w.id, t),
      pronouns: null == P ? true : P.pronouns,
      onOpenProfile: D,
      tags: (0, r.jsx)(g.A, {
        displayProfile: P,
        themeType: I.d.SIDEBAR
      }),
      nicknameIcons: G ? null : (0, r.jsx)(C.A, {
        userId: t.id,
        isVisible: R,
        onOpenProfile: D
      })
    }), M === S.eA$.PENDING_INCOMING && (0, r.jsx)(x.A.Overlay, {
      children: (0, r.jsx)(y.A, {
        user: t,
        channelId: w.id,
        applicationId: L
      })
    }), k.map(e => (0, r.jsx)(x.A.Overlay, {
      children: (0, r.jsx)(y.A, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: w.id
      })
    }, e.applicationId)), (0, r.jsx)(O.A, {
      user: t
    }), t.isProvisional && (0, r.jsx)(x.A.Overlay, {
      children: (0, r.jsx)(j.A, {
        heading: N.intl.string(N.t.Iyka0U),
        headingIcon: (0, r.jsx)(l.CircleErrorIcon, {
          size: "xxs",
          color: s.A.colors.TEXT_STRONG
        }),
        headingColor: "text-strong",
        children: (0, r.jsx)(c.T, {
          userId: t.id
        })
      })
    }), (0, r.jsx)(v.A, {
      user: t,
      currentUser: n,
      onOpenUserProfileModal: D
    }), (0, r.jsxs)(x.A.Overlay, {
      className: T.Lw,
      children: [!G && (null == P ? true : P.bio) != null && (null == P ? true : P.bio) !== "" && (0, r.jsx)(j.A, {
        heading: N.intl.string(N.t["61W33d"]),
        headingColor: "text-strong",
        children: (0, r.jsx)(m.A, {
          userId: t.id,
          userBio: P.bio,
          isHoveringOrFocusing: R,
          animateOnHoverOrFocusOnly: true
        })
      }), (null == B ? true : B.popularApplicationCommandIds) != null && (0, r.jsx)(f.A, {
        applicationId: B.id,
        commandIds: B.popularApplicationCommandIds,
        channel: w
      }), U.length > 0 && (0, r.jsx)(j.A, {
        heading: N.intl.string(N.t["Uv/eTx"]),
        headingColor: "text-strong",
        children: (0, r.jsx)(A.A, {
          applicationIds: U
        })
      }), (0, r.jsx)(j.A, {
        heading: t.bot ? N.intl.string(N.t["A//N4k"]) : N.intl.string(N.t.a6XYD9),
        headingColor: "text-strong",
        children: (0, r.jsx)(_.A, {
          userId: t.id
        })
      })]
    })]
  })
}