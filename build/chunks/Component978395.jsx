/** Chunk was on web.js **/
/** chunk id: 978395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
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
  Chunk612600 = require("./612600.js"),
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
  Chunk350207 = require("./350207.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk116854 = require("./116854.jsx"),
  Chunk166584 = require("./166584.jsx"),
  Chunk915014 = require("./915014.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116649 = require("./116649.js");

function M(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: M,
    guild: j,
    isHoveringOrFocusing: k,
    onOpenProfile: U,
    channelId: G,
    onClose: B
  } = e, Z = u.ZP.useName(null == j ? true : j.id, G, t), {
    relationshipType: F,
    originApplicationId: V
  } = (0, i.cj)([l.Z], () => ({
    relationshipType: l.Z.getRelationshipType(t.id),
    originApplicationId: l.Z.getOriginApplicationId(t.id)
  })), H = (0, o.vh)(t.id), Y = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), W = (0, f.b)({
    location: "UserProfilePopoutBody"
  }), K = t.id === n.id, z = (0, _.Z)({
    location: "UserProfilePopoutBody"
  }), q = (null == M ? true : M.widgets) != null && M.widgets.length > 0, X = z && q, Q = (0, d.I5)(n);
  return (0, r.jsxs)(a.Ttm, {
    fade: true,
    className: L.body,
    children: [(0, r.jsx)(I.Z, {
      user: t,
      guildId: null == j ? true : j.id,
      onOpenProfile: U,
      onClose: B,
      usernameIcon: t.hasAvatarForGuild(null == j ? true : j.id) && (0, r.jsx)(C.Z, {
        user: t,
        nickname: Z
      }),
      nickname: Z,
      pronouns: null == M ? true : M.pronouns,
      tags: (0, r.jsx)(p.Z, {
        displayProfile: M,
        themeType: w.l.POPOUT,
        onClose: B
      }),
      nicknameIcons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.Z, {
          userId: t.id
        }), !Y && (0, r.jsx)(T.Z, {
          userId: t.id,
          isVisible: k,
          onOpenProfile: U
        })]
      })
    }), F === D.OGo.PENDING_INCOMING && (0, r.jsx)(v.Z.Overlay, {
      children: (0, r.jsx)(E.Z, {
        user: t,
        guildId: null == j ? true : j.id,
        channelId: G,
        applicationId: V
      })
    }), H.map(e => (0, r.jsx)(v.Z.Overlay, {
      children: (0, r.jsx)(E.Z, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: G
      })
    }, e.applicationId)), (0, r.jsx)(b.Z, {
      user: t
    }), !K && (0, r.jsx)(R.Z, {
      user: t,
      onOpenProfile: e => null == U ? true : U({
        section: e
      })
    }), t.isProvisional ? (0, r.jsx)(v.Z.Overlay, {
      className: L.card,
      children: (0, r.jsx)(y.Z, {
        heading: x.intl.string(x.t.Iyka0U),
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
      hidePersonalInformation: Y,
      onClose: B
    }), X && (0, r.jsx)(S.Z, {
      widgets: null == M ? true : M.widgets,
      onClick: () => {
        null == U || U({
          section: P.oh.WIDGETS
        })
      }
    }), K && (0, r.jsx)(h.Z, {
      isPremiumUser: Q,
      onInteraction: B
    }), W ? (0, r.jsx)(O.Z, {
      user: t,
      currentUser: n,
      guildId: null == j ? true : j.id,
      onOpenUserProfileModal: U,
      onClose: B
    }) : (0, r.jsx)(m.Z, {
      user: t,
      currentUser: n,
      guildId: null == j ? true : j.id,
      onClose: B
    }), null != j && (0, r.jsx)(N.Z, {
      user: t,
      currentUser: n,
      guild: j
    })]
  })
}