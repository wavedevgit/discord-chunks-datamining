/** Chunk was on 1272 **/
/** chunk id: 267161, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => W,
  useAppSidebarState: () => F
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
  Chunk741764 = require("./741764.js"),
  Chunk408491 = require("./408491.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk916723 = require("./916723.js"),
  Chunk103609 = require("./103609.js");

function H(e) {
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

function B(e, t) {
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
let F = (0, Chunk97519.U)(() => ({
  isOpen: true
}));

function z() {
  let e, t = (0, Chunk114858.TH)(),
    n = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId()),
    i = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    a = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(require), [require]),
    c = null != Chunk73800 ? Chunk73800 : null == Chunk97519 ? true : Chunk97519.guild_id,
    d = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk230711), [Chunk230711]),
    p = (0, Chunk916069.Z)(),
    f = (0, Chunk370774.D)(),
    {
      application: m,
      isFrameInFocusedMode: _
    } = (0, Chunk442837.cj)([Chunk812206.Z, Chunk591472.Z], () => {
      let e = Chunk591472.Z.getConnectedFrame();
      return {
        application: Chunk812206.Z.getApplication(null == module ? true : module.applicationId),
        isFrameInFocusedMode: Chunk591472.Z.getFrameLayoutMode() === Chunk408491.U.FOCUSED
      }
    }),
    O = null != Chunk111666 ? Chunk768581.ZP.getApplicationIconURL({
      id: Chunk111666.id,
      icon: Chunk111666.icon,
      bot: Chunk111666.bot
    }) : true,
    E = null;
  return null != Chunk111666 && Chunk300986 ? (e = Chunk111666.name, E = (0, Chunk255367.jsx)("img", {
    className: Chunk103609.appIcon,
    alt: Chunk388032.intl.string(Chunk388032.t.X4IxWF),
    src: Chunk314451,
    "aria-hidden": true,
    draggable: false
  })) : Chunk540059 ? (e = Chunk388032.intl.string(Chunk388032.t.HcoRu7), E = (0, Chunk255367.jsx)(Chunk481060.Dkj, {
    size: "xs"
  })) : null != Chunk174556 ? (E = Chunk320007 ? (0, Chunk255367.jsx)(Chunk481060.r7p, {
    size: "xs"
  }) : (0, Chunk255367.jsx)(Chunk565138.Z, {
    guild: Chunk174556,
    size: Chunk565138.Z.Sizes.MINI,
    active: true,
    className: Chunk103609.guildIcon
  }), e = Chunk174556.name) : null != Chunk97519 && (Chunk97519.isDM() || Chunk97519.isGroupDM()) ? (e = Chunk388032.intl.string(Chunk388032.t.YUU0RE), E = (0, Chunk255367.jsx)(Chunk481060.gw7, {
    size: "xs"
  })) : exports.pathname.startsWith(Chunk981631.Z5c.GLOBAL_DISCOVERY) ? (e = Chunk388032.intl.string(Chunk388032.t["4nEZLi"]), E = (0, Chunk255367.jsx)(Chunk481060.Jmo, {
    size: "xs"
  })) : exports.pathname.startsWith(Chunk981631.Z5c.NITRO_HOME) ? (e = Chunk388032.intl.string(Chunk388032.t.Ipxkoq), E = (0, Chunk255367.jsx)(Chunk481060.SrA, {
    size: "xs"
  })) : exports.pathname.startsWith(Chunk981631.Z5c.COLLECTIBLES_SHOP) ? (e = Chunk388032.intl.string(Chunk388032.t.pWG4zc), E = (0, Chunk255367.jsx)(Chunk481060.EOn, {
    size: "xs"
  })) : exports.pathname.startsWith(Chunk981631.Z5c.FRIENDS) ? (e = Chunk388032.intl.string(Chunk388032.t.TdEu5e), E = (0, Chunk255367.jsx)(Chunk481060.iFz, {
    size: "xs"
  })) : exports.pathname.startsWith(Chunk981631.Z5c.FAMILY_CENTER) && (e = Chunk388032.intl.string(Chunk916723.default.RZqaJi), E = (0, Chunk255367.jsx)(Chunk481060.BFJ, {
    size: "xs"
  })), null != module && "" !== module && (0, Chunk255367.jsxs)("div", {
    className: Chunk103609.title,
    children: [Chunk35583, (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      lineClamp: 1,
      children: module
    })]
  })
}
let W = Chunk73800.memo(function() {
  Chunk73800.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let e = (0, Chunk540059.T)("AppTitleBar"),
    t = F(e => e.isOpen),
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
    h = null !== require && Chunk114858 === Chunk821020.u3.TITLE_BAR_LEFT,
    g = null === require;
  Chunk73800.useLayoutEffect(() => {
    Chunk998502.ZP.setMinimumSize(Chunk741764.J, Chunk741764.N)
  }, []);
  let b = (0, Chunk984802.Ll)(),
    v = (0, Chunk442837.e7)([Chunk451478.Z, Chunk522474.Z], () => (0, Chunk228488.rB)()),
    T = function(e) {
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
      children: t => (0, r.jsx)(R.TF, {
        className: t,
        leading: (0, r.jsxs)(r.Fragment, {
          children: [u && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.P3F, B(H({}, "SIDEBAR" === T ? e : {}), {
              className: V.button,
              onClick: () => {
                F.setState({
                  isOpen: !F.getState().isOpen
                })
              },
              children: (0, r.jsx)(Y, {})
            })), (0, r.jsx)(s.P3F, {
              className: V.button,
              onClick: () => {
                c.Z.open(D.oAB.ACCOUNT)
              },
              children: (0, r.jsx)(s.ewm, {
                size: "xs",
                color: "currentColor"
              })
            })]
          }), h && (0, r.jsx)(I.Z, {
            focusSectionProps: "NOTIFICATIONS_INBOX" === T ? e : true
          })]
        }),
        title: (0, r.jsx)(z, {}),
        trailing: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            className: V.button
          }), (0, r.jsx)(p.Z, {
            canShowReminder: true,
            className: V.button
          }), g && (0, r.jsx)(S.Z, B(H({}, "RECENTS" === T ? e : {}), {
            className: V.button
          })), a ? (0, r.jsx)(O.Z, {
            focusSectionProps: "HELP" === T ? e : true,
            className: V.button
          }) : (0, r.jsx)(_.Z, {
            focusSectionProps: "HELP" === T ? e : true,
            className: V.button
          }), (0, r.jsx)(E.Z, {
            className: V.button
          })]
        })
      })
    })
  })
});

function Y() {
  return (0, Chunk255367.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: Chunk103609.icon,
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