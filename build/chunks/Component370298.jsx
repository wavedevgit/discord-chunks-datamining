/** Chunk was on web.js **/
/** chunk id: 370298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk749280 = require("./749280.jsx"),
  Chunk28664 = require("./28664.jsx"),
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function k(e) {
  let {
    toggleShowMenu: t,
    showMenu: n,
    className: c,
    channelId: u,
    imageUrl: d,
    mimeType: f
  } = e, _ = (0, a.e7)([T.Z], () => T.Z.getChannel(u)), {
    Component: p,
    events: h,
    play: m
  } = (0, o.w)(), [g, E] = i.useState(false), b = i.useRef(null);
  return null == _ ? null : (g || m(), (0, r.jsx)(l.yRy, {
    targetElementRef: b,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(j, {
        onClose: t,
        channel: _,
        imageUrl: d,
        mimeType: f
      })
    },
    position: "right",
    align: "top",
    animation: l.yRy.Animation.NONE,
    onRequestClose: t,
    shouldShow: n,
    children: e => {
      let {
        onClick: n
      } = e;
      return (0, r.jsx)(s.u, {
        asContainer: true,
        text: w.intl.string(w.t.emnnEB),
        children: (0, r.jsx)(l.P3F, {
          className: c,
          focusProps: {
            offset: 2
          },
          innerRef: b,
          onClick: t,
          onMouseEnter: () => {
            E(true), h.onMouseEnter()
          },
          onMouseLeave: h.onMouseLeave,
          "aria-label": w.intl.string(w.t.emnnEB),
          children: (0, r.jsx)(p, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor"
          })
        })
      })
    }
  }))
}

function j(e) {
  let {
    onSelect: t,
    onClose: n,
    channel: o,
    imageUrl: s,
    mimeType: T
  } = e, x = (0, a.e7)([A.Z], () => A.Z.getGuild(o.guild_id)), {
    fetchState: k,
    imageRecCommandContexts: j
  } = (0, R.h)({
    channelId: o.id
  }), U = k === P.M.FETCHING, G = (0, b.g)(o), B = (0, p.PL)(true, true), Z = (0, p.LD)(o.guild_id, true);
  i.useEffect(() => {
    (k === P.M.ERROR || k === P.M.FETCHED && 0 === j.length) && n()
  }, [k, j.length, n]), i.useEffect(() => {
    var e, t;
    if (U || 0 === j.length) return;
    let n = [];
    j.forEach(e => {
      n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id))
    }), C.default.track(D.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
      guild_id: null != (e = null == o ? true : o.guild_id) ? e : "",
      channel_id: null != (t = null == o ? true : o.id) ? t : "",
      application_ids: [...j.map(e => Number(e.command.applicationId))],
      command_ids: n
    })
  }, [j, o, U]);
  let F = i.useCallback(async e => {
      let t = await fetch(s),
        n = await t.arrayBuffer(),
        r = T.join("/"),
        i = new File([n], "image".concat((0, R.Q)({
          contentType: r
        })), {
          type: r
        });
      c.Z.setFile({
        channelId: o.id,
        id: e,
        file: {
          id: e,
          file: i,
          platform: d.ow.WEB,
          origin: "unknown:app_recommendation"
        },
        draftType: S.d.SlashCommand
      })
    }, [s, o.id, T]),
    V = i.useCallback(async (e, t, n, r) => {
      var i, a;
      if (!G) return;
      let s = e.applicationId,
        l = (null == (i = B.result) ? true : i.sections[s]) != null,
        c = (null == (a = Z.result) ? true : a.sections[s]) != null;
      await F(r), null != h.Z.getActiveCommand(o.id) && _.Po({
        channelId: o.id,
        command: null,
        section: null
      }), l || c || p.ZP.queryInstallOnDemandApp(e.applicationId, o.id), _.Po({
        channelId: o.id,
        command: e,
        section: t,
        location: n,
        source: f._b.TEXT,
        initialValues: {
          [r]: {
            type: u.jw.ATTACHMENT,
            name: r,
            value: "image"
          }
        },
        commandOrigin: n === m.Vh.IMAGE_RECS_SUBMENU ? m.bB.IMAGE_RECS_SUBMENU : m.bB.IMAGE_RECS_MENU
      }), (0, v.Mo)({
        command: e,
        location: n,
        sectionName: t.name
      }), N.S.dispatch(D.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: o.id
      })
    }, [o.id, F, G, B, Z]),
    H = i.useCallback(async (e, t, n) => {
      var r, i;
      let a = e.applicationId,
        s = (null == (r = B.result) ? true : r.sections[a]) != null,
        l = (null == (i = Z.result) ? true : i.sections[a]) != null;
      s || l || p.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
      let {
        isAuthorized: c
      } = await (0, O.L)({
        applicationId: a,
        channel: o,
        commandIntegrationTypes: e.integration_types,
        appLauncherContext: {
          entrypoint: f._b.TEXT,
          location: t,
          sectionName: true
        }
      });
      (0, g.qJ)({
        command: e,
        location: t,
        source: f._b.TEXT
      }), c && (await F(n), await (0, E.Z)({
        command: M({}, e),
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
        commandOrigin: t === m.Vh.IMAGE_RECS_SUBMENU ? m.bB.IMAGE_RECS_SUBMENU : m.bB.IMAGE_RECS_MENU
      }))
    }, [o, x, B, Z, F]);
  return (0, r.jsxs)(l.v2r, {
    onSelect: t,
    navId: "image-context-commands-popout",
    onClose: n,
    "aria-label": w.intl.string(w.t["P3ShV+"]),
    children: [(0, r.jsx)(l.sNh, {
      id: "menu-image-rec-header",
      render: () => (0, r.jsx)(l.Text, {
        className: L.title,
        variant: "text-md/bold",
        color: "header-primary",
        children: w.intl.string(w.t.emnnEB)
      }),
      navigable: false,
      disabled: true
    }, "menu-image-rec-header"), (0, r.jsx)(l.Clw, {}), U ? (0, r.jsx)(l.sNh, {
      id: "menu-image-recs-placeholder",
      render: () => (0, r.jsx)(I.Z, {}),
      navigable: false,
      disabled: true
    }, "menu-image-recs-placeholder") : (0, r.jsx)(r.Fragment, {
      children: j.filter(e => null != e.imageOption).map(e => {
        let t = e.overrideSendCommand,
          n = null == e ? true : e.overrideSendCommandInfo,
          i = null != t && null != n,
          a = e.onlyAllowEdit || null != n && null == t,
          s = e.imageOption;
        return null == s ? null : (0, r.jsx)(l.sNh, {
          id: e.command.id,
          action: () => {
            a ? V(e.command, e.section, m.Vh.IMAGE_RECS_MENU, s) : H(i ? t : e.command, m.Vh.IMAGE_RECS_MENU, i ? n.imageOption : s)
          },
          label: e.command.displayName,
          subtext: e.command.displayDescription,
          subtextLineClamp: 1,
          icon: a ? l.vdY : i ? true : l.Uuj,
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
          disabled: !G && a,
          children: i ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.sNh, {
              id: "".concat(e.command.id, "-send"),
              label: w.intl.string(w.t["M+BhUW"]),
              subtext: w.intl.string(w.t.zXFjJV),
              action: () => H(t, m.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
              icon: l.Uuj
            }, "".concat(e.command.id, "-send")), (0, r.jsx)(l.sNh, {
              id: "".concat(e.command.id, "-edit"),
              label: w.intl.string(w.t["wTaN+K"]),
              subtext: w.intl.string(w.t.bIB3bs),
              action: () => {
                V(e.command, e.section, m.Vh.IMAGE_RECS_SUBMENU, s)
              },
              icon: l.vdY,
              disabled: !G
            }, "".concat(e.command.id, "-edit"))]
          }) : null
        }, e.command.id)
      })
    })]
  })
}