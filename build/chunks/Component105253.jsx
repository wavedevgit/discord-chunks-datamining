/** Chunk was on 342 **/
/** chunk id: 105253, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk841937 = require("./841937.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk698441 = require("./698441.js"),
  Chunk770666 = require("./770666.js"),
  Chunk761836 = require("./761836.js"),
  Chunk232246 = require("./232246.js"),
  Chunk530209 = require("./530209.js"),
  Chunk9448 = require("./9448.js"),
  Chunk181961 = require("./181961.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk197905 = require("./197905.js");
let C = e => {
    let {
      guildId: t,
      channelType: n,
      channel: r,
      onSelectChannel: i,
      disabled: s,
      entityType: a
    } = e, u = n === E.rbe.GUILD_STAGE_VOICE, x = (0, b.D)(r, a), g = (0, f.pW)(t, n);
    return (0, l.jsx)(o.ZiE, {
      selectionMode: "single",
      label: u ? N.intl.string(N.t.S7GjDz) : N.intl.string(N.t["7RYWCP"]),
      required: true,
      helperText: x ? true : N.intl.string(N.t.F3bDaX),
      value: null == r ? true : r.id,
      options: g.map(e => ({
        id: e.id,
        value: e.id,
        label: (0, c.m1)(e, h.default, m.A, true),
        leading: ((e, t) => {
          let n = d.A.getChannel(e);
          if (null == n) return null;
          let r = n.type === E.rbe.GUILD_STAGE_VOICE,
            i = (0, b.D)(n, t),
            s = i ? o.HKD : o.trU,
            a = i ? o.qux : o.DC;
          return (0, l.jsx)(r ? a : s, {
            color: "currentColor",
            size: "md",
            className: P.sr
          })
        })(e.id, a)
      })),
      onSelectionChange: e => {
        let t = g.find(t => t.id === e);
        i(null != t ? t : true)
      },
      disabled: s
    })
  },
  S = (e, t) => n => {
    let l = {
      entityType: n,
      scheduledEndTime: true
    };
    if (n === A.Ps.EXTERNAL) {
      var r;
      l.scheduledEndTime = (null != (r = s()(t.scheduledStartTime)) ? r : s()()).add(2, "hour").toISOString()
    }
    e(l)
  };

function T(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i,
    isFocusReady: s
  } = e, {
    entityType: c,
    channelId: u
  } = n, x = (0, a.bG)([d.A], () => d.A.getChannel(u), [u]), g = r.useRef(null);
  r.useEffect(() => {
    if (s && c === A.Ps.EXTERNAL) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [s, c]);
  let m = e => {
      var t;
      i({
        channelId: null != (t = null == e ? true : e.id) ? t : null
      })
    },
    h = (0, y.k5)(n),
    v = (0, y.dy)(c),
    f = (0, j.Fd)(n);
  return null == c || c === A.Ps.NONE ? null : c === A.Ps.EXTERNAL ? (0, l.jsx)(o.ksK, {
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
    maxLength: A.vj,
    value: null != h ? h : "",
    inputRef: g
  }) : null == v ? null : (0, l.jsx)(C, {
    guildId: t,
    channelType: v,
    onSelectChannel: m,
    channel: x,
    entityType: c,
    disabled: f
  })
}

function w(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: i
  } = e, s = (0, a.bG)([x.A], () => x.A.getGuild(t), [t]), c = (0, v.A)(t, true), u = (0, v.A)(t, E.rbe.GUILD_VOICE), d = (0, v.A)(t, E.rbe.GUILD_STAGE_VOICE), g = (0, f.pW)(t, E.rbe.GUILD_VOICE), m = (0, p.A)(s), h = null == s ? true : s.features.has(E.GuildFeatures.COMMUNITY), b = (0, j.Fd)(n), y = S(i, n), O = r.useMemo(() => {
    let e = !u || 0 === g.length,
      t = u ? N.intl.string(N.t["DkY+cO"]) : N.intl.string(N.t.HeF1kV),
      n = [{
        name: N.intl.string(N.t.BVZqJl),
        value: A.Ps.VOICE,
        desc: e ? t : N.intl.string(N.t["EV//4f"]),
        leadingIcon: o.HKD,
        disabled: e
      }, {
        name: N.intl.string(N.t.w7ipbz),
        value: A.Ps.EXTERNAL,
        desc: c ? N.intl.string(N.t.DYxrHm) : N.intl.string(N.t.HeF1kV),
        leadingIcon: o.BT6,
        disabled: !c
      }];
    if (h) {
      let e = !d || 0 === m.length,
        t = d ? N.intl.string(N.t["DkY+cO"]) : N.intl.string(N.t.HeF1kV);
      return [{
        name: N.intl.string(N.t.EErMzA),
        value: A.Ps.STAGE_INSTANCE,
        desc: e ? t : N.intl.string(N.t.LgALpp),
        leadingIcon: o.qux,
        disabled: e
      }, ...n]
    }
    return n
  }, [c, u, d, h, g.length, m.length]);
  return (0, l.jsx)(o.z6M, {
    value: n.entityType,
    options: O,
    onChange: y,
    disabled: b,
    helperText: b ? N.intl.string(N.t.yutP5U) : true
  })
}

function I(e) {
  let {
    guildId: t,
    guildEvent: r,
    validationErrorMessage: i,
    onChange: s,
    isSlideReady: c = false
  } = e, {
    entityType: d
  } = r, m = (0, a.bG)([x.A], () => x.A.getGuild(t), [t]), h = (0, p.A)(m), j = (0, a.bG)([g.A], () => g.A.can(E.xBc.MANAGE_CHANNELS, m)), v = null == m ? true : m.features.has(E.GuildFeatures.COMMUNITY), f = S(s, r), b = v && d !== A.Ps.EXTERNAL && 0 === h.length && j && null != d;
  return (0, l.jsxs)("div", {
    className: P.kL,
    children: [(0, l.jsxs)(o.BJc, {
      gap: 4,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        children: N.intl.string(N.t["DC+Qm8"])
      }), (0, l.jsx)(o.Text, {
        color: "text-subtle",
        variant: "text-sm/normal",
        children: N.intl.string(N.t.IwmXLP)
      })]
    }), (0, l.jsx)(w, {
      guildId: t,
      guildEvent: r,
      onChange: s
    }), (0, l.jsx)(T, {
      guildId: t,
      guildEvent: r,
      isFocusReady: c,
      onChange: s
    }), b ? (0, l.jsx)(O.A, {
      onClick: () => {
        f(A.Ps.STAGE_INSTANCE), (0, o.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("72271"), n.e("8018"), n.e("64233"), n.e("29592")]).then(n.bind(n, 409200));
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
              channelType: E.rbe.GUILD_STAGE_VOICE,
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
    }) : null, A.Tn.has(r.entityType) && (0, l.jsx)(u.A, {})]
  })
}