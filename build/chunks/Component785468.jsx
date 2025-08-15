/** Chunk was on 61 **/
/** chunk id: 785468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = e, o = n === N.d4z.GUILD_STAGE_VOICE, x = (0, y.Q)(l, s), m = (0, p.sR)(t, n);
  return (0, r.jsxs)(c.xJW, {
    title: o ? C.intl.string(C.t.S7GjDw) : C.intl.string(C.t["7RYWCA"]),
    className: T.options,
    disabled: a,
    required: true,
    children: [(0, r.jsx)(c.VcW, {
      value: null == l ? true : l.id,
      options: m.map(e => ({
        value: e.id,
        label: (0, u.F6)(e, v.default, g.Z, true)
      })),
      onChange: e => {
        let t = m.find(t => t.id === e);
        i(null != t ? t : true)
      },
      renderOptionPrefix: e => ((e, t) => {
        let n = d.Z.getChannel(e);
        if (null == n) return null;
        let l = n.type === N.d4z.GUILD_STAGE_VOICE,
          i = (0, y.Q)(n, t),
          a = i ? c.gj8 : c.gjC,
          s = i ? c.ewx : c.pki;
        return (0, r.jsx)(l ? s : a, {
          color: "currentColor",
          size: "md",
          className: T.channelOptionIcon
        })
      })(null == e ? true : e.value, s),
      isDisabled: a
    }), !x && (0, r.jsx)(c.Text, {
      color: "header-secondary",
      className: T.channelPrivate,
      variant: "text-sm/normal",
      children: C.intl.string(C.t.F3bDaW)
    })]
  })
};

function Z(e, t, n, r) {
  return t ? {
    disabled: true,
    tooltipText: C.intl.string(C.t.yutP5e)
  } : n ? 0 === r && e !== O.WX.EXTERNAL ? {
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
let P = (e, t) => n => {
  let {
    value: r
  } = n, l = {
    entityType: r,
    scheduledEndTime: true
  };
  if (r === O.WX.EXTERNAL) {
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
    entityType: u,
    channelId: x
  } = n, m = (0, s.e7)([d.Z], () => d.Z.getChannel(x), [x]), g = l.useRef(null);
  l.useEffect(() => {
    if (a && u === O.WX.EXTERNAL) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [a, u]);
  let v = e => {
      var t;
      i({
        channelId: null != (t = null == e ? true : e.id) ? t : null
      })
    },
    f = (0, b.xV)(n),
    p = (0, b.xC)(u),
    j = (0, h.xt)(n);
  return null == u || u === O.WX.NONE ? null : u === O.WX.EXTERNAL ? (0, r.jsx)(c.xJW, {
    title: C.intl.string(C.t.yx785O),
    className: T.options,
    required: true,
    children: (0, r.jsx)(o.Is, {
      className: T.__invalid_textInput,
      onChange: e => {
        i({
          entityMetadata: {
            location: e
          }
        })
      },
      placeholder: C.intl.string(C.t.mkCMiY),
      maxLength: O.gG,
      value: null != f ? f : "",
      inputRef: g
    })
  }) : null == p ? null : (0, r.jsx)(I, {
    guildId: t,
    channelType: p,
    onSelectChannel: v,
    channel: m,
    entityType: u,
    disabled: j
  })
}

function D(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, a = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]), o = (0, f.Z)(t, true), u = (0, f.Z)(t, N.d4z.GUILD_VOICE), d = (0, f.Z)(t, N.d4z.GUILD_STAGE_VOICE), m = (0, p.sR)(t, N.d4z.GUILD_VOICE), g = (0, j.q)(a), v = null == a ? true : a.features.has(N.oNc.COMMUNITY), y = (0, h.xt)(n), b = P(i, n), E = l.useMemo(() => {
    let e = [S({
      name: C.intl.string(C.t.BVZqJi),
      value: O.WX.VOICE,
      desc: C.intl.string(C.t["EV//4e"]),
      icon: c.gj8
    }, Z(O.WX.VOICE, y, u, m.length)), S({
      name: C.intl.string(C.t.w7ipb2),
      value: O.WX.EXTERNAL,
      desc: C.intl.string(C.t.DYxrHh),
      icon: c._tJ
    }, Z(O.WX.EXTERNAL, y, o, 0))];
    return v ? [S({
      name: C.intl.string(C.t.EErMzM),
      value: O.WX.STAGE_INSTANCE,
      desc: C.intl.string(C.t.LgALpq),
      icon: c.ewx
    }, Z(O.WX.STAGE_INSTANCE, y, d, g.length)), ...e] : e
  }, [o, u, d, v, m.length, g.length, y]);
  return (0, r.jsx)(c.FXm, {
    value: n.entityType,
    options: E,
    onChange: b,
    className: T.options
  })
}

function _(e) {
  let {
    guildId: t,
    guildEvent: l,
    validationErrorMessage: i,
    onChange: a,
    isSlideReady: o = false
  } = e, {
    entityType: u
  } = l, d = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]), g = (0, j.q)(d), v = (0, s.e7)([m.Z], () => m.Z.can(N.Plq.MANAGE_CHANNELS, d)), h = null == d ? true : d.features.has(N.oNc.COMMUNITY), f = P(a, l), p = h && u !== O.WX.EXTERNAL && 0 === g.length && v && null != u;
  return (0, r.jsxs)("div", {
    className: T.container,
    children: [(0, r.jsx)(c.X6q, {
      variant: "heading-xl/semibold",
      className: T.header,
      children: C.intl.string(C.t["DC+Qm5"])
    }), (0, r.jsx)(c.Text, {
      color: "header-secondary",
      className: T.text,
      variant: "text-sm/normal",
      children: C.intl.string(C.t.IwmXLC)
    }), (0, r.jsx)(D, {
      guildId: t,
      guildEvent: l,
      onChange: a
    }), (0, r.jsx)(w, {
      guildId: t,
      guildEvent: l,
      isFocusReady: o,
      onChange: a
    }), p ? (0, r.jsx)(E.Z, {
      onClick: () => {
        f({
          value: O.WX.STAGE_INSTANCE,
          name: C.intl.string(C.t.EErMzM)
        }), (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("7590"), n.e("96812"), n.e("45094"), n.e("46014")]).then(n.bind(n, 218613));
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