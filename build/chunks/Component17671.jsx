/** Chunk was on 56236 **/
/** chunk id: 17671, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45114 = require("./45114.js"),
  Chunk493773 = require("./493773.js"),
  Chunk313201 = require("./313201.js"),
  Chunk720202 = require("./720202.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js");
require("./981888.js");
var Chunk709054 = require("./709054.js"),
  Chunk897285 = require("./897285.js"),
  Chunk518756 = require("./518756.js"),
  Chunk554747 = require("./554747.js"),
  Chunk710679 = require("./710679.jsx"),
  Chunk74562 = require("./74562.jsx"),
  Chunk576749 = require("./576749.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk520698 = require("./520698.js");

function w(e) {
  let {
    transitionState: n,
    onClose: l,
    guildId: w
  } = e, I = (0, d.Dt)(), S = (0, c.e7)([p.Z], () => p.Z.getGuild(w)), D = (0, b.Z)(null == S ? true : S.id), L = (0, x.ZP)(w), T = i.useRef(m.ZP.ackMessageId(w, P.W.GUILD_EVENT)), M = (0, C.Z)();
  return i.useEffect(() => {
    L.forEach(e => f.Z.getGuildEventUserCounts(w, e.id, [])), f.Z.getGuildEventsForCurrentUser(w)
  }, [L, w]), (0, u.ZP)(() => {
    h.default.track(N.rMx.OPEN_MODAL, {
      type: Z.zw,
      guild_id: w,
      guild_events_count: L.length
    })
  }), i.useEffect(() => {
    a()(L).map(e => e.creator_id).filter(v.lm).uniq().forEach(e => {
      g.Z.requestMember(w, e)
    })
  }, [w, L]), i.useEffect(() => {
    null != w && (0, s.Ju)(w, P.W.GUILD_EVENT)
  }, [w]), (0, r.jsxs)(o.Y0X, {
    size: o.CgR.MEDIUM,
    transitionState: n,
    "aria-labelledby": I,
    parentComponent: "GuildEventsModal",
    "data-migration-pending": true,
    children: [(0, r.jsxs)(o.xBx, {
      className: E.header,
      "data-migration-pending": true,
      children: [(0, r.jsx)(o.Que, {
        size: "md",
        color: "currentColor",
        className: E.icon
      }), (0, r.jsx)(o.Heading, {
        id: I,
        variant: "heading-md/semibold",
        children: L.length > 0 ? k.intl.formatToPlainString(k.t.IBdqSu, {
          number: L.length
        }) : k.intl.string(k.t.tlopTM)
      }), D && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: E.divider,
          children: "|"
        }), (0, r.jsx)(o.Button, {
          variant: "primary",
          size: "sm",
          onClick: () => {
            (0, o.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([t.e("36599"), t.e("49049"), t.e("61"), t.e("55324")]).then(t.bind(t, 779250));
              return n => {
                var t, i;
                return (0, r.jsx)(e, (t = function(e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                      r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.forEach(function(n) {
                      var r;
                      r = t[n], n in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[n] = r
                    })
                  }
                  return e
                }({}, n), i = i = {
                  guildId: w
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r)
                  }
                  return t
                })(Object(i)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }), t))
              }
            }, M)
          },
          text: k.intl.string(k.t["60lJ0C"])
        })]
      }), (0, r.jsx)(o.P3F, {
        onClick: l,
        className: E.iconButton,
        "aria-label": k.intl.string(k.t.cpT0Cq),
        children: (0, r.jsx)(o.Dio, {
          size: "md",
          color: "currentColor",
          className: E.icon
        })
      })]
    }), (0, r.jsx)(o.hzk, {
      className: E.content,
      "data-migration-pending": true,
      children: L.length > 0 ? L.map(e => (0, r.jsx)(O.Z, {
        guildEvent: e,
        onActionTaken: l,
        isNew: null != T.current && j.default.compare(e.id, T.current) > 0
      }, e.id)) : (0, r.jsx)(y.Z, {
        guildId: w,
        onClose: l
      })
    })]
  })
}