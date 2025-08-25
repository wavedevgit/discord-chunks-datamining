/** Chunk was on web.js **/
/** chunk id: 978395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var Chunk951288 = require("./951288.js"),
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
  Chunk252748 = require("./252748.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk116854 = require("./116854.jsx"),
  Chunk166584 = require("./166584.jsx"),
  Chunk915014 = require("./915014.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116649 = require("./116649.js");

function L(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: L,
    guild: j,
    isHovering: k,
    onOpenProfile: M,
    channelId: U,
    onClose: G
  } = e, B = u.ZP.useName(null == j ? true : j.id, U, t), {
    relationshipType: Z,
    originApplicationId: F
  } = (0, i.cj)([l.Z], () => ({
    relationshipType: l.Z.getRelationshipType(t.id),
    originApplicationId: l.Z.getOriginApplicationId(t.id)
  })), V = (0, a.vh)(t.id), H = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), Y = (0, f.b)({
    location: "UserProfilePopoutBody"
  }), W = t.id === n.id, K = (null == L ? true : L.widgets) != null && L.widgets.length > 0, z = (0, d.I5)(n);
  return (0, r.jsxs)(o.Ttm, {
    fade: true,
    className: x.body,
    children: [(0, r.jsx)(v.Z, {
      user: t,
      onOpenProfile: M,
      onClose: G,
      usernameIcon: t.hasAvatarForGuild(null == j ? true : j.id) && (0, r.jsx)(A.Z, {
        user: t,
        nickname: B
      }),
      nickname: B,
      pronouns: null == L ? true : L.pronouns,
      tags: (0, r.jsx)(_.Z, {
        displayProfile: L,
        themeType: w.l.POPOUT,
        onClose: G
      }),
      nicknameIcons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.Z, {
          userId: t.id
        }), !H && (0, r.jsx)(I.Z, {
          userId: t.id,
          isHovering: k,
          onOpenProfile: M
        })]
      })
    }), Z === P.OGo.PENDING_INCOMING && (0, r.jsx)(O.Z.Overlay, {
      children: (0, r.jsx)(g.Z, {
        user: t,
        guildId: null == j ? true : j.id,
        channelId: U,
        applicationId: F
      })
    }), V.map(e => (0, r.jsx)(O.Z.Overlay, {
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
      onOpenProfile: e => null == M ? true : M({
        section: e
      })
    }), t.isProvisional ? (0, r.jsx)(O.Z.Overlay, {
      className: x.card,
      children: (0, r.jsx)(b.Z, {
        heading: D.intl.string(D.t.Iyka0d),
        headingIcon: (0, r.jsx)(o.Mgn, {
          size: "xxs",
          color: o.TVs.colors.HEADER_PRIMARY
        }),
        headingColor: "header-primary",
        children: (0, r.jsx)(s.n, {
          userId: t.id
        })
      })
    }) : (0, r.jsx)(S.Z, {
      user: t,
      bio: null == L ? true : L.bio,
      hidePersonalInformation: H,
      onClose: G
    }), K && (0, r.jsx)(T.Z, {
      widgets: null == L ? true : L.widgets,
      onClick: () => {
        null == M || M({
          section: R.oh.WIDGETS
        })
      }
    }), W && (0, r.jsx)(p.Z, {
      isPremiumUser: z,
      onInteraction: G
    }), Y ? (0, r.jsx)(y.Z, {
      user: t,
      currentUser: n,
      guildId: null == j ? true : j.id,
      onOpenUserProfileModal: M,
      onClose: G
    }) : (0, r.jsx)(h.Z, {
      user: t,
      currentUser: n,
      guildId: null == j ? true : j.id,
      onClose: G
    }), null != j && (0, r.jsx)(C.Z, {
      user: t,
      currentUser: n,
      guild: j
    })]
  })
}