/** Chunk was on 61 **/
/** chunk id: 785468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk924301 = require("./924301.js"),
  Chunk518756 = require("./518756.js"),
  Chunk545165 = require("./545165.js"),
  Chunk884746 = require("./884746.js"),
  Chunk274311 = require("./274311.js"),
  Chunk230900 = require("./230900.js"),
  Chunk366815 = require("./366815.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk615017 = require("./615017.js");
let P = e => {
    let {
      guildId: t,
      channelType: n,
      channel: r,
      onSelectChannel: i,
      disabled: a,
      entityType: s
    } = e, d = n === E.d4z.GUILD_STAGE_VOICE, g = (0, j.Q)(r, s), h = (0, f.sR)(t, n);
    return (0, l.jsx)(o.VcW, {
      selectionMode: "single",
      label: d ? N.intl.string(N.t.S7GjDz) : N.intl.string(N.t["7RYWCP"]),
      required: true,
      helperText: g ? true : N.intl.string(N.t.F3bDaX),
      value: null == r ? true : r.id,
      options: h.map(e => ({
        id: e.id,
        value: e.id,
        label: (0, c.F6)(e, m.default, x.Z, true),
        leading: ((e, t) => {
          let n = u.Z.getChannel(e);
          if (null == n) return null;
          let r = n.type === E.d4z.GUILD_STAGE_VOICE,
            i = (0, j.Q)(n, t),
            a = i ? o.gj8 : o.gjC,
            s = i ? o.ewx : o.pki;
          return (0, l.jsx)(r ? s : a, {
            color: "currentColor",
            size: "md",
            className: C.channelOptionIcon
          })
        })(e.id, s)
      })),
      onSelectionChange: e => {
        let t = h.find(t => t.id === e);
        i(null != t ? t : true)
      },
      disabled: a
    })
  },
  S = (e, t) => n => {
    let l = {
      entityType: n,
      scheduledEndTime: true
    };
    if (n === O.WX.EXTERNAL) {
      var r;
      l.scheduledEndTime = (null != (r = a()(t.scheduledStartTime)) ? r : a()()).add(2, "hour").toISOString()
    }
    e(l)
  };

function I(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i,
    isFocusReady: a
  } = e, {
    entityType: c,
    channelId: d
  } = n, g = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]), x = r.useRef(null);
  r.useEffect(() => {
    if (a && c === O.WX.EXTERNAL) {
      var e;
      null == (e = x.current) || e.focus()
    }
  }, [a, c]);
  let m = e => {
      var t;
      i({
        channelId: null != (t = null == e ? true : e.id) ? t : null
      })
    },
    v = (0, b.xV)(n),
    f = (0, b.xC)(c),
    p = (0, h.xt)(n);
  return null == c || c === O.WX.NONE ? null : c === O.WX.EXTERNAL ? (0, l.jsx)(o.oil, {
    label: N.intl.string(N.t.yx785A),
    required: true,
    onChange: e => {
      i({
        entityMetadata: {
          location: e
        }
      })
    },
    placeholder: N.intl.string(N.t.mkCMia),
    maxLength: O.gG,
    value: null != v ? v : "",
    inputRef: x
  }) : null == f ? null : (0, l.jsx)(P, {
    guildId: t,
    channelType: f,
    onSelectChannel: m,
    channel: g,
    entityType: c,
    disabled: p
  })
}

function Z(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, a = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]), c = (0, v.Z)(t, true), u = (0, v.Z)(t, E.d4z.GUILD_VOICE), g = (0, v.Z)(t, E.d4z.GUILD_STAGE_VOICE), x = (0, f.sR)(t, E.d4z.GUILD_VOICE), m = (0, p.q)(a), j = null == a ? true : a.features.has(E.GuildFeatures.COMMUNITY), b = (0, h.xt)(n), y = S(i, n), C = r.useMemo(() => {
    let e = !u || 0 === x.length,
      t = u ? N.intl.string(N.t["DkY+cO"]) : N.intl.string(N.t.HeF1kV),
      n = [{
        name: N.intl.string(N.t.BVZqJl),
        value: O.WX.VOICE,
        desc: e ? t : N.intl.string(N.t["EV//4f"]),
        leadingIcon: o.gj8,
        disabled: e
      }, {
        name: N.intl.string(N.t.w7ipbz),
        value: O.WX.EXTERNAL,
        desc: c ? N.intl.string(N.t.DYxrHm) : N.intl.string(N.t.HeF1kV),
        leadingIcon: o._tJ,
        disabled: !c
      }];
    if (j) {
      let e = !g || 0 === m.length,
        t = g ? N.intl.string(N.t["DkY+cO"]) : N.intl.string(N.t.HeF1kV);
      return [{
        name: N.intl.string(N.t.EErMzA),
        value: O.WX.STAGE_INSTANCE,
        desc: e ? t : N.intl.string(N.t.LgALpp),
        leadingIcon: o.ewx,
        disabled: e
      }, ...n]
    }
    return n
  }, [c, u, g, j, x.length, m.length]);
  return (0, l.jsx)(o.FXm, {
    value: n.entityType,
    options: C,
    onChange: y,
    disabled: b,
    helperText: b ? N.intl.string(N.t.yutP5U) : true
  })
}

function T(e) {
  let {
    guildId: t,
    guildEvent: r,
    validationErrorMessage: i,
    onChange: a,
    isSlideReady: c = false
  } = e, {
    entityType: u
  } = r, x = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]), m = (0, p.q)(x), h = (0, s.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_CHANNELS, x)), v = null == x ? true : x.features.has(E.GuildFeatures.COMMUNITY), f = S(a, r), j = v && u !== O.WX.EXTERNAL && 0 === m.length && h && null != u;
  return (0, l.jsxs)("div", {
    className: C.container,
    children: [(0, l.jsxs)(o.Kqy, {
      gap: 4,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        children: N.intl.string(N.t["DC+Qm8"])
      }), (0, l.jsx)(o.Text, {
        color: "text-subtle",
        variant: "text-sm/normal",
        children: N.intl.string(N.t.IwmXLP)
      })]
    }), (0, l.jsx)(Z, {
      guildId: t,
      guildEvent: r,
      onChange: a
    }), (0, l.jsx)(I, {
      guildId: t,
      guildEvent: r,
      isFocusReady: c,
      onChange: a
    }), j ? (0, l.jsx)(y.Z, {
      onClick: () => {
        f(O.WX.STAGE_INSTANCE), (0, o.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("33285"), n.e("38697"), n.e("29497"), n.e("71099")]).then(n.bind(n, 241865));
          return n => {
            var r, i;
            return (0, l.jsx)(e, (r = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                  var l;
                  l = n[t], t in e ? Object.defineProperty(e, t, {
                    value: l,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = l
                })
              }
              return e
            }({}, n), i = i = {
              channelType: E.d4z.GUILD_STAGE_VOICE,
              guildId: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            }), r))
          }
        })
      }
    }) : null]
  })
}