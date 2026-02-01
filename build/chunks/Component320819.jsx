/** Chunk was on web.js **/
/** chunk id: 320819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
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
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183959 = require("./183959.js");

function P(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: P,
    guild: D,
    isHoveringOrFocusing: L,
    onOpenProfile: x,
    channelId: M,
    onClose: j
  } = e, k = u.Ay.useName(null == D ? true : D.id, M, t), {
    relationshipType: U,
    originApplicationId: G
  } = (0, i.cf)([l.A], () => ({
    relationshipType: l.A.getRelationshipType(t.id),
    originApplicationId: l.A.getOriginApplicationId(t.id)
  })), V = (0, o.fi)(t.id), F = (0, i.bG)([c.A], () => c.A.hidePersonalInformation), B = t.id === n.id, H = (null == P ? true : P.widgets) != null && P.widgets.length > 0, Y = (0, d.TW)(n);
  return (0, r.jsxs)(a.HOs, {
    fade: true,
    className: R.rf,
    children: [(0, r.jsx)(_.A, {
      userId: t.id
    }), (0, r.jsx)(O.A, {
      user: t,
      guildId: null == D ? true : D.id,
      onOpenProfile: x,
      onClose: j,
      usernameIcon: t.hasAvatarForGuild(null == D ? true : D.id) && (0, r.jsx)(I.A, {
        user: t,
        nickname: k
      }),
      nickname: k,
      pronouns: null == P ? true : P.pronouns,
      tags: (0, r.jsx)(f.A, {
        displayProfile: P,
        themeType: N.d.POPOUT,
        onClose: j
      }),
      nicknameIcons: F ? null : (0, r.jsx)(v.A, {
        userId: t.id,
        isVisible: L,
        onOpenProfile: x
      })
    }), U === C.eA$.PENDING_INCOMING && (0, r.jsx)(b.A.Overlay, {
      children: (0, r.jsx)(h.A, {
        user: t,
        guildId: null == D ? true : D.id,
        channelId: M,
        applicationId: G
      })
    }), V.map(e => (0, r.jsx)(b.A.Overlay, {
      children: (0, r.jsx)(h.A, {
        user: t,
        isGameRelationship: true,
        applicationId: e.applicationId,
        channelId: M
      })
    }, e.applicationId)), (0, r.jsx)(m.A, {
      user: t
    }), !B && (0, r.jsx)(T.A, {
      user: t,
      onOpenProfile: e => null == x ? true : x({
        tabSection: e
      })
    }), t.isProvisional ? (0, r.jsx)(b.A.Overlay, {
      className: R.Nr,
      children: (0, r.jsx)(g.A, {
        heading: w.intl.string(w.t.Iyka0U),
        headingIcon: (0, r.jsx)(a.EpV, {
          size: "xxs",
          color: a.LU0.colors.TEXT_STRONG
        }),
        headingColor: "text-strong",
        children: (0, r.jsx)(s.T, {
          userId: t.id
        })
      })
    }) : (0, r.jsx)(A.A, {
      user: t,
      bio: null == P ? true : P.bio,
      hidePersonalInformation: F,
      onClose: j
    }), H && (0, r.jsx)(y.A, {
      user: t,
      widgets: null == P ? true : P.widgets,
      onOpenUserProfileModal: x
    }), B && (0, r.jsx)(p.A, {
      isPremiumUser: Y,
      onInteraction: j
    }), (0, r.jsx)(E.A, {
      user: t,
      currentUser: n,
      guildId: null == D ? true : D.id,
      onOpenUserProfileModal: x,
      onClose: j
    }), null != D && (0, r.jsx)(S.A, {
      userId: t.id,
      guild: D
    })]
  })
}