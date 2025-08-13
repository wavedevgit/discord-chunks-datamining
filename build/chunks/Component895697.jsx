/** Chunk was on web.js **/
/** chunk id: 895697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk571870 = require("./571870.js"),
  Chunk81208 = require("./81208.js");

function R(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: R,
    guild: P,
    isHovering: w,
    onOpenProfile: D,
    channelId: L,
    onClose: x
  } = e, M = c.ZP.getName(null == P ? true : P.id, L, t), j = (0, i.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getUserProfile(t.id)) ? true : e.application
  }), k = (0, i.e7)([a.Z, s.Z], () => a.Z.getChannel(s.Z.getChannelId())), U = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation), G = (0, d.b)({
    location: "BotUserProfilePopoutBody"
  });
  return (0, r.jsxs)(o.Ttm, {
    fade: true,
    className: C.body,
    children: [(0, r.jsx)(E.Z, {
      user: t,
      onOpenProfile: D,
      nickname: M,
      pronouns: null == R ? true : R.pronouns,
      tags: (0, r.jsx)(_.Z, {
        displayProfile: R,
        themeType: S.lY.POPOUT,
        onClose: x
      }),
      nicknameIcons: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.Z, {
          userId: t.id
        }), !U && (0, r.jsx)(O.Z, {
          userId: t.id,
          isHovering: w,
          onOpenProfile: D
        })]
      })
    }), (0, r.jsx)(T.Z, {
      user: t,
      onOpenProfile: e => null == D ? true : D({
        section: e
      })
    }), (0, r.jsxs)("div", {
      className: N.buttons,
      children: [(0, r.jsx)(b.Z, {
        user: t,
        className: N.button,
        closePopout: x
      }), (0, r.jsx)(y.Z, {
        user: t,
        guildId: null == P ? true : P.id,
        className: N.button
      })]
    }), (0, r.jsx)(v.Z, {
      user: t,
      bio: null == R ? true : R.bio,
      hidePersonalInformation: U,
      onClose: x
    }), G ? (0, r.jsx)(g.Z, {
      user: t,
      currentUser: n,
      displayProfile: R,
      guildId: null == P ? true : P.id,
      onOpenUserProfileModal: D,
      onClose: x
    }) : (0, r.jsx)(p.Z, {
      user: t,
      currentUser: n,
      displayProfile: R,
      guildId: null == P ? true : P.id,
      onClose: x
    }), (null == j ? true : j.popularApplicationCommandIds) != null && null != k && (0, r.jsx)(f.Z, {
      applicationId: j.id,
      commandIds: j.popularApplicationCommandIds,
      channel: k,
      guildId: null == P ? true : P.id,
      onClick: x
    }), null != P && (0, r.jsx)(m.Z, {
      heading: A.intl.string(A.t.LPJmLy),
      children: (0, r.jsx)(I.Z, {
        user: t,
        currentUser: n,
        guild: P
      })
    })]
  })
}