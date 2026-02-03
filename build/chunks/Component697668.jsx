/** Chunk was on web.js **/
/** chunk id: 697668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk713517 = require("./713517.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk657331 = require("./657331.js"),
  Chunk718019 = require("./718019.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk490752 = require("./490752.jsx"),
  Chunk587168 = require("./587168.jsx"),
  Chunk159218 = require("./159218.jsx"),
  Chunk666388 = require("./666388.jsx"),
  Chunk848674 = require("./848674.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183959 = require("./183959.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e) {
  let {
    user: t,
    currentUser: n,
    guildId: R,
    channelId: D,
    messageId: L,
    roleId: x,
    openedAt: M,
    closePopout: j,
    setPopoutRef: k,
    disableUserProfileLink: U = __OVERLAY__,
    newAnalyticsLocations: G = [],
    disableAutoFocus: F = false,
    onClickContainer: V
  } = e, {
    analyticsLocations: B
  } = (0, l.Ay)([...G, s.A.USER_PROFILE_POPOUT]), H = (0, d.aL)(), Y = (0, _.pb)({
    layout: "POPOUT",
    userId: t.id,
    guildId: R,
    channelId: D,
    messageId: L,
    roleId: x
  }), W = (0, m.Ay)(t.id, R), K = (0, a.bG)([f.A], () => null != R ? f.A.getGuild(R) : null), z = i.useRef(null), {
    isHoveringOrFocusing: q
  } = (0, u.A)(z);
  i.useEffect(() => {
    null == k || k(null == z ? true : z.current)
  }, [z, k]);
  let Z = e => {
      null == j || j(), H.dispatch(T.jej.POPOUT_CLOSE), (0, g.openUserProfileModal)(P({
        sourceAnalyticsLocations: B,
        hideRestrictedProfile: true
      }, Y, e))
    },
    Q = () => U ? null : (0, r.jsx)(o.Drp, {
      id: "view-profile",
      label: N.intl.string(N.t["+Xp3hq"]),
      action: () => {
        Z(), (0, h.Wn)(P({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: B
        }, Y))
      }
    }),
    X = F ? "div" : o.lGe,
    J = (0, c.GV)(),
    $ = p.Ay.useName(R, D, t);
  return (0, r.jsx)(l.f5, {
    value: B,
    children: (0, r.jsx)(_.of, {
      value: Y,
      openedAt: M,
      fetchStartedAt: null == W ? true : W.fetchStartedAt,
      fetchEndedAt: null == W ? true : W.fetchEndedAt,
      isLoaded: null == W ? true : W.isLoaded,
      children: (0, r.jsxs)(X, {
        ref: z,
        "aria-labelledby": J,
        onClick: V,
        children: [(0, r.jsx)(o.AC4, {
          children: (0, r.jsx)(o.H, {
            id: J,
            children: N.intl.format(N.t.KRe1Fk, {
              name: $
            })
          })
        }), (0, r.jsxs)(b.A, {
          user: t,
          displayProfile: W,
          themeType: C.d.POPOUT,
          children: [(0, r.jsx)(v.A, {
            children: (0, r.jsx)(O.A, {
              user: t,
              guildId: R,
              viewProfileItem: Q()
            })
          }), (0, r.jsxs)("div", {
            className: w.wx,
            children: [(0, r.jsx)(y.A, {
              user: t,
              displayProfile: W,
              guildId: R,
              themeType: C.d.POPOUT
            }), (0, r.jsx)(E.A, {
              user: t,
              displayProfile: W,
              guildId: R,
              channelId: D,
              themeType: C.d.POPOUT,
              onOpenProfile: U ? true : Z
            }), (0, r.jsx)(A.A, {
              user: t,
              themeType: C.d.POPOUT,
              onCloseProfile: j,
              disableToolbar: true
            })]
          }), (0, r.jsx)(I.A, {
            user: t,
            currentUser: n,
            displayProfile: W,
            guild: K,
            isHoveringOrFocusing: q,
            onOpenProfile: U ? true : Z,
            channelId: D,
            onClose: j
          }), (0, r.jsx)(S.A, {
            user: t,
            guildId: R,
            channelId: D,
            onClose: j,
            disableAutoFocus: F
          })]
        })]
      })
    })
  })
}