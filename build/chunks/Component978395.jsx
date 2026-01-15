/** Chunk was on web.js **/
/** chunk id: 978395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk320582 = require("./320582.js"),
  Chunk189156 = require("./189156.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk5192 = require("./5192.js"),
  Chunk74538 = require("./74538.js"),
  Chunk896010 = require("./896010.js"),
  Chunk612600 = require("./612600.js"),
  Chunk648052 = require("./648052.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk407699 = require("./407699.jsx"),
  Chunk91433 = require("./91433.jsx"),
  Chunk944043 = require("./944043.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk638970 = require("./638970.jsx"),
  Chunk675893 = require("./675893.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk827313 = require("./827313.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk116854 = require("./116854.jsx"),
  Chunk166584 = require("./166584.jsx"),
  Chunk915014 = require("./915014.jsx"),
  Chunk512832 = require("./512832.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk155493 = require("./155493.js");

function L(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: L,
    guild: j,
    isHoveringOrFocusing: M,
    onOpenProfile: k,
    channelId: U,
    onClose: G
  } = e, Z = u.ZP.useName(null == j ? true : j.id, U, t), {
    relationshipType: F,
    originApplicationId: B
  } = (0, i.cj)([l.Z], () => ({
    relationshipType: l.Z.getRelationshipType(t.id),
    originApplicationId: l.Z.getOriginApplicationId(t.id)
  })), V = (0, o.vh)(t.id), H = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), {
    enabled: Y
  } = (0, f.E)({
    location: "UserProfilePopoutBody"
  }), W = t.id === n.id, K = (0, p.Z)({
    location: "UserProfilePopoutBody"
  }), z = (null == L ? true : L.widgets) != null && L.widgets.length > 0, q = K && z, Q = (0, d.I5)(n);
  return (0, r.jsxs)(a.Ttm, {
    fade: true,
    className: x.body,
    children: [(0, r.jsx)(h.Z, {
      userId: t.id
    }), (0, r.jsx)(S.Z, {
      user: t,
      guildId: null == j ? true : j.id,
      onOpenProfile: k,
      onClose: G,
      usernameIcon: t.hasAvatarForGuild(null == j ? true : j.id) && (0, r.jsx)(C.Z, {
        user: t,
        nickname: Z
      }),
      nickname: Z,
      pronouns: null == L ? true : L.pronouns,
      tags: (0, r.jsx)(_.Z, {
        displayProfile: L,
        themeType: w.l.POPOUT,
        onClose: G
      }),
      nicknameIcons: H ? null : (0, r.jsx)(I.Z, {
        userId: t.id,
        isVisible: M,
        onOpenProfile: k
      })
    }), F === R.OGo.PENDING_INCOMING && (0, r.jsx)(v.Z.Overlay, {
      children: (0, r.jsx)(g.Z, {
        user: t,
        guildId: null == j ? true : j.id,
        channelId: U,
        applicationId: B
      })
    }), V.map(e => (0, r.jsx)(v.Z.Overlay, {
      children: (0, r.jsx)(g.Z, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: U
      })
    }, e.applicationId)), (0, r.jsx)(E.Z, {
      user: t
    }), !W && (0, r.jsx)(N.Z, {
      user: t,
      onOpenProfile: e => null == k ? true : k({
        tabSection: e
      })
    }), t.isProvisional ? (0, r.jsx)(v.Z.Overlay, {
      className: x.card,
      children: (0, r.jsx)(b.Z, {
        heading: D.intl.string(D.t.Iyka0U),
        headingIcon: (0, r.jsx)(a.Mgn, {
          size: "xxs",
          color: a.TVs.colors.TEXT_STRONG
        }),
        headingColor: "text-strong",
        children: (0, r.jsx)(s.n, {
          userId: t.id
        })
      })
    }) : (0, r.jsx)(T.Z, {
      user: t,
      bio: null == L ? true : L.bio,
      hidePersonalInformation: H,
      onClose: G
    }), q && (0, r.jsx)(O.Z, {
      user: t,
      widgets: null == L ? true : L.widgets,
      onOpenUserProfileModal: k
    }), W && (0, r.jsx)(m.Z, {
      isPremiumUser: Q,
      onInteraction: G
    }), (0, r.jsx)(y.Z, {
      user: t,
      currentUser: n,
      guildId: null == j ? true : j.id,
      onOpenUserProfileModal: k,
      onClose: G
    }), Y && !W && (0, r.jsx)(P.Z, {
      user: t,
      onOpenProfile: k
    }), null != j && (0, r.jsx)(A.Z, {
      userId: t.id,
      guild: j
    })]
  })
}