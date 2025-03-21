/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => y
}), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(692547),
  o = n(481060),
  A = n(239091),
  c = n(111028),
  d = n(977258),
  u = n(637853),
  g = n(473403),
  f = n(216306),
  m = n(743475),
  p = n(827907),
  h = n(868814),
  C = n(981631),
  b = n(388032),
  v = n(951193);

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    guild: t,
    channel: i
  } = e, s = (0, p.Mf)(i.id);
  return "null" === i.id ? (0, r.jsx)("div", {
    className: a()(v.categoryRow, v.uncategorized),
    children: (0, r.jsx)(o.Text, {
      className: v.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    })
  }) : (0, r.jsxs)(o.P3F, {
    className: a()(v.categoryRow, {
      [v.uncategorized]: "null" === i.id
    }),
    onContextMenu: e => {
      (0, A.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("58059"), n.e("38902"), n.e("8965"), n.e("98350")]).then(n.bind(n, 139035));
        return n => (0, r.jsx)(e, N(x({}, n), {
          channel: i,
          guild: t
        }))
      })
    },
    onClick: e => (e.stopPropagation(), (0, d.s)(t.id, i.id) ? (0, m.pt)(i.id) : (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("35641").then(n.bind(n, 89216));
      return n => (0, r.jsx)(e, N(x({}, n), {
        guildId: t.id,
        startingChannelId: i.id
      }))
    }), !0),
    children: [(0, r.jsx)(o.Text, {
      className: v.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    }), (0, r.jsx)(o.XZJ, {
      "aria-checked": s,
      value: s,
      type: o.XZJ.Types.INVERTED,
      className: v.checkbox,
      displayOnly: !0
    })]
  })
}
let E = i.memo(function() {
    return (0, r.jsx)("div", {
      className: v.separator
    })
  }),
  I = i.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: v.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  O = i.memo(function(e) {
    let {
      channel: t,
      category: i,
      guild: s,
      isFirstChannel: f,
      isLastChannel: j,
      tooltipDirection: O = "right"
    } = e, y = (0, p.Mf)(t.id, i.id), w = (0, p.t4)(t.id, i.id), P = (0, p.EH)(t.id, i.id), B = (0, p.lL)(s.id, i.id), D = null != (0, h.Z)(s).find(e => e.id === t.id), T = (0, u.mn)(t.id), S = e => {
      if (!w) return e.stopPropagation(), (0, d.s)(s.id, t.id) ? (0, m.pt)(t.id) : (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("35641").then(n.bind(n, 89216));
        return n => (0, r.jsx)(e, N(x({}, n), {
          guildId: s.id,
          startingChannelId: t.id
        }))
      }), !0
    }, L = e => {
      t.isGuildVocal() ? (0, A.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("58059"), n.e("38902"), n.e("42743"), n.e("17024"), n.e("18320"), n.e("83331"), n.e("5038")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, N(x({}, n), {
          channel: t,
          guild: s
        }))
      }) : (0, A.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("50506"), n.e("68880"), n.e("99152"), n.e("79695"), n.e("22878"), n.e("13351"), n.e("74891"), n.e("6380"), n.e("46097"), n.e("8739"), n.e("18543"), n.e("58059"), n.e("28467"), n.e("86282"), n.e("18895"), n.e("30243"), n.e("37447"), n.e("53937"), n.e("85574"), n.e("98977"), n.e("8473"), n.e("2171"), n.e("60691"), n.e("64838"), n.e("14721"), n.e("38902"), n.e("42743"), n.e("19948"), n.e("7590"), n.e("78447"), n.e("98254"), n.e("22356"), n.e("35755"), n.e("94458"), n.e("12416"), n.e("94989"), n.e("37220"), n.e("17024"), n.e("82158"), n.e("91315"), n.e("78114"), n.e("18320"), n.e("397"), n.e("45260"), n.e("46371")]).then(n.bind(n, 373651));
        return n => (0, r.jsx)(e, N(x({}, n), {
          channel: t,
          guild: s
        }))
      })
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.ua7, {
        text: null != P ? P : B,
        delay: 500,
        position: O,
        children: e => (0, r.jsxs)(o.P3F, N(x({
          className: a()(v.channelRow, {
            [v.firstChannel]: f,
            [v.lastChannel]: j,
            [v.disabled]: w
          })
        }, e), {
          onClick: S,
          onContextMenu: L,
          children: [(0, r.jsx)("div", {
            className: v.channelInfo,
            children: (0, r.jsxs)("div", {
              className: v.channelName,
              children: [(0, r.jsx)(g._W, {
                channel: t,
                guild: s
              }), (0, r.jsx)(c.Z, {
                className: v.__invalid_name,
                children: (0, r.jsx)(o.Text, {
                  className: v.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: w ? "text-muted" : "text-normal",
                  children: t.name
                })
              }), D ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(I, {
                  index: 0
                }), (0, r.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  className: v.channelSubtitle,
                  color: "text-brand",
                  children: b.NW.string(b.t.mPxmeH)
                })]
              }) : null]
            })
          }), (0, r.jsx)("div", {
            className: v.channelActions,
            children: (0, d.s)(t.guild_id, t.id) ? (0, r.jsx)(o.XZJ, {
              "aria-checked": y,
              value: y,
              type: o.XZJ.Types.INVERTED,
              disabled: w,
              color: T ? l.Z.colors.BG_BRAND.css : l.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
              innerClassName: v.checkboxInner,
              displayOnly: !0
            }) : (0, r.jsxs)(o.zxk, {
              look: o.zxk.Looks.OUTLINED,
              color: o.zxk.Colors.PRIMARY,
              className: v.lockedPill,
              innerClassName: v.lockedPillInner,
              onClick: C.dG4,
              children: [(0, r.jsx)(o.mBM, {
                size: "xs",
                color: "currentColor"
              }), (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: b.NW.string(b.t.zA9d1N)
              })]
            })
          })]
        }))
      }), !j && (0, r.jsx)(E, {})]
    })
  });

function y(e) {
  let {
    categories: t,
    guild: n,
    className: s,
    hasSidebar: a
  } = e, l = i.useCallback(e => {
    let i = t._categories[e];
    return (0, r.jsx)(j, {
      channel: i.channel,
      guild: n
    }, i.channel.id)
  }, [t, n]), o = i.useCallback((e, i) => {
    let s = t._categories[e],
      l = t[s.channel.id][i];
    return null == l ? null : (0, r.jsx)(O, {
      category: s.channel,
      channel: l.channel,
      guild: n,
      isFirstChannel: 0 === i,
      isLastChannel: t[s.channel.id].length - 1 === i,
      tooltipDirection: a ? "right" : "top"
    }, l.channel.id)
  }, [t, n, a]), A = (0, f.tn)(n.id, t, 64);
  return (0, r.jsx)("div", {
    className: s,
    children: A.map((e, t) => {
      let n = l(t),
        i = [],
        s = e.rowCount;
      if (0 === s) return null;
      for (let e = 0; e < s; e++) i.push(o(t, e));
      return (0, r.jsxs)(r.Fragment, {
        children: [n, i]
      })
    })
  })
}