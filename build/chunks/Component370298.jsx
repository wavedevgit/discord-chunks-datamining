/** Chunk was on web.js **/
/** chunk id: 370298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
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

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let {
    toggleShowMenu: t,
    showMenu: n,
    className: l,
    channelId: c,
    imageUrl: u,
    mimeType: d
  } = e, f = (0, o.e7)([I.Z], () => I.Z.getChannel(c)), {
    Component: _,
    events: p,
    play: h
  } = (0, a.w)(), [m, g] = i.useState(false), E = i.useRef(null);
  return null == f ? null : (m || h(), (0, r.jsx)(s.yRy, {
    targetElementRef: E,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(U, {
        onClose: t,
        channel: f,
        imageUrl: u,
        mimeType: d
      })
    },
    position: "right",
    align: "top",
    animation: s.yRy.Animation.NONE,
    onRequestClose: t,
    shouldShow: n,
    children: e => {
      let {
        onClick: n
      } = e;
      return (0, r.jsx)(s.ua7, {
        text: w.intl.string(w.t.emnnEB),
        children: e => (0, r.jsx)(s.P3F, k(L({}, e), {
          className: l,
          focusProps: {
            offset: 2
          },
          innerRef: E,
          onClick: t,
          onMouseEnter: () => {
            g(true), p.onMouseEnter()
          },
          onMouseLeave: p.onMouseLeave,
          "aria-label": w.intl.string(w.t.emnnEB),
          children: (0, r.jsx)(_, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor"
          })
        }))
      })
    }
  }))
}

function U(e) {
  let {
    onSelect: t,
    onClose: n,
    channel: a,
    imageUrl: I,
    mimeType: x
  } = e, j = (0, o.e7)([S.Z], () => S.Z.getGuild(a.guild_id)), {
    fetchState: k,
    imageRecCommandContexts: M
  } = (0, N.h)({
    channelId: a.id
  }), U = k === R.M.FETCHING, G = (0, E.g)(a), B = (0, _.PL)(true, true), Z = (0, _.LD)(a.guild_id, true);
  i.useEffect(() => {
    (k === R.M.ERROR || k === R.M.FETCHED && 0 === M.length) && n()
  }, [k, M.length, n]), i.useEffect(() => {
    var e, t;
    if (U || 0 === M.length) return;
    let n = [];
    M.forEach(e => {
      n.push(Number(e.command.id)), null != e.overrideSendCommand && n.push(Number(e.overrideSendCommand.id))
    }), A.default.track(P.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
      guild_id: null != (e = null == a ? true : a.guild_id) ? e : "",
      channel_id: null != (t = null == a ? true : a.id) ? t : "",
      application_ids: [...M.map(e => Number(e.command.applicationId))],
      command_ids: n
    })
  }, [M, a, U]);
  let F = i.useCallback(async e => {
      let t = await fetch(I),
        n = await t.arrayBuffer(),
        r = x.join("/"),
        i = new File([n], "image".concat((0, N.Q)({
          contentType: r
        })), {
          type: r
        });
      l.Z.setFile({
        channelId: a.id,
        id: e,
        file: {
          id: e,
          file: i,
          platform: u.ow.WEB,
          origin: "unknown:app_recommendation"
        },
        draftType: T.d.SlashCommand
      })
    }, [I, a.id, x]),
    V = i.useCallback(async (e, t, n, r) => {
      var i, o;
      if (!G) return;
      let s = e.applicationId,
        l = (null == (i = B.result) ? true : i.sections[s]) != null,
        u = (null == (o = Z.result) ? true : o.sections[s]) != null;
      await F(r), null != p.Z.getActiveCommand(a.id) && f.Po({
        channelId: a.id,
        command: null,
        section: null
      }), l || u || _.ZP.queryInstallOnDemandApp(e.applicationId, a.id), f.Po({
        channelId: a.id,
        command: e,
        section: t,
        location: n,
        source: d._b.TEXT,
        initialValues: {
          [r]: {
            type: c.jw.ATTACHMENT,
            name: r,
            value: "image"
          }
        },
        commandOrigin: n === h.Vh.IMAGE_RECS_SUBMENU ? h.bB.IMAGE_RECS_SUBMENU : h.bB.IMAGE_RECS_MENU
      }), (0, O.Mo)({
        command: e,
        location: n,
        sectionName: t.name
      }), C.S.dispatch(P.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: a.id
      })
    }, [a.id, F, G, B, Z]),
    H = i.useCallback(async (e, t, n) => {
      var r, i;
      let o = e.applicationId,
        s = (null == (r = B.result) ? true : r.sections[o]) != null,
        l = (null == (i = Z.result) ? true : i.sections[o]) != null;
      s || l || _.ZP.queryInstallOnDemandApp(e.applicationId, a.id);
      let {
        isAuthorized: c
      } = await (0, y.L)({
        applicationId: o,
        channel: a,
        commandIntegrationTypes: e.integration_types,
        appLauncherContext: {
          entrypoint: d._b.TEXT,
          location: t,
          sectionName: true
        }
      });
      (0, m.qJ)({
        command: e,
        location: t,
        source: d._b.TEXT
      }), c && (await F(n), await (0, g.Z)({
        command: L({}, e),
        optionValues: {
          [n]: [{
            text: "image",
            type: "text"
          }]
        },
        context: {
          channel: a,
          guild: j
        },
        commandOrigin: t === h.Vh.IMAGE_RECS_SUBMENU ? h.bB.IMAGE_RECS_SUBMENU : h.bB.IMAGE_RECS_MENU
      }))
    }, [a, j, B, Z, F]);
  return (0, r.jsxs)(s.v2r, {
    onSelect: t,
    navId: "image-context-commands-popout",
    onClose: n,
    "aria-label": w.intl.string(w.t.P3ShV1),
    children: [(0, r.jsx)(s.sNh, {
      id: "menu-image-rec-header",
      render: () => (0, r.jsx)(s.Text, {
        className: D.title,
        variant: "text-md/bold",
        color: "header-primary",
        children: w.intl.string(w.t.emnnEB)
      }),
      navigable: false,
      disabled: true
    }, "menu-image-rec-header"), (0, r.jsx)(s.Clw, {}), U ? (0, r.jsx)(s.sNh, {
      id: "menu-image-recs-placeholder",
      render: () => (0, r.jsx)(v.Z, {}),
      navigable: false,
      disabled: true
    }, "menu-image-recs-placeholder") : (0, r.jsx)(r.Fragment, {
      children: M.filter(e => null != e.imageOption).map(e => {
        let t = e.overrideSendCommand,
          n = null == e ? true : e.overrideSendCommandInfo,
          i = null != t && null != n,
          o = e.onlyAllowEdit || null != n && null == t,
          l = e.imageOption;
        return null == l ? null : (0, r.jsx)(s.sNh, {
          id: e.command.id,
          action: () => {
            o ? V(e.command, e.section, h.Vh.IMAGE_RECS_MENU, l) : H(i ? t : e.command, h.Vh.IMAGE_RECS_MENU, i ? n.imageOption : l)
          },
          label: e.command.displayName,
          subtext: e.command.displayDescription,
          subtextLineClamp: 1,
          icon: o ? s.vdY : i ? true : s.Uuj,
          iconLeft: () => (0, r.jsx)(b.Z, {
            channel: a,
            section: e.section,
            width: 32,
            height: 32,
            isSquircle: true,
            selectable: false
          }),
          iconLeftSize: "lg",
          showImageFirst: true,
          disabled: !G && o,
          children: i ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.sNh, {
              id: "".concat(e.command.id, "-send"),
              label: w.intl.string(w.t["M+BhUV"]),
              subtext: w.intl.string(w.t.zXFjJS),
              action: () => H(t, h.Vh.IMAGE_RECS_SUBMENU, n.imageOption),
              icon: s.Uuj
            }, "".concat(e.command.id, "-send")), (0, r.jsx)(s.sNh, {
              id: "".concat(e.command.id, "-edit"),
              label: w.intl.string(w.t["wTaN+P"]),
              subtext: w.intl.string(w.t.bIB3bm),
              action: () => {
                V(e.command, e.section, h.Vh.IMAGE_RECS_SUBMENU, l)
              },
              icon: s.vdY,
              disabled: !G
            }, "".concat(e.command.id, "-edit"))]
          }) : null
        }, e.command.id)
      })
    })]
  })
}