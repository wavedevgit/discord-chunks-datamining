/** Chunk was on web.js **/
/** chunk id: 895697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk407699 = require("./407699.jsx"),
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
  Chunk57842 = require("./57842.js"),
  Chunk116649 = require("./116649.js");

function P(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: P,
    guild: R,
    isHoveringOrFocusing: w,
    onOpenProfile: D,
    channelId: x,
    onClose: L
  } = e, j = c.ZP.getName(null == R ? true : R.id, x, t), M = (0, i.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getUserProfile(t.id)) ? true : e.application
  }), k = (0, i.e7)([a.Z, s.Z], () => a.Z.getChannel(s.Z.getChannelId())), U = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation), G = (0, d.b)({
    location: "BotUserProfilePopoutBody"
  });
  return (0, r.jsxs)(o.Ttm, {
    fade: true,
    className: N.body,
    children: [(0, r.jsx)(m.Z, {
      userId: t.id
    }), (0, r.jsx)(E.Z, {
      user: t,
      guildId: null == R ? true : R.id,
      onOpenProfile: D,
      nickname: j,
      pronouns: null == P ? true : P.pronouns,
      tags: (0, r.jsx)(p.Z, {
        displayProfile: P,
        themeType: T.l.POPOUT,
        onClose: L
      }),
      nicknameIcons: U ? null : (0, r.jsx)(O.Z, {
        userId: t.id,
        isVisible: w,
        onOpenProfile: D
      })
    }), (0, r.jsx)(I.Z, {
      user: t,
      onOpenProfile: e => null == D ? true : D({
        section: e
      })
    }), (0, r.jsxs)("div", {
      className: A.buttons,
      children: [(0, r.jsx)(b.Z, {
        user: t,
        closePopout: L,
        fullWidth: true
      }), (0, r.jsx)(y.Z, {
        user: t,
        guildId: null == R ? true : R.id,
        fullWidth: true
      })]
    }), (0, r.jsx)(v.Z, {
      user: t,
      bio: null == P ? true : P.bio,
      hidePersonalInformation: U,
      onClose: L
    }), G ? (0, r.jsx)(g.Z, {
      user: t,
      currentUser: n,
      guildId: null == R ? true : R.id,
      onOpenUserProfileModal: D,
      onClose: L
    }) : (0, r.jsx)(_.Z, {
      user: t,
      currentUser: n,
      guildId: null == R ? true : R.id,
      onClose: L
    }), (null == M ? true : M.popularApplicationCommandIds) != null && null != k && (0, r.jsx)(f.Z, {
      applicationId: M.id,
      commandIds: M.popularApplicationCommandIds,
      channel: k,
      guildId: null == R ? true : R.id,
      onClick: L
    }), null != R && (0, r.jsx)(h.Z, {
      heading: C.intl.string(C.t["LPJmL/"]),
      children: (0, r.jsx)(S.Z, {
        user: t,
        currentUser: n,
        guild: R
      })
    })]
  })
}