/** Chunk was on web.js **/
/** chunk id: 666388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk351906 = require("./351906.js"),
  Chunk562153 = require("./562153.js"),
  Chunk622543 = require("./622543.js"),
  Chunk987112 = require("./987112.jsx"),
  Chunk31432 = require("./31432.jsx"),
  Chunk559506 = require("./559506.jsx"),
  Chunk900179 = require("./900179.jsx"),
  Chunk646986 = require("./646986.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk570314 = require("./570314.jsx"),
  Chunk571077 = require("./571077.jsx"),
  Chunk243166 = require("./243166.jsx"),
  Chunk442228 = require("./442228.jsx"),
  Chunk403369 = require("./403369.jsx"),
  Chunk360563 = require("./360563.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk629338 = require("./629338.js"),
  Chunk183959 = require("./183959.js");

function C(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: C,
    guild: N,
    isHoveringOrFocusing: w,
    onOpenProfile: R,
    channelId: P,
    onClose: D
  } = e, x = c.Ay.getName(null == N ? true : N.id, P, t), L = (0, i.bG)([u.A], () => {
    var e;
    return null == (e = u.A.getUserProfile(t.id)) ? true : e.application
  }), j = (0, i.bG)([s.A, o.A], () => s.A.getChannel(o.A.getChannelId())), M = (0, i.bG)([l.A], () => l.A.hidePersonalInformation);
  return (0, r.jsxs)(a.HOs, {
    fade: true,
    className: T.rf,
    children: [(0, r.jsx)(p.A, {
      userId: t.id
    }), (0, r.jsx)(m.A, {
      user: t,
      guildId: null == N ? true : N.id,
      onOpenProfile: R,
      nickname: x,
      pronouns: null == C ? true : C.pronouns,
      tags: (0, r.jsx)(f.A, {
        displayProfile: C,
        themeType: A.d.POPOUT,
        onClose: D
      }),
      nicknameIcons: M ? null : (0, r.jsx)(y.A, {
        userId: t.id,
        isVisible: w,
        onOpenProfile: R
      })
    }), (0, r.jsx)(v.A, {
      user: t,
      onOpenProfile: e => null == R ? true : R({
        tabSection: e
      })
    }), (0, r.jsxs)("div", {
      className: S.U,
      children: [(0, r.jsx)(g.A, {
        user: t,
        closePopout: D,
        fullWidth: true
      }), (0, r.jsx)(E.A, {
        user: t,
        guildId: null == N ? true : N.id,
        fullWidth: true
      })]
    }), (0, r.jsx)(b.A, {
      user: t,
      bio: null == C ? true : C.bio,
      hidePersonalInformation: M,
      onClose: D
    }), (0, r.jsx)(h.A, {
      user: t,
      currentUser: n,
      guildId: null == N ? true : N.id,
      onOpenUserProfileModal: R,
      onClose: D
    }), (null == L ? true : L.popularApplicationCommandIds) != null && null != j && (0, r.jsx)(d.A, {
      applicationId: L.id,
      commandIds: L.popularApplicationCommandIds,
      channel: j,
      guildId: null == N ? true : N.id,
      onClick: D
    }), null != N && (0, r.jsx)(_.A, {
      heading: I.intl.string(I.t["LPJmL/"]),
      children: (0, r.jsx)(O.A, {
        userId: t.id,
        guild: N
      })
    })]
  })
}