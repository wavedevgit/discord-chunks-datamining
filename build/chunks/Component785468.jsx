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
let S = e => {
  let {
    guildId: t,
    channelType: n,
    channel: l,
    onSelectChannel: i,
    disabled: a,
    entityType: s
  } = e, d = n === O.d4z.GUILD_STAGE_VOICE, x = (0, j.Q)(l, s), v = (0, f.sR)(t, n);
  return (0, r.jsxs)(o.xJW, {
    title: d ? N.intl.string(N.t.S7GjDw) : N.intl.string(N.t["7RYWCA"]),
    className: C.options,
    disabled: a,
    required: true,
    children: [(0, r.jsx)(o.VcW, {
      value: null == l ? true : l.id,
      options: v.map(e => ({
        value: e.id,
        label: (0, c.F6)(e, g.default, m.Z, true)
      })),
      onChange: e => {
        let t = v.find(t => t.id === e);
        i(null != t ? t : true)
      },
      renderOptionPrefix: e => ((e, t) => {
        let n = u.Z.getChannel(e);
        if (null == n) return null;
        let l = n.type === O.d4z.GUILD_STAGE_VOICE,
          i = (0, j.Q)(n, t),
          a = i ? o.gj8 : o.gjC,
          s = i ? o.ewx : o.pki;
        return (0, r.jsx)(l ? s : a, {
          color: "currentColor",
          size: "md",
          className: C.channelOptionIcon
        })
      })(null == e ? true : e.value, s),
      isDisabled: a
    }), !x && (0, r.jsx)(o.Text, {
      color: "header-secondary",
      className: C.channelPrivate,
      variant: "text-sm/normal",
      children: N.intl.string(N.t.F3bDaW)
    })]
  })
};

function I(e, t, n, r) {
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

function P(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i,
    isFocusReady: a
  } = e, {
    entityType: c,
    channelId: d
  } = n, x = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]), m = l.useRef(null);
  l.useEffect(() => {
    if (a && c === E.WX.EXTERNAL) {
      var e;
      null == (e = m.current) || e.focus()
    }
  }, [a, c]);
  let g = e => {
      var t;
      i({
        channelId: null != (t = null == e ? true : e.id) ? t : null
      })
    },
    h = (0, y.xV)(n),
    f = (0, y.xC)(c),
    p = (0, v.xt)(n);
  return null == c || c === E.WX.NONE ? null : c === E.WX.EXTERNAL ? (0, r.jsx)(o.xJW, {
    title: N.intl.string(N.t.yx785O),
    className: C.options,
    required: true,
    children: (0, r.jsx)(o.oil, {
      onChange: e => {
        i({
          entityMetadata: {
            location: e
          }
        })
      },
      placeholder: N.intl.string(N.t.mkCMiY),
      maxLength: E.gG,
      value: null != h ? h : "",
      inputRef: m
    })
  }) : null == f ? null : (0, r.jsx)(S, {
    guildId: t,
    channelType: f,
    onSelectChannel: g,
    channel: x,
    entityType: c,
    disabled: p
  })
}

function w(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, a = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]), c = (0, h.Z)(t, true), u = (0, h.Z)(t, O.d4z.GUILD_VOICE), x = (0, h.Z)(t, O.d4z.GUILD_STAGE_VOICE), m = (0, f.sR)(t, O.d4z.GUILD_VOICE), g = (0, p.q)(a), j = null == a ? true : a.features.has(O.oNc.COMMUNITY), y = (0, v.xt)(n), b = Z(i, n), S = l.useMemo(() => {
    let e = [T({
      name: N.intl.string(N.t.BVZqJi),
      value: E.WX.VOICE,
      desc: N.intl.string(N.t["EV//4e"]),
      icon: o.gj8
    }, I(E.WX.VOICE, y, u, m.length)), T({
      name: N.intl.string(N.t.w7ipb2),
      value: E.WX.EXTERNAL,
      desc: N.intl.string(N.t.DYxrHh),
      icon: o._tJ
    }, I(E.WX.EXTERNAL, y, c, 0))];
    return j ? [T({
      name: N.intl.string(N.t.EErMzM),
      value: E.WX.STAGE_INSTANCE,
      desc: N.intl.string(N.t.LgALpq),
      icon: o.ewx
    }, I(E.WX.STAGE_INSTANCE, y, x, g.length)), ...e] : e
  }, [c, u, x, j, m.length, g.length, y]);
  return (0, r.jsx)(o.FXm, {
    value: n.entityType,
    options: S,
    onChange: b,
    className: C.options
  })
}

function D(e) {
  let {
    guildId: t,
    guildEvent: l,
    validationErrorMessage: i,
    onChange: a,
    isSlideReady: c = false
  } = e, {
    entityType: u
  } = l, m = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]), g = (0, p.q)(m), v = (0, s.e7)([x.Z], () => x.Z.can(O.Plq.MANAGE_CHANNELS, m)), h = null == m ? true : m.features.has(O.oNc.COMMUNITY), f = Z(a, l), j = h && u !== E.WX.EXTERNAL && 0 === g.length && v && null != u;
  return (0, r.jsxs)("div", {
    className: C.container,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-xl/semibold",
      className: C.header,
      children: N.intl.string(N.t["DC+Qm5"])
    }), (0, r.jsx)(o.Text, {
      color: "header-secondary",
      className: C.text,
      variant: "text-sm/normal",
      children: N.intl.string(N.t.IwmXLC)
    }), (0, r.jsx)(w, {
      guildId: t,
      guildEvent: l,
      onChange: a
    }), (0, r.jsx)(P, {
      guildId: t,
      guildEvent: l,
      isFocusReady: c,
      onChange: a
    }), j ? (0, r.jsx)(b.Z, {
      onClick: () => {
        f({
          value: E.WX.STAGE_INSTANCE,
          name: N.intl.string(N.t.EErMzM)
        }), (0, o.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("7590"), n.e("96812"), n.e("45094"), n.e("46014")]).then(n.bind(n, 218613));
          return n => {
            var l, i;
            return (0, r.jsx)(e, (l = T({}, n), i = i = {
              channelType: O.d4z.GUILD_STAGE_VOICE,
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