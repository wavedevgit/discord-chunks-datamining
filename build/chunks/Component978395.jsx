/** Chunk was on web.js **/
/** chunk id: 978395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk320582 = require("./320582.js"),
  Chunk189156 = require("./189156.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk5192 = require("./5192.js"),
  Chunk74538 = require("./74538.js"),
  Chunk209698 = require("./209698.js"),
  Chunk648052 = require("./648052.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk483424 = require("./483424.jsx"),
  Chunk681837 = require("./681837.jsx"),
  Chunk91433 = require("./91433.jsx"),
  Chunk944043 = require("./944043.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk638970 = require("./638970.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk827313 = require("./827313.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk116854 = require("./116854.jsx"),
  Chunk166584 = require("./166584.jsx"),
  Chunk915014 = require("./915014.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116649 = require("./116649.js");

function D(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: D,
    guild: L,
    isHovering: x,
    onOpenProfile: M,
    channelId: j,
    onClose: k
  } = e, U = u.ZP.useName(null == L ? true : L.id, j, t), {
    relationshipType: G,
    originApplicationId: B
  } = (0, i.cj)([l.Z], () => ({
    relationshipType: l.Z.getRelationshipType(t.id),
    originApplicationId: l.Z.getOriginApplicationId(t.id)
  })), Z = (0, a.vh)(t.id), F = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), V = (0, f.b)({
    location: "UserProfilePopoutBody"
  }), H = t.id === n.id, Y = (0, d.I5)(n);
  return (0, r.jsxs)(o.Ttm, {
    fade: true,
    className: w.body,
    children: [(0, r.jsx)(v.Z, {
      user: t,
      onOpenProfile: M,
      onClose: k,
      usernameIcon: t.hasAvatarForGuild(null == L ? true : L.id) && (0, r.jsx)(S.Z, {
        user: t,
        nickname: U
      }),
      nickname: U,
      pronouns: null == D ? true : D.pronouns,
      tags: (0, r.jsx)(_.Z, {
        displayProfile: D,
        themeType: C.lY.POPOUT,
        onClose: k
      }),
      nicknameIcons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.Z, {
          userId: t.id
        }), !F && (0, r.jsx)(I.Z, {
          userId: t.id,
          isHovering: x,
          onOpenProfile: M
        })]
      })
    }), G === R.OGo.PENDING_INCOMING && (0, r.jsx)(O.Z.Overlay, {
      children: (0, r.jsx)(g.Z, {
        user: t,
        guildId: null == L ? true : L.id,
        channelId: j,
        applicationId: B
      })
    }), Z.map(e => (0, r.jsx)(O.Z.Overlay, {
      children: (0, r.jsx)(g.Z, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: j
      })
    }, e.applicationId)), (0, r.jsx)(E.Z, {
      user: t
    }), !H && (0, r.jsx)(N.Z, {
      user: t,
      onOpenProfile: e => null == M ? true : M({
        section: e
      })
    }), t.isProvisional ? (0, r.jsx)(O.Z.Overlay, {
      className: w.card,
      children: (0, r.jsx)(b.Z, {
        heading: P.intl.string(P.t.Iyka0d),
        headingIcon: (0, r.jsx)(o.Mgn, {
          size: "xxs",
          color: o.TVs.colors.HEADER_PRIMARY
        }),
        headingColor: "header-primary",
        children: (0, r.jsx)(s.n, {
          userId: t.id
        })
      })
    }) : (0, r.jsx)(T.Z, {
      user: t,
      bio: null == D ? true : D.bio,
      hidePersonalInformation: F,
      onClose: k
    }), H && (0, r.jsx)(p.Z, {
      isPremiumUser: Y,
      onInteraction: k
    }), V ? (0, r.jsx)(y.Z, {
      user: t,
      currentUser: n,
      displayProfile: D,
      guildId: null == L ? true : L.id,
      onOpenUserProfileModal: M,
      onClose: k
    }) : (0, r.jsx)(h.Z, {
      user: t,
      currentUser: n,
      displayProfile: D,
      guildId: null == L ? true : L.id,
      onClose: k
    }), null != L && (0, r.jsx)(A.Z, {
      user: t,
      currentUser: n,
      guild: L
    })]
  })
}