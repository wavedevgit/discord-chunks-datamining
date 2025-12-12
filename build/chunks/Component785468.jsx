/** Chunk was on 61 **/
/** chunk id: 785468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
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
  Chunk138324 = require("./138324.js");
let S = e => {
    let {
      guildId: t,
      channelType: n,
      channel: r,
      onSelectChannel: i,
      disabled: a,
      entityType: s
    } = e, g = n === N.d4z.GUILD_STAGE_VOICE, x = (0, b.Q)(r, s), v = (0, p.sR)(t, n);
    return (0, l.jsx)(o.d, {
      label: g ? C.intl.string(C.t.S7GjDz) : C.intl.string(C.t["7RYWCP"]),
      required: true,
      helperText: x ? true : C.intl.string(C.t.F3bDaX),
      value: null == r ? true : r.id,
      options: v.map(e => ({
        value: e.id,
        label: (0, u.F6)(e, h.default, m.Z, true)
      })),
      onChange: e => {
        let t = v.find(t => t.id === e);
        i(null != t ? t : true)
      },
      renderOptionPrefix: e => ((e, t) => {
        let n = d.Z.getChannel(e);
        if (null == n) return null;
        let r = n.type === N.d4z.GUILD_STAGE_VOICE,
          i = (0, b.Q)(n, t),
          a = i ? c.gj8 : c.gjC,
          s = i ? c.ewx : c.pki;
        return (0, l.jsx)(r ? s : a, {
          color: "currentColor",
          size: "md",
          className: P.channelOptionIcon
        })
      })(null == e ? true : e.value, s),
      isDisabled: a
    })
  },
  I = (e, t) => n => {
    let l = {
      entityType: n,
      scheduledEndTime: true
    };
    if (n === E.WX.EXTERNAL) {
      var r;
      l.scheduledEndTime = (null != (r = a()(t.scheduledStartTime)) ? r : a()()).add(2, "hour").toISOString()
    }
    e(l)
  };

function Z(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i,
    isFocusReady: a
  } = e, {
    entityType: o,
    channelId: u
  } = n, g = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]), x = r.useRef(null);
  r.useEffect(() => {
    if (a && o === E.WX.EXTERNAL) {
      var e;
      null == (e = x.current) || e.focus()
    }
  }, [a, o]);
  let m = e => {
      var t;
      i({
        channelId: null != (t = null == e ? true : e.id) ? t : null
      })
    },
    h = (0, y.xV)(n),
    f = (0, y.xC)(o),
    p = (0, v.xt)(n);
  return null == o || o === E.WX.NONE ? null : o === E.WX.EXTERNAL ? (0, l.jsx)(c.oil, {
    label: C.intl.string(C.t.yx785A),
    required: true,
    onChange: e => {
      i({
        entityMetadata: {
          location: e
        }
      })
    },
    placeholder: C.intl.string(C.t.mkCMia),
    maxLength: E.gG,
    value: null != h ? h : "",
    inputRef: x
  }) : null == f ? null : (0, l.jsx)(S, {
    guildId: t,
    channelType: f,
    onSelectChannel: m,
    channel: g,
    entityType: o,
    disabled: p
  })
}

function T(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, a = (0, s.e7)([g.Z], () => g.Z.getGuild(t), [t]), o = (0, f.Z)(t, true), u = (0, f.Z)(t, N.d4z.GUILD_VOICE), d = (0, f.Z)(t, N.d4z.GUILD_STAGE_VOICE), x = (0, p.sR)(t, N.d4z.GUILD_VOICE), m = (0, j.q)(a), h = null == a ? true : a.features.has(N.GuildFeatures.COMMUNITY), b = (0, v.xt)(n), y = I(i, n), O = r.useMemo(() => {
    let e = !u || 0 === x.length,
      t = u ? C.intl.string(C.t["DkY+cO"]) : C.intl.string(C.t.HeF1kV),
      n = [{
        name: C.intl.string(C.t.BVZqJl),
        value: E.WX.VOICE,
        desc: e ? t : C.intl.string(C.t["EV//4f"]),
        leadingIcon: c.gj8,
        disabled: e
      }, {
        name: C.intl.string(C.t.w7ipbz),
        value: E.WX.EXTERNAL,
        desc: o ? C.intl.string(C.t.DYxrHm) : C.intl.string(C.t.HeF1kV),
        leadingIcon: c._tJ,
        disabled: !o
      }];
    if (h) {
      let e = !d || 0 === m.length,
        t = d ? C.intl.string(C.t["DkY+cO"]) : C.intl.string(C.t.HeF1kV);
      return [{
        name: C.intl.string(C.t.EErMzA),
        value: E.WX.STAGE_INSTANCE,
        desc: e ? t : C.intl.string(C.t.LgALpp),
        leadingIcon: c.ewx,
        disabled: e
      }, ...n]
    }
    return n
  }, [o, u, d, h, x.length, m.length]);
  return (0, l.jsx)(c.FXm, {
    value: n.entityType,
    options: O,
    onChange: y,
    disabled: b,
    helperText: b ? C.intl.string(C.t.yutP5U) : true
  })
}

function w(e) {
  let {
    guildId: t,
    guildEvent: r,
    validationErrorMessage: i,
    onChange: a,
    isSlideReady: o = false
  } = e, {
    entityType: u
  } = r, d = (0, s.e7)([g.Z], () => g.Z.getGuild(t), [t]), m = (0, j.q)(d), h = (0, s.e7)([x.Z], () => x.Z.can(N.Plq.MANAGE_CHANNELS, d)), v = null == d ? true : d.features.has(N.GuildFeatures.COMMUNITY), f = I(a, r), p = v && u !== E.WX.EXTERNAL && 0 === m.length && h && null != u;
  return (0, l.jsxs)("div", {
    className: P.container,
    children: [(0, l.jsxs)(c.Kqy, {
      gap: 4,
      children: [(0, l.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        children: C.intl.string(C.t["DC+Qm8"])
      }), (0, l.jsx)(c.Text, {
        color: "text-subtle",
        variant: "text-sm/normal",
        children: C.intl.string(C.t.IwmXLP)
      })]
    }), (0, l.jsx)(T, {
      guildId: t,
      guildEvent: r,
      onChange: a
    }), (0, l.jsx)(Z, {
      guildId: t,
      guildEvent: r,
      isFocusReady: o,
      onChange: a
    }), p ? (0, l.jsx)(O.Z, {
      onClick: () => {
        f(E.WX.STAGE_INSTANCE), (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("33285"), n.e("29497"), n.e("60565")]).then(n.bind(n, 241865));
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
              channelType: N.d4z.GUILD_STAGE_VOICE,
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