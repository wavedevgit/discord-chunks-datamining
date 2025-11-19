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
  Chunk209698 = require("./209698.js"),
  Chunk612600 = require("./612600.js"),
  Chunk648052 = require("./648052.jsx"),
  Chunk537006 = require("./537006.jsx"),
  Chunk483424 = require("./483424.jsx"),
  Chunk681837 = require("./681837.jsx"),
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
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116649 = require("./116649.js");

function x(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: x,
    guild: M,
    isHoveringOrFocusing: k,
    onOpenProfile: j,
    channelId: U,
    onClose: G
  } = e, B = u.ZP.useName(null == M ? true : M.id, U, t), {
    relationshipType: Z,
    originApplicationId: F
  } = (0, i.cj)([l.Z], () => ({
    relationshipType: l.Z.getRelationshipType(t.id),
    originApplicationId: l.Z.getOriginApplicationId(t.id)
  })), V = (0, o.vh)(t.id), H = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), Y = (0, f.b)({
    location: "UserProfilePopoutBody"
  }), W = t.id === n.id, K = (0, _.Z)({
    location: "UserProfilePopoutBody"
  }), z = (null == x ? true : x.widgets) != null && x.widgets.length > 0, q = K && z, X = (0, d.I5)(n);
  return (0, r.jsxs)(a.Ttm, {
    fade: true,
    className: L.body,
    children: [(0, r.jsx)(T.Z, {
      user: t,
      guildId: null == M ? true : M.id,
      onOpenProfile: j,
      onClose: G,
      usernameIcon: t.hasAvatarForGuild(null == M ? true : M.id) && (0, r.jsx)(C.Z, {
        user: t,
        nickname: B
      }),
      nickname: B,
      pronouns: null == x ? true : x.pronouns,
      tags: (0, r.jsx)(p.Z, {
        displayProfile: x,
        themeType: D.l.POPOUT,
        onClose: G
      }),
      nicknameIcons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.Z, {
          userId: t.id
        }), !H && (0, r.jsx)(S.Z, {
          userId: t.id,
          isVisible: k,
          onOpenProfile: j
        })]
      })
    }), Z === P.OGo.PENDING_INCOMING && (0, r.jsx)(I.Z.Overlay, {
      children: (0, r.jsx)(E.Z, {
        user: t,
        guildId: null == M ? true : M.id,
        channelId: U,
        applicationId: F
      })
    }), V.map(e => (0, r.jsx)(I.Z.Overlay, {
      children: (0, r.jsx)(E.Z, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: U
      })
    }, e.applicationId)), (0, r.jsx)(b.Z, {
      user: t
    }), !W && (0, r.jsx)(R.Z, {
      user: t,
      onOpenProfile: e => null == j ? true : j({
        section: e
      })
    }), t.isProvisional ? (0, r.jsx)(I.Z.Overlay, {
      className: L.card,
      children: (0, r.jsx)(y.Z, {
        heading: w.intl.string(w.t.Iyka0U),
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
      bio: null == x ? true : x.bio,
      hidePersonalInformation: H,
      onClose: G
    }), q && (0, r.jsx)(v.Z, {
      user: t,
      widgets: null == x ? true : x.widgets,
      onOpenUserProfileModal: j
    }), W && (0, r.jsx)(h.Z, {
      isPremiumUser: X,
      onInteraction: G
    }), Y ? (0, r.jsx)(O.Z, {
      user: t,
      currentUser: n,
      guildId: null == M ? true : M.id,
      onOpenUserProfileModal: j,
      onClose: G
    }) : (0, r.jsx)(m.Z, {
      user: t,
      currentUser: n,
      guildId: null == M ? true : M.id,
      onClose: G
    }), null != M && (0, r.jsx)(N.Z, {
      user: t,
      currentUser: n,
      guild: M
    })]
  })
}