/** Chunk was on 97492 **/
/** chunk id: 374873, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk80682 = require("./80682.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk967144 = require("./967144.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk849736 = require("./849736.js"),
  Chunk113783 = require("./113783.js"),
  Chunk925931 = require("./925931.js"),
  Chunk105530 = require("./105530.js"),
  Chunk699970 = require("./699970.js"),
  Chunk345687 = require("./345687.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk684205 = require("./684205.js");

function P(e) {
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

function w(e, t) {
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
let R = Chunk64700.memo(function(e) {
    let {
      toggleRequestToSpeakSidebar: t,
      chatOpen: n
    } = e, l = (0, r.jsx)(g.Ay.Icon, {
      icon: d.PGe,
      tooltip: N.intl.string(N.t.cpT0Cq),
      onClick: t
    });
    return (0, r.jsxs)(g.Ay, {
      toolbar: l,
      className: a()(T.N1, {
        [T.X_]: n
      }),
      children: [(0, r.jsx)(g.Ay.Icon, {
        icon: d.E7M,
        disabled: true,
        "aria-label": N.intl.string(N.t.TYZgzW)
      }), (0, r.jsx)(g.Ay.Title, {
        children: N.intl.string(N.t.TYZgzW)
      })]
    })
  }),
  D = Chunk64700.memo(function(e) {
    var t;
    let {
      channel: i,
      participant: a,
      tempDisableOnInit: s = false
    } = e, g = l.useRef(null), [O, x] = l.useState(s);
    (0, h.Ay)(() => {
      if (!O) return;
      let e = setTimeout(() => x(false), 1e3);
      return () => clearTimeout(e)
    });
    let C = i.getGuildId();
    o()(null != C, "Channel cannot be guildless");
    let {
      isMobile: S,
      status: I
    } = (0, c.cf)([j.A], () => ({
      isMobile: j.A.isMobileOnline(a.user.id),
      status: j.A.getStatus(a.user.id, C)
    })), R = (0, c.bG)([y.Ay], () => y.Ay.getMember(C, a.user.id)), D = (0, m.gn)(i.guild_id, null == R ? true : R.userId, null != (t = null == R ? true : R.colorStrings) ? t : null), M = l.useMemo(() => ({
      [C]: [a.user.id]
    }), [C, a.user.id]);
    (0, b.E)(M, "RequestToSpeakSidebar");
    let L = a.rtsState === _.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
      G = e => {
        (0, f.L3)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("25623")]).then(n.bind(n, 107632));
          return t => (0, r.jsx)(e, w(P({}, t), {
            user: a.user,
            guildId: C,
            channel: i,
            showMediaItems: true
          }))
        })
      };
    return (0, r.jsxs)("div", {
      className: T.fn,
      children: [(0, r.jsx)(A.A, {
        targetElementRef: g,
        user: a.user,
        guildId: i.guild_id,
        channelId: i.id,
        position: "left",
        spacing: 16,
        clickTrap: true,
        children: e => {
          var t;
          return (0, r.jsxs)(d.DUT, w(P({
            innerRef: g,
            className: T.$u,
            onContextMenu: G
          }, e), {
            children: [(0, r.jsx)(p.A, {
              size: d._3J.SIZE_40,
              className: T.RB,
              user: a.user,
              isMobile: S,
              status: I
            }), (0, r.jsxs)("div", {
              className: T.kH,
              children: [(0, r.jsx)(d.gyj, {
                name: a.userNick,
                colorString: null != (t = null == R ? true : R.colorString) ? t : null,
                colorStrings: D,
                className: T.F8
              }), (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: (0, E.g)(a)
              })]
            })]
          }))
        }
      }), (0, r.jsxs)("div", {
        className: T.UD,
        children: [(0, r.jsx)(u.m, {
          text: L ? N.intl.string(N.t.h9rsTd) : N.intl.string(N.t.f0T7hI),
          asContainer: true,
          children: (0, r.jsx)(d.K0, {
            onClick: function() {
              (0, v.lL)(i, a.user.id, false)
            },
            disabled: L || O,
            icon: d.LvC,
            variant: "secondary",
            "aria-label": L ? N.intl.string(N.t.h9rsTd) : N.intl.string(N.t.f0T7hI)
          })
        }), (0, r.jsx)(u.m, {
          text: N.intl.string(N.t.moABMy),
          asContainer: true,
          children: (0, r.jsx)(d.K0, {
            "aria-label": N.intl.string(N.t.moABMy),
            onClick: function() {
              (0, v.lL)(i, a.user.id, true)
            },
            icon: d.PGe,
            variant: "secondary"
          })
        })]
      })]
    })
  }),
  M = Chunk64700.memo(function(e) {
    let {
      channel: t
    } = e, [n, l] = (0, C.X)(t.id);
    return (0, r.jsx)(d.dOG, {
      label: N.intl.string(N.t.GYCh0W),
      checked: n,
      onChange: l
    })
  }),
  L = Chunk64700.memo(function() {
    return (0, r.jsxs)("div", {
      className: T.y7,
      children: [(0, r.jsx)(S.A, {}), (0, r.jsx)(d.Text, {
        className: T.vo,
        variant: "text-lg/semibold",
        color: "text-strong",
        children: N.intl.string(N.t["7R24mX"])
      }), (0, r.jsx)(d.Text, {
        className: T.XG,
        variant: "text-sm/normal",
        color: "text-default",
        children: N.intl.string(N.t.Rpr2s0)
      })]
    })
  });

function G(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    chatOpen: l
  } = e, i = (0, x.J2)(t.id), s = [+!!(0, c.bG)([O.A], () => O.A.can(I.xB.MANAGE_CHANNELS, t) || O.A.can(I.xB.MANAGE_ROLES, t)), Math.max(1, i.length)];
  return (0, r.jsxs)("div", {
    className: a()(T.kL, {
      [T.X_]: l
    }),
    children: [(0, r.jsx)(R, {
      toggleRequestToSpeakSidebar: n,
      chatOpen: l
    }), (0, r.jsx)(d.B8B, {
      className: T.hQ,
      sections: s,
      sectionHeight: function(e) {
        return 40 * (1 === e)
      },
      rowHeight: function(e) {
        switch (e) {
          case 0:
            return 66;
          case 1:
            if (0 === i.length) return 178;
            return 48
        }
        return 0
      },
      renderRow: function(e) {
        let {
          section: n,
          row: l
        } = e;
        switch (n) {
          case 0:
            return (0, r.jsx)(M, {
              channel: t
            }, "rts-toggle");
          case 1: {
            if (0 === i.length) return (0, r.jsx)(L, {}, "participants-empty");
            let e = i[l];
            return (0, r.jsx)(D, {
              channel: t,
              participant: e,
              tempDisableOnInit: true
            }, e.id)
          }
        }
        return null
      },
      renderSection: function(e) {
        let {
          section: t
        } = e;
        return 1 === t ? (0, r.jsx)(d.Text, {
          className: T.Vu,
          variant: "text-xs/bold",
          color: "text-default",
          children: i.length > 0 ? N.intl.formatToPlainString(N.t["5z7q5a"], {
            numHands: i.length
          }) : N.intl.string(N.t.TYZgzW)
        }, "participants-section") : null
      }
    })]
  })
}