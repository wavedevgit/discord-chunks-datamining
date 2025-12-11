/** Chunk was on 18417 **/
/** chunk id: 740696, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk228392 = require("./228392.js"),
  Chunk941848 = require("./941848.jsx"),
  Chunk710352 = require("./710352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk212553 = require("./212553.js");

function h(t) {
  let {
    guildId: e,
    shouldUpsellCreation: h,
    transitionState: b,
    onClose: v
  } = t, j = (0, s.e7)([l.Z], () => l.Z.getGuild(e), [e]), y = (0, s.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_CHANNELS, j)), N = [{
    id: 0,
    name: p.intl.string(p.t.HTA517)
  }, {
    id: 1,
    name: p.intl.string(p.t["IHjjY/"])
  }, {
    id: 2,
    name: p.intl.string(p.t.x3drh1)
  }], [P, S] = r.useState(0), O = [{
    variant: h ? "secondary" : "primary",
    text: h ? p.intl.string(p.t.TulDPl) : p.intl.string(p.t["NX+WJN"]),
    onClick: () => v(f.L.SECONDARY)
  }];
  return h && O.push({
    variant: "primary",
    text: p.intl.string(p.t["1X8SK/"]),
    onClick: () => {
      (0, o.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("29497"), n.e("59679")]).then(n.bind(n, 241865));
        return n => {
          var r, i;
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
          }({}, n), i = i = {
            channelType: u.d4z.GUILD_FORUM,
            guildId: e,
            prefillChannelName: h ? p.intl.string(p.t["5z1Xat"]) : true
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              n.push.apply(n, a)
            }
            return n
          })(Object(i)).forEach(function(t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(i, t))
          }), r))
        }
      }), v(f.L.PRIMARY)
    }
  }), (0, a.jsxs)(i.IX, {
    transitionState: b,
    size: "xxl",
    onClose: async () => await v(),
    children: [(0, a.jsx)(i.xBx, {
      title: p.intl.string(p.t["6S6WCQ"]),
      subtitle: p.intl.string(p.t.I2BA8K)
    }), (0, a.jsxs)(i.fef, {
      children: [(0, a.jsx)(o.njP, {
        selectedItem: P,
        type: "top",
        onItemSelect: t => {
          S(t), (0, d.ws)({
            forumDemoId: t
          })
        },
        className: x.tags,
        children: N.map((t, e) => (0, a.jsx)(o.njP.Item, {
          id: e,
          children: t.name
        }, e))
      }), (0, a.jsx)(g.Z, {
        id: P
      })]
    }), y && (0, a.jsx)(i.Go$, {
      leading: (0, a.jsx)(o.Button, {
        variant: "secondary",
        text: p.intl.string(p.t.hvVgAZ),
        icon: o.Gr1,
        iconPosition: "end",
        role: "link",
        onClick: () => {
          open(m.V8)
        }
      }),
      actions: O
    })]
  })
}