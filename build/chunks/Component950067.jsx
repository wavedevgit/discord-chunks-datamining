/** Chunk was on 21738 **/
/** chunk id: 950067, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => w
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk323073 = require("./323073.js"),
  Chunk315982 = require("./315982.jsx"),
  Chunk202384 = require("./202384.js"),
  Chunk709977 = require("./709977.js"),
  Chunk14509 = require("./14509.js"),
  Chunk894778 = require("./894778.js"),
  Chunk447696 = require("./447696.js"),
  Chunk684407 = require("./684407.js"),
  Chunk919638 = require("./919638.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk723702 = require("./723702.js"),
  Chunk942614 = require("./942614.js"),
  Chunk426620 = require("./426620.js"),
  Chunk771016 = require("./771016.js"),
  Chunk994277 = require("./994277.js"),
  Chunk652215 = require("./652215.js");
require("./436317.js");
var Chunk315290 = require("./315290.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x() {
  null != r && (0, l.OoC)(r)
}
class P extends Chunk272355.A {
  _initialize() {
    a.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.h.subscribe("LOGOUT", x)
  }
  _terminate() {
    a.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.h.unsubscribe("LOGOUT", x)
  }
  handleConnectionOpen() {
    var e;
    let t, a = I.A.getType();
    if (null == a) return;
    switch (a) {
      case v.zY.INVITE_UNCLAIMED:
        f.A.flowStart(N.do.INVITE, N.ju.NUF_STARTED);
        break;
      case v.zY.ORGANIC_REGISTERED:
        f.A.flowStart(N.do.ORGANIC, N.ju.NUF_STARTED);
        break;
      case v.zY.MARKETING_UNCLAIMED:
        f.A.flowStart(N.do.ORGANIC_MARKETING, N.ju.NUF_STARTED)
    }
    let s = false,
      x = b.A.getGuildId();
    if (a === v.zY.INVITE_UNCLAIMED) {
      let e = m.A.getGuild(x);
      null != e && (0, d.Qd)(e) && (s = true, (0, h.Fy)(e.id))
    }
    let P = () => 0 === g.A.totalGuilds && !O.isPlatformEmbedded,
      w = o.xq();
    e = [{
      key: "Unified NUF Modal",
      open: async function(e) {
        let t = e => {
          switch (e) {
            case S.i.AGE_GATE:
              f.A.flowStep(N.do.ANY, N.ju.AGE_GATE);
              break;
            case S.i.CHOOSE_TEMPLATE:
              f.A.flowStep(N.do.ANY, N.jC.GUILD_TEMPLATES);
              break;
            case S.i.CUSTOMIZE_GUILD:
              f.A.flowStep(N.do.ANY, N.jC.GUILD_CREATE);
              break;
            case S.i.CHANNEL_PROMPT:
              f.A.flowStep(N.do.ANY, N.jC.CHANNEL_PROMPT);
              break;
            case S.i.JOIN_GUILD:
              f.A.flowStep(N.do.ANY, N.jC.JOIN_GUILD);
              break;
            case S.i.CREATION_INTENT:
              f.A.flowStep(N.do.ANY, N.jC.CREATION_INTENT);
              break;
            case S.i.COMPLETE:
              f.A.flowStep(N.do.ANY, N.jC.SUCCESS);
              break;
            case null:
              break;
            default:
              E.xb(e)
          }
        };
        r = await (0, l.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("86746"), n.e("81890")]).then(n.bind(n, 218318));
          return n => (0, i.jsx)(e, j(T({}, n), {
            onSlideChange: t
          }))
        }, {
          onCloseRequest: C.tEg,
          onCloseCallback: e,
          modalKey: r
        })
      },
      predicate: () => P() && true
    }, {
      key: "New User Age Gate",
      open: c.v,
      predicate: () => w && !P() && true
    }, {
      key: "Claim Account Modal",
      open: e => c.R(O.isPlatformEmbedded, e),
      predicate: () => {
        var e;
        return !s && null != _.default.getCurrentUser() && !(null == (e = _.default.getCurrentUser()) ? true : e.isClaimed()) && !(0, p._9)()
      }
    }, {
      key: "Verification Gate with Claim Account",
      open: e => (0, u.Ze)(x, null != e ? e : true),
      predicate: () => {
        var e;
        return s && !(null == (e = _.default.getCurrentUser()) ? true : e.isClaimed()) && true
      }
    }, {
      key: "Guild Welcome Modal",
      open: e => (0, l.mMO)(async () => {
        let {
          default: e
        } = await n.e("98063").then(n.bind(n, 143154));
        return t => (0, i.jsx)(e, j(T({}, t), {
          guildId: x
        }))
      }, {
        onCloseCallback: e
      }),
      predicate: () => null != x && null != A.A.get(x) && A.A.get(x) !== A.E
    }], t = () => {
      y.D(), f.A.flowStep(N.do.ANY, N.ju.NUF_COMPLETE, true)
    }, [...e].reverse().forEach(e => {
      let n = t;
      t = () => {
        e.predicate() ? e.open(n) : n()
      }
    }), t()
  }
}
let w = new P