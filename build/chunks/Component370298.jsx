/** Chunk was on 22878 **/
/** chunk id: 370298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk749280 = require("./749280.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk166459 = require("./166459.js"),
  Chunk911969 = require("./911969.js"),
  Chunk476326 = require("./476326.js"),
  Chunk827498 = require("./827498.js"),
  Chunk555573 = require("./555573.js"),
  Chunk213459 = require("./213459.js"),
  Chunk998698 = require("./998698.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk667204 = require("./667204.js"),
  Chunk873387 = require("./873387.js"),
  Chunk809090 = require("./809090.jsx"),
  Chunk104919 = require("./104919.js"),
  Chunk583027 = require("./583027.js"),
  Chunk978983 = require("./978983.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk619895 = require("./619895.js"),
  Chunk844439 = require("./844439.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk491856 = require("./491856.js");

function R(e) {
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

function D(e) {
  let {
    toggleShowMenu: t,
    showMenu: n,
    className: c,
    channelId: u,
    imageUrl: s,
    mimeType: d
  } = e, m = (0, i.e7)([j.Z], () => j.Z.getChannel(u)), {
    Component: p,
    events: f,
    play: b
  } = (0, o.w)(), [O, g] = l.useState(false), E = l.useRef(null);
  return null == m ? null : (O || b(), (0, r.jsx)(a.yRy, {
    targetElementRef: E,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(x, {
        onClose: t,
        channel: m,
        imageUrl: s,
        mimeType: d
      })
    },
    position: "right",
    align: "top",
    animation: a.yRy.Animation.NONE,
    onRequestClose: t,
    shouldShow: n,
    children: e => {
      let {
        onClick: n
      } = e;
      return (0, r.jsx)(a.ua7, {
        text: A.intl.string(A.t.emnnEB),
        children: e => {
          var n, l;
          return (0, r.jsx)(a.P3F, (n = R({}, e), l = l = {
            className: c,
            focusProps: {
              offset: 2
            },
            innerRef: E,
            onClick: t,
            onMouseEnter: () => {
              g(true), f.onMouseEnter()
            },
            onMouseLeave: f.onMouseLeave,
            "aria-label": A.intl.string(A.t.emnnEB),
            children: (0, r.jsx)(p, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor"
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      })
    }
  }))
}

function x(e) {
  let {
    onSelect: t,
    onClose: n,
    channel: o,
    imageUrl: j,
    mimeType: D
  } = e, x = (0, i.e7)([S.Z], () => S.Z.getGuild(o.guild_id)), {
    fetchState: U,
    imageRecCommandContexts: k
  } = (0, w.h)({
    channelId: o.id
  }), Z = U === N.M.FETCHING, F = (0, E.g)(o), G = (0, p.PL)(true, true), L = (0, p.LD)(o.guild_id, true);
  l.useEffect(() => {
    (U === N.M.ERROR || U === N.M.FETCHED && 0 === k.length) && n()
  }, [U, k.length, n]), l.useEffect(() => {
    var e, t;
    if (Z || 0 === k.length) return;
    let n = [];
    k.forEach(e => {
      n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id))
    }), M.default.track(I.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
      guild_id: null != (e = null == o ? true : o.guild_id) ? e : "",
      channel_id: null != (t = null == o ? true : o.id) ? t : "",
      application_ids: [...k.map(e => Number(e.command.applicationId))],
      command_ids: n
    })
  }, [k, o, Z]);
  let B = l.useCallback(async e => {
      let t = await fetch(j),
        n = await t.arrayBuffer(),
        r = D.join("/"),
        l = new File([n], "image".concat((0, w.Q)({
          contentType: r
        })), {
          type: r
        });
      c.Z.setFile({
        channelId: o.id,
        id: e,
        file: {
          id: e,
          file: l,
          platform: s.ow.WEB,
          origin: "unknown:app_recommendation"
        },
        draftType: P.d.SlashCommand
      })
    }, [j, o.id, D]),
    H = l.useCallback(async (e, t, n, r) => {
      var l, i;
      if (!F) return;
      let a = e.applicationId,
        c = (null == (l = G.result) ? true : l.sections[a]) != null,
        s = (null == (i = L.result) ? true : i.sections[a]) != null;
      await B(r), null != f.Z.getActiveCommand(o.id) && m.Po({
        channelId: o.id,
        command: null,
        section: null
      }), c || s || p.ZP.queryInstallOnDemandApp(e.applicationId, o.id), m.Po({
        channelId: o.id,
        command: e,
        section: t,
        location: n,
        source: d._b.TEXT,
        initialValues: {
          [r]: {
            type: u.jw.ATTACHMENT,
            name: r,
            value: "image"
          }
        },
        commandOrigin: n === b.Vh.IMAGE_RECS_SUBMENU ? b.bB.IMAGE_RECS_SUBMENU : b.bB.IMAGE_RECS_MENU
      }), (0, v.Mo)({
        command: e,
        location: n,
        sectionName: t.name
      }), _.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: o.id
      })
    }, [o.id, B, F, G, L]),
    V = l.useCallback(async (e, t, n) => {
      var r, l;
      let i = e.applicationId,
        a = (null == (r = G.result) ? true : r.sections[i]) != null,
        c = (null == (l = L.result) ? true : l.sections[i]) != null;
      a || c || p.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
      let {
        isAuthorized: u
      } = await (0, h.L)({
        applicationId: i,
        channel: o,
        commandIntegrationTypes: e.integration_types,
        appLauncherContext: {
          entrypoint: d._b.TEXT,
          location: t,
          sectionName: true
        }
      });
      (0, O.qJ)({
        command: e,
        location: t,
        source: d._b.TEXT
      }), u && (await B(n), await (0, g.Z)({
        command: R({}, e),
        optionValues: {
          [n]: [{
            text: "image",
            type: "text"
          }]
        },
        context: {
          channel: o,
          guild: x
        },
        commandOrigin: t === b.Vh.IMAGE_RECS_SUBMENU ? b.bB.IMAGE_RECS_SUBMENU : b.bB.IMAGE_RECS_MENU
      }))
    }, [o, x, G, L, B]);
  return (0, r.jsxs)(a.v2r, {
    onSelect: t,
    navId: "image-context-commands-popout",
    onClose: n,
    "aria-label": A.intl.string(A.t.P3ShV1),
    children: [(0, r.jsx)(a.sNh, {
      id: "menu-image-rec-header",
      render: () => (0, r.jsx)(a.Text, {
        className: T.title,
        variant: "text-md/bold",
        color: "header-primary",
        children: A.intl.string(A.t.emnnEB)
      }),
      navigable: false,
      disabled: true
    }, "menu-image-rec-header"), (0, r.jsx)(a.Clw, {}), Z ? (0, r.jsx)(a.sNh, {
      id: "menu-image-recs-placeholder",
      render: () => (0, r.jsx)(C.Z, {}),
      navigable: false,
      disabled: true
    }, "menu-image-recs-placeholder") : (0, r.jsx)(r.Fragment, {
      children: k.filter(e => null != e.imageOption).map(e => {
        let t = e.overrideSendCommand,
          n = null == e ? true : e.overrideSendCommandInfo,
          l = null != t && null != n,
          i = e.onlyAllowEdit || null != n && null == t,
          c = e.imageOption;
        return null == c ? null : (0, r.jsx)(a.sNh, {
          id: e.command.id,
          action: () => {
            i ? H(e.command, e.section, b.Vh.IMAGE_RECS_MENU, c) : V(l ? t : e.command, b.Vh.IMAGE_RECS_MENU, l ? n.imageOption : c)
          },
          label: e.command.displayName,
          subtext: e.command.displayDescription,
          subtextLineClamp: 1,
          icon: i ? a.vdY : l ? true : a.Uuj,
          iconLeft: () => (0, r.jsx)(y.Z, {
            channel: o,
            section: e.section,
            width: 32,
            height: 32,
            isSquircle: true,
            selectable: false
          }),
          iconLeftSize: "lg",
          showImageFirst: true,
          disabled: !F && i,
          children: l ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.sNh, {
              id: "".concat(e.command.id, "-send"),
              label: A.intl.string(A.t["M+BhUV"]),
              subtext: A.intl.string(A.t.zXFjJS),
              action: () => V(t, b.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
              icon: a.Uuj
            }, "".concat(e.command.id, "-send")), (0, r.jsx)(a.sNh, {
              id: "".concat(e.command.id, "-edit"),
              label: A.intl.string(A.t["wTaN+P"]),
              subtext: A.intl.string(A.t.bIB3bm),
              action: () => {
                H(e.command, e.section, b.Vh.IMAGE_RECS_SUBMENU, c)
              },
              icon: a.vdY,
              disabled: !F
            }, "".concat(e.command.id, "-edit"))]
          }) : null
        }, e.command.id)
      })
    })]
  })
}