/** Chunk was on web.js **/
/** chunk id: 320819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk922590 = require("./922590.js"),
  Chunk437774 = require("./437774.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk351906 = require("./351906.js"),
  Chunk562153 = require("./562153.js"),
  Chunk927578 = require("./927578.js"),
  Chunk970354 = require("./970354.js"),
  Chunk31432 = require("./31432.jsx"),
  Chunk223330 = require("./223330.jsx"),
  Chunk559506 = require("./559506.jsx"),
  Chunk886891 = require("./886891.jsx"),
  Chunk383448 = require("./383448.jsx"),
  Chunk900179 = require("./900179.jsx"),
  Chunk646986 = require("./646986.jsx"),
  Chunk379654 = require("./379654.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk243166 = require("./243166.jsx"),
  Chunk442228 = require("./442228.jsx"),
  Chunk192867 = require("./192867.jsx"),
  Chunk403369 = require("./403369.jsx"),
  Chunk360563 = require("./360563.jsx"),
  Chunk989461 = require("./989461.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183959 = require("./183959.js");

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
  } = e, G = u.Ay.useName(null == L ? true : L.id, k, t), {
    relationshipType: V,
    originApplicationId: F
  } = (0, i.cf)([l.A], () => ({
    relationshipType: l.A.getRelationshipType(t.id),
    originApplicationId: l.A.getOriginApplicationId(t.id)
  })), B = (0, s.fi)(t.id), H = (0, i.bG)([c.A], () => c.A.hidePersonalInformation), {
    enabled: Y
  } = (0, f.u)({
    location: "UserProfilePopoutBody"
  }), W = t.id === n.id, K = (null == x ? true : x.widgets) != null && x.widgets.length > 0, z = (0, d.TW)(n);
  return (0, r.jsxs)(a.HOs, {
    fade: true,
    className: D.rf,
    children: [(0, r.jsx)(h.A, {
      userId: t.id
    }), (0, r.jsx)(A.A, {
      user: t,
      guildId: null == L ? true : L.id,
      onOpenProfile: M,
      onClose: U,
      usernameIcon: t.hasAvatarForGuild(null == L ? true : L.id) && (0, r.jsx)(I.A, {
        user: t,
        nickname: G
      }),
      nickname: G,
      pronouns: null == x ? true : x.pronouns,
      tags: (0, r.jsx)(p.A, {
        displayProfile: x,
        themeType: w.d.POPOUT,
        onClose: U
      }),
      nicknameIcons: H ? null : (0, r.jsx)(v.A, {
        userId: t.id,
        isVisible: j,
        onOpenProfile: M
      })
    }), V === R.eA$.PENDING_INCOMING && (0, r.jsx)(O.A.Overlay, {
      children: (0, r.jsx)(m.A, {
        user: t,
        guildId: null == L ? true : L.id,
        channelId: k,
        applicationId: F
      })
    }), B.map(e => (0, r.jsx)(O.A.Overlay, {
      children: (0, r.jsx)(m.A, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: k
      })
    }, e.applicationId)), (0, r.jsx)(g.A, {
      user: t
    }), !W && (0, r.jsx)(C.A, {
      user: t,
      onOpenProfile: e => null == M ? true : M({
        tabSection: e
      })
    }), t.isProvisional ? (0, r.jsx)(O.A.Overlay, {
      className: D.Nr,
      children: (0, r.jsx)(E.A, {
        heading: P.intl.string(P.t.Iyka0U),
        headingIcon: (0, r.jsx)(a.EpV, {
          size: "xxs",
          color: a.LU0.colors.TEXT_STRONG
        }),
        headingColor: "text-strong",
        children: (0, r.jsx)(o.T, {
          userId: t.id
        })
      })
    }) : (0, r.jsx)(S.A, {
      user: t,
      bio: null == x ? true : x.bio,
      hidePersonalInformation: H,
      onClose: U
    }), K && (0, r.jsx)(y.A, {
      user: t,
      widgets: null == x ? true : x.widgets,
      onOpenUserProfileModal: M
    }), W && (0, r.jsx)(_.A, {
      isPremiumUser: z,
      onInteraction: U
    }), (0, r.jsx)(b.A, {
      user: t,
      currentUser: n,
      guildId: null == L ? true : L.id,
      onOpenUserProfileModal: M,
      onClose: U
    }), Y && !W && (0, r.jsx)(N.A, {
      user: t,
      onOpenProfile: M
    }), null != L && (0, r.jsx)(T.A, {
      userId: t.id,
      guild: L
    })]
  })
}