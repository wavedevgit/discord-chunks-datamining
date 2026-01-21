/** Chunk was on 1272 **/
/** chunk id: 122333, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./583741.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk622822 = require("./622822.js"),
  Chunk391650 = require("./391650.jsx"),
  Chunk305325 = require("./305325.js"),
  Chunk983736 = require("./983736.js"),
  Chunk341298 = require("./341298.js"),
  Chunk390885 = require("./390885.js"),
  Chunk524329 = require("./524329.js"),
  Chunk995532 = require("./995532.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk929809 = require("./929809.js"),
  Chunk179645 = require("./179645.js"),
  Chunk701476 = require("./701476.js"),
  Chunk785997 = require("./785997.js"),
  Chunk981631 = require("./981631.js"),
  Chunk188785 = require("./188785.js"),
  Chunk630724 = require("./630724.js");

function x(e) {
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

function P(e, t) {
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

function A() {
  null != r && (0, l.Mr3)(r)
}
class Z extends Chunk317770.Z {
  _initialize() {
    a.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.Z.subscribe("LOGOUT", A)
  }
  _terminate() {
    a.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.Z.unsubscribe("LOGOUT", A)
  }
  handleConnectionOpen() {
    var e;
    let t, a = y.Z.getType();
    if (null == a) return;
    switch (a) {
      case C.M5.INVITE_UNCLAIMED:
        f.Z.flowStart(j.MK.INVITE, j.EW.NUF_STARTED);
        break;
      case C.M5.ORGANIC_REGISTERED:
        f.Z.flowStart(j.MK.ORGANIC, j.EW.NUF_STARTED);
        break;
      case C.M5.MARKETING_UNCLAIMED:
        f.Z.flowStart(j.MK.ORGANIC_MARKETING, j.EW.NUF_STARTED)
    }
    let o = false,
      A = E.Z.getGuildId();
    if (a === C.M5.INVITE_UNCLAIMED) {
      let e = b.Z.getGuild(A);
      null != e && (0, d.Dc)(e) && (o = true, (0, g.RM)(e.id))
    }
    let Z = () => 0 === m.Z.totalGuilds && !I.isPlatformEmbedded,
      w = s.bN();
    e = [{
      key: "Unified NUF Modal",
      open: async function(e) {
        let t = e => {
          switch (e) {
            case S.F.AGE_GATE:
              f.Z.flowStep(j.MK.ANY, j.EW.AGE_GATE);
              break;
            case S.F.CHOOSE_TEMPLATE:
              f.Z.flowStep(j.MK.ANY, j.X2.GUILD_TEMPLATES);
              break;
            case S.F.CUSTOMIZE_GUILD:
              f.Z.flowStep(j.MK.ANY, j.X2.GUILD_CREATE);
              break;
            case S.F.CHANNEL_PROMPT:
              f.Z.flowStep(j.MK.ANY, j.X2.CHANNEL_PROMPT);
              break;
            case S.F.JOIN_GUILD:
              f.Z.flowStep(j.MK.ANY, j.X2.JOIN_GUILD);
              break;
            case S.F.CREATION_INTENT:
              f.Z.flowStep(j.MK.ANY, j.X2.CREATION_INTENT);
              break;
            case S.F.COMPLETE:
              f.Z.flowStep(j.MK.ANY, j.X2.SUCCESS);
              break;
            case null:
              break;
            default:
              O.vE(e)
          }
        };
        r = await (0, l.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("42483"), n.e("24028")]).then(n.bind(n, 599219));
          return n => (0, i.jsx)(e, P(x({}, n), {
            onSlideChange: t
          }))
        }, {
          onCloseRequest: T.dG4,
          onCloseCallback: e,
          modalKey: r
        })
      },
      predicate: () => Z() && !N.aA
    }, {
      key: "New User Age Gate",
      open: c.i,
      predicate: () => w && !Z() && !N.aA
    }, {
      key: "Claim Account Modal",
      open: e => c.j(I.isPlatformEmbedded, e),
      predicate: () => {
        var e;
        return !o && null != _.default.getCurrentUser() && !(null == (e = _.default.getCurrentUser()) ? true : e.isClaimed()) && !N.aA && !(0, p.g)()
      }
    }, {
      key: "Verification Gate with Claim Account",
      open: e => (0, u.hk)(A, null != e ? e : true),
      predicate: () => {
        var e;
        return o && !(null == (e = _.default.getCurrentUser()) ? true : e.isClaimed()) && !N.aA
      }
    }, {
      key: "Guild Welcome Modal",
      open: e => (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("90542").then(n.bind(n, 184782));
        return t => (0, i.jsx)(e, P(x({}, t), {
          guildId: A
        }))
      }, {
        onCloseCallback: e
      }),
      predicate: () => null != A && null != h.Z.get(A) && h.Z.get(A) !== h.a
    }], t = () => {
      v.H(), f.Z.flowStep(j.MK.ANY, j.EW.NUF_COMPLETE, true)
    }, [...e].reverse().forEach(e => {
      let n = t;
      t = () => {
        e.predicate() ? e.open(n) : n()
      }
    }), t()
  }
}
let w = new Z