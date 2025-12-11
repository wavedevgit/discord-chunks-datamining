/** Chunk was on web.js **/
/** chunk id: 978395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
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
  Chunk209698 = require("./209698.js"),
  Chunk896010 = require("./896010.js"),
  Chunk612600 = require("./612600.js"),
  Chunk648052 = require("./648052.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk483424 = require("./483424.jsx"),
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

function M(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: M,
    guild: k,
    isHoveringOrFocusing: U,
    onOpenProfile: G,
    channelId: Z,
    onClose: B
  } = e, F = u.ZP.useName(null == k ? true : k.id, Z, t), {
    relationshipType: V,
    originApplicationId: H
  } = (0, i.cj)([l.Z], () => ({
    relationshipType: l.Z.getRelationshipType(t.id),
    originApplicationId: l.Z.getOriginApplicationId(t.id)
  })), Y = (0, o.vh)(t.id), W = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), K = (0, f.b)({
    location: "UserProfilePopoutBody"
  }), z = (0, p.E)({
    location: "UserProfilePopoutBody"
  }), q = t.id === n.id, Q = (0, _.Z)({
    location: "UserProfilePopoutBody"
  }), X = (null == M ? true : M.widgets) != null && M.widgets.length > 0, J = Q && X, $ = (0, d.I5)(n);
  return (0, r.jsxs)(a.Ttm, {
    fade: true,
    className: j.body,
    children: [(0, r.jsx)(E.Z, {
      userId: t.id
    }), (0, r.jsx)(T.Z, {
      user: t,
      guildId: null == k ? true : k.id,
      onOpenProfile: G,
      onClose: B,
      usernameIcon: t.hasAvatarForGuild(null == k ? true : k.id) && (0, r.jsx)(N.Z, {
        user: t,
        nickname: F
      }),
      nickname: F,
      pronouns: null == M ? true : M.pronouns,
      tags: (0, r.jsx)(m.Z, {
        displayProfile: M,
        themeType: x.l.POPOUT,
        onClose: B
      }),
      nicknameIcons: W ? null : (0, r.jsx)(C.Z, {
        userId: t.id,
        isVisible: U,
        onOpenProfile: G
      })
    }), V === D.OGo.PENDING_INCOMING && (0, r.jsx)(I.Z.Overlay, {
      children: (0, r.jsx)(b.Z, {
        user: t,
        guildId: null == k ? true : k.id,
        channelId: Z,
        applicationId: H
      })
    }), Y.map(e => (0, r.jsx)(I.Z.Overlay, {
      children: (0, r.jsx)(b.Z, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: Z
      })
    }, e.applicationId)), (0, r.jsx)(y.Z, {
      user: t
    }), !q && (0, r.jsx)(R.Z, {
      user: t,
      onOpenProfile: e => null == G ? true : G({
        section: e
      })
    }), t.isProvisional ? (0, r.jsx)(I.Z.Overlay, {
      className: j.card,
      children: (0, r.jsx)(O.Z, {
        heading: L.intl.string(L.t.Iyka0U),
        headingIcon: (0, r.jsx)(a.Mgn, {
          size: "xxs",
          color: a.TVs.colors.HEADER_PRIMARY
        }),
        headingColor: "header-primary",
        children: (0, r.jsx)(s.n, {
          userId: t.id
        })
      })
    }) : (0, r.jsx)(A.Z, {
      user: t,
      bio: null == M ? true : M.bio,
      hidePersonalInformation: W,
      onClose: B
    }), J && (0, r.jsx)(S.Z, {
      user: t,
      widgets: null == M ? true : M.widgets,
      onOpenUserProfileModal: G
    }), q && (0, r.jsx)(h.Z, {
      isPremiumUser: $,
      onInteraction: B
    }), K ? (0, r.jsx)(v.Z, {
      user: t,
      currentUser: n,
      guildId: null == k ? true : k.id,
      onOpenUserProfileModal: G,
      onClose: B
    }) : (0, r.jsx)(g.Z, {
      user: t,
      currentUser: n,
      guildId: null == k ? true : k.id,
      onClose: B
    }), z && !q && (0, r.jsx)(w.Z, {
      user: t,
      onOpenProfile: G
    }), null != k && (0, r.jsx)(P.Z, {
      user: t,
      currentUser: n,
      guild: k
    })]
  })
}