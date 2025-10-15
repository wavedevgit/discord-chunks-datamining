/** Chunk was on 31553 **/
/** chunk id: 384816, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: O,
    subsection: N,
    onClose: P
  } = e, {
    trackUserProfileAction: T
  } = (0, m.KZ)(), A = (0, i.e7)([d.Z], () => d.Z.getGuildId()), E = (0, s.Y)({
    userId: n.id
  }), S = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), C = (0, i.e7)([c.default], () => c.default.locale), _ = (0, f.Z)(n.id), w = (0, p.Z)(n.id);
  return (0, l.jsxs)(r.zJl, {
    fade: true,
    className: Z.scroller,
    children: [(null == O ? true : O.bio) != null && (null == O ? true : O.bio) !== "" && !S && (0, l.jsx)(h.Z, {
      userBio: O.bio,
      setLineClamp: false
    }), (null == O ? true : O.guildId) != null && (0, l.jsx)(b.Z, {
      user: n,
      currentUser: t,
      guildId: O.guildId,
      scrollIntoView: N === I.Tb.ROLES
    }), n.isProvisional && (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t.Iyka0U),
      headingIcon: (0, l.jsx)(r.Mgn, {
        size: "xxs",
        color: r.TVs.colors.HEADER_PRIMARY
      }),
      headingColor: "header-secondary",
      children: (0, l.jsx)(a.n, {
        userId: n.id
      })
    }), E.length > 0 && (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t["Uv/eTx"]),
      children: (0, l.jsx)(j.Z, {
        applicationIds: E
      })
    }), (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t.a6XYD9),
      children: (0, l.jsx)(v.Z, {
        userId: n.id,
        guildId: null == O ? true : O.guildId,
        tooltipDelay: I.vB
      })
    }), _.length > 0 && (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t["3fe7U5"]),
      scrollIntoView: N === I.Tb.CONNECTIONS,
      children: (0, l.jsx)(x.ZP, {
        connectedAccounts: _,
        className: Z.connections,
        userId: n.id,
        locale: C
      })
    }), w.length > 0 && (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t.PHjkRE),
      children: w.map(e => (0, l.jsx)(x.tH, {
        className: Z.appsConnections,
        applicationRoleConnection: e,
        locale: C,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), P()
        },
        selectedGuildId: null != A ? A : true
      }, e.application.id))
    }), (0, l.jsx)(g.Z, {
      heading: y.intl.string(y.t["mQKv+v"]),
      scrollIntoView: N === I.Tb.NOTE,
      children: (0, l.jsx)(o.Z, {
        userId: n.id,
        className: Z.note,
        autoFocus: N === I.Tb.NOTE,
        onUpdate: () => T({
          action: "SET_NOTE"
        })
      })
    })]
  })
}