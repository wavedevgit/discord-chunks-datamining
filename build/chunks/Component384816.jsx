/** Chunk was on 12756 **/
/** chunk id: 384816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk54966 = require("./54966.js");

function I(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: I,
    subsection: P,
    onClose: E
  } = e, {
    trackUserProfileAction: T
  } = (0, f.KZ)(), Z = (0, i.e7)([d.Z], () => d.Z.getGuildId()), N = (0, a.Y)({
    userId: t.id
  }), w = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), S = (0, i.e7)([s.default], () => s.default.locale), A = (0, m.Z)(t.id), C = (0, p.Z)(t.id);
  return (0, r.jsxs)(l.zJl, {
    fade: true,
    className: _.scroller,
    children: [(null == I ? true : I.bio) != null && (null == I ? true : I.bio) !== "" && !w && (0, r.jsx)(g.Z, {
      userBio: I.bio,
      setLineClamp: false
    }), (null == I ? true : I.guildId) != null && (0, r.jsx)(h.Z, {
      user: t,
      currentUser: n,
      guildId: I.guildId,
      scrollIntoView: P === x.Tb.ROLES
    }), t.isProvisional && (0, r.jsx)(O.Z, {
      heading: v.intl.string(v.t.Iyka0d),
      headingIcon: (0, r.jsx)(l.Mgn, {
        size: "xxs",
        color: l.TVs.colors.HEADER_PRIMARY
      }),
      headingColor: "header-secondary",
      children: (0, r.jsx)(c.n, {
        userId: t.id
      })
    }), N.length > 0 && (0, r.jsx)(O.Z, {
      heading: v.intl.string(v.t["Uv/eT0"]),
      children: (0, r.jsx)(j.Z, {
        applicationIds: N
      })
    }), (0, r.jsx)(O.Z, {
      heading: v.intl.string(v.t.a6XYDw),
      children: (0, r.jsx)(y.Z, {
        userId: t.id,
        guildId: null == I ? true : I.guildId,
        tooltipDelay: x.vB
      })
    }), A.length > 0 && (0, r.jsx)(O.Z, {
      heading: v.intl.string(v.t["3fe7U1"]),
      scrollIntoView: P === x.Tb.CONNECTIONS,
      children: (0, r.jsx)(b.ZP, {
        connectedAccounts: A,
        className: _.connections,
        userId: t.id,
        locale: S
      })
    }), C.length > 0 && (0, r.jsx)(O.Z, {
      heading: v.intl.string(v.t.PHjkRE),
      children: C.map(e => (0, r.jsx)(b.tH, {
        className: _.appsConnections,
        applicationRoleConnection: e,
        locale: S,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), E()
        },
        selectedGuildId: null != Z ? Z : true
      }, e.application.id))
    }), (0, r.jsx)(O.Z, {
      heading: v.intl.string(v.t["mQKv+v"]),
      scrollIntoView: P === x.Tb.NOTE,
      children: (0, r.jsx)(o.Z, {
        userId: t.id,
        className: _.note,
        autoFocus: P === x.Tb.NOTE,
        onUpdate: () => T({
          action: "SET_NOTE"
        })
      })
    })]
  })
}