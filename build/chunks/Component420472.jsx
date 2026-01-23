/** Chunk was on 7937 **/
/** chunk id: 420472, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk853742 = require("./853742.js"),
  Chunk728645 = require("./728645.jsx"),
  Chunk253913 = require("./253913.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk864562 = require("./864562.js");

function j(t) {
  let {
    guildId: e,
    shouldUpsellCreation: j,
    transitionState: v,
    onClose: f
  } = t, b = (0, i.bG)([o.A], () => o.A.getGuild(e), [e]), y = (0, i.bG)([c.A], () => c.A.can(u.xBc.MANAGE_CHANNELS, b)), N = [{
    id: 0,
    name: p.intl.string(p.t.HTA517)
  }, {
    id: 1,
    name: p.intl.string(p.t["IHjjY/"])
  }, {
    id: 2,
    name: p.intl.string(p.t.x3drh1)
  }], [O, P] = r.useState(0), S = [{
    variant: j ? "secondary" : "primary",
    text: j ? p.intl.string(p.t.TulDPl) : p.intl.string(p.t["NX+WJN"]),
    onClick: () => f(x.i.SECONDARY)
  }];
  return j && S.push({
    variant: "primary",
    text: p.intl.string(p.t["1X8SK/"]),
    onClick: () => {
      (0, l.mMO)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
        return n => {
          var r, s;
          return (0, a.jsx)(t, (r = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                a = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))), a.forEach(function(e) {
                var a;
                a = n[e], e in t ? Object.defineProperty(t, e, {
                  value: a,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = a
              })
            }
            return t
          }({}, n), s = s = {
            channelType: u.rbe.GUILD_FORUM,
            guildId: e,
            prefillChannelName: j ? p.intl.string(p.t["5z1Xat"]) : true
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              n.push.apply(n, a)
            }
            return n
          })(Object(s)).forEach(function(t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(s, t))
          }), r))
        }
      }), f(x.i.PRIMARY)
    }
  }), (0, a.jsxs)(s.dWK, {
    transitionState: v,
    size: "xxl",
    onClose: async () => await f(),
    children: [(0, a.jsx)(s.rQ0, {
      title: p.intl.string(p.t["6S6WCQ"]),
      subtitle: p.intl.string(p.t.I2BA8K)
    }), (0, a.jsxs)(s.cwr, {
      children: [(0, a.jsx)(l.VQ0, {
        selectedItem: O,
        type: "top",
        onItemSelect: t => {
          P(t), (0, d.Bd)({
            forumDemoId: t
          })
        },
        className: h._,
        children: N.map((t, e) => (0, a.jsx)(l.VQ0.Item, {
          id: e,
          children: t.name
        }, e))
      }), (0, a.jsx)(g.A, {
        id: O
      })]
    }), y && (0, a.jsx)(s.H7u, {
      leading: (0, a.jsx)(l.Button, {
        variant: "secondary",
        text: p.intl.string(p.t.hvVgAZ),
        icon: l.I9m,
        iconPosition: "end",
        role: "link",
        onClick: () => {
          open(m.X_)
        }
      }),
      actions: S
    })]
  })
}