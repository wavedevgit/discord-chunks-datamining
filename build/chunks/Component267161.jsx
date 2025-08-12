/** Chunk was on 1272 **/
/** chunk id: 267161, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => J,
  useAppSidebarState: () => K
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk114858 = require("./114858.js"),
  Chunk97519 = require("./97519.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk812206 = require("./812206.js"),
  Chunk174556 = require("./174556.js"),
  Chunk320007 = require("./320007.jsx"),
  Chunk540059 = require("./540059.js"),
  Chunk916069 = require("./916069.js"),
  Chunk591472 = require("./591472.js"),
  Chunk111666 = require("./111666.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk300986 = require("./300986.jsx"),
  Chunk314451 = require("./314451.jsx"),
  Chunk35583 = require("./35583.jsx"),
  Chunk821020 = require("./821020.js"),
  Chunk370774 = require("./370774.js"),
  Chunk340137 = require("./340137.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk141321 = require("./141321.jsx"),
  Chunk819439 = require("./819439.js"),
  Chunk296241 = require("./296241.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk984802 = require("./984802.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk451478 = require("./451478.js"),
  Chunk768581 = require("./768581.js"),
  Chunk998502 = require("./998502.js"),
  Chunk228488 = require("./228488.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk741764 = require("./741764.js"),
  Chunk408491 = require("./408491.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk916723 = require("./916723.js"),
  Chunk538778 = require("./538778.js");

function W(e) {
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

function Y(e, t) {
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
let K = (0, Chunk97519.U)(() => ({
  isOpen: true
}));

function q(e) {
  let t, {
      selectedChannelId: n
    } = e,
    i = (0, l.TH)(),
    a = (0, o.e7)([w.Z], () => w.Z.getGuildId()),
    c = (0, o.e7)([x.Z], () => x.Z.getChannel(n), [n]),
    d = null != a ? a : null == c ? true : c.guild_id,
    p = (0, o.e7)([Z.Z], () => Z.Z.getGuild(d), [d]),
    h = (0, f.Z)(),
    m = (0, v.D)(),
    {
      application: _,
      isFrameInFocusedMode: O
    } = (0, o.cj)([u.Z, g.Z], () => {
      let e = g.Z.getConnectedFrame();
      return {
        application: u.Z.getApplication(null == e ? true : e.applicationId),
        isFrameInFocusedMode: g.Z.getFrameLayoutMode() === B.U.FOCUSED
      }
    }),
    E = null != _ ? R.ZP.getApplicationIconURL({
      id: _.id,
      icon: _.icon,
      bot: _.bot
    }) : true,
    y = null;
  return null != _ && O ? (t = _.name, y = (0, r.jsx)("img", {
    className: z.appIcon,
    alt: H.intl.string(H.t.X4IxWF),
    src: E,
    "aria-hidden": true,
    draggable: false
  })) : m ? (t = H.intl.string(H.t.HcoRu7), y = (0, r.jsx)(s.Dkj, {
    size: "xs"
  })) : null != p ? (y = h ? (0, r.jsx)(s.r7p, {
    size: "xs"
  }) : (0, r.jsx)(b.Z, {
    guild: p,
    size: b.Z.Sizes.MINI,
    active: true,
    className: z.guildIcon
  }), t = p.name) : null != c && (c.isDM() || c.isGroupDM()) ? (t = H.intl.string(H.t.YUU0RE), y = (0, r.jsx)(s.gw7, {
    size: "xs"
  })) : i.pathname.startsWith(U.Z5c.GLOBAL_DISCOVERY) ? (t = H.intl.string(H.t["4nEZLi"]), y = (0, r.jsx)(s.Jmo, {
    size: "xs"
  })) : i.pathname.startsWith(U.Z5c.NITRO_HOME) ? (t = H.intl.string(H.t.Ipxkoq), y = (0, r.jsx)(s.SrA, {
    size: "xs"
  })) : i.pathname.startsWith(U.Z5c.COLLECTIBLES_SHOP) ? (t = H.intl.string(H.t.pWG4zc), y = (0, r.jsx)(s.EOn, {
    size: "xs"
  })) : i.pathname.startsWith(U.Z5c.FRIENDS) ? (t = H.intl.string(H.t.TdEu5e), y = (0, r.jsx)(s.iFz, {
    size: "xs"
  })) : i.pathname.startsWith(U.Z5c.FAMILY_CENTER) && (t = H.intl.string(F.default.RZqaJi), y = (0, r.jsx)(s.BFJ, {
    size: "xs"
  })), null != t && "" !== t && (0, r.jsxs)("div", {
    className: z.title,
    children: [y, (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      lineClamp: 1,
      children: t
    })]
  })
}

function X(e) {
  let {
    selectedChannelId: t
  } = e, n = (0, o.e7)([w.Z, x.Z], () => {
    let e = w.Z.getGuildId(),
      n = x.Z.getChannel(t);
    return null != e ? e : null == n ? true : n.guild_id
  }), i = (0, P.H)({
    guildId: n,
    channelId: t
  });
  return null == i ? (0, r.jsx)(q, {
    selectedChannelId: t
  }) : (0, r.jsx)(T.Z, {
    searchContext: i
  })
}

function Q() {
  let e = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId()),
    t = (0, Chunk819439.$)({
      location: "TitleText"
    }),
    n = (0, Chunk442837.e7)([Chunk592125.Z], () => {
      let t = Chunk592125.Z.getChannel(module);
      return null != exports && !exports.isDirectory() && !exports.isGuildVocal()
    });
  return exports && null != module && !(0, Chunk176505.AB)(module) && require ? (0, Chunk255367.jsx)(X, {
    selectedChannelId: module
  }) : (0, Chunk255367.jsx)(q, {
    selectedChannelId: module
  })
}
let J = Chunk73800.memo(function() {
  Chunk73800.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let e = (0, Chunk540059.T)("AppTitleBar"),
    t = K(e => e.isOpen),
    {
      notificationCenterVariant: n,
      entrypoint: l
    } = (0, Chunk821020.pN)({
      location: "AppTitleBar"
    }),
    {
      hasBugReporterAccess: a
    } = Chunk174556.Z.useExperiment({
      location: "HeaderBar"
    }, {
      autoTrackExposure: false
    }),
    u = !exports && module,
    f = null !== require && Chunk114858 === Chunk821020.u3.TITLE_BAR_LEFT,
    g = null === require;
  Chunk73800.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let b = (0, Chunk984802.Ll)(),
    v = (0, Chunk442837.e7)([Chunk451478.Z, Chunk522474.Z], () => (0, Chunk228488.rB)()),
    N = function(e) {
      let {
        showCollapsedSidebarIcons: t,
        showNotificationsInbox: n,
        showRecentsButton: r
      } = e;
      return i.useMemo(() => t ? "SIDEBAR" : n ? "NOTIFICATIONS_INBOX" : r ? "RECENTS" : "HELP", [t, n, r])
    }({
      showCollapsedSidebarIcons: Chunk812206,
      showNotificationsInbox: Chunk916069,
      showRecentsButton: Chunk591472
    });
  return Chunk370774 ? null : (0, Chunk255367.jsx)(Chunk481060.Wdt, {
    children: e => (0, r.jsx)(s.f6W, {
      theme: b,
      children: t => (0, r.jsx)(M.TF, {
        className: t,
        leading: (0, r.jsxs)(r.Fragment, {
          children: [u && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.P3F, Y(W({}, "SIDEBAR" === N ? e : {}), {
              className: z.button,
              onClick: () => {
                K.setState({
                  isOpen: !K.getState().isOpen
                })
              },
              children: (0, r.jsx)($, {})
            })), (0, r.jsx)(s.P3F, {
              className: z.button,
              onClick: () => {
                c.Z.open(U.oAB.ACCOUNT)
              },
              children: (0, r.jsx)(s.ewm, {
                size: "xs",
                color: "currentColor"
              })
            })]
          }), f && (0, r.jsx)(I.Z, {
            focusSectionProps: "NOTIFICATIONS_INBOX" === N ? e : true
          })]
        }),
        title: (0, r.jsx)(Q, {}),
        trailing: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            className: z.button
          }), (0, r.jsx)(p.Z, {
            canShowReminder: true,
            className: z.button
          }), g && (0, r.jsx)(S.Z, Y(W({}, "RECENTS" === N ? e : {}), {
            className: z.button
          })), a ? (0, r.jsx)(O.Z, {
            focusSectionProps: "HELP" === N ? e : true,
            className: z.button
          }) : (0, r.jsx)(_.Z, {
            focusSectionProps: "HELP" === N ? e : true,
            className: z.button
          }), (0, r.jsx)(E.Z, {
            className: z.button
          })]
        })
      })
    })
  })
});

function $() {
  return (0, Chunk255367.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: Chunk538778.icon,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [(0, Chunk255367.jsx)("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2"
    }), (0, Chunk255367.jsx)("path", {
      d: "M9 3v18"
    })]
  })
}