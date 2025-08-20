/** Chunk was on 26475 **/
/** chunk id: 255514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
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
let q = ["user_urf", "message_urf", "guild_urf"];

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
let J = e => {
  let {
    node: t,
    reportType: n,
    reportSubType: J,
    history: Y,
    onSelectChild: K,
    onModalClose: $,
    onSubmit: ee,
    multiSelect: et,
    reportId: en,
    textInput: er
  } = e, ea = X(t, "checkbox"), ei = X(t, "text_line_resource"), eo = Q(t, "external_link"), el = Q(t, "free_text"), es = Q(t, "dropdown"), ec = X(t, "text"), ed = i.s.REPORT_TO_MOD.has(n.name), [eu, e_] = a.useState(false), [em, ep] = a.useState(false), [eg, ef] = a.useState(""), [eb, eh] = a.useState(() => ({})), [ex, ev] = a.useState(() => ({})), ej = a.useMemo(() => "message" === n.name ? n.record.channel_id : true, [n]), ey = a.useCallback(e => ({
    nodeRef: t.id,
    destination: e,
    textInput: null != el || null != es ? ex : true,
    multiSelect: null != ea ? {
      name: ea.name,
      state: eb
    } : true
  }), [t, el, es, ea, eb, ex]), eC = a.useMemo(() => (0, c.VP)(el, es, ea, ex, eb), [el, es, ea, ex, eb]), eO = function(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = H({}, ex);
    r[e] = {
      value: t,
      isValid: n
    }, ev(r)
  }, eI = e => {
    K(ey(e))
  };
  a.useEffect(() => {
    null != et && eh(et), null != er && ev(er)
  }, [et, er]), a.useEffect(() => {
    if (null != ea) {
      let e = ea.data;
      if (null != e)
        for (let [t, n, r, a] of e) a && eh(e => (function(e, t) {
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
        })(H({}, e), {
          [t]: n
        }))
    }
  }, [ea]), a.useEffect(() => {
    t.is_auto_submit && !em && (ep(true), ee(ey(["", t.id])))
  }, [t.is_auto_submit, em, ee, ey, t.id]);
  let eZ = (0, s.fW)(J),
    eT = null != X(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name);
  return (0, r.jsxs)("div", {
    className: V.container,
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      separator: false,
      direction: l.Z.Direction.VERTICAL,
      className: V.header,
      children: [(0, r.jsx)(A.Z, {
        element: X(t, "success")
      }), (0, r.jsx)(I.Z, {
        node: t,
        isModeratorReport: ed
      }), (0, r.jsx)(T.Z, {
        node: t
      })]
    }), (0, r.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: V.body,
      children: [null != ei && (0, r.jsx)(R.Z, {
        element: ei
      }), null != ec && (0, r.jsx)(D.Z, {
        element: ec
      }), null != X(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(N.Z, {
        message: n.record
      }), null != X(t, "user_preview") && "user" === n.name ? (0, r.jsx)(L.Z, {
        user: n.record
      }) : null, null != X(t, "widget_preview") && "widget" === n.name ? (0, r.jsx)(G.Z, {
        widget: n.widget,
        userId: n.user_id
      }) : null, null != X(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(C.Z, {
        guild: n.record
      }) : null, null != X(t, "breadcrumbs") && (0, r.jsx)(m.Z, {
        isModeratorReport: ed,
        history: Y
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
      }(t) && (0, r.jsxs)(w.Z, {
        children: [eT && (0, r.jsx)(Z.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: ej,
          reportId: en
        }), null != X(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, r.jsx)(_.Z, {
          user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
          channelId: ej,
          reportId: en,
          reportType: n
        }), !eT && null != X(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(k.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: ej,
          reportId: en
        }), null != X(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(f.Z, {
          message: n.record,
          reportId: en
        }), null != X(t, "leave_guild") && "guild" === n.name && (0, r.jsx)(S.Z, {
          guildId: n.record.id,
          reportId: en
        }), null != X(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(g.Z, {
          application: n.record,
          reportId: en
        }), null != X(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(E.Z, {
          application: n.record,
          reportId: en
        })]
      }), null != X(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eZ && (0, r.jsx)(M.Z, {
        settingsUpsells: eZ,
        channelId: n.record.channel_id,
        onModalClose: $,
        reportId: en,
        reportType: n,
        reportSubType: J
      }), null != X(t, "channel_preview") && "stage_channel" === n.name && (0, r.jsx)(B.Z, {
        stageInstance: n.record
      }), null != X(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, r.jsx)(O.Z, {
        event: n.record
      }), null != X(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, r.jsx)(j.Z, {
        entry: n.record
      }), null != X(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, r.jsx)(y.Z, {
        entry: n.record
      }), null != X(t, "app_preview") && "application" === n.name && (0, r.jsx)(u.Z, {
        entry: n.record
      }), null != ea && (0, r.jsx)(P.Z, {
        element: ea,
        onChange: (e, t) => {
          let n = H({}, eb);
          e in eb ? delete n[e] : n[e] = t, eh(n)
        },
        state: eb
      }), q.includes(n.name) && null != es && es.length > 0 && (0, r.jsx)(b.Z, {
        elements: es,
        onChange: eO,
        state: ex
      }), q.includes(n.name) && null != el && el.length > 0 && (0, r.jsx)(v.Z, {
        elements: el,
        onChange: eO,
        state: ex
      }), (0, r.jsxs)("div", {
        className: V.listContainer,
        children: [(0, r.jsx)(p.Z, {
          node: t,
          onSelectChild: eI
        }), null != eo && eo.length > 0 ? (0, r.jsx)(x.Z, {
          elements: eo
        }) : null]
      }), (0, r.jsx)(h.Z, {
        errorMessage: eg,
        onClose: () => {
          ef("")
        }
      })]
    }), (0, r.jsx)(d.Z, {
      button: t.button,
      submitting: eu,
      disableNext: eC,
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
              ef(""), eI(n)
            }).catch(e => {
              var t;
              (null == (t = e.body) ? true : t.code) === F.evJ.INVALID_FORM_BODY ? ef(z.intl.string(z.t.VjAAuL)) : ed ? ef(z.intl.string(W.default.psKFdH)) : ef(z.intl.string(z.t.h6D8V1))
            }).finally(() => {
              e_(false)
            })
        }
      },
      onBackClicked: e.onNavigateBack,
      canNavigateBack: Y.length > 0
    }), (0, r.jsx)(o.olH, {
      "data-migration-pending": true,
      className: V.closeButton,
      onClick: $
    })]
  })
}