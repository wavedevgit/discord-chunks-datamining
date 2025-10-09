/** Chunk was on 73705 **/
/** chunk id: 255514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk741086 = require("./741086.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk277537 = require("./277537.js"),
  Chunk631885 = require("./631885.js"),
  Chunk981312 = require("./981312.js"),
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
  Chunk680050 = require("./680050.jsx"),
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

function K(e) {
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
let J = ["user_urf", "message_urf", "guild_urf"];

function Y(e, t) {
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

function $(e, t) {
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
let ee = e => {
  let {
    node: t,
    reportType: n,
    reportSubType: ee,
    history: et,
    onSelectChild: en,
    onModalClose: er,
    onSubmit: ei,
    multiSelect: el,
    reportId: ea,
    textInput: eo
  } = e, es = Y(t, "checkbox"), ec = Y(t, "text_line_resource"), ed = $(t, "external_link"), eu = $(t, "free_text"), e_ = $(t, "dropdown"), em = Y(t, "text"), ep = l.s.REPORT_TO_MOD.has(n.name), [eg, ef] = i.useState(false), [eh, eb] = i.useState(false), [ex, ev] = i.useState(""), [ej, ey] = i.useState(() => ({})), [eO, eC] = i.useState(() => ({})), eI = i.useMemo(() => "message" === n.name ? n.record.channel_id : true, [n]), eZ = i.useCallback(e => ({
    nodeRef: t.id,
    destination: e,
    textInput: null != eu || null != e_ ? eO : true,
    multiSelect: null != es ? {
      name: es.name,
      state: ej
    } : true
  }), [t, eu, e_, es, ej, eO]), eS = i.useMemo(() => (0, _.VP)(eu, e_, es, eO, ej), [eu, e_, es, eO, ej]), eT = function(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = K({}, eO);
    r[e] = {
      value: t,
      isValid: n
    }, eC(r)
  }, eN = e => {
    en(eZ(e))
  };
  i.useEffect(() => {
    null != el && ey(el), null != eo && eC(eo)
  }, [el, eo]), i.useEffect(() => {
    if (null != es) {
      let e = es.data;
      if (null != e)
        for (let [t, n, r, i] of e) i && ey(e => (function(e, t) {
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
        })(K({}, e), {
          [t]: n
        }))
    }
  }, [es]), i.useEffect(() => {
    t.is_auto_submit && !eh && (eb(true), ei(eZ(["", t.id])))
  }, [t.is_auto_submit, eh, ei, eZ, t.id]);
  let eP = (0, u.fW)(ee),
    eE = null != Y(t, "ignore_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name),
    ek = (0, d.U)(),
    ew = (0, s.PO)("share_with_parent_element"),
    eD = (0, c.zu)(),
    eR = ek && eD.length > 0 && ew && null != Y(t, "share_with_parents");
  return (0, r.jsxs)("div", {
    className: Q.container,
    children: [(0, r.jsxs)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      direction: o.Z.Direction.VERTICAL,
      className: Q.header,
      children: [(0, r.jsx)(U.Z, {
        element: Y(t, "success")
      }), (0, r.jsx)(T.Z, {
        node: t,
        isModeratorReport: ep
      }), (0, r.jsx)(P.Z, {
        node: t
      })]
    }), (0, r.jsxs)(a.hzk, {
      "data-migration-pending": true,
      className: Q.body,
      children: [null != ec && (0, r.jsx)(W.Z, {
        element: ec
      }), null != em && (0, r.jsx)(G.Z, {
        element: em
      }), null != Y(t, "message_preview") && ("message" === n.name || "first_dm" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(k.Z, {
        message: n.record
      }), null != Y(t, "user_preview") && "user" === n.name ? (0, r.jsx)(z.Z, {
        user: n.record
      }) : null, null != Y(t, "widget_preview") && "widget" === n.name ? (0, r.jsx)(F.Z, {
        widget: n.widget,
        userId: n.user_id
      }) : null, null != Y(t, "guild_preview") && "guild" === n.name ? (0, r.jsx)(Z.Z, {
        guild: n.record
      }) : null, null != Y(t, "breadcrumbs") && (0, r.jsx)(f.Z, {
        isModeratorReport: ep,
        history: et
      }), function(e) {
        let {
          elements: t
        } = e;
        return t.some(e => {
          let {
            type: t
          } = e;
          return q.O.includes(t)
        })
      }(t) && (0, r.jsxs)(R.Z, {
        children: [eE && (0, r.jsx)(N.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: eI,
          reportId: ea
        }), eR && (0, r.jsx)(B.Z, {
          parents: eD
        }), null != Y(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name || "application" === n.name && null != n.record.bot) && (0, r.jsx)(g.Z, {
          user: "application" === n.name ? n.record.bot : "user" === n.name ? n.record : n.record.author,
          channelId: eI,
          reportId: ea,
          reportType: n
        }), !eE && null != Y(t, "mute_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(D.Z, {
          user: "user" === n.name ? n.record : n.record.author,
          channelId: eI,
          reportId: ea
        }), null != Y(t, "delete_message") && ("message" === n.name || "report_to_mod_message" === n.name) && (0, r.jsx)(x.Z, {
          message: n.record,
          reportId: ea
        }), null != Y(t, "leave_guild") && "guild" === n.name && (0, r.jsx)(E.Z, {
          guildId: n.record.id,
          reportId: ea
        }), null != Y(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(b.Z, {
          application: n.record,
          reportId: ea
        }), null != Y(t, "deauthorize_app") && "application" === n.name && (0, r.jsx)(M.Z, {
          application: n.record,
          reportId: ea
        })]
      }), null != Y(t, "settings_upsells") && ("message" === n.name || "report_to_mod_message" === n.name) && null != eP && (0, r.jsx)(A.Z, {
        settingsUpsells: eP,
        channelId: n.record.channel_id,
        onModalClose: er,
        reportId: ea,
        reportType: n,
        reportSubType: ee
      }), null != Y(t, "channel_preview") && "stage_channel" === n.name && (0, r.jsx)(L.Z, {
        stageInstance: n.record
      }), null != Y(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, r.jsx)(S.Z, {
        event: n.record
      }), null != Y(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, r.jsx)(C.Z, {
        entry: n.record
      }), null != Y(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, r.jsx)(I.Z, {
        entry: n.record
      }), null != Y(t, "app_preview") && "application" === n.name && (0, r.jsx)(p.Z, {
        entry: n.record
      }), null != es && (0, r.jsx)(w.Z, {
        element: es,
        onChange: (e, t) => {
          let n = K({}, ej);
          e in ej ? delete n[e] : n[e] = t, ey(n)
        },
        state: ej
      }), J.includes(n.name) && null != e_ && e_.length > 0 && (0, r.jsx)(v.Z, {
        elements: e_,
        onChange: eT,
        state: eO
      }), J.includes(n.name) && null != eu && eu.length > 0 && (0, r.jsx)(O.Z, {
        elements: eu,
        onChange: eT,
        state: eO
      }), (0, r.jsxs)("div", {
        className: Q.listContainer,
        children: [(0, r.jsx)(h.Z, {
          node: t,
          onSelectChild: eN,
          nodeMap: e.nodeMap
        }), null != ed && ed.length > 0 ? (0, r.jsx)(y.Z, {
          elements: ed
        }) : null]
      }), (0, r.jsx)(j.Z, {
        errorMessage: ex,
        onClose: () => {
          ev("")
        }
      })]
    }), (0, r.jsx)(m.Z, {
      button: t.button,
      submitting: eg,
      disableNext: eS,
      isModeratorReport: ep,
      onClick: t => {
        switch (t.type) {
          case "done":
          case "cancel":
            er();
            break;
          case "next":
            eN(["", t.target]);
            break;
          case "submit":
            ef(true);
            let n = ["", e.successNodeId];
            ei(eZ(n)).then(() => {
              ev(""), eN(n)
            }).catch(e => {
              var t;
              (null == (t = e.body) ? true : t.code) === V.evJ.INVALID_FORM_BODY ? ev(X.intl.string(X.t.VjAAuL)) : ep ? ev(X.intl.string(H.default.psKFdH)) : ev(X.intl.string(X.t.h6D8V1))
            }).finally(() => {
              ef(false)
            })
        }
      },
      onBackClicked: e.onNavigateBack,
      canNavigateBack: et.length > 0
    }), (0, r.jsx)(a.olH, {
      "data-migration-pending": true,
      className: Q.closeButton,
      onClick: er
    })]
  })
}