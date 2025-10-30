/** Chunk was on web.js **/
/** chunk id: 895697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk246946 = require("./246946.js"),
  Chunk5192 = require("./5192.js"),
  Chunk621853 = require("./621853.js"),
  Chunk209698 = require("./209698.js"),
  Chunk172351 = require("./172351.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk483424 = require("./483424.jsx"),
  Chunk681837 = require("./681837.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk638970 = require("./638970.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk871604 = require("./871604.jsx"),
  Chunk53558 = require("./53558.jsx"),
  Chunk827313 = require("./827313.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk166584 = require("./166584.jsx"),
  Chunk915014 = require("./915014.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759253 = require("./759253.js"),
  Chunk593540 = require("./593540.js");

function R(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: R,
    guild: P,
    isHoveringOrFocusing: w,
    onOpenProfile: D,
    channelId: x,
    onClose: L
  } = e, M = c.ZP.getName(null == P ? true : P.id, x, t), k = (0, i.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getUserProfile(t.id)) ? true : e.application
  }), j = (0, i.e7)([o.Z, s.Z], () => o.Z.getChannel(s.Z.getChannelId())), U = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation), G = (0, d.b)({
    location: "BotUserProfilePopoutBody"
  });
  return (0, r.jsxs)(a.Ttm, {
    fade: true,
    className: N.body,
    children: [(0, r.jsx)(E.Z, {
      user: t,
      guildId: null == P ? true : P.id,
      onOpenProfile: D,
      nickname: M,
      pronouns: null == R ? true : R.pronouns,
      tags: (0, r.jsx)(_.Z, {
        displayProfile: R,
        themeType: S.l.POPOUT,
        onClose: L
      }),
      nicknameIcons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.Z, {
          userId: t.id
        }), !U && (0, r.jsx)(O.Z, {
          userId: t.id,
          isVisible: w,
          onOpenProfile: D
        })]
      })
    }), (0, r.jsx)(T.Z, {
      user: t,
      onOpenProfile: e => null == D ? true : D({
        section: e
      })
    }), (0, r.jsxs)("div", {
      className: C.buttons,
      children: [(0, r.jsx)(b.Z, {
        user: t,
        closePopout: L,
        fullWidth: true
      }), (0, r.jsx)(y.Z, {
        user: t,
        guildId: null == P ? true : P.id,
        fullWidth: true
      })]
    }), (0, r.jsx)(v.Z, {
      user: t,
      bio: null == R ? true : R.bio,
      hidePersonalInformation: U,
      onClose: L
    }), G ? (0, r.jsx)(g.Z, {
      user: t,
      currentUser: n,
      guildId: null == P ? true : P.id,
      onOpenUserProfileModal: D,
      onClose: L
    }) : (0, r.jsx)(p.Z, {
      user: t,
      currentUser: n,
      guildId: null == P ? true : P.id,
      onClose: L
    }), (null == k ? true : k.popularApplicationCommandIds) != null && null != j && (0, r.jsx)(f.Z, {
      applicationId: k.id,
      commandIds: k.popularApplicationCommandIds,
      channel: j,
      guildId: null == P ? true : P.id,
      onClick: L
    }), null != P && (0, r.jsx)(m.Z, {
      heading: A.intl.string(A.t["LPJmL/"]),
      children: (0, r.jsx)(I.Z, {
        user: t,
        currentUser: n,
        guild: P
      })
    })]
  })
}