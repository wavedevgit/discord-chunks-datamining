/** Chunk was on 7453 **/
/** chunk id: 926956, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => w
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk334738 = require("./334738.js"),
  Chunk964486 = require("./964486.js"),
  Chunk915089 = require("./915089.js"),
  Chunk256587 = require("./256587.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js");
require("./645034.js");
var Chunk661191 = require("./661191.js"),
  Chunk285059 = require("./285059.js"),
  Chunk770666 = require("./770666.js"),
  Chunk508654 = require("./508654.js"),
  Chunk614170 = require("./614170.jsx"),
  Chunk868711 = require("./868711.jsx"),
  Chunk823508 = require("./823508.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk586426 = require("./586426.js");

function w(e) {
  let {
    transitionState: n,
    onClose: i,
    guildId: w
  } = e, G = (0, d.GV)(), T = (0, a.bG)([g.A], () => g.A.getGuild(w)), S = (0, f.A)(null == T ? true : T.id), I = (0, b.Ay)(w), M = l.useRef(h.Ay.ackMessageId(w, k.P.GUILD_EVENT)), _ = (0, C.A)();
  return l.useEffect(() => {
    I.forEach(e => p.A.getGuildEventUserCounts(w, e.id, [])), p.A.getGuildEventsForCurrentUser(w)
  }, [I, w]), (0, u.Ay)(() => {
    j.default.track(N.HAw.OPEN_MODAL, {
      type: O.BV,
      guild_id: w,
      guild_events_count: I.length
    })
  }), l.useEffect(() => {
    s()(I).map(e => e.creator_id).filter(x.Vq).uniq().forEach(e => {
      m.A.requestMember(w, e)
    })
  }, [w, I]), l.useEffect(() => {
    null != w && (0, o.hK)(w, k.P.GUILD_EVENT)
  }, [w]), (0, r.jsxs)(c.EOs, {
    size: c.rIJ.MEDIUM,
    transitionState: n,
    "aria-labelledby": G,
    parentComponent: "GuildEventsModal",
    "data-migration-pending": true,
    children: [(0, r.jsxs)(c.rQ0, {
      className: P.wx,
      "data-migration-pending": true,
      children: [(0, r.jsx)(c.CTc, {
        size: "md",
        color: "currentColor",
        className: P.Kk
      }), (0, r.jsx)(c.Heading, {
        id: G,
        variant: "heading-md/semibold",
        children: I.length > 0 ? E.intl.formatToPlainString(E.t.IBdqSu, {
          number: I.length
        }) : E.intl.string(E.t.tlopTM)
      }), S && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: P.yF,
          children: "|"
        }), (0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          onClick: () => {
            (0, c.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([t.e("68587"), t.e("28136"), t.e("342"), t.e("68505")]).then(t.bind(t, 21653));
              return n => {
                var t, l;
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
                }({}, n), l = l = {
                  guildId: w
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r)
                  }
                  return t
                })(Object(l)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
                }), t))
              }
            }, _)
          },
          text: E.intl.string(E.t["60lJ0C"])
        })]
      }), (0, r.jsx)(c.DUT, {
        onClick: i,
        className: P.gb,
        "aria-label": E.intl.string(E.t.cpT0Cq),
        children: (0, r.jsx)(c.PGe, {
          size: "md",
          color: "currentColor",
          className: P.Kk
        })
      })]
    }), (0, r.jsx)(c.$mQ, {
      className: P.Qs,
      "data-migration-pending": true,
      children: I.length > 0 ? I.map(e => (0, r.jsx)(A.A, {
        guildEvent: e,
        onActionTaken: i,
        isNew: null != M.current && v.default.compare(e.id, M.current) > 0
      }, e.id)) : (0, r.jsx)(y.A, {
        guildId: w,
        onClose: i
      })
    })]
  })
}