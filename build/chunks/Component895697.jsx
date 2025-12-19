/** Chunk was on web.js **/
/** chunk id: 895697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  Chunk172351 = require("./172351.jsx"),
  Chunk648052 = require("./648052.jsx"),
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
  Chunk773008 = require("./773008.js"),
  Chunk155493 = require("./155493.js");

function A(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: A,
    guild: N,
    isHoveringOrFocusing: P,
    onOpenProfile: R,
    channelId: w,
    onClose: D
  } = e, x = c.ZP.getName(null == N ? true : N.id, w, t), L = (0, i.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getUserProfile(t.id)) ? true : e.application
  }), j = (0, i.e7)([o.Z, s.Z], () => o.Z.getChannel(s.Z.getChannelId())), M = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
  return (0, r.jsxs)(a.Ttm, {
    fade: true,
    className: C.body,
    children: [(0, r.jsx)(p.Z, {
      userId: t.id
    }), (0, r.jsx)(h.Z, {
      user: t,
      guildId: null == N ? true : N.id,
      onOpenProfile: R,
      nickname: x,
      pronouns: null == A ? true : A.pronouns,
      tags: (0, r.jsx)(f.Z, {
        displayProfile: A,
        themeType: S.l.POPOUT,
        onClose: D
      }),
      nicknameIcons: M ? null : (0, r.jsx)(b.Z, {
        userId: t.id,
        isVisible: P,
        onOpenProfile: R
      })
    }), (0, r.jsx)(v.Z, {
      user: t,
      onOpenProfile: e => null == R ? true : R({
        tabSection: e
      })
    }), (0, r.jsxs)("div", {
      className: T.buttons,
      children: [(0, r.jsx)(g.Z, {
        user: t,
        closePopout: D,
        fullWidth: true
      }), (0, r.jsx)(E.Z, {
        user: t,
        guildId: null == N ? true : N.id,
        fullWidth: true
      })]
    }), (0, r.jsx)(y.Z, {
      user: t,
      bio: null == A ? true : A.bio,
      hidePersonalInformation: M,
      onClose: D
    }), (0, r.jsx)(m.Z, {
      user: t,
      currentUser: n,
      guildId: null == N ? true : N.id,
      onOpenUserProfileModal: R,
      onClose: D
    }), (null == L ? true : L.popularApplicationCommandIds) != null && null != j && (0, r.jsx)(d.Z, {
      applicationId: L.id,
      commandIds: L.popularApplicationCommandIds,
      channel: j,
      guildId: null == N ? true : N.id,
      onClick: D
    }), null != N && (0, r.jsx)(_.Z, {
      heading: I.intl.string(I.t["LPJmL/"]),
      children: (0, r.jsx)(O.Z, {
        user: t,
        currentUser: n,
        guild: N
      })
    })]
  })
}