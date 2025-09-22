/** Chunk was on 61 **/
/** chunk id: 785468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
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
let T = e => {
  let {
    guildId: t,
    channelType: n,
    channel: l,
    onSelectChannel: i,
    disabled: a,
    entityType: s
  } = e, o = n === C.d4z.GUILD_STAGE_VOICE, x = (0, b.Q)(l, s), g = (0, p.sR)(t, n);
  return (0, r.jsx)(c.VcW, {
    label: o ? N.intl.string(N.t.S7GjDw) : N.intl.string(N.t["7RYWCA"]),
    required: true,
    helperText: x ? true : N.intl.string(N.t.F3bDaW),
    value: null == l ? true : l.id,
    options: g.map(e => ({
      value: e.id,
      label: (0, u.F6)(e, v.default, m.Z, true)
    })),
    onChange: e => {
      let t = g.find(t => t.id === e);
      i(null != t ? t : true)
    },
    renderOptionPrefix: e => ((e, t) => {
      let n = d.Z.getChannel(e);
      if (null == n) return null;
      let l = n.type === C.d4z.GUILD_STAGE_VOICE,
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

function Z(e, t, n, r) {
  return t ? {
    disabled: true,
    tooltipText: N.intl.string(N.t.yutP5e)
  } : n ? 0 === r && e !== E.WX.EXTERNAL ? {
    disabled: true,
    tooltipText: N.intl.string(N.t["DkY+cH"])
  } : {
    disabled: false,
    tooltipText: null
  } : {
    disabled: true,
    tooltipText: N.intl.string(N.t.HeF1kZ)
  }
}
let w = (e, t) => n => {
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

function I(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i,
    isFocusReady: a
  } = e, {
    entityType: o,
    channelId: u
  } = n, x = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]), g = l.useRef(null);
  l.useEffect(() => {
    if (a && o === E.WX.EXTERNAL) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [a, o]);
  let m = e => {
      var t;
      i({
        channelId: null != (t = null == e ? true : e.id) ? t : null
      })
    },
    v = (0, y.xV)(n),
    j = (0, y.xC)(o),
    p = (0, h.xt)(n);
  return null == o || o === E.WX.NONE ? null : o === E.WX.EXTERNAL ? (0, r.jsx)(c.oil, {
    label: N.intl.string(N.t.yx785O),
    required: true,
    onChange: e => {
      i({
        entityMetadata: {
          location: e
        }
      })
    },
    placeholder: N.intl.string(N.t.mkCMiY),
    maxLength: E.gG,
    value: null != v ? v : "",
    inputRef: g
  }) : null == j ? null : (0, r.jsx)(T, {
    guildId: t,
    channelType: j,
    onSelectChannel: m,
    channel: x,
    entityType: o,
    disabled: p
  })
}

function D(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, a = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]), u = (0, j.Z)(t, true), d = (0, j.Z)(t, C.d4z.GUILD_VOICE), g = (0, j.Z)(t, C.d4z.GUILD_STAGE_VOICE), m = (0, p.sR)(t, C.d4z.GUILD_VOICE), v = (0, f.q)(a), b = null == a ? true : a.features.has(C.oNc.COMMUNITY), y = (0, h.xt)(n), O = w(i, n), P = l.useMemo(() => {
    let e = [S({
      name: N.intl.string(N.t.BVZqJi),
      value: E.WX.VOICE,
      desc: N.intl.string(N.t["EV//4e"]),
      icon: c.gj8
    }, Z(E.WX.VOICE, y, d, m.length)), S({
      name: N.intl.string(N.t.w7ipb2),
      value: E.WX.EXTERNAL,
      desc: N.intl.string(N.t.DYxrHh),
      icon: c._tJ
    }, Z(E.WX.EXTERNAL, y, u, 0))];
    return b ? [S({
      name: N.intl.string(N.t.EErMzM),
      value: E.WX.STAGE_INSTANCE,
      desc: N.intl.string(N.t.LgALpq),
      icon: c.ewx
    }, Z(E.WX.STAGE_INSTANCE, y, g, v.length)), ...e] : e
  }, [u, d, g, b, m.length, v.length, y]);
  return (0, r.jsx)(o.Gu, {
    value: n.entityType,
    options: P,
    onChange: O
  })
}

function k(e) {
  let {
    guildId: t,
    guildEvent: l,
    validationErrorMessage: i,
    onChange: a,
    isSlideReady: o = false
  } = e, {
    entityType: u
  } = l, d = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]), m = (0, f.q)(d), v = (0, s.e7)([g.Z], () => g.Z.can(C.Plq.MANAGE_CHANNELS, d)), h = null == d ? true : d.features.has(C.oNc.COMMUNITY), j = w(a, l), p = h && u !== E.WX.EXTERNAL && 0 === m.length && v && null != u;
  return (0, r.jsxs)("div", {
    className: P.container,
    children: [(0, r.jsxs)(c.Kqy, {
      gap: 4,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        children: N.intl.string(N.t["DC+Qm5"])
      }), (0, r.jsx)(c.Text, {
        color: "text-secondary",
        variant: "text-sm/normal",
        children: N.intl.string(N.t.IwmXLC)
      })]
    }), (0, r.jsx)(D, {
      guildId: t,
      guildEvent: l,
      onChange: a
    }), (0, r.jsx)(I, {
      guildId: t,
      guildEvent: l,
      isFocusReady: o,
      onChange: a
    }), p ? (0, r.jsx)(O.Z, {
      onClick: () => {
        j({
          value: E.WX.STAGE_INSTANCE,
          name: N.intl.string(N.t.EErMzM)
        }), (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("33285"), n.e("38697"), n.e("45094"), n.e("12334")]).then(n.bind(n, 218613));
          return n => {
            var l, i;
            return (0, r.jsx)(e, (l = S({}, n), i = i = {
              channelType: C.d4z.GUILD_STAGE_VOICE,
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