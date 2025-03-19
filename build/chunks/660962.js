/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  ZP: () => M
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(392711),
  o = n.n(l),
  c = n(442837),
  A = n(780384),
  d = n(481060),
  u = n(605436),
  g = n(663993),
  f = n(540059),
  m = n(518738),
  p = n(786761),
  h = n(3148),
  C = n(753206),
  b = n(598077),
  v = n(496675),
  x = n(764260),
  N = n(95242),
  j = n(541575),
  E = n(420966),
  I = n(337344),
  O = n(275296),
  y = n(203377),
  w = n(981631),
  P = n(388032),
  B = n(640470),
  D = n(104978),
  T = n(179517),
  S = n(79829);
let L = (0, g.Un)({
    createPromise: () => n.e("4848").then(n.bind(n, 336231)),
    webpackId: 336231
  }),
  R = o().debounce((e, t) => (0, x.Uv)(e, t), 200);

function Q(e) {
  let {
    role: t,
    disabled: n
  } = e, [s, a] = i.useState(t.name);
  return i.useEffect(() => {
    a(t.name)
  }, [t.name]), (0, r.jsx)(d.xJW, {
    title: P.NW.string(P.t.dLbkBg),
    required: !0,
    children: (0, r.jsx)(d.oil, {
      type: "text",
      value: s,
      maxLength: w.VKK,
      onChange: function(e) {
        a(e), R(t.id, e)
      },
      disabled: n
    })
  })
}

function Z(e) {
  let {
    role: t,
    disabled: n
  } = e;
  return (0, r.jsxs)(d.xJW, {
    className: B.colorPicker,
    title: P.NW.string(P.t["1F6FzM"]),
    required: !0,
    children: [(0, r.jsx)(d.R94, {
      className: B.colorDescription,
      children: P.NW.string(P.t["9UCxlZ"])
    }), (0, r.jsx)(L, {
      defaultColor: w.p6O,
      colors: w.pmI,
      value: t.color,
      disabled: n,
      onChange: e => {
        var n, r;
        return n = t, r = e, void(n.color !== r && (r !== w.p6O || 0 !== n.color) && (r === w.p6O && (r = 0), (0, x.OW)(n.id, r)))
      },
      customPickerPosition: "right"
    }, t.id)]
  })
}

function W(e) {
  var t, s;
  let {
    role: a,
    guildId: l
  } = e, o = (s = P.NW.string(P.t.Mi9KbW), i.useMemo(() => {
    var e, t;
    let r = (0, p.e5)((e = function(e) {
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
    }({}, (0, h.ZP)({
      channelId: "1337",
      content: s
    })), t = t = {
      state: w.yb.SENT,
      id: "31337"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e));
    return r.author = new b.Z({
      id: "313337",
      username: P.NW.string(P.t.cqpybG),
      discriminator: "0000",
      bot: !1
    }), r.author.getAvatarURL = () => n(52008), r
  }, [s])), c = {
    nick: o.author.username,
    colorString: null !== (t = a.colorString) && void 0 !== t ? t : void 0
  }, u = {
    src: T,
    name: a.name
  }, g = {
    src: S,
    name: a.name
  }, v = (0, m.oC)(l, a), x = (0, f.Q3)("RolePreview") ? [w.BRd.LIGHT, w.BRd.DARK, w.BRd.DARKER, w.BRd.MIDNIGHT] : [w.BRd.LIGHT, w.BRd.DARK];
  return (0, r.jsx)(d.Rny, {
    children: (0, r.jsx)("div", {
      className: B.previewContainer,
      "aria-hidden": !0,
      "data-disable-adaptive-theme": !0,
      children: x.map(e => (0, r.jsx)(d.f6W, {
        theme: e,
        children: t => (0, r.jsx)("div", {
          className: t,
          children: (0, r.jsx)("div", {
            className: B.messageContainer,
            children: (0, r.jsx)(C.Z, {
              author: c,
              message: o,
              roleIcon: null != v ? v : (0, A.ap)(e) ? g : u,
              isGroupStart: !0
            })
          })
        })
      }, e))
    })
  })
}

function k(e) {
  let {
    role: t,
    disabled: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.j7V, {
      disabled: n,
      value: t.hoist,
      onChange: e => (0, x.we)(t.id, e, t.mentionable),
      hideBorder: !0,
      children: P.NW.string(P.t.vceJPj)
    }), (0, r.jsx)(d.$i$, {
      className: B.divider
    }), (0, r.jsx)(d.j7V, {
      disabled: n,
      value: t.mentionable,
      onChange: e => (0, x.we)(t.id, t.hoist, e),
      note: P.NW.string(P.t.kRg5W1),
      hideBorder: !0,
      children: P.NW.format(P.t.DTXoJS, {})
    })]
  })
}

function M(e) {
  let {
    guild: t,
    role: n,
    locked: i,
    setSelectedSection: s
  } = e, l = (0, u.pM)(null == t ? void 0 : t.id, n.id), o = i || l, A = (0, c.e7)([v.Z], () => v.Z.canImpersonateRole(t, n)), {
    headerHeight: g,
    headerRef: f
  } = (0, N.Z)(0), {
    scrolledToTop: m,
    handleScroll: p
  } = (0, E.V)();
  return (0, r.jsx)(d.yWw, {
    className: B.scroller,
    style: {
      scrollPaddingTop: g
    },
    onScroll: p,
    children: (0, r.jsxs)("div", {
      className: D.contentWidth,
      children: [(0, r.jsx)("div", {
        className: a()(D.header, D.stickyHeader, {
          [D.stickyHeaderElevated]: !m
        }),
        ref: f,
        children: (0, r.jsx)(E.Z, {
          guild: t,
          role: n,
          selectedSection: y.ZI.DISPLAY,
          setSelectedSection: s
        })
      }), (0, r.jsx)(Q, {
        role: n,
        disabled: o
      }), (0, r.jsx)("div", {
        className: B.noticeContainer,
        children: (0, r.jsx)(O.Z, {
          role: n
        })
      }), (0, r.jsx)(d.$i$, {
        className: B.divider
      }), (0, r.jsx)(Z, {
        role: n,
        disabled: o
      }), (0, r.jsx)(j.Z, {
        guild: t,
        disabled: o,
        role: n
      }), (0, r.jsx)(W, {
        role: n,
        guildId: t.id
      }), (0, r.jsx)(d.$i$, {
        className: B.divider
      }), (0, r.jsx)(k, {
        role: n,
        disabled: o
      }), A ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.$i$, {
          className: B.divider
        }), (0, r.jsx)(I.L, {
          guildId: t.id,
          role: n
        })]
      }) : null]
    })
  })
}