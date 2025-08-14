/** Chunk was on 56236 **/
/** chunk id: 17671, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45114 = require("./45114.js"),
  Chunk493773 = require("./493773.js"),
  Chunk313201 = require("./313201.js"),
  Chunk597 = require("./597.js"),
  Chunk147754 = require("./147754.js"),
  Chunk984933 = require("./984933.js"),
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

function T(e) {
  let {
    transitionState: n,
    onClose: l,
    guildId: T
  } = e, _ = (0, d.Dt)(), D = (0, c.e7)([v.Z], () => v.Z.getGuild(T)), G = (0, O.Z)(null == D ? true : D.id), L = (0, Z.ZP)(T), R = r.useRef(m.ZP.ackMessageId(T, w.W.GUILD_EVENT)), H = (0, E.Z)();
  return r.useEffect(() => {
    L.forEach(e => x.Z.getGuildEventUserCounts(T, e.id, [])), x.Z.getGuildEventsForCurrentUser(T)
  }, [L, T]), r.useEffect(() => {
    let e = v.Z.getGuild(T);
    if (!(null == e ? true : e.features.has(N.oNc.HUB))) return;
    let {
      showHubEventsList: n
    } = p.Z.getCurrentConfig({
      guildId: T,
      location: "d3755f_1"
    });
    if (!n) return;
    let t = f.ZP.getDefaultChannel(T);
    null != t && g.c(t.id)
  }, [T]), (0, u.ZP)(() => {
    j.default.track(N.rMx.OPEN_MODAL, {
      type: k.zw,
      guild_id: T,
      guild_events_count: L.length
    })
  }), r.useEffect(() => {
    o()(L).map(e => e.creator_id).filter(b.lm).uniq().forEach(e => {
      h.Z.requestMember(T, e)
    })
  }, [T, L]), r.useEffect(() => {
    null != T && (0, s.Ju)(T, w.W.GUILD_EVENT)
  }, [T]), (0, i.jsxs)(a.Y0X, {
    size: a.CgR.MEDIUM,
    transitionState: n,
    "aria-labelledby": _,
    parentComponent: "GuildEventsModal",
    "data-migration-pending": true,
    children: [(0, i.jsxs)(a.xBx, {
      className: S.header,
      "data-migration-pending": true,
      children: [(0, i.jsx)(a.Que, {
        size: "md",
        color: "currentColor",
        className: S.icon
      }), (0, i.jsx)(a.X6q, {
        id: _,
        variant: "heading-md/semibold",
        children: L.length > 0 ? I.intl.formatToPlainString(I.t.IBdqSk, {
          number: L.length
        }) : I.intl.string(I.t.tlopTE)
      }), G && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: S.divider,
          children: "|"
        }), (0, i.jsx)(a.zxk, {
          variant: "primary",
          size: "sm",
          onClick: () => {
            (0, a.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([t.e("36599"), t.e("49049"), t.e("82758"), t.e("61"), t.e("72946")]).then(t.bind(t, 779250));
              return n => {
                var t, r;
                return (0, i.jsx)(e, (t = function(e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                      i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.forEach(function(n) {
                      var i;
                      i = t[n], n in e ? Object.defineProperty(e, n, {
                        value: i,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[n] = i
                    })
                  }
                  return e
                }({}, n), r = r = {
                  guildId: T
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, i)
                  }
                  return t
                })(Object(r)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
              }
            }, H)
          },
          text: I.intl.string(I.t["60lJ0N"])
        })]
      }), (0, i.jsx)(a.P3F, {
        onClick: l,
        className: S.iconButton,
        "aria-label": I.intl.string(I.t.cpT0Cg),
        children: (0, i.jsx)(a.Dio, {
          size: "md",
          color: "currentColor",
          className: S.icon
        })
      })]
    }), (0, i.jsx)(a.hzk, {
      className: S.content,
      "data-migration-pending": true,
      children: L.length > 0 ? L.map(e => (0, i.jsx)(C.Z, {
        guildEvent: e,
        guildId: T,
        onActionTaken: l,
        isNew: null != R.current && y.default.compare(e.id, R.current) > 0
      }, e.id)) : (0, i.jsx)(P.Z, {
        guildId: T,
        onClose: l
      })
    })]
  })
}