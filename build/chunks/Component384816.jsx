/** Chunk was on 93979 **/
/** chunk id: 384816, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666520 = require("./666520.jsx"),
  Chunk246016 = require("./246016.js"),
  Chunk189156 = require("./189156.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk914010 = require("./914010.js"),
  Chunk246946 = require("./246946.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk250822 = require("./250822.js"),
  Chunk771362 = require("./771362.js"),
  Chunk280885 = require("./280885.jsx"),
  Chunk819602 = require("./819602.jsx"),
  Chunk78806 = require("./78806.jsx"),
  Chunk900927 = require("./900927.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk179828 = require("./179828.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199912 = require("./199912.js");

function O(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: O,
    subsection: N,
    onClose: T
  } = e, {
    trackUserProfileAction: A
  } = (0, f.KZ)(), P = (0, i.e7)([d.Z], () => d.Z.getGuildId()), E = (0, a.Y)({
    userId: n.id
  }), _ = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), C = (0, i.e7)([s.default], () => s.default.locale), S = (0, p.Z)(n.id), w = (0, m.Z)(n.id);
  return (0, l.jsxs)(o.zJl, {
    fade: true,
    className: Z.scroller,
    children: [(null == O ? true : O.bio) != null && (null == O ? true : O.bio) !== "" && !_ && (0, l.jsx)(x.Z, {
      userBio: O.bio,
      setLineClamp: false
    }), (null == O ? true : O.guildId) != null && (0, l.jsx)(g.Z, {
      user: n,
      currentUser: t,
      guildId: O.guildId,
      scrollIntoView: N === I.Tb.ROLES
    }), n.isProvisional && (0, l.jsx)(j.Z, {
      heading: y.intl.string(y.t.Iyka0U),
      headingIcon: (0, l.jsx)(o.Mgn, {
        size: "xxs",
        color: o.TVs.colors.HEADER_PRIMARY
      }),
      headingColor: "text-default",
      children: (0, l.jsx)(c.n, {
        userId: n.id
      })
    }), E.length > 0 && (0, l.jsx)(j.Z, {
      heading: y.intl.string(y.t["Uv/eTx"]),
      children: (0, l.jsx)(b.Z, {
        applicationIds: E
      })
    }), (0, l.jsx)(j.Z, {
      heading: y.intl.string(y.t.a6XYD9),
      children: (0, l.jsx)(v.Z, {
        userId: n.id,
        guildId: null == O ? true : O.guildId,
        tooltipDelay: I.vB
      })
    }), S.length > 0 && (0, l.jsx)(j.Z, {
      heading: y.intl.string(y.t["3fe7U5"]),
      scrollIntoView: N === I.Tb.CONNECTIONS,
      children: (0, l.jsx)(h.ZP, {
        connectedAccounts: S,
        className: Z.connections,
        userId: n.id,
        locale: C
      })
    }), w.length > 0 && (0, l.jsx)(j.Z, {
      heading: y.intl.string(y.t.PHjkRE),
      children: w.map(e => (0, l.jsx)(h.tH, {
        className: Z.appsConnections,
        applicationRoleConnection: e,
        locale: C,
        onApplicationClicked: () => {
          A({
            action: "PRESS_APP_CONNECTION"
          }), T()
        },
        selectedGuildId: null != P ? P : true
      }, e.application.id))
    }), (0, l.jsx)(j.Z, {
      heading: y.intl.string(y.t["mQKv+v"]),
      scrollIntoView: N === I.Tb.NOTE,
      children: (0, l.jsx)(r.Z, {
        userId: n.id,
        className: Z.note,
        autoFocus: N === I.Tb.NOTE,
        onUpdate: () => A({
          action: "SET_NOTE"
        })
      })
    })]
  })
}