/** Chunk was on 7937 **/
/** chunk id: 420472, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => b
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

function b(t) {
  let {
    guildId: e,
    shouldUpsellCreation: b,
    transitionState: h,
    onClose: j
  } = t, v = (0, i.bG)([c.A], () => c.A.getGuild(e), [e]), y = (0, i.bG)([o.A], () => o.A.can(u.xBc.MANAGE_CHANNELS, v)), N = [{
    id: 0,
    name: f.intl.string(f.t.HTA517)
  }, {
    id: 1,
    name: f.intl.string(f.t["IHjjY/"])
  }, {
    id: 2,
    name: f.intl.string(f.t.x3drh1)
  }], [O, P] = r.useState(0), S = [{
    variant: b ? "secondary" : "primary",
    text: b ? f.intl.string(f.t.TulDPl) : f.intl.string(f.t["NX+WJN"]),
    onClick: () => j(x.i.SECONDARY)
  }];
  return b && S.push({
    variant: "primary",
    text: f.intl.string(f.t["1X8SK/"]),
    onClick: () => {
      (0, l.mMO)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("64233"), a.e("9743")]).then(a.bind(a, 409200));
        return a => {
          var r, s;
          return (0, n.jsx)(t, (r = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var a = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(a);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(t) {
                return Object.getOwnPropertyDescriptor(a, t).enumerable
              }))), n.forEach(function(e) {
                var n;
                n = a[e], e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = n
              })
            }
            return t
          }({}, a), s = s = {
            channelType: u.rbe.GUILD_FORUM,
            guildId: e,
            prefillChannelName: b ? f.intl.string(f.t["5z1Xat"]) : true
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              a.push.apply(a, n)
            }
            return a
          })(Object(s)).forEach(function(t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(s, t))
          }), r))
        }
      }), j(x.i.PRIMARY)
    }
  }), (0, n.jsxs)(s.dWK, {
    transitionState: h,
    size: "xxl",
    onClose: async () => await j(),
    children: [(0, n.jsx)(s.rQ0, {
      title: f.intl.string(f.t["6S6WCQ"]),
      subtitle: f.intl.string(f.t.I2BA8K)
    }), (0, n.jsxs)(s.cwr, {
      children: [(0, n.jsx)(l.VQ0, {
        selectedItem: O,
        type: "top",
        onItemSelect: t => {
          P(t), (0, d.Bd)({
            forumDemoId: t
          })
        },
        className: p._,
        children: N.map((t, e) => (0, n.jsx)(l.VQ0.Item, {
          id: e,
          children: t.name
        }, e))
      }), (0, n.jsx)(g.A, {
        id: O
      })]
    }), y && (0, n.jsx)(s.H7u, {
      leading: (0, n.jsx)(l.Button, {
        variant: "secondary",
        text: f.intl.string(f.t.hvVgAZ),
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