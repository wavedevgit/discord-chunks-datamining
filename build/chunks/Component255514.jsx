/** Chunk was on 55777 **/
/** chunk id: 255514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk741086 = require("./741086.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk155647 = require("./155647.js"),
  Chunk185625 = require("./185625.js"),
  Chunk273389 = require("./273389.jsx"),
  Chunk778231 = require("./778231.jsx"),
  Chunk816342 = require("./816342.jsx"),
  Chunk15667 = require("./15667.jsx"),
  Chunk76264 = require("./76264.jsx"),
  Chunk805746 = require("./805746.jsx"),
  Chunk822686 = require("./822686.jsx"),
  Chunk356110 = require("./356110.jsx"),
  Chunk730719 = require("./730719.jsx"),
  Chunk996701 = require("./996701.jsx"),
  Chunk238122 = require("./238122.jsx"),
  Chunk273514 = require("./273514.jsx"),
  Chunk995712 = require("./995712.jsx"),
  Chunk763431 = require("./763431.jsx"),
  Chunk234937 = require("./234937.jsx"),
  Chunk473121 = require("./473121.jsx"),
  Chunk497954 = require("./497954.jsx"),
  Chunk449413 = require("./449413.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk316617 = require("./316617.jsx"),
  Chunk15682 = require("./15682.jsx"),
  Chunk189472 = require("./189472.jsx"),
  Chunk749534 = require("./749534.jsx"),
  Chunk157759 = require("./157759.jsx"),
  Chunk521332 = require("./521332.jsx"),
  Chunk905434 = require("./905434.jsx"),
  Chunk196627 = require("./196627.jsx"),
  Chunk289809 = require("./289809.jsx"),
  Chunk739319 = require("./739319.jsx"),
  Chunk842401 = require("./842401.jsx"),
  Chunk229916 = require("./229916.jsx"),
  Chunk375790 = require("./375790.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk520310 = require("./520310.js");

function q(e) {
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
let V = ["user_urf", "message_urf", "guild_urf"];

function X(e, t) {
  let {
    elements: n
  } = e;
  return n.find(e => {
    let {
      type: n
    } = e;
    return n === t
  })
}

function Q(e, t) {
  let {
    elements: n
  } = e;
  return n.filter(e => {
    let {
      type: n
    } = e;
    return n === t
  })
}
let K = e => {
  let {
    node: t,
    reportType: n,
    reportSubType: K,
    history: J,
    onSelectChild: Y,
    onModalClose: $,
    onSubmit: ee,
    multiSelect: et,
    reportId: en,
    textInput: er
  } = e, ei = X(t, "checkbox"), ea = X(t, "text_line_resource"), el = Q(t, "external_link"), eo = Q(t, "free_text"), es = Q(t, "dropdown"), ec = X(t, "text"), ed = a.s.REPORT_TO_MOD.has(n.name), [eu, e_] = i.useState(false), [em, ep] = i.useState(false), [ef, eg] = i.useState(""), [eb, ex] = i.useState(() => ({})), [eh, ev] = i.useState(() => ({})), ej = i.useMemo(() => "message" === n.name ? n.record.channel_id : true, [n]), ey = i.useCallback(e => ({
    nodeRef: t.id,
    destination: e,
    textInput: null != eo || null != es ? eh : true,
    multiSelect: null != ei ? {
      name: ei.name,
      state: eb
    } : true
  }), [t, eo, es, ei, eb, eh]), eO = i.useMemo(() => (0, c.VP)(eo, es, ei, eh, eb), [eo, es, ei, eh, eb]), eC = function(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = q({}, eh);
    r[e] = {
      value: t,
      isValid: n
    }, ev(r)
  }, eI = e => {
    Y(ey(e))
  };
  i.useEffect(() => {
    null != et && ex(et), null != er && ev(er)
  }, [et, er]), i.useEffect(() => {
    if (null != ei) {
      let e = ei.data;
      if (null != e)
        for (let [t, n, r, i] of e) i && ex(e => (function(e, t) {
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
        })(q({}, e), {
          [t]: n
        }))
    }
  }, [ei]), i.useEffect(() => {
    t.is_auto_submit && !em && (ep(true), ee(ey(["", t.id])))
  }, [t.is_auto_submit, em, ee, ey, t.id]);
  let eZ = (0, s.fW)(K),
    eS = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name);
  return (0, r.jsxs)("div", {
    className: H.container,
    children: [(0, r.jsxs)(l.xBx, {
      "data-migration-pending": true,
      separator: false,
      direction: o.Z.Direction.VERTICAL,
      className: H.header,
      children: [(0, r.jsx)(R.Z, {
        element: X(t, "success")
      }), (0, r.jsx)(I.Z, {
        node: t,
        isModeratorReport: ed
      }), (0, r.jsx)(S.Z, {
        node: t
      })]
    }), (0, r.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: H.body,
      children: [null != ea && (0, r.jsx)(A.Z, {
        element: ea
      }), null != ec && (0, r.jsx)(M.Z, {
        element: ec
      }), null != X(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(N.Z, {
        message: n.record
      }), null != X(t, "user_preview") && "user" === n.name ? (0, r.jsx)(L.Z, {
        user: n.record
      }) : null, null != X(t, "widget_preview") && "widget" === n.name ? (0, r.jsx)(G.Z, {
        widget: n.widget,
        userId: n.user_id
      }) : null, null != X(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(O.Z, {
        guild: n.record
      }) : null, null != X(t, "breadcrumbs") && (0, r.jsx)(m.Z, {
        isModeratorReport: ed,
        history: J
      }), function(e) {
        let {
          elements: t
        } = e;
        return t.some(e => {
          let {
            type: t
          } = e;
          return U.O.includes(t)
        })
      }(t) && (0, r.jsxs)(E.Z, {
        children: [eS && (0, r.jsx)(Z.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: ej,
          reportId: en
        }), null != X(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, r.jsx)(_.Z, {
          user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
          channelId: ej,
          reportId: en,
          reportType: n
        }), !eS && null != X(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(k.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: ej,
          reportId: en
        }), null != X(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(g.Z, {
          message: n.record,
          reportId: en
        }), null != X(t, "leave_guild") && "guild" === n.name && (0, r.jsx)(T.Z, {
          guildId: n.record.id,
          reportId: en
        }), null != X(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(f.Z, {
          application: n.record,
          reportId: en
        }), null != X(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(w.Z, {
          application: n.record,
          reportId: en
        })]
      }), null != X(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eZ && (0, r.jsx)(B.Z, {
        settingsUpsells: eZ,
        channelId: n.record.channel_id,
        onModalClose: $,
        reportId: en,
        reportType: n,
        reportSubType: K
      }), null != X(t, "channel_preview") && "stage_channel" === n.name && (0, r.jsx)(D.Z, {
        stageInstance: n.record
      }), null != X(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, r.jsx)(C.Z, {
        event: n.record
      }), null != X(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, r.jsx)(j.Z, {
        entry: n.record
      }), null != X(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, r.jsx)(y.Z, {
        entry: n.record
      }), null != X(t, "app_preview") && "application" === n.name && (0, r.jsx)(u.Z, {
        entry: n.record
      }), null != ei && (0, r.jsx)(P.Z, {
        element: ei,
        onChange: (e, t) => {
          let n = q({}, eb);
          e in eb ? delete n[e] : n[e] = t, ex(n)
        },
        state: eb
      }), V.includes(n.name) && null != es && es.length > 0 && (0, r.jsx)(b.Z, {
        elements: es,
        onChange: eC,
        state: eh
      }), V.includes(n.name) && null != eo && eo.length > 0 && (0, r.jsx)(v.Z, {
        elements: eo,
        onChange: eC,
        state: eh
      }), (0, r.jsxs)("div", {
        className: H.listContainer,
        children: [(0, r.jsx)(p.Z, {
          node: t,
          onSelectChild: eI
        }), null != el && el.length > 0 ? (0, r.jsx)(h.Z, {
          elements: el
        }) : null]
      }), (0, r.jsx)(x.Z, {
        errorMessage: ef,
        onClose: () => {
          eg("")
        }
      })]
    }), (0, r.jsx)(d.Z, {
      button: t.button,
      submitting: eu,
      disableNext: eO,
      isModeratorReport: ed,
      onClick: t => {
        switch (t.type) {
          case "done":
          case "cancel":
            $();
            break;
          case "next":
            eI(["", t.target]);
            break;
          case "submit":
            e_(true);
            let n = ["", e.successNodeId];
            ee(ey(n)).then(() => {
              eg(""), eI(n)
            }).catch(e => {
              var t;
              (null == (t = e.body) ? true : t.code) === W.evJ.INVALID_FORM_BODY ? eg(z.intl.string(z.t.VjAAuL)) : ed ? eg(z.intl.string(F.default.psKFdH)) : eg(z.intl.string(z.t.h6D8V1))
            }).finally(() => {
              e_(false)
            })
        }
      },
      onBackClicked: e.onNavigateBack,
      canNavigateBack: J.length > 0
    }), (0, r.jsx)(l.olH, {
      "data-migration-pending": true,
      className: H.closeButton,
      onClick: $
    })]
  })
}