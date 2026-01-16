/** Chunk was on web.js **/
/** chunk id: 978395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
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

function x(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: x,
    guild: L,
    isHoveringOrFocusing: j,
    onOpenProfile: M,
    channelId: k,
    onClose: U
  } = e, G = u.ZP.useName(null == L ? true : L.id, k, t), {
    relationshipType: Z,
    originApplicationId: F
  } = (0, i.cj)([l.Z], () => ({
    relationshipType: l.Z.getRelationshipType(t.id),
    originApplicationId: l.Z.getOriginApplicationId(t.id)
  })), B = (0, o.vh)(t.id), V = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), {
    enabled: H
  } = (0, f.E)({
    location: "UserProfilePopoutBody"
  }), Y = t.id === n.id, W = (null == x ? true : x.widgets) != null && x.widgets.length > 0, K = (0, d.I5)(n);
  return (0, r.jsxs)(a.Ttm, {
    fade: true,
    className: D.body,
    children: [(0, r.jsx)(h.Z, {
      userId: t.id
    }), (0, r.jsx)(v.Z, {
      user: t,
      guildId: null == L ? true : L.id,
      onOpenProfile: M,
      onClose: U,
      usernameIcon: t.hasAvatarForGuild(null == L ? true : L.id) && (0, r.jsx)(T.Z, {
        user: t,
        nickname: G
      }),
      nickname: G,
      pronouns: null == x ? true : x.pronouns,
      tags: (0, r.jsx)(p.Z, {
        displayProfile: x,
        themeType: w.l.POPOUT,
        onClose: U
      }),
      nicknameIcons: V ? null : (0, r.jsx)(S.Z, {
        userId: t.id,
        isVisible: j,
        onOpenProfile: M
      })
    }), Z === P.OGo.PENDING_INCOMING && (0, r.jsx)(O.Z.Overlay, {
      children: (0, r.jsx)(m.Z, {
        user: t,
        guildId: null == L ? true : L.id,
        channelId: k,
        applicationId: F
      })
    }), B.map(e => (0, r.jsx)(O.Z.Overlay, {
      children: (0, r.jsx)(m.Z, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: k
      })
    }, e.applicationId)), (0, r.jsx)(g.Z, {
      user: t
    }), !Y && (0, r.jsx)(A.Z, {
      user: t,
      onOpenProfile: e => null == M ? true : M({
        tabSection: e
      })
    }), t.isProvisional ? (0, r.jsx)(O.Z.Overlay, {
      className: D.card,
      children: (0, r.jsx)(E.Z, {
        heading: R.intl.string(R.t.Iyka0U),
        headingIcon: (0, r.jsx)(a.Mgn, {
          size: "xxs",
          color: a.TVs.colors.TEXT_STRONG
        }),
        headingColor: "text-strong",
        children: (0, r.jsx)(s.n, {
          userId: t.id
        })
      })
    }) : (0, r.jsx)(I.Z, {
      user: t,
      bio: null == x ? true : x.bio,
      hidePersonalInformation: V,
      onClose: U
    }), W && (0, r.jsx)(y.Z, {
      user: t,
      widgets: null == x ? true : x.widgets,
      onOpenUserProfileModal: M
    }), Y && (0, r.jsx)(_.Z, {
      isPremiumUser: K,
      onInteraction: U
    }), (0, r.jsx)(b.Z, {
      user: t,
      currentUser: n,
      guildId: null == L ? true : L.id,
      onOpenUserProfileModal: M,
      onClose: U
    }), H && !Y && (0, r.jsx)(N.Z, {
      user: t,
      onOpenProfile: M
    }), null != L && (0, r.jsx)(C.Z, {
      userId: t.id,
      guild: L
    })]
  })
}