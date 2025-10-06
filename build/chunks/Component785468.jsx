/** Chunk was on 61 **/
/** chunk id: 785468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function S(e) {
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
let I = e => {
  let {
    guildId: t,
    channelType: n,
    channel: l,
    onSelectChannel: i,
    disabled: a,
    entityType: s
  } = e, o = n === N.d4z.GUILD_STAGE_VOICE, m = (0, b.Q)(l, s), x = (0, j.sR)(t, n);
  return (0, r.jsx)(c.VcW, {
    label: o ? C.intl.string(C.t.S7GjDw) : C.intl.string(C.t["7RYWCA"]),
    required: true,
    helperText: m ? true : C.intl.string(C.t.F3bDaW),
    value: null == l ? true : l.id,
    options: x.map(e => ({
      value: e.id,
      label: (0, u.F6)(e, h.default, g.Z, true)
    })),
    onChange: e => {
      let t = x.find(t => t.id === e);
      i(null != t ? t : true)
    },
    renderOptionPrefix: e => ((e, t) => {
      let n = d.Z.getChannel(e);
      if (null == n) return null;
      let l = n.type === N.d4z.GUILD_STAGE_VOICE,
        i = (0, b.Q)(n, t),
        a = i ? c.gj8 : c.gjC,
        s = i ? c.ewx : c.pki;
      return (0, r.jsx)(l ? s : a, {
        color: "currentColor",
        size: "md",
        className: P.channelOptionIcon
      })
    })(null == e ? true : e.value, s),
    isDisabled: a
  })
};

function T(e, t, n, r) {
  return t ? {
    disabled: true,
    tooltipText: C.intl.string(C.t.yutP5e)
  } : n ? 0 === r && e !== E.WX.EXTERNAL ? {
    disabled: true,
    tooltipText: C.intl.string(C.t["DkY+cH"])
  } : {
    disabled: false,
    tooltipText: null
  } : {
    disabled: true,
    tooltipText: C.intl.string(C.t.HeF1kZ)
  }
}
let Z = (e, t) => n => {
  let {
    value: r
  } = n, l = {
    entityType: r,
    scheduledEndTime: true
  };
  if (r === E.WX.EXTERNAL) {
    var i;
    l.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, "hour").toISOString()
  }
  e(l)
};

function w(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i,
    isFocusReady: a
  } = e, {
    entityType: o,
    channelId: u
  } = n, m = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]), x = l.useRef(null);
  l.useEffect(() => {
    if (a && o === E.WX.EXTERNAL) {
      var e;
      null == (e = x.current) || e.focus()
    }
  }, [a, o]);
  let g = e => {
      var t;
      i({
        channelId: null != (t = null == e ? true : e.id) ? t : null
      })
    },
    h = (0, y.xV)(n),
    p = (0, y.xC)(o),
    j = (0, v.xt)(n);
  return null == o || o === E.WX.NONE ? null : o === E.WX.EXTERNAL ? (0, r.jsx)(c.oil, {
    label: C.intl.string(C.t.yx785O),
    required: true,
    onChange: e => {
      i({
        entityMetadata: {
          location: e
        }
      })
    },
    placeholder: C.intl.string(C.t.mkCMiY),
    maxLength: E.gG,
    value: null != h ? h : "",
    inputRef: x
  }) : null == p ? null : (0, r.jsx)(I, {
    guildId: t,
    channelType: p,
    onSelectChannel: g,
    channel: m,
    entityType: o,
    disabled: j
  })
}

function k(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, a = (0, s.e7)([m.Z], () => m.Z.getGuild(t), [t]), u = (0, p.Z)(t, true), d = (0, p.Z)(t, N.d4z.GUILD_VOICE), x = (0, p.Z)(t, N.d4z.GUILD_STAGE_VOICE), g = (0, j.sR)(t, N.d4z.GUILD_VOICE), h = (0, f.q)(a), b = null == a ? true : a.features.has(N.oNc.COMMUNITY), y = (0, v.xt)(n), O = Z(i, n), P = l.useMemo(() => {
    let e = [S({
      name: C.intl.string(C.t.BVZqJi),
      value: E.WX.VOICE,
      desc: C.intl.string(C.t["EV//4e"]),
      icon: c.gj8
    }, T(E.WX.VOICE, y, d, g.length)), S({
      name: C.intl.string(C.t.w7ipb2),
      value: E.WX.EXTERNAL,
      desc: C.intl.string(C.t.DYxrHh),
      icon: c._tJ
    }, T(E.WX.EXTERNAL, y, u, 0))];
    return b ? [S({
      name: C.intl.string(C.t.EErMzM),
      value: E.WX.STAGE_INSTANCE,
      desc: C.intl.string(C.t.LgALpq),
      icon: c.ewx
    }, T(E.WX.STAGE_INSTANCE, y, x, h.length)), ...e] : e
  }, [u, d, x, b, g.length, h.length, y]);
  return (0, r.jsx)(o.Gu, {
    value: n.entityType,
    options: P,
    onChange: O
  })
}

function D(e) {
  let {
    guildId: t,
    guildEvent: l,
    validationErrorMessage: i,
    onChange: a,
    isSlideReady: o = false
  } = e, {
    entityType: u
  } = l, d = (0, s.e7)([m.Z], () => m.Z.getGuild(t), [t]), g = (0, f.q)(d), h = (0, s.e7)([x.Z], () => x.Z.can(N.Plq.MANAGE_CHANNELS, d)), v = null == d ? true : d.features.has(N.oNc.COMMUNITY), p = Z(a, l), j = v && u !== E.WX.EXTERNAL && 0 === g.length && h && null != u;
  return (0, r.jsxs)("div", {
    className: P.container,
    children: [(0, r.jsxs)(c.Kqy, {
      gap: 4,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        children: C.intl.string(C.t["DC+Qm5"])
      }), (0, r.jsx)(c.Text, {
        color: "text-secondary",
        variant: "text-sm/normal",
        children: C.intl.string(C.t.IwmXLC)
      })]
    }), (0, r.jsx)(k, {
      guildId: t,
      guildEvent: l,
      onChange: a
    }), (0, r.jsx)(w, {
      guildId: t,
      guildEvent: l,
      isFocusReady: o,
      onChange: a
    }), j ? (0, r.jsx)(O.Z, {
      onClick: () => {
        p({
          value: E.WX.STAGE_INSTANCE,
          name: C.intl.string(C.t.EErMzM)
        }), (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("33285"), n.e("38697"), n.e("45094"), n.e("12334")]).then(n.bind(n, 218613));
          return n => {
            var l, i;
            return (0, r.jsx)(e, (l = S({}, n), i = i = {
              channelType: N.d4z.GUILD_STAGE_VOICE,
              guildId: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
            }), l))
          }
        })
      }
    }) : null]
  })
}