/** Chunk was on 62987 **/
/** chunk id: 277117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk209698 = require("./209698.js"),
  Chunk172351 = require("./172351.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk483424 = require("./483424.jsx"),
  Chunk681837 = require("./681837.jsx"),
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
  Chunk892273 = require("./892273.js");

function w(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: w,
    channel: R,
    isHovering: M,
    onOpenProfile: D
  } = e, {
    relationshipType: k,
    originApplicationId: L
  } = (0, l.cj)([u.Z], () => ({
    relationshipType: u.Z.getRelationshipType(t.id),
    originApplicationId: u.Z.getOriginApplicationId(t.id)
  })), U = (0, o.vh)(t.id), B = (0, s.Y)({
    userId: t.id
  }), G = (0, l.e7)([d.Z], () => d.Z.hidePersonalInformation), H = (0, l.e7)([h.Z], () => {
    var e;
    return null == (e = h.Z.getUserProfile(t.id)) ? true : e.application
  }), F = (0, f.b)({
    location: "UserProfileSidebarBody"
  });
  return (0, r.jsxs)("div", {
    className: A.body,
    children: [(0, r.jsx)(I.Z, {
      user: t,
      nickname: p.ZP.getName(null, R.id, t),
      pronouns: null == w ? true : w.pronouns,
      onOpenProfile: D,
      tags: (0, r.jsx)(g.Z, {
        displayProfile: w,
        themeType: T.l.SIDEBAR
      }),
      nicknameIcons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.Z, {
          userId: t.id
        }), !G && (0, r.jsx)(P.Z, {
          userId: t.id,
          isHovering: M,
          onOpenProfile: D
        })]
      })
    }), k === Z.OGo.PENDING_INCOMING && (0, r.jsx)(S.Z.Overlay, {
      children: (0, r.jsx)(v.Z, {
        user: t,
        channelId: R.id,
        applicationId: L
      })
    }), U.map(e => (0, r.jsx)(S.Z.Overlay, {
      children: (0, r.jsx)(v.Z, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: R.id
      })
    }, e.applicationId)), (0, r.jsx)(j.Z, {
      user: t,
      className: A.card
    }), t.isProvisional && (0, r.jsx)(S.Z.Overlay, {
      className: A.card,
      children: (0, r.jsx)(O.Z, {
        heading: N.intl.string(N.t.Iyka0d),
        headingIcon: (0, r.jsx)(i.Mgn, {
          size: "xxs",
          color: a.Z.colors.HEADER_PRIMARY
        }),
        headingColor: "header-primary",
        children: (0, r.jsx)(c.n, {
          userId: t.id
        })
      })
    }), F ? (0, r.jsx)(E.Z, {
      user: t,
      currentUser: n,
      onOpenUserProfileModal: D
    }) : (0, r.jsx)(y.Z, {
      user: t,
      currentUser: n,
      className: A.card
    }), (0, r.jsxs)(S.Z.Overlay, {
      className: A.overlay,
      children: [!G && (null == w ? true : w.bio) != null && (null == w ? true : w.bio) !== "" && (0, r.jsx)(O.Z, {
        heading: N.intl.string(N.t["61W33d"]),
        headingColor: "header-primary",
        children: (0, r.jsx)(b.Z, {
          userBio: w.bio,
          animateOnHover: true,
          isHovering: M,
          userId: t.id
        })
      }), (null == H ? true : H.popularApplicationCommandIds) != null && (0, r.jsx)(m.Z, {
        applicationId: H.id,
        commandIds: H.popularApplicationCommandIds,
        channel: R
      }), B.length > 0 && (0, r.jsx)(O.Z, {
        heading: N.intl.string(N.t["Uv/eT0"]),
        headingColor: "header-primary",
        children: (0, r.jsx)(C.Z, {
          applicationIds: B
        })
      }), (0, r.jsx)(O.Z, {
        heading: t.bot ? N.intl.string(N.t["A//N4u"]) : N.intl.string(N.t.a6XYDw),
        headingColor: "header-primary",
        children: (0, r.jsx)(x.Z, {
          userId: t.id
        })
      })]
    })]
  })
}